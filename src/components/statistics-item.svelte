<script>
    let [icon_url, title, description] = '';
    export { icon_url, title, description }
</script>

<main>
    <div class="statistic-item">
        <img src={icon_url} alt="teste">
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
</main>

<style lang="sass">
    .statistic-item
        display: flex
        flex-direction: column
        background-color: #fff
        border-radius: 10px
        padding: 0 2em
        margin: 0 2em
        padding-bottom: 2em
        max-width: 100%

        img
            max-width: 65px
            position: relative

            &:before
                content: "dqqwdqd"
                position: absolute
                width: 100%
                height: 100%
                transform: scale(1.5)
                background-color: hsl(257, 27%, 26%)
                border-radius: 50%
                z-index: 30

        h1
            color: hsl(0, 0%, 30%)
            padding: .7em 0

        p
            color: hsl(0, 0%, 75%)
</style>