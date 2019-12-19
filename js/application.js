  tableau.extensions.initializeAsync().then(function () { 

    //code here:

    tableau.extensions.dashboardContent.dashboard.worksheets.find(w => w.name === "test").getSelectedMarksAsync().then(function (marks) {
  
      const worksheetData = marks.data[0].data[0][1]._value;
      console.log(worksheetData);
      $("#content").html(worksheetData)
    });

  //stop coding here
})
