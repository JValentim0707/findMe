<template>
  <v-text-field
    class="input-font-label"
    :label="label"
    :variant="variant"
    :base-color="baseColor"
    :color="color"
  ></v-text-field>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CustomButton',

  props: {
    label: String,
    variant: String,
    baseColor: String,
    color: String
  },

  components: {
  },

  setup(props) {
    props.label,
    props.variant,
    props.baseColor,
    props.color
  },

  data() {
    return {
    }
  },

  methods: {
    onClick() {
     this.$emit('onClick')
    }
  }
})

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Aclonica&family=Advent+Pro:ital,wght@0,100..900;1,100..900&display=swap');

.input-font-label {
  font-family: "Advent Pro", sans-serif;
  width: 100%;
}
</style>
