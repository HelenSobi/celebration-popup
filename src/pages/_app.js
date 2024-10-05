import "@/styles/globals.css";
import { PopupProvider } from '../components/context/PopupContext';

export default function App({ Component, pageProps }) {
  return (
    <PopupProvider>
      <Component {...pageProps} />
    </PopupProvider>
  );
}

