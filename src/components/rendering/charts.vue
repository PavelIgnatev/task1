<template>
  <div class="charts">
    <div class="charts__block" :class="{ charts__block_active: active }" :style="`height: ${height}%`">
      <div class="charts__value" :class="{ charts__value_active: active }">
      {{ value }}
      </div>
      <div class="charts__title">{{ title }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "charts",
  props: ["title", "value", "theme", "active", "height"],
};
</script>
<style lang="sass">
.theme_light
  .charts
    &__value, &__title
      color: #BFBFBF !important
      &_active
        color: #261C00 !important
    &__block
      background: linear-gradient(180deg, rgba(244, 244, 244, 0.9) 0.82%, #E9E9E9 100%, rgba(234, 234, 234, 0) 100%)
      box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.5), inset 0px 0px 20px rgba(207, 207, 207, 0.5)
      &_active
        background: linear-gradient(180deg, #FFF2D1 0.82%, #FFD66C 100%)
        box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.5), inset 0px 0px 20px rgba(255, 176, 57, 0.8)
  .chart
    .user-template
      &:nth-child(1)
        &::after
          content: ''
          width: 2px
          height: 100%
          background: #BFBFBF !important
          opacity: 0.3
          position: absolute
          right: 0
    .user-value
      color: #BFBFBF !important
.chart
  .user-value
    margin-top: 4px !important
    color: #918F8A
.charts
  width: 40px
  height: 100%
  display: flex
  justify-content: space-between
  flex-direction: column
  position: relative
  &__value
    position: absolute
    left: 50%
    transform: translate(-50%, -100%)
    font-weight: 700
    font-size: 20px
    line-height: 22px
    text-align: center
    color: #918F8A
    top: -8px
  &__title
    position: absolute
    left: 50%
    transform: translate(-50%, 100%)
    font-weight: 500
    font-size: 16px
    line-height: 18px
    text-align: center
    color: #918F8A
    bottom: -12px
  &__block
    margin-top: auto
    position: relative
    min-height: 8px !important
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), radial-gradient(149.08% 93.3% at 38.75% 72.1%, #000000 0%, #231900 0.01%, #4D4D4D 100%)
    box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.2), inset 2px 2px 16px rgba(103, 103, 103, 0.6)
    border-radius: 6px
    &_active
      background: radial-gradient(81.14% 100% at 50% 0%, #FFA300 0%, #2D1C00 100%)
      box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.4), inset 0px 6px 15px rgba(255, 162, 0, 0.5)
  .charts__value_active
    color: #FCFBF7
</style>
