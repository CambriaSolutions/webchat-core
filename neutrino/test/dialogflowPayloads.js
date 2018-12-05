const textPayload = {
  responseId: '3efea8b8-74ae-46ed-8556-c195c52d2f79',
  queryResult: {
    fulfillmentMessages: [
      {
        platform: 'PLATFORM_UNSPECIFIED',
        text: { text: ['Sorry, could you say that again?'] },
        message: 'text',
      },
    ],
    outputContexts: [],
    queryText: 'Welcome',
    speechRecognitionConfidence: 0,
    action: 'input.unknown',
    parameters: { fields: {} },
    allRequiredParamsPresent: true,
    fulfillmentText: 'Can you say that again?',
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
        'projects/webchat-core/agent/intents/ad2bbf5d-56a2-4931-9d7e-baa5509d692a',
      displayName: 'Default Fallback Intent',
      priority: 0,
      isFallback: true,
      webhookState: 'WEBHOOK_STATE_UNSPECIFIED',
      action: '',
      resetContexts: false,
      rootFollowupIntentName: '',
      parentFollowupIntentName: '',
      mlDisabled: false,
    },
    intentDetectionConfidence: 1,
    diagnosticInfo: null,
    languageCode: 'en-us',
  },
  webhookStatus: null,
}

const cardPayload = {
  responseId: 'd59dad4c-707e-464c-9daa-27f0ecf34df0',
  queryResult: {
    fulfillmentMessages: [
      {
        platform: 'PLATFORM_UNSPECIFIED',
        card: {
          buttons: [
            {
              text: 'Temperature Wikipedia Page',
              postback: 'https://en.wikipedia.org/wiki/Temperature',
            },
          ],
          title: 'Vibrating molecules',
          subtitle:
            'Did you know that temperature is really just a measure of how fast molecules are vibrating around?! 😱',
          imageUri:
            'https://upload.wikimedia.org/wikipedia/commons/2/23/Thermally_Agitated_Molecule.gif',
        },
        message: 'card',
      },
    ],
    outputContexts: [],
    queryText: 'card',
    speechRecognitionConfidence: 0,
    action: '',
    parameters: { fields: {} },
    allRequiredParamsPresent: true,
    fulfillmentText: '',
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
        'projects/webchat-core/agent/intents/b0a31bfb-9bbe-4280-a507-aa57d129061c',
      displayName: 'cardResponse',
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
      fields: { webhook_latency_ms: { numberValue: 129, kind: 'numberValue' } },
    },
    languageCode: 'en-us',
  },
  webhookStatus: {
    details: [],
    code: 0,
    message: 'Webhook execution successful',
  },
}

const imagePayload = {
  responseId: '815b6546-9323-453d-a782-83834a55d832',
  queryResult: {
    fulfillmentMessages: [
      {
        platform: 'PLATFORM_UNSPECIFIED',
        image: {
          imageUri:
            'https://upload.wikimedia.org/wikipedia/commons/a/a0/Lord_Kelvin_photograph.jpg',
          accessibilityText: '',
        },
        message: 'image',
      },
    ],
    outputContexts: [],
    queryText: 'image',
    speechRecognitionConfidence: 0,
    action: '',
    parameters: { fields: {} },
    allRequiredParamsPresent: true,
    fulfillmentText: '',
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
        'projects/webchat-core/agent/intents/a6b1171c-d277-4604-95aa-c99d5f72efe3',
      displayName: 'imageResponse',
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
      fields: { webhook_latency_ms: { numberValue: 45, kind: 'numberValue' } },
    },
    languageCode: 'en-us',
  },
  webhookStatus: {
    details: [],
    code: 0,
    message: 'Webhook execution successful',
  },
}

const suggestionPayload = {
  responseId: 'c13962f0-ea00-4392-8cc3-4a7cf9027af5',
  queryResult: {
    fulfillmentMessages: [
      {
        platform: 'PLATFORM_UNSPECIFIED',
        text: { text: ['These are suggestions'] },
        message: 'text',
      },
      {
        platform: 'PLATFORM_UNSPECIFIED',
        quickReplies: { quickReplies: ['No', 'Yes'], title: '' },
        message: 'quickReplies',
      },
    ],
    outputContexts: [],
    queryText: 'suggestions',
    speechRecognitionConfidence: 0,
    action: '',
    parameters: { fields: {} },
    allRequiredParamsPresent: true,
    fulfillmentText: '',
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
        'projects/webchat-core/agent/intents/ff65e52e-80bb-4087-8b07-fea04a4e3ab0',
      displayName: 'suggestionsResponse',
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
      fields: { webhook_latency_ms: { numberValue: 48, kind: 'numberValue' } },
    },
    languageCode: 'en-us',
  },
  webhookStatus: {
    details: [],
    code: 0,
    message: 'Webhook execution successful',
  },
}

const customPayload = {
  responseId: '46ab8a36-b8d4-48a5-b63f-bd002507c907',
  queryResult: {
    fulfillmentMessages: [
      {
        platform: 'PLATFORM_UNSPECIFIED',
        text: { text: [''] },
        message: 'text',
      },
    ],
    outputContexts: [],
    queryText: 'payload',
    speechRecognitionConfidence: 0,
    action: '',
    parameters: { fields: {} },
    allRequiredParamsPresent: true,
    fulfillmentText: '',
    webhookSource: '',
    webhookPayload: {
      fields: {
        null: {
          structValue: {
            fields: { test: { stringValue: 'this', kind: 'stringValue' } },
          },
          kind: 'structValue',
        },
      },
    },
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
        'projects/webchat-core/agent/intents/3d7e978b-f137-4030-a6ef-bdb6132c3cb8',
      displayName: 'payloadResponse',
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
      fields: { webhook_latency_ms: { numberValue: 54, kind: 'numberValue' } },
    },
    languageCode: 'en-us',
  },
  webhookStatus: {
    details: [],
    code: 0,
    message: 'Webhook execution successful',
  },
}

const multiplePayload = {
  responseId: '39375555-cbef-45ab-9279-93c5209c60f0',
  queryResult: {
    fulfillmentMessages: [
      {
        platform: 'PLATFORM_UNSPECIFIED',
        text: { text: ['These'] },
        message: 'text',
      },
      {
        platform: 'PLATFORM_UNSPECIFIED',
        text: { text: ['Are'] },
        message: 'text',
      },
      {
        platform: 'PLATFORM_UNSPECIFIED',
        text: { text: ['Multiple'] },
        message: 'text',
      },
      {
        platform: 'PLATFORM_UNSPECIFIED',
        text: { text: ['Responses'] },
        message: 'text',
      },
    ],
    outputContexts: [],
    queryText: 'multiple',
    speechRecognitionConfidence: 0,
    action: '',
    parameters: { fields: {} },
    allRequiredParamsPresent: true,
    fulfillmentText: '',
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
        'projects/webchat-core/agent/intents/f3489e67-dd53-4920-ac58-c5bb9d4111ad',
      displayName: 'multipleResponses',
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
      fields: { webhook_latency_ms: { numberValue: 51, kind: 'numberValue' } },
    },
    languageCode: 'en-us',
  },
  webhookStatus: {
    details: [],
    code: 0,
    message: 'Webhook execution successful',
  },
}

export {
  textPayload,
  cardPayload,
  imagePayload,
  suggestionPayload,
  customPayload,
  multiplePayload,
}
