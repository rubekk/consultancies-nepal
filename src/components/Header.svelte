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
        <NavLi class="cursor-pointer">
            Study Destinations
            <ChevronDownOutline
                class="w-6 h-6 ms-2 text-primary-800 dark:text-white inline"
            />
        </NavLi>
        <Dropdown class="w-44 z-20">
            <DropdownItem href="/study-abroad/australia">Study in Australis</DropdownItem>
            <DropdownItem href="/study-abroad/usa">Study in USA</DropdownItem>
            <DropdownItem href="/study-abroad/canada">Study in Canada</DropdownItem>
            <DropdownItem href="/study-abroad/united-kingdom">Study in UK</DropdownItem>
            <DropdownItem href="/study-abroad/new-zealand">Study in New Zealand</DropdownItem>
            <DropdownItem href="/study-abroad/japan">Study in Japan</DropdownItem>
            <DropdownItem href="/study-abroad/south-korea">Study in South Korea</DropdownItem>
            <DropdownItem href="/study-abroad/singapore">Study in Singapore</DropdownItem>
            <DropdownItem href="/study-abroad/germany">Study in Germany</DropdownItem>
            <DropdownItem href="/study-abroad/europe">Study in Europe</DropdownItem>
        </Dropdown>
        <NavLi href="/universities">Universities</NavLi>
        <NavLi class="cursor-pointer">
            Test Guides
            <ChevronDownOutline
                class="w-6 h-6 ms-2 text-primary-800 dark:text-white inline"
            />
        </NavLi>
        <Dropdown class="w-44 z-20">
            <DropdownItem href="/test-guides/ielts">IELTS</DropdownItem>
            <DropdownItem href="/test-guides/pte">PTE</DropdownItem>
            <DropdownItem href="/test-guides/sat">SAT</DropdownItem>
            <DropdownItem href="/test-guides/toefl">TOEFL</DropdownItem>
            <DropdownItem href="/test-guides/gre">GRE</DropdownItem>
            <DropdownItem href="/test-guides/gmat">GMAT</DropdownItem>
        </Dropdown>
        <NavLi href="/consultancies">Consultancies</NavLi>
    </NavUl>
</Navbar>
