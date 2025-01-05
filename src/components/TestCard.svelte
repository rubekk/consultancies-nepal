<script>
    import { Button } from "flowbite-svelte";
    import { ArrowRightOutline } from "flowbite-svelte-icons";
    export let testData;
</script>

<div class="test-card">
    <img class="test-img" src={testData.imgSrc} alt={`${testData.testName} Image`}>
    <div class="test-txt">
        <p class="test-explain">{testData.testDetail}</p>
        <Button class="bg-[#2a73f4]" size="xs">
            <a class="text-white flex items-center" href={`/test-guides/${testData.testName.toLowerCase()}`}>
                Read more
                <ArrowRightOutline class="w-5 h-5 ms-2" />
            </a>
        </Button>
    </div>
</div>

<style>
    .test-card{
        width: 300px;
        background-color: #fff;
        border: 1px solid #dcdcdc;
        border-radius: 3px;
    }
    .test-img{
        width: 100%;
        height: 225px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        object-fit: cover;
    }
    .test-txt{
        padding: .5rem;
        width: 100%;
    }
    .test-explain{
        margin: .5rem 0;
        width: 100%;
        font-size: .9rem;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;  
        overflow: hidden;
    }
</style>