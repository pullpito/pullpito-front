<template>
  <section class="login" :style="{ backgroundImage: 'url(' + require('@/assets/images/bg-login-2.png') + ')' }">
    <b-container>
      <b-row>
        <b-col md="8" offset-md="2">
          <div class="login-form">
            <b-form 
              action="" 
              method="post"
              @submit="formValidation"
            >
              <b-form-group id="fieldset-1" label-for="input-1" >
                <label for="input-1" class="d-block">Correo*</label>
                <b-form-input id="input-1" v-model="email" :state="emailValid" placeholder="example@example.com" type="text" ></b-form-input>
                <b-form-invalid-feedback>
                  {{ errors["email"] }}
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group id="fieldset-2" label-for="input-2" description="debes ingresar una contraseña que contenga minimo 8 caracteres">
                <label for="input-2" class="d-block">Contraseña*</label>
                <b-form-input id="input-2" v-model="password" type="password" placeholder="Ingresa tu contraseña" :state="passwordValid"></b-form-input>
                <b-form-invalid-feedback>
                  {{ errors["password"] }}
                </b-form-invalid-feedback>
              </b-form-group>
              <b-button class="button" variant="primary" size="lg" type="submit" >Enviar</b-button>
            </b-form>
            <p class="login-text text-center">
              ¿No estas registrado?
              <b-link src="">Crea una cuenta</b-link>
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<style lang="scss">
	@import "@/assets/sass/main.scss";
	@import "@/assets/sass/components/_buttons.scss";
	@import "@/assets/sass/components/_forms.scss";
  .login {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
	.login-form {
		background-color: $bg-default;
		border-radius: 12px;
		padding: 80px 40px;
		margin: 100px 0;
  }
  .login-text {
    margin: 2rem 0;
    a {
      color: #000;
      text-decoration: underline;
      font-weight: bold;
    }
  }

 

</style>

<script>
	export default {
		name: 'LoginForm',
		data() {
			return {
				email: null,
        password: null,
				errors: [],
			}
		},
		computed: {
			emailValid() {
        if(this.email == null) return null;
        this.errors["email"] = "";
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(this.email)) {
          this.errors["email"] = "Este campo debe tener formato de email";
          return false;
        }
        return true;
			},
			passwordValid() {
        if(this.password == null) return null;
        var lengthValidation = this.password != "";
        this.errors["password"] = lengthValidation ? "" : "este campo es requerido";
        return lengthValidation;
			}
		},
		methods: {
      formValidation(event) {
        event.preventDefault();
        this.email = this.email || "";
        this.password = this.password || "";
        if(this.emailValid && this.passwordValid) {
					let body = {
						'email': this.email,
						'password': this.password
					}
					this.$api
						.post('/auth/sign_in', body)
						.then(response => ( this.loginResponse(response) ))
						.catch(error => ( console.log(error) ));
        } else {
          console.log('form errors');
				}
			},
			loginResponse(response) {
				if (response.status === 200) {
					this.$session.start();
					this.$session.set('access-token', response.headers['access-token']);
					this.$session.set('client', response.headers['client']);
					this.$session.set('uid', response.headers['uid']);
					this.$router.push('/');
				} else {
					// TODO: error message
					console.log("Response status: " + response.status);
				}
			}
    }
  }
</script>
