<template>
  
  <div class="table">
    <WeatherHours :data="data" :hiddenLine="false"/>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import WeatherHours from './component/WeatherHours/index.vue'

const data = [
  {
    date: '02/26',
    temperature: '4',
    line: '',
    weather: '气候',
    weatherImg: 'MostlyCloudy',
    wind: '风',
    windSpeed: '风速度',
    time: '10:00',
  },
  {
    date: '02/26',
    temperature: '1',
    line: '',
    weather: '气候',
    weatherImg: 'Sunny',
    wind: '风',
    windSpeed: '风速度',
    time: '11:00',
  },
  {
    date: '02/26',
    temperature: '2',
    line: '',
    weather: '气候',
    weatherImg: 'Drizzling',
    wind: '风',
    windSpeed: '风速度',
    time: '12:00',
  },
  {
    date: '02/26',
    temperature: '30',
    line: '',
    weather: '气候',
    weatherImg: 'Pouring',
    wind: '风',
    windSpeed: '风速度',
    time: '13:00',
  },
  {
    date: '02/26',
    temperature: '1',
    line: '',
    weather: '气候',
    weatherImg: 'Lightning',
    wind: '风',
    windSpeed: '风速度',
    time: '14:00',
  },
  {
    date: '02/26',
    temperature: '2',
    line: '',
    weather: '气候',
    weatherImg: 'Pouring',
    wind: '风',
    windSpeed: '风速度',
    time: '15:00',
  },
  {
    date: '02/26',
    temperature: '1',
    line: '',
    weather: '气候',
    weatherImg: 'Lightning',
    wind: '风',
    windSpeed: '风速度',
    time: '16:00',
  },
  {
    date: '02/26',
    temperature: '-10',
    line: '',
    weather: '气候',
    weatherImg: 'Lightning',
    wind: '风',
    windSpeed: '风速度',
    time: '17:00',
  },
  {
    date: '02/26',
    temperature: '1',
    line: '',
    weather: '气候',
    weatherImg: 'Lightning',
    wind: '风',
    windSpeed: '风速度',
    time: '18:00',
  },
];

</script>

<style lang="scss" scoped>
body,
html {
  background: #1b4572;
}
.table {
  width: 600px;
  background: #1b4572;
  position: relative;
  
}
</style>
