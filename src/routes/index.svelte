<script>
    import Navbar from '../components/navbar.svelte';  
import ShortenLinkContainer from '../components/shorten-link-container.svelte';
    import StatisticsItem from '../components/statistics-item.svelte'
    import '../styles/global.scss'

    let header_img_src = '../../static/images/illustration-working.svg'
    let logo = '../../static/images/logo.svg'
    let statistics_items = [
        { icon_url: '../../static/images/icon-brand-recognition.svg', title: 'Brand Recognition', description: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.", item_num: '1'}, 
        { icon_url: '../../static/images/icon-detailed-records.svg', title: 'Detailed Records', description: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.", item_num: '2'},
        { icon_url: '../../static/images/icon-fully-customizable.svg', title: 'Fully Customizable', description: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.", item_num: '3'}
    ]
</script>

<svelte:head>
    <title>Shortly</title>
</svelte:head>

<div class="content">
    <header>
        <Navbar/>
        <div class="header-content">
            <div class="header-content__text">
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button>Get started</button>
            </div>
            <div class="header-content__image">
                <img src={header_img_src} alt="Woman working at a computer.">
            </div>
        </div>
    </header>
    <section>
        <ShortenLinkContainer />
    </section>
    <section>
        <div class="statistics-section__container">
            <h1>Advanced Statistics</h1>
            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            <div class="statistics-section__items">
            {#each statistics_items as { icon_url, description, title, item_num }}
                <StatisticsItem icon_url={icon_url} title={title} description={description} item_num={item_num}></StatisticsItem>
            {/each}
            </div>
        </div>
    </section>
    <section>
        <h1>Boost your links today</h1>
        <button>Get Started</button>
    </section>
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
                        <li><img src="../../static/images/icon-facebook.svg" alt="uepa"></li>
                        <li><img src="../../static/images/icon-twitter.svg" alt="uepa"></li>
                        <li><img src="../../static/images/icon-instagram.svg" alt="uepa"></li>
                        <li><img src="../../static/images/icon-pinterest.svg" alt="uepa"></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</div>

<style lang="sass">
    .content
        width: 100%
    
    header
        max-width: 1600px
        margin: 0 auto
        height: 800px
        overflow: hidden
        padding: 2em 3em
        
        background-color: #fff
    
    .header-content
        width: 100%
        display: flex
        align-items: center
        justify-content: space-between
        padding: 4em 0

        &__text
            color: hsl(260, 8%, 14%)
            width: 50%

            h1
                font-size: 4.5rem
                line-height: 4.5rem

            p
                color: hsl(257, 7%, 63%)
                font-size: 1.2rem
                margin: 0.5em 0
                width: 80%

            button
                background-color: hsl(180, 66%, 49%)
                color: #fff
                font-weight: 600
                font-size: 1.2rem
                padding: .75em 2em
                margin: 1.5em 0

                border-radius: 2rem
                border: none

                &:hover
                    background-color: hsl(180, 66%, 49%, .5)
                    cursor: pointer

        &__image
            width: 50%

    section
        &:nth-of-type(1n), &:nth-of-type(2n)
            width: 100%
            background-color: hsl(257, 27%, 95%)

        &:nth-of-type(3n)
            width: 100%
            background-color: hsl(257, 27%, 26%)
            background-image: url('../../static/images/bg-boost-desktop.svg')
            background-repeat: no-repeat
            background-size: cover
            display: flex
            flex-direction: column
            align-items: center
            justify-content: center
            padding: 6em 0

            h1
                font-size: 2.3rem
                font-weight: 600
                color: #fff
                
            button
                background-color: hsl(180, 66%, 49%)
                color: #fff
                font-weight: 600
                font-size: 1.2rem
                border-radius: 2rem
                border: none
                cursor: pointer
                padding: .65em 2em
                margin-top: 1em

    .statistics-section__container
        max-width: 1600px
        margin: 0 auto
        display: flex
        flex-direction: column
        align-items: center

        h1
            color: hsl(0, 0%, 25%)
            font-size: 2.3rem
            padding: .3em 0

        p
            color: hsl(257, 7%, 63%)
            text-align: center
            width: 40%

        .statistics-section__items
            display: flex
            position: relative
            margin: 8em 0

            &:before
                content: ''
                position: absolute
                width: 100%
                height: 100%
                backgroud-color: hsl(180, 66%, 49%)
                z-index: 50

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