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
  <title>StudyAbroadNP - Study in Europe</title>
</svelte:head>

<div class="study-abroad-blog-container">
  <h1>Study in Europe: A Complete Guide for Nepali Students</h1>

  <img src="/imgs/europe.jpeg" alt="Europe Image" />

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

  <Heading tag="h5">Cost to Study in Europe(in NPR)</Heading>
  <Table>
    <TableHead>
      <TableHeadCell>Program</TableHeadCell>
      <TableHeadCell>Tuition Fees(per year)</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      <TableBodyRow>
        <TableBodyCell>Undergraduate</TableBodyCell>
        <TableBodyCell>NPR 1,000,000 - NPR 5,000,000</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Postgraduate</TableBodyCell>
        <TableBodyCell>NPR 1,500,000 - NPR 6,000,000</TableBodyCell>
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
        <TableBodyCell>6.0 - 6.5</TableBodyCell>
        <TableBodyCell>6.5 - 7.0</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>TOEFL</TableBodyCell>
        <TableBodyCell>iBT 79-93</TableBodyCell>
        <TableBodyCell>iBT 94-101</TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>

  <Heading tag="h5">Top Courses and Their Costs</Heading>
  <Table>
    <TableHead>
      <TableHeadCell>Course</TableHeadCell>
      <TableHeadCell>Tuition Fees (per year)</TableHeadCell>
      <TableHeadCell>Popular Universities</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      <TableBodyRow>
        <TableBodyCell>Engineering</TableBodyCell>
        <TableBodyCell
          >NPR 0 (at public universities) - NPR 5,600,000</TableBodyCell
        >
        <TableBodyCell>
          Imperial College London,<br />
          ETH Zurich,<br />
          Technical University of Munich
        </TableBodyCell>
      </TableBodyRow>

      <TableBodyRow>
        <TableBodyCell>Computer Science</TableBodyCell>
        <TableBodyCell
          >NPR 0 (at public universities) - NPR 5,400,000</TableBodyCell
        >
        <TableBodyCell>
          University of Cambridge,<br />
          ETH Zurich,<br />
          University of Edinburgh
        </TableBodyCell>
      </TableBodyRow>

      <TableBodyRow>
        <TableBodyCell>Business Administration</TableBodyCell>
        <TableBodyCell
          >NPR 0 (at public universities) - NPR 15,600,000</TableBodyCell
        >
        <TableBodyCell>
          London Business School,<br />
          INSEAD,<br />
          IE Business School
        </TableBodyCell>
      </TableBodyRow>

      <TableBodyRow>
        <TableBodyCell>Medicine</TableBodyCell>
        <TableBodyCell
          >NPR 0 (at public universities) - NPR 16,500,000</TableBodyCell
        >
        <TableBodyCell>
          University of Oxford,<br />
          Karolinska Institute,<br />
          Heidelberg University
        </TableBodyCell>
      </TableBodyRow>

      <TableBodyRow>
        <TableBodyCell>Humanities and Social Sciences</TableBodyCell>
        <TableBodyCell
          >NPR 0 (at public universities) - NPR 3,600,000</TableBodyCell
        >
        <TableBodyCell>
          London School of Economics and Political Science (LSE),<br />
          Sciences Po,<br />
          University of Amsterdam
        </TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>

  <Heading tag="h5">Conclusion</Heading>
  <p>SEO</p>
</div>
