<script>
  import "./style.css";
  import { page } from "$app/stores";
  import CountriesBreadCrumb from "../../components/CountryBreadCrumb.svelte";
  import CountriesRight from "../../components/right/CountriesRight.svelte";

  $: pathname = $page.url.pathname;
</script>

<div class="country-layout">
  <div class="country-breadcrumb">
    <CountriesBreadCrumb />
  </div>
  <div class="country-row">
    <div class={pathname === "/study-abroad" ? "country-row-single" : "country-left"}>
      <slot></slot>
    </div>
    {#if pathname !== "/study-abroad"}
    <div class="country-right">
      <CountriesRight />
    </div>
    {/if}
  </div>
</div>
