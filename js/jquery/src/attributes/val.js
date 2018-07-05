define(["../core","../core/stripAndCollapse","./support","../core/nodeName","../var/isFunction","../core/init"],function(e,t,n,o,r){var a=/\r/g;e.fn.extend({val:function(t){var n,o,i,l=this[0];{if(arguments.length)return i=r(t),this.each(function(o){var r;1===this.nodeType&&(r=i?t.call(this,o,e(this).val()):t,null==r?r="":"number"==typeof r?r+="":Array.isArray(r)&&(r=e.map(r,function(e){return null==e?"":e+""})),(n=e.valHooks[this.type]||e.valHooks[this.nodeName.toLowerCase()])&&"set"in n&&void 0!==n.set(this,r,"value")||(this.value=r))});if(l)return(n=e.valHooks[l.type]||e.valHooks[l.nodeName.toLowerCase()])&&"get"in n&&void 0!==(o=n.get(l,"value"))?o:(o=l.value,"string"==typeof o?o.replace(a,""):null==o?"":o)}}}),e.extend({valHooks:{option:{get:function(n){var o=e.find.attr(n,"value");return null!=o?o:t(e.text(n))}},select:{get:function(t){var n,r,a,i=t.options,l=t.selectedIndex,s="select-one"===t.type,u=s?null:[],c=s?l+1:i.length;for(a=l<0?c:s?l:0;a<c;a++)if(r=i[a],(r.selected||a===l)&&!r.disabled&&(!r.parentNode.disabled||!o(r.parentNode,"optgroup"))){if(n=e(r).val(),s)return n;u.push(n)}return u},set:function(t,n){for(var o,r,a=t.options,i=e.makeArray(n),l=a.length;l--;)r=a[l],(r.selected=e.inArray(e.valHooks.option.get(r),i)>-1)&&(o=!0);return o||(t.selectedIndex=-1),i}}}}),e.each(["radio","checkbox"],function(){e.valHooks[this]={set:function(t,n){if(Array.isArray(n))return t.checked=e.inArray(e(t).val(),n)>-1}},n.checkOn||(e.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})})});