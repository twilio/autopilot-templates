export default [
    {
        name: 'Collect',
        docUrl: 'https://www.twilio.com/docs/autopilot/actions/collect',
        additionalDoc: {
            text: 'Field types',
            url: 'https://www.twilio.com/docs/autopilot/built-in-field-types'
        },
        templates: [{
            name: 'Collect Yes No Question',
            description: 'Yes / No question',
            example : require('./collect/collect_yes_no_question')
        }, {
            name: 'Collect multi-question',
            description: 'Multiple questions',
            example : require('./collect/collect_multi_question')
        }, {
            name: 'Collect single question with validate',
            description: 'Ask and validate answer',
            example: require('./collect/collect_single_question_validate')
        }
        ]
    },
    {
        name: 'Handoff',
        docUrl: 'https://www.twilio.com/doc/autopilot/actions/hand-off',
        templates: [{
            name: 'Handoff to Voice Task Router Workflow',
            description: 'Pass to Voice Task Router Workflow',
            example: require('./handoff/handoff_voice_task_router')
        }, {
            name: 'Handoff to Voice Task Router Workflow with all parameters',
            description: 'Pass to Voice Task Router Workflow with all parameters',
            example: require('./handoff/handoff_voice_task_router_all_parameters')
        }, {
            name: 'Handoff to Voice TwiML URL',
            description: 'Pass to Voice TwiML URL',
            example: require('./handoff/handoff_voice_twiml_url')
        }, {
            name: 'Handoff to Voice TwiML URL with status callback',
            description: 'Pass to Voice TwiML URL with status callback',
            example: require('./handoff/handoff_voice_twiml_url_status_callback')
        }
        ]
    },
    {
        name: 'Listen',
        docUrl: 'https://www.twilio.com/docs/autopilot/actions/listen',
        templates: [{
            name: 'Listen everything',
            description: 'Listen and redirect to any task',
            example: require('./listen/listen_everything')
        }, {
            name: 'Listen selective',
            description: 'Listen selectively and redirect to subset of tasks',
            example: require('./listen/listen_selective')
        }
        ]
    },
    {
        name: 'Redirect',
        docUrl: 'https://www.twilio.com/docs/autopilot/actions/redirect',
        templates: [{
            name: 'Redirect to a task',
            description: 'Redirect to a task',
            example: require('./redirect/redirect_to_task')
        }, {
            name: 'Redirect to a URL',
            description: 'Fetch JSON from a URL',
            example: require('./redirect/redirect_to_url')
        }
        ]
    },
    {
        name: 'Remember',
        docUrl: 'https://www.twilio.com/docs/autopilot/actions/remember',
        templates: [{
            name: 'Simple Remember',
            description: 'Save any answer',
            example: require('./remember/remember_completion_status')
        }, {
            name: 'Remember completion status',
            description: 'Save completed steps',
            example: require('./remember/remember_user_first_name')
        }
        ]
    },
    {
        name: 'Say',
        docUrl: 'https://www.twilio.com/docs/autopilot/actions/say',
        templates: [{
            name: 'Didn\'t understand',
            description: 'Fallback – Didn\'t understand',
            example: require('./say/say_didnt_understand')
        }, {
            name: 'Goodbye',
            description: 'Goodbye',
            example: require('./say/say_goodbye')
        }, {
            name: 'Greeting',
            description: 'Hello',
            example: require('./say/say_greeting')
        }, {
            name: 'Task Question',
            description: 'Ask users what they want do',
            example: require('./say/say_question')
        }, {
            name: 'Switch Task',
            description: 'Switch task',
            example: require('./say/say_task_switch')
        }
        ]
    },
    {
        name: 'Show',
        docUrl: 'https://www.twilio.com/docs/autopilot/actions/show',
        templates: [{
            name: 'Show Image',
            description: 'Display an image',
            example: require('./show/show_image')
        }, {
            name: 'Show Image and Text',
            description: 'Display an image and text',
            example: require('./show/show_image_and_text')
        }, {
            name: 'Show Text',
            description: 'Display text',
            example: require('./show/show_text')
        }, {
            name: 'Show Text and Say',
            description: 'Display text and speak',
            example: require('./show/show_text_and_say')
        }
        ]
    }
]
