<template>
  <div id="app">
    <van-nav-bar fixed
     @click-left="showPopup"
     @click-right="toLogin"
     :title="this.$store.state.topText"
     :right-text="this.$store.state.topRightText">
      <template #left>
        <i class="fa fa-navicon"></i>
      </template>
    </van-nav-bar>
    <van-popup v-model="show" position="left" :style="{height:'100%'}" id="sidebar">
      <van-sidebar v-model="activeKey">
      <van-sidebar-item :title="this.$store.state.shouYe" @click="backToHome"></van-sidebar-item>
      <van-sidebar-item :title="this.$store.state.paySystem" @click="toPaySystem" />
      <van-sidebar-item :title="this.$store.state.priceComp" />
      <van-sidebar-item :title="this.$store.state.advantages" />
      <van-sidebar-item :title="this.$store.state.languageSettings" @click="toSettings"/>
      <van-sidebar-item :title="this.$store.state.productionTeam" />
    </van-sidebar>
    </van-popup>

    <router-view/>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" @click="backToHome">{{this.$store.state.bottomText1}}</van-tabbar-item>
      <van-tabbar-item icon="friends-o" @click="toMy">{{this.$store.state.bottomText2}}</van-tabbar-item>
      <van-tabbar-item icon="setting-o" @click="toSettings">{{this.$store.state.bottomText3}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      activeKey: 0,
      show: false,
      active: 0,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    backToHome(){
      this.show=false;
      this.$router.currentRoute.fullPath=="/Home"||this.$router.push('/Home');
    },
    toLogin(){
      if(this.$store.state.loggedIn==false){
        this.$router.currentRoute.fullPath=="/Login"||this.$router.push('/Login');
      }
    },
    toPaySystem(){
      if(this.$store.state.language=='简体中文'){
        this.$router.currentRoute.fullPath=="/PaySystem1"||this.$router.push('/PaySystem1');
      }
      else if(this.$store.state.language=='English'){
        this.$router.currentRoute.fullPath=="/PaySystem2"||this.$router.push('/PaySystem');
      }
      this.show=false;
    },
    toSettings(){
      this.show=false;
      this.$router.currentRoute.fullPath=="/Settings"||this.$router.push('/Settings');
    },
    toMy(){
      if(this.$store.state.loggedIn==false){
        this.$router.currentRoute.fullPath=="/Login"||this.$router.push('/Login');
      }
      else if(this.$store.state.loggedIn==true){
        this.$router.currentRoute.fullPath=="/My"||this.$router.push('/My');
      }
    }
  },
  mounted(){
      if(window.innerWidth>1100){
        this.$router.currentRoute.fullPath=="/Error"||this.$router.push('/Error');
      }
      window.onresize = () => {
        if(window.innerWidth<1100){
          this.$router.currentRoute.fullPath=="/Home"||this.$router.push('/Home');
        }
        else{
          this.$router.currentRoute.fullPath=="/Error"||this.$router.push('/Error');
        }
      }
    }
}
</script>

<style>
  
</style>
