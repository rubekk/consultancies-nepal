<script>
    import Card from "../../components/Card.svelte";
    import { data } from "$lib/index.js";
</script>

<svelte:head>
  <title>StudyAbroadNP - Top Consultancies in Nepal</title>
</svelte:head>

<div class="consultancies">
    <div class="page-title">List of Consultancies</div>
    <div class="consultancies-inner">
        {#each data as indData}
        <Card name={indData.name} address={indData.address? indData.address: "Putalisadak, Kathmandu"} imgSrc={indData.thumbnailImage? indData.thumbnailImage : ""}/>
        {/each}
    </div>

    <h4>Didn't find a consultancy you were looking for? <a href="https://docs.google.com/forms/d/e/1FAIpQLScm1dfyg-SUrouBsOZ95tpnPXN0Q90vbg7PAPa8okacro_hMA/viewform?usp=sf_link" target="_blank">Suggest for addition!</a></h4>
</div>

<style>
    .consultancies{
        padding: 3rem 2rem 4rem;
    }
    .page-title{
        margin: 0 auto 2.5rem;
        width: max-content;
        text-align: center;
        font-size: 2rem;
        border-bottom: 2px solid var(--blue);
    }
    .consultancies-inner{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 15px;
    }
    h4{
        margin: 3rem 0 0;
        text-align: center;
    }
    h4 a{
        color: blue;
        text-decoration: underline;
    }
</style>