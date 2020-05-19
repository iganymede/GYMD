let body= $response.body;
var obj = JSON.parse(body);
if (body.indexOf("/api/mem") !=-1) {
  obj.premiumEnd = "4096019658000";
  obj.premium = "1";
  }
if (body.indexOf("/api/inbox") !=-1) {
  obj.premiumEnd = "4096019658000";
  obj.premium = "1";
  }
$done({body: JSON.stringify(obj)});