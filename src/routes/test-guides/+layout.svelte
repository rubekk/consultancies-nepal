<script>
  import "./style.css";
  import { page } from "$app/stores";
  import TestGuidesBreadcrumb from "../../components/breadcrumb/TestGuidesBreadCrumb.svelte";
  import TestGuidesRight from "../../components/right/TestGuidesRight.svelte";

  $: pathname = $page.url.pathname;
</script>

<div class="test-guides-layout">
  <div class="test-guides-breadcrumb">
    <TestGuidesBreadcrumb />
  </div>
  <div class="test-guides-row">
    <div
      class={pathname === "/test-guides"
        ? "test-guides-row-single"
        : "test-guides-left"}
    >
      <slot></slot>
    </div>
    {#if pathname !== "/test-guides"}
      <div class="test-guides-right">
        <TestGuidesRight />
      </div>
    {/if}
  </div>
</div>
