import React from 'react';
import { render } from 'react-dom';
import globalStyles from '../utils/global';
import resetStyle from '../utils/reset';
import { Global } from '@emotion/react';
import AdviceCard from '../components/card';
const App = () => (
  <>
    <Global styles={globalStyles} />
    <Global styles={resetStyle} />
    <main>
      <h1 className="sr-only">Advice generator</h1>
      <AdviceCard />
    </main>
  </>
);
render(<App />, document.getElementById('root'));
