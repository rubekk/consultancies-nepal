<script>
    import "./../app.css";
    import { classesData } from "$lib/index.js";
    import ClassCard from "../../components/ClassCard.svelte";

    let openClassImgModal= false,
        classImgModalSrc= "";

    const upcommingClassesClick= e=> {
        if(e.target.tagName !== "IMG") return;

        classImgModalSrc= e.target.getAttribute("src");
        openClassImgModal= true;
    }

    const closeModal= e=>{
        if(e.target.tagName !== "IMG") openClassImgModal= false;
    }
</script>

<svelte:head>
  <title>StudyAbroadNP - Upcoming Classes</title>
</svelte:head>

<div class="upcoming-classes">
    <div class="sub-title">Upcoming Classes</div>
    <div on:click={e=> upcommingClassesClick(e)} class="upcoming-classes-inner">
        {#each classesData as cData}
        <ClassCard classData={cData} />
        {/each}
    </div>
</div>

{#if openClassImgModal}
<div on:click={e=> closeModal(e)} class="class-img-modal">
    <i class="fa-solid fa-times"></i>
    <img src={classImgModalSrc} alt="Class Image">
</div>
{/if}