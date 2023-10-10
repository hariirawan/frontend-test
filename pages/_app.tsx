import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { StoreProvider } from '../provider/provider-store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
