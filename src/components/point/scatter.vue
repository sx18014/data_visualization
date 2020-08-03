<!-- 关系图 -->
<style lang="stylus" scoped>
.scatterChart
  height 1000px
  width 800px
  .main
    width 100%
    height 100%
    margin-top -60px
    margin-left -50px
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
      myChart: {}
    }
  },
  methods: {
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
    var data = [
      ['LGd', 'LGd', 7.5, 0.75],
      ['RSPv', 'RSPv', 28, 0.25],
      ['SSp-bfd', 'SSp-bfd', 25, 0.4],
      ['SSp-ll', 'SSp-ll', 25, 0.3],
      ['SSp-m', 'SSp-m', 22, 0.45],
      ['SSp-n', 'SSp-n', 22, 0.3],
      ['SSp-ul', 'SSp-ul', 22, 0.35],
      ['SSs', 'SSs', 22, 0.3]
    ];
    var itemStyle = {
      opacity: 0.8,
      shadowBlur: 10,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      shadowColor: 'rgba(0, 0, 0, 0.5)'
    };
    var SomaRegion = ['LGd', 'LP', 'MG', 'RE', 'VM', 'VPL', 'VPM', 'CLA', 'MOp', 'MOs',
      'RSPv', 'SSp-bfd', 'SSp-ll', 'SSp-m', 'SSp-n', 'SSp-ul', 'SSs', 'VISp', 'CP', 'OT'];
    var ArborLocation = ['LGd', 'LP', 'MG', 'RE', 'SMT', 'VM', 'VPL', 'VPM', 'Ald', 'AUDp', 'AUDv',
      'CLA', 'MOp', 'MOs', 'ORBl', 'ORBvl', 'RSPagl', 'RSPd', 'RSPv', 'SSp-bfd', 'SSp-ll',
      'SSp-m', 'SSp-n', 'SSp-ul', 'SSs', 'TEa', 'VISa', 'VISam', 'VISl', 'VISp', 'CP',
      'GPe', 'OT', 'SI', 'ZI', 'SNr'];
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
        data: SomaRegion,
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
        axisLabel: {
          interval: 0
        },
        data: ArborLocation,
        axisLine: {
          lineStyle: {
            color: 'gray'
          }
        }
      },
      /* visualMap: [
        {
          left: '90%',
          top: '10%',
          dimension: 0.5,
          min: 6.5,
          max: 300,
          itemWidth: 10,
          itemHeight: 100,
          calculable: true,
          precision: 0.1,
          text: ['Arbor Length'],
          textGap: 30,
          textStyle: {
            color: 'black'
          },
          inRange: {
            symbolSize: [5, 65]
          },
          outOfRange: {
            symbolSize: [5, 65],
            color: ['rgba(123,104,238,0.2)']
          },
          controller: {
            inRange: {
              color: ['rgba(123,104,238,0.8)']
            },
            outOfRange: {
              color: ['#444']
            }
          }
        }
      ], */
      visualMap: {
        left: '90%',
        top: '10%',
        min: 0,
        max: 1,
        calculable: true,
        color: ['#8d2821', '#dc8b55', '#e8e9ea', '#96b6d6', '#5463cd'],
        textStyle: {
          color: '#fff'
        }
      },
      series: [
        {
          type: 'scatter',
          data: data,
          symbolSize: function (val) {
            return val[2];
          }
        }
      ]
    });
    this._init()
  }
}
</script>
