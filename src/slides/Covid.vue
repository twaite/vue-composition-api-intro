<template>
  <CodeExample title="Covid Data Example">
    <CovidDataExample />
  </CodeExample>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import CodeExample from '@/components/CodeExample.vue';
import useDocumentTitle from '@/composition-functions/useDocumentTitle';
import CovidDataExample from '@/examples/CovidDataExample.vue';

export default defineComponent({
  components: { CodeExample, CovidDataExample },
  setup() {
    useDocumentTitle('Covid Example');
    return {};
  }
});

</script>