<script>
  import "./style.css";
  import TGBreadcrumb from "../../components/TGBreadCrumb.svelte";
  import TGRight from "../../components/TGRight.svelte";

  import { page } from "$app/stores";
  // Destructure pathname from $page.url
  let { pathname } = $page.url;
</script>

<div class="test-guides-layout">
  <div class="test-guides-breadcrumb">
    <TGBreadcrumb />
  </div>
  <div class="test-guides-row">
    <div class="test-guides-left">
      <slot></slot>
    </div>
    <div class="test-guides-right">
      <TGRight />
    </div>
  </div>
</div>
