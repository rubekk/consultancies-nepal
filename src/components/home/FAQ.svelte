<script>
    import { faqData } from "$lib/index.js";
    import { AccordionItem, Accordion, Badge } from "flowbite-svelte";
</script>

<div class="faqs">
    <div class="sub-title">
        <Badge class="mx-auto text-[1.5rem]">FAQs</Badge>
    </div>
    <Accordion
        inactiveClass="text-gray-500 dark:text-gray-400 bg-white dark:hover:bg-gray-800"
    >
        {#each faqData as item, i}
            <AccordionItem>
                <span slot="header">{item.question}</span>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                    {item.answer}
                </p>
            </AccordionItem>
        {/each}
    </Accordion>
</div>