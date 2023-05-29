<template>
  <div id="Settings">
      <van-cell center title="语言 / Language" :label="this.$store.state.language" size="large">
        <template #right-icon>
            <van-switch v-model="checked" size="24" @click="changeLanguage" />
        </template>
      </van-cell>
      <van-cell :title="this.$store.state.update" value="v1.0.0" size="large" />
      <van-cell :title="this.$store.state.aboutUs"  size="large" />
      <van-button round type="danger" id="btn" @click="signOut">{{this.$store.state.signOut}}</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
    };
  },
  methods:{
      changeLanguage(){
          if(this.$store.state.language=='简体中文'){
              this.$store.state.language='English'
              this.$store.commit('CHANGE_LANGUAGE','English')
          }
          else if(this.$store.state.language=='English'){
              this.$store.commit('CHANGE_LANGUAGE','简体中文')
          }
      },
      signOut(){
          this.$store.commit('LOGIN',false)
          this.$store.state.topRightText="登录/注册"
      }
  }
};
</script>

<style scoped>
    #Settings{
        margin: 10vh 0;
    }
    #btn{
        width: 90vw;
        position: absolute;
        left: 50vw;
        transform: translate(-50%,-50%);
        bottom: 15vh;
    }
</style>