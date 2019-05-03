<template>
  <section class="login" :style="{ backgroundImage: 'url(' + require('@/assets/images/bg-login-2.png') + ')' }">
    <b-container>
      <b-row>
        <b-col md="8" offset-md="2">
            <b-form class="form-login">
              <!-- <FormInput 
                :model="email"
                :errorMessage="errors['email']"
                :state="emailValid"
                label="Correo:" 
                placeholder="example@example.com" 
                type="text" />
              <FormInput 
                :model="password"
                :errorMessage="errors['password']"
                :state="passwordValid"
                label="Contraseña:" 
                placeholder="Ingresa tu contraseña" 
                description="debes ingresar una contraseña que contenga minimo 8 caracteres" type="password" /> -->


              <b-form-group id="fieldset-1" label="Correo:" label-for="input-1">
                <b-form-input id="input-1" v-model="email" :state="emailValid" placeholder="example@example.com" type="text" ></b-form-input>
                <b-form-invalid-feedback>
                  {{ errors["email"] }}
                </b-form-invalid-feedback>
              </b-form-group>

              <b-form-group id="fieldset-2" label="Contraseña:" label-for="input-2" description="debes ingresar una contraseña que contenga minimo 8 caracteres">
                <b-form-input id="input-2" v-model="password" type="password" placeholder="Ingresa tu contraseña" :state="passwordValid"></b-form-input>
                <b-form-invalid-feedback>
                  {{ errors["password"] }}
                </b-form-invalid-feedback>
              </b-form-group>

              <b-button class="button" variant="primary" size="lg" type="submit" :disabled="buttonDisabled" @click="buttonSubmit">Login</b-button>
              <LoginText LoginMessage="¿no estas registrado?" />

              <div class="loader d-flex align-items-center justify-content-center" v-if="loading"> 
                  <b-spinner size="lg" label="Loading..." type="grow" variant="info"></b-spinner>          
              </div>
            </b-form>
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
  .loader {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, .5);
    .spinner-grow {
      // set large attribute
      width: 5rem;
      height: 5rem;
    }
  }
</style>

<script>
  import LoginText from '@/components/LoginText.vue'
  import FormInput from '@/components/FormInput.vue'
	export default {
    name: 'LoginForm',
    components: {
      LoginText,
      FormInput
    },
		data() {
			return {
				email: null,
        password: null,
        errors: [],
        buttonDisabled: false,
        loading: false,
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
      buttonSubmit() {
        this.buttonDisabled = true;
        if(this.isFormValid()) {
          this.loading = true;
					let body = {
						'email': this.email,
						'password': this.password
          }
					this.$api
						.post('/auth/sign_in', body)
						.then(response => ( this.onLoginResponseSuccess(response) ))
						.catch(error => ( this.onLoginResponseFailure(error) ));
        } else {
          // TODO: Show error to user
          console.log('form errors');
        }
      },
      isFormValid() {
        this.email = this.email || "";
        this.password = this.password || "";
        return this.emailValid && this.passwordValid;
			},
			onLoginResponseSuccess(response) {
        this.buttonDisabled = false;
        this.loading = false;
				if (response.status === 200) {
					this.$session.start();
					this.$session.set('access-token', response.headers['access-token']);
					this.$session.set('client', response.headers['client']);
					this.$session.set('uid', response.headers['uid']);
          this.$router.push('/');
        } else {
					// TODO: Show error to user
					console.log("Response status: " + response.status);
				}
      },
      onLoginResponseFailure(error) {
        this.buttonDisabled = false;
        this.loading = false;
        if(error.response.status == 401) {
          // TODO: Show error invalid credentials
        } else {
          // TODO: Show uncaught error
        }
      }
    }
  }
</script>
