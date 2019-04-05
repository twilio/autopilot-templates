var got = require('got');

exports.handler = function(context, event, callback) {
    
    // Takes the first message, creates the channel webhook
    console.log(event);
    
     //callback(null);
    let channelSid = event.channelSid;
    
    const client = context.getTwilioClient();
	const service = client.chat.services(context.TWILIO_CHAT_SERVICE_SID);
    
    // Pipe body to Autopilot
    let requestPayload = "user_id="+event.from+"&text="+event.text;

    got.post('https://channels.autopilot.twilio.com/v1/'+context.TWILIO_ACCOUNT_SID+'/'+context.TWILIO_AUTOPILOT_ASSISTANT_SID+'/custom/webchat', 
    { 
        headers: { 
            'content-type': 'application/x-www-form-urlencoded',
            'accept': 'application/json',
            'authorization' :  'Basic ' + new Buffer(context.TWILIO_ACCOUNT_SID+ ':' + context.AUTH_TOKEN).toString('base64')
        },
        body: requestPayload
    }).then(function(response) {
        
        // Pipe the Autopilot response to the chat channel
        let apResponse = JSON.parse(response.body);
        console.log(apResponse);
        console.log("send the message");
        let saysArray = apResponse.says;
        let saysProcessed = 0;
        
        saysArray.forEach(function(value){
            console.log(value.speech);
            service.channels(channelSid).messages.create({"body": value.speech, "from": "Autopilot"})
            .then((response) => {
                console.log("Reponse:"+response);
                // Set the Channel Webhook
                // TODO
                saysProcessed++;
                if(saysProcessed === saysArray.length) {
                    callback(null, {destimnation:"autopilot"});
                }
            }).catch(error => { 
                console.log(error); 
                callback(error); });
        });
        
    }).catch(function(error) {
        callback(error)
    });
  
};