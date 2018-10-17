import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import React from 'react';
import ActivatorButton from './../src/ActivatorButton.js';
import renderer from 'react-test-renderer';

import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import rootReducer from './../src/reducers/rootReducer';

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

test('component onClick changes ', () => {
  const component = renderer.create(
    <Provider store={store}>
      <ActivatorButton />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the onClick call back
  tree.props.onClick();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the onclick callback
  tree.props.onClick();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
