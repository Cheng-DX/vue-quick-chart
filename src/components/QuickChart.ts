import { DefineComponent, h, toRefs } from 'vue'
import { defineComponent, ref, computed } from 'vue'
import { quickChartProps } from '../options'
import type { QuickChartOption } from '../types'

import VueEchart from 'vue-echarts'

export const QuickChart = defineComponent({
  name: 'QuickChart',
  props: quickChartProps,
  setup(props, ctx) {
    const { title, option } = toRefs(props)
    if (!option.value.title?.text) {
      option.value.title = {
        text: title
      }
    }
    return () => {
      const r = h(VueEchart, {
        ref: 'chart',
        autoresize: true,
        option: option.value
      })
      console.log(r)
      return r
    }
  }
}) as DefineComponent<QuickChartOption>
