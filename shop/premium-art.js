/*! Premium Art — hero + ciemny motyw dla superobrazy.pl
 *  Hostowane w repo bestkry/aure-d-arte, wstrzykiwane jednolinijkowym snippetem w IdoSell.
 *  Aktualizacja: podmiana tego pliku przez API GitHuba (bez wchodzenia w panel).
 */
(function () {
  'use strict';

  var CFG = {
    match: 'premium-art-183',
    poster: 'https://cdn.auredarte.com/hero-poster.jpg',
    videoDesktop: 'https://cdn.auredarte.com/hero-desktop.mp4',
    videoMobile: 'https://cdn.auredarte.com/hero-mobile.mp4',
    label: 'KOLEKCJA',
    title: 'PREMIUM ART',
    sub: 'Obrazy w najwy\u017Cszej jako\u015Bci druku'
  };

  if (location.pathname.indexOf(CFG.match) === -1) return;
  if (document.getElementById('pa-hero-style')) return;

  /* ---------- 1. Styl wstrzykiwany natychmiast (bez migotania) ---------- */
  var css = [
    /* hero */
    '.pa-hero{position:relative;display:block;width:100%;margin:0 0 44px;overflow:hidden;',
    'border-radius:14px;height:min(50vh,440px);line-height:0;background:#0d0d0f center/cover no-repeat url(' + CFG.poster + ');}',
    '.pa-hero__vid{width:100%;height:100%;object-fit:cover;display:block;}',
    '.pa-hero__overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(13,13,15,.12) 0%,rgba(13,13,15,.5) 58%,rgba(13,13,15,.9) 100%);}',
    '.pa-hero__content{position:absolute;inset:auto 0 9% 0;text-align:center;padding:0 20px;}',
    '.pa-hero__label{display:block;margin:0 0 10px;color:rgba(255,255,255,.75)!important;font-size:11px;letter-spacing:.32em;line-height:1;}',
    '.pa-hero__title{display:block;margin:0 0 10px;color:#fff!important;font-size:clamp(26px,4.2vw,50px);font-weight:300;letter-spacing:.16em;line-height:1.1;text-shadow:0 2px 24px rgba(0,0,0,.5);}',
    '.pa-hero__sub{display:block;color:rgba(255,255,255,.82)!important;font-size:clamp(12px,1.4vw,16px);letter-spacing:.05em;line-height:1.5;}',
    '@media(max-width:767px){.pa-hero{height:min(38vh,300px);border-radius:0;margin-bottom:28px;}}',

    /* baza ciemna */
    '.pa-dark{background:#0d0d0f!important;}',
    '.pa-dark body,.pa-dark #container,.pa-dark #content,.pa-dark header,.pa-dark footer,',
    '.pa-dark .search_page,.pa-dark .navbar,.pa-dark .navbar-cover,.pa-dark .breadcrumbs,',
    '.pa-dark .footer_settings,.pa-dark .footer_links{background:#0d0d0f!important;background-color:#0d0d0f!important;}',
    '.pa-dark,.pa-dark body{color:#e8e6e3!important;}',
    '.pa-dark a,.pa-dark p,.pa-dark li,.pa-dark span,.pa-dark td,.pa-dark label,',
    '.pa-dark h1,.pa-dark h2,.pa-dark h3,.pa-dark h4,.pa-dark .headline,',
    '.pa-dark .headline__name,.pa-dark .nav-link{color:#e8e6e3!important;}',
    '.pa-dark .breadcrumbs,.pa-dark .breadcrumbs a,.pa-dark .breadcrumbs span{color:rgba(232,230,227,.55)!important;}',
    '.pa-dark hr,.pa-dark *{border-color:rgba(255,255,255,.1)!important;}',

    /* ukryty duplikat naglowka */
    '.pa-dark .search_name{display:none!important;}',

    /* siatka produktow — realne klasy szablonu */
    '.pa-dark .search.products .product{background:#16161a!important;border:1px solid rgba(255,255,255,.07)!important;',
    'border-radius:12px;overflow:hidden;padding-bottom:14px;',
    'transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease;}',
    '.pa-dark .search.products .product:hover{transform:translateY(-6px);border-color:rgba(255,255,255,.22)!important;box-shadow:0 16px 40px rgba(0,0,0,.55);}',
    '.pa-dark .search.products .product img{width:100%;height:auto;display:block;transition:transform .5s ease;}',
    '.pa-dark .search.products .product:hover img{transform:scale(1.04);}',
    '.pa-dark .product__name,.pa-dark .product__name a,.pa-dark a.product__name{color:#f2f0ed!important;font-weight:400!important;letter-spacing:.02em;}',
    '.pa-dark .product__prices,.pa-dark .product__prices *{color:#fff!important;}',
    '.pa-dark .product__prices .price,.pa-dark .price--main{font-weight:600!important;}',
    '.pa-dark .product__traits,.pa-dark .product__traits *{color:rgba(232,230,227,.6)!important;}',
    '.pa-dark .product__icon{background:#1d1d22!important;color:rgba(255,255,255,.25)!important;}',

    /* formularze, filtry, przyciski */
    '.pa-dark select,.pa-dark input,.pa-dark textarea{background:#16161a!important;color:#e8e6e3!important;border:1px solid rgba(255,255,255,.16)!important;}',
    '.pa-dark .btn,.pa-dark button.btn,.pa-dark .btn--solid{background:#fff!important;color:#111!important;border-color:#fff!important;}',
    '.pa-dark .btn:hover{background:#e8e6e3!important;color:#111!important;}',

    /* logo na bialo */
    '.pa-dark #logo img,.pa-dark .logo img,.pa-dark img[src*="logo"]{filter:brightness(0) invert(1);}'
  ].join('');

  var st = document.createElement('style');
  st.id = 'pa-hero-style';
  st.textContent = css;
  (document.head || document.documentElement).appendChild(st);
  document.documentElement.classList.add('pa-dark');

  /* ---------- 2. Hero wstawiany na gore <main id="content"> ---------- */
  function build() {
    if (document.querySelector('.pa-hero')) return true;

    var host = document.getElementById('content')
            || document.querySelector('main')
            || document.querySelector('.search_page');
    if (!host) return false;

    var wrap = document.createElement('div');
    wrap.className = 'pa-hero';
    wrap.innerHTML =
      '<video class="pa-hero__vid" muted loop playsinline preload="none" poster="' + CFG.poster + '"></video>' +
      '<div class="pa-hero__overlay"></div>' +
      '<div class="pa-hero__content">' +
        '<span class="pa-hero__label">' + CFG.label + '</span>' +
        '<span class="pa-hero__title">' + CFG.title + '</span>' +
        '<span class="pa-hero__sub">' + CFG.sub + '</span>' +
      '</div>';
    host.insertBefore(wrap, host.firstChild);

    if (document.body) document.body.classList.add('pa-dark');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;

    var v = wrap.querySelector('.pa-hero__vid');
    var s = document.createElement('source');
    s.type = 'video/mp4';
    s.src = window.matchMedia('(max-width: 767px)').matches ? CFG.videoMobile : CFG.videoDesktop;
    v.appendChild(s);
    v.load();
    var p = v.play();
    if (p && p.catch) p.catch(function () {});
    return true;
  }

  var tries = 0;
  var iv = setInterval(function () {
    tries++;
    if (build() || tries > 40) clearInterval(iv);
  }, 100);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
