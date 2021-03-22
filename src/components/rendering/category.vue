<template>
    <div class="Diagram-category" >
        <div class="Diagram__wrapper_cat">
            <div class="Diagram-category__circle" :class="'Diagram-category__circle_'+index"></div>
            <div class="Diagram-category__title">{{title}}</div>
        </div>
        <div class="Diagram__wrapper_cat">
            <div class="Diagram-category__text">{{differenceText.split(' ')[0]}}</div>
            <div class="Diagram-category__value">{{valueText.split(' ')[0]}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'category',
    props: ["title", "valueText", "differenceText", "index", "theme"]
}
</script>
<style lang="sass">
.theme_light
    .Diagram
        &-category
  
            &__circle
                &_0
                    background: radial-gradient(49.84% 49.84% at 49.84% 50.16%, rgba(255, 184, 0, 0.56) 81.25%, rgba(255, 239, 153, 0.32) 100%)
                    box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.5), inset 0px 0px 20px rgba(255, 176, 57, 0.9)
                &_1
                    background: radial-gradient(49.84% 49.84% at 49.84% 50.16%, rgba(255, 184, 0, 0.24) 81.25%, rgba(255, 239, 153, 0.12) 100%)
                    box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.5), inset 0px 0px 20px rgba(255, 176, 57, 0.4)
                &_2
                    background: radial-gradient(49.84% 49.84% at 49.84% 50.16%, rgba(166, 166, 166, 0.1725) 82.81%, rgba(203, 203, 203, 0.05) 92.19%)
                    box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.5), inset 0px 0px 20px rgba(105, 105, 105, 0.2)
                &_3
                    background: radial-gradient(49.84% 49.84% at 49.84% 50.16%, rgba(191, 191, 191, 0.345) 82.81%, rgba(228, 228, 228, 0.1) 92.19%)
                    box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.5), inset 0px 0px 20px rgba(131, 131, 131, 0.6)
.Diagram
    &-category
        display: flex
        width: 304px
        box-sizing: border-box
        justify-content: space-between
        padding: 16px 0
        position: relative
        &::after
            content: ''
            width: 100% 
            position: absolute
            background: #918F8A
            opacity: 0.3
            height: 2px
            bottom: 0
        &_light
            &::after
                content: ''
                width: 100% 
                position: absolute
                background: #918F8A
                opacity: 0.2
                height: 2px
                bottom: 0
        &:nth-child(4)
            &::after
                display: none
        &__value
            margin-left: 16px
        &__value, &__text
            font-weight: 500
            font-size: 16px
            line-height: 18px
            color: #918F8A
        &__title
            margin-left: 10px
            font-weight: 500
            font-size: 16px
            line-height: 18px
        &__circle
            width: 16px 
            height: 16px
            background: white
            border-radius: 100%
            &_0
                background: radial-gradient(49.84% 49.84% at 49.84% 50.16%, rgba(255, 163, 0, 0.8) 71.88%, rgba(91, 58, 0, 0.8) 100%)
                box-shadow: 0px 0px 20px -8px rgba(248, 158, 0, 0.2), inset -1px 1px 1px rgba(255, 255, 255, 0.5), inset 0px 0px 20px rgba(255, 162, 0, 0.9)
            &_1
                background: radial-gradient(49.84% 49.84% at 49.84% 50.16%, rgba(99, 63, 0, 0.5) 72.92%, rgba(15, 9, 0, 0.5) 100%)
                box-shadow: 0px 0px 20px -8px rgba(147, 93, 0, 0.2), inset -1px 1px 1px rgba(255, 255, 255, 0.5), inset 0px 0px 20px rgba(202, 129, 0, 0.9)
            &_2
                background: radial-gradient(100% 100% at 50% 0%, rgba(151, 151, 151, 0.5) 0%, rgba(41, 41, 41, 0.5) 100%)
                box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.5)
            &_3
                background: radial-gradient(100% 100% at 50% 0%, rgba(62, 62, 62, 0.5) 0%, rgba(40, 40, 40, 0.5) 100%)
                box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.5)
    &__wrapper_cat
        align-items: center
        display: flex
</style>