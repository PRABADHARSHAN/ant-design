"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[31055],{489705:function(H,f,e){e.d(f,{Z:function(){return D}});var m=e(487462),_=e(667294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},i=o,l=e(713401),t=function(r,E){return _.createElement(l.Z,(0,m.Z)({},r,{ref:E,icon:i}))},D=_.forwardRef(t)},900366:function(H,f,e){e.d(f,{Z:function(){return Ie}});var m=e(601413),_=e(487462),o=e(671002),i=e(297685),l=e(912402),t=e(667294),D=e(602788),I=e(440228),r=e(294184),E=e.n(r),j=e(908410),g=e(821770),h=e(366680);function O(u){var n=window.innerWidth||document.documentElement.clientWidth,a=window.innerHeight||document.documentElement.clientHeight,d=u.getBoundingClientRect(),s=d.top,y=d.right,C=d.bottom,U=d.left;return s>=0&&U>=0&&y<=n&&C<=a}function x(u,n,a){var d;return(d=a!=null?a:n)!==null&&d!==void 0?d:u===null?"center":"bottom"}function A(u,n,a,d){var s=(0,t.useState)(void 0),y=(0,i.Z)(s,2),C=y[0],U=y[1];(0,j.Z)(function(){var P=typeof u=="function"?u():u;U(P||null)});var Z=(0,t.useState)(null),W=(0,i.Z)(Z,2),M=W[0],v=W[1],T=(0,h.Z)(function(){if(C){!O(C)&&n&&C.scrollIntoView(d);var P=C.getBoundingClientRect(),S=P.left,N=P.top,q=P.width,ee=P.height,k={left:S,top:N,width:q,height:ee,radius:0};v(function(G){return JSON.stringify(G)!==JSON.stringify(k)?k:G})}else v(null)}),F=function(S){var N;return(N=Array.isArray(a==null?void 0:a.offset)?a==null?void 0:a.offset[S]:a==null?void 0:a.offset)!==null&&N!==void 0?N:6};(0,j.Z)(function(){return T(),window.addEventListener("resize",T),function(){window.removeEventListener("resize",T)}},[C,n,T]);var K=(0,t.useMemo)(function(){if(!M)return M;var P=F(0),S=F(1),N=(a==null?void 0:a.radius)||2;return{left:M.left-P,top:M.top-S,width:M.width+P*2,height:M.height+S*2,radius:N}},[M,a]);return[K,C]}var B=e(807028),p={fill:"transparent",pointerEvents:"auto"},L=function(n){var a=n.prefixCls,d=n.rootClassName,s=n.pos,y=n.showMask,C=n.style,U=C===void 0?{}:C,Z=n.fill,W=Z===void 0?"rgba(0,0,0,0.5)":Z,M=n.open,v=n.animated,T=n.zIndex,F=(0,B.Z)(),K="".concat(a,"-mask-").concat(F),P=(0,o.Z)(v)==="object"?v==null?void 0:v.placeholder:v;return t.createElement(D.Z,{open:M,autoLock:!0},t.createElement("div",{className:E()("".concat(a,"-mask"),d),style:(0,m.Z)({position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:T,pointerEvents:"none"},U)},y?t.createElement("svg",{style:{width:"100%",height:"100%"}},t.createElement("defs",null,t.createElement("mask",{id:K},t.createElement("rect",{x:"0",y:"0",width:"100vw",height:"100vh",fill:"white"}),s&&t.createElement("rect",{x:s.left,y:s.top,rx:s.radius,width:s.width,height:s.height,fill:"black",className:P?"".concat(a,"-placeholder-animated"):""}))),t.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:W,mask:"url(#".concat(K,")")}),s&&t.createElement(t.Fragment,null,t.createElement("rect",(0,_.Z)({},p,{x:"0",y:"0",width:"100%",height:s.top})),t.createElement("rect",(0,_.Z)({},p,{x:"0",y:"0",width:s.left,height:"100%"})),t.createElement("rect",(0,_.Z)({},p,{x:"0",y:s.top+s.height,width:"100%",height:"calc(100vh - ".concat(s.top+s.height,"px)")})),t.createElement("rect",(0,_.Z)({},p,{x:s.left+s.width,y:"0",width:"calc(100vw - ".concat(s.left+s.width,"px)"),height:"100%"})))):null))},c=L,ae={adjustX:1,adjustY:1},Q=[0,0],oe={left:{points:["cr","cl"],offset:[-8,0]},right:{points:["cl","cr"],offset:[8,0]},top:{points:["bc","tc"],offset:[0,-8]},bottom:{points:["tc","bc"],offset:[0,8]},topLeft:{points:["bl","tl"],offset:[0,-8]},leftTop:{points:["tr","tl"],offset:[-8,0]},topRight:{points:["br","tr"],offset:[0,-8]},rightTop:{points:["tl","tr"],offset:[8,0]},bottomRight:{points:["tr","br"],offset:[0,8]},rightBottom:{points:["bl","br"],offset:[8,0]},bottomLeft:{points:["tl","bl"],offset:[0,8]},leftBottom:{points:["br","bl"],offset:[-8,0]}};function se(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n={};return Object.keys(oe).forEach(function(a){n[a]=(0,m.Z)((0,m.Z)({},oe[a]),{},{autoArrow:u,targetOffset:Q})}),n}var $e=se(),Pe=e(974902);function Oe(u){var n=u.prefixCls,a=u.current,d=u.total,s=u.title,y=u.description,C=u.onClose,U=u.onPrev,Z=u.onNext,W=u.onFinish,M=u.className,v=u.closeIcon,T=v!==!1&&v!==null,F=v!==void 0&&v!==!0?v:t.createElement("span",{className:"".concat(n,"-close-x")},"\xD7");return t.createElement("div",{className:E()("".concat(n,"-content"),M)},t.createElement("div",{className:"".concat(n,"-inner")},T&&t.createElement("button",{type:"button",onClick:C,"aria-label":"Close",className:"".concat(n,"-close")},F),t.createElement("div",{className:"".concat(n,"-header")},t.createElement("div",{className:"".concat(n,"-title")},s)),t.createElement("div",{className:"".concat(n,"-description")},y),t.createElement("div",{className:"".concat(n,"-footer")},t.createElement("div",{className:"".concat(n,"-sliders")},d>1?(0,Pe.Z)(Array.from({length:d}).keys()).map(function(K,P){return t.createElement("span",{key:K,className:P===a?"active":""})}):null),t.createElement("div",{className:"".concat(n,"-buttons")},a!==0?t.createElement("button",{className:"".concat(n,"-prev-btn"),onClick:U},"Prev"):null,a===d-1?t.createElement("button",{className:"".concat(n,"-finish-btn"),onClick:W},"Finish"):t.createElement("button",{className:"".concat(n,"-next-btn"),onClick:Z},"Next")))))}var Ce=function(n){var a=n.current,d=n.renderPanel;return t.createElement(t.Fragment,null,typeof d=="function"?d(n,a):t.createElement(Oe,n))},Me=Ce,De=["prefixCls","steps","defaultCurrent","current","onChange","onClose","onFinish","open","mask","arrow","rootClassName","placement","renderPanel","gap","animated","scrollIntoViewOptions","zIndex","closeIcon"],xe={left:"50%",top:"50%",width:1,height:1},Ae=function(n){var a=n.prefixCls,d=a===void 0?"rc-tour":a,s=n.steps,y=s===void 0?[]:s,C=n.defaultCurrent,U=n.current,Z=n.onChange,W=n.onClose,M=n.onFinish,v=n.open,T=n.mask,F=T===void 0?!0:T,K=n.arrow,P=K===void 0?!0:K,S=n.rootClassName,N=n.placement,q=n.renderPanel,ee=n.gap,k=n.animated,G=n.scrollIntoViewOptions,je=G===void 0?!0:G,le=n.zIndex,ie=le===void 0?1001:le,Te=n.closeIcon,Re=(0,l.Z)(n,De),ue=t.useRef(),Ze=(0,g.default)(0,{value:U,defaultValue:C}),de=(0,i.Z)(Ze,2),b=de[0],ce=de[1],We=(0,g.default)(void 0,{value:v,postState:function(R){return b<0||b>=y.length?!1:R!=null?R:!0}}),fe=(0,i.Z)(We,2),z=fe[0],Se=fe[1],_e=t.useRef(z);(0,j.Z)(function(){z&&!_e.current&&ce(0),_e.current=z},[z]);var V=y[b]||{},Be=V.target,Le=V.placement,Ue=V.style,me=V.arrow,Ke=V.className,te=V.mask,ne=V.scrollIntoViewOptions,re=V.closeIcon,Y=z&&(te!=null?te:F),Ne=re!=null?re:Te,be=ne!=null?ne:je,Fe=A(Be,v,ee,be),ve=(0,i.Z)(Fe,2),Ee=ve[0],J=ve[1],ze=x(J,N,Le),X=J?typeof me=="undefined"?P:me:!1,ge=(0,o.Z)(X)==="object"?X.pointAtCenter:!1;(0,j.Z)(function(){var w;(w=ue.current)===null||w===void 0||w.forceAlign()},[ge,b]);var he=function(R){ce(R),Z==null||Z(R)};if(J===void 0)return null;var pe=function(){Se(!1),W==null||W(b)},Ve=function(){return t.createElement(Me,(0,_.Z)({arrow:X,key:"content",prefixCls:d,total:y.length,renderPanel:q,onPrev:function(){he(b-1)},onNext:function(){he(b+1)},onClose:pe,current:b,onFinish:function(){pe(),M==null||M()},closeIcon:Ne},y[b]))},we=typeof Y=="boolean"?Y:!!Y,$=typeof Y=="boolean"?void 0:Y,He=function(R){return R||J||document.body};return t.createElement(t.Fragment,null,t.createElement(c,{zIndex:ie,prefixCls:d,pos:Ee,showMask:we,style:$==null?void 0:$.style,fill:$==null?void 0:$.color,open:z,animated:k,rootClassName:S}),t.createElement(I.Z,(0,_.Z)({builtinPlacements:se(ge)},Re,{ref:ue,popupStyle:Ue,popupPlacement:ze,popupVisible:z,popupClassName:E()(S,Ke),prefixCls:d,popup:Ve,forceRender:!1,destroyPopupOnHide:!0,zIndex:ie,getTriggerDOMNode:He,arrow:!!X}),t.createElement(D.Z,{open:z,autoLock:!0},t.createElement("div",{className:E()(S,"".concat(d,"-target-placeholder")),style:(0,m.Z)((0,m.Z)({},Ee||xe),{},{position:"fixed",pointerEvents:"none"})}))))},ye=Ae,Ie=ye},649150:function(H,f,e){e.r(f);var m=e(805574),_=e.n(m),o=e(667294),i=e(489705),l=e(988872),t=e(315816),D=e(945016),I=e(739838),r=e(785893),E=function(){var g=(0,o.useRef)(null),h=(0,o.useRef)(null),O=(0,o.useRef)(null),x=(0,o.useState)(!1),A=_()(x,2),B=A[0],p=A[1],L=[{title:"Upload File",description:"Put your files here.",cover:(0,r.jsx)("img",{alt:"tour.png",src:"https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"}),target:function(){return g.current}},{title:"Save",description:"Save your changes.",target:function(){return h.current}},{title:"Other Actions",description:"Click to see other actions.",target:function(){return O.current}}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.ZP,{type:"primary",onClick:function(){return p(!0)},children:"Begin Tour"}),(0,r.jsx)(t.Z,{}),(0,r.jsxs)(D.Z,{children:[(0,r.jsx)(l.ZP,{ref:g,children:" Upload"}),(0,r.jsx)(l.ZP,{ref:h,type:"primary",children:"Save"}),(0,r.jsx)(l.ZP,{ref:O,icon:(0,r.jsx)(i.Z,{})})]}),(0,r.jsx)(I.Z,{open:B,onClose:function(){return p(!1)},steps:L})]})};f.default=E},870219:function(H,f,e){e.r(f);var m=e(805574),_=e.n(m),o=e(489705),i=e(667294),l=e(988872),t=e(315816),D=e(945016),I=e(739838),r=e(785893),E=function(){var g=(0,i.useRef)(null),h=(0,i.useRef)(null),O=(0,i.useRef)(null),x=(0,i.useState)(!1),A=_()(x,2),B=A[0],p=A[1],L=[{title:"Upload File",description:"Put your files here.",target:function(){return g.current}},{title:"Save",description:"Save your changes.",target:function(){return h.current}},{title:"Other Actions",description:"Click to see other actions.",target:function(){return O.current}}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.ZP,{type:"primary",onClick:function(){return p(!0)},children:"Begin Tour"}),(0,r.jsx)(t.Z,{}),(0,r.jsxs)(D.Z,{children:[(0,r.jsx)(l.ZP,{ref:g,children:"Upload"}),(0,r.jsx)(l.ZP,{ref:h,type:"primary",children:"Save"}),(0,r.jsx)(l.ZP,{ref:O,icon:(0,r.jsx)(o.Z,{})})]}),(0,r.jsx)(I.Z,{open:B,onClose:function(){return p(!1)},steps:L,indicatorsRender:function(ae,Q){return(0,r.jsxs)("span",{children:[ae+1," / ",Q]})}})]})};f.default=E},742240:function(H,f,e){e.r(f);var m=e(805574),_=e.n(m),o=e(667294),i=e(489705),l=e(988872),t=e(315816),D=e(945016),I=e(739838),r=e(785893),E=function(){var g=(0,o.useRef)(null),h=(0,o.useRef)(null),O=(0,o.useRef)(null),x=(0,o.useState)(!1),A=_()(x,2),B=A[0],p=A[1],L=[{title:"Upload File",description:"Put your files here.",cover:(0,r.jsx)("img",{alt:"tour.png",src:"https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"}),target:function(){return g.current}},{title:"Save",description:"Save your changes.",target:function(){return h.current},mask:{style:{boxShadow:"inset 0 0 15px #fff"},color:"rgba(40, 0, 255, .4)"}},{title:"Other Actions",description:"Click to see other actions.",target:function(){return O.current},mask:!1}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.ZP,{type:"primary",onClick:function(){return p(!0)},children:"Begin Tour"}),(0,r.jsx)(t.Z,{}),(0,r.jsxs)(D.Z,{children:[(0,r.jsx)(l.ZP,{ref:g,children:" Upload"}),(0,r.jsx)(l.ZP,{ref:h,type:"primary",children:"Save"}),(0,r.jsx)(l.ZP,{ref:O,icon:(0,r.jsx)(i.Z,{})})]}),(0,r.jsx)(I.Z,{open:B,onClose:function(){return p(!1)},steps:L,mask:{style:{boxShadow:"inset 0 0 15px #333"},color:"rgba(80, 255, 255, .4)"}})]})};f.default=E},29332:function(H,f,e){e.r(f);var m=e(805574),_=e.n(m),o=e(667294),i=e(489705),l=e(988872),t=e(315816),D=e(945016),I=e(739838),r=e(785893),E=function(){var g=(0,o.useRef)(null),h=(0,o.useRef)(null),O=(0,o.useRef)(null),x=(0,o.useState)(!1),A=_()(x,2),B=A[0],p=A[1],L=[{title:"Upload File",description:"Put your files here.",cover:(0,r.jsx)("img",{alt:"tour.png",src:"https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"}),target:function(){return g.current}},{title:"Save",description:"Save your changes.",target:function(){return h.current}},{title:"Other Actions",description:"Click to see other actions.",target:function(){return O.current}}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.ZP,{type:"primary",onClick:function(){return p(!0)},children:"Begin non-modal Tour"}),(0,r.jsx)(t.Z,{}),(0,r.jsxs)(D.Z,{children:[(0,r.jsx)(l.ZP,{ref:g,children:" Upload"}),(0,r.jsx)(l.ZP,{ref:h,type:"primary",children:"Save"}),(0,r.jsx)(l.ZP,{ref:O,icon:(0,r.jsx)(i.Z,{})})]}),(0,r.jsx)(I.Z,{open:B,onClose:function(){return p(!1)},mask:!1,type:"primary",steps:L})]})};f.default=E},983405:function(H,f,e){e.r(f);var m=e(805574),_=e.n(m),o=e(667294),i=e(988872),l=e(739838),t=e(785893),D=function(){var r=(0,o.useRef)(null),E=(0,o.useState)(!1),j=_()(E,2),g=j[0],h=j[1],O=[{title:"Center",description:"Displayed in the center of screen.",target:null},{title:"Right",description:"On the right of target.",placement:"right",target:function(){return r.current}},{title:"Top",description:"On the top of target.",placement:"top",target:function(){return r.current}}];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.ZP,{type:"primary",onClick:function(){return h(!0)},ref:r,children:"Begin Tour"}),(0,t.jsx)(l.Z,{open:g,onClose:function(){return h(!1)},steps:O})]})};f.default=D},108559:function(H,f,e){e.r(f);var m=e(667294),_=e(739838),o=e(785893),i=_.Z._InternalPanelDoNotUseOrYouWillBeFired;f.default=function(){return(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",rowGap:16,background:"rgba(50,0,0,0.65)",padding:8},children:[(0,o.jsx)(i,{title:"Hello World!",description:"Hello World?!"}),(0,o.jsx)(i,{title:"Hello World!",description:"Hello World?!",cover:(0,o.jsx)("img",{alt:"tour.png",src:"https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"}),current:5,total:7}),(0,o.jsx)(i,{title:"Hello World!",description:"Hello World?!",type:"primary",current:4,total:5})]})}}}]);
