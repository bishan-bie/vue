<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item v-for="r in menuList" :key="r.key">{{ r.title }}</el-menu-item>
  </el-menu>
  <main> <RouterView /></main>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import request from '@/utils/request'

const activeIndex = ref('1')
const menuList = ref([
  {
    key: '1',
    title: '图片模板类'
  },
  {
    key: '2',
    title: '通用模板类'
  },
  {
    key: '3',
    title: '组织机构'
  },
  {
    key: '4',
    title: '定制频道'
  },
  {
    key: '5',
    title: '组搜索'
  }
 ])
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
onMounted(() => { 
  console.log('layout mounted')
})
</script>
