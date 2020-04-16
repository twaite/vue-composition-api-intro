<template>
  <div class="flex justify-center">
    <input placeholder="Change title" v-model="state.title" />
  </div>
</template>

<script>
import { defineComponent, reactive, computed, watch, watchEffect } from '@vue/composition-api';
import useDocumentTitle from '../composition-functions/useDocumentTitle';

export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style scoped>
input {
  @apply px-3 py-2 border border-solid border-gray-500 rounded w-1/3 text-black;
}
</style>