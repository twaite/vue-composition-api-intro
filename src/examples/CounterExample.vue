<template>
  <div>
    <div>Count is: {{state.count}}</div>
    <div>Double is: {{state.double}}</div>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { defineComponent, reactive, computed } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    });

    function increment() {
      state.count++;
    }

    return {
      state,
      increment
    };
  }
});
</script>

<style scoped>
button {
  @apply rounded bg-indigo-700 text-white px-3 py-2 shadow;
}

button:hover {
  @apply bg-indigo-800;
}

button:active {
  @apply shadow-none;
}
</style>