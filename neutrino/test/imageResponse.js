export const imageResponse = {
  responseId: 'cbcd6179-7899-4144-ade8-a3e218e8b011',
  queryResult: {
    fulfillmentMessages: [
      {
        platform: 'PLATFORM_UNSPECIFIED',
        image: { messages: [] },
        message: 'image',
      },
    ],
    outputContexts: [
      {
        name:
          'projects/dhcs-demo-chat/agent/sessions/dhcs-demo-chat-session/contexts/waiting-looking-for-support',
        lifespanCount: 2,
        parameters: null,
      },
    ],
    queryText: 'yourFunctionHandler',
    speechRecognitionConfidence: 0,
    action: 'input.image',
    parameters: {
      fields: {},
    },
    allRequiredParamsPresent: true,
    fulfillmentText:
      'Hello I’m the HHS Navigator bot. I can help you find frequently asked questions, program information, and other services provided by the California Health and Human Services Agency and its departments. How can we help you?',
    webhookSource: '',
    webhookPayload: null,
    intent: {
      inputContextNames: [],
      events: [],
      trainingPhrases: [],
      outputContexts: [],
      parameters: [],
      messages: [],
      defaultResponsePlatforms: [],
      followupIntentInfo: [],
      name:
        'projects/dhcs-demo-chat/agent/intents/5625c545-167f-4a03-99f1-1decea21ce5a',
      displayName: 'image',
      priority: 0,
      isFallback: false,
      webhookState: 'WEBHOOK_STATE_UNSPECIFIED',
      action: '',
      resetContexts: false,
      rootFollowupIntentName: '',
      parentFollowupIntentName: '',
      mlDisabled: false,
    },
    intentDetectionConfidence: 1,
    diagnosticInfo: {
      fields: {
        webhook_latency_ms: {
          numberValue: 155,
          kind: 'numberValue',
        },
      },
    },
    languageCode: 'en-us',
  },
  webhookStatus: {
    details: [],
    code: 0,
    message: 'Webhook execution successful',
  },
}
