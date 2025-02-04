<script>
  import "./style.css";
  import { page } from "$app/stores";
  import ConsultanciesBreadCrumb from "../../components/breadcrumb/ConsultanciesBreadCrumb.svelte";
  import ConsultanciesRight from "../../components/right/ConsultanciesRight.svelte";

  $: pathname = $page.url.pathname;
</script>

<div class="consultancies-layout">
  <div class="consultancies-breadcrumb">
    <ConsultanciesBreadCrumb />
  </div>
  <div class="consultancies-row">
    <div class={pathname === "/consultancies" ? "consultancies-row-single" : "consultancies-left"}>
      <slot></slot>
    </div>
    {#if pathname !== "/consultancies"}
    <div class="consultancies-right">
      <ConsultanciesRight />
    </div>
    {/if}
  </div>
</div>
