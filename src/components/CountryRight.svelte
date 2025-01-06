<script>
  import { page } from "$app/stores";
  import { Listgroup } from "flowbite-svelte";

  let topConsult = [
    { name: "AECC Global", href: "/consultancies/aecc-global" },
    {
      name: "Education Tree Global",
      href: "/consultancies/education-tree-global",
    },
  ];

  $: filteredConsult = topConsult.filter((consult) => {
    return !$page?.url?.pathname?.includes(consult.href);
  });
</script>

<h2 class="ml-2 mb-2">Top Consultancy</h2>
<Listgroup active items={filteredConsult} let:item class="w-50 text-xl">
  {item.name}
</Listgroup>
