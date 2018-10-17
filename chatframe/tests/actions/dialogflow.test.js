import { Card } from 'dialogflow-fulfillment';
import * as actions from './../../src/actions/dialogflow';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import { Client } from './../../src/conversationClient';

const options = {
  eventUrl:
    'https://us-central1-dhcs-demo-chat.cloudfunctions.net/eventRequest',
  textUrl: 'https://us-central1-dhcs-demo-chat.cloudfunctions.net/textRequest',
  apiKey: 'XwsfZ0JoM214avhOcgqDZ3S50stTX94l8pnZJNxN',
  clientName: 'test',
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore({
  conversation: {
    client: new Client(options),
    clientOptions: options,
    clientName: 'dialogflow',
    messages: [],
  },
});

const response = {
  responseId: 'cbcd6179-7899-4144-ade8-a3e218e8b011',
  queryResult: {
    fulfillmentMessages: [
      {
        platform: 'PLATFORM_UNSPECIFIED',
        text: {
          text: [
            'Hello I’m the HHS Navigator bot. I can help you find frequently asked questions, program information, and other services provided by the California Health and Human Services Agency and its departments. How can we help you?',
          ],
        },
        message: 'text',
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
    queryText: 'Welcome',
    speechRecognitionConfidence: 0,
    action: 'input.welcome',
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
      displayName: 'Default Welcome Intent',
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
};

const cardResponse = {
  responseId: 'cbcd6179-7899-4144-ade8-a3e218e8b011',
  queryResult: {
    fulfillmentMessages: [
      {
        platform: 'PLATFORM_UNSPECIFIED',
        card: new Card({
          title: `Title: this is a card title`,
          imageUrl:
            'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
          text: `This is the body text of a card.  You can even use line\n breaks and emoji! 💁`,
          buttonText: 'This is a button',
          buttonUrl: 'https://assistant.google.com/',
        }),
        message: 'card',
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
    action: 'input.yourFunctionHandler',
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
      displayName: 'custom intent',
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
};

const payloadResponse = {
  responseId: 'cbcd6179-7899-4144-ade8-a3e218e8b011',
  queryResult: {
    fulfillmentMessages: [
      {
        platform: 'PLATFORM_UNSPECIFIED',
        payload: {
          messages: [
            {
              payload: {
                test: 'value',
              },
              type: 4,
            },
            {
              speech: 'test text',
              type: 4,
            },
          ],
        },
        message: 4,
        type: 4,
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
    action: 'input.payload',
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
      displayName: 'payload',
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
};

const imageResponse = {
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
};

const quickRepliesResponse = {
  responseId: 'cbcd6179-7899-4144-ade8-a3e218e8b011',
  queryResult: {
    fulfillmentMessages: [
      {
        platform: 'PLATFORM_UNSPECIFIED',
        quickReplies: { messages: [] },
        message: 'quickReplies',
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
    action: 'input.quickReplies',
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
      displayName: 'quickReplies',
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
};

const defaultResponse = {
  responseId: 'cbcd6179-7899-4144-ade8-a3e218e8b011',
  queryResult: {
    fulfillmentMessages: [
      {
        platform: 'PLATFORM_UNSPECIFIED',
        default: { messages: [] },
        message: 'default',
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
    action: 'input.default',
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
      displayName: 'quickReplies',
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
};

describe('dialog flow actions', () => {
  afterEach(() => {
    store.clearActions();
  });

  it('should set up dialog flow with correct options', () => {
    const expectedAction = [
      {
        client: {
          apiKey: 'XwsfZ0JoM214avhOcgqDZ3S50stTX94l8pnZJNxN',
          eventUrl:
            'https://us-central1-dhcs-demo-chat.cloudfunctions.net/eventRequest',
          textUrl:
            'https://us-central1-dhcs-demo-chat.cloudfunctions.net/textRequest',
        },
        clientName: 'dialogflow',
        type: 'SAVE_CLIENT',
      },
    ];

    store.dispatch(actions.setupDialogflow(options));
    const storedActions = store.getActions();
    expect(storedActions).toEqual(expectedAction);
  });

  it('should not set up dialog flow with incorrect options', () => {
    expect(() => {
      store.dispatch(actions.setupDialogflow({}));
    }).toThrow('Fulfillment URL is required to generate a conversation client');
  });

  it('should initiate loading', () => {
    const message = 'Hello';
    const expectedAction = [{ type: 'INITIATE_LOADING' }];

    store.dispatch(actions.sendMessageWithDialogflow(message));
    const storedActions = store.getActions();
    expect(storedActions).toEqual(expectedAction);
  });

  it('should throw an error on empty message', () => {
    const message = '';
    expect(() => {
      store.dispatch(actions.sendMessageWithDialogflow(message));
    }).toThrow('Query should not be empty');
  });

  it('should respond to welcome event with initial loading', () => {
    const event = 'Welcome';
    const expectedAction = [{ type: 'INITIATE_LOADING' }];
    store.dispatch(actions.sendEvent(event));
    const storedActions = store.getActions();
    expect(storedActions).toEqual(expectedAction);
  });

  it('should respond to null event with throwing an error', () => {
    const event = '';
    expect(() => {
      store.dispatch(actions.sendEvent(event));
    }).toThrow('Query should not be empty');
  });

  // it('should get Message From Dialogflow for empty response', () => {
  //   //#TODO: address dialog flow handling empty response? throw error?
  //   const response = ''
  //   const expectedAction= [{"type": "INITIATE_LOADING"}]

  //   store.dispatch(actions.getMessageFromDialogflow(response))
  //   const storedActions = store.getActions()
  //   expect(storedActions).toEqual(expectedAction)
  // })

  test('should get Message From Dialogflow for correct response', () => {
    const expectedAction = { type: 'HIDE_BUTTON_BAR' };
    store.dispatch(actions.getMessageFromDialogflow(response));
    const storedActions = store.getActions();
    expect(storedActions[0]).toEqual(expectedAction);
  });

  it('should save response', () => {
    const expectedAction = [
      { type: 'HIDE_BUTTON_BAR' },
      {
        data: {
          queryResult: {
            action: 'input.welcome',
            allRequiredParamsPresent: true,
            diagnosticInfo: {
              fields: {
                webhook_latency_ms: {
                  kind: 'numberValue',
                  numberValue: 155,
                },
              },
            },
            fulfillmentMessages: [
              {
                message: 'text',
                platform: 'PLATFORM_UNSPECIFIED',
                text: {
                  text: [
                    'Hello I’m the HHS Navigator bot. I can help you find frequently asked questions, program information, and other services provided by the California Health and Human Services Agency and its departments. How can we help you?',
                  ],
                },
              },
            ],
            fulfillmentText:
              'Hello I’m the HHS Navigator bot. I can help you find frequently asked questions, program information, and other services provided by the California Health and Human Services Agency and its departments. How can we help you?',
            intent: {
              action: '',
              defaultResponsePlatforms: [],
              displayName: 'Default Welcome Intent',
              events: [],
              followupIntentInfo: [],
              inputContextNames: [],
              isFallback: false,
              messages: [],
              mlDisabled: false,
              name:
                'projects/dhcs-demo-chat/agent/intents/5625c545-167f-4a03-99f1-1decea21ce5a',
              outputContexts: [],
              parameters: [],
              parentFollowupIntentName: '',
              priority: 0,
              resetContexts: false,
              rootFollowupIntentName: '',
              trainingPhrases: [],
              webhookState: 'WEBHOOK_STATE_UNSPECIFIED',
            },
            intentDetectionConfidence: 1,
            languageCode: 'en-us',
            outputContexts: [
              {
                lifespanCount: 2,
                name:
                  'projects/dhcs-demo-chat/agent/sessions/dhcs-demo-chat-session/contexts/waiting-looking-for-support',
                parameters: null,
              },
            ],
            parameters: {
              fields: {},
            },
            queryText: 'Welcome',
            speechRecognitionConfidence: 0,
            webhookPayload: null,
            webhookSource: '',
          },
          responseId: 'cbcd6179-7899-4144-ade8-a3e218e8b011',
          webhookStatus: {
            code: 0,
            details: [],
            message: 'Webhook execution successful',
          },
        },
        type: 'SAVE_RESPONSE',
      },
    ];
    store.dispatch(actions.saveResponse(response));
    const storedActions = store.getActions();
    expect(storedActions).toEqual(expectedAction);
  });

  it('should save response', () => {
    store.dispatch(actions.getMessageFromDialogflow(cardResponse));
    const storedActions = store.getActions();
    expect(
      storedActions[1].data.providerResponse.queryResult.fulfillmentMessages
    ).toEqual([
      {
        card: {
          buttonText: 'This is a button',
          buttonUrl: 'https://assistant.google.com/',
          imageUrl:
            'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
          text:
            'This is the body text of a card.  You can even use line\n breaks and emoji! 💁',
          title: 'Title: this is a card title',
        },
        message: 'card',
        platform: 'PLATFORM_UNSPECIFIED',
      },
    ]);
  });

  it('should save response', () => {
    store.dispatch(actions.getMessageFromDialogflow(imageResponse));
    const storedActions = store.getActions();
    expect(
      storedActions[1].data.providerResponse.queryResult.fulfillmentMessages
    ).toEqual([
      {
        image: { messages: [] },
        message: 'image',
        platform: 'PLATFORM_UNSPECIFIED',
      },
    ]);
  });

  it('should save response', () => {
    store.dispatch(actions.getMessageFromDialogflow(quickRepliesResponse));
    const storedActions = store.getActions();
    expect(
      storedActions[1].data.providerResponse.queryResult.fulfillmentMessages
    ).toEqual([
      {
        message: 'quickReplies',
        platform: 'PLATFORM_UNSPECIFIED',
        quickReplies: { messages: [] },
      },
    ]);
  });

  it('should save response', () => {
    store.dispatch(actions.getMessageFromDialogflow(defaultResponse));
    const storedActions = store.getActions();
    expect(
      storedActions[1].data.providerResponse.queryResult.fulfillmentMessages
    ).toEqual([
      {
        default: { messages: [] },
        message: 'default',
        platform: 'PLATFORM_UNSPECIFIED',
      },
    ]);
  });

  it('should save response', () => {
    store.dispatch(actions.getMessageFromDialogflow(payloadResponse));
    const storedActions = store.getActions();
    expect(
      storedActions[1].data.providerResponse.queryResult.fulfillmentMessages
    ).toEqual([
      {
        message: 4,
        payload: {
          messages: [
            { payload: { test: 'value' }, type: 4 },
            { speech: 'test text', type: 4 },
          ],
        },
        platform: 'PLATFORM_UNSPECIFIED',
        type: 4,
      },
    ]);
  });
});
