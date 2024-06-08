<script>
    export let classData;
</script>

<div class="class-card">
    <img src={classData.imgSrc} alt={classData.consultancyName}>
    <div class="class-card-txt">
        <div class="class-name">{classData.consultancyName}</div>
        <div class="class-address">{classData.address}</div>
        <div class="class-phone">{classData.phone}</div>
    </div>
</div>

<style>
    .class-card{
        width: 300px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 3px 3px 3px rgb(46 128 187 / 20%);
    }
    .class-card img{
        width: 100%;
        height: 300px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        object-fit: contain;
    }
    .class-card-txt{
        padding: .25rem .5rem;
    }
    .class-address, .class-phone{
        color: #797979;
        font-size: .8rem;
        font-style: italic;
    }
    .class-name{
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>