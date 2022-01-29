<script>
    import { fade } from 'svelte/transition';
    import axios from 'axios';
    import ShortenedLink from './shortened-link.svelte';
    import Spinner from './spinner.svelte';
    
    let url = '';
    let invalidInput = false;
    let loading = false;
    let shortenedLinks = [];
    
    function shortenLink() {
        //input field validation
        if (url.length > 0) {
            invalidInput = false;
            return getShortenedLink(url);
        };
        return invalidInput = true;
    };
    async function getShortenedLink(link) {
        loading = true;
        try {
            const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`);

            if (res.data.ok) {
                const api_data = res.data.result;
                shortenedLinks.push({ original_link: api_data.original_link, shortened_link: api_data.short_link });
                shortenedLinks = shortenedLinks;
                return loading = false;
            }
        }
        catch (err) {
            loading = false;
            return console.error(err);
        }
    };
</script>

<div class="shorten-link__container">
    <form on:submit|preventDefault={shortenLink}>
        <input type="text" placeholder="Shorten a link here..." bind:value={url} class={invalidInput ? 'invalid-input' : ''}>
        {#if invalidInput}
            <p transition:fade>Please add a link</p>
        {/if}
    </form>
    <div>
        <button on:click={shortenLink}>
            {#if loading}
                <Spinner />
            {:else}
                <span>Shorten it</span>
            {/if}
        </button>
    </div>
</div>
<div class="shortened-links_container">
    {#each shortenedLinks as { original_link, shortened_link }}
        <ShortenedLink original_link={original_link} shortened_link={shortened_link} />
    {/each}
</div>

<style lang="sass">
    .shorten-link__container
        width: 80vw
        max-width: 1200px
        margin: 0 auto
        padding: 2.5rem 2rem
        border-radius: .5rem
        background-color: hsl(257, 27%, 26%)
        background-image: url('../../images/bg-shorten-desktop.svg')
        background-repeat: no-repeat
        background-size: cover
        display: flex
        justify-content: center
        transform: translateY(-60px)

        button
            padding: 1rem 2.5em
            margin-left: 1rem
            background-color: hsl(180, 66%, 49%)
            border: none
            border-radius: .5rem
            color: #fff
            font-weight: 600
            cursor: pointer
            transition: all .5s ease

            &:hover
                background-color: hsl(180, 66%, 60%, 1)

        form
            width: 70%

            p
                color: hsl(0, 87%, 67%)

            input
                width: 100%
                padding: 1.25em
                border-radius: .5rem
                border: none

                &::placeholder
                    color: hsl(257, 7%, 63%)

                &:active, &:focus
                    outline: none

            .invalid-input
                border: 2px solid hsl(0, 87%, 67%)

    .shortened-links_container
        width: 80vw
        max-width: 1200px
        margin: 0 auto
        padding-bottom: 5rem

</style>