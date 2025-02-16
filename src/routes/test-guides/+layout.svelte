<script>
  import "./style.css";
  import { page } from "$app/stores";
  import TestGuidesRight from "../../components/right/TestGuidesRight.svelte";
  import CommonBreadCrumb from "../../components/breadcrumb/CommonBreadCrumb.svelte";

  let isCommonPage = false;

  $: isCommonPage = $page.url.pathname === "/test-guides";
</script>

<div class="country-layout">
  <div class="country-breadcrumb">
    <CommonBreadCrumb />
  </div>
  <div class="country-row">
    <div class={isCommonPage ? "test-guides-row-single" : "test-guides-left"}>
      <slot></slot>
    </div>
    {#if !isCommonPage}
      <div class="country-right">
        <TestGuidesRight />
      </div>
    {/if}
  </div>
</div>
