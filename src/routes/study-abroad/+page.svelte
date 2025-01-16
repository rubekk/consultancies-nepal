<script>
  import CountryCard from "../../components/CountryCard.svelte";
  import { countryData } from "$lib/index.js";
</script>

<svelte:head>
  <title>StudyAbroadNP - Study Abroad Destinations</title>
</svelte:head>

<div class="countries">
  <div class="countries-inner">
    {#each countryData as cData}
      <CountryCard countryData={cData} />
    {/each}
  </div>
</div>

<style>
  .countries {
    padding: 3rem 2rem 4rem;
  }
  .page-title {
    margin: 0 auto 2.5rem;
    width: max-content;
    text-align: center;
    font-size: 2rem;
    border-bottom: 2px solid var(--blue);
  }
  .countries-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
  }
</style>
