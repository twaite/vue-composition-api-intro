<template>
  <div class="slide">
    <header>
      <slot name="title" />
    </header>
    <main>
      <slot name="body" />
    </main>
    <footer>
      <nav @click="navigateToPreviousRoute()">
        <Icon type="backward" />
      </nav>
      <div class="flex-grow" />
      <nav @click="navigateToNextRoute()">
        <Icon type="forward" />
      </nav>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Icon from '@/components/Icon.vue';
import { getNextSlide, getPreviousSlide } from '@/router';

let addedEventListener = false;

export default defineComponent({
  components: { Icon },
  setup(props, vm) {
    const router = vm.root.$router;

    const navigateToNextRoute = () => {
      const nextSlide = getNextSlide(router.currentRoute.name || '');
      router.push({ name: nextSlide });
    }

    const navigateToPreviousRoute = () => {
      const nextSlide = getPreviousSlide(router.currentRoute.name || '');
      router.push({ name: nextSlide });
    }
    
    if (!addedEventListener) {
      addedEventListener = true;

      window.addEventListener('keydown', (e: KeyboardEvent) => {
        switch (e.key) {
          case 'ArrowRight': 
            navigateToNextRoute();
            break;
          case 'ArrowLeft':
            navigateToPreviousRoute();
            break;
        }
      });
    }

    return {
      navigateToNextRoute,
      navigateToPreviousRoute,
    }
  }
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
  @apply flex p-3;
}

nav {
  @apply cursor-pointer;
}
</style>