<script></script>

<div class="footer">
    <div class="footer-top">
        <h2>Important Links</h2>
        <div class="links">
            <span><a href="/study-abroad">Study Abroad</a></span>
            <span><a href="/upcoming-classes">Upcoming Classes</a></span>
            <span><a href="/test-guides">Test guides</a></span>
            <span><a href="/consultancy">Top Consultancies</a></span>
        </div>
    </div>

    <div class="contact-link">
        <a href="/contact">Contact</a>
    </div>

    <div class="footer-bottom">
        <p>Consultancies Nepal | All rights reserved 2024</p>
        <div class="social-links">
            <a href="https://www.facebook.com/profile.php?id=61560884097225" target="_blank">
                <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/company/studyabroadnp/" target="_blank">
                <i class="fa-brands fa-linkedin"></i>
            </a>
        </div>
    </div>
</div>

<style>
    .footer{
        padding: 2rem 3rem 0;
        width: 100vw;
        color: #fff;
        background-color: #252c36;
        overflow: hidden;
    }
    .footer-top h2{
        margin: 0 auto;
        width: max-content;
        font-size: 1.25rem;
        border-bottom: 2px solid var(--blue);
    }
    .links{
        margin: 2rem auto 0;
        width: max-content;
    }
    .links span, .contact-link a{
        margin: .5rem;
        padding: .5rem;
        color: #000;
        background-color: #dcdcdc;
        border-radius: 7px;
        cursor: pointer;
    }
    .contact-link{
        margin: 2rem 0;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .footer-bottom{
        padding: 1rem 2rem;
        background-color: #000;
        display: flex;
        justify-content: space-between;
    }
    .social-links a{
        margin: 0 .25rem;
        color: #fff;
        font-size: 1.25rem;
        cursor: pointer;
    }

    /* media queries */
    @media (max-width: 750px){
        .footer{
            padding: 2rem 0 0;
        }
        .links{
            width: auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
        .footer-bottom{
            padding: 1rem;
        }
    }
    @media (max-width: 550px){
        .footer-bottom{
            display: flex;
            flex-direction: column;
        }
        .social-links{
            margin-top: 1rem;
        }
    }
</style>