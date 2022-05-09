var https = require("follow-redirects").https;
var fs = require("fs");

var options = {
  method: "POST",
  hostname: "send.api.mailtrap.io",
  path: "/api/v1/sg_send",
  headers: {
    Authorization: "Basic YXBpOjI3ZDM3YjIyZWJmNTc3YTYzNmIxZTVmOGVmM2Q2NTU1",
    "Content-Type": "application/json",
  },
  maxRedirects: 20,
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData =
  '{"personalizations":[{"from":{"email":"from@netlify.app","name":"From Name"},"to":[{"email":"gabyngoune@yahoo.fr"}],"subject":"You are awesome!"}],"headers":{"X-MT-Category":"Integration Test"},"content":[{"type":"text/plain","value":"Congrats for sending test email with Mailtrap!"}]}';
req.write(postData);

req.end();
