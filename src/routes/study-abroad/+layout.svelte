<script>
  import "./style.css";
  import CountryBCrumb from "../../components/CountryBCrumb.svelte";
  import CountryRight from "../../components/CountryRight.svelte";
</script>

<div class="country-layout">
  <div class="country-breadcrumb">
    <CountryBCrumb />
  </div>
  <div class="country-row">
    <div class="country-left">
      <slot></slot>
    </div>
    <div class="country-right">
      <CountryRight />
    </div>
  </div>
</div>
