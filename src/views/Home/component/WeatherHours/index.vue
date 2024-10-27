<template>
  <div class="weather-hours-box">
    <div class="weather-hours">
      <div class="weather-hours-item" :style="{width: cellWidth + 'px'}" v-for="(item, i) in data">
        <div class="item-cell">{{ item.date }}</div>
        <div class="item-cell item-cell-no-border-bottom">
          {{ item.temperature ? `${item.temperature}&deg;C` : '--' }}
        </div>
        <div v-if="!hiddenLine" class="item-cell item-cell-no-border-bottom line-style">
          <WeatherLine
            v-if="i === 0"
            :style="{ width: cellWidth * data.length + 'px', height: '50px' }"
            :data="data.map((it) => it.temperature)"
          />
        </div>
        <div class="item-cell item-cell-no-border-bottom">{{ item.weather }}</div>
        <div class="item-cell item-cell-no-border-bottom">
          <el-icon>
            <component :is="weatherImgMap[item.weatherImg]" />
          </el-icon>
        </div>
        <div class="item-cell item-cell-no-border-bottom">{{ item.wind }}</div>
        <div class="item-cell">{{ item.windSpeed }}</div>
        <div class="item-cell">{{ item.time }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  MostlyCloudy,
  Sunny,
  Drizzling,
  Pouring,
  Lightning,
} from '@element-plus/icons-vue';
import WeatherLine from '../WeatherLine/index.vue';
import { computed, defineProps } from 'vue';

const weatherImgMap = {
  MostlyCloudy,
  Sunny,
  Drizzling,
  Pouring,
  Lightning,
};
const props = defineProps(['data', 'hiddenLine', 'itemWidth']);
const cellWidth = computed(() => {
  return props.itemWidth || 80
})
</script>
<style lang="scss" scoped>
$weatherTableBorder: 1px solid #18224f;

.weather-hours-box {
  width: 600px;
  height: auto;
  margin-bottom: 10px;
  color: #fff;
  overflow-x: auto;
}
.weather-hours {
  display: flex;
  align-items: center;
  .weather-hours-item {
    box-sizing: border-box;
    flex-shrink: 0;
    &:first-child {
      border-left: $weatherTableBorder;
    }
    .item-cell {
      text-align: center;
      border-bottom: $weatherTableBorder;
      border-right: $weatherTableBorder;
      padding: 4px 0;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:first-child {
        border-top: $weatherTableBorder;
      }
    }
    .item-cell-no-border-bottom {
      border-bottom: none;
    }
    .line-style {
      display: block;
      min-height: 60px;
    }
  }
}
</style>
