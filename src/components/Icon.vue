<template>
  <svg style="width:50px;height:50px" viewBox="0 0 24 24">
    <path fill="currentColor" :d="path" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';

const paths: { [key: string]: string } = {
  backward: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",
  forward: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",
}

type Props = {
  type: keyof typeof paths
}

export default defineComponent({
  props: {
    type: String,
  },
  setup(props: Props) {
    const path = computed(() => paths[props.type]);

    return {
      path,
    };
  }
});
</script>