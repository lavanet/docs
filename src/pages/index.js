import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import Head from '@docusaurus/Head';

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    history.push('/about');
  }, [history]);

  return (
    <>
      <Head>
        <title>🌋 About Lava | Lava Docs</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://docs.lavanet.xyz/img/logo_black_background.png" />
        <meta property="og:image" content="https://docs.lavanet.xyz/img/logo_black_background.png" />
        <meta property="og:title" content="🌋 About Lava | Lava Docs" />
        <meta property="og:description" content="Lava is a decentralized protocol that provides ultra-reliable RPC services..." />
        <meta property="og:url" content="https://docs.lavanet.xyz/about" />
      </Head>
    </>
  );
}



