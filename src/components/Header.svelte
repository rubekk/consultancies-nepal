<script>
    let showTestGuides= false;
</script>

<div class="header">
    <div class="title">
        <a href="/">Consultancies<span>Nepal</span></a>
    </div>
    <div class="right">
        <ul>
            <li on:mouseover={()=> showTestGuides=true} on:mouseleave={()=> showTestGuides=false}>
                <a href="./test-guides">Test guides<i class="fa-solid fa-chevron-down"></i></a>
                {#if showTestGuides}
                <div on:mouseenter={()=> showTestGuides=true} on:mouseleave={()=> showTestGuides=false} class="test-guide-list">
                    <li><a href="/test-guides/ielts">IELTS</a></li>
                    <li><a href="/test-guides/pte">PTE</a></li>
                    <li><a href="/test-guides/sat">SAT</a></li>
                    <li><a href="/test-guides/toefl">TOEFL</a></li>
                </div>
                {/if}
            </li>
            <li><a href="./consultancy">Top Consultancies</a></li>
        </ul>
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
    .title{
        font-size: 1.25rem;
        font-weight: bold;
    }
    .title span{
        margin-left: .2rem;
        color: var(--blue);
    }
    .right ul{
        display: flex;
        gap: 30px;
    }
    .right li{
        list-style: none;
        cursor: pointer;
    }
    .right ul i{
        margin-left: .5rem;
        color: #797979;
    }
    .test-guide-list{
        width: 200px;
        background-color: #000;
        position: absolute;
        top: 3.3rem;
        right: 14rem;
    }
    .test-guide-list li{
        padding: .5rem 0;
        width: 100%;
        text-align: center;
        color: #fff;
        border-bottom: 1px solid #797979;
    }
    .test-guide-list a{
        color: #fff;
    }
</style>