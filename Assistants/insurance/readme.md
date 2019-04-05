Twilio Autopilot Insurance Template
===========================
Templates for creating Twilio Autopilot Assistants

A command line interface for managing Twilio Autopilot. After installing you'll be able to:

* Greet customers calling or texting in
* Get an auto insurance quote
* File a claim transfering to live agent on Flex
* Get claim status
* Talk to an human agent on Flex
* Take NPS survey

## Installation
First, make sure you have the Autopilot ClI installed:

  `sudo npm install -g @twilio/autopilot-cli`

Then create an Assistant 

  `ta create`

Select `Conversational Insurance Company` template

At this point, you should have the Assistant created in your account in the [Autopilot sectiion](https://www.twilio.com/console/autopilot/list). Lastly, you need to deploy the functions and connect them to your Autopilot tasks.

#### Deploy the functions

1. Go to the Conversational Insurance Company templates functions directory
2. On a different tab, go to [Manage Functions](https://www.twilio.com/console/runtime/functions/manage).
3. Create a function for every funtion in the template.

#### Configure the Autopilot Tasks to point to the  functions

1. Go to the [Autopilot sectiion](https://www.twilio.com/console/autopilot/list)
2. Click on the InsuranceCo assistant and click on tasks
3. For each task, click 'program' and then select 'Actions URL' on the left.
4. Copy the function URL to the task Action URL field
5. Update the 'insurance_greeting.js' function to include the Flex Task Router workflow Sid, so that this Assistant can handpff to Flex
