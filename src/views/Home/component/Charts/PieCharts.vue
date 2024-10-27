<template>
  <div class="chart-container">
    <div ref="echartRef" class="chart" style="width: 100%; height: 300px"></div>
    <el-checkbox-group :model-value="checkList" class="chart-checkbox" @change="handleCheckboxChange">
      <el-checkbox v-for="(item, index) in props.data" :key="index" :label="item.name" :value="item.name">
        <div class="checkbox-item">
          {{ item.name }}
          <div class="legend-item" :style="{ backgroundColor: item?.itemStyle?.color }"></div>
        </div>
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import 'echarts-gl';
import { ref, shallowRef, onMounted, nextTick, watch, computed } from 'vue';
import { getPie3D, getParametricEquation } from './pieCharts'
const echartRef = ref(null);
const chart = shallowRef(null);
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});
const checkList = ref([]);
//点击checkbox时，更新图表
const handleCheckboxChange = val => {
  checkList.value = val;
  const options = peOptions.value;
  const selected = options.legend?.data.reduce((pre, it) => {
    pre[it.name] = val.includes(it.name)
    return pre
  }, {});
  options.legend.selected = selected
  chart.value.setOption(options);
};

const peOptions = computed(() => {
  const series = getPie3D(props.data, 0.8, 240, 28, 26, 0.5);
  series.push({
    name: 'pie2d',
    type: 'pie',
    label: {
      opacity: 1,
      fontSize: 13,
      lineHeight: 20,
      textStyle: {
        fontSize: 22,
      },
    },
    labelLine: {
      length: 60,
      length2: 60,
    },
    startAngle: -30, //起始角度，支持范围[0, 360]。
    clockwise: false, //饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
    radius: ['20%', '50%'],

    center: ['50%', '50%'],
    data: props.data,
    itemStyle: {
      opacity: 0,
    },
  });
  // 准备待返回的配置项，把准备好的 legendData、series 传入。
  const option = {
    legend: {
      tooltip: {
        show: true,
      },
      show: false,
      data: props.data,
      bottom: '5%',
      textStyle: {
        color: '#fff',
        fontSize: 16,
      },
    },
    // animation: true,
    //调整鼠标滑过饼图时出现tips的样式
    tooltip: {
      formatter: params => {
        if (params.seriesName !== 'mouseoutSeries' && params.seriesName !== 'pie2d') {
          return `${params.seriesName}:${option.series[params.seriesIndex].pieData.value + '个'}`;
        }
      },
      // formatter: params => {
      //     if (params.seriesName !== 'mouseoutSeries' && params.seriesName !== 'pie2d') {
      //         return `${params.seriesName
      //             }<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color
      //             };"></span>${option.series[params.seriesIndex].pieData.value + '辆'}`;
      //     }
      // },
      textStyle: {
        fontSize: 16,
      },
    },
    title: {
      x: 'center',
      top: '20',
      textStyle: {
        color: '#fff',
        fontSize: 22,
      },
    },
    // backgroundColor: '#333',

    labelLine: {
      show: true,
      lineStyle: {
        color: '#7BC0CB',
      },
    },
    // label: {
    //     show: true,
    //     position: 'outside',
    //     formatter: '{b} \n{c}',
    // },
    label: {
      formatter: function (params) {
        // console.log('params :>> ', params)
        return '{name|' + params.name + '} {value|' + params.value + '个}';
      },
      rich: {
        name: {
          fontSize: 14,
          lineHeight: 20,
        },
        value: {
          fontSize: 12,
          lineHeight: 20,
        },
      },
    },
    xAxis3D: {
      min: -1,
      max: 1,
    },
    yAxis3D: {
      min: -1,
      max: 1,
    },
    zAxis3D: {
      min: -1,
      max: 1,
    },
    grid3D: {
      show: false,
      boxHeight: 0.5,
      //top: '30%',
      bottom: '50%',
      // environment: '#021041',

      // viewControl: {
      //     distance: 180,////默认视角距离主体的距离(常用)
      //     alpha: 25, //视角绕 x 轴，即上下旋转的角度(与beta一起控制视野成像效果)
      //     beta: 60,////视角绕 y 轴，即左右旋转的角度
      //     autoRotate: false, // 自动旋转
      // },
    },
    series: series,
  }
  return option;
})
const setOption = () => {
  chart.value.setOption(peOptions.value);
}

onMounted(() => {
  checkList.value = props.data.map(item => item.name);
  chart.value = echarts.init(echartRef.value);
  setOption();
})

watch(
  () => props.data,
  v => {
    checkList.value = v.map(item => item.name);
    setOption();
  },
  { deep: true }
);
</script>
<style scoped lang="scss">
.chart-container {
  position: relative;

  .chart {}

  .chart-checkbox {
    position: absolute;
    left: 65%;
    bottom: 0;
    width: 700px;
    transform: translate(-50%, -20%);

    .checkbox-item {
      display: flex;
      align-items: center;
      color: #333;

      .legend-item {
        width: 30px;
        height: 16px;
        margin-left: 2px;
        border-radius: 4px;
      }
    }
  }
}
</style>
