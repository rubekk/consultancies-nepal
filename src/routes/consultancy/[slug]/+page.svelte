<script>
	/** @type {import('./$types').PageData} */
	export let data;

	console.log(data);
</script>

<div class="consultancy-container">
	<div class="consultancy-landing">
		<div class="landing-background">
			<div class="landing-txts">
				<h1>{data.name}</h1>
				<p>
					<span><i class="fa-solid fa-location-dot"></i>{data.address},</span> 
					<span><i class="fa-solid fa-phone"></i>{data.phone}</span>
				</p>
				<div class="socials">
					<a href={data.socials.facebook} target="_blank">
						<i class="fa-brands fa-square-facebook"></i>
					</a>
					<a href={data.socials.instagram} target="_blank">
						<i class="fa-brands fa-instagram"></i>
					</a>
					<a href={data.socials.youtube} target="_blank">
						<i class="fa-brands fa-youtube"></i>
					</a>
					<a href={data.socials.linkedin} target="_blank">
						<i class="fa-brands fa-linkedin"></i>
					</a>
				</div>
				<button class="enquire">Enquire <i class="fa-solid fa-chevron-right"></i></button>
			</div>
		</div>
	</div>
	<div class="consultancy-data">
		<div class="data-nav">
			<ul>
				<li><a href="#about">About</a></li>
				<li><a href="#images">Images</a></li>
				<li><a href="#major-countries">Major countries</a></li>
				<li><a href="#test-preparations">Test preparations</a></li>
				<li><a href="#map">Map</a></li>
			</ul>
		</div>
		<div class="consultancy-data-bottom">
			<h2 class="data-sub-title" id="about">About</h2>
			<p>{data.about}</p>
			<h2 class="data-sub-title" id="images">Images</h2>
			<h2 class="data-sub-title" id="major-countries">Major countries</h2>
			<div class="data-countries">
				{#each data.countriesFocused as country}
				<span class="data-country">{country}</span>
				{/each}
			</div>
			<h2 class="data-sub-title" id="test-preparations">Test preparations</h2>
			<div class="data-tests">
				{#each data.testPreparations as test}
				<span class="data-test">{test}</span>
				{/each}
			</div>
			<div class="enquire-msg">
				<span>Have any queries?</span>
				<button class="enquire">Enquire <i class="fa-solid fa-chevron-right"></i></button>
			</div>
			<h2 class="data-sub-title" id="map">Map</h2>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2924028197476!2d85.32511167494923!3d27.708256825452246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1909b99b93a9%3A0x8d5a9aa79e4a45f0!2sAECC%20Global!5e0!3m2!1sen!2snp!4v1708522830177!5m2!1sen!2snp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			<div class="socials">
				<span>Social links:</span>
				<a href={data.socials.facebook} target="_blank">
					<i class="fa-brands fa-square-facebook"></i>
				</a>
				<a href={data.socials.instagram} target="_blank">
					<i class="fa-brands fa-instagram"></i>
				</a>
				<a href={data.socials.youtube} target="_blank">
					<i class="fa-brands fa-youtube"></i>
				</a>
				<a href={data.socials.linkedin} target="_blank">
					<i class="fa-brands fa-linkedin"></i>
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.consultancy-landing{
		width: 100%;
		height: 350px;
		background-image: url($lib/img/sydney.jpg);
		background-image: url("https://lh3.googleusercontent.com/p/AF1QipMKv9o_JWGLzFAotMIIq_nN_Rb3zcKak9s7-ciV=s0");
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		overflow: hidden;
	}

	/* landing background */
	.landing-background{
		padding: 0 2rem;	
		height: 100%;
		color: #fff;
		background-color: rgba(0,0,0,.5);
		display: flex;
		justify-content: center;
		flex-direction: column;
		position: absolute;
		top: 0;
		left: 17rem;
		transform: rotate(5deg);
	}
	.landing-txts{
		transform: rotate(-5deg);
	}
	.landing-txts h1{
		font-size: 3rem;
	}
	.landing-txts span{
		margin-right: .25rem;
	}
	.landing-txts i, .socials i{
		margin-right: .25rem;
	}
	.socials{
		margin: 1rem 0 0 .5rem;
	}
	.socials i{
		margin-right: .75rem;
		font-size: 1.25rem;
		color: #fff;
	}
	.socials i:hover{
		color: #dcdcdc;
	}
	.enquire{
		margin-top: 1rem;
		width: 125px;
		height: 35px;
		font-size: 18px;
		letter-spacing: 0.05cm;
		color: #fff;
		background-color: transparent;
		border: 2px solid var(--blue);
		display: flex;
		justify-content: center;
		align-items: center;
		transition: .3s;
	}
	.enquire:hover{
		background-color: var(--blue);
	}
	.enquire i{
		margin-left: .25rem;
	}

	/* data nav */
	.data-nav{
		margin-bottom: .5rem;
		border-radius: 3px;
	}
	.data-nav ul{
		list-style: none;
		display: flex;
		justify-content: space-between;
	}
	.data-nav li{
		padding: 1rem .5rem;
		width: 20%;
		text-align: center;
		border: 2px solid var(--blue);
		cursor: pointer;
	}
	.data-nav li:first-of-type, .data-nav li:nth-of-type(2), .data-nav li:nth-of-type(3), .data-nav li:nth-of-type(4){
		border-right: none;
	}
	.data-nav li:first-of-type{
		border-top-left-radius: 3px;
		border-bottom-left-radius: 3px;
	}
	.data-nav li:last-of-type{
		border-top-right-radius: 3px;
		border-bottom-right-radius: 3px;
	}

	/* below data nav */
	.consultancy-data{
		margin: auto;
		padding: 2rem 0;
		width: 800px;
		text-align: justify;
	}
	.consultancy-data-bottom{
		padding: 0 1rem;
		border-left: 2px solid #dcdcdc;
		border-right: 2px solid #dcdcdc;
	}
	.data-sub-title{
		margin-bottom: 1.5rem;
		padding: 3rem 0 0;
		width: max-content;
		border-bottom: 2px solid var(--blue);
	}
	.data-countries, .data-tests{
		padding: 1rem;
		background-color: #dcdcdc;
		display: flex;
		flex-wrap: wrap;
	}
	.data-country, .data-test{
		margin: .25rem;
		padding: .5rem 1rem;
		background-color: #fff;
		border: 1px solid var(--blue);
		border-radius: 3px;
	}
	.enquire-msg{
		margin-top: 3rem;
		font-size: 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.enquire-msg .enquire{
		margin-top: 0;
		margin-left: 1rem;
		color: #000;
	}
	.consultancy-data .socials{
		margin-top: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.consultancy-data .socials span{
		margin-right: 1rem;
		font-size: 1.25rem;
	}
	.consultancy-data .socials i{
		font-size: 2rem;
		color: var(--blue);
	}
</style>