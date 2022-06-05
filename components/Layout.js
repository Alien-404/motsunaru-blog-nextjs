import Head from 'next/head';
import Navbar from './Navbar';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={`page ${title}`} key='title' />
      </Head>
      <Navbar />

      {children}
    </>
  );
}
