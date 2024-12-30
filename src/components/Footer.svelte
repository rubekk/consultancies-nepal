<script>
    import { Footer, FooterCopyright, FooterLinkGroup, FooterBrand, FooterLink } from 'flowbite-svelte';
  </script>
  
  <Footer footerType="logo">
    <div class="sm:flex sm:items-center sm:justify-between">
      <FooterBrand href="https://flowbite.com" src="/favicon.png" alt="Flowbite Logo" name="StudyAbroadNp" />
      <FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
        <FooterLink href="/">Study Destinations</FooterLink>
        <FooterLink href="/">Universities</FooterLink>
        <FooterLink href="/">Test Guides</FooterLink>
        <FooterLink href="/">Consultancies</FooterLink>
      </FooterLinkGroup>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <FooterCopyright href="/" by="StudyAbroadNp™" />
  </Footer>