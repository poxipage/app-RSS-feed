<script lang="ts">
    import { getEntries, getSelected } from "./state";

    const entries = getEntries()
    const selected = getSelected()
</script>


<div class="dropdown w-full h-4/5 mb-20 pb-20 justify-self-center p-1">
  <label tabindex="0" class="btn w-full">Select RSS feed</label>
  <ul tabindex="0" class="dropdown-content menu  shadow bg-base-100 rounded-box w-9/10 overflow-auto max-h-full">
    {#each $entries as entry}
    <li><a on:click={() => $selected = entry}>{entry.title}</a></li>
        
    {/each}
  </ul>
</div>
