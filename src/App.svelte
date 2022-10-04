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
