<template>
  <Slide>
    <div slot="title">
      About Me
    </div>
    <div slot="body" class="body">
      <ul class="list-inside list-disc">
        <li>Senior Software Engineer at Dialexa</li>
        <li>Run the Dallas Vue Meetup</li>
        <li>Worked in many different frameworks, but Vue is my favorite</li>
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
    useDocumentTitle('About Me');
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