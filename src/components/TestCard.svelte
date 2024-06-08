<script>
    export let testData, imgSrc;
</script>

<div class="test-card">
    <img class="test-img" src={imgSrc} alt={`${testData.testName} Image`}>
    <div class="test-txt">
        <p class="test-explain">{testData.testDetail}</p>
        <a href={`/test-guides/${testData.testName.toLowerCase()}`}><button class="read-more">Read more</button></a>
    </div>
</div>

<style>
    .test-card{
        width: 300px;
        background-color: #fff;
        border: 1px solid #797979;
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
        width: 100%;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;  
        overflow: hidden;
    }
    .read-more{
        margin-top: 1rem;
        width: 100px;
        height: 35px;
        color: #000;
        background-color: transparent;
        border: 2px solid var(--blue);
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>