define(["./core","./var/concat","./var/isFunction","./var/push","./core/access","./manipulation/var/rcheckableType","./manipulation/var/rtagName","./manipulation/var/rscriptType","./manipulation/wrapMap","./manipulation/getAll","./manipulation/setGlobalEval","./manipulation/buildFragment","./manipulation/support","./data/var/dataPriv","./data/var/dataUser","./data/var/acceptData","./core/DOMEval","./core/nodeName","./core/init","./traversing","./selector","./event"],function(e,t,n,r,i,a,o,c,l,s,p,u,h,f,d,v,y,m){function g(t,n){return m(t,"table")&&m(11!==n.nodeType?n:n.firstChild,"tr")?e(t).children("tbody")[0]||t:t}function T(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function x(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function C(t,n){var r,i,a,o,c,l,s,p;if(1===n.nodeType){if(f.hasData(t)&&(o=f.access(t),c=f.set(n,o),p=o.events)){delete c.handle,c.events={};for(a in p)for(r=0,i=p[a].length;r<i;r++)e.event.add(n,a,p[a][r])}d.hasData(t)&&(l=d.access(t),s=e.extend({},l),d.set(n,s))}}function D(e,t){var n=t.nodeName.toLowerCase();"input"===n&&a.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function b(r,i,a,o){i=t.apply([],i);var l,p,d,v,m,g,C=0,D=r.length,N=D-1,k=i[0],w=n(k);if(w||D>1&&"string"==typeof k&&!h.checkClone&&A.test(k))return r.each(function(e){var t=r.eq(e);w&&(i[0]=k.call(this,e,t.html())),b(t,i,a,o)});if(D&&(l=u(i,r[0].ownerDocument,!1,r,o),p=l.firstChild,1===l.childNodes.length&&(l=p),p||o)){for(d=e.map(s(l,"script"),T),v=d.length;C<D;C++)m=l,C!==N&&(m=e.clone(m,!0,!0),v&&e.merge(d,s(m,"script"))),a.call(r[C],m,C);if(v)for(g=d[d.length-1].ownerDocument,e.map(d,x),C=0;C<v;C++)m=d[C],c.test(m.type||"")&&!f.access(m,"globalEval")&&e.contains(g,m)&&(m.src&&"module"!==(m.type||"").toLowerCase()?e._evalUrl&&e._evalUrl(m.src):y(m.textContent.replace(L,""),g,m))}return r}function N(t,n,r){for(var i,a=n?e.filter(n,t):t,o=0;null!=(i=a[o]);o++)r||1!==i.nodeType||e.cleanData(s(i)),i.parentNode&&(r&&e.contains(i.ownerDocument,i)&&p(s(i,"script")),i.parentNode.removeChild(i));return t}var k=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,w=/<script|<style|<link/i,A=/checked\s*(?:[^=]|=\s*.checked.)/i,L=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;return e.extend({htmlPrefilter:function(e){return e.replace(k,"<$1></$2>")},clone:function(t,n,r){var i,a,o,c,l=t.cloneNode(!0),u=e.contains(t.ownerDocument,t);if(!(h.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||e.isXMLDoc(t)))for(c=s(l),o=s(t),i=0,a=o.length;i<a;i++)D(o[i],c[i]);if(n)if(r)for(o=o||s(t),c=c||s(l),i=0,a=o.length;i<a;i++)C(o[i],c[i]);else C(t,l);return c=s(l,"script"),c.length>0&&p(c,!u&&s(t,"script")),l},cleanData:function(t){for(var n,r,i,a=e.event.special,o=0;void 0!==(r=t[o]);o++)if(v(r)){if(n=r[f.expando]){if(n.events)for(i in n.events)a[i]?e.event.remove(r,i):e.removeEvent(r,i,n.handle);r[f.expando]=void 0}r[d.expando]&&(r[d.expando]=void 0)}}}),e.fn.extend({detach:function(e){return N(this,e,!0)},remove:function(e){return N(this,e)},text:function(t){return i(this,function(t){return void 0===t?e.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=t)})},null,t,arguments.length)},append:function(){return b(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){g(this,e).appendChild(e)}})},prepend:function(){return b(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=g(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return b(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return b(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var t,n=0;null!=(t=this[n]);n++)1===t.nodeType&&(e.cleanData(s(t,!1)),t.textContent="");return this},clone:function(t,n){return t=null!=t&&t,n=null==n?t:n,this.map(function(){return e.clone(this,t,n)})},html:function(t){return i(this,function(t){var n=this[0]||{},r=0,i=this.length;if(void 0===t&&1===n.nodeType)return n.innerHTML;if("string"==typeof t&&!w.test(t)&&!l[(o.exec(t)||["",""])[1].toLowerCase()]){t=e.htmlPrefilter(t);try{for(;r<i;r++)n=this[r]||{},1===n.nodeType&&(e.cleanData(s(n,!1)),n.innerHTML=t);n=0}catch(e){}}n&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=[];return b(this,arguments,function(n){var r=this.parentNode;e.inArray(this,t)<0&&(e.cleanData(s(this)),r&&r.replaceChild(n,this))},t)}}),e.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,n){e.fn[t]=function(t){for(var i,a=[],o=e(t),c=o.length-1,l=0;l<=c;l++)i=l===c?this:this.clone(!0),e(o[l])[n](i),r.apply(a,i.get());return this.pushStack(a)}}),e});