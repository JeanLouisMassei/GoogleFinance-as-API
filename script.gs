let datas = SpreadsheetApp.getActive().getSheetByName('Datas');

function getRow(row) {
  return [
    datas.getRange(row, 2).getValue(), // open
    datas.getRange(row, 3).getValue(), // high
    datas.getRange(row, 4).getValue(), // low
    datas.getRange(row, 5).getValue(), // close or current
    datas.getRange(row, 6).getValue(), // volume
  ];
}

function doGet(e) {
  
  datas.getRange(2, 1).setValue(e.parameter.ticker);
  datas.getRange(1, 1).setValue(e.parameter.startDate);

  let array = new Array();

  array.push(getRow(2)); // today

  let lastRow = datas.getRange(1, 2).getValue() + 3;

  for (let row=lastRow; row>3; row--)
    array.push(getRow(row));
   
  return ContentService.createTextOutput(JSON.stringify(array));
  
} 
