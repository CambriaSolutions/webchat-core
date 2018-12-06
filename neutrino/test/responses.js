const textResponse = {
  entity: 'bot',
  loading: false,
  messageId: '3efea8b8-74ae-46ed-8556-c195c52d2f79',
  language: 'en-us',
  systemTime: '2018-12-05T02:13:18.034',
  responses: [{ type: 'text', text: ['Sorry, could you say that again?'] }],
}

const imageResponse = {
  entity: 'bot',
  loading: false,
  messageId: '654ead00-9820-498d-85e3-3b00d3f5eb76',
  language: 'en-us',
  systemTime: '2018-12-05T04:00:04.681',
  responses: [
    {
      type: 'image',
      image: {
        imageUri:
          'https://upload.wikimedia.org/wikipedia/commons/a/a0/Lord_Kelvin_photograph.jpg',
        accessibilityText: '',
      },
    },
  ],
}

const cardResponse = {
  entity: 'bot',
  loading: false,
  messageId: '3674fcc3-cc16-4e4d-8f82-8c04ec3667b5',
  language: 'en-us',
  systemTime: '2018-12-05T02:20:21.251',
  responses: [
    {
      type: 'card',
      card: {
        title: 'Vibrating molecules',
        subtitle:
          'Did you know that temperature is really just a measure of how fast molecules are vibrating around?! 😱',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/2/23/Thermally_Agitated_Molecule.gif',
        buttons: [
          {
            text: 'Temperature Wikipedia Page',
            postback: 'https://en.wikipedia.org/wiki/Temperature',
          },
        ],
      },
    },
  ],
}

const suggestionResponse = {
  entity: 'bot',
  loading: false,
  messageId: '8cd02664-0ba2-4a6f-8f6e-bb5b425fc3f1',
  language: 'en-us',
  systemTime: '2018-12-05T04:09:33.539',
  responses: [
    { type: 'text', text: ['These are suggestions'] },
    { type: 'suggestion', suggestions: ['No', 'Yes'] },
  ],
}

const customResponse = {
  entity: 'bot',
  loading: false,
  messageId: 'a3f5b030-604b-4ae4-b046-03234b8324b8',
  language: 'en-us',
  systemTime: '2018-12-05T04:08:09.572',
  responses: [{ type: 'payload', payload: { test: 'this' } }],
}

const multipleResponse = {
  entity: 'bot',
  loading: false,
  messageId: '3699815c-7a3f-4158-b4e8-ea711cde1803',
  language: 'en-us',
  systemTime: '2018-12-05T04:17:36.464',
  responses: [
    { type: 'text', text: ['These'] },
    { type: 'text', text: ['Are'] },
    { type: 'text', text: ['Multiple'] },
    { type: 'text', text: ['Responses'] },
  ],
}

export {
  textResponse,
  imageResponse,
  cardResponse,
  suggestionResponse,
  multipleResponse,
  customResponse,
}
