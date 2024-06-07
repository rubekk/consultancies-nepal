<script>
    export let countryData;
    let formattedCountry= countryData.countryName.toLowerCase().replaceAll(" ","-");
</script>

<div class="country-card">
    <a href={`/study-abroad/${formattedCountry}`}>
        <img class="country-card-img" src={countryData.imgSrc} alt={`Study in ${countryData.countryName}`}>
        <p class="country-card-txt">{`Study in ${countryData.countryName}`}</p>
    </a>
</div>

<style> 
    .country-card{
        width: 300px;
        height: 225px;
        position: relative;
        cursor: pointer;
    }
    .country-card-img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }
    .country-card-txt{
        width: max-content;
        color: #fff;
        position: absolute;
        left: 50%;
        right: 50%;
        bottom: 1rem;
        transform: translateX(-50%);
    }
</style>