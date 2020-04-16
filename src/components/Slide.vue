<template>
  <div class="slide">
    <header>
      <slot name="title" />
    </header>
    <main>
      <slot name="body" />
    </main>
    <footer>
      <nav @click="$emit('navigate')">
        <Icon />
      </nav>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Icon from './Icon';

export default defineComponent({
  components: { Icon }
});
</script>

<style scoped>
.slide {
  @apply h-screen w-screen flex flex-col;
}

header {
  @apply flex justify-center text-5xl pt-20;
}

main {
  @apply flex-1;
}

footer {
  @apply flex p-3 justify-end;
}

nav {
  @apply cursor-pointer;
}
</style>