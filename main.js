var http = require('http');
var querystring = require('querystring');

var hostUrl='http://alerts.ebensms.com/api/web2sms.php?';
var apiKey='key';

//Create data to encode in the url
var data = querystring.stringify({
      workingkey: yourUsernameValue,
      mobile: request.body.mobile,
      sender:request.body.sender,
      message:request.body.message,   
    });
    

//Create request options
var options = {
    host: hostUrl,
    //port: ,
    path: '',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data)
    }
};



http.post('/api/Sms/Send',function(request,response){
    
    //Invoke the api server
    var req = http.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log("body: " + chunk);
        });
    });
    
     // post the data
  req.write(data);
  req.end();
  
  

});





        