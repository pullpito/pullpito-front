<template>
  <section class="login" :style="{ backgroundImage: 'url(' + require('@/assets/images/bg-login-2.png') + ')' }">
    <LoginHeader />
    <LoginForm />
  </section>
</template>

<style lang="scss">
  .login {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>

<script>
  import LoginForm from '@/components/login/LoginForm.vue'
  import LoginHeader from '@/components/login/LoginHeader.vue'
  export default {
    name: 'Login',
    components: {
      LoginForm,
      LoginHeader
    }
  }

</script>