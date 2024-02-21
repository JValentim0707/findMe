<template>
  <v-checkbox class="text-secundary-font custom-checkbox" :label="label"></v-checkbox>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CustomCheckBox',

  props: {
    label: { type: String, required: true },
    msg: { type: String, required: true }
  },

  components: {
  },

  setup(props) {
    props.label // type: string | undefined
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
.custom-checkbox {
  color: #7e7e7e;
  font-size: 14px;
  i {
    color: #7e7e7e;
  }
}
</style>
