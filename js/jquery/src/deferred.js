define(["./core","./var/isFunction","./var/slice","./callbacks"],function(e,n,r){function t(e){return e}function o(e){throw e}function i(e,r,t,o){var i;try{e&&n(i=e.promise)?i.call(e).done(r).fail(t):e&&n(i=e.then)?i.call(e,r,t):r.apply(void 0,[e].slice(o))}catch(e){t.apply(void 0,[e])}}return e.extend({Deferred:function(r){var i=[["notify","progress",e.Callbacks("memory"),e.Callbacks("memory"),2],["resolve","done",e.Callbacks("once memory"),e.Callbacks("once memory"),0,"resolved"],["reject","fail",e.Callbacks("once memory"),e.Callbacks("once memory"),1,"rejected"]],c="pending",a={state:function(){return c},always:function(){return l.done(arguments).fail(arguments),this},catch:function(e){return a.then(null,e)},pipe:function(){var r=arguments;return e.Deferred(function(t){e.each(i,function(e,o){var i=n(r[o[4]])&&r[o[4]];l[o[1]](function(){var e=i&&i.apply(this,arguments);e&&n(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[o[0]+"With"](this,i?[e]:arguments)})}),r=null}).promise()},then:function(r,c,a){function l(r,i,c,a){return function(){var s=this,u=arguments,d=function(){var e,d;if(!(r<f)){if((e=c.apply(s,u))===i.promise())throw new TypeError("Thenable self-resolution");d=e&&("object"==typeof e||"function"==typeof e)&&e.then,n(d)?a?d.call(e,l(f,i,t,a),l(f,i,o,a)):(f++,d.call(e,l(f,i,t,a),l(f,i,o,a),l(f,i,t,i.notifyWith))):(c!==t&&(s=void 0,u=[e]),(a||i.resolveWith)(s,u))}},h=a?d:function(){try{d()}catch(n){e.Deferred.exceptionHook&&e.Deferred.exceptionHook(n,h.stackTrace),r+1>=f&&(c!==o&&(s=void 0,u=[n]),i.rejectWith(s,u))}};r?h():(e.Deferred.getStackHook&&(h.stackTrace=e.Deferred.getStackHook()),window.setTimeout(h))}}var f=0;return e.Deferred(function(e){i[0][3].add(l(0,e,n(a)?a:t,e.notifyWith)),i[1][3].add(l(0,e,n(r)?r:t)),i[2][3].add(l(0,e,n(c)?c:o))}).promise()},promise:function(n){return null!=n?e.extend(n,a):a}},l={};return e.each(i,function(e,n){var r=n[2],t=n[5];a[n[1]]=r.add,t&&r.add(function(){c=t},i[3-e][2].disable,i[3-e][3].disable,i[0][2].lock,i[0][3].lock),r.add(n[3].fire),l[n[0]]=function(){return l[n[0]+"With"](this===l?void 0:this,arguments),this},l[n[0]+"With"]=r.fireWith}),a.promise(l),r&&r.call(l,l),l},when:function(t){var o=arguments.length,c=o,a=Array(c),l=r.call(arguments),f=e.Deferred(),s=function(e){return function(n){a[e]=this,l[e]=arguments.length>1?r.call(arguments):n,--o||f.resolveWith(a,l)}};if(o<=1&&(i(t,f.done(s(c)).resolve,f.reject,!o),"pending"===f.state()||n(l[c]&&l[c].then)))return f.then();for(;c--;)i(l[c],s(c),f.reject);return f.promise()}}),e});