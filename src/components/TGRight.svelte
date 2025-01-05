<script>
    import { Listgroup } from "flowbite-svelte";

    let links = [
        { name: "gre", href: "/test-guides/gre" },
        { name: "DEF", href: "/docs/components/alert" },
    ];
</script>

<h2>Other Test Guides</h2>
<Listgroup
    active
    items={links}
    let:item
    class="w-50 text-xl text-slate-400 hover:text-green-600"
>
    {item.name}
</Listgroup>