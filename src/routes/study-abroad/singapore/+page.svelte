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
  <title>StudyAbroadNP - Study in Singapore</title>
</svelte:head>

<div class="study-abroad-blog-container">
  <h1>Study in Singapore: A Complete Guide for Nepali Students</h1>

  <img src="/imgs/singapore.jpeg" alt="Singapore Image" />

  <p class="first-p">
    Singapore is a global financial hub known for its modern skyline, cultural
    diversity, and economic strength. Despite its small size, the city-state is
    a powerhouse in finance, technology, trade, and tourism. With world-class
    infrastructure, a highly skilled workforce, and a business-friendly
    environment, Singapore attracts multinational corporations and entrepreneurs
    from around the world. <br />
    The city's rich cultural blend of Chinese, Malay, Indian, and Western influences
    makes it a unique and vibrant destination. Known for its cleanliness, safety,
    and efficiency, Singapore remains a top choice for both travelers and businesses.
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

  <Heading tag="h5">Cost to Study in Singapore(in NPR)</Heading>
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
        <TableBodyCell>Postgraduate</TableBodyCell>
        <TableBodyCell>NPR 3,000,000 - NPR 6,000,000</TableBodyCell>
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
        <TableBodyCell>Hospitality Management</TableBodyCell>
        <TableBodyCell>NPR 2,000,000 - NPR 4,500,000</TableBodyCell>
        <TableBodyCell
          >Singapore Institute of Technology(SIT),<br />Temasek Polytechnic,
          <br /> Nanyang Polytechnic
        </TableBodyCell>
      </TableBodyRow>

      <TableBodyRow>
        <TableBodyCell>Business and Management</TableBodyCell>
        <TableBodyCell>NPR 3,000,000 - NPR 6,000,000</TableBodyCell>
        <TableBodyCell>
          Singapore Management University(SMU), <br />Nanyang Technological
          University(NTU), <br />National University of Singapore(NUS)</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Engineering and Tech</TableBodyCell>
        <TableBodyCell>NPR 2,500,000 - NPR 5,000,000</TableBodyCell>
        <TableBodyCell
          >National University of Singapore(NUS),<br /> Nanyang Technological
          University(NTU), <br />Singapore University of Technology and
          Design(SUTD)</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Information Technology</TableBodyCell>
        <TableBodyCell>NPR 2,000,000 - NPR 4,500,000</TableBodyCell>
        <TableBodyCell
          >Nanyang Technological University(NTU), <br />National University of
          Singapore(NUS),
          <br />Singapore Management University(SMU)</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Health and Medicine</TableBodyCell>
        <TableBodyCell>NPR 4,000,000 - NPR 8,000,000</TableBodyCell>
        <TableBodyCell
          >National University of Singapore(NUS) , <br /> Duke-NUS Medical
          School,
          <br />Yong Loo Lin School of Medicine</TableBodyCell
        >
      </TableBodyRow>
    </TableBody>
  </Table>

  <Heading tag="h5">Conclusion</Heading>
  <p>
    Singapore continues to thrive as a leading global city, excelling in
    finance, innovation, and tourism. Its strategic location, strong economy,
    and multicultural appeal make it an essential destination for business and
    leisure. Whether exploring its modern attractions, engaging in trade, or
    experiencing its diverse culture, Singapore offers endless opportunities for
    growth and success.
  </p>
</div>
