<template>
  <div class="charts">
    <div class="charts__value" :class="'charts__value_' + theme + '_' + active">
      {{ value }}
    </div>
    <div
      class="charts__block"
      :class="[
        { charts__block_active__dark: active && theme == 'dark' },
        { charts__block_active__light: active && theme == 'light' },
        'charts__block_' + theme,
      ]"
    ></div>
    <div class="charts__title">{{ title }}</div>
  </div>
</template>
<script>
export default {
  name: "charts",
  props: ["title", "value", "theme", "active", "height"],
};
</script>
<style lang="sass">
.charts
    width: 40px
    display: flex
    min-height: 70px
    justify-content: space-between
    flex-direction: column
    position: relative
    &__value
        position: absolute
        left: 50%
        transform: translateX(-50%)
        margin-bottom: 8px
        font-weight: 700
        font-size: 20px
        line-height: 22px
        text-align: center
        color: #BFBFBF
    .charts__value_dark_true
        color: #FCFBF7
    .charts__value_light_true
        color: #261C00
    &__title
        margin-top: 12px
        font-weight: 500
        font-size: 16px
        line-height: 18px
        text-align: center
        color: #BFBFBF
    &__block
        margin-top: 30px
        flex-grow: 1
        min-height: 8px !important
        background: linear-gradient(180deg, rgba(244, 244, 244, 0.9) 0.82%, #E9E9E9 100%, rgba(234, 234, 234, 0) 100%)
        box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.5), inset 0px 0px 20px rgba(207, 207, 207, 0.5)
        border-radius: 6px
        &_active
            &__light
                background: linear-gradient(180deg, #FFF2D1 0.82%, #FFD66C 100%) !important
                box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.5), inset 0px 0px 20px rgba(255, 176, 57, 0.8) i !important
            &__dark
                background: radial-gradient(81.14% 100% at 50% 0%, #FFA300 0%, #2D1C00 100%) !important
                box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.4), inset 0px 6px 15px rgba(255, 162, 0, 0.5) !important
        &_dark
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), radial-gradient(149.08% 93.3% at 38.75% 72.1%, #000000 0%, #231900 0.01%, #4D4D4D 100%)
            box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.2), inset 2px 2px 16px rgba(103, 103, 103, 0.6)
</style>
