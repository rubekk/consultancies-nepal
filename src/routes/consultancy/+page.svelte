<script>
    import Card from "../../components/Card.svelte";
    import { data } from "$lib/index.js";
</script>

<div class="consultancies">
    <div class="page-title">List of Consultancies</div>
    <div class="consultancies-inner">
        {#each data as indData}
        <Card name={indData.name} address="Bagbazar, Kathmandu" />
        {/each}
    </div>
</div>

<style>
    .consultancies{
        padding: 3rem 2rem 4rem;
    }
    .page-title{
        margin: 0 auto 2.5rem;
        width: max-content;
        text-align: center;
        font-size: 2rem;
        border-bottom: 2px solid var(--green);
    }
    .consultancies-inner{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 15px;
    }
</style>