<script>
  import { page } from "$app/stores";
  import { Listgroup } from "flowbite-svelte";

  let topConsult = [
    { name: "AECC Global", href: "/consultancies/aecc-global" },
    {
      name: "Education Tree Global",
      href: "/consultancies/education-tree-global",
    },
    { name: "Global Reach Nepal", href: "/consultancies/global-reach-nepal" },
    { name: "Abroad Study Center", href: "/consultancies/abroad-study-center" },
    { name: "SIEC Education", href: "/consultancies/siec-education" },
    { name: "Education Planet", href: "/consultancies/education-planet" },
  ];

  $: filteredConsult = topConsult.filter((consult) => {
    return !$page?.url?.pathname?.includes(consult.href);
  });
</script>

<h2 class="ml-2 mb-2 font-semibold text-xl">Top Consultancy</h2>
<Listgroup
  active
  items={filteredConsult}
  let:item
  class="w-50 text-xl font-medium"
>
  {item.name}
</Listgroup>
