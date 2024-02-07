<template>
  <v-container class="admin-dashboard-container">
    <h3>User Dashboard</h3>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CustomButton from '../../components/CustomComponents/CustomButton.vue'

export default defineComponent({
  name: 'UserDashboard', 
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
.admin-dashboard-container {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
}

</style>
