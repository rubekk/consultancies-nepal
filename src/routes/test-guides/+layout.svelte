<script>
    import "./style.css";
    import TGBreadcrumb from "../../components/TGBreadCrumb.svelte";
    import TGRight from "../../components/TGRight.svelte";
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
