<script>
    let logo = '../../images/logo.svg'
</script>

<footer>
    <div class="footer-container">
        <div class="footer__logo-container">
            <img src={logo} alt="Shortly logo">
        </div>
        <div class="footer__content-container">
            <div class="footer__links-container">
                <div class="footer__links-container__list">
                    <p>Features</p>
                    <ul>
                        <li><a href="ww">Link shortening</a></li>
                        <li><a href="ww">Link shortening</a></li>
                        <li><a href="ww">Link shortening</a></li>
                    </ul>
                </div>
                <div class="footer__links-container__list">
                    <p>Features</p>
                    <ul>
                        <li><a href="ww">Link shortening</a></li>
                        <li><a href="ww">Link shortening</a></li>
                        <li><a href="ww">Link shortening</a></li>
                    </ul>
                </div>
                <div class="footer__links-container__list">
                    <p>Features</p>
                    <ul>
                        <li><a href="ww">Link shortening</a></li>
                        <li><a href="ww">Link shortening</a></li>
                        <li><a href="ww">Link shortening</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer__icons-container">
                <ul>
                    <li><img src="../../images/icon-facebook.svg" alt="uepa"></li>
                    <li><img src="../../images/icon-twitter.svg" alt="uepa"></li>
                    <li><img src="../../images/icon-instagram.svg" alt="uepa"></li>
                    <li><img src="../../images/icon-pinterest.svg" alt="uepa"></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
<style lang="sass">
     footer
        background-color: hsl(260, 8%, 14%)
        padding: 5em 2em

    .footer-container
        width: 100%
        max-width: 1600px
        margin: 0 auto
        display: flex
        justify-content: space-between

    .footer__logo-container
        img
            filter: invert(1)

    .footer__content-container
        display: flex

    .footer__links-container
        display: flex

        &__list
            margin: 0 2.5em

            p
                font-weight: 600
                color: #fff
                padding-bottom: 1em
            
            a
                text-decoration: none
                color: hsl(0, 0%, 75%)
                margin: .3em 0

            ul
                list-style: none
                
                li 
                    a
                        margin-bottom: 0.5em

    .footer__icons-container
        display: flex
        height: auto
        padding: 0 1em

        ul
            list-style: none 
            li
                float: left
                
                img
                    margin: 0 1em
</style>
