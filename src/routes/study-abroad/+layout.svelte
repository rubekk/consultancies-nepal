<script>
  import "./style.css";
  import { page } from "$app/stores";
  import CountryBCrumb from "../../components/CountryBCrumb.svelte";
  import CountryRight from "../../components/CountryRight.svelte";

  $: pathname = $page.url.pathname;
</script>

<div class="country-layout">
  <div class="country-breadcrumb">
    <CountryBCrumb />
  </div>
  <div class="country-row">
    <div class={pathname === "/study-abroad" ? "country-row-single" : "country-left"}>
      <slot></slot>
    </div>
    {#if pathname !== "/study-abroad"}
    <div class="country-right">
      <CountryRight />
    </div>
    {/if}
  </div>
</div>
