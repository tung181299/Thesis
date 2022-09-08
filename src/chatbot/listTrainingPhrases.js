'use strict';

async function main(projectId, intentId) {
  // [START dialogflow_list_training_phrases]
  const {IntentsClient} = require('@google-cloud/dialogflow');

  // Create the intents client
  const intentClient = new IntentsClient();

  // Specify working intent
  const intentName = `projects/${projectId}/agent/intents/${intentId}`;

  // Compose the get-intent request
  const getIntentRequest = {
    name: intentName,
    intentView: 'INTENT_VIEW_FULL',
  };

  const intent = await intentClient.getIntent(getIntentRequest);

  console.log(intent[0].trainingPhrases);
  // [END dialogflow_list_training_phrases]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));