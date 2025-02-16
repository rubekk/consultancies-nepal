<script>
  import testGuidesData from "$lib/data/test-guides-short.json";
  import TestGuideCard from "../../components/card/TestGuideCard.svelte";
</script>

<svelte:head>
  <title>StudyAbroadNP - Study Abroad Destinations</title>
</svelte:head>

<div class="countries">
  <div class="countries-inner">
    {#each testGuidesData as tData}
      <TestGuideCard testGuideData={tData} />
    {/each}
  </div>
</div>

<style>
  .countries-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
  }
</style>
