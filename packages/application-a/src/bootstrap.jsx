import React from 'react';
import ReactDOM from 'react-dom';
import antd from 'libs/antd'
import SayHelloFromB from 'application_b/SayHelloFromB';
import SayHelloFromC from 'libs/SayHelloFromC';
// console.log(SayHelloFromB,"SayHelloFromB")
// const SayHelloFromB = await import('application_b/SayHelloFromB');
// const SayHelloFromB = React.lazy(() => import("application_b/SayHelloFromB"));
import App from './app';
console.log(antd,"antd")
ReactDOM.render(
  <>
      <App />
      <SayHelloFromB />
      <SayHelloFromC />
      <antd.Button type="primary">Primary Button</antd.Button>
      {/* <Button>Foo</Button> */}
  </>,
  document.getElementById('root')
);