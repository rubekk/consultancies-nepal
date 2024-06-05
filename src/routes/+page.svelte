<script>
    import "./app.css";
    import Card from "../components/Card.svelte";
    import { data, faqData } from "$lib/index.js";
    import ieltsImg from "$lib/img/ielts.jpeg";    
    import pteImg from "$lib/img/pte.jpeg";    
    import satImg from "$lib/img/sat.jpeg";    
    import toeflImg from "$lib/img/toefl.jpeg";    
    
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
        <div class="tagline-txt">
            Explore the best <span>Consultancy</span><br>for abroad study!
        </div>
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
        <div class="left" on:click={()=> scrollingConsultancies.scrollBy({left: -365, behavior: "smooth"})}>
            <i class="fa-solid fa-chevron-left"></i>
        </div>
        <div class="right" on:click={()=> scrollingConsultancies.scrollBy({left: 365, behavior: "smooth"})}>
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
            <img class="test-img" src={ieltsImg} alt="IELTS Image">
            <div class="test-txt">
                <p class="test-explain">The International English Language Testing System (IELTS) is a widely recognized English proficiency test designed for non-native English speakers. Whether you're planning to study, work, or migrate to an English-speaking country, understanding the IELTS can be your first step towards achieving your goals. This article will cover the IELTS test pattern, its relevance for further studies, and the costs associated with taking the exam.</p>
                <a href="/test-guides/ielts"><button class="read-more">Read more</button></a>
            </div>
        </div>
        <div class="test-card">
            <img class="test-img" src={pteImg} alt="PTE Image">
            <div class="test-txt">
                <p class="test-explain">The Pearson Test of English (PTE) is an increasingly popular English language proficiency test designed for non-native English speakers. Whether you're planning to study, work, or migrate to an English-speaking country, understanding the PTE can be your gateway to success. This article will cover the PTE test pattern, its relevance for further studies, and the costs associated with taking the exam.</p>
                <a href="/test-guides/pte"><button class="read-more">Read more</button></a>
            </div>
        </div>
        <div class="test-card">
            <img class="test-img" src={satImg} alt="SAT Image">
            <div class="test-txt">
                <p class="test-explain">The SAT (Scholastic Assessment Test) is a standardized test widely used for college admissions in the United States and other countries. Whether you're planning to pursue undergraduate studies in the U.S. or looking to strengthen your college application elsewhere, understanding the SAT is crucial. This article will cover the SAT test pattern, its relevance for further studies, and the costs associated with taking the exam.</p>
                <a href="/test-guides/sat"><button class="read-more">Read more</button></a>
            </div>
        </div>
        <div class="test-card">
            <img class="test-img" src={toeflImg} alt="TOEFL Image">
            <div class="test-txt">
                <p class="test-explain">The Test of English as a Foreign Language (TOEFL) is a standardized test that measures English language proficiency for non-native speakers. It's widely accepted by universities, employers, and immigration authorities worldwide. This article will cover the TOEFL test pattern, its relevance for further studies, and the costs associated with taking the exam.</p>
                <a href="/test-guides/toefl"><button class="read-more">Read more</button></a>
            </div>
        </div>
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
