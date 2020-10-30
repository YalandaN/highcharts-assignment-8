
Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Strawberries','Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Marc and Shawn\'s house'
      }
    },
    series: [{
      name: 'Marc',
      data: [6, 1, 0, 4]
    }, {
      name: 'Shawn',
      data: [6, 5, 7, 3]
    }]
  });
