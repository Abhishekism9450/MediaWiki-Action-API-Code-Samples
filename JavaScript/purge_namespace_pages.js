let URL = "https://en.wikipedia.org/w/api.php"; 

const params = {
    action: "purge",
    format: "json",
    generator:"allpages",
    gapnamespace:"0",
    gaplimit:"10"
}

URL = URL + "?origin=*";
Object.keys(params).forEach(key => URL = URL + "&" + key + "=" + params[key]);
var fetch = require("node-fetch");

fetch(URL,{method:'POST',body:params})
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(error=>console.log(error))