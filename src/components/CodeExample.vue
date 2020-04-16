
<template>
  <Slide>
    <div slot="title">{{title}}</div>
    <div slot="body" class="body">
      <div class="example-box">
        <slot></slot>
      </div>
    </div>
  </Slide>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Slide from '@/components/Slide.vue';

export default defineComponent({
  props: {
    title: String,
  },
  components: { Slide },
});

</script>

<style scoped>
.body {
  @apply flex justify-center py-10 text-4xl h-full;
}

.example-box {
  @apply w-2/3 bg-gray-900 shadow-lg rounded-md p-3 h-full overflow-y-scroll text-gray-200 text-base;
}
</style>