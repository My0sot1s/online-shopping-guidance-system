<template>
  <div id="My">
    <van-cell-group>
        <van-cell title="王乾润" value="已登录" label="1049396729@qq.com" />
        <van-cell :title="this.$store.state.manage" is-link />
    </van-cell-group>
    <van-button round type="danger" id="btn" @click="signOut">{{this.$store.state.signOut}}</van-button>
  </div>
</template>

<script>
export default {
    methods:{
        signOut(){
          this.$store.commit('LOGIN',false)
          this.$store.state.topRightText="登录/注册"
      }
    }
}
</script>

<style scoped>
    #My{
        margin:10vh 2vw;
    }
    #btn{
        width: 90vw;
        position: absolute;
        left: 50vw;
        transform: translate(-50%,-50%);
        bottom: 15vh;
    }
</style>