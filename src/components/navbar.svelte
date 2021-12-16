<nav class="nav-container">
    <div class="nav-container__title-menu">
        <div class="nav-container__title-menu__logo">
            <img src="/images/logo.svg" alt="Shortly logo">
        </div>
        <ul>
            <li>
                <a href="ss">Features</a>
            </li>
            <li>
                <a href="ss">Pricing</a>
            </li>
            <li>
                <a href="w">Resources</a>
            </li>
        </ul>
    </div>
    <div class="nav-container__buttons">
        <button>
            Login
        </button>
        <button>
            Sign Up
        </button>
    </div>
</nav>

<style lang="sass">
    .nav-container
        margin: 0 auto
        padding: 2em 0
        max-width: 1200px
        
        display: flex
        justify-content: space-between

    .nav-container__title-menu
        display: flex

        ul
            list-style: none
            display: flex
            align-items: center
            margin: 0 2.5em

            li a
                text-decoration: none
                margin: 0 1em
                color: hsl(0, 0%, 75%)
                transition: color .5s ease

                &:hover
                    color: hsl(260, 8%, 14%)

    .nav-container__title-menu__logo
        display: flex
        align-items: center

    .nav-container__buttons
        button
            background: none
            border: none
            margin: 0 .5em
            padding: .5em 1.5em
            color: hsl(0, 0%, 75%)
            font-size: 1rem
            border-radius: 30px
            cursor: pointer

            &:nth-child(2)
                background-color: hsl(180, 66%, 49%)
                color: #fff

                &:hover
                    background-color: hsl(180, 66%, 49%, .5)
</style>