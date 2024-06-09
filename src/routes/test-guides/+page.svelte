<script>
    import { testData } from "$lib/index.js";
    import TestCard from "../../components/TestCard.svelte";
    import ieltsImg from "$lib/img/ielts.jpeg";    
    import pteImg from "$lib/img/pte.jpeg";    
    import satImg from "$lib/img/sat.jpeg";    
    import toeflImg from "$lib/img/toefl.jpeg";    
    import greImg from "$lib/img/gre.jpeg";    
    import gmatImg from "$lib/img/gmat.jpeg";    

    let testImages= [ieltsImg, pteImg, satImg, toeflImg, greImg, gmatImg];
</script>

<svelte:head>
  <title>StudyAbroadNP - Language Test Guides</title>
</svelte:head>

<div class="test-guides">
    <div class="sub-title">Test Guides</div>
    <div class="test-guides-inner">
        <div class="test-guides-inner">
            {#each testData as tData, i}
            <TestCard testData={tData} imgSrc={testImages[i]}/>
            {/each}
        </div>
    </div>
</div>
