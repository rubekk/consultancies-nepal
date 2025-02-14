<script>
    import TestGuideCard from "../../components/card/TestGuideCard.svelte";
    import { testData } from "$lib/index.js";
  </script>
  
  <svelte:head>
    <title>StudyAbroadNP - Study Abroad Destinations</title>
  </svelte:head>
  
  <div class="countries">
    <div class="countries-inner">
      {#each testData as tData}
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
  