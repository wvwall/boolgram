(function(t){function e(e){for(var i,l,n=e[0],c=e[1],o=e[2],f=0,p=[];f<n.length;f++)l=n[f],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&p.push(a[l][0]),a[l]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,o||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],i=!0,n=1;n<s.length;n++){var c=s[n];0!==a[c]&&(i=!1)}i&&(r.splice(e--,1),t=l(l.s=s[0]))}return t}var i={},a={app:0},r=[];function l(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=i,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(s,i,function(e){return t[e]}.bind(null,i));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/boolgram/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var o=0;o<n.length;o++)e(n[o]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0999":function(t,e,s){t.exports=s.p+"img/profilo.cc32d0ab.jpg"},4781:function(t,e,s){"use strict";s("e45e")},4915:function(t,e,s){"use strict";s("9a01")},"4ed4":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Nav"),s("Main",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},r=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("div",{staticClass:"invisible"}),s("div",{staticClass:"container"},[s("Left",{staticClass:"left"}),s("Right",{staticClass:"right"})],1)])},n=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"stories"},[s("Story")],1),s("div",{staticClass:"posts"},[s("Post")],1)])},o=[],u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box_stories"},t._l(t.stories,(function(e,i){return s("div",{key:i,staticClass:"story"},[s("div",{staticClass:"white_circle"},[s("img",{attrs:{src:e.profile_picture,alt:""}})]),s("small",[t._v(t._s(e.profile_name))])])})),0)},f=[],p=s("bc3a"),v=s.n(p),d={name:"Story",data:function(){return{stories:[]}},mounted:function(){var t=this;v.a.get("https://flynn.boolean.careers/exercises/api/boolgram/profiles").then((function(e){t.stories=e.data}))},props:{}},m=d,_=(s("6ed5"),s("2877")),h=Object(_["a"])(m,u,f,!1,null,"89ec2a98",null),g=h.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box_posts"},t._l(t.posts,(function(e,i){return s("div",{key:i,staticClass:"post"},[s("div",{staticClass:"box_info"},[s("div",{staticClass:"name_profile"},[s("div",{staticClass:"white_circle"},[s("img",{attrs:{src:e.profile_picture,alt:""}})]),s("span",[t._v(t._s(e.profile_fullname))])]),s("div",{staticClass:"circle"},[s("svg",{staticClass:"_8-yf5",attrs:{"aria-label":"Altre opzioni",fill:"#262626",height:"16",role:"img",viewBox:"0 0 48 48",width:"16"}},[s("circle",{attrs:{"clip-rule":"evenodd",cx:"8",cy:"24","fill-rule":"evenodd",r:"4.5"}}),s("circle",{attrs:{"clip-rule":"evenodd",cx:"24",cy:"24","fill-rule":"evenodd",r:"4.5"}}),s("circle",{attrs:{"clip-rule":"evenodd",cx:"40",cy:"24","fill-rule":"evenodd",r:"4.5"}})])])]),s("img",{attrs:{src:e.post_image,alt:""}}),s("div",{staticClass:"box_bottom"},[s("div",{staticClass:"icons_post"},[s("div",{staticClass:"icon_left"},[s("svg",{staticClass:"_8-yf5",attrs:{"aria-label":"Mi piace",fill:"#262626",height:"24",role:"img",viewBox:"0 0 48 48",width:"24"}},[s("path",{attrs:{d:"M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"}})]),s("svg",{staticClass:"_8-yf5",attrs:{"aria-label":"Commenta",fill:"#262626",height:"24",role:"img",viewBox:"0 0 48 48",width:"24"}},[s("path",{attrs:{"clip-rule":"evenodd",d:"M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z","fill-rule":"evenodd"}})]),s("svg",{staticClass:"_8-yf5",attrs:{"aria-label":"Condividi il post",fill:"#262626",height:"24",role:"img",viewBox:"0 0 48 48",width:"24"}},[s("path",{attrs:{d:"M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"}})])]),s("div",{staticClass:"icon_right"},[s("svg",{staticClass:"_8-yf5",attrs:{"aria-label":"Salva",fill:"#8e8e8e",height:"24",role:"img",viewBox:"0 0 48 48",width:"24"}},[s("path",{attrs:{d:"M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"}})])])]),s("div",{staticClass:"box_likes"},[s("img",{attrs:{src:e.likes[0].profile_picture,alt:"profilo"}}),s("small",[t._v(" Piace a "),s("strong",[t._v(t._s(e.likes[0].username))]),t._v(" e "),s("strong",[t._v("altri "+t._s(e.likes.length))])])]),s("div",{staticClass:"box_text"},[s("span",[s("strong",[t._v(t._s(e.profile_name))])]),s("p",[t._v(t._s(e.post_text))])]),s("div",{staticClass:"box_n_comments"},[s("small",[t._v("Totale commenti : "),s("strong",[t._v(t._s(e.comments.length))])])]),s("div",{staticClass:"comments"},[s("strong",[t._v(t._s(e.comments[0].username))]),s("p",[t._v(t._s(e.comments[0].text))])])])])})),0)},C=[],x={name:"Post",data:function(){return{posts:[]}},mounted:function(){var t=this;v.a.get("https://flynn.boolean.careers/exercises/api/boolgram/posts").then((function(e){t.posts=e.data}))},props:{}},y=x,w=(s("4915"),Object(_["a"])(y,b,C,!1,null,"b4be2532",null)),S=w.exports,j={name:"Left",components:{Story:g,Post:S},props:{}},O=j,M=(s("bcff"),Object(_["a"])(O,c,o,!1,null,"750b3720",null)),z=M.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Profile"),s("suggestions")],1)},P=[],E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"user"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:s("0999"),alt:"profilo"}})]),i("div",{staticClass:"info"},[i("span",[i("strong",[t._v("wvwall")])]),i("p",[t._v("Walter Velardo")])]),i("div",{staticClass:"switch"},[i("small",[i("a",{attrs:{href:""}},[t._v("Passa a")])])])])}],B={name:"Profile",props:{}},L=B,T=(s("5e8e"),Object(_["a"])(L,E,k,!1,null,"1d9fd8c0",null)),V=T.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Sugg"},[t._m(0),t._l(t.stories,(function(e,i){return s("div",{key:i,staticClass:"Users"},[s("div",{staticClass:"profile"},[s("img",{attrs:{src:e.profile_picture,alt:""}}),s("div",{staticClass:"profi"},[s("p",[t._v(t._s(e.profile_name))]),s("small",[t._v("Seguito da altri profili simili")])])]),t._m(1,!0)])}))],2)},A=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"perTe"},[s("p",[t._v("Suggerimenti per te")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"segui"},[s("small",[t._v("Segui")])])}],N={name:"Suggestions",data:function(){return{stories:[]}},mounted:function(){var t=this;v.a.get("https://flynn.boolean.careers/exercises/api/boolgram/profiles").then((function(e){t.stories=e.data}))},props:{}},R=N,J=(s("4781"),Object(_["a"])(R,H,A,!1,null,"5baab55b",null)),W=J.exports,D={name:"Right",components:{Profile:V,Suggestions:W},props:{}},F=D,U=Object(_["a"])(F,$,P,!1,null,"085808dc",null),Y=U.exports,q={name:"Main",components:{Left:z,Right:Y},props:{}},G=q,I=(s("5971"),Object(_["a"])(G,l,n,!1,null,"7cdb5e7b",null)),K=I.exports,Q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",[i("div",{staticClass:"container"},[t._m(0),t._m(1),i("div",{staticClass:"icons"},[i("svg",{staticClass:"_8-yf5",attrs:{"aria-label":"Home",fill:"#262626",height:"22",role:"img",viewBox:"0 0 48 48",width:"22"}},[i("path",{attrs:{d:"M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"}})]),i("svg",{staticClass:"_8-yf5",attrs:{"aria-label":"Direct",fill:"#262626",height:"22",role:"img",viewBox:"0 0 48 48",width:"22"}},[i("path",{attrs:{d:"M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"}})]),i("svg",{staticClass:"_8-yf5",attrs:{"aria-label":"Trova persone",fill:"#262626",height:"22",role:"img",viewBox:"0 0 48 48",width:"22"}},[i("path",{attrs:{"clip-rule":"evenodd",d:"M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z","fill-rule":"evenodd"}})]),i("svg",{staticClass:"_8-yf5",attrs:{"aria-label":"Feed attività",fill:"#262626",height:"22",role:"img",viewBox:"0 0 48 48",width:"22"}},[i("path",{attrs:{d:"M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"}})]),i("img",{attrs:{src:s("0999"),alt:"profilo"}})])])])},X=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"logo"},[i("img",{attrs:{alt:"Vue logo",src:s("cf05")}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input"},[s("input",{attrs:{type:"text",name:"input",id:"search",placeholder:"Cerca"}})])}],Z={name:"Nav",props:{}},tt=Z,et=(s("7ffe"),Object(_["a"])(tt,Q,X,!1,null,"01c2886c",null)),st=et.exports,it={name:"App",components:{Main:K,Nav:st}},at=it,rt=(s("5c0b"),Object(_["a"])(at,a,r,!1,null,null,null)),lt=rt.exports,nt=s("2f62");i["a"].use(nt["a"]);var ct=new nt["a"].Store({state:{},mutations:{},actions:{},modules:{}});i["a"].prototype.$http=v.a,i["a"].config.productionTip=!1,new i["a"]({store:ct,render:function(t){return t(lt)}}).$mount("#app")},5971:function(t,e,s){"use strict";s("b7c6")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"5e8e":function(t,e,s){"use strict";s("b8fc")},"6ed5":function(t,e,s){"use strict";s("4ed4")},"7ffe":function(t,e,s){"use strict";s("fcd4")},"9a01":function(t,e,s){},"9c0c":function(t,e,s){},b7c6:function(t,e,s){},b8fc:function(t,e,s){},bcff:function(t,e,s){"use strict";s("e534")},cf05:function(t,e,s){t.exports=s.p+"img/logo.8786c06b.png"},e45e:function(t,e,s){},e534:function(t,e,s){},fcd4:function(t,e,s){}});
//# sourceMappingURL=app.0528b7ba.js.map