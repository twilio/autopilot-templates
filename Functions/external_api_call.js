var got = require('got');

exports.handler = function(context, event, callback) {
    
    let memory = JSON.parse(event.Memory);
    console.log("User Identifier: "+ event.UserIdentifier);
    console.log("Task: "+ event.CurrentTask);
    console.log(event);
    

    got.get('https://icanhazdadjoke.com/', 
    { 
        headers: { 
            'accept': 'application/json'
        }
    }).then(function(response) {
        let apResponse = JSON.parse(response.body);
        console.log(apResponse);
        
        let message = apResponse.joke;
        let responseObject = {
            "actions": [
                {
                    "say": message
                }]
        };
        callback(null, responseObject);
    }).catch(function(error) {
        callback(error)
    });
};
