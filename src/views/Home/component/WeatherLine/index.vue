<template>
  <div class="weather-line"ref="echartRef"></div>
</template>
<script setup>
import { dispose, init } from 'echarts';
import { onMounted, onUnmounted, defineProps, watch, ref, shallowRef } from 'vue'
const props = defineProps(['data'])
const echartRef = shallowRef()
const echartInstance = ref();

onMounted(() => {
  echartInstance.value = init(echartRef.value);
  setChart();
  window.onresize = function () {
    //自适应大小
    echartInstance.value.resize();
  };
});

onUnmounted(() => {
  dispose();
});

// 基础配置一下Echarts
function setChart() {
  // 把配置和数据放这里
  echartInstance.value.setOption({
    xAxis: {
      show: false,
      type: 'category',
      data:  props.data.map((_,i) => i),
    },
    yAxis: {
      type: 'value',
      show: false,
    },
    series: [
      {
        data: props.data,
        type: 'line'
      }
    ],
    grid: {
      left: 0,
      right: 0,
      top: 5,
      bottom: 5,
    }
  });
}
watch(()=> props.data.value, () => {
  setChart()
})

</script>