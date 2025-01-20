<script>
  import Card from "../../components/Card.svelte";
  import { data } from "$lib/index.js";

  let sortedData = data.slice().sort((a, b) => {
    if (a.name && b.name) {
      return a.name.localeCompare(b.name); 
    }
    return 0;
  });
</script>

<svelte:head>
  <title>StudyAbroadNP - Top Consultancies in Nepal</title>
</svelte:head>

<div class="consultancies">
  <div class="consultancies-inner">
    {#each sortedData as indData}
      <Card
        name={indData.name}
        address={indData.address ? indData.address : "Putalisadak, Kathmandu"}
        imgSrc={indData.thumbnailImage ? indData.thumbnailImage : ""}
      />
    {/each}
  </div>
</div>

<style>
  .consultancies-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
  }
</style>
