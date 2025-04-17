export default async function handler(request, context) {
    const response = await fetch(request);
    const contentType = response.headers.get('content-type') || '';
  
    // Only modify HTML pages
    if (!contentType.includes('text/html')) {
      return response;
    }
  
    // Get original HTML content
    const html = await response.text();
  
    // Pull in any env variables you need
    const lyticsKey = context.env?.LYTICS_KEY;
    console.log('lyticsKey: ', lyticsKey);

    if (!lyticsKey) {
      console.warn('LYTICS_KEY is not defined in environment');
      return response;
    }
  
    const scriptToInject = `
      <!-- Start Lytics Tracking Tag Version 3 -->
        <script type="text/javascript">
        !function(){"use strict";var o=window.jstag||(window.jstag={}),r=[];function n(e){o[e]=function(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];r.push([e,t])}}n("send"),n("mock"),n("identify"),n("pageView"),n("unblock"),n("getid"),n("setid"),n("loadEntity"),n("getEntity"),n("on"),n("once"),n("call"),o.loadScript=function(n,t,i){var e=document.createElement("script");e.async=!0,e.src=n,e.onload=t,e.onerror=i;var o=document.getElementsByTagName("script")[0],r=o&&o.parentNode||document.head||document.body,c=o||r.lastChild;return null!=c?r.insertBefore(e,c):r.appendChild(e),this},o.init=function n(t){return this.config=t,this.loadScript(t.src,function(){if(o.init===n)throw new Error("Load error!");o.init(o.config),function(){for(var n=0;n<r.length;n++){var t=r[n][0],i=r[n][1];o[t].apply(o,i)}r=void 0}()}),this}}();
        // Define config and initialize Lytics tracking tag.
        // - The setup below will disable the automatic sending of Page Analysis Information (to prevent duplicative sends, as this same information will be included in the jstag.pageView() call below, by default)
        jstag.init({
            src: 'https://c.lytics.io/api/tag/${lyticsKey}/latest.min.js'
        });
        
        // You may need to send a page view, depending on your use-case
        jstag.pageView();
        </script>
    `;
  
    // Inject script before </head>
    const updatedHtml = html.replace('</head>', `${scriptToInject}</head>`);
  
    // Return the modified response
    return new Response(updatedHtml, {
      status: response.status,
      statusText: response.statusText,
      headers: {
        'content-type': contentType,
      },
    });
  }