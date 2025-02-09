<script>
    import "./style.css";
    import { page } from "$app/stores";
    import TestGuidesBreadCrumb from "../../components/breadcrumb/TestGuidesBreadCrumb.svelte";
    import TestGuidesRight from "../../components/right/TestGuidesRight.svelte";
  
    $: pathname = $page.url.pathname;
  </script>
  
  <div class="country-layout">
    <div class="country-breadcrumb">
      <TestGuidesBreadCrumb />
    </div>
    <div class="country-row">
      <div class={pathname === "/test-guides" ? "test-guides-row-single" : "test-guides-left"}>
        <slot></slot>
      </div>
      {#if pathname !== "/country"}
      <div class="country-right">
        <TestGuidesRight />
      </div>
      {/if}
    </div>
  </div>
  