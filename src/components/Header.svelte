<script>
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
        Dropdown,
        DropdownItem
    } from "flowbite-svelte";
    import { ChevronDownOutline } from "flowbite-svelte-icons";
</script>

<Navbar>
    <NavBrand href="/">
        <img
            src="/favicon.png"
            class="me-3 h-6 sm:h-9"
            alt="StudyAbroadNp Logo"
        />
        <span
            class="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white"
            >Study<span class="text-[#2a73f4]"> Abroad</span>Np</span
        >
    </NavBrand>
    <NavHamburger />
    <NavUl>
        <NavLi href="/study-abroad">
            Study Destinations
            <ChevronDownOutline
                class="w-6 h-6 ms-2 text-primary-800 dark:text-white inline"
            />
        </NavLi>
        <Dropdown class="w-44 z-20">
            <DropdownItem href="/">Dashboard</DropdownItem>
            <DropdownItem href="/docs/components/navbar">Settings</DropdownItem>
            <DropdownItem href="/">Earnings</DropdownItem>
            <DropdownItem href="/">Sign out</DropdownItem>
        </Dropdown>
        <NavLi href="/universities">Universities</NavLi>
        <NavLi href="/test-guides">
            Test Guides
            <ChevronDownOutline
                class="w-6 h-6 ms-2 text-primary-800 dark:text-white inline"
            />
        </NavLi>
        <Dropdown class="w-44 z-20">
            <DropdownItem href="/">Dashboard</DropdownItem>
            <DropdownItem href="/docs/components/navbar">Settings</DropdownItem>
            <DropdownItem href="/">Earnings</DropdownItem>
            <DropdownItem href="/">Sign out</DropdownItem>
        </Dropdown>
        <NavLi href="/consultancies">Consultancies</NavLi>
    </NavUl>
</Navbar>
