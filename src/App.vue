<template>
  <div id="app">
    <div class="template leaders_template"><div class="template_title"><div class="template-title leaders-title">Самый 👪 командный разработчик</div><div class="template-subtitle leaders-subtitle">Спринт № 213</div></div><div class="template-wrapper"><div class="leaders-wrapper__users"><div class="user-template leaders-user "><div class="user-img leaders-img"><img src="/img/2.svg"><div class="user-emoji" style="">👪</div></div><div class="user-name leaders-name">Александр <br>Шлейко</div><div class="user-value leaders-value" style="">24 голоса</div><div class="user-line" style="display: none;"></div><div class="user-place" style="display: none;">3</div></div><div class="user-template leaders-user "><div class="user-img leaders-img"><img src="/img/3.svg"></div><div class="user-name leaders-name">Дарья <br>Ковалева</div><div class="user-value leaders-value" style="">21 голос</div><div class="user-line" style="display: none;"></div><div class="user-place" style="display: none;">3</div></div><div class="user-template leaders-user "><div class="user-img leaders-img"><img src="/img/6.svg"><img src="/img/respect.svg" class="user-respect" ></div><div class="user-name leaders-name">Андрей <br>Мокроусов</div><div class="user-value leaders-value" style="">19 голосов</div><div class="user-line" style="display: none;"></div><div class="user-place" style="display: none;">3</div></div><div class="user-template leaders-user "><div class="user-img leaders-img"><img src="/img/7.svg"></div><div class="user-name leaders-name">Дмитрий <br>Андриянов</div><div class="user-value leaders-value" style="">18 голосов</div><div class="user-line" style="display: none;"></div><div class="user-place" style="display: none;">3</div></div><div class="user-template leaders-user "><div class="user-img leaders-img"><img src="/img/1.svg"></div><div class="user-name leaders-name">Евгений <br>Дементьев</div><div class="user-value leaders-value" style="">16 голосов</div><div class="user-line" style="display: none;"></div><div class="user-place" style="display: none;">3</div></div></div><div class="leaders-wrapper__place"><div class="userplace-template leaders-userplace"><div class="userplace-place">5</div></div><div class="userplace-template leaders-userplace"><div class="userplace-place">3</div></div><div class="userplace-template leaders-userplace"><div class="userplace-place">1</div></div><div class="userplace-template leaders-userplace"><div class="userplace-place">2</div></div><div class="userplace-template leaders-userplace"><div class="userplace-place">4</div></div></div></div></div>
  </div>
</template>

<script>
import Template from "./components/Template.vue";
import data from "./data/data.json";
export default {
  components: { Template },
  data() {
    return {
      themeAlias: true,
      slide: 1,
      theme: "dark",
    };
  },
  created() {
    this.$store.commit("renderTemplateAll", data);
    this.theme = this.$router.history.current.query.theme
      ? this.$router.history.current.query.theme
      : "dark";
    document
      .getElementsByTagName("body")[0]
      .classList.add(`theme_${this.theme}`);
  },
  methods: {
    changeTheme() {
      this.themeAlias = !this.themeAlias;
      this.$router.push({
        path: `?slide=${this.$router.history.current.query.slide}`,
        query: { theme: this.theme == "dark" ? "light" : "dark" },
      });
      document
        .getElementsByTagName("body")[0]
        .classList.remove(`theme_${this.theme}`);
      this.theme == "dark" ? (this.theme = "light") : (this.theme = "dark");
      document
        .getElementsByTagName("body")[0]
        .classList.add(`theme_${this.theme}`);
    },
    prev(){
      if(this.$router.history.current.query.slide != 1 ){
        this.$router.push({
        path: `?slide=${Number(this.$router.history.current.query.slide) - 1}`,
        query: { theme: this.theme},
      });
      }
    },
    next(){
      if(this.$router.history.current.query.slide != 11 ){
        this.$router.push({
        path: `?slide=${Number(this.$router.history.current.query.slide) + 1}`,
        query: { theme: this.theme},
      });
      }
    },
    restart(){
      if(this.$router.history.current.query.slide != 1 ){
      this.$router.push({
        path: `?slide=1`,
        query: { theme: this.theme},
      })}
    }
  },
};
</script>
<style lang="sass">
.pult
  height: 150px
  display: flex
  flex-direction: column
  justify-content: space-between
  position: absolute
  top: 20px
  right: 10px
  z-index: 1000
.set-dark, .set-light, .prev, .next, .restart
  display: flex
  justify-content: center
  align-items: center
  z-index: 1000 !important
  cursor: pointer
  color: #261C00 !important
</style>