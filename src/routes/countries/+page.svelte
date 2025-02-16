<script>
  import countriesData from "$lib/data/countries-short.json";
  import CountryCard from "../../components/card/CountryCard.svelte";
</script>

<svelte:head>
  <title>StudyAbroadNP - Study Abroad Destinations</title>
</svelte:head>

<div class="countries">
  <div class="countries-inner">
    {#each countriesData as cData}
      <CountryCard countryData={cData} />
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
