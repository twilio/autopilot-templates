exports.handler = function(context, event, callback) {
    
    let memory = JSON.parse(event.Memory);
    console.log("User Identifier: "+ event.UserIdentifier);
    console.log("Task: "+ event.CurrentTask);
    console.log(event);
    let message = "Hello from the Function!";
    let responseObject = {
        "actions": [
            {
                "say": message
            }]
    };
    callback(null, responseObject);
};
