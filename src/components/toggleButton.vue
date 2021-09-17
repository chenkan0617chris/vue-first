<template>
  <div>
      <button @click="show = !show">toggle</button>
      <transition>
          <p v-show="show">hello world</p>
      </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
  .v-enter-active, .v-leave-active{
      transition: opacity .5s;
  }
  .v-enter, .v-leave-to{
      opacity: 0;
  }
</style>
