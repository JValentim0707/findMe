<template>
  <v-btn @click="onClick" :width="width">{{ text }}</v-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CustomButton',

  props: {
    text: String,
    width: String,
    msg: { type: String, required: true }
  },

  components: {
  },

  setup(props) {
    props.text // type: string | undefined
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
</style>
