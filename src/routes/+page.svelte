<script>
    import "./app.css";
    import { data } from "$lib/index.js";
    import countriesData from "$lib/data/countries-short.json"
    import testGuidesData from "$lib/data/test-guides-short.json"
    import Landing from "../components/home/Landing.svelte";
    import ConsultancyCard from "../components/card/ConsultancyCard.svelte";
    import CountryCard from "../components/card/CountryCard.svelte";
    import TestGuideCard from "../components/card/TestGuideCard.svelte";
    import Faq from "../components/home/FAQ.svelte";
    import { Badge, Button } from "flowbite-svelte";
    import { ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<svelte:head>
    <title>StudyAbroadNP - Home</title>
</svelte:head>

<Landing />

<div class="study-abroad">
    <div class="sub-title">
        <Badge class="mx-auto text-[1.5rem]">Study Destinations</Badge>
    </div>
    <div class="study-abroad-inner">
        {#each countriesData as cData, i}
            {#if i <= 7}
                <CountryCard countryData={cData} />
            {/if}
        {/each}
    </div>
    <div class="btn-div">
        <Button color="alternative">
            <a class="text-lg flex items-center" href="./countries">
                View all Destinations
                <ArrowRightOutline class="w-5 h-5 ms-2" />
            </a>
        </Button>
    </div>
</div>

<div class="top-consultancies">
    <div class="sub-title">
        <Badge class="mx-auto text-[1.5rem]">Top Consultancies</Badge>
    </div>
    <div class="top-consultancies-inner">
        {#each data as indData, i}
            {#if i <= 5}
                <ConsultancyCard
                    name={indData.name}
                    address={indData.address
                        ? indData.address
                        : "Putalisadak, Kathmandu"}
                    imgSrc={indData.thumbnailImage
                        ? indData.thumbnailImage
                        : ""}
                />
            {/if}
        {/each}
    </div>
    <div class="btn-div">
        <Button color="alternative">
            <a class="text-lg flex items-center" href="./consultancies">
                View all Consultancies
                <ArrowRightOutline class="w-5 h-5 ms-2" />
            </a>
        </Button>
    </div>
</div>

<div class="test-guides">
    <div class="sub-title">
        <Badge class="mx-auto text-[1.5rem]">Test Guides</Badge>
    </div>
    <div class="test-guides-inner">
        {#each testGuidesData as tData, i}
            {#if i <= 3}
                <TestGuideCard testGuideData={tData} />
            {/if}
        {/each}
    </div>
    <div class="btn-div">
        <Button color="alternative">
            <a class="text-lg flex items-center" href="./test-guides">
                View all Guides
                <ArrowRightOutline class="w-5 h-5 ms-2" />
            </a>
        </Button>
    </div>
</div>

<Faq />

