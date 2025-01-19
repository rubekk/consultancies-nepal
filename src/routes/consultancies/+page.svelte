<script>
    import Card from "../../components/Card.svelte";
    import { data } from "$lib/index.js";
</script>

<svelte:head>
  <title>StudyAbroadNP - Top Consultancies in Nepal</title>
</svelte:head>

<div class="consultancies">
    <div class="consultancies-inner">
        {#each data as indData}
        <Card name={indData.name} address={indData.address? indData.address: "Putalisadak, Kathmandu"} imgSrc={indData.thumbnailImage? indData.thumbnailImage : ""}/>
        {/each}
    </div>
</div>
