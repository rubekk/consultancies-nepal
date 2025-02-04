<script>
    import { page } from "$app/stores";
    import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";

    let filteredUrl = $page?.url?.pathname?.replace("/test-guides/", "") || "";

    $: filteredUrl = $page?.url?.pathname?.replace("/test-guides/", "").toUpperCase().replaceAll("-", " ") || "";
</script>

<Breadcrumb
    aria-label="Test guides Breadcrumb"
    class="py-3 px-5 dark:bg-gray-900 w-100 mx-10 text-black-500"
>
    <BreadcrumbItem href="/" home>HOME</BreadcrumbItem>
    <BreadcrumbItem href="/test-guides">TEST GUIDES</BreadcrumbItem>
    {#if filteredUrl !=="/TEST-GUIDES"}
        <BreadcrumbItem>{filteredUrl}</BreadcrumbItem>
    {/if}
</Breadcrumb>
