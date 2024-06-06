<script>
    let consultancyData= {
        name: "",
        address: "",
        phone: "",
        about: "",
        socials: {
            facebook: "",
            instagram: "",
            youtube: "",
            linkedin: ""
        },
        images: [],
        thumbnailImage: "",
        testPreparations: [],
        countriesFocused: [],
        mapURL: ""
    }

    const handleSubmit= ()=>{
        let imagesArr= consultancyData.images.replaceAll(" ","").split(",");
        let testPreparationsArr= consultancyData.testPreparations.replaceAll(" ","").split(",");
        let countriesFocusedArr= consultancyData.countriesFocused.replaceAll(" ","").split(",");

        consultancyData.images= [...imagesArr];
        consultancyData.testPreparations= [...testPreparationsArr];
        consultancyData.countriesFocused= [...countriesFocusedArr];

        console.log((JSON.stringify(consultancyData)));
    }
</script>

<div class="consultancy-detail-form">
    <h2>Details about the consultancy</h2>
    <input bind:value={consultancyData.name} type="text" placeholder="Enter name of the consultancy">
    <input bind:value={consultancyData.address} type="text" placeholder="Enter address">
    <input bind:value={consultancyData.phone} type="number" placeholder="Enter phone number">
    <textarea bind:value={consultancyData.about} placeholder="About the consultancy"></textarea>
    <input bind:value={consultancyData.socials.facebook} type="text" placeholder="Facebook link">
    <input bind:value={consultancyData.socials.instagram} type="text" placeholder="Instagram link">
    <input bind:value={consultancyData.socials.youtube} type="text" placeholder="Youtube link">
    <input bind:value={consultancyData.socials.linkedin} type="text" placeholder="Linkedin link">
    <input bind:value={consultancyData.testPreparations} type="text" placeholder="Test preparations with comma">
    <input bind:value={consultancyData.countriesFocused} type="text" placeholder="Countries focused with comma">
    <input bind:value={consultancyData.mapURL} type="text" placeholder="Map URL">
    <input bind:value={consultancyData.images} type="text" placeholder="Consultancy images with comma">
    <input bind:value={consultancyData.thumbnailImage} type="text" placeholder="Thumbnail image">
    <button class="submit" on:click={handleSubmit}>Submit</button>
</div>

<style>
    .consultancy-detail-form{
        margin: 2rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .consultancy-detail-form input, textarea{
        margin: .5rem 0;
        padding: 0 .5rem;
        width: 400px;
        height: 35px;
        border: 1px solid #797979;
        border-radius: 3px;
        outline: navajowhite;
    }
    textarea{
        padding: .5rem;
        height: 150px;
    }
    button{
        padding: .5rem 1rem;
        outline: none;
    }
</style>