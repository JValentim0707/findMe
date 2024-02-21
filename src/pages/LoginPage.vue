<template>
  <div class="login-container">
    <div class="box-login">
     <div class="box-left-login">
      <div class="box-left-content">
        <div class="text-main-font title-text">Welcome to FindMe</div>
        <div class="text-secundary-font subtitle-text">Sing In To Your Account</div>
      </div>
     </div>
     <div class="box-right-login">
      <div class="box-right-content">
        <div>
          <div class="text-secundary-font text-hello">Hello Good Morning !</div>
          <div class="text-secundary-font">FindMe Was Wating For You ! </div>
        </div>
        <div><v-icon icon="mdi-domain" size="60" color="#5FC2D9"></v-icon></div>
      </div>
      <div class="d-flex align-center flex-column">
        <div class="d-flex text-secundary-font login-message"><span class="text-secundary-font text-higlight">Login</span> You Account</div>
        <v-form class="form-container">
          <CustomInput label="Email Address" variant="underlined" color="#5FC2D9" baseColor="#176FA6"/>
          <CustomInput label="Password" variant="underlined" color="#5FC2D9" baseColor="#176FA6"/>
          <div class="help-container">
            <CustomCheckboxVue label="Remember"></CustomCheckboxVue>
            <div class="text-secundary-font forgot-text">Forgot Password ?</div>
          </div>
          <CustomButton class="text-main-font custom-button-login" text="Submit" width="200" @onClick="$router.push('adminDashboard')"></CustomButton>
        </v-form>
      </div>
     </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CustomButton from '../components/CustomComponents/CustomButton.vue'
import CustomCheckboxVue from '../components/CustomComponents/CustomCheckbox.vue'
import CustomInput from '../components/CustomComponents/CustomInput.vue'

export default defineComponent({
  name: 'LoginPageComponent', 
  props: {
    name: String,
    msg: { type: String, required: true }
  },

  components: {
    CustomButton,
    CustomInput,
    CustomCheckboxVue
  },

  setup(props) {
    props.msg // type: string | undefined
  },
  data() {
    return {
      count: 1
    }
  },
  mounted() {
    console.log('dale')
  }
})

</script>

<style lang="scss" scoped>

.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  background: linear-gradient(180deg, #5FC2D9, #176FA6);
  overflow: hidden;
  justify-content: center;
  align-items: center ;

  .box-login {
    display: flex;
    width: 60%;
    max-width: 1000px;
    height: 80%;
    max-height: 600px;
    background-color: white;
    .custom-button-login {
      background: linear-gradient(270deg, #5FC2D9, #176FA6);;
      color: white;
      text-transform: capitalize;
      font-size: 16px;
    }
    .box-left-login {
      background-image: url('../../src/assets/images/background-box-login.png');
      background-position: left;
      width: 50%;
    }
    .box-left-content {
      background-color: #176fa648;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
      .title-text {
        color: white;
        font-size: 32px;
      }

      .subtitle-text {
        color: white;
        font-size: 20px;
      }
    }
    .box-right-login {
      background-color: white;
      width: 50%;
      .form-container {
        display: flex;
        flex-direction: column;
        width: 80%;
        align-items: center;
      }
      .help-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        font-size: 14px;
      }
      .forgot-text {
        padding-bottom: 23px;
        &:hover {
          color: #176FA6;
          cursor: pointer;
          text-decoration: underline;
        }
      }
      .box-right-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 40px 40px;
      }
      .text-hello {
        color: #176FA6;
        font-size: 20px;
        font-weight: 650;
      }
      .text-higlight {
        color: #176FA6;
        font-weight: 650;
      }
      .login-message {
        font-size: 18px;
        gap: 4px;
      }
    }
  }
}

</style>
