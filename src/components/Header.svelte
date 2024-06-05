<script>
    let showTestGuides= false;
</script>

<div class="header">
    <div class="header-title">
        <a href="/">Consultancies<span>Nepal</span></a>
    </div>
    <div class="header-right">
        <div class="header-test-guides-dropdown">
            <a class="parent-a" href="./test-guides">Test guides<i class="fa-solid fa-chevron-down"></i></a>
            <div class="drop-down">
                <li><a href="/test-guides/ielts">IELTS</a></li>
                <li><a href="/test-guides/pte">PTE</a></li>
                <li><a href="/test-guides/sat">SAT</a></li>
                <li><a href="/test-guides/toefl">TOEFL</a></li>
            </div>
        </div>
        <div class="header-top-consultancies"><a href="./consultancy">Top Consultancies</a></div>
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
    .header-test-guides-dropdown{
        position: relative;
    }
    .header-test-guides-dropdown:hover .drop-down{
        display: block;
    }
    .parent-a i{
        margin-left: .25rem;
        color: #797979;
    }
    .drop-down{
        background-color: #797979;
        border-radius: 3px;
        position: absolute;
        top: 1.5rem;
        left: -.5rem;
        display: none;
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
   
</style>