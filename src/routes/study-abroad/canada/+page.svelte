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
  <title>StudyAbroadNP - Study in Canada</title>
</svelte:head>

<div class="study-abroad-blog-container">
  <h1>Study in Canada: A Comprehensive Guide for Nepali Students</h1>

  <img src="/imgs/canada.jpeg" alt="Canada Image" />

  <p class="first-p">
    With its top-notch educational system, varied cultural experiences, and
    welcoming atmosphere, Canada is one of the most popular countries for
    international students. Canada offers a broad range of degrees in
    disciplines like engineering, healthcare, business, and technology. It is
    well-known for its highly regarded universities, like the University of
    Toronto and McGill University. Studying in Canada can change your life
    because of the low tuition costs, post-graduate employment options, and
    possibility of obtaining permanent status. Canada blends academic excellence
    with high standards of living in its dynamic cities and stunning natural
    settings.
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

  <Heading tag="h5">Cost to Study in Canada(in NPR)</Heading>
  <Table>
    <TableHead>
      <TableHeadCell>Program</TableHeadCell>
      <TableHeadCell>Tuition Fees(per year)</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      <TableBodyRow>
        <TableBodyCell>Diploma</TableBodyCell>
        <TableBodyCell>NPR 1,000,000 - NPR 2,000,000</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Undergraduate</TableBodyCell>
        <TableBodyCell>NPR 1,500,000 - NPR 3,500,000</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Graduate</TableBodyCell>
        <TableBodyCell>NPR 2,000,000 - NPR 4,500,000</TableBodyCell>
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
        <TableBodyCell>NPR 2,000,000 - NPR 4,500,000</TableBodyCell>
        <TableBodyCell>
          McGill University, <br />University of Toronto, <br />University of
          British Columbia</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Engineering and Tech</TableBodyCell>
        <TableBodyCell>NPR 2,500,000 - NPR 5,000,000</TableBodyCell>
        <TableBodyCell
          >University of Waterloo,<br /> University of Toronto, <br />University
          of British Columbia</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Information Technology</TableBodyCell>
        <TableBodyCell>NPR 2,200,000 - NPR 4,000,000</TableBodyCell>
        <TableBodyCell
          >University of Toronto, <br /> University of British Columbia,
          <br />University of Waterloo</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Health and Medicine</TableBodyCell>
        <TableBodyCell>NPR 3,000,000 - NPR 6,000,000</TableBodyCell>
        <TableBodyCell
          >University of Toronto, <br /> University of British Columbia,
          <br />McMaster University</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Arts and Humanities</TableBodyCell>
        <TableBodyCell>NPR 1,800,000 - NPR 3,500,000</TableBodyCell>
        <TableBodyCell
          >McGill University,<br />University of Toronto, <br /> University of Columbia
        </TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>

  <Heading tag="h5">Conclusion</Heading>
  <p>
    Studying in Canada is an investment in your future. With globally recognized
    degrees, affordable education, and career-focused opportunities, Canada
    stands out as a prime destination for international students. Whether you're
    pursuing undergraduate, postgraduate, or vocational studies, the diverse and
    inclusive Canadian environment ensures personal and professional growth.
    Begin your journey to success in Canada today and unlock endless
    possibilities in your academic and career endeavors.
  </p>
</div>
