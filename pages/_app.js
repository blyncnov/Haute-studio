import "../styles/globals.scss";
import "../styles/work.scss";

import "../styles/layouts/Navigation.scss";
import "../styles/layouts/Header.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
