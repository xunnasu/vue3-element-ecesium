<template>
  <div>关于我们
    <PieCharts :data="optionsData" />
  </div>

</template>

<script setup>
import { ref } from 'vue';
import PieCharts from './component/Charts/PieCharts.vue';

const optionsData = ref([
  {
    name: '在线1',
    value: 94,
    itemStyle: {
      color: '#dc3545',
    },
  },

  {
    name: '离线2',
    value: 87,
    itemStyle: {
      color: '#007bff',
    },
  },
  {
    name: '作业中3',
    value: 11,
    itemStyle: {
      color: '#F5B64C',
    },
  },
  {
    name: '作业中4',
    value: 12,
    itemStyle: {
      color: '#fff',
    },
  },
]);
</script>

<style lang="scss" scoped></style>
