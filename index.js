function doGet(e) {
    var output = ContentService.createTextOutput();
    output.setMimeType(ContentService.MimeType.JSON);
    output.setContent('Your response content');
    var result = output.execute();
    result.headers = { 'Access-Control-Allow-Origin': '*' };
    return result;
  }