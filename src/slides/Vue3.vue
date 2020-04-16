<template>
  <Slide>
    <div slot="title">Vue 3 & Controversy</div>
    <div slot="body" class="body">
      <ul class="list-inside list-disc">
        <li>Vue 3 is currently in <a href="https://github.com/vuejs/vue-next" target="_blank">alpha</a></li>
        <li><a href="https://github.com/vuejs/rfcs/pull/42" target="_blank">Vue RFC</a></li>
        <li>Different way of thinking about your code</li>
        <li>Completely opt in</li>
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
    useDocumentTitle('Vue 3 and Controversy');
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

a {
  @apply text-vue-green;
}

a:hover {
  @apply underline;
}
</style>