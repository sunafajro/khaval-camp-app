import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import store, {history} from './store';
import ru from 'antd/lib/locale-provider/ru_RU';
import App from './components/App';
import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <LocaleProvider locale={ru}>
        <App />
      </LocaleProvider>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
