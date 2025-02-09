<script>
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Dropdown,
    DropdownItem,
  } from "flowbite-svelte"
  import { ChevronDownOutline } from "flowbite-svelte-icons"
  import { ROUTES } from "$lib/routes.js"
  import menuData from "$lib/data/menu.json"

  const routeToLink = (link) => {
    if(window !== undefined) window.location.href = ROUTES.STUDY_DESTINATIONS + "/" + link;
  }
</script>

<Navbar class="border-b border-solid border-gray">
  <NavBrand href="/">
    <img src="/favicon.png" class="me-3 h-6 sm:h-9" alt="StudyAbroadNp Logo" />
    <span
      class="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white"
    >
      Study<span class="text-[#2a73f4]"> Abroad</span>Np
    </span>
  </NavBrand>
  <NavHamburger />
  <NavUl>
    <NavLi class="cursor-pointer">
      Study Destinations
      <ChevronDownOutline
        class="w-6 h-6 ms-2 text-primary-800 dark:text-white inline"
      />
    </NavLi>
    <Dropdown class="w-44 z-20">
      {#each menuData.studyDestinations as destination}
        <DropdownItem on:click={() => routeToLink(destination.slug)}>{destination.name}</DropdownItem
        >
      {/each}
    </Dropdown>
    <NavLi href="/universities">Universities</NavLi>
    <NavLi class="cursor-pointer">
      Test Guides
      <ChevronDownOutline
        class="w-6 h-6 ms-2 text-primary-800 dark:text-white inline"
      />
    </NavLi>
    <Dropdown class="w-44 z-20">
      {#each menuData.testGuides as guide}
        <DropdownItem href={`${ROUTES.TEST_GUIDES}/${guide.slug}`}>{guide.name}</DropdownItem>
      {/each}
    </Dropdown>
    <NavLi href="/consultancies">Consultancies</NavLi>
  </NavUl>
</Navbar>
