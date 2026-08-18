'use client';

import Script from 'next/script';

export default function MainScript() {
  return (
    <script
      id="main-script"
      src="/main-script.js"
      strategy="lazyOnload"
    />
  );
}

export default function MainScript() {
  return <script id="main-script" src="/main-script.js" strategy="lazyOnload" />;
}