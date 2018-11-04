export const cardResponse = {
  entity: 'bot',
  loading: false,
  messageId: '31ec5cbe-ca48-4e94-b2b1-febcb3a64aa7',
  language: 'en-us',
  systemTime: '2018-11-04T02:03:48.709',
  providerResponse: {
    responseId: '31ec5cbe-ca48-4e94-b2b1-febcb3a64aa7',
    queryResult: {
      fulfillmentMessages: [
        {
          platform: 'PLATFORM_UNSPECIFIED',
          card: {
            buttons: [
              {
                text: 'This is a button',
                postback: 'this',
              },
            ],
            title: 'Title: this is a card title',
            subtitle:
              'This is the body text of a card.  You can even use line\n  breaks and emoji! 💁',
            imageUri:
              'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
          },
          message: 'card',
        },
      ],
      outputContexts: [
        {
          name:
            'projects/dhcs-demo-chat/agent/sessions/dhcs-demo-chat-session/contexts/waiting-looking-for-support',
          lifespanCount: 1,
          parameters: null,
        },
      ],
      queryText: 'test',
      speechRecognitionConfidence: 0,
      action: '',
      parameters: {
        fields: {},
      },
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
          'projects/dhcs-demo-chat/agent/intents/80ec4071-05bf-4c18-bc2c-6c392af9fd82',
        displayName: 'testForKeef',
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
            numberValue: 55,
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
  },
  responses: [
    {
      type: 'card',
      suggestions: [],
      text: null,
      card: {
        title: 'Title: this is a card title',
        subtitle:
          'This is the body text of a card.  You can even use line\n  breaks and emoji! 💁',
        imageUrl:
          'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
        buttons: [
          {
            text: 'This is a button',
            postback: 'this',
          },
        ],
      },
      payload: {},
      systemTime: '2018-11-04T02:03:48.709',
      entity: 'bot',
      key: 'msg-2-2018-11-04T02:03:48.709',
    },
  ],
}
