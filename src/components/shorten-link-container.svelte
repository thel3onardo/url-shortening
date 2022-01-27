<script>
    import axios from 'axios';

    let url = '';
    
    function inputValidation() {
        if (url.length > 0) {
            return shortenLink(url);
        };
        console.log('input inválido');
    };

    async function shortenLink(link) {
        const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`);
        
        if (res.status === 201) {
            console.log(res.data);
        }
    };
</script>

<div class="shorten-link__container">
    <form>
        <input type="text" placeholder="Shorten a link here..." bind:value={url}>
    </form>
    <button on:click={inputValidation}>Shorten it</button>
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
        align-items: center
        transform: translateY(-60px)

        button
            padding: 1.25em 2.5em
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
            input
                width: 100%
                padding: 1.25em
                border-radius: .5rem
                border: none

                &::placeholder
                    color: hsl(257, 7%, 63%)

                &:active, &:focus
                    outline: none

</style>