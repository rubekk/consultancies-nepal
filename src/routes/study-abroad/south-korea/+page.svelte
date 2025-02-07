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
  <title>StudyAbroadNP - Study in South Korea</title>
</svelte:head>

<div class="study-abroad-blog-container">
  <h1>Study in South Korea: A Complete Guide for Nepali Students</h1>

  <img src="/imgs/south-korea.jpeg" alt="South Korea Image" />

  <p class="first-p">
    South Korea is a dynamic country known for its advanced technology, rich
    cultural heritage, and global influence in entertainment. Home to bustling
    cities like Seoul and Busan, the country blends modern skyscrapers with
    historic palaces and temples. South Korea is a leader in industries such as
    electronics, automotive, and telecommunications, with global brands like
    Samsung, Hyundai, and LG driving its economy.
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
        <TableBodyCell>Undergraduate</TableBodyCell>
        <TableBodyCell>NPR 1,500,000 - NPR 3,000,000</TableBodyCell>
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
      <TableHeadCell>Graduate</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      <TableBodyRow>
        <TableBodyCell>TOPIK</TableBodyCell>
        <TableBodyCell>Level 3 or above</TableBodyCell>
        <TableBodyCell>Level 4 or above</TableBodyCell>
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
        <TableBodyCell>Korean Language</TableBodyCell>
        <TableBodyCell>NPR 1,200,000 - NPR 2,500,000</TableBodyCell>
        <TableBodyCell
          >Sogang University,<br />Yonsi University, <br /> Korea University
        </TableBodyCell>
      </TableBodyRow>

      <TableBodyRow>
        <TableBodyCell>Business and Management</TableBodyCell>
        <TableBodyCell>NPR 2,000,000 - NPR 4,500,000</TableBodyCell>
        <TableBodyCell>
          Yonsei University, <br />Korea University, <br />Seoul National
          University</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Engineering and Tech</TableBodyCell>
        <TableBodyCell>NPR 1,800,000 - NPR 4,000,000</TableBodyCell>
        <TableBodyCell
          >Seoul National University,<br /> KAIST, <br />POSTECH</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Information Technology</TableBodyCell>
        <TableBodyCell>NPR 1,500,000 - NPR 3,500,000</TableBodyCell>
        <TableBodyCell
          >Korean University, <br />Yonsei University,
          <br />Sungkyunkwan University</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Health and Medicine</TableBodyCell>
        <TableBodyCell>NPR 3,000,000 - NPR 6,000,000</TableBodyCell>
        <TableBodyCell
          >Seoul National University , <br /> Yonsei University,
          <br />Korea University</TableBodyCell
        >
      </TableBodyRow>
    </TableBody>
  </Table>

  <Heading tag="h5">Conclusion</Heading>
  <p>
    South Korea continues to be a global powerhouse in technology, culture, and
    economic growth. Its fusion of tradition and modernity, along with its
    thriving industries and entertainment influence, makes it a key player on
    the world stage. Whether for business, tourism, or cultural exploration,
    South Korea offers limitless opportunities for innovation and discovery.
  </p>
</div>
