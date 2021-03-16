export default {
  title: {
    text: "年客户增长",
    left: "5%"
  },
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['2018 ', 7843.3, 8985.8, 7493.7],
      ['2019', 8983.1, 7873.4, 9855.1],
      ['2020', 8586.4, 9265.2, 9182.5],
    ]
  },
  xAxis: {
    type: 'category',
    splitLine: {
      show: false
    }
  },
  yAxis: {
    splitLine: {
      show: false
    }
  },
  series: [
    { type: 'bar', barWidth: 10, barGap:'100%', },
    { type: 'bar', barWidth: 10, barGap:'100%', },
    { type: 'bar', barWidth: 10, barGap:'100%', }
  ]
}