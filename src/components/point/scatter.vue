<style lang="stylus" scoped>
.scatterChart
  height 1000px
  width 800px
  .main
    width 100%
    height 100%
    margin-top -60px
    margin-left -40px
</style>

<template>
<div class="scatterChart">
  <v-header :name="name"></v-header>
  <v-filter ></v-filter>
  <div class="main"></div>
</div>

</template>

<script>
import echarts from 'echarts'
import header from 'components/header/header'
import filter from 'components/filter/filter'

export default {
  data() {
    return {
      legendArr: [],
      myChart: {},
      SomaRegion: ['LGd', 'LP', 'MG', 'RE', 'VM', 'VPL', 'VPM', 'CLA', 'MOp', 'MOs',
        'RSPv', 'SSp-bfd', 'SSp-ll', 'SSp-m', 'SSp-n', 'SSp-ul', 'SSs', 'VISp', 'CP', 'OT'],
      ArborLocation: ['LGd', 'LP', 'MG', 'RE', 'SMT', 'VM', 'VPL', 'VPM', 'Ald', 'AUDp', 'AUDv',
        'CLA', 'MOp', 'MOs', 'ORBl', 'ORBvl', 'RSPagl', 'RSPd', 'RSPv', 'SSp-bfd', 'SSp-ll',
        'SSp-m', 'SSp-n', 'SSp-ul', 'SSs', 'TEa', 'VISa', 'VISam', 'VISl', 'VISp', 'CP',
        'GPe', 'OT', 'SI', 'ZI', 'SNr'],
      data: []
    }
  },
  created () {
    this.getdata()
  },
  methods: {
    getdata () {
      var a, b, i, j
      /* for(int i=0; i<720; i++)
      {
        x = Math.floor(Math.random() * this.SomaRegion.length + 1) - 1
        this.data[i].value[0]=this.SomaRegion[x]
      } */
      for (i = 0; i <= 20; i++) {
        for (j = 0; j <= 36; j++) {
          a = this.SomaRegion[i]
          b = this.ArborLocation[j]
          var c = 7.5 + Math.round(Math.random() * 22.5)
          var d = parseFloat(Math.random().toFixed(2))
          this.data.push([a, b, c, d])
        }
      }
      console.log(this.data1)
      console.log(this.data)
    },
    _init() {
      this.legendArr = this.myChart.getOption().series
      this.legendArr.forEach((data) => {
        data.selected = true;
      })
      this.$root.charts.push(this.myChart)
      window.addEventListener('resize', function() {
        this.myChart.resize()
      }.bind(this))
    }
  },
  components: {
    'v-header': header,
    'v-filter': filter
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.querySelector('.scatterChart .main'));
    var itemStyle = {
      opacity: 0.8,
      shadowBlur: 10,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      shadowColor: 'rgba(0, 0, 0, 0.5)'
    };
    this.myChart.setOption({
      grid: {
        left: '10%',
        bottom: '8%',
        containLabel: true
      },
      tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (obj) {
          var value = obj.value;
          return 'Soma Region：' + value[0] + '<br>' + 'Arbor Location：' + value[1] + '<br>' + 'Arbor length：' + value[2] + '<br>' + 'Distal arbor：' + value[3] + '<br>';
        }
      },
      xAxis: {
        type: 'category',
        name: 'Soma Region',
        nameLocation: 'middle',
        nameGap: 50,
        nameTextStyle: { fontSize: 18, color: 'black' },
        data: this.SomaRegion,
        splitLine: {
          show: true,
          lineStyle: {
            color: 'gray',
            type: 'dashed'
          }
        },
        axisLabel: {
          interval: 0,
          rotate: 40
        },
        axisLine: {
          lineStyle: {
            color: 'gray'
          }
        }
      },
      yAxis: {
        type: 'category',
        name: 'Arbor Location',
        nameLocation: 'middle',
        nameGap: 60,
        nameTextStyle: { fontSize: 18, color: 'black' },
        axisLabel: {
          interval: 0
        },
        data: this.ArborLocation,
        axisLine: {
          lineStyle: {
            color: 'gray'
          }
        }
      },
      visualMap: {
        left: '90%',
        top: '10%',
        min: 0,
        max: 1,
        precision: 2,
        dimension: 3,
        calculable: true,
        text: ['Distal Arbor'],
        textGap: 20,
        textStyle: {
          color: 'black',
          fontSize: 9
        },
        inRange: {
          color: ['#8d2821', '#dc8b55', '#e8e9ea', '#96b6d6', '#5463cd'].reverse()
        }
      },
      series: [
        {
          type: 'scatter',
          data: this.data,
          symbolSize: function (val) {
            return val[2] / 1.1;
          }
          /*
          color: ['#8d2821', '#dc8b55', '#e8e9ea', '#96b6d6', '#5463cd']
            if (val[3] < 0.25 && val[3] >= 0) { return '#8d2821'; }
            if (val[3] < 0.5 && val[3] >= 0.25) { return '#dc8b55'; }
            if (val[3] < 0.75 && val[3] >= 0.5) { return '#96b6d6'; }
            if (val[3] <= 1 && val[3] >= 0.75) { return '#5463cd'; } */
        }
      ]
    });
    this._init()
  }
}
</script>
