<template>
    <!--
        <div class="item one" @click="clickChart('1')" style="transform: translate(-20.4%,-12.5%) scale(0.25)">
          <relation></relation>
        </div>
        <div class="item two" @click="clickChart('2')" style="transform: translate(-20.4%,12.5%) scale(0.25)">
          <column></column>
        </div>
        <div class="item three" @click="clickChart('3')" style="transform: translate(-20.4%,-37.5%) scale(0.25)">
          <lineyear></lineyear>
        </div>
        <div class="item four active" @click="clickChart('4')" style="transform: translate(43.7%, 0) scale(1)">
        <point></point>
        </div>
        <div class="item five" @click="clickChart('5')" style="transform: translate(-20.4%, 37.5%) scale(0.25)">-->
        <scatter></scatter>
</template>

<script>
import scatter from 'components/point/scatter'

export default {
  data() {
    return {
      items: []
    }
  },
  mounted() {
    this._init()
  },
  methods: {
    _resize() {
      this.$root.charts.forEach((myChart) => {
        myChart.resize()
      })
    },
    _init() {
      this.items = document.querySelectorAll('.flex-container .item')
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].dataset.order = i + 1;
      }
    },
    clickChart(clickIndex) {
      let activeItem = document.querySelector('.flex-container .active')
      let activeIndex = activeItem.dataset.order
      let clickItem = this.items[clickIndex - 1]
      if (activeIndex === clickIndex) {
        return
      }
      activeItem.classList.remove('active')
      clickItem.classList.add('active')
      this._setStyle(clickItem, activeItem)
    },
    _setStyle(el1, el2) {
      let transform1 = el1.style.transform
      let transform2 = el2.style.transform
      el1.style.transform = transform2
      el2.style.transform = transform1
    }
  },
  components: {
    scatter
  }
}

</script>

<style lang="stylus" scoped>
*
  box-sizing: border-box;
.dashboard
    margin:0px;
    padding:0px;
    background url('../../assets/bg.jpg');
    background-size 100% 100%
</style>
