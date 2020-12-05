<template>
  <div>
    <v-swatches v-model="color"></v-swatches>
  </div>
</template>

<script>
import VSwatches from 'vue-swatches'

// Import the styles too, typically in App.vue or main.js
import 'vue-swatches/dist/vue-swatches.css'

export default {
  components: { VSwatches },
  data() {
    return {
      color: '#1CA085',
    }
  },
}
</script>