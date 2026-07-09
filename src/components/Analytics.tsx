'use client';

import Script from 'next/script';

/**
 * Analytics loaders — GA4, GTM and Microsoft Clarity.
 * IDs are read from public env vars; nothing loads unless configured.
 * Conversion events fire from clicks on elements with a [data-analytics] attribute.
 */
export function Analytics() {
  const GA = process.env.NEXT_PUBLIC_GA_ID;
  const GTM = process.env.NEXT_PUBLIC_GTM_ID;
  const CLARITY = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <>
      {GA && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
              gtag('js',new Date());gtag('config','${GA}');`}
          </Script>
        </>
      )}
      {GTM && (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM}');`}
        </Script>
      )}
      {CLARITY && (
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY}");`}
        </Script>
      )}
      {(GA || GTM) && (
        <Script id="conversion-events" strategy="afterInteractive">
          {`document.addEventListener('click',function(e){
            var el=e.target&&e.target.closest?e.target.closest('[data-analytics]'):null;
            if(!el)return;var ev=el.getAttribute('data-analytics');
            if(window.gtag)window.gtag('event',ev,{event_category:'engagement'});
            if(window.dataLayer)window.dataLayer.push({event:ev});
          });`}
        </Script>
      )}
    </>
  );
}
