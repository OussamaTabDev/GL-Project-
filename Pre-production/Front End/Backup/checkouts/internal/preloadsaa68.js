
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills-legacy.BG6ydnO2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app-legacy.CXHhBa4T.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/page-OnePage-legacy.CkmTjpoG.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection-legacy.D-LhwRsP.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useEditorShopPayNavigation-legacy.DXjkOuiN.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedPayment-legacy.DGJzFo5Z.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LocalizationExtensionField-legacy.CjA6uApP.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayOptInDisclaimer-legacy.BFzkjW0U.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/UnavailableInBuyerLocationBanner-legacy.CgggWF3_.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShipmentBreakdown-legacy.Cnpe5Fd8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/MerchandiseModal-legacy.DJ2XL4ce.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/StackedMerchandisePreview-legacy.DCgenC9_.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection-legacy.DW4YsCj1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/component-ShopPayVerificationSwitch-legacy.DDJss4N4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useSubscribeMessenger-legacy.DRgyKFzc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index-legacy.C7pGve57.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  