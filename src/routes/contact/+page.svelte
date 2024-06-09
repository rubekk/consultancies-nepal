<svelte:head>
  <title>StudyAbroadNP - Contact</title>
</svelte:head>

<div class="contact-container">
    <div class="contact-txt">
        <span>Have questions or need any information?</span> <br>Get in touch with us through our contact form, or phone, and we'll be delighted to help you with any inquiries and provide the support you need!"
    </div>
    <!-- <div class="contact-email">
        info@abroadstudynp.com
    </div> -->
    <div class="contact-phone">
        <i class="fa-solid fa-phone"></i> +977 9745706122
    </div>
    <div class="contact-form">
        <h2>Contact information</h2>
        <div class="form">
            <input type="text" placeholder="Full name">
            <input type="email" placeholder="Email">
            <input type="text" placeholder="Message">
            <button class="submit-btn">Submit</button>
        </div>
    </div>
</div>

<style>
    .contact-container{
        margin: 2rem auto 3rem;
        padding: 1rem;
        width: 500px;
        background-color: #dcdcdc;
        border-radius: 3px;
    }
    .contact-txt{
        text-align: justify;
    }
    .contact-txt span{
        font-size: 1.25rem;
    }
    .contact-phone{
        margin: 1rem 0;
        padding: .5rem 1rem;
        width: max-content;
        color: #fff;
        background-color: #797979;
        border-radius: 3px;
    }
    .contact-phone i{
        margin-right: .5rem;
    }
    .form{
        margin-top: .5rem;
        width: 100%;
        display: inline-grid;
    }
    .form input, .submit-btn{
        margin: .25rem 0;
        padding: 0 .5rem;
        width: 100%;
        height: 40px;
        border: 1px solid #000;
        outline: none;
    }
    .submit-btn{
        margin-top: 1rem;
        color: #fff;
        background-color: var(--blue);
        border: none;
        border-radius: 3px;
    }

    /* media queries */
    @media (max-width: 500px){
        .contact-container{
            width: 100%;
        }
    }
</style>