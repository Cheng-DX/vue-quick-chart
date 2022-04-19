<script setup lang="ts">
// import { QuickChart } from 'quick-chart'
import { ref } from 'vue'
// import VueEchart from 'vue-echarts'

const option = ref({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'bar'
    }
  ]
})
</script>

<template>
  <div style="width: 500px; height: 300px">
    <v-chart :option="option" />
  </div>
  <h1>WIII</h1>
</template>
