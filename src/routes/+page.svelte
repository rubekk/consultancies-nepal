<script>
    import "./app.css";
    import { data, faqData, countryData, testData, classesData } from "$lib/index.js";
    import Card from "../components/Card.svelte";
    import CountryCard from "../components/CountryCard.svelte";
    import TestCard from "../components/TestCard.svelte";
    import ClassCard from "../components/ClassCard.svelte";
    import ieltsImg from "$lib/img/ielts.jpeg";    
    import pteImg from "$lib/img/pte.jpeg";    
    import satImg from "$lib/img/sat.jpeg";    
    import toeflImg from "$lib/img/toefl.jpeg";    
    import greImg from "$lib/img/gre.jpeg";    
    import gmatImg from "$lib/img/gmat.jpeg";    
    
    let activeQuestion=0,
        faqAnswer=faqData[activeQuestion].answer,
        testImages= [ieltsImg, pteImg, satImg, toeflImg, greImg, gmatImg],
        openClassImgModal= false,
        classImgModalSrc= "";

    const upcommingClassesClick= e=> {
        if(e.target.tagName !== "IMG") return;

        classImgModalSrc= e.target.getAttribute("src");
        openClassImgModal= true;
    }

    const closeModal= e=>{
        if(e.target.tagName !== "IMG") openClassImgModal= false;
    }

    const handleFaq=i=>{
        if(i==activeQuestion) return;
        activeQuestion=i;
        faqAnswer=faqData[activeQuestion].answer;
    }
</script>

<svelte:head>
  <title>StudyAbroadNP - Home</title>
</svelte:head>

<div class="landing-img">
    <div class="landing-tagline">
        <div class="tagline-txt">
            Explore the best <span>Consultancy</span><br>for abroad study!
        </div>
    </div>
</div>

<div class="top-consultancies">
    <div class="sub-title">Top Consultancies</div>
    <div class="top-consultancies-inner">
        {#each data as indData,i}
        {#if i<=5}
        <Card name={indData.name} address={indData.address? indData.address: "Putalisadak, Kathmandu"} imgSrc={indData.thumbnailImage? indData.thumbnailImage : ""}/>
        {/if}
        {/each}
    </div>
    <div class="btn-div">
        <button class="view-consultancies-btn">
            <a href="./consultancy">View all Consultancies</a>
        </button>
    </div>
</div>

<div class="study-abroad">
    <div class="sub-title">Study Abroad Destinations</div>
    <div class="study-abroad-inner">
        {#each countryData as cData, i}
        {#if i<=7}
        <CountryCard countryData= {cData} />
        {/if}
        {/each}
    </div>
    <div class="btn-div">
        <button class="view-countries-btn">
            <a href="./study-abroad">View all Countries</a>
        </button>
    </div>
</div>

<div class="test-guides">
    <div class="sub-title">Test Guides</div>
    <div class="test-guides-inner">
        {#each testData as tData, i}
        {#if i<=3}
        <TestCard testData={tData} imgSrc={testImages[i]}/>
        {/if}
        {/each}
    </div>
    <div class="btn-div">
        <button class="view-tests-btn">
            <a href="./test-guides">View all Tests</a>
        </button>
    </div>
</div>

<div class="upcoming-classes">
    <div class="sub-title">Upcoming Classes</div>
    <div on:click={e=> upcommingClassesClick(e)} class="upcoming-classes-inner">
        {#each classesData as cData}
        <ClassCard classData={cData} />
        {/each}
    </div>
    <div class="btn-div">
        <button class="view-classes-btn">
            <a href="./upcoming-classes">View all Classes</a>
        </button>
    </div>
</div>

<div class="faqs">
    <div class="sub-title">FAQ</div>
    <div class="faqs-inner">
        <div class="questions">
            {#each faqData as item, i}
            <div on:click={()=>handleFaq(i)} class={i==activeQuestion?"aq question":"question"}>
                <i class="fa-solid fa-chevron-right"></i>
                {item.question}
            </div>
            {/each}
        </div>
        <div class="answer">
            <i class="fa-solid fa-chevron-right"></i>
            {faqAnswer}
        </div>
    </div>
</div>

{#if openClassImgModal}
<div on:click={e=> closeModal(e)} class="class-img-modal">
    <i class="fa-solid fa-times"></i>
    <img src={classImgModalSrc} alt="Class Image">
</div>
{/if}

