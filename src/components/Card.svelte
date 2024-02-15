<script> 
    export let imgSrc="https://www.kiec.edu.np/wp-content/uploads/2020/08/KIEC-Sym-Logo.png",
            name="Good Consultancy",
            address="Kathmandu";

    let link="./consultancy/"+name.toLowerCase().replaceAll(" ","-");
</script>

<div class="card">
    <div class="card-img">
        <img src={imgSrc} alt="">
    </div>
    <div class="card-text">
        <div class="consultancy-name" title={name}>{name}</div>
        <div class="consultancy-address"><i class="fa-solid fa-location-dot"></i> {address}</div>
        <button class="view-more-btn">
            <a href={link}>View more <i class="fa-solid fa-chevron-right"></i></a>
        </button>
    </div>
</div>

<style>
    .card{
        width: 350px;
        height: 150px;
        display: flex;
        align-items: center;
        background-color: #fff;
        border: 1px solid #797979;
        border-radius: 3px;
        box-shadow: 3px 3px 3px rgb(46 128 187 / 20%);
    }
    .card-img{
        padding: .25rem;
        margin-right: 1rem;
        width: 130px;
        height: 120px;
    }
    .card-img img{
        width: 100%;
        height: 100%;
    }
    .card-text{
        padding: .5rem .75rem;
        width: 230px;
        border-left: 1px solid #dcdcdc;
    }
    .consultancy-name{
        font-size: 1.1rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .consultancy-address{
        margin: .25rem 0 .5rem;
        font-size: .7rem;
        color: #797979;
    }
    .consultancy-address i{
        margin-right: .25rem;
    }
    .view-more-btn{
        padding: .5rem .7rem .5rem .75rem;
        color: #fff;
        background-color: var(--blue);
        border: none;
        border-radius: 3px;
    }
    .view-more-btn a{
        color: #fff;
    }
    .view-more-btn i{
        font-size: .75rem;
    }
</style>