<template>
  <CodeExample title="Counter Example">
    <CounterExample />
  </CodeExample>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import CodeExample from '@/components/CodeExample.vue';
import useDocumentTitle from '@/composition-functions/useDocumentTitle';
import CounterExample from '@/examples/CounterExample.vue';

export default defineComponent({
  components: { CodeExample, CounterExample },
  setup() {
    useDocumentTitle('Counter Example');
    return {};
  }
});

</script>