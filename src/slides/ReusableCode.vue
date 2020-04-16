<template>
  <CodeExample title="Reusable Code Example">
    <ReusableExample />
  </CodeExample>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import CodeExample from '@/components/CodeExample.vue';
import useDocumentTitle from '@/composition-functions/useDocumentTitle';
import ReusableExample from '@/examples/ReusableExample.vue';

export default defineComponent({
  components: { CodeExample, ReusableExample },
  setup() {
    useDocumentTitle('Reusable Code Example');
    return {};
  }
});

</script>