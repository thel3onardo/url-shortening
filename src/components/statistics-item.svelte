<script>
    let icon_url, title, description, item_num;
    export { icon_url, title, description, item_num }
</script>

<div class="{`item_${item_num}`} statistic-item">
    <div class="statistic-item__img-container">
        <img src={icon_url} alt="teste">
    </div>
    <h1>{title}</h1>
    <p>{description}</p>
</div>

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

        h1
            color: hsl(0, 0%, 30%)
            padding-top: 1em
            padding-bottom: .7em

        p
            color: hsl(0, 0%, 75%)

        &__img-container
            max-width: 45px
            position: relative
            display: flex
            justify-content: center
            align-items: center
            margin: 0 1.2em
            transform: translateY(-20px)

            img
                width: 100%
                position: relative
                z-index: 2

            &:before
                content: ""
                position: absolute
                width: 180%
                height: 180%
                background-color: hsl(257, 27%, 26%)
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3)
                border-radius: 50%
                z-index: 1

    .item
        &_1
            transform: translateY(0)
        &_2
            transform: translateY(45px)
        &_3 
            transform: translateY(90px)
</style>