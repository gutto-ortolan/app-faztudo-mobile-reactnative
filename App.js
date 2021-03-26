import React from 'react';
import MainStack from './src/pages/MainStack';
import {AuthProvider} from './src/provider/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <MainStack />
    </AuthProvider>
  );
};

export default App;
