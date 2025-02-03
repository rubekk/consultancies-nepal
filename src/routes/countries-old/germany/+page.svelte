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
  <title>StudyAbroadNP - Study in Germany</title>
</svelte:head>

<div class="study-abroad-blog-container">
  <h1>Study in Germany: A Complete Guide for Nepali Students</h1>

  <img src="/imgs/germany.jpeg" alt="Germany Image" />

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

  <Heading tag="h5">Cost to Study in Germany(in NPR)</Heading>
  <Table>
    <TableHead>
      <TableHeadCell>Program</TableHeadCell>
      <TableHeadCell>Tuition Fees(per year)</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      <TableBodyRow>
        <TableBodyCell>Undergraduate</TableBodyCell>
        <TableBodyCell
          >NPR 0 (at public universities) - NPR 3,000,000</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Postgraduate</TableBodyCell>
        <TableBodyCell
          >NPR 0 (at public universities) - NPR 4,500,000</TableBodyCell
        >
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
        <TableBodyCell>TestDaF</TableBodyCell>
        <TableBodyCell>TDN 4-5</TableBodyCell>
        <TableBodyCell>TDN 4-5</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>DSH</TableBodyCell>
        <TableBodyCell>DSH 2</TableBodyCell>
        <TableBodyCell>DSH 2</TableBodyCell>
      </TableBodyRow>
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
      <TableHeadCell>Tuition Fees(per year)</TableHeadCell>
      <TableHeadCell>Popular Universities</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      <TableBodyRow>
        <TableBodyCell>Renewable Energy</TableBodyCell>
        <TableBodyCell
          >NPR 0 (at public universities) - NPR 3,500,000</TableBodyCell
        >
        <TableBodyCell
          >Brandenburg University of Technology,<br /> University of Kassel,
          <br /> University Oldenburg
        </TableBodyCell>
      </TableBodyRow>

      <TableBodyRow>
        <TableBodyCell>Business and Management</TableBodyCell>
        <TableBodyCell
          >NPR 0 (at public universities) - NPR 4,500,000</TableBodyCell
        >
        <TableBodyCell>
          Mannheim Business School, <br />WHU-Otto Beisheim School of
          Management, <br />Frankfurt School of Finance & Management</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Engineering and Tech</TableBodyCell>
        <TableBodyCell
          >NPR 0 (at public universities) - NPR 3,000,000</TableBodyCell
        >
        <TableBodyCell
          >Technical University of Munich,<br /> RWTH Aachen University,
          <br />Technical University pf Berlin</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Computer Science</TableBodyCell>
        <TableBodyCell
          >NPR 0 (at public universities) - NPR 3,500,000</TableBodyCell
        >
        <TableBodyCell
          >Technical University of Munich, <br />University of Freiburg,
          <br />University of Stuttgart</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Health and Medicine</TableBodyCell>
        <TableBodyCell
          >NPR 0 (at public universities) - NPR 6,000,000</TableBodyCell
        >
        <TableBodyCell
          >Heidelberg University , <br /> University of Munich,
          <br />Charité - Universitätsmedizin Berlin</TableBodyCell
        >
      </TableBodyRow>
    </TableBody>
  </Table>

  <Heading tag="h5">Conclusion</Heading>
  <p>SEO</p>
</div>
