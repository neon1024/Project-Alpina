( window.p15r = window.p15r || []).push({
  processingId: 'Facebook',
  action: 'register',
  callback: function (pid, paramObj) {
    var cfg = processingWrapper.getConfig(pid, paramObj);
    if (!window.fbq) {
      /**
       * Facebook Pixel Code
       * source: https://developers.facebook.com/docs/facebook-pixel/implementation
       * date: 2020-03-03
       * */
      !function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
    }
    /* End Facebook Pixel Code */
    var accountId = cfg["accountId"];
    if (accountId === undefined) {
      processingWrapper.error("P15r: no FB id configured, ignoring call.")
    } else {
      fbq("init", accountId);
      fbq.apply(this, cfg.args);
    }
  },
  extra: {
    disable: function () {
      processingWrapper.log("disabling FB");
      fbq('consent', 'revoke');
    },
    enable: function () {
      processingWrapper.log("enabling FB");
      fbq('consent', 'grant');
    }
  },
  isCentral: true
})
