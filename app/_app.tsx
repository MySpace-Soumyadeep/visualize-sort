// app/_app.tsx
'use client'
import type { AppProps /*, AppContext */ } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../app/store'; // Import your Redux store
import { useEffect } from 'react';
// import '../styles/globals.css'; // Your global styles

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        console.log('Inside _app.tsx - Component: ', Component);
        console.log('Inside _app.tsx - pageProps: ', pageProps);
      }, []);

    
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
