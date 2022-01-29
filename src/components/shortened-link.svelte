<script>
    import { slide } from 'svelte/transition';

    let original_link, shortened_link;
    let copyButtonText = 'Copy';
    export { original_link, shortened_link };

    function copyToClipboard() {
        navigator.clipboard.writeText(shortened_link);
        copyButtonText = 'Copied!';
    };
</script>

<div class="shortened-link" transition:slide|local>
    <p>{original_link}</p>
    <div>
        <p on:click={copyToClipboard}>{shortened_link}</p>
        <button on:click={copyToClipboard} class={copyButtonText === 'Copied!' ? 'copied' : ''}>{copyButtonText}</button>
    </div>
</div>

<style lang="sass">
    .shortened-link
        width: 100%
        display: flex
        align-items: center
        justify-content: space-between
        background-color: #fff
        border-radius: .5rem
        padding: 1rem 1.5rem
        margin: 1.25rem 0
        transform: translateY(-35px)

        p
            color: hsl(260, 8%, 14%)

        div
            display: flex
            align-items: center

            p
                color: hsl(180, 66%, 49%)
                cursor: pointer

            button
                background-color: hsl(180, 66%, 49%)
                color: #fff
                padding: .7rem 2rem
                margin-left: 1.25rem
                border-radius: .5rem
                border: none
                font-weight: 700
                cursor: pointer
                transition: opacity .25s ease-out

                &:hover
                    opacity: .5

        .copied
            background-color: hsl(257, 27%, 26%)
</style>
