
const client = new KeenAnalysis({
    projectId: '5c87b64ec9e77c0001cf5b6e',
    readKey: 'FB952962910C97DE3E1C6A25EB2FC6B22FDB1ACA9D572948EA18227287BC4E12'
  });
  
  const chart = new KeenDataviz({
    container: '#chart',
    type: 'line',
    title: 'Mobile purchases',
    stacking: 'normal',
    legend: {
        position: 'bottom',
    },
    labelMapping: {
        apps: 'Apps',
      books: 'Books',
      games: 'Games',
      sounds: 'Sounds',
    },
    renderOnVisible: true,
    palette: 'modern'
  });
  
  client
    .query({
          analysis_type: 'count',
      event_collection: 'mobile_purchases',
      timeframe: {
        start: '2019-03-20T00:00:00.000-00:00',
        end: '2019-03-26T00:00:00.000-00:00'
      },
      group_by: [
          'product.name'
      ],
      interval: 'daily'
    })
    .then(function(res) {
      // Handle the result
      chart.render(res);
    })
    .catch(function(err) {
      // Handle the error
      chart
        .message(err.message);
    });