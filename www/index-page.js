import React from 'react';
import ReactDOM from 'react-dom';
import Showroom from '@opuscapita/react-showroom-client';
import '@opuscapita/opuscapita-ui';
import env from '../.env';

// import '@opuscapita/styles/dist/npm/index.css';
import '../src/client/components/styles.less'

window._showroom = { ...(window._showroom || {}), env };

let element = document.getElementById('main');
let showroom = React.createElement(Showroom, {
  loaderOptions: {
    componentsInfo: require('.opuscapita-showroom/componentsInfo'),
    packagesInfo: require('.opuscapita-showroom/packageInfo')
  }
});

ReactDOM.render(showroom, element);
