exports.handler = function(context, event, callback) {
    let memory = JSON.parse(event.Memory);
    console.log("User Identifier: "+ event.UserIdentifier);
    console.log("Task: "+ event.CurrentTask);
    console.log("Step: "+ memory.auto_get_insurance_step);
    let message = "";
    let responseObject = {};
    let step = "";
    
    memory.hasOwnProperty("auto_get_insurance_step") ? step = memory.auto_get_insurance_step : step = "0";
    console.log("Auto Insurance Step: "+ step);
    
    
    // implement the task by step
    if (step == "0") {
        message = "Great, I can help you get your Auto Insurance. I'll need to ask you a couple of questions about the car to get started.";
        responseObject = {
            "actions": [{
                    "remember": {
                        "auto_get_insurance_step": "1"
                    }
                },{
                    "say": message
                }, {
                    "collect":{
                        "name":"get_insurance",
                        "questions":[{
                            "question":"What make is your car?",
                            "name":"car_make"
                        }, {
                            "question":"great, what model?",
                            "name":"car_model"
                        }, {
                            "question":"what year?",
                            "name":"car_year",
                            "type":"Twilio.NUMBER"
                        }, {
                            "question":"ok that's all I need. is nico@twilio.com the best email to send you the quote?",
                            "name":"email_yes",
                            "type":"Twilio.YES_NO"
                        }],
                        "on_complete":{
                            "redirect":{
                                "uri":"https://"+context.DOMAIN_NAME+"/insurance_auto_get_insurance",
                                "method":"POST"
                            }
                        }
                    }
                }]
        };
        callback(null, responseObject);
        
    } else {
        console.log("step 1")
        // Confirm Auto insurance  quote
        message = "Nico, we've sent your auto insurace quote for your 2007 Lamborghini Diablo to your email. Is there anything else I can help you with?";
        responseObject = {
            "actions": [{
                    "remember": {
                        "auto_get_insurance_step": "2"
                    }
                },{
                    "say": message
                },{
                    "listen": true
                }]
        };
        callback(null, responseObject);
    } 
};