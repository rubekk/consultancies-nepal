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
  <title>StudyAbroadNP - Study in United Kingdom</title>
</svelte:head>

<div class="study-abroad-blog-container">
  <h1>Study in the UK: A Complete Guide for Nepali Students</h1>

  <img src="/imgs/united-kingdom.jpeg" alt="United Kingdom Image" />

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

  <Heading tag="h5">Cost to Study in UK(in NPR)</Heading>
  <Table>
    <TableHead>
      <TableHeadCell>Program</TableHeadCell>
      <TableHeadCell>Tuition Fees(per year)</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      <TableBodyRow>
        <TableBodyCell>Undergraduate</TableBodyCell>
        <TableBodyCell>NPR 2,000,000 - NPR 4,500,000</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Graduate</TableBodyCell>
        <TableBodyCell>NPR 2,500,000 - NPR 5,000,000</TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>

  <Heading tag="h5">Language Score Requirements</Heading>
  <Table>
    <TableHead>
      <TableHeadCell>Test</TableHeadCell>
      <TableHeadCell>Undergraduate</TableHeadCell>
      <TableHeadCell>Graduate</TableHeadCell>
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
          London School of Economics, <br />University of Manchester,
          <br />University of Edinburgh</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Engineering and Tech</TableBodyCell>
        <TableBodyCell>NPR 2,500,000 - NPR 5,000,000</TableBodyCell>
        <TableBodyCell
          >Imperial College London,<br /> University of Manchester,
          <br />University of Bristol</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Information Technology</TableBodyCell>
        <TableBodyCell>NPR 2,200,000 - NPR 4,000,000</TableBodyCell>
        <TableBodyCell
          >University of Cambridge, <br /> University of Oxford,
          <br />University of Edinburgh</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Health and Medicine</TableBodyCell>
        <TableBodyCell>NPR 3,000,000 - NPR 6,000,000</TableBodyCell>
        <TableBodyCell
          >University of Oxford, <br /> University of Cambridge,
          <br />King's College University London</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Arts and Humanitie</TableBodyCell>
        <TableBodyCell>NPR 1,800,000 - NPR 3,500,000</TableBodyCell>
        <TableBodyCell
          >University of Oxford,<br />University of Cambridge, <br /> University
          of Edinburgh
        </TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>

  <Heading tag="h5">Conclusion</Heading>
  <p>SEO</p>
</div>
