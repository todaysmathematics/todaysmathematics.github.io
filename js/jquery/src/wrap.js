define(["./core","./var/isFunction","./core/init","./manipulation","./traversing"],function(n,t){return n.fn.extend({wrapAll:function(i){var e;return this[0]&&(t(i)&&(i=i.call(this[0])),e=n(i,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var n=this;n.firstElementChild;)n=n.firstElementChild;return n}).append(this)),this},wrapInner:function(i){return t(i)?this.each(function(t){n(this).wrapInner(i.call(this,t))}):this.each(function(){var t=n(this),e=t.contents();e.length?e.wrapAll(i):t.append(i)})},wrap:function(i){var e=t(i);return this.each(function(t){n(this).wrapAll(e?i.call(this,t):i)})},unwrap:function(t){return this.parent(t).not("body").each(function(){n(this).replaceWith(this.childNodes)}),this}}),n});