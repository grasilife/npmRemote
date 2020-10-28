import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'antd';
import 'antd/dist/antd.css';
import SayHelloFromA from 'application_a/SayHelloFromA';
// const SayHelloFromA = React.lazy(() => import("application_a/SayHelloFromA"));
import App from './app';

ReactDOM.render(
  <>
    <App />
    <SayHelloFromA />
    <Button type="primary">Primary Button</Button>
  </>,
  document.getElementById('root')
);