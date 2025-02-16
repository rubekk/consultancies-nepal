<script>
  import { page } from "$app/stores";
  import { Heading, Listgroup } from "flowbite-svelte";

  let testGuides = [
    { name: "IELTS", href: "/test-guides/ielts" },
    { name: "PTE", href: "/test-guides/pte" },
    { name: "SAT", href: "/test-guides/sat" },
    { name: "TOEFL", href: "/test-guides/toefl" },
    { name: "GRE", href: "/test-guides/gre" },
    { name: "GMAT", href: "/test-guides/gmat" },
  ];

  $: filteredUrl =
    $page?.url?.pathname?.replace("/test-guides/", "").toUpperCase() || "";
  $: filteredGuides = testGuides.filter((guide) => {
    return guide.name !== filteredUrl;
  });
</script>

<div class="blog-right-section">
  <Heading tag="h3">Other Test Guides</Heading>
  <Listgroup active items={filteredGuides} let:item>
    {item.name}
  </Listgroup>
</div>
