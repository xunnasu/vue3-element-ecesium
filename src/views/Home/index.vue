<template>
  <div style="position: relative;">
    <div class="table" ref="el" :style="style" style="position: fixed">
      <WeatherDet :qiya="weatherData.qiya" :fengsu="weatherData.fengsu" :fengxiang="weatherData.fengxiang"></WeatherDet>
      <WeatherHours :data="data" :hiddenLine="false" />
    </div>
    <div ref="el2" :style="`${style2}position: fixed;`">
      <Region v-if="showChild" :regin-data="reginData" @close="handleClose"></Region>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import WeatherHours from './component/WeatherHours/index.vue'
import WeatherDet from './component/WeatherDet/index.vue'
import Region from './component/Region/index.vue'
import { useDraggable } from '@vueuse/core'
const el = ref(null)
const el2 = ref(null)
const showChild = ref(true)

const handleClose = () => {
  showChild.value = false
}
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
    temperature: '',
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
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 10, y: 10 },
})

const { style: style2, ...a } = useDraggable(el2, {
  initialValue: { x: 100, y: 100 },
});
const reginData = ref([
  {
    name: '全部',
    value: 0,
  },
  {
    name: '东部战区',
    value: 1,
  },
  {
    name: '西部战区',
    value: 2,
  },
  {
    name: '南部战区',
    value: 3,
  },
  {
    name: '北部战区',
    value: 4,
  },
  {
    name: '中部战区',
    value: 5,
  },
])


const weatherData = {
  qiya: 1,
  fengsu: 2,
  fengxiang: 4,
}


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
