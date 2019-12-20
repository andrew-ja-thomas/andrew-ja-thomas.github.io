  tableau.extensions.initializeAsync().then(function () { 
    //code here:
    //define variables
const worksheets = tableau.extensions.dashboardContent.dashboard.worksheets;
var worksheet = worksheets.find(function (sheet) {
  return sheet.name === "Table";
});
const markSelection = tableau.TableauEventType.MarkSelectionChanged;
// fetch htmls
worksheet.addEventListener(markSelection, function (selectionEvent) {
// When the selection changes, reload the data
selectionEvent.getMarksAsync().then(
  function (marks) {
    const worksheetData = marks.data[0].data[0][3]._value;
    const all_data = marks;
    console.log(all_data);
    $("#content").html(worksheetData);
  })});
      //stop coding here
})


