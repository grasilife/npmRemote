import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'libs/antd'
import SayHelloFromB from 'application_b/SayHelloFromB';
// console.log(SayHelloFromB,"SayHelloFromB")
// const SayHelloFromB = await import('application_b/SayHelloFromB');
// const SayHelloFromB = React.lazy(() => import("application_b/SayHelloFromB"));
import App from './app';

ReactDOM.render(
  <>
      <App />
      <SayHelloFromB />
      <Button>Foo</Button>
  </>,
  document.getElementById('root')
);