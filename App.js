import React, {Fragment} from 'react';
import Providers from './navigation/Hello';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <Fragment>
      <Providers />
      {/* <--- here as last component */}
    </Fragment>
  );
};

export default App;
