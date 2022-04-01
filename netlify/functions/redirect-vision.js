const { jQuery } = require("jquery");
var CV_URL = 'https://vision.googleapis.com/v1/images:annotate?key=' + 'AIzaSyBKBL1YGMY0ZMv_P6mG_01kUvTYUDSUvyE';
exports.handler = async function(event, context) {
    var request = {
    requests: [{
      image: {
        content: event.body
      },
      features: [{
        //type: type,
        //maxResults: 200
      }]
    }]
  };
 const result =  await $.post({
    url: CV_URL,
    data: JSON.stringify(request),
    contentType: 'application/json'
  });
  
return {
    statusCode: 200,
    headers: {
            "Access-Control-Allow-Origin": "*", // Allow from anywhere 
    },
    body: JSON.stringify({ message: "Hello World" })
  };
}
