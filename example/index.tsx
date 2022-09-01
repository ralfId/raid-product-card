import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ShoppingCard, CardImage, CardTitle, CardButtons } from '../.';

const product = {
  id: '1',
  title: 'coffee card 1',
  //img: './coffee-mug.png'
}

const App = () => {
  return (
    <>
      <ShoppingCard product={product}
        initialValues={{
          count: 4,
          //maxcount: 15 
        }}>
        {
          ({ reset, increasBy, count, isMaxCountReached }) => (
            <>
              <CardImage />
              <CardTitle />
              <CardButtons />
            </>
          )
        }

      </ShoppingCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
