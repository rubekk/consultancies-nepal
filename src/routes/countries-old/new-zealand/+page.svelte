<script>
  import "./../style.css";
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
</script>

<svelte:head>
  <title>StudyAbroadNP - Study in New Zealand</title>
</svelte:head>

<div class="study-abroad-blog-container">
  <h1>Study in New Zealand: A Comprehensive Guide for Nepali Students</h1>

  <img src="/imgs/new-zealand.jpeg" alt="New Zealand Image" />

  <p class="first-p">SEO</p>
  <br />

  <Heading tag="h5">Required Documents</Heading>
  <List position="inside">
    <Li>Academic Documents</Li>
    <Li>Financial Documents</Li>
    <Li>Test Score</Li>
    <Li>English Lauguage</Li>
    <Li>Statement of Purpose</Li>
    <Li>Student Visa</Li>
    <Li>Letter of Recommendation</Li>
    <Li>CV/Resume</Li>
    <Li>Overseas Student Health Cover(OSHC)</Li>
    <Li>NO Objection Certificate</Li>
  </List> <br />

  <Heading tag="h5">Cost to Study in New Zealand(in NPR)</Heading>
  <Table>
    <TableHead>
      <TableHeadCell>Program</TableHeadCell>
      <TableHeadCell>Tuition Fees(per year)</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      <TableBodyRow>
        <TableBodyCell>Undergraduate</TableBodyCell>
        <TableBodyCell>NPR 1,500,000 - NPR 3,500,000</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Postgraduate</TableBodyCell>
        <TableBodyCell>NPR 2,000,000 - NPR 4,500,000</TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>

  <Heading tag="h5">Language Score Requirements</Heading>
  <Table>
    <TableHead>
      <TableHeadCell>Test</TableHeadCell>
      <TableHeadCell>Undergraduate</TableHeadCell>
      <TableHeadCell>Postgraduate</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      <TableBodyRow>
        <TableBodyCell>IELTS</TableBodyCell>
        <TableBodyCell>Overall 6.0, no band &lt; 5.5</TableBodyCell>
        <TableBodyCell>Overall 6.5, no band &lt; 6.0</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>TOEFL</TableBodyCell>
        <TableBodyCell>79-93</TableBodyCell>
        <TableBodyCell>94-101</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>PTE</TableBodyCell>
        <TableBodyCell>50-57</TableBodyCell>
        <TableBodyCell>58-64</TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>

  <Heading tag="h5">Top Courses and Their Costs</Heading>
  <Table>
    <TableHead>
      <TableHeadCell>Course</TableHeadCell>
      <TableHeadCell>Tuition Fees(per year)</TableHeadCell>
      <TableHeadCell>Popular Universities</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      <TableBodyRow>
        <TableBodyCell>Business and Management</TableBodyCell>
        <TableBodyCell>NPR 2,000,000 - NPR 4,500,000</TableBodyCell>
        <TableBodyCell>
          University of Auckland, <br />Massey University, <br />University of
          Technology</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Engineering and Tech</TableBodyCell>
        <TableBodyCell>NPR 2,500,000 - NPR 5,000,000</TableBodyCell>
        <TableBodyCell
          >University of Canterbury ,<br /> University of Auckland,
          <br />Auckland University of Technology</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Information Technology</TableBodyCell>
        <TableBodyCell>NPR 2,200,000 - NPR 4,000,000</TableBodyCell>
        <TableBodyCell
          >University of Waikato, <br />Victoria University of Wellington,
          <br />Auckland University of Technology</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Health and Medicine</TableBodyCell>
        <TableBodyCell>NPR 3,000,000 - NPR 6,000,000</TableBodyCell>
        <TableBodyCell
          >University of Otago, <br /> University of Auckland,
          <br />Auckland University of Technology</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Arts and Humanitie</TableBodyCell>
        <TableBodyCell>NPR 1,800,000 - NPR 3,500,000</TableBodyCell>
        <TableBodyCell
          >University of Canterbury,<br />University of Otago, <br /> Massey University
        </TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>

  <Heading tag="h5">Conclusion</Heading>
  <p>SEO</p>
</div>
