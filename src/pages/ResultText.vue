<template>
  <div id="ResultText" class="animate__animated animate__slideInLeft">
      <div id="title">{{this.$store.state.resultTitle}}</div>
      <van-collapse v-model="activeNames">
        <van-collapse-item :title="this.$store.state.t1" name="1">{{this.$store.state.results[0][this.$store.state.answers[0]]}}</van-collapse-item>
        <van-collapse-item :title="this.$store.state.t2" name="2">{{this.$store.state.results[1][this.$store.state.answers[1]]}}</van-collapse-item>
        <van-collapse-item :title="this.$store.state.t3" name="3">{{this.$store.state.results[2][this.$store.state.answers[2]]}}</van-collapse-item>
        <van-collapse-item :title="this.$store.state.t4" name="4">{{this.$store.state.results[3][this.$store.state.answers[3]]}}</van-collapse-item>
      </van-collapse>
      <div id="btns">
          <van-button round type="info" class="btn" @click="backToHome">{{this.$store.state.backToHome}}</van-button>
          <van-button round type="info" class="btn" @click="toMore">{{this.$store.state.more}}</van-button>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            activeNames: ['1','2'],
        };
    },
    methods:{
        backToHome(){
            this.$router.currentRoute.fullPath=="/Home"||this.$router.push('/Home');
        },
        toMore(){
            this.$router.push(this.$store.state.toPage);
        }
    },
    mounted(){
        
    }

}
</script>

<style>
    #ResultText {
        margin: 10vh 2vw;
    }
    #title {
        padding: 3vh 2vw;
    }
    #btns {
        margin:5vh 0 15vh 0 ;
        display: flex;
        justify-content: space-around;
    }
    .btn{
        width: 40vw;
    }
</style>