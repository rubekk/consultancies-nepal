<script>
  import "./../css/common-category.css";
  import { page } from "$app/stores";
  import TestGuidesRight from "../../components/right/TestGuidesRight.svelte";
  import CommonBreadCrumb from "../../components/breadcrumb/CommonBreadCrumb.svelte";

  let isCommonPage = false;

  $: isCommonPage = $page.url.pathname === "/test-guides";
</script>

<div class="common-category-layout">
  <div class="breadcrumb">
    <CommonBreadCrumb />
  </div>
  {#if isCommonPage}
    <div class="category-home">
      <slot></slot>
    </div>
  {:else}
    <div class="blog-container">
      <div class="blog">
        <slot></slot>
      </div>
      <div class="blog-right-sidebar">
        <TestGuidesRight />
      </div>
    </div>
  {/if}
</div>
