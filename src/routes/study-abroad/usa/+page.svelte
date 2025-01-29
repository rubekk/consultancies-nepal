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
    The United States is a top choice for international students because it
    provides top-notch education, a wide range of cultural experiences, and
    unparalleled employment chances. The USA offers a broad range of courses
    designed to satisfy the needs of students from diverse backgrounds and has
    home to famous universities like Harvard, MIT, and Stanford. Studying in the
    USA gives students the networks and abilities needed for success on a
    worldwide scale, from state-of-the-art research facilities to internship
    possibilities with multinational corporations.
  </p>
  <br />
  <p>
    Beyond academics, the USA is a center for innovation and personal
    development because of its dynamic campus culture, multicultural setting,
    and easy access to cutting-edge technology. The USA provides unmatched
    chances for research funding, scholarships, and post-study employment
    prospects, regardless of your academic level—undergraduate, graduate, or
    doctoral.
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
    Choosing to study in the USA is more than just an academic decision—it's an
    investment in your future. With its dynamic blend of academic excellence,
    career growth, and cultural diversity, the USA provides a platform to
    achieve your dreams and make a lasting impact. Explore opportunities to
    broaden your horizons, build global networks, and develop skills that set
    you apart in a competitive world. Start your journey today and turn your
    aspirations into achievements with an education from the USA.
  </p>
</div>
