<style lang="stylus">
</style>
<template lang="html" scoped>
</template>

<script>
// import checkbox from 'components/checkbox/checkbox'

export default {
  props: {
    myChart: {
      tyoe: Object,
      default: {}
    }
  },
  data() {
    return {
    }
  },
  mounted() {
    this._init()
  },
  methods: {
    _init() {
      this.prevClass = this.$parent.$el._prevClass
      this.option = this.myChart.getOption()
      this.resetOption = this._deepCopy(this.myChart.getOption())
      this._initProList()
    },
    _initProList() {
      let arr = []
      if (this.prevClass !== 'point') {
        this.showProduct = true
        this.option.xAxis[0].data.forEach((pro, index) => {
          arr.push({
            name: pro,
            selected: true
          })
        })
        this.pro_list = arr
      }
    },
    _deepCopy(obj) {
      let str, newobj;
      str = newobj = obj.constructor === Array ? [] : {};
      if (typeof obj !== 'object') {
        return
      } else if (window.JSON) {
        str = JSON.stringify(obj) // 系列化对象
        newobj = JSON.parse(str) // 还原
      } else {
        for (var i in obj) {
          newobj[i] = typeof obj[i] === 'object' ? cloneObj(obj[i]) : obj[i];
        }
      }
      return newobj;
    },
    pro_toggle(pro, index) {
      pro.selected = !pro.selected
      this.selectAll_flag = this.isSelectAll()
      this.redraw()
    },
    redraw() {
      let option = this._deepCopy(this.resetOption)
      let count = 0
      this.pro_list.forEach((pro, index) => {
        index = index - count
        if (!pro.selected) {
          option.xAxis[0].data.splice(index, 1)
          option.series.forEach((obj) => {
            obj.data.splice(index, 1)
          })
          count++
        }
      })
      this.myChart.setOption(option)
    },
    isSelectAll() {
      let flag = true
      this.pro_list.forEach((pro) => {
        if (!pro.selected) {
          flag = false
        }
      })
      return flag
    },
    selectAll() {
      this.selectAll_flag = !this.selectAll_flag
      this.pro_list.forEach((pro) => {
        pro.selected = this.selectAll_flag
      })
      this.redraw()
    },
    showProPane() {
      this.pro_filter_flag = !this.pro_filter_flag
    }
  }
}

</script>
