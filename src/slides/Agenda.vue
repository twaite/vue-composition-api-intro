<template>
  <Slide>
    <div slot="title">
      Agenda
    </div>
    <div slot="body" class="body">
      <ul class="list-inside list-decimal">
        <li>Vue 3 & Controversy</li>
        <li>Why the Composition API</li>
        <li>Counter Example</li>
        <li>COVID Data Example</li>
        <li>Reusable Code Examples</li>
      </ul>
    </div>
  </Slide>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Slide from '@/components/Slide.vue';
import useDocumentTitle from '@/composition-functions/useDocumentTitle';

export default defineComponent({
  components: { Slide },
  setup() {
    useDocumentTitle('Agenda');
  }
});
</script>

<style scoped>
.body {
  @apply flex justify-center py-10 text-4xl;
}

ul {
  @apply w-2/3;
}

li {
  @apply pb-4;
}
</style>