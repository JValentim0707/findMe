<template>
  <v-container class="fill-height home-container">
    <v-responsive class="align-center text-center fill-height">
      <v-img height="300" src="@/assets/template.jpg" />
      <div class="text-home">Future Login Page</div>
      <div class="button-container">
        <CustomButton text="Login User" @onClick="$router.push('/userDashboard')"/>
        <CustomButton text="Login Admin" @onClick="$router.push('/adminDashboard')"/>
      </div>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CustomButton from '../components/CustomComponents/CustomButton.vue'

export default defineComponent({
  name: 'HomePageComponent', 
  props: {
    name: String,
    msg: { type: String, required: true }
  },

  components: {
    CustomButton
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
  @import url('https://fonts.googleapis.com/css2?family=Marvel:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  .text-home {
    font-family: 'Marvel', sans-serif;
    color: #295477;
    font-size: 37px;
  }

  .button-container {
    display: flex;
    gap: 15px;
    justify-content: center;
  }
</style>
