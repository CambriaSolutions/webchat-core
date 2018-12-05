const textResponse = {
  entity: 'bot',
  loading: false,
  messageId: '3efea8b8-74ae-46ed-8556-c195c52d2f79',
  language: 'en-us',
  systemTime: '2018-12-05T02:13:18.034',
  responses: [{ type: 'text', text: ['Sorry, could you say that again?'] }],
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

const customResponse = {
  entity: 'bot',
  loading: false,
  messageId: '46ab8a36-b8d4-48a5-b63f-bd002507c907',
  language: 'en-us',
  systemTime: '2018-12-05T02:44:41.980',
  responses: [{ type: 'text', text: [''] }],
}

const multipleResponse = {
  entity: 'bot',
  loading: false,
  messageId: '39375555-cbef-45ab-9279-93c5209c60f0',
  language: 'en-us',
  systemTime: '2018-12-05T02:45:09.363',
  responses: [
    { type: 'text', text: ['These'] },
    { type: 'text', text: ['Are'] },
    { type: 'text', text: ['Multiple'] },
    { type: 'text', text: ['Responses'] },
  ],
}

export { textResponse, cardResponse, multipleResponse, customResponse }
