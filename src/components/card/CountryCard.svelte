<script>
  export let countryData;
</script>

{#if countryData}
  <div class="country-card">
    <a href={`/countries/${countryData.slug}`}>
      <img
        class="country-card-img"
        src={countryData.thumbnail_image.url}
        alt={`${countryData.thumbnail_image.alt}`}
      />
      <p class="country-card-txt">{`${countryData.country}`}</p>
    </a>
  </div>
{/if}

<style>
  .country-card {
    width: 300px;
    height: 225px;
    position: relative;
    cursor: pointer;
    box-shadow: 3px 3px 3px rgb(46 128 187 / 20%);
  }
  .country-card-img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .country-card-txt {
    padding: 0.25rem 0.5rem;
    width: max-content;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    position: absolute;
    left: 50%;
    right: 50%;
    bottom: 1rem;
    transform: translateX(-50%);
  }
</style>
