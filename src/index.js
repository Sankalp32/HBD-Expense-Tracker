import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './Context/context';
import { SpeechProvider } from '@speechly/react-client';
import App from'./App'
import './index.css'

ReactDOM.render(
    <SpeechProvider appId="4dede57f-5ea1-4ae9-959f-8bf8d14419cd" language="en-US">
    <Provider>
        <App/>
    </Provider>
</SpeechProvider>
 , document.getElementById('root'))

