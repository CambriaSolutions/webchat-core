import reducer from './../../src/reducers/conversationReducer';
import * as types from './../../src/actions/ActionTypes';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import { format } from 'date-fns';
import { sysTimeFormat } from './../../src/config/dateFormats';
import { Client } from './../../src/conversationClient';

const options = {
  eventUrl:
    'https://us-central1-dhcs-demo-chat.cloudfunctions.net/eventRequest',
  textUrl: 'https://us-central1-dhcs-demo-chat.cloudfunctions.net/textRequest',
  apiKey: 'XwsfZ0JoM214avhOcgqDZ3S50stTX94l8pnZJNxN',
  clientName: 'test',
};

const defaultState = {
  client: new Client(options),
  clientName: 'dialogflow',
  messages: [],
  webhookPayload: null,
  lastUpdateTime: format(new Date(), sysTimeFormat),
  currentTime: format(new Date(), sysTimeFormat),
  headerTime: 'Now',
  timer: 8,
};
const exampleState = {
  client: {
    textUrl:
      'https://us-central1-dhcs-demo-chat.cloudfunctions.net/textRequest',
    eventUrl:
      'https://us-central1-dhcs-demo-chat.cloudfunctions.net/eventRequest',
  },
  clientName: 'dialogflow',
  messages: [
    {
      entity: 'user',
      messageId: 'usermessage-3',
      systemTime: '10-16-2018 03:44:25.033PM',
      text: 'hello',
    },
    {
      entity: 'bot',
      loading: false,
      messageId: 'de081565-be7e-4e57-a542-98fafc860c1d',
      language: 'en-us',
      timestamp: 1539724518705,
      systemTime: '10-16-2018 02:15:18.705PM',
      providerResponse: {
        responseId: 'de081565-be7e-4e57-a542-98fafc860c1d',
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
          queryText: 'hello',
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
                numberValue: 110,
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
          type: 'text',
          suggestions: [],
          text: [
            'Hello I’m the HHS Navigator bot. I can help you find frequently asked questions, program information, and other services provided by the California Health and Human Services Agency and its departments. How can we help you?',
          ],
          card: {
            title: '',
            subtitle: '',
            imageUrl: '',
            buttons: [],
          },
          payload: {},
        },
      ],
    },
    {
      entity: 'user',
      messageId: 'usermessage-1',
      systemTime: '10-16-2018 02:15:14.682PM',
      text: 'hello',
    },
    {
      entity: 'bot',
      loading: false,
      messageId: '5f3deb09-7a89-47ff-bd52-8f641c749f5b',
      language: 'en-us',
      timestamp: 1539724510810,
      systemTime: '10-16-2018 02:15:10.810PM',
      providerResponse: {
        responseId: '5f3deb09-7a89-47ff-bd52-8f641c749f5b',
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
                numberValue: 172,
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
          type: 'text',
          suggestions: [],
          text: [
            'Hello I’m the HHS Navigator bot. I can help you find frequently asked questions, program information, and other services provided by the California Health and Human Services Agency and its departments. How can we help you?',
          ],
          card: {
            title: '',
            subtitle: '',
            imageUrl: '',
            buttons: [],
          },
          payload: {},
        },
      ],
    },
  ],
  webhookPayload: null,
  lastUpdateTime: '10-16-2018 03:44:25.034PM',
  currentTime: '10-16-2018 03:44:15.152PM',
  headerTime: 'Now',
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}).client).toEqual(null);
    expect(reducer(undefined, {}).clientName).toEqual(null);
    expect(reducer(undefined, {}).webhookPayload).toEqual(null);
  });

  it('should handle SAVE_CLIENT', () => {
    expect(
      reducer([], {
        type: types.SAVE_CLIENT,
        clientName: 'dialogflow',
        client: new Client(options),
        clientOptions: options,
      })
    ).toEqual({
      client: {
        apiKey: 'XwsfZ0JoM214avhOcgqDZ3S50stTX94l8pnZJNxN',
        eventUrl:
          'https://us-central1-dhcs-demo-chat.cloudfunctions.net/eventRequest',
        textUrl:
          'https://us-central1-dhcs-demo-chat.cloudfunctions.net/textRequest',
      },
      clientName: 'dialogflow',
    });
    expect(
      reducer([exampleState], {
        type: types.SAVE_CLIENT,
        clientName: 'dialogflow',
        client: new Client(options),
        clientOptions: options,
      }).client
    ).toEqual({
      apiKey: 'XwsfZ0JoM214avhOcgqDZ3S50stTX94l8pnZJNxN',
      eventUrl:
        'https://us-central1-dhcs-demo-chat.cloudfunctions.net/eventRequest',
      textUrl:
        'https://us-central1-dhcs-demo-chat.cloudfunctions.net/textRequest',
    });
  });

  it('should handle UPDATE_CURRENT_TIME', () => {
    expect(
      reducer([], {
        type: types.UPDATE_CURRENT_TIME,
      }).headerTime
    ).toEqual('Now');
  });

  it('should handle INITIATE_LOADING', () => {
    expect(
      reducer(defaultState, {
        type: types.INITIATE_LOADING,
        clientName: 'dialogflow',
        client: new Client(options),
        clientOptions: options,
        messages: [],
      }).messages[0].entity
    ).toEqual('bot');
    expect(
      reducer(exampleState, {
        type: types.INITIATE_LOADING,
        clientName: 'dialogflow',
        client: new Client(options),
        clientOptions: options,
        messages: [],
      }).messages.length
    ).toEqual(5);
  });
  it('should handle SAVE_RESPONSE', () => {
    expect(
      reducer(defaultState, {
        type: types.SAVE_RESPONSE,
        clientName: 'dialogflow',
        client: new Client(options),
        clientOptions: options,
        messages: [],
      }).messages
    ).toEqual([]);
    expect(
      reducer(exampleState, {
        type: types.SAVE_RESPONSE,
        clientName: 'dialogflow',
        client: new Client(options),
        clientOptions: options,
        messages: [],
      }).messages.length
    ).toEqual(4);
  });
  it('should handle SAVE_USER_RESPONSE', () => {
    expect(
      reducer(exampleState, {
        type: types.SAVE_USER_RESPONSE,
        clientName: 'dialogflow',
        client: new Client(options),
        clientOptions: options,
      }).messages.length
    ).toEqual(5);
  });

  it('should handle RECEIVE_WEBHOOK_DATA', () => {
    expect(
      reducer(exampleState, {
        type: types.RECEIVE_WEBHOOK_DATA,
      })
    ).toEqual({
      client: {
        eventUrl:
          'https://us-central1-dhcs-demo-chat.cloudfunctions.net/eventRequest',
        textUrl:
          'https://us-central1-dhcs-demo-chat.cloudfunctions.net/textRequest',
      },
      clientName: 'dialogflow',
      currentTime: '10-16-2018 03:44:15.152PM',
      headerTime: 'Now',
      lastUpdateTime: '10-16-2018 03:44:25.034PM',
      messages: [
        {
          entity: 'user',
          messageId: 'usermessage-3',
          systemTime: '10-16-2018 03:44:25.033PM',
          text: 'hello',
        },
        {
          entity: 'bot',
          language: 'en-us',
          loading: false,
          messageId: 'de081565-be7e-4e57-a542-98fafc860c1d',
          providerResponse: {
            queryResult: {
              action: 'input.welcome',
              allRequiredParamsPresent: true,
              diagnosticInfo: {
                fields: {
                  webhook_latency_ms: { kind: 'numberValue', numberValue: 110 },
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
              parameters: { fields: {} },
              queryText: 'hello',
              speechRecognitionConfidence: 0,
              webhookPayload: null,
              webhookSource: '',
            },
            responseId: 'de081565-be7e-4e57-a542-98fafc860c1d',
            webhookStatus: {
              code: 0,
              details: [],
              message: 'Webhook execution successful',
            },
          },
          responses: [
            {
              card: { buttons: [], imageUrl: '', subtitle: '', title: '' },
              payload: {},
              suggestions: [],
              text: [
                'Hello I’m the HHS Navigator bot. I can help you find frequently asked questions, program information, and other services provided by the California Health and Human Services Agency and its departments. How can we help you?',
              ],
              type: 'text',
            },
          ],
          systemTime: '10-16-2018 02:15:18.705PM',
          timestamp: 1539724518705,
        },
        {
          entity: 'user',
          messageId: 'usermessage-1',
          systemTime: '10-16-2018 02:15:14.682PM',
          text: 'hello',
        },
        {
          entity: 'bot',
          language: 'en-us',
          loading: false,
          messageId: '5f3deb09-7a89-47ff-bd52-8f641c749f5b',
          providerResponse: {
            queryResult: {
              action: 'input.welcome',
              allRequiredParamsPresent: true,
              diagnosticInfo: {
                fields: {
                  webhook_latency_ms: { kind: 'numberValue', numberValue: 172 },
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
              parameters: { fields: {} },
              queryText: 'Welcome',
              speechRecognitionConfidence: 0,
              webhookPayload: null,
              webhookSource: '',
            },
            responseId: '5f3deb09-7a89-47ff-bd52-8f641c749f5b',
            webhookStatus: {
              code: 0,
              details: [],
              message: 'Webhook execution successful',
            },
          },
          responses: [
            {
              card: { buttons: [], imageUrl: '', subtitle: '', title: '' },
              payload: {},
              suggestions: [],
              text: [
                'Hello I’m the HHS Navigator bot. I can help you find frequently asked questions, program information, and other services provided by the California Health and Human Services Agency and its departments. How can we help you?',
              ],
              type: 'text',
            },
          ],
          systemTime: '10-16-2018 02:15:10.810PM',
          timestamp: 1539724510810,
        },
      ],
      webhookPayload: undefined,
    });
    expect(
      reducer([{ type: types.RECEIVE_WEBHOOK_DATA }], {
        webhookPayload: undefined,
      })
    ).toEqual([{ type: 'RECEIVE_WEBHOOK_DATA' }]);
  });

  it('should handle timer start', () => {
    expect(
      reducer(defaultState, {
        type: types.TIMER_START,
      }).timer
    ).toEqual(undefined);
  });
});
