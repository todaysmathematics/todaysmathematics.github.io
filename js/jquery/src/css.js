define(["./core","./var/pnum","./core/access","./core/camelCase","./var/document","./var/rcssNum","./css/var/rnumnonpx","./css/var/cssExpand","./css/var/getStyles","./css/var/swap","./css/curCSS","./css/adjustCSS","./css/addGetHookIf","./css/support","./core/init","./core/ready","./selector"],function(e,t,s,n,r,i,o,c,a,u,l,f,d,p){function g(e){if(e in H)return e;for(var t=e[0].toUpperCase()+e.slice(1),s=S.length;s--;)if((e=S[s]+t)in H)return e}function b(t){var s=e.cssProps[t];return s||(s=e.cssProps[t]=g(t)||t),s}function h(e,t,s){var n=i.exec(t);return n?Math.max(0,n[2]-(s||0))+(n[3]||"px"):t}function v(t,s,n,r,i,o){var a="width"===s?1:0,u=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=e.css(t,n+c[a],!0,i)),r?("content"===n&&(l-=e.css(t,"padding"+c[a],!0,i)),"margin"!==n&&(l-=e.css(t,"border"+c[a]+"Width",!0,i))):(l+=e.css(t,"padding"+c[a],!0,i),"padding"!==n?l+=e.css(t,"border"+c[a]+"Width",!0,i):u+=e.css(t,"border"+c[a]+"Width",!0,i));return!r&&o>=0&&(l+=Math.max(0,Math.ceil(t["offset"+s[0].toUpperCase()+s.slice(1)]-o-l-u-.5))),l}function x(t,s,n){var r=a(t),i=l(t,s,r),c="border-box"===e.css(t,"boxSizing",!1,r),u=c;if(o.test(i)){if(!n)return i;i="auto"}return u=u&&(p.boxSizingReliable()||i===t.style[s]),("auto"===i||!parseFloat(i)&&"inline"===e.css(t,"display",!1,r))&&(i=t["offset"+s[0].toUpperCase()+s.slice(1)],u=!0),(i=parseFloat(i)||0)+v(t,s,n||(c?"border":"content"),u,r,i)+"px"}var y=/^(none|table(?!-c[ea]).+)/,m=/^--/,k={position:"absolute",visibility:"hidden",display:"block"},C={letterSpacing:"0",fontWeight:"400"},S=["Webkit","Moz","ms"],H=r.createElement("div").style;return e.extend({cssHooks:{opacity:{get:function(e,t){if(t){var s=l(e,"opacity");return""===s?"1":s}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(t,s,r,o){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var c,a,u,l=n(s),d=m.test(s),g=t.style;if(d||(s=b(l)),u=e.cssHooks[s]||e.cssHooks[l],void 0===r)return u&&"get"in u&&void 0!==(c=u.get(t,!1,o))?c:g[s];a=typeof r,"string"===a&&(c=i.exec(r))&&c[1]&&(r=f(t,s,c),a="number"),null!=r&&r===r&&("number"===a&&(r+=c&&c[3]||(e.cssNumber[l]?"":"px")),p.clearCloneStyle||""!==r||0!==s.indexOf("background")||(g[s]="inherit"),u&&"set"in u&&void 0===(r=u.set(t,r,o))||(d?g.setProperty(s,r):g[s]=r))}},css:function(t,s,r,i){var o,c,a,u=n(s);return m.test(s)||(s=b(u)),a=e.cssHooks[s]||e.cssHooks[u],a&&"get"in a&&(o=a.get(t,!0,r)),void 0===o&&(o=l(t,s,i)),"normal"===o&&s in C&&(o=C[s]),""===r||r?(c=parseFloat(o),!0===r||isFinite(c)?c||0:o):o}}),e.each(["height","width"],function(t,s){e.cssHooks[s]={get:function(t,n,r){if(n)return!y.test(e.css(t,"display"))||t.getClientRects().length&&t.getBoundingClientRect().width?x(t,s,r):u(t,k,function(){return x(t,s,r)})},set:function(t,n,r){var o,c=a(t),u="border-box"===e.css(t,"boxSizing",!1,c),l=r&&v(t,s,r,u,c);return u&&p.scrollboxSize()===c.position&&(l-=Math.ceil(t["offset"+s[0].toUpperCase()+s.slice(1)]-parseFloat(c[s])-v(t,s,"border",!1,c)-.5)),l&&(o=i.exec(n))&&"px"!==(o[3]||"px")&&(t.style[s]=n,n=e.css(t,s)),h(t,n,l)}}}),e.cssHooks.marginLeft=d(p.reliableMarginLeft,function(e,t){if(t)return(parseFloat(l(e,"marginLeft"))||e.getBoundingClientRect().left-u(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),e.each({margin:"",padding:"",border:"Width"},function(t,s){e.cssHooks[t+s]={expand:function(e){for(var n=0,r={},i="string"==typeof e?e.split(" "):[e];n<4;n++)r[t+c[n]+s]=i[n]||i[n-2]||i[0];return r}},"margin"!==t&&(e.cssHooks[t+s].set=h)}),e.fn.extend({css:function(t,n){return s(this,function(t,s,n){var r,i,o={},c=0;if(Array.isArray(s)){for(r=a(t),i=s.length;c<i;c++)o[s[c]]=e.css(t,s[c],!1,r);return o}return void 0!==n?e.style(t,s,n):e.css(t,s)},t,n,arguments.length>1)}}),e});