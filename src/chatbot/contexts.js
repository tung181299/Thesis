const {
    ContextsClient
} = require('@google-cloud/dialogflow').v2;

// Instantiates a client
const dialogflowClient = new ContextsClient();

async function callListContexts() {
    // Construct request
    const request = {
        parent,
    };

    // Run request
    const iterable = await dialogflowClient.listContextsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
}

callListContexts();