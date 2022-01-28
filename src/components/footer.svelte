<script>
    let logo = '../../images/logo.svg';
    let link_lists = [
        { container_name: 'Features', links: [{url: 'www.google.com', text: 'Google'}, {url: 'www.google.com', text: 'Google'}, {url: 'www.google.com', text: 'Google'}] },
        { container_name: 'Resources', links: [{url: 'www.google.com', text: 'Google'}, {url: 'www.google.com', text: 'Google'}, {url: 'www.google.com', text: 'Google'}] },
        { container_name: 'Company', links: [{url: 'www.google.com', text: 'Google'}, {url: 'www.google.com', text: 'Google'}, {url: 'www.google.com', text: 'Google'}] },
    ];
    let social_media = [
        { icon_path: '../../images/icon-facebook.svg', alt: 'facebook icon', url: 'https://www.youtube.com/watch?v=6ONRf7h3Mdk&list=RD89hJPNSNlFM&index=3' },
        { icon_path: '../../images/icon-twitter.svg', alt: 'twitter icon', url: 'https://www.youtube.com/watch?v=6ONRf7h3Mdk&list=RD89hJPNSNlFM&index=3' },
        { icon_path: '../../images/icon-instagram.svg', alt: 'instagram icon', url: 'https://www.youtube.com/watch?v=6ONRf7h3Mdk&list=RD89hJPNSNlFM&index=3' },
        { icon_path: '../../images/icon-pinterest.svg', alt: 'pinterest icon', url: 'https://www.youtube.com/watch?v=6ONRf7h3Mdk&list=RD89hJPNSNlFM&index=3' },
    ]
</script>

<footer>
    <div class="footer-container">
        <div class="footer__logo-container">
            <img src={logo} alt="Shortly logo">
        </div>
        <div class="footer__content-container">
            <div class="footer__links-container">
                {#each link_lists as { container_name, links }}
                <div class="footer__links-container__list">
                    <p>{container_name}</p>
                    <ul>
                        {#each links as link}
                        <li><a href={link.url}>{link.text}</a></li>
                        {/each}
                    </ul>
                </div>
                {/each}
            </div>
            <div class="footer__icons-container">
                <ul>
                    {#each social_media as { icon_path, alt, url }}
                    <li>
                        <a href={url}><img src={icon_path} alt={alt}></a>
                    </li>
                    {/each}
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
                    margin-bottom: .5rem

    .footer__icons-container
        display: flex
        height: auto
        padding-right: 1em
        padding-left: 12rem

        ul
            list-style: none 
            li
                float: left
                
                img
                    margin: 0 1em
                    cursor: pointer

                    &:hover
                        opacity: .8
</style>
