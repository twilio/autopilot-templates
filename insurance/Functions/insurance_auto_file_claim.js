exports.handler = function(context, event, callback) {
    let memory = JSON.parse(event.Memory);
    console.log("User Identifier: "+ event.UserIdentifier);
    console.log("Task: "+ event.CurrentTask);
    console.log("Step: "+ memory.auto_file_claim_step);
    let message = "";
    let responseObject = {};
    let step = "";
    
    memory.hasOwnProperty("auto_file_claim_step") ? step = memory.auto_file_claim_step : step = "0";
    console.log("Auto Insurance Step: "+ step);
	
	message = "I will put you in touch with a claims specialist as soon as possible, please hold on";
	responseObject = {
		"actions": [
			{
				"say": message
			},{
                "remember": {
                    "escalation": "file_claim"
                }
			},{
				"handoff": {
					"channel": "voice",
					"uri": "taskrouter://"+memory.task_router_workflow_sid
			}
		}
	]};
	callback(null, responseObject);
};