define(["../core","../var/indexOf","../var/isFunction","./var/rneedsContext","../selector"],function(t,n,e,r){function i(r,i,u){return e(i)?t.grep(r,function(t,n){return!!i.call(t,n,t)!==u}):i.nodeType?t.grep(r,function(t){return t===i!==u}):"string"!=typeof i?t.grep(r,function(t){return n.call(i,t)>-1!==u}):t.filter(i,r,u)}t.filter=function(n,e,r){var i=e[0];return r&&(n=":not("+n+")"),1===e.length&&1===i.nodeType?t.find.matchesSelector(i,n)?[i]:[]:t.find.matches(n,t.grep(e,function(t){return 1===t.nodeType}))},t.fn.extend({find:function(n){var e,r,i=this.length,u=this;if("string"!=typeof n)return this.pushStack(t(n).filter(function(){for(e=0;e<i;e++)if(t.contains(u[e],this))return!0}));for(r=this.pushStack([]),e=0;e<i;e++)t.find(n,u[e],r);return i>1?t.uniqueSort(r):r},filter:function(t){return this.pushStack(i(this,t||[],!1))},not:function(t){return this.pushStack(i(this,t||[],!0))},is:function(n){return!!i(this,"string"==typeof n&&r.test(n)?t(n):n||[],!1).length}})});