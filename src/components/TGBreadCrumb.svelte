<script>
    import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
</script>

<Breadcrumb
    aria-label="Test guides Breadcrumb"
    class="py-3 px-5 dark:bg-gray-900 w-100 mx-10 text-black-500"
>
    <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
    <BreadcrumbItem href="/test-guides">Test Guides</BreadcrumbItem>
    <BreadcrumbItem>IELTS</BreadcrumbItem>
</Breadcrumb>
