<template>
  <section class="login" :style="{'background-image': 'url(./assets/images/bg-login.png}' }">
    <b-container>
      <b-row>
        <b-col>
          <img alt="Pullpito Logo" src="@/assets/images/logo-png.png" width="80px" height="auto" />
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <b-col md="8" offset-md="2">
          <LoginForm />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>


<style lang="scss">
</style>
  

<script>
  import LoginForm from '@/components/LoginForm.vue'
  export default {
    name: 'Login',
    components: {
      LoginForm
    }
  }

</script>