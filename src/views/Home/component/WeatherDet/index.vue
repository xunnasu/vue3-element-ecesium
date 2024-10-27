<template>
  <div class="weather-info">
    <div class="title">天气实况(2023-05-10 12:00:00)</div>
    <div class="weather">
      <ul>
        <li>气压:{{ props.qiya }}</li>
        <li>风速:{{ props.fengsu }}</li>
        <li>风向:{{ props.fengxiang }}</li>
      </ul>
    </div>
    <div class="history-info">历史实况(包括表格和折线)</div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  qiya: {
    type: String,
    default: '',
  },
  fengsu: {
    type: String,
    default: '',
  },
  fengxiang: {
    type: String,
    default: '',
  },
})
</script>
<style scoped lang="scss">
.weather-info {
  background-color: rgb(21, 165, 232);
  color: #fff;
  margin: 15px;

  .title {
    background-color: blueviolet;
  }

  .weather {
    background-color: rgb(187, 164, 63);
  }

  .history-info {
    background-color: rgb(241, 34, 189);
  }
}
</style>
