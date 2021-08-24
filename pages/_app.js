import Head from 'next/head';

import 'styles/globals.css';

import { Nav, Alert } from 'components';

export default App;

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Next.js - Alert (Toaster) Notifications</title>
                
                {/* eslint-disable-next-line @next/next/no-css-tags */}
                <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
            </Head>

            <div className='app-container bg-light'>
                <Nav />
                <div className="p-4">
                    <div className="container">
                        <Alert />
                        <Component {...pageProps} />
                    </div>
                </div>
            </div>

            {/* credits */}
            <div className="text-center mt-4">
                <p>
                    <a href="#" target="_top">Next.js - Alert (Toaster) Notifications</a>
                </p>
                <p>
                    <a href="https://jasonwatmore.com" target="_top">JasonWatmore.com</a>
                </p>
            </div>
        </>
    );
}
