<template>
  <Slide>
    <div slot="title">Resources</div>
    <div slot="body" class="body">
      <ul class="list-inside list-disc">
        <li><a href="https://vue-composition-api-rfc.netlify.app" target="_blank">RFC Documentation</a></li>
        <li>Code available <a href="https://github.com/twaite/vue-composition-api-intro" target="_blank">here</a></li>
        <li><a href="https://github.com/vuejs/composition-api" target="_blank">Vue 2 Plugin</a></li>
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
    useDocumentTitle('Resources');
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