define(["../core","../core/nodeName"],function(e,r){function n(n,o){var t;return t=void 0!==n.getElementsByTagName?n.getElementsByTagName(o||"*"):void 0!==n.querySelectorAll?n.querySelectorAll(o||"*"):[],void 0===o||o&&r(n,o)?e.merge([n],t):t}return n});