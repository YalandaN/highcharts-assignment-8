
Highcharts.chart('container', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Top Crime Trends in the U.S. (2018-2019)'
    },
    subtitle: {
      text: 'Source: ucr.fbi.gov'
    },

    xAxis: {
      categories:[
      'Violent Crime',
      'Property Crime',
      'Burglary',
      'Larceny-Theft'
    ]
  },
    yAxis: {
      title: {
        text:'Number of Reported Cases (millions)'
      }
    },
    series: [{
      name: '2018',
      data: [1.14, 6.62, 1.1, 4.78]
    }, {
      name: '2019',
      data: [1.13, 6.35, 1, 4.65]
    }]
  });

  Highcharts.chart('container2', {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Burglary Count by Location Type (2010-2019)'
      },
      subtitle: {
        text: 'Source: crime-data-explorer.fr.cloud.gov'
      },

      yAxis: {
        title: {
            text: 'Number of Burglary'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2019'
        }
      },
      plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
          }
    },
      series: [{
        name: 'Residence Day',
        data: [740856, 774204, 758585, 692172, 616227, 540803, 500135, 433184, 371502, 316321]
      }, {
        name: 'Residence Night',
        data: [400234, 397831, 392270, 362653, 324580, 300398, 289169, 262754, 233689, 213048]
      },{
        name: 'Residence Unknown',
        data: [291646, 292728, 276241, 253845, 222721, 196776, 183601, 185231, 171340, 168643]
      }
    ]
    });
