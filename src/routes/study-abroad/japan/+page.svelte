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
  <title>StudyAbroadNP - Study in Japan</title>
</svelte:head>

<div class="study-abroad-blog-container">
  <h1>Study in Japan: A Complete Guide for Nepali Students</h1>

  <img src="/imgs/japan.jpeg" alt="Japan Image" />

  <p class="first-p">
    Japan is a country known for its rich history, cutting-edge technology, and
    unique cultural heritage. From the bustling metropolis of Tokyo to the
    historic temples of Kyoto and the scenic beauty of Mount Fuji, Japan offers
    a blend of tradition and modernity. As one of the world’s largest economies,
    it leads in industries such as automotive, robotics, electronics, and
    finance. <br />
    Tourism is a major attraction, with visitors drawn to iconic landmarks like the
    cherry blossoms, ancient castles, and vibrant festivals. Japan’s efficient transportation
    system, including the famous Shinkansen (bullet trains), and its emphasis on
    hospitality make it an appealing destination for travelers and businesses.
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

  <Heading tag="h5">Cost to Study in Japan(in NPR)</Heading>
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
      <TableHeadCell>Postgraduate</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      <TableBodyRow>
        <TableBodyCell>JLPT</TableBodyCell>
        <TableBodyCell>N3 or above</TableBodyCell>
        <TableBodyCell>N2 or above</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>TOEFL</TableBodyCell>
        <TableBodyCell>iBT 79 - 93</TableBodyCell>
        <TableBodyCell>iBT 94 - 101</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>ILETS</TableBodyCell>
        <TableBodyCell>6.0 - 6.5</TableBodyCell>
        <TableBodyCell>6.5 - 7.0</TableBodyCell>
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
        <TableBodyCell>Japanese Language Studies</TableBodyCell>
        <TableBodyCell>NPR 1,200,000 - NPR 2,500,000</TableBodyCell>
        <TableBodyCell>
          International Christian University, <br />Sophia University,
          <br />Ritsumeikan University</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Engineering and Tech</TableBodyCell>
        <TableBodyCell>NPR 1,800,000 - NPR 4,000,000</TableBodyCell>
        <TableBodyCell
          >University of Tokyo,<br /> Kyoto University, <br />Tokyo Institute of
          Technology</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Information Technology</TableBodyCell>
        <TableBodyCell>NPR 1,500,000 - NPR 3,500,000</TableBodyCell>
        <TableBodyCell
          >Osaka University, <br /> Tohoku University,
          <br />Tokyo Institute of Technology</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Business Administration</TableBodyCell>
        <TableBodyCell>NPR 2,000,000 - NPR 4,500,000</TableBodyCell>
        <TableBodyCell
          >Waseda University,<br />Keio University, <br />Kyoto University</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Health and Medicine</TableBodyCell>
        <TableBodyCell>NPR 3,000,000 - NPR 6,000,000</TableBodyCell>
        <TableBodyCell
          >University of Tokyo, <br />Kyoto University ,
          <br />Osaka University</TableBodyCell
        >
      </TableBodyRow>
    </TableBody>
  </Table>

  <Heading tag="h5">Conclusion</Heading>
  <p>
    Japan continues to be a powerhouse in technology, culture, and economic
    growth. Its balance of ancient traditions and futuristic advancements makes
    it a unique and influential global player. Whether for business, tourism, or
    education, Japan remains a key destination, offering endless opportunities
    for exploration and innovation.
  </p>
</div>
