<template>
  <div class="bg">
    <Slide>
      <div slot="body" class="body">
        <div class="left">
          <div class="flex-grow" />
          <div class="flex-grow flex flex-col justify-between">
            <h1>Using the Vue 3 Composition API</h1>
            <h3>Speaker: Tim Waite</h3>
            <div>
              <h3>Thursday</h3>
              <h3>Apr 16, 2020</h3>
              <h3>6:00PM TO 8:00PM</h3>
            </div>
          </div>
        </div>
        <div class="right items-end">
          <div class="flex-grow flex flex-col justify-between">
            <div class="self-end">
              <h1 class="self-end">Seattle Vue Meetup</h1>
              <h3 class="text-vue-green text-right normal-case">meetup.com/SeattleVueJS/</h3>
            </div>
            <div class="rounded-full border-4 border-solid border-vue-green self-end p-10">
              <img
                src="@/assets/logo.png"
                class="relative"
                height="200"
                width="200"/>
            </div>
          </div>
          <div class="flex-grow" />
        </div>
      </div>
    </Slide>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Slide from '@/components/Slide';

export default defineComponent({
  components: { Slide }
});
</script>

<style scoped>
.body {
  @apply flex justify-center items-center w-full h-full uppercase;
}

img {
  top: 1rem;
}

.left, .right {
  @apply flex flex-col flex-1 justify-center p-16 h-full;
}

.bg {
  @apply w-full h-full;
  background-image: linear-gradient(60deg, #3eaf7c 50%, rgba(0,0,0,0) 50%);
}

h1 {
  @apply text-5xl font-bold;
}

h3 {
  @apply text-3xl;
}
</style>