<template>
  <div class="login-text text-center">
    {{ LoginMessage }} 
    <b-link href="www.google.cl">Crear cuenta</b-link>
  </div>
</template>

<style lang="scss">
  .login-text {
    margin: 2rem 0 1rem;
    a {
      color: var(--dark);
      text-decoration: underline;
      font-weight: bold;
    }
  }
</style>

<script>
  export default {
    name: "LoginText",
    props: {
      LoginMessage: String,
    }
  }
</script>

