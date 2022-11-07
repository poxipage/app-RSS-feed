<script lang="ts">
    import dayjs from 'dayjs'
    import relativeTime from 'dayjs/plugin/relativeTime'
    dayjs().format()
    dayjs.extend(relativeTime)


    type Entry = {title: String, link: string, description: string, pubDate: Date, image: string}
    export let entry: Entry
    const time = dayjs(entry.pubDate).fromNow()
</script>


<a href={entry.link} class="flex entry" target="_blank">
    {#if entry.image}
        <img src={entry.image} class="image" height="auto" />
    {/if}
    <div>
        <p class="text-base-content" style="font-weight: bold;">{entry.title}</p>
        {#if entry.description && typeof entry.description == "string"}
            <p class="text-base-content">{entry.description}</p>
        {/if}
    </div>
</a>
<p>- {time}</p>

<style>
    .entry {
        padding-top: 10px;
        padding-bottom: 10px;
        max-height: 80px;
        overflow-y: hidden;
    }
    .image {
        width: 90px;
        height: 75px;
        object-fit: cover;
        margin-right: 10px;
    }
</style>
