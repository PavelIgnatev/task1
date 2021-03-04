<template>
  <div class="template-wrapper">
    <div class="leaders-wrapper__users">
      <User
        class="leaders-user"
        v-for="(user, index) in data.users.slice(0, 5)"
        :key="user.id"
        :id="user.id"
        :name="user.name"
        :avatar="user.avatar"
        :valueText="user.valueText"
        :alias="alias"
        :theme="theme"
        :index="index"
        :selected="selected"
        :emoji="data.emoji"
        :selUser="data.users[selected]"
      ></User>
    </div>
    <div class="leaders-wrapper__place">
      <Userplace
        class="leaders-userplace"
        v-for="(user, index) in data.users.slice(0, 5)"
        :key="user.id"
        :index="index"
        :theme="theme"
        :alias="alias"
        :selected="selected"
      ></Userplace>
    </div>
  </div>
</template>
<script>
import User from "./rendering/user";
import Userplace from "./rendering/userplace";
export default {
  name: "Leaders",
  components: { User, Userplace },
  props: ["theme", "alias", "data", "selected"],
};
</script>
<style lang="sass">
.leaders
  &-wrapper__users
    display: flex
    width: 520px
    justify-content: space-between
    margin: 0 auto
    flex-grow: 0.5
    position: relative
  &-wrapper__place
    position: relative
    display: flex
    width: 520px
    margin: 0 auto
    flex-grow: 1
  &-user
    position: absolute
    bottom: 0
    &:nth-child(5)
      bottom: -40%
      order: -2
    &:nth-child(3)
      left: 100px
      bottom: -20%
      order: -1
    &:nth-child(2)
      left: 315px
      bottom: -20%
    &:nth-child(4)
      left: 420px
      bottom: -40%
    &:nth-child(1)
      left: 210px
      bottom: 0
</style>
