<template>
  <div class="Activity">
    <div class="day__wrapper">
      <div class="day__wrapper__center">
          <DayGraph
        v-for="(day, index) in Object.values(data.data)"
        :key="index"
        :theme="theme"
        :data="changeList(day)"
      ></DayGraph>
      </div>
    </div>
    <div class="Activity__description">
      <div class="Activity-item">
        <div class="item__example"></div>
        <div class="item__text">{{ hourInterval }}</div>
      </div>
      <div class="Activity-item">
        <div class="item__example"></div>
        <div class="item__text">0</div>
      </div>
      <div class="Activity-item">
        <div class="item__example"></div>
        <div class="item__text">1-2</div>
      </div>
      <div class="Activity-item">
        <div class="item__example"></div>
        <div class="item__text">3-4</div>
      </div>
      <div class="Activity-item">
        <div class="item__example"></div>
        <div class="item__text">5-6</div>
      </div>
    </div>
  </div>
</template>
<script>
import DayGraph from "./rendering/dayGraph";
export default {
  name: "Activity",
  props: ["data", "theme"],
  data() {
    return {
      sizeX: window.screen.width,
      sizeDay: undefined,
      hourInterval: undefined,
    };
  },
  mounted() {
    this.LengthDay();
  },
  created() {
    window.addEventListener("resize", () => {
      this.sizeX = window.screen.width;
      this.LengthDay();
    });
  },
  methods: {
    LengthDay() {
      if (this.sizeX < 568) {
        this.sizeDay = 24;
        this.hourInterval = "1 час";
      } else {
        this.sizeDay = 12;
        this.hourInterval = "2 часa";
      }
    },
    changeList(list) {
      if (this.sizeDay === 12) {
        return list
          .map((hours, index) =>
            index % 2 == 0 ? hours + list[index + 1] : undefined
          )
          .filter((x) => x !== undefined);
      }
      return list;
    },
  },
  components: { DayGraph },
};
</script>
<style lang="sass">
.theme_light
  .day__img_light 
    display: block !important
  .day__img_dark
    display: none !important
  .Activity
    .item__text
      color: #BFBFBF !important
    .Activity-item
      &:nth-child(1)
        .item__example
          background: radial-gradient(2408.25% 2730.55% at 89.06% 78.28%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.8) 100%)
          box-shadow: inset -1px 0px 2px rgba(255, 255, 255, 0.2), inset 1px 1px 16px rgba(103, 103, 103, 0.2)
          &::before, &::after
            content: ''
            position: absolute
            width: 4px
            height: 12px
            background: radial-gradient(2408.25% 2730.55% at 89.06% 78.28%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.8) 100%)
            box-shadow: inset -1px 0px 2px rgba(255, 255, 255, 0.2), inset 1px 1px 16px rgba(103, 103, 103, 0.2)
            border-radius: 2px
      &:nth-child(2)
        .item__example
          background: radial-gradient(2408.25% 2730.55% at 89.06% 78.28%, rgba(250, 250, 250, 0.6) 0%, rgba(250, 250, 250, 0.6) 100%)
          box-shadow: inset -1px 0px 2px rgba(250, 250, 250, 0.2), inset 1px 1px 16px rgba(106, 106, 106, 0.2)
      &:nth-child(3)
        .item__example
          background: radial-gradient(2408.25% 2730.55% at 89.06% 78.28%, rgba(250, 250, 250, 0.8) 0%, rgba(250, 250, 250, 0.8) 100%)
          box-shadow: inset -1px 0px 12px rgba(250, 250, 250, 0.2), inset 1px 1px 20px rgba(106, 106, 106, 0.3)
      &:nth-child(4)
        .item__example
          background: radial-gradient(68.1% 68.1% at 4.41% 31.9%, #FFF6DD 8.72%, #FFFEFA 100%)
          box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.5), inset 0px 0px 20px rgba(255, 176, 57, 0.4)
      &:nth-child(5)
        .item__example
          background: radial-gradient(66.02% 86.49% at -16.18% 13.51%, rgba(255, 186, 6, 0.85) 0%, #FFF2AD 100%)
          box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.5), inset 0px 0px 20px rgba(255, 176, 57, 0.4)
.activity_template
    display: flex
    flex-direction: column
.Activity
    flex-grow: 1
    display: flex
    flex-direction: column
    .day__wrapper
        display: flex
        flex-grow: 1
        justify-content: center
        align-items: center
        position: relative
        img
          display: block
          width: 34px
        &__center
            width: 425px
            height: 112px
            position: absolute
            top: 136px 
            left: 50% 
            transform: translateX(-50%)
    &__description
        display: flex
        width: 332px
        height: 38px
        margin: 0 auto
        justify-content: space-between
        text-align: center
        padding-bottom: 58px
        .Activity-item
            display: flex
            justify-content: space-between
            flex-direction: column
            width: 60px
            height: 38px
            .item
                &__example
                    width: 60px
                    height: 12px
                    border-radius: 2px
                &__text
                    font-weight: 500
                    font-size: 16px
                    line-height: 18px
                    letter-spacing: 0px
                    color: #918F8A
            &:nth-child(1)
                .item__example
                    width: 52px
                    height: 4px
                    margin-top: 4px
                    margin-left: 4px
                    position: relative
                    border-radius: 0px
                    background: radial-gradient(51.52% 129.57% at 48.48% 50%, rgba(64, 59, 54, 0) 0%, rgba(19, 18, 17, 0.5) 100%)
                    box-shadow: inset 0px -1px 2px rgba(255, 255, 255, 0.25), inset 3px 1px 16px rgba(112, 102, 94, 0.3)
                    &::before, &::after
                      content: ''
                      position: absolute
                      width: 4px
                      height: 12px
                      background: radial-gradient(150% 252.96% at 150% 50%, rgba(64, 59, 54, 0.65) 0%, rgba(0, 0, 0, 0.65) 100%)
                      box-shadow: inset 0px -1px 2px rgba(255, 255, 255, 0.25), inset 3px 1px 16px rgba(112, 102, 94, 0.3)
                      border-radius: 2px                
                    &::before
                      left: -4px
                      top: -4px
                    &::after
                      right: -4px
                      top: -4px
            &:nth-child(2)
                .item__example
                    background: radial-gradient(3906.1% 3815.36% at 89.06% 78.28%, rgba(19, 17, 16, 0.65) 0%, rgba(0, 0, 0, 0.65) 100%)
                    box-shadow: inset -1px 0px 2px rgba(255, 255, 255, 0.2), inset 1px 1px 16px rgba(112, 102, 94, 0.2)
            &:nth-child(3)
                .item__example
                    background: radial-gradient(5752.25% 5190.32% at 74.43% 60.32%, rgba(0, 0, 0, 0.9) 0%, rgba(35, 22, 0, 0.9) 0.01%, rgba(112, 92, 94, 0.9) 100%)
                    box-shadow: inset -1px 0px 1px rgba(255, 255, 255, 0.2), inset 2px 2px 10px rgba(93, 116, 141, 0.6)
            &:nth-child(4)
                .item__example
                    background: radial-gradient(5528.36% 3005.63% at 74.43% 75.84%, rgba(0, 0, 0, 0.9) 0%, rgba(33, 22, 2, 0.9) 0.01%, rgba(172, 113, 9, 0.9) 100%)
                    box-shadow: inset -1px 1px 14px rgba(255, 255, 255, 0.2), inset 2px 2px 10px rgba(242, 159, 13, 0.2)
            &:nth-child(5)
                .item__example
                    background: radial-gradient(2258.03% 620.37% at 83.33% 88.95%, #201502 0%, #C7830A 100%)
                    box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.2), inset 2px 2px 10px rgba(242, 159, 13, 0.9) 
</style>
