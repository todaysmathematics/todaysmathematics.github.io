define(["../core","../var/document","../var/isFunction","./var/rsingleTag","../traversing/findFilter"],function(t,e,n,i){var r,s=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,h=t.fn.init=function(h,o,f){var a,u;if(!h)return this;if(f=f||r,"string"==typeof h){if(!(a="<"===h[0]&&">"===h[h.length-1]&&h.length>=3?[null,h,null]:s.exec(h))||!a[1]&&o)return!o||o.jquery?(o||f).find(h):this.constructor(o).find(h);if(a[1]){if(o=o instanceof t?o[0]:o,t.merge(this,t.parseHTML(a[1],o&&o.nodeType?o.ownerDocument||o:e,!0)),i.test(a[1])&&t.isPlainObject(o))for(a in o)n(this[a])?this[a](o[a]):this.attr(a,o[a]);return this}return u=e.getElementById(a[2]),u&&(this[0]=u,this.length=1),this}return h.nodeType?(this[0]=h,this.length=1,this):n(h)?void 0!==f.ready?f.ready(h):h(t):t.makeArray(h,this)};return h.prototype=t.fn,r=t(e),h});