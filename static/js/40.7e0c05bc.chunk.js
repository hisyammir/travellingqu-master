(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1006:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},1009:function(e,a,t){"use strict";var n=t(45),s=t(197),r=t(2),o=t.n(r),l=t(62),c=t.n(l),i=t(1004),u=t.n(i),d=t(1005),b={tag:d.p,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var a=e.className,t=e.cssModule,r=e.color,l=e.body,c=e.inverse,i=e.outline,b=e.tag,p=e.innerRef,m=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(d.l)(u()(a,"card",!!c&&"text-white",!!l&&"card-body",!!r&&(i?"border":"bg")+"-"+r),t);return o.a.createElement(b,Object(n.a)({},m,{className:f,ref:p}))};p.propTypes=b,p.defaultProps={tag:"div"},a.a=p},1010:function(e,a,t){"use strict";var n=t(45),s=t(197),r=t(2),o=t.n(r),l=t(62),c=t.n(l),i=t(1004),u=t.n(i),d=t(1005),b={tag:d.p,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,l=e.tag,c=Object(s.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.l)(u()(a,"card-body"),t);return o.a.createElement(l,Object(n.a)({},c,{className:i,ref:r}))};p.propTypes=b,p.defaultProps={tag:"div"},a.a=p},1011:function(e,a,t){"use strict";var n=t(45),s=t(197),r=t(2),o=t.n(r),l=t(62),c=t.n(l),i=t(1004),u=t.n(i),d=t(1005),b={tag:d.p,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool},p=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,l=e.tag,c=e.form,i=Object(s.a)(e,["className","cssModule","noGutters","tag","form"]),b=Object(d.l)(u()(a,r?"no-gutters":null,c?"form-row":"row"),t);return o.a.createElement(l,Object(n.a)({},i,{className:b}))};p.propTypes=b,p.defaultProps={tag:"div"},a.a=p},1012:function(e,a,t){"use strict";var n=t(45),s=t(197),r=t(1006),o=t.n(r),l=t(2),c=t.n(l),i=t(62),u=t.n(i),d=t(1004),b=t.n(d),p=t(1005),m=u.a.oneOfType([u.a.number,u.a.string]),f=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),order:m,offset:m})]),g={tag:p.p,xs:f,sm:f,md:f,lg:f,xl:f,className:u.a.string,cssModule:u.a.object,widths:u.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,r=e.widths,l=e.tag,i=Object(s.a)(e,["className","cssModule","widths","tag"]),u=[];r.forEach(function(a,n){var s=e[a];if(delete i[a],s||""===s){var r=!n;if(o()(s)){var l,c=r?"-":"-"+a+"-",d=j(r,a,s.size);u.push(Object(p.l)(b()(((l={})[d]=s.size||""===s.size,l["order"+c+s.order]=s.order||0===s.order,l["offset"+c+s.offset]=s.offset||0===s.offset,l)),t))}else{var m=j(r,a,s);u.push(m)}}}),u.length||u.push("col");var d=Object(p.l)(b()(a,u),t);return c.a.createElement(l,Object(n.a)({},i,{className:d}))};E.propTypes=g,E.defaultProps=v,a.a=E},1013:function(e,a,t){"use strict";var n=t(45),s=t(197),r=t(2),o=t.n(r),l=t(62),c=t.n(l),i=t(1004),u=t.n(i),d=t(1005),b={tag:d.p,className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.tag,l=Object(s.a)(e,["className","cssModule","tag"]),c=Object(d.l)(u()(a,"card-header"),t);return o.a.createElement(r,Object(n.a)({},l,{className:c}))};p.propTypes=b,p.defaultProps={tag:"div"},a.a=p},1015:function(e,a,t){"use strict";var n=t(45),s=t(197),r=t(1007),o=t(93),l=t(2),c=t.n(l),i=t(62),u=t.n(i),d=t(1004),b=t.n(d),p=t(1005),m={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.p,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(r.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],r=e.block,o=e.className,l=e.close,i=e.cssModule,u=e.color,d=e.outline,m=e.size,f=e.tag,g=e.innerRef,v=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof v.children&&(v.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var j="btn"+(d?"-outline":"")+"-"+u,E=Object(p.l)(b()(o,{close:l},l||"btn",l||j,!!m&&"btn-"+m,!!r&&"btn-block",{active:a,disabled:this.props.disabled}),i);v.href&&"button"===f&&(f="a");var O=l?"Close":null;return c.a.createElement(f,Object(n.a)({type:"button"===f&&v.onClick?"button":void 0},v,{className:E,ref:g,onClick:this.onClick,"aria-label":t||O}))},a}(c.a.Component);f.propTypes=m,f.defaultProps={color:"secondary",tag:"button"},a.a=f},1016:function(e,a,t){"use strict";var n=t(45),s=t(197),r=t(2),o=t.n(r),l=t(62),c=t.n(l),i=t(1004),u=t.n(i),d=t(1005),b={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:d.p,responsiveTag:d.p,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},p=function(e){var a=e.className,t=e.cssModule,r=e.size,l=e.bordered,c=e.borderless,i=e.striped,b=e.dark,p=e.hover,m=e.responsive,f=e.tag,g=e.responsiveTag,v=e.innerRef,j=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),E=Object(d.l)(u()(a,"table",!!r&&"table-"+r,!!l&&"table-bordered",!!c&&"table-borderless",!!i&&"table-striped",!!b&&"table-dark",!!p&&"table-hover"),t),O=o.a.createElement(f,Object(n.a)({},j,{ref:v,className:E}));if(m){var h=Object(d.l)(!0===m?"table-responsive":"table-responsive-"+m,t);return o.a.createElement(g,{className:h},O)}return O};p.propTypes=b,p.defaultProps={tag:"table",responsiveTag:"div"},a.a=p},1017:function(e,a,t){"use strict";var n=t(45),s=t(197),r=t(2),o=t.n(r),l=t(62),c=t.n(l),i=t(1004),u=t.n(i),d=t(1005),b={tag:d.p,"aria-label":c.a.string,className:c.a.string,cssModule:c.a.object,role:c.a.string,size:c.a.string,vertical:c.a.bool},p=function(e){var a=e.className,t=e.cssModule,r=e.size,l=e.vertical,c=e.tag,i=Object(s.a)(e,["className","cssModule","size","vertical","tag"]),b=Object(d.l)(u()(a,!!r&&"btn-group-"+r,l?"btn-group-vertical":"btn-group"),t);return o.a.createElement(c,Object(n.a)({},i,{className:b}))};p.propTypes=b,p.defaultProps={tag:"div",role:"group"},a.a=p},1023:function(e,a,t){"use strict";var n=t(45),s=t(197),r=t(2),o=t.n(r),l=t(62),c=t.n(l),i=t(1004),u=t.n(i),d=t(1005),b={color:c.a.string,pill:c.a.bool,tag:d.p,innerRef:c.a.oneOfType([c.a.object,c.a.func,c.a.string]),children:c.a.node,className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.color,l=e.innerRef,c=e.pill,i=e.tag,b=Object(s.a)(e,["className","cssModule","color","innerRef","pill","tag"]),p=Object(d.l)(u()(a,"badge","badge-"+r,!!c&&"badge-pill"),t);return b.href&&"span"===i&&(i="a"),o.a.createElement(i,Object(n.a)({},b,{className:p,ref:l}))};p.propTypes=b,p.defaultProps={color:"secondary",pill:!1,tag:"span"},a.a=p},1093:function(e,a,t){"use strict";a.a=[{id:1,name:"Yan Bastian",lastLogin:"2018/01/01",email:"abcde@gmail.com",role:"UMUM",status:"Active"},{id:2,name:"Budi Darmawan",lastLogin:"2018/01/01",email:"abcde@gmail.com",role:"UMUM",status:"Active"},{id:3,name:"PT.GSP Solution",lastLogin:"2018/02/01",email:"abcde@gmail.com",role:"UMUM",status:"Active"}]},1253:function(e,a,t){"use strict";t.r(a);var n=t(253),s=t(254),r=t(257),o=t(255),l=t(256),c=t(2),i=t.n(c),u=t(1e3),d=t(1023),b=t(1017),p=t(1015),m=t(1011),f=t(1012),g=t(1009),v=t(1013),j=t(1010),E=t(1016),O=t(1093);function h(e){var a,t=e.user,n="/users/userspengguna/".concat(t.id);return i.a.createElement("tr",{key:t.id.toString()},i.a.createElement("th",{scope:"row"},i.a.createElement(u.Link,{to:n},t.id)),i.a.createElement("td",null,i.a.createElement(u.Link,{to:n},t.name)),i.a.createElement("td",null,t.lastLogin),i.a.createElement("td",null,t.role),i.a.createElement("td",null,i.a.createElement(u.Link,{to:n},i.a.createElement(d.a,{color:(a=t.status,"Active"===a?"success":"Inactive"===a?"secondary":"Pending"===a?"warning":"Banned"===a?"danger":"primary")},t.status))),i.a.createElement("td",{className:"mb-3 mb-xl-0 text-center"},i.a.createElement(b.a,null,i.a.createElement(p.a,{color:"primary"},"Edit"),i.a.createElement(p.a,{color:"danger"},"Delete"))))}var N=function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=O.a.filter(function(e){return e.id<10});return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(m.a,null,i.a.createElement(f.a,{xl:8},i.a.createElement(g.a,null,i.a.createElement(v.a,null,i.a.createElement("i",{className:"fa fa-align-justify"})," Users Pengguna"),i.a.createElement(j.a,null,i.a.createElement(E.a,{responsive:!0,hover:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{scope:"col"},"id"),i.a.createElement("th",{scope:"col"},"name"),i.a.createElement("th",{scope:"col"},"LastLogin"),i.a.createElement("th",{scope:"col"},"role"),i.a.createElement("th",{scope:"col"},"status"),i.a.createElement("th",{scope:"col"},"actions"))),i.a.createElement("tbody",null,e.map(function(e,a){return i.a.createElement(h,{key:a,user:e})}))))))))}}]),a}(c.Component);a.default=N}}]);
//# sourceMappingURL=40.7e0c05bc.chunk.js.map