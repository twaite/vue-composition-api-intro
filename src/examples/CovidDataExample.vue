<template>
  <div class="covid-example">
    <!-- <input placeholder="Filter" v-model="state.filter" /> -->
    <div class="table-container">
      <table class="table-auto">
        <thead>
          <tr>
            <th>State</th>
            <th>Total Tests</th>
            <th>Positive</th>
            <th>Negative</th>
            <th>Hospitalized</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entry in state.data" :key="entry.state">
            <td>{{entry.state}}</td>
            <td>{{entry.totalTestResults}}</td>
            <td>{{entry.positive}}</td>
            <td>{{entry.negative}}</td>
            <td>{{entry.hospitalized || '-'}}</td>
            <td>{{entry.death || '-'}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, computed, onMounted } from '@vue/composition-api';
import axios from 'axios';

export default defineComponent({
  setup() {
    return {
    };
  }
});
</script>

<style scoped>
.covid-example {
  @apply flex flex-col items-center justify-center;
}

.table-container {
  max-height: 5rem;
  @apply p-3 flex flex-col items-center;
}

input {
  @apply w-1/3 border-solid border border-gray-500 rounded py-2 px-3 text-black;
}

th {
  @apply px-4 py-2 text-base;
}

td {
  @apply border px-4 py-2 text-base;
}
</style>