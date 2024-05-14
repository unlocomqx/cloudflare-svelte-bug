<script lang="ts">
    export let data;
</script>

<p>Users:</p>
<ul>
    {#each data.users as { id, name }}
        <li>{id} - {name}</li>
    {/each}
</ul>