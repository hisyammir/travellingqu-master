(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1006:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},1009:function(e,a,t){"use strict";var l=t(45),n=t(197),s=t(2),r=t.n(s),c=t(62),o=t.n(c),i=t(1004),u=t.n(i),b=t(1005),d={tag:b.p,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},m=function(e){var a=e.className,t=e.cssModule,s=e.color,c=e.body,o=e.inverse,i=e.outline,d=e.tag,m=e.innerRef,p=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(b.l)(u()(a,"card",!!o&&"text-white",!!c&&"card-body",!!s&&(i?"border":"bg")+"-"+s),t);return r.a.createElement(d,Object(l.a)({},p,{className:g,ref:m}))};m.propTypes=d,m.defaultProps={tag:"div"},a.a=m},1010:function(e,a,t){"use strict";var l=t(45),n=t(197),s=t(2),r=t.n(s),c=t(62),o=t.n(c),i=t(1004),u=t.n(i),b=t(1005),d={tag:b.p,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},m=function(e){var a=e.className,t=e.cssModule,s=e.innerRef,c=e.tag,o=Object(n.a)(e,["className","cssModule","innerRef","tag"]),i=Object(b.l)(u()(a,"card-body"),t);return r.a.createElement(c,Object(l.a)({},o,{className:i,ref:s}))};m.propTypes=d,m.defaultProps={tag:"div"},a.a=m},1011:function(e,a,t){"use strict";var l=t(45),n=t(197),s=t(2),r=t.n(s),c=t(62),o=t.n(c),i=t(1004),u=t.n(i),b=t(1005),d={tag:b.p,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool},m=function(e){var a=e.className,t=e.cssModule,s=e.noGutters,c=e.tag,o=e.form,i=Object(n.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(b.l)(u()(a,s?"no-gutters":null,o?"form-row":"row"),t);return r.a.createElement(c,Object(l.a)({},i,{className:d}))};m.propTypes=d,m.defaultProps={tag:"div"},a.a=m},1012:function(e,a,t){"use strict";var l=t(45),n=t(197),s=t(1006),r=t.n(s),c=t(2),o=t.n(c),i=t(62),u=t.n(i),b=t(1004),d=t.n(b),m=t(1005),p=u.a.oneOfType([u.a.number,u.a.string]),g=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),order:p,offset:p})]),f={tag:m.p,xs:g,sm:g,md:g,lg:g,xl:g,className:u.a.string,cssModule:u.a.object,widths:u.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},j=function(e){var a=e.className,t=e.cssModule,s=e.widths,c=e.tag,i=Object(n.a)(e,["className","cssModule","widths","tag"]),u=[];s.forEach(function(a,l){var n=e[a];if(delete i[a],n||""===n){var s=!l;if(r()(n)){var c,o=s?"-":"-"+a+"-",b=E(s,a,n.size);u.push(Object(m.l)(d()(((c={})[b]=n.size||""===n.size,c["order"+o+n.order]=n.order||0===n.order,c["offset"+o+n.offset]=n.offset||0===n.offset,c)),t))}else{var p=E(s,a,n);u.push(p)}}}),u.length||u.push("col");var b=Object(m.l)(d()(a,u),t);return o.a.createElement(c,Object(l.a)({},i,{className:b}))};j.propTypes=f,j.defaultProps=v,a.a=j},1013:function(e,a,t){"use strict";var l=t(45),n=t(197),s=t(2),r=t.n(s),c=t(62),o=t.n(c),i=t(1004),u=t.n(i),b=t(1005),d={tag:b.p,className:o.a.string,cssModule:o.a.object},m=function(e){var a=e.className,t=e.cssModule,s=e.tag,c=Object(n.a)(e,["className","cssModule","tag"]),o=Object(b.l)(u()(a,"card-header"),t);return r.a.createElement(s,Object(l.a)({},c,{className:o}))};m.propTypes=d,m.defaultProps={tag:"div"},a.a=m},1015:function(e,a,t){"use strict";var l=t(45),n=t(197),s=t(1007),r=t(93),c=t(2),o=t.n(c),i=t(62),u=t.n(i),b=t(1004),d=t.n(b),m=t(1005),p={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:m.p,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],s=e.block,r=e.className,c=e.close,i=e.cssModule,u=e.color,b=e.outline,p=e.size,g=e.tag,f=e.innerRef,v=Object(n.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof v.children&&(v.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var E="btn"+(b?"-outline":"")+"-"+u,j=Object(m.l)(d()(r,{close:c},c||"btn",c||E,!!p&&"btn-"+p,!!s&&"btn-block",{active:a,disabled:this.props.disabled}),i);v.href&&"button"===g&&(g="a");var N=c?"Close":null;return o.a.createElement(g,Object(l.a)({type:"button"===g&&v.onClick?"button":void 0},v,{className:j,ref:f,onClick:this.onClick,"aria-label":t||N}))},a}(o.a.Component);g.propTypes=p,g.defaultProps={color:"secondary",tag:"button"},a.a=g},1016:function(e,a,t){"use strict";var l=t(45),n=t(197),s=t(2),r=t.n(s),c=t(62),o=t.n(c),i=t(1004),u=t.n(i),b=t(1005),d={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:b.p,responsiveTag:b.p,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},m=function(e){var a=e.className,t=e.cssModule,s=e.size,c=e.bordered,o=e.borderless,i=e.striped,d=e.dark,m=e.hover,p=e.responsive,g=e.tag,f=e.responsiveTag,v=e.innerRef,E=Object(n.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),j=Object(b.l)(u()(a,"table",!!s&&"table-"+s,!!c&&"table-bordered",!!o&&"table-borderless",!!i&&"table-striped",!!d&&"table-dark",!!m&&"table-hover"),t),N=r.a.createElement(g,Object(l.a)({},E,{ref:v,className:j}));if(p){var O=Object(b.l)(!0===p?"table-responsive":"table-responsive-"+p,t);return r.a.createElement(f,{className:O},N)}return N};m.propTypes=d,m.defaultProps={tag:"table",responsiveTag:"div"},a.a=m},1017:function(e,a,t){"use strict";var l=t(45),n=t(197),s=t(2),r=t.n(s),c=t(62),o=t.n(c),i=t(1004),u=t.n(i),b=t(1005),d={tag:b.p,"aria-label":o.a.string,className:o.a.string,cssModule:o.a.object,role:o.a.string,size:o.a.string,vertical:o.a.bool},m=function(e){var a=e.className,t=e.cssModule,s=e.size,c=e.vertical,o=e.tag,i=Object(n.a)(e,["className","cssModule","size","vertical","tag"]),d=Object(b.l)(u()(a,!!s&&"btn-group-"+s,c?"btn-group-vertical":"btn-group"),t);return r.a.createElement(o,Object(l.a)({},i,{className:d}))};m.propTypes=d,m.defaultProps={tag:"div",role:"group"},a.a=m},1020:function(e,a,t){"use strict";var l=t(45),n=t(197),s=t(2),r=t.n(s),c=t(62),o=t.n(c),i=t(1004),u=t.n(i),b=t(1005),d={children:o.a.node,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,size:o.a.string,tag:b.p,listTag:b.p,"aria-label":o.a.string},m=function(e){var a,t=e.className,s=e.listClassName,c=e.cssModule,o=e.size,i=e.tag,d=e.listTag,m=e["aria-label"],p=Object(n.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),g=Object(b.l)(u()(t),c),f=Object(b.l)(u()(s,"pagination",((a={})["pagination-"+o]=!!o,a)),c);return r.a.createElement(i,{className:g,"aria-label":m},r.a.createElement(d,Object(l.a)({},p,{className:f})))};m.propTypes=d,m.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},a.a=m},1021:function(e,a,t){"use strict";var l=t(45),n=t(197),s=t(2),r=t.n(s),c=t(62),o=t.n(c),i=t(1004),u=t.n(i),b=t(1005),d={active:o.a.bool,children:o.a.node,className:o.a.string,cssModule:o.a.object,disabled:o.a.bool,tag:b.p},m=function(e){var a=e.active,t=e.className,s=e.cssModule,c=e.disabled,o=e.tag,i=Object(n.a)(e,["active","className","cssModule","disabled","tag"]),d=Object(b.l)(u()(t,"page-item",{active:a,disabled:c}),s);return r.a.createElement(o,Object(l.a)({},i,{className:d}))};m.propTypes=d,m.defaultProps={tag:"li"},a.a=m},1022:function(e,a,t){"use strict";var l=t(45),n=t(197),s=t(2),r=t.n(s),c=t(62),o=t.n(c),i=t(1004),u=t.n(i),b=t(1005),d={"aria-label":o.a.string,children:o.a.node,className:o.a.string,cssModule:o.a.object,next:o.a.bool,previous:o.a.bool,first:o.a.bool,last:o.a.bool,tag:b.p},m=function(e){var a,t=e.className,s=e.cssModule,c=e.next,o=e.previous,i=e.first,d=e.last,m=e.tag,p=Object(n.a)(e,["className","cssModule","next","previous","first","last","tag"]),g=Object(b.l)(u()(t,"page-link"),s);o?a="Previous":c?a="Next":i?a="First":d&&(a="Last");var f,v=e["aria-label"]||a;o?f="\u2039":c?f="\u203a":i?f="\xab":d&&(f="\xbb");var E=e.children;return E&&Array.isArray(E)&&0===E.length&&(E=null),p.href||"a"!==m||(m="button"),(o||c||i||d)&&(E=[r.a.createElement("span",{"aria-hidden":"true",key:"caret"},E||f),r.a.createElement("span",{className:"sr-only",key:"sr"},v)]),r.a.createElement(m,Object(l.a)({},p,{className:g,"aria-label":v}),E)};m.propTypes=d,m.defaultProps={tag:"a"},a.a=m},1226:function(e,a,t){"use strict";t.r(a);var l=t(253),n=t(254),s=t(257),r=t(255),c=t(256),o=t(2),i=t.n(o),u=t(1011),b=t(1012),d=t(1009),m=t(1013),p=t(1010),g=t(1016),f=t(1017),v=t(1015),E=t(1020),j=t(1021),N=t(1022),O=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(u.a,null,i.a.createElement(b.a,null,i.a.createElement(d.a,null,i.a.createElement(m.a,null,i.a.createElement("i",{className:"fa fa-align-justify"})," Kota"),i.a.createElement(p.a,null,i.a.createElement(g.a,{responsive:!0,hover:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Nama Kota"),i.a.createElement("th",null,"Action"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"Banda Aceh"),i.a.createElement("td",{className:"mb-3 mb-xl-0 text-center"},i.a.createElement(f.a,null,i.a.createElement(v.a,{color:"primary"},"Edit"),i.a.createElement(v.a,{color:"danger"},"Delete")))),i.a.createElement("tr",null,i.a.createElement("td",null,"Medan"),i.a.createElement("td",{className:"mb-3 mb-xl-0 text-center"},i.a.createElement(f.a,null,i.a.createElement(v.a,{color:"primary"},"Edit"),i.a.createElement(v.a,{color:"danger"},"Delete")))),i.a.createElement("tr",null,i.a.createElement("td",null,"Changi"),i.a.createElement("td",{className:"mb-3 mb-xl-0 text-center"},i.a.createElement(f.a,null,i.a.createElement(v.a,{color:"primary"},"Edit"),i.a.createElement(v.a,{color:"danger"},"Delete")))))),i.a.createElement("nav",null,i.a.createElement(E.a,null,i.a.createElement(j.a,null,i.a.createElement(N.a,{previous:!0,tag:"button"},"Prev")),i.a.createElement(j.a,{active:!0},i.a.createElement(N.a,{tag:"button"},"1")),i.a.createElement(j.a,null,i.a.createElement(N.a,{tag:"button"},"2")),i.a.createElement(j.a,null,i.a.createElement(N.a,{tag:"button"},"3")),i.a.createElement(j.a,null,i.a.createElement(N.a,{tag:"button"},"4")),i.a.createElement(j.a,null,i.a.createElement(N.a,{next:!0,tag:"button"},"Next")))))))))}}]),a}(o.Component);a.default=O}}]);
//# sourceMappingURL=27.31651682.chunk.js.map