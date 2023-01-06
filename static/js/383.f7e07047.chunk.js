"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[383],{2383:function(e,n,t){t.r(n),t.d(n,{default:function(){return be}});var r=t(1413),i=t(9439),o=t(2791),a=t(9434),l=t(3634),c="NOT_FOUND";var u=function(e,n){return e===n};function s(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,i=void 0===r?u:r,o=t.maxSize,a=void 0===o?1:o,l=t.resultEqualityCheck,s=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,i=0;i<r;i++)if(!e(n[i],t[i]))return!1;return!0}}(i),d=1===a?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:c},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(s):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return c}return{get:r,put:function(n,i){r(n)===c&&(t.unshift({key:n,value:i}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,s);function f(){var n=d.get(arguments);if(n===c){if(n=e.apply(null,arguments),l){var t=d.getEntries(),r=t.find((function(e){return l(e.value,n)}));r&&(n=r.value)}d.put(arguments,n)}return n}return f.clearCache=function(){return d.clear()},f}function d(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function f(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var i=function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o,a=0,l={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(l=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var u=l,s=u.memoizeOptions,f=void 0===s?t:s,p=Array.isArray(f)?f:[f],x=d(r),m=e.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(p)),v=e((function(){for(var e=[],n=x.length,t=0;t<n;t++)e.push(x[t].apply(null,arguments));return o=m.apply(null,e)}));return Object.assign(v,{resultFunc:c,memoizedResultFunc:m,dependencies:x,lastResult:function(){return o},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),v};return i}var p,x,m,v,h=f(s),b=function(e){return e.contacts.items},Z=function(e){return e.contacts.isLoading},y=function(e){return e.contacts.error},j=function(e){return e.filter.value},g=h([b,j],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),k=t(168),w=t(225),C=w.Z.section(p||(p=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 320px;\n  padding: 20px 15px;\n"]))),z=w.Z.h1(x||(x=(0,k.Z)(["\n  text-align: center;\n  margin-bottom: 15px;\n  font-size: 32px;\n"]))),S=w.Z.h2(m||(m=(0,k.Z)(["\n  text-align: center;\n  margin-bottom: 15px;\n  font-size: 32px;\n"]))),I=t(184),A=function(e){var n=e.headTitle,t=e.title,r=e.children;return(0,I.jsxs)(C,{children:[n&&(0,I.jsx)(z,{children:n}),t&&(0,I.jsx)(S,{children:t}),r]})},D=w.Z.form(v||(v=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),N=t(9913),E=t(4554),q=t(3736);function F(e){var n=e.modalClose,t=(0,a.I0)(),r=(0,o.useState)(""),c=(0,i.Z)(r,2),u=c[0],s=c[1],d=(0,o.useState)(""),f=(0,i.Z)(d,2),p=f[0],x=f[1],m=(0,a.v9)(b).map((function(e){return e.name})),v=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":s(r);break;case"number":x(r);break;default:return}};return(0,I.jsxs)(D,{onSubmit:function(e){e.preventDefault();var r=e.currentTarget;if(m.includes(u))return alert("".concat(u," is already in contacts"));t((0,l.uK)({name:u,number:p})),r.reset(),n()},children:[(0,I.jsx)(N.Z,{label:"Name",variant:"outlined",size:"small",name:"name",type:"text",required:!0,sx:{mb:"15px"},value:u,onChange:v}),(0,I.jsx)(N.Z,{label:"Number",variant:"outlined",size:"small",name:"number",type:"tel",required:!0,sx:{mb:"15px"},value:p,onChange:v}),(0,I.jsxs)(E.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,I.jsx)(q.Z,{variant:"contained",type:"submit",sx:{mb:2,width:"65%"},children:"Add contact"}),(0,I.jsx)(q.Z,{variant:"contained",type:"button",sx:{width:"65%"},onClick:n,children:"\u0421ancel"})]})]})}var M,R,O=t(4808),T=function(){var e=(0,a.I0)(),n=(0,a.v9)(j);return(0,I.jsx)(N.Z,{label:"Find contacts by name",variant:"outlined",size:"small",name:"filter",type:"text",required:!0,value:n,onChange:function(n){return e((0,O.Tv)(n.target.value))},sx:{mb:"15px"}})},B=w.Z.b(M||(M=(0,k.Z)([""]))),L=function(){return(0,I.jsx)(B,{children:"Request in progress..."})},V=t(3044),_=t(890),H=t(15),P=t(7247),$=t(1286),K=w.Z.form(R||(R=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"])));function U(e){var n=e.currName,t=e.currNumber,r=e.id,c=e.modalClose,u=(0,a.I0)(),s=(0,o.useState)(n),d=(0,i.Z)(s,2),f=d[0],p=d[1],x=(0,o.useState)(t),m=(0,i.Z)(x,2),v=m[0],h=m[1],Z=(0,a.v9)(b).map((function(e){return e.name})),y=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":p(r);break;case"number":h(r);break;default:return}};return(0,I.jsxs)(K,{onSubmit:function(e){e.preventDefault();var n=e.currentTarget;if(Z.includes(f))return alert("".concat(f," is already in contacts"));u((0,l.Tk)({name:f,number:v,id:r})),n.reset(),c()},children:[(0,I.jsx)(N.Z,{label:"Name",variant:"outlined",size:"small",name:"name",type:"text",required:!0,sx:{mb:"15px"},value:f,onChange:y}),(0,I.jsx)(N.Z,{label:"Number",variant:"outlined",size:"small",name:"number",type:"tel",required:!0,sx:{mb:"15px"},value:v,onChange:y}),(0,I.jsxs)(E.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,I.jsx)(q.Z,{variant:"contained",type:"submit",sx:{mb:2,width:"65%"},children:"Update"}),(0,I.jsx)(q.Z,{variant:"contained",type:"button",sx:{width:"65%"},onClick:c,children:"\u0421ancel"})]})]})}var W,G,J=t(9823),Q={position:"absolute",top:"50%",left:"50%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-end",transform:"translate(-50%, -50%)",width:320,bgcolor:"background.paper",border:"1px solid #808080",boxShadow:24,pt:6,px:4,pb:3},X=function(e){var n=e.name,t=e.number,c=e.id,u=o.useState(!1),s=(0,i.Z)(u,2),d=s[0],f=s[1],p=(0,a.I0)(),x=function(){f(!1)};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(V.Z,{sx:{mr:"10px"},children:n[0]}),(0,I.jsxs)(E.Z,{sx:{width:"176px"},children:[(0,I.jsx)(_.Z,{sx:{wordWrap:"break-word"},children:n}),(0,I.jsx)(_.Z,{sx:{wordWrap:"break-word"},children:t})]}),(0,I.jsxs)(E.Z,{sx:{ml:"auto"},children:[(0,I.jsx)(o.Fragment,{children:(0,I.jsx)(H.Z,{hideBackdrop:!0,open:d,onClose:x,"aria-labelledby":"child-modal-title","aria-describedby":"child-modal-description",children:(0,I.jsxs)(E.Z,{sx:(0,r.Z)((0,r.Z)({},Q),{},{width:300}),children:[(0,I.jsx)(J.Z,{sx:{position:"absolute",top:"5%",left:"89%",color:"#808080","&:hover":{color:"#1976d2"}},onClick:x}),(0,I.jsx)(U,{currName:n,currNumber:t,id:c,modalClose:x})]})})}),(0,I.jsxs)(E.Z,{sx:{display:"flex",ml:"10px"},children:[(0,I.jsx)($.Z,{"aria-label":"update",type:"button",sx:{mr:"6px",color:"#808080","&:hover":{color:"#1976d2",scale:"120%"}},onClick:function(e){f(!0)}}),(0,I.jsx)(P.Z,{"aria-label":"delete",type:"button",sx:{color:"#808080","&:hover":{color:"#1976d2",scale:"120%"}},onClick:function(){return p((0,l.GK)(c))}})]})]})]})},Y=w.Z.ul(W||(W=(0,k.Z)(["\n  width: 100%;\n"]))),ee=w.Z.li(G||(G=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n"]))),ne=function(){var e=(0,a.v9)(g);return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(Y,{children:e.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,I.jsx)(ee,{children:(0,I.jsx)(X,{name:t,number:r,id:n})},n)}))})})},te=t(4942),re=t(3366),ie=t(7462),oe=t(1184),ae=t(5682),le=t(8519),ce=t(2466),ue=t(7630),se=t(1046),de=["component","direction","spacing","divider","children"];function fe(e,n){var t=o.Children.toArray(e).filter(Boolean);return t.reduce((function(e,r,i){return e.push(r),i<t.length-1&&e.push(o.cloneElement(n,{key:"separator-".concat(i)})),e}),[])}var pe=(0,ue.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return[n.root]}})((function(e){var n=e.ownerState,t=e.theme,r=(0,ie.Z)({display:"flex",flexDirection:"column"},(0,oe.k9)({theme:t},(0,oe.P$)({values:n.direction,breakpoints:t.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var i=(0,ae.hB)(t),o=Object.keys(t.breakpoints.values).reduce((function(e,t){return("object"===typeof n.spacing&&null!=n.spacing[t]||"object"===typeof n.direction&&null!=n.direction[t])&&(e[t]=!0),e}),{}),a=(0,oe.P$)({values:n.direction,base:o}),l=(0,oe.P$)({values:n.spacing,base:o});"object"===typeof a&&Object.keys(a).forEach((function(e,n,t){if(!a[e]){var r=n>0?a[t[n-1]]:"column";a[e]=r}}));r=(0,ce.Z)(r,(0,oe.k9)({theme:t},l,(function(e,t){return{"& > :not(style) + :not(style)":(0,te.Z)({margin:0},"margin".concat((r=t?a[t]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),(0,ae.NA)(i,e))};var r})))}return r=(0,oe.dt)(t.breakpoints,r)})),xe=o.forwardRef((function(e,n){var t=(0,se.Z)({props:e,name:"MuiStack"}),r=(0,le.Z)(t),i=r.component,o=void 0===i?"div":i,a=r.direction,l=void 0===a?"column":a,c=r.spacing,u=void 0===c?0:c,s=r.divider,d=r.children,f=(0,re.Z)(r,de),p={direction:l,spacing:u};return(0,I.jsx)(pe,(0,ie.Z)({as:o,ownerState:p,ref:n},f,{children:s?fe(d,s):d}))})),me=xe,ve=t(5936),he={position:"absolute",top:"50%",left:"50%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-end",transform:"translate(-50%, -50%)",width:320,bgcolor:"background.paper",border:"1px solid #808080",boxShadow:24,pt:6,px:4,pb:3};function be(){var e=(0,o.useState)(!1),n=(0,i.Z)(e,2),t=n[0],c=n[1],u=(0,a.I0)(),s=(0,a.v9)(Z),d=(0,a.v9)(y);(0,o.useEffect)((function(){u((0,l.yF)())}),[u]);var f=function(){c(!1)};return(0,I.jsx)(E.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:"0 auto",width:320},children:(0,I.jsxs)(A,{title:"Contacts",children:[(0,I.jsx)(T,{}),(0,I.jsx)(me,{direction:"row",spacing:2,sx:{ml:"auto"},children:(0,I.jsx)(q.Z,{size:"large",variant:"text",startIcon:(0,I.jsx)(ve.Z,{}),onClick:function(e){c(!0)},children:"Add"})}),(0,I.jsx)(o.Fragment,{children:(0,I.jsx)(H.Z,{hideBackdrop:!0,open:t,onClose:f,"aria-labelledby":"child-modal-title","aria-describedby":"child-modal-description",children:(0,I.jsxs)(E.Z,{sx:(0,r.Z)((0,r.Z)({},he),{},{width:300}),children:[(0,I.jsx)(J.Z,{sx:{position:"absolute",top:"5%",left:"89%",color:"#808080","&:hover":{color:"#1976d2"}},onClick:f}),(0,I.jsx)(F,{modalClose:f})]})})}),(0,I.jsx)(ne,{}),s&&!d&&(0,I.jsx)(L,{})]})})}},5936:function(e,n,t){var r=t(4836);n.Z=void 0;var i=r(t(5649)),o=t(184),a=(0,i.default)((0,o.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}),"AddBox");n.Z=a},9823:function(e,n,t){var r=t(4836);n.Z=void 0;var i=r(t(5649)),o=t(184),a=(0,i.default)((0,o.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");n.Z=a},7247:function(e,n,t){var r=t(4836);n.Z=void 0;var i=r(t(5649)),o=t(184),a=(0,i.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=a},1286:function(e,n,t){var r=t(4836);n.Z=void 0;var i=r(t(5649)),o=t(184),a=(0,i.default)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");n.Z=a}}]);
//# sourceMappingURL=383.f7e07047.chunk.js.map