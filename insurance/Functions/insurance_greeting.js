exports.handler = function(context, event, callback) {
    let memory = JSON.parse(event.Memory);
    console.log("User Identifier: "+ event.UserIdentifier);
    console.log("Task: "+ event.CurrentTask);
    
    let message = "Welcome to the Conversational Insurance Company. I'm your virtual assistant. How can I help you today?";
    let responseObject = {
        "actions": [
            {
                "remember": {
                    "auto_get_insurance_step": "0",
                    "auto_file_claim_step": "0",
                    "auto_check_claim_status_step": "0",
                    "auto_talk_to_representative_step": "0",
                    "auto_nps_survey": "0",
					"task_router_workflow_sid": "XXXXXXXXXX"
                }
            },
            {
                "say": message
            },{
                "listen":true
            }]
    };
    callback(null, responseObject);
};