<script>
    import Navbar from '../components/navbar.svelte';  
    import '../styles/global.scss'

    let header_img_src = '../../static/images/illustration-working.svg'
</script>

<svelte:head>
    <title>Shortly</title>
</svelte:head>

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

<style lang="sass">
    header
        width: 100%
        max-width: 1600px
        margin: 0 auto
        height: 100vh
        max-height: 800px
        
        background-color: #fff
    
    .header-content
        width: 100%
        height: 100%
        padding: 0 3em
        display: flex
        align-items: center
        justify-content: space-between

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
</style>