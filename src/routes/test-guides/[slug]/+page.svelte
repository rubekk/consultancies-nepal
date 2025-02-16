<script>
    import "./../style.css"
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

    export let data;

    const testGuideData = data.data.data;
  </script>
  
  <svelte:head>
    <title>{testGuideData.title}</title>
  </svelte:head>
  
  <div class="test-container">
    <Heading tag="h1"
      >{testGuideData.title}</Heading
    >
    <img src={testGuideData.featured_image.url} alt={testGuideData.featured_image.alt} />
    {#each testGuideData.introduction as introduction}
        <p>
            {introduction}
        </p>
    {/each}
    
    <Heading tag="h2">{testGuideData.test_pattern_table.title}</Heading>
    <p>{testGuideData.test_pattern_table.description}</p>
    <Table>
        <TableHead>
            {#each testGuideData.test_pattern_table.headings as heading}
                <TableHeadCell>{heading}</TableHeadCell>
            {/each}
        </TableHead>
        <TableBody tableBodyClass="divide-y">
            {#each testGuideData.test_pattern_table.table_data as table_data}
                <TableBodyRow>
                    <TableBodyCell>{table_data.test_section}</TableBodyCell>
                    <TableBodyCell>{table_data.description}</TableBodyCell>
                </TableBodyRow>
            {/each}
        </TableBody>
    </Table>
    
    <Heading tag="h2">{testGuideData.cost_of_test_table.title}</Heading>
    <p>{testGuideData.cost_of_test_table.description}</p>  
    <Table>
        <TableHead>
            {#each testGuideData.cost_of_test_table.headings as heading}
                <TableHeadCell>{heading}</TableHeadCell>
            {/each}
        </TableHead>
        <TableBody tableBodyClass="divide-y">
            {#each testGuideData.cost_of_test_table.table_data as table_data}
                <TableBodyRow>
                    <TableBodyCell>{table_data.cost_category}</TableBodyCell>
                    <TableBodyCell>{table_data.explanation}</TableBodyCell>
                </TableBodyRow>
            {/each}
        </TableBody>
    </Table>

    <Heading tag="h2">{testGuideData.relevance_of_test.title}</Heading>
    <p>{testGuideData.cost_of_test_table.description}</p>  
    <List list="decimal" position="inside">
        {#each testGuideData.relevance_of_test.points as point}
            <Li
                ><strong>{point.heading}</strong> - {point.description}</Li
            >
        {/each}
    </List>
    
    <Heading tag="h2">{testGuideData.top_consultancies_for_test.title}</Heading>
    <p>{testGuideData.top_consultancies_for_test.description}</p>
    <List position="inside">
        {#each testGuideData.top_consultancies_for_test.top_consultancies as topConsultancies}
        <Li
        ><a href="/consultancies/kangaroo-education-foundation-pvt.-ltd."
          >{topConsultancies}</a
        ></Li
      >
        {/each}
    </List>
    
    <Heading tag="h2">Conclusion</Heading>
    <p>{testGuideData.conculsion}</p>
  </div>
  