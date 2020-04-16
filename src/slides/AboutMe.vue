<template>
  <Slide>
    <div slot="title">
      About Me
    </div>
  </Slide>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Slide from '@/components/Slide.vue';

export default defineComponent({
  components: { Slide }
});
</script>