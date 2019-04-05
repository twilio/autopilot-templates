exports.handler = function(context, event, callback) {
    let memory = JSON.parse(event.Memory);
    console.log("User Identifier: "+ event.UserIdentifier);
    console.log("Task: "+ event.CurrentTask);
    console.log("Step: "+ memory.auto_nps_survey);
    let message = "";
    let responseObject = {};
    let step = "";
    
    memory.hasOwnProperty("auto_nps_survey") ? step = memory.auto_nps_survey : step = "0";
    console.log("Auto Insurance Step: "+ step);
    
    
    // implement the task by step
    if (step == "0") {
        responseObject = {
            "actions": [
                {
                    "remember": {
                        "auto_nps_survey": "1"
                    }
                },
                {
                    "say": "Before you leave, we would love to hear your feedback."
                },
                {
                    "collect": {
                        "name": "take_survey",
                        "questions": [
                            {
                                "question": "Would you like to take a one minute survey?",
                                "name": "survey",
                                "type": "Twilio.YES_NO"
                            }],
                            "on_complete": {
                                "redirect": {
                                    "method": "POST",
                                    "uri": "https://"+context.DOMAIN_NAME+"/insurance_auto_nps_survey"
                                }
                            }
                    }
                }]
        };
        callback(null, responseObject);
        
    } else if  (step == "1") {
        console.log("step 1")
        // Confirm Auto insurance  quote
        responseObject = {
            "actions": [
                {
                    "say": "Great!"
                },
                {
                    "remember": {
                        "took_survey": "yes",
                        "auto_nps_survey":"2"
                    }
                },
                {
                    "collect": {
                        "name": "nps_survey",
                        "questions": [
                            {
                                "question": "From 0 to 10, how likely would you recommend the Conversational Insurance Company Virtual Assistant to a friend?",
                                "name": "nps",
                                "type": "Twilio.NUMBER",
                                "validate": {
                                    "on_failure": {
                                        "messages": [
                                            {
                                                "say": "That didn't sound like a number from zero to ten. Please say that again."
                                                
                                            },
                                            {
                                                "say": "I still didn't understand. Please say a number from 0 to 10."
                                            }],
                                            "repeat_question": true
                                    },
                                    "on_success": {
                                        "say": "Great, thank you. We appreciate your feedback."
                                    },
                                    "max_attempts": {
                                        "redirect": "task://having_trouble",
                                        "num_attempts": 3
                                    }
                                }
                            },
                            {
                                "question": "What worked well for you and what can we do better?",
                                "name": "feedback"
                            },
                            {
                                "question": "Where you able to do what you needed to do?",
                                "name": "job_done",
                                "type": "Twilio.YES_NO"
                            }],
                            "on_complete": {
                                "redirect": {
                                    "method": "POST",
                                    "uri": "https://"+context.DOMAIN_NAME+"/insurance_auto_nps_survey"
                                }
                            }
                    }
                }]
        };
        callback(null, responseObject);
    }  else {
        // Confirm Auto insurance  quote
        responseObject = {
            "actions": [
                {
                    "say": "Thanks for your feedback. Call or text me when you need help. Bye!"
                }]
        };
        callback(null, responseObject);
    } 
};