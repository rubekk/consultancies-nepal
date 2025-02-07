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
  <title>StudyAbroadNP - Study in USA</title>
</svelte:head>

<div class="study-abroad-blog-container">
  <h1>Study in the USA: A Comprehensive Guide for Nepali Students</h1>

  <img src="/imgs/usa.jpeg" alt="USA Image" />
  <p class="first-p">
    The United States (USA) is one of the world’s most influential nations,
    known for its economic power, cultural diversity, and technological
    innovation. With major cities like New York, Los Angeles, and Chicago, the
    country is a global hub for finance, entertainment, and industry. The U.S.
    leads in key sectors such as technology, healthcare, aerospace, and
    manufacturing, with Silicon Valley driving advancements in AI, software, and
    digital innovation. <br />
    The country’s diverse landscapes, from the beaches of California to the mountains
    of Colorado, offer endless opportunities for exploration. With a strong education
    system and dynamic job market, the USA continues to be a top destination for
    business, travel, and investment.
  </p>

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

  <Heading tag="h5">Cost to Study in Australia(in NPR)</Heading>
  <Table>
    <TableHead>
      <TableHeadCell>Program</TableHeadCell>
      <TableHeadCell>Tuition Fees(per year)</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      <TableBodyRow>
        <TableBodyCell>Diploma</TableBodyCell>
        <TableBodyCell>NPR 1,500,000 - NPR 3,000,000</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Undergraduate</TableBodyCell>
        <TableBodyCell>NPR 3,000,000 - NPR 6,000,000</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Graduate</TableBodyCell>
        <TableBodyCell>NPR 3,500,000 - NPR 7,000,000</TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>

  <Heading tag="h5">Language Score Requirements</Heading>
  <Table>
    <TableHead>
      <TableHeadCell>Test</TableHeadCell>
      <TableHeadCell>Diploma</TableHeadCell>
      <TableHeadCell>Undergraduate</TableHeadCell>
      <TableHeadCell>Graduate</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      <TableBodyRow>
        <TableBodyCell>IELTS</TableBodyCell>
        <TableBodyCell>Overall 5.5, no band &lt; 5.0</TableBodyCell>
        <TableBodyCell>Overall 6.0, no band &lt; 5.5</TableBodyCell>
        <TableBodyCell>Overall 6.5, no band &lt; 6.0</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>TOEFL</TableBodyCell>
        <TableBodyCell>60-78</TableBodyCell>
        <TableBodyCell>79-93</TableBodyCell>
        <TableBodyCell>94-101</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>PTE</TableBodyCell>
        <TableBodyCell>42-94</TableBodyCell>
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
        <TableBodyCell>NPR 3,500,000 - NPR 5,500,000</TableBodyCell>
        <TableBodyCell>
          Harvard University, <br />University of Pennsylvania, <br />Stanford
          University</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Engineering and Tech</TableBodyCell>
        <TableBodyCell>NPR 4,000,000 - NPR 6,500,000</TableBodyCell>
        <TableBodyCell
          >MIT,<br /> Stanford University, <br />UC Berkeley University</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Information Technology</TableBodyCell>
        <TableBodyCell>NPR 3,800,000 - NPR 6,000,000</TableBodyCell>
        <TableBodyCell
          >Carnegie Mellon University, <br /> MIT,
          <br />Stanford University</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Health and Medicine</TableBodyCell>
        <TableBodyCell>NPR 5,000,000 - NPR 8,000,000</TableBodyCell>
        <TableBodyCell
          >Harvard University, <br />Johns Hopkins University,
          <br />UCSF</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Arts and Humanitie</TableBodyCell>
        <TableBodyCell>NPR 3,000,000 - NPR 5,000,000</TableBodyCell>
        <TableBodyCell
          >New York University,<br />UCLA, <br /> Columbia University</TableBodyCell
        >
      </TableBodyRow>
    </TableBody>
  </Table>

  <Heading tag="h5">Conclusion</Heading>
  <p>
    The United States remains a dominant force in global affairs, excelling in
    innovation, business, and culture. Its diverse economy, rich history, and
    technological leadership make it a key destination for entrepreneurs,
    tourists, and professionals. Whether pursuing business opportunities,
    exploring its vast landscapes, or experiencing its vibrant culture, the USA
    offers limitless possibilities for growth and success.
  </p>
</div>
