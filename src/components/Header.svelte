<script>
    import studyAbroadImg from "$lib/img/studyabroad.png";

    let openMobileMenu= false;
</script>

<div class="header">
    <div class="header-title">
        <img src={studyAbroadImg} alt="Study abroad logo">
        <a href="/">Study<span>Abroad</span>Np</a>
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
        <a class="header-upcoming-classes" href="/upcoming-classes">Upcoming Classes</a>
        <div class="header-test-guides-dropdown">
            <a class="header-test-guides" href="/test-guides">Test guides<i class="fa-solid fa-chevron-down"></i></a>
            <div class="drop-down">
                <li><a href="/test-guides/ielts">IELTS</a></li>
                <li><a href="/test-guides/pte">PTE</a></li>
                <li><a href="/test-guides/sat">SAT</a></li>
                <li><a href="/test-guides/toefl">TOEFL</a></li>
                <li><a href="/test-guides/gre">GRE</a></li>
                <li><a href="/test-guides/gmat">GMAT</a></li>
            </div>
        </div>
        <div class="header-top-consultancies"><a href="/consultancy">Top Consultancies</a></div>
    </div>

    <div class="header-ham">
        <i class={`fa-solid ${openMobileMenu? 'fa-times': 'fa-bars'}`} on:click={()=> openMobileMenu= !openMobileMenu}></i>
    </div>
    {#if openMobileMenu}
    <div class="mobile-menu">
        <div class="mb mobile-study-abroad-dropdown">
            <a class="mobile-study-abroad" href="/study-abroad">Study Abroad<i class="fa-solid fa-chevron-down"></i></a>
            <div class="mobile-drop-down">
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
        <a class="mb mobile-upcoming-classes" href="/upcoming-classes">Upcoming Classes</a>
        <div class="mb mobile-test-guides-dropdown">
            <a class="mobile-test-guides" href="/test-guides">Test guides<i class="fa-solid fa-chevron-down"></i></a>
            <div class="mobile-drop-down">
                <li><a href="/test-guides/ielts">IELTS</a></li>
                <li><a href="/test-guides/pte">PTE</a></li>
                <li><a href="/test-guides/sat">SAT</a></li>
                <li><a href="/test-guides/toefl">TOEFL</a></li>
                <li><a href="/test-guides/gre">GRE</a></li>
                <li><a href="/test-guides/gmat">GMAT</a></li>
            </div>
        </div>
        <div class="mobile-top-consultancies"><a href="/consultancy">Top Consultancies</a></div>
    </div>
    {/if}
</div>

<style>
    .header{
        padding: 1.5rem 5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #797979;
        position: relative;
    }
    .header-title{
        font-size: 1.35rem;
        font-weight: bold;
        display: flex;
        align-items: center;
    }
    .header-title img{
        width: 75px;
    }
    .header-title span{
        margin: 0 .1rem;
        color: var(--blue);
    }
    .header-right{
        width: max-content;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        /* display: none; */
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

    .header-ham{
        font-size: 1.25rem;
        cursor: pointer;
        display: none;
    }
    .header-ham:hover{
        color: #797979;
    }
    .mobile-menu{
        padding: 1.5rem;
        width: 100%;
        background-color: #fff;
        border-top: 1px solid #797979;
        border-bottom: 2px solid #797979;
        gap: 1.5rem;
        position: absolute;
        top: 5rem;
        left: 0;
        z-index: 999;
        display: block;
    }
    .mb{
        padding: .5rem 0;
    }
    .mobile-menu a:hover{
        color: var(--blue);
        transition: .3s;
    }
    .mobile-drop-down{
        padding: .5rem 0 .5rem 1rem;
        background-color: #dcdcdc;
        display: none;
    }
    .mobile-study-abroad, .mobile-test-guides{
        display: flex;
        justify-content: space-between;
    }
    .mobile-study-abroad-dropdown:hover .mobile-drop-down, .mobile-test-guides-dropdown:hover .mobile-drop-down{
        display: block;
    }
    .mobile-drop-down li{
        padding: .25rem 0;
    }

    /* media queries */
    @media (max-width: 1075px){
        .header{
            padding: 1.5rem 2.5rem;
        }
        .header-right{
            gap: 15px;
        }
    }
    @media (max-width: 950px){
        .header{
            padding: 1.5rem;
        }
    }
    @media (max-width: 900px){
        .header-right{
            display: none;
        }
        .header-ham{
            display: block;
        }
    }

    @media (min-width: 901px){
        .mobile-menu{
            display: none;
        }
    }
</style>