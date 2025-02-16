<script>
  import { page } from "$app/stores";
  import { Heading, Listgroup } from "flowbite-svelte";

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

<div class="blog-right-section">
  <Heading tag="h3">Top Consultancies</Heading>
  <Listgroup active items={filteredConsult} let:item>
    {item.name}
  </Listgroup>
</div>

