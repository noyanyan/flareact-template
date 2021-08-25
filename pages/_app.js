import '../styles.css';
// import 'tailwindcss/tailwind.css'
// ↑ tailwind.cssをインポートする場合、レイアウトシフトが起こる(dev serverのみ)
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
