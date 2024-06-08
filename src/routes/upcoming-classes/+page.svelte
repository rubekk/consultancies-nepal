<script>
    import "./../app.css";
    import { classesData } from "$lib/index.js";
    import ClassCard from "../../components/ClassCard.svelte";
</script>

<div class="upcoming-classes">
    <div class="sub-title">Upcoming Classes</div>
    <div class="upcoming-classes-inner">
        {#each classesData as cData}
        <ClassCard classData={cData} />
        {/each}
    </div>
</div>