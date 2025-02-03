<script>
  import "./style.css";
  import { page } from "$app/stores";
  import CountriesBreadCrumb from "../../components/breadcrumb/CountriesBreadCrumb.svelte";
  import CountriesRight from "../../components/right/CountriesRight.svelte";

  $: pathname = $page.url.pathname;
</script>

<div class="country-layout">
  <div class="country-breadcrumb">
    <CountriesBreadCrumb />
  </div>
  <div class="country-row">
    <div class={pathname === "/country" ? "country-row-single" : "country-left"}>
      <slot></slot>
    </div>
    {#if pathname !== "/country"}
    <div class="country-right">
      <CountriesRight />
    </div>
    {/if}
  </div>
</div>
