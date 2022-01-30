<script>
    import Fa from 'sveltejs-fontawesome';
    import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
    import { slide } from 'svelte/transition';

    let menu_is_opened = false;
    let links = [
        {route_path: '/features', anchor_text: 'Features'},
        {route_path: '/pricing', anchor_text: 'Pricing'},
        {route_path: '/resources', anchor_text: 'Resources'}
    ];
</script>

<nav class="nav-container">
    <div class="nav-container__title-menu">
        <div class="nav-container__title-menu__logo">
            <img src="/images/logo.svg" alt="Shortly logo">
        </div>
        <ul>
            {#each links as {route_path, anchor_text}}
            <li>
                <a href={route_path}>{anchor_text}</a>
            </li>
            {/each}
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
    <div class="nav-container__burger-menu" on:click={() => menu_is_opened = true}>
        <Fa icon={faBars} size="2x" color="hsl(0, 0%, 75%)"></Fa>
    </div>
    {#if menu_is_opened}
        <div class="nav-container__mobile-menu" transition:slide|local>
            <ul>
                {#each links as {route_path, anchor_text}}
                    <li transition:slide|>
                        <a href={route_path}>{anchor_text}</a>
                    </li>
                {/each}
                <li>
                    <button class="bg-cyan">Login</button>
                </li>
                <li>
                    <button class="bg-dark-gray">Sign-in</button>
                </li>
            </ul>
        </div>
    {/if}
</nav>

<style lang="sass">
    .nav-container    
        display: flex
        justify-content: space-between
        position: relative

        &__burger-menu
            display: none
            padding: 2em 3em

        &__mobile-menu
            display: flex
            align-items: center
            justify-content: center
            height: 100vh
            width: 100vw
            background-color: rgba(255, 255, 255, 1)
            position: fixed
            z-index: 3

            ul
                list-style: none

                li
                    text-align: center
                    
                    button
                        padding: 1.2rem 7rem
                        border: none
                        border-radius: 1rem
                        margin: .5rem
                        color: #fff
                        font-weight: 500
                        box-shadow: 0px 0px 10px rgba(0, 0, 0, .2)

                    a
                        text-decoration: none
                        font-size: 2.5rem
                        text-align: center
                        color: hsl(260, 8%, 14%)

    .nav-container__title-menu
        display: flex
        padding: 2em 3em

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
        padding: 2em 3em

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

    .bg-cyan
        background-color: hsl(180, 66%, 49%)
    
    .bg-dark-gray
        background-color: hsl(260, 8%, 14%)


    @media screen and (max-width: 767px)
        .nav-container__burger-menu
            display: block
            cursor: pointer
        
        .nav-container__title-menu
            ul
                display: none

        .nav-container__buttons
            display: none
</style>