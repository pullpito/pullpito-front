<template>
  <section class="login" :style="{'background-image': 'url(./assets/images/bg-login.png}' }">
    <LoginHeader />
    <LoginForm />
  </section>
</template>


<script>
  import LoginForm from '@/components/LoginForm.vue'
  import LoginHeader from '@/components/LoginHeader.vue'
  export default {
    name: 'Login',
    components: {
      LoginForm,
      LoginHeader
    }
  }

</script>