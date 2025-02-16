<script>
  import "./style.css";
  import { page } from "$app/stores";
  import CommonBreadCrumb from "../../components/breadcrumb/CommonBreadCrumb.svelte";
  import CountriesRight from "../../components/right/CountriesRight.svelte";

  let isCommonPage = false

  $: isCommonPage = $page?.url?.pathname === "/countries";
</script>

<div class="country-layout">
  <div class="country-breadcrumb">
    <CommonBreadCrumb />
  </div>
  <div class="country-row">
    <div class={isCommonPage ? "country-row-single" : "country-left"}>
      <slot></slot>
    </div>
    {#if !isCommonPage}
      <div class="country-right">
        <CountriesRight />
      </div>
    {/if}
  </div>
</div>
