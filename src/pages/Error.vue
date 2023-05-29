<template>
  <div id="Error">
      <div id="notice">请使用手机打开</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #error{
        margin: 10vh 2vw;
    }
    #notice{
        width: 100vw;
        height: 100vh;
        position: absolute;
        font-size: 5rem;
        line-height: 100vh;
        text-align: center;
        top: 50vh;
        left: 50vw;
        transform: translate(-50%,-50%);
    }
</style>