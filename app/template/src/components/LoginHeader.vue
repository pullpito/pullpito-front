<template>
 <b-nav class="login-nav">
  <b-container fluid>
    <b-row>
      <b-col>
        <img class="login-logo" alt="Pullpito Logo" src="@/assets/images/logo-png.png" width="125px" height="auto" />
      </b-col>
    </b-row>
  </b-container>
 </b-nav>
</template>

<style lang="scss">
  @import "@/assets/sass/main.scss";
  .login-nav {
    background-color: $color-white;
    position: relative; 
    .col {
      padding-top: 80px; 
    }
  }
  .login-logo {
    position: absolute; 
    left: 0;
    top: 0;
  }
</style>

<script>
  export default {
    name: 'LoginHeader',
  }
</script>
