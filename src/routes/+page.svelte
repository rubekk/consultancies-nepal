<script>
    import "./app.css";
    import Card from "../components/Card.svelte";
    import { data, faqData } from "$lib/index.js";

    let scrollingConsultancies,
        activeQuestion=0,
        faqAnswer=faqData[activeQuestion].answer;

    const handleFaq=i=>{
        if(i==activeQuestion) return;
        activeQuestion=i;
        faqAnswer=faqData[activeQuestion].answer;
    }
</script>

<div class="landing-img">
    <div class="landing-tagline">
        Explore the best <span>Consultancy</span> and <span>University</span> for abroad study!
    </div>
</div>

<div class="top-consultancies">
    <div class="sub-title">Top Consultancies</div>
    <div bind:this={scrollingConsultancies} class="top-consultancies-inner">
        {#each data as indData,i}
        {#if i<=5}
        <Card name={indData.name} address="Bagbazar, Kathmandu" />
        {/if}
        {/each}
    </div>
    <div class="left-right">
        <div class="left" on:click={()=> scrollingConsultancies.scrollBy({left: -300, behavior: "smooth"})}>
            <i class="fa-solid fa-chevron-left"></i>
        </div>
        <div class="right" on:click={()=> scrollingConsultancies.scrollBy({left: 300, behavior: "smooth"})}>
            <i class="fa-solid fa-chevron-right"></i>
        </div>
    </div>
    <button class="load-more-btn">
        <a href="./consultancy">Load more</a>
    </button>
</div>

<div class="test-guides">
    <div class="sub-title">Test Guides</div>
    <div class="test-guides-inner">
        <div class="test-card">
            <a href="/ielts">IELTS</a>
        </div>
        <div class="test-card">
            <a href="/pte">PTE</a>
        </div>
        <div class="test-card">
            <a href="/sat">SAT</a>
        </div>
        <div class="test-card">
            <a href="toefl">TOEFL</a>
        </div>
    </div>
    <!-- IELTS, PTE, SAT, TOEFL -->
</div>

<div class="faqs">
    <div class="sub-title">FAQs</div>
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
