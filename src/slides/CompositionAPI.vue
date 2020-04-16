<template>
  <Slide>
    <div slot="title">Why its a Better Pattern</div>
    <div slot="body" class="body">
      <ul class="list-inside list-disc">
        <li>Provides a better pattern for code reuse (than mixins)</li>
        <li>Better type inference (aka TypeScript)</li>
        <li>Lets you think about your data flow without thinking about the component API</li>
        <li>No <i>this</i> keyword</li>
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
    useDocumentTitle('Composition API');
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

i {
  @apply bg-gray-900 px-2 rounded;
}
</style>