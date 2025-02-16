<script>
    import { page } from "$app/stores";
    import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";

    $: pathnameBreakdown = $page.url.pathname
        .replace("/", "")
        .replaceAll("-", " ")
        .split("/");
</script>

<Breadcrumb
    aria-label="Test guides Breadcrumb"
    class="w-100 text-black-500 dark:bg-gray-900"
>
    <BreadcrumbItem href="/" home>HOME</BreadcrumbItem>
    <BreadcrumbItem href={"/" + pathnameBreakdown[0].replaceAll(" ", "-")}
        >{pathnameBreakdown[0].toUpperCase()}</BreadcrumbItem
    >
    {#if pathnameBreakdown.length > 1}
        <BreadcrumbItem>{pathnameBreakdown[1].toUpperCase()}</BreadcrumbItem>
    {/if}
</Breadcrumb>
