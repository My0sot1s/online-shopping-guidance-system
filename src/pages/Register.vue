<template>
  <div id="Register" class="animate__animated animate__fadeIn">
    <div id="registerBroad">
      <van-field
        v-model="name"
        clearable
        label="姓名"
        left-icon="contact"
        placeholder="请输入姓名"
      />
      <van-field
        v-model="phoneNumber"
        :error-message="this.errorMessage"
        clearable
        label="手机号"
        left-icon="phone-o"
        placeholder="请输入手机号"
        @blur="resetMessage"
      />
      <van-field
        v-model="email"
        clearable
        label="邮箱"
        left-icon="envelop-o"
        placeholder="请输入邮箱"
      />
      <van-field
        v-model="password"
        clearable
        label="密码"
        type="password"
        left-icon="closed-eye"
        placeholder="请输入密码"
      />
      <van-field
        v-model="passwordAgain"
        clearable
        label="密码"
        type="password"
        left-icon="closed-eye"
        placeholder="请再输入一次密码"
      />
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell title="中国用户" clickable @click="radio = '1'">
            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>
          <van-cell title="外国用户" clickable @click="radio = '2'">
            <template #right-icon>
              <van-radio name="2" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
      <van-button type="info" @click="toLogin">注册</van-button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      errorMessage:'',
      name: '',
      phoneNumber: '',
      email: '',
      password:'',
      passwordAgain:'',
      radio:'1',
      actions: [{ name: '中国用户' }, { name: '外国用户' }],
      show: false
    };
  },
  methods:{
    toLogin() {
      this.$router.push('/Login')
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
  #registerBroad {
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
</style>