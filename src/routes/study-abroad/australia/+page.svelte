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
  <title>StudyAbroadNP - Study in Australia</title>
</svelte:head>

<div class="study-abroad-blog-container">
  <h1>Study in Australia: A Comprehensive Guide for Nepali Students</h1>

  <img src="/imgs/australia.jpeg" alt="Australia Image" /><br />
  <p class="text-base mt-2">
    Australia is a top choice for international students, offering world-class
    education, diverse programs, and renowned universities like the University
    of Melbourne and Australian National University. With options in business,
    engineering, healthcare, and more, students can align their studies with
    career goals. <br />
    <br />The country’s supportive visa policies, including post-study work
    options, and its multicultural, welcoming environment make it ideal for
    global learners. Beyond academics, Australia combines vibrant city life with
    stunning natural beauty, providing an exceptional and inclusive study
    experience.
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
  </List>

  <h2>Cost to Study in Australia (in NPR)</h2>
  <Table>
    <TableHead>
      <TableHeadCell>Program</TableHeadCell>
      <TableHeadCell>Tuition Fees(per year)</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      <TableBodyRow>
        <TableBodyCell>Diploma</TableBodyCell>
        <TableBodyCell>NPR 1,200,000 - NPR 2,500,000</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Undergraduate</TableBodyCell>
        <TableBodyCell>NPR 2,500,000 - NPR 4,500,000</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Graduate</TableBodyCell>
        <TableBodyCell>NPR 3,000,000 - NPR 6,000,000</TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>

  <h2>Language Score Requirements</h2>
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

  <h2>Top Courses and Their Costs</h2>
  <Table>
    <TableHead>
      <TableHeadCell>Course</TableHeadCell>
      <TableHeadCell>Tuition Fees(per year)</TableHeadCell>
      <TableHeadCell>Popular Universities</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      <TableBodyRow>
        <TableBodyCell>Business and Management</TableBodyCell>
        <TableBodyCell>NPR 3,000,000 - NPR 4,500,000</TableBodyCell>
        <TableBodyCell
          >University of Melbourne, <br />University of Sydney, <br />University
          of Queensland</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Engineering and Tech</TableBodyCell>
        <TableBodyCell>NPR 3,500,000 - NPR 5,500,000</TableBodyCell>
        <TableBodyCell
          >University of New South Wales,<br /> University of Melbourne, <br /> Monash
          University</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Information Technology</TableBodyCell>
        <TableBodyCell>NPR 3,200,000 - NPR 4,800,000</TableBodyCell>
        <TableBodyCell
          >Australian National University, <br /> University of Technology
          Sydney,
          <br />University of Melbourne</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Health and Medicine</TableBodyCell>
        <TableBodyCell>NPR 4,500,000 - NPR 6,500,000</TableBodyCell>
        <TableBodyCell
          >University of Sydney, <br /> University of Melbourne, <br /> Monash University</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Arts and Humanitie</TableBodyCell>
        <TableBodyCell>NPR 2,800,000 - NPR 4,000,000</TableBodyCell>
        <TableBodyCell
          >University of Melbourne,<br /> University of Sydney, <br /> Australian
          National University</TableBodyCell
        >
      </TableBodyRow>
    </TableBody>
  </Table>

  <h2>Conclusion</h2>
  <p>
    Australia is more than just a destination for higher education; it is a
    gateway to global opportunities and personal growth. With its excellent
    academic reputation, welcoming culture, and diverse opportunities, studying
    in Australia is an investment in your future. Whether you're pursuing a
    degree in a prestigious institution or exploring pathways to permanent
    residency, Australia offers the resources and support to help you succeed.
  </p>
</div>
