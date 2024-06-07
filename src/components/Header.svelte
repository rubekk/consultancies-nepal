<script>
    let showTestGuides= false;
</script>

<div class="header">
    <div class="header-title">
        <a href="/">Study<span>Abroad</span></a>
    </div>
    <div class="header-right">
        <div class="header-study-abroad-dropdown">
            <a class="header-study-abroad" href="/study-abroad">Study Abroad<i class="fa-solid fa-chevron-down"></i></a>
            <div class="drop-down">
                <li><a href="/study-abroad/australia">Study in Australia</a></li>
                <li><a href="/study-abroad/usa">Study in USA</a></li>
                <li><a href="/study-abroad/canada">Study in Canada</a></li>
                <li><a href="/study-abroad/united-kingdom">Study in United Kingdom</a></li>
                <li><a href="/study-abroad/new-zealand">Study in New Zealand</a></li>
                <li><a href="/study-abroad/japan">Study in Japan</a></li>
                <li><a href="/study-abroad/south-korea">Study in South Korea</a></li>
                <li><a href="/study-abroad/singapore">Study in Singapore</a></li>
                <li><a href="/study-abroad/germany">Study in Germany</a></li>
                <li><a href="/study-abroad/europe">Study in Europe</a></li>
            </div>
        </div>
        <a class="header-upcoming-classes" href="./upcoming-classes">Upcoming Classes</a>
        <div class="header-test-guides-dropdown">
            <a class="header-test-guides" href="/test-guides">Test guides<i class="fa-solid fa-chevron-down"></i></a>
            <div class="drop-down">
                <li><a href="/test-guides/ielts">IELTS</a></li>
                <li><a href="/test-guides/pte">PTE</a></li>
                <li><a href="/test-guides/sat">SAT</a></li>
                <li><a href="/test-guides/toefl">TOEFL</a></li>
            </div>
        </div>
        <div class="header-top-consultancies"><a href="/consultancy">Top Consultancies</a></div>
    </div>
</div>

<style>
    .header{
        padding: 1.5rem 5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #797979;
    }
    .header-title{
        font-size: 1.35rem;
        font-weight: bold;
    }
    .header-title span{
        margin-left: .1rem;
        color: var(--blue);
    }
    .header-right{
        width: max-content;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }
    .header-right i{
        margin-left: .25rem;
        color: #797979;
    }
    .header-study-abroad-dropdown, .header-test-guides-dropdown{
        position: relative;
    }
    .header-study-abroad-dropdown:hover .drop-down, .header-test-guides-dropdown:hover .drop-down{
        display: block;
    }
    .drop-down{
        background-color: #797979;
        border-radius: 3px;
        position: absolute;
        top: 1.5rem;
        left: -.5rem;
        display: none;
        z-index: 999;
    }
    .drop-down li{
        padding: .5rem 1rem;
        width: 125px;
        text-align: center;
        border-bottom: 1px solid #fff;
        cursor: pointer;
    }
    .drop-down a{
        color: #fff;
    }
    .drop-down a:hover{
        color: #000;
    }
    .header-study-abroad-dropdown .drop-down{
        left: -4.5rem;
    }
    .header-study-abroad-dropdown li{
        width: 250px;
    }
</style>