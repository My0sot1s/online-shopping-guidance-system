<template>
  <div id="Login" class="animate__animated animate__fadeIn">
    <div id="loginBroad">
        <van-field
            v-model="phoneNumber"
            clearable
            label="手机号"
            :error-message="this.errorMessage"
            @blur="resetMessage"
            left-icon="phone-o"
            placeholder="请输入手机号"
        />
        <van-field
            v-model="password"
            clearable
            label="密码"
            type="password"
            left-icon="closed-eye"
            placeholder="请输入密码"
        />
        <van-button round type="info" @click="toTests" id="loginBtn">登录</van-button>
        <div id="notice">
            还没注册？点击
            <span id="notice" @click="toRegister">这里</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            phoneNumber:'',
            password:'',
            errorMessage:'',
        }
    },
    methods:{
        toRegister(){
            this.$router.push('/Register')
        },
        toTests(){
            this.$store.commit('LOGIN',true)
            this.$router.push('/Home');
        },
        resetMessage() {
        if(this.phoneNumber.length!=11){
            this.errorMessage="请输入11位的手机号"
        }
        else{
            this.errorMessage=""
        }
    }
    }
}
</script>

<style scoped>
    #loginBroad {
      margin-top:15vh;
      width: 100vw;
      height: 80vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    #notice {
        text-align: center;
        margin-bottom: 5vh;
    }
    #notice span {
        color:#39a9ed;
        text-decoration:underline
    }
    #loginBtn{
        width:90vw;
        position: relative;
        left:50vw;
        transform: translate(-50%,0);
    }
</style>