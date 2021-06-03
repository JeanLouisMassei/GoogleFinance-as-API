function doGet(e) {

  let sheet = SpreadsheetApp.getActive().getSheetByName('Datas');
  
  sheet.getRange(2, 1).setValue(e.parameter.ticker);
  sheet.getRange(1, 1).setValue(e.parameter.startDate);

  let lastRow = sheet.getRange(1, 2).getValue();
  let datas = sheet.getRange("B4:F" + lastRow).getValues();
  datas.push(sheet.getRange("B2:F2").getValues()[0]);

  return ContentService.createTextOutput(JSON.stringify(datas));
} 
