<template>
  <div class="regio-info">
    <div class="title">
      <div class="title-select">区域选择111</div>
      <div class="regio-icon-close" @click="$emit('close')">
        <el-icon>
          <Close />
        </el-icon>
      </div>
    </div>
    <div class="regio-item-box">
      <div v-for="(item, index) in props.reginData" :key="item.value" class="regio-item"
        :class="{ active: selectedIndex === index }" @click="selectItem(index)">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref } from 'vue'
import {
  Close,
} from '@element-plus/icons-vue';
const props = defineProps({
  reginData: {
    type: Array,
    default: () => [],
  },
})

const selectedIndex = ref(0);
const selectItem = index => {
  selectedIndex.value = index
};
</script>
<style scoped lang="scss">
.regio-info {
  background-color: rgb(21, 165, 232);
  width: 200px;
  position: relative;
  // margin: 15px;
  // width: 100%;
  // dispplay: flex;

  .title {
    display: flex;
    justify-content: space-between;

    .title-select {

      // width: 200px;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        width: 10px;
        height: 20px;
        width: 4px;
        background-color: rgb(228, 14, 14);
      }
    }

    .regio-icon-close {
      // margin-left: 245px;
      font-size: 16px;
      color: #ff0
    }
  }

  .regio-item-box {
    // width: 30%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .regio-item {
      width: 80px;
      border: 1px solid #000;
      text-align: center;
      background-color: #ff0;
      margin: 5px;
      cursor: pointer;
      // padding: 5px;
    }

    .active {
      background-color: blue;
    }
  }

  // .container {
  //     display: flex;
  // }
}
</style>
