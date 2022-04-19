import { useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
        OneSignal.init({
            appId: "47247bd0-ed71-445e-8d72-a310f79e8e86",
            safari_web_id: "web.onesignal.auto.52db6e33-5c43-4c7e-8893-c04dfe7146e4",
            notifyButton: {
                enable: true,
            },

            allowLocalhostAsSecureOrigin: true,
        });
    });

    return () => {
        window.OneSignal = undefined;
    };
  }, []); // <-- run this effect once on mount

  return <Component {...pageProps} />
}

export default MyApp;