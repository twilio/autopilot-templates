var got = require('got');

exports.handler = function(context, event, callback) {
    
    // Takes the first message, creates the channel webhook
    console.log(event);
    
     //
    let channelSid = event.channelSid;
    
    const client = context.getTwilioClient();
	const service = client.chat.services(context.TWILIO_CHAT_SERVICE_SID);
    
    // Pipe body to Autopilot
    let requestPayload = "user_id="+event.from+"&text="+event.text;

    got.post('https://channels.autopilot.twilio.com/v1/'+context.ACCOUNT_SID+'/'+context.TWILIO_AUTOPILOT_ASSISTANT_SID+'/custom/webchat', 
    { 
        headers: { 
            'content-type': 'application/x-www-form-urlencoded',
            'accept': 'application/json',
            'authorization' :  'Basic ' + new Buffer(context.ACCOUNT_SID+ ':' + context.AUTH_TOKEN).toString('base64')
        },
        body: requestPayload
    }).then(function(response) {
        
        // Pipe the Autopilot response to the chat channel
        let apResponse = JSON.parse(response.body);
        console.log(apResponse);
        console.log("send the message");
        let saysArray = apResponse.says;
        let saysProcessed = 0;
        let responseMessage = "";
        
        saysArray.forEach(function(value){
            responseMessage += " "+ value.speech;
        });
        service.channels(channelSid).messages.create({"body": responseMessage, "from": "Autopilot"})
            .then((response) => {
                console.log("Reponse:"+response);
                callback(null, {destination:"autopilot"});
            }).catch(error => { 
                console.log(error); 
                callback(error); });
        
    }).catch(function(error) {
        callback(error)
    });
  
};
