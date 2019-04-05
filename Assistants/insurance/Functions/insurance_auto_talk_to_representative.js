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
	
	message = "I'll connect you with an agent now. Please hold on";
	responseObject = {
		"actions": [
			{
				"say": message
			},{
                "remember": {
                    "escalation": "talk_to_agent"
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