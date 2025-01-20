<script>
  import { testData } from "$lib/index.js";
  import TestCard from "../../components/TestCard.svelte";
</script>

<svelte:head>
  <title>StudyAbroadNP - Language Test Guides</title>
</svelte:head>

<<<<<<< HEAD
<div class="test-guides">
  <div class="test-guides-inner">
    {#each testData as tData}
      <TestCard testData={tData} />
    {/each}
  </div>
=======
<div class="test-guides-pg">
    <div class="test-guides-inner">
        {#each testData as tData}
            <TestCard testData={tData} />
        {/each}
    </div>
>>>>>>> origin/master
</div>
