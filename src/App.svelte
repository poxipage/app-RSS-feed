<script lang="ts">
  import parse from "rss-to-json";
  import { getSelected } from "./state";
  import RssEnrty from "./RSSEnrty.svelte";
  const selected = getSelected()

  let feed = [];
  async function fetchRSS(RSS_URL) {
    feed = []
    let rss = await parse(RSS_URL)
    console.log(rss)
    rss.items.forEach(item => {
      feed.push({title: item.title, link: typeof item.link == "string" ? item.link : item.link[4].href, description: (item.description && item.description.length > 0) ? item.description.replace(/(<([^>]+)>)/ig, "") : undefined, pubDate: item.published, image: item.media.thumbnail ? item.media.thumbnail.url : undefined})
    })
    // feed = []
    // await fetch(RSS_URL)
    // .then(response => response.text())
    // .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    // .then(data => {
    //   console.log(data)
    //   const media = data.querySelector("rss").attributes.getNamedItem("xmlns:media")
    //   const nameSpace = media ? media.value : undefined;
    //   const items = data.querySelectorAll("item");
    //   items.forEach(el => {
    //     const mediaContent = nameSpace ? [].slice.call(el.getElementsByTagNameNS(nameSpace, "content"))[0] : undefined
    //     const mediaThumbnail = nameSpace ? [].slice.call(el.getElementsByTagNameNS(nameSpace, "thumbnail"))[0] : undefined
    //     const imageURL = mediaContent?.attributes?.url ? mediaContent.attributes.url.value : mediaThumbnail ? mediaThumbnail.attributes.url.value : undefined
    //     feed.push({title: cleanString(el.querySelector("title").innerHTML), link: el.querySelector("link").innerHTML, description: cleanString(el.querySelector("description").innerHTML), pubDate: el.querySelector("pubDate").innerHTML, image: imageURL})
    //   });
    // });
    feed = feed;
  }
  $: fetchRSS($selected.url)

  function cleanString(dirtystring: string) {
    console.log(dirtystring)
    const temp = dirtystring.split('<![CDATA[')
    const clean = temp[temp.length - 1].split(']]>')[0]
    console.log(clean)
    return clean
  }

</script>

<div class="h-full w-full justify-center items-center">
  <h2> {$selected.title} </h2>
  {#each feed as entry}
    <RssEnrty {entry} />
  {/each}
</div>

<style>
</style>
