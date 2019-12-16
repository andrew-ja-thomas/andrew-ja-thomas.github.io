$(document).ready(function () {
    function test(){
      var test_var = "<p class='green'>test complete</p>";
      return(test_var);
    }
      $("#content").html(test());
  })


/*
'use strict';
  
(function () {
   $(document).ready(function () {
      // Initialises Tableau Data Extension
      tableau.extensions.initializeAsync().then(function () { console.log('Error while Initializing: ' + err.toString()); });
   });
 
   // This javascript function gets data from our worksheet and draws the Doughnut.
   function drawChartJS() {
    //wil return html values
    tableau.extensions.dashboardContent.dashboard.worksheets.find(w => w.name === "Sale Map").getDataSourcesAsync().then(datasources =>
      {dataSource = datasources.find(datasource => datasource.name === "Sample - Superstore");
        return dataSource.getUnderlyingDataAsync();
       }).then(dataTable => {
          let field = dataTable.columns.find(column => column.fieldName === "Sub-Category");
          let list = [];
          for (let row of dataTable.data) {
              list.push(row[field.index].value);
          }
          let values = list.filter((el, i, arr) => arr.indexOf(el) === i);
          console.log(values)
      });
   }
})();




  
   $(document).ready(function () {
    tableau.extensions.dashboardContent.dashboard.worksheets.find(w => w.name === "Sale Map").getDataSourcesAsync().then(datasources =>
      {dataSource = datasources.find(datasource => datasource.name === "Sample - Superstore");
        return dataSource.getUnderlyingDataAsync();
       }).then(dataTable => {
          let field = dataTable.columns.find(column => column.fieldName === "Sub-Category");
          let list = [];
          for (let row of dataTable.data) {
              list.push(row[field.index].value);
          }
          let values = list.filter((el, i, arr) => arr.indexOf(el) === i);
          console.log(values)
      });      
   })
   

  'use strict';

       // This javascript function gets data from our worksheet and draws the Doughnut.
       function drawChartJS() {

        tableau.extensions.dashboardContent.dashboard.worksheets.find(w => w.name === "Sale Map").getDataSourcesAsync().then(datasources =>
          {dataSource = datasources.find(datasource => datasource.name === "Sample - Superstore");
            return dataSource.getUnderlyingDataAsync();
           }).then(dataTable => {
              let field = dataTable.columns.find(column => column.fieldName === "Sub-Category");
              let list = [];
              for (let row of dataTable.data) {
                  list.push(row[field.index].value);
              }
              let values = list.filter((el, i, arr) => arr.indexOf(el) === i);
              console.log(values)
          });      
          };
          function teest() {console.log('test')};

  (function () {
     $(document).ready(function () {
      teest();
        // Initialises Tableau Data Extension
        tableau.extensions.initializeAsync().then(function () {
        // Once we initialize we call teh drawChartJS function.
        drawChartJS();
        console.log("test")
     });
     });
   

     })


.find(w => w.name === "Sale Map").getDataSourcesAsync().then(datasources =>
      {dataSource = datasources.find(datasource => datasource.name === "Sample - Superstore");
        return dataSource.getUnderlyingDataAsync();
       }).then(dataTable => {
          let field = dataTable.columns.find(column => column.fieldName === "Sub-Category");
          let list = [];
          for (let row of dataTable.data) {
              list.push(row[field.index].value);
          }
          let values = list.filter((el, i, arr) => arr.indexOf(el) === i);
          console.log(values)
      });      


*/

