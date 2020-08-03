<!-- 柱状图 -->
<style lang="stylus" scoped>
.columnChart
  height 800px
  background url('../../assets/bg.jpg') no-repeat
  background-size 100% 100%
  color white
  .main
    width 100%
    height calc(100% - 100px)
    margin-top -15px
    margin-left 20px
    margin-right 50px
</style>

<template>
<div class="columnChart">
  <v-header :myChart="myChart"></v-header>
  <v-filter :myChart="myChart" v-if="myChart._dom"></v-filter>
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
      // color: this.$store.state.color,
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
    this.myChart = echarts.init(document.querySelector('.columnChart .main'));
    this.myChart.setOption({
      color: ['#EE82EE', '#82F5F5'],
      title: {
        text: '数量TOP5国家评分柱状图',
        textStyle: {
          color: 'white',
          fontSize: 20
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#fff'
          }
        }
      },
      legend: {
        data: ['平均评分', '有效数据'],
        textStyle: {
          color: '#fff'
        }
      },
      toolbox: {
        show: false
      },
      calculable: true,
      xAxis: [{
        name: '国家',
        type: 'category',
        axisLabel: {
          textStyle: {
            color: 'white'
          }
        },
        data: ['美国', '中国', '英国', '俄罗斯/前苏联', '法国'],
        axisPointer: {
          type: 'shadow'
        }
      }],
      yAxis: [
        {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: ['rgba(230, 230, 230, 0.2)']
            }
          },
          axisLabel: {
            textStyle: {
              color: 'white',
              fontSize: 14
            }
          },
          name: '平均评分',
          min: 0,
          max: 10,
          interval: 2,
          type: 'value'
        },
        {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: ['rgba(230, 230, 230, 0.2)']
            }
          },
          axisLabel: {
            textStyle: {
              color: 'white',
              fontSize: 14
            }
          },
          name: '有效数据',
          min: 0,
          max: 300,
          interval: 60,
          type: 'value',
          axisLabel: {
            formatter: '{value} 部',
            color: 'rgba(255, 255, 255, 0.69)'
          }
        }
      ],
      series: [
        {
          name: '平均评分',
          stack: 'stack1',
          type: 'bar',
          data: [7.3, 6.4, 7.5, 7.6, 7.4],
          barWidth: 30,
          barGap: 0,
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(22, 220, 220, 0.8)'
          },
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(130,245,245,1)'
              },
              {
                offset: 1,
                color: 'rgba(175,238,238,0)'
              }
              ]),
              // 柱状图圆角
              barBorderRadius: [30, 30, 0, 0]
            }
          }
        },
        {
          name: '有效数据',
          stack: 'stack2',
          type: 'bar',
          barWidth: 30,
          smooth: true,
          showSymbol: true,
          symbolSize: 12,
          yAxisIndex: 1,
          data: [255, 231, 127, 61, 102],
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(22, 220, 220, 0.8)'
          },
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(238,130,238,1)'
              },
              {
                offset: 1,
                color: 'rgba(238,130,238,0)'
              }
              ]),
              barBorderRadius: [30, 30, 0, 0]
            }
          }
        }
      ]
    });
    this._init()
  }
}
</script>
