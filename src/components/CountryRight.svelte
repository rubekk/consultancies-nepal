<script>
  import { page } from "$app/stores";
  import { Listgroup } from "flowbite-svelte";

  let testGuides = [
    { name: "AECC Global", href: "/consultancies/aecc-global" },
    {
      name: "Education Tree Global",
      href: "/consultancies/education-tree-global",
    },
  ];

  $: filteredUrl =
    $page?.url?.pathname?.replace("/test-guides/", "").toUpperCase() || "";
  $: filteredGuides = testGuides.filter((guide) => {
    return guide.name !== filteredUrl;
  });
</script>

<h2 class="ml-2 mb-2">Top Consultancy</h2>
<Listgroup active items={filteredGuides} let:item class="w-50 text-xl">
  {item.name}
</Listgroup>
