import('./index.scss');

if (module.hot) {
  module.hot.accept();
}

if (process.env.NODE_ENV === 'development') {
  console.log('localhost:');
} else {
  console.log('imooc.com');
}

import printMe from './print';
printMe();
