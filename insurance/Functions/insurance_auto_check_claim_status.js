exports.handler = function(context, event, callback) {
    let memory = JSON.parse(event.Memory);
    console.log("User Identifier: "+ event.UserIdentifier);
    console.log("Task: "+ event.CurrentTask);
	let claim_number = "2 3 4 2 3 7";
	let car_make = "Lamborghini";
	let car_model = "Diablp";
	let car_year = "2007";
    
    let message = "You have one active claim number "+claim_number+" for your "+car_year+" "+car_make+" "+car_model+". It has been accepted and is pending payment. Is there anything else I can help you with? ";
    let responseObject = {
        "actions": [
            {
                "say": message
            },{
                "listen":true
            }]
    };
    callback(null, responseObject);
};