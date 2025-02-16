<script>
  import "./../css/common-category.css";
  import { page } from "$app/stores";
  import CommonBreadCrumb from "../../components/breadcrumb/CommonBreadCrumb.svelte";
  import ConsultanciesRight from "../../components/right/ConsultanciesRight.svelte";

  let isCommonPage = false;

  $: isCommonPage = $page?.url?.pathname === "/consultancies";
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
        <ConsultanciesRight />
      </div>
    </div>
  {/if}
</div>
