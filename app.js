fs = require('fs');
os = require('os');

let user = os.userInfo();
console.log(user);

fs.appendFile("hmm.txt","hmm\n", function(err){
	if(err){
		console.log("cant write file");
	}
});