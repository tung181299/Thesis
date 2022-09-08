'use strict';

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

async function main(projectId, intentId, displayName) {
    // [START dialogflow_update_intent_sample]
    const {
        IntentsClient
    } = require('@google-cloud/dialogflow');

    const intentClient = new IntentsClient();

    const agentPath = intentClient.projectAgentPath(projectId);
    const intentPath = agentPath + '/intents/' + intentId;

    const intent = await intentClient.getIntent({
        name: intentPath
    });
    intent[0].displayName = displayName;
    const updateMask = {
        paths: ['display_name'],
    };

    const updateIntentRequest = {
        intent: intent[0],
        updateMask: updateMask,
        languageCode: 'en',
    };

    //Send the request for update the intent.
    const result = await intentClient.updateIntent(updateIntentRequest);
    console.log(result);
    // [END dialogflow_update_intent_sample]
}

process.on('unhandledRejection', err => {
    console.error(err.message);
    process.exitCode = 1;
});
main(...process.argv.slice(2));