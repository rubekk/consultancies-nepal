<script>
  import "./style.css";
  import TGBreadcrumb from "../../components/TGBreadCrumb.svelte";
  import TGRight from "../../components/TGRight.svelte";

  import { page } from "$app/stores";
  let pathname = $page.url.pathname;

  $: pathname = $page.url.pathname;
</script>

<div class="test-guides-layout">
  <div class="test-guides-breadcrumb">
    <TGBreadcrumb />
  </div>
  <div class="test-guides-row">
    <div class={pathname === "/test-guides" ? "test-guides-row-single" : "test-guides-left"}>
      <slot></slot>
    </div>
    {#if pathname !== "/test-guides"}
    <div class="test-guides-right">
      <TGRight />
    </div>
    {/if}
  </div>
</div>
