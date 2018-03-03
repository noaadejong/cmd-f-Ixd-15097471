//Dit is een Pie chart die de hoeveelheid voedsel op voorraad zal aangeven.

anychart.onDocumentReady(function() {

  // set the data
  var data = [
      {x: "Fish", value: 11000000},
      {x: "Meat", value: 11892931},
      {x: "Vegtables", value: 12932248},
      {x: "Soup", value: 20000000},
      {x: "Desert", value: 11540013},
      {x: "Bread", value: 20000000},
      {x: "yoghurt", value: 11009073}
  ];


  // create the chart
  var chart = anychart.pie();

  // set the chart title
  chart.title("Overview foodlist");

  // add the data
  chart.data(data);

  // display the chart in the container
  chart.container('container');
  chart.draw();

  // set legend position
  chart.legend().position("right");
  // set items layout
  chart.legend().itemsLayout("vertical");
});
