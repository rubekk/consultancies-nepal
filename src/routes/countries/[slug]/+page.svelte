<script>
    import {
        List,
        Li,
        Heading,
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
    } from "flowbite-svelte";
    import "../style.css";

    export let data;

    const countryData = data.data.data;
</script>

<svelte:head>
    <title>{countryData.title}</title>
</svelte:head>

<div class="study-abroad-blog-container">
    <Heading tag="h1">{countryData.title}</Heading>

    <img
        src={countryData.featured_image.url}
        alt={countryData.featured_image.alt}
    />
    <br />
    <p class="text-base mt-2">
        {#each countryData.introduction as introduction, index}
            {#if index > 0}
                <br /><br />
            {/if}
            {introduction}
        {/each}
    </p>

    <Heading tag="h2">{countryData.required_documents.title}</Heading>
    <List list="disc" position="inside">
        {#each countryData.required_documents.documents as document}
            <Li>{document}</Li>
        {/each}
    </List>

    <Heading tag="h2">{countryData.cost_to_study_table.title}</Heading>
    <Table>
        <TableHead>
            {#each countryData.cost_to_study_table.headings as heading}
                <TableHeadCell>{heading}</TableHeadCell>
            {/each}
        </TableHead>
        <TableBody tableBodyClass="divide-y">
            {#each countryData.cost_to_study_table.table_data as table_data}
                <TableBodyRow>
                    <TableBodyCell>{table_data.programs}</TableBodyCell>
                    <TableBodyCell>{table_data.tution_fees}</TableBodyCell>
                </TableBodyRow>
            {/each}
        </TableBody>
    </Table>

    <Heading tag="h2"
        >{countryData.language_score_requirements_table.title}</Heading
    >
    <Table>
        <TableHead>
            {#each countryData.language_score_requirements_table.headings as heading}
                <TableHeadCell>{heading}</TableHeadCell>
            {/each}
        </TableHead>
        <TableBody tableBodyClass="divide-y">
            {#each countryData.language_score_requirements_table.table_data as table_data}
                <TableBodyRow>
                    <TableBodyCell>{table_data.test}</TableBodyCell>
                    <TableBodyCell>{table_data.diploma}</TableBodyCell>
                    <TableBodyCell>{table_data.undergraduate}</TableBodyCell>
                    <TableBodyCell>{table_data.graduate}</TableBodyCell>
                </TableBodyRow>
            {/each}
        </TableBody>
    </Table>

    <Heading tag="h2">{countryData.courses_and_cost_table.title}</Heading>
    <Table>
        <TableHead>
            {#each countryData.courses_and_cost_table.headings as heading}
                <TableHeadCell>{heading}</TableHeadCell>
            {/each}
        </TableHead>
        <TableBody tableBodyClass="divide-y">
            {#each countryData.courses_and_cost_table.table_data as table_data}
                <TableBodyRow>
                    <TableBodyCell>{table_data.course}</TableBodyCell>
                    <TableBodyCell>{table_data.tution_fees}</TableBodyCell>
                    <TableBodyCell>
                        {#each table_data.popular_universities as university, index}
                            {university}, <br />
                        {/each}
                    </TableBodyCell>
                </TableBodyRow>
            {/each}
        </TableBody>
    </Table>

    <Heading tag="h2">Conclusion</Heading>
    <p>
        {countryData.conclusion}
    </p>
</div>
