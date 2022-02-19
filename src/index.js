import React from 'react';
import { render } from 'react-dom';
import globalStyles from './utils/global';
import resetStyle from './utils/reset';
import { Global } from '@emotion/react';

const App = () => (
  <>
    <Global styles={globalStyles} />
    <Global styles={resetStyle} />
    Hello Wolrd!
  </>
);
render(<App />, document.getElementById('root'));
