webpackJsonp([3],{422:function(e,t,n){function a(e){n(443)}var o=n(33)(n(430),n(448),a,"data-v-2f661e03",null);e.exports=o.exports},427:function(e,t,n){"use strict";t.__esModule=!0;var a=n(158),o=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=function(e){return function(){var t=e.apply(this,arguments);return new o.default(function(e,n){function a(r,i){try{var s=t[r](i),u=s.value}catch(e){return void n(e)}if(!s.done)return o.default.resolve(u).then(function(e){a("next",e)},function(e){a("throw",e)});e(u)}return a("next")})}}},428:function(e,t,n){e.exports=n(429)},429:function(e,t,n){(function(t){var a="object"==typeof t?t:"object"==typeof window?window:"object"==typeof self?self:this,o=a.regeneratorRuntime&&Object.getOwnPropertyNames(a).indexOf("regeneratorRuntime")>=0,r=o&&a.regeneratorRuntime;if(a.regeneratorRuntime=void 0,e.exports=n(159),o)a.regeneratorRuntime=r;else try{delete a.regeneratorRuntime}catch(e){a.regeneratorRuntime=void 0}}).call(t,n(111))},430:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(428),o=n.n(a),r=n(158),i=n.n(r),s=n(427),u=n.n(s),c=n(53),l=n.n(c),p=n(54);t.default={name:"detail",methods:l()({},n.i(p.b)("appShell/appHeader",["setAppHeader"]),n.i(p.b)("appShell/appBottomNavigator",["hideBottomNav"])),asyncData:function(){var e=this;return u()(o.a.mark(function t(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new i.a(function(e,t){setTimeout(e,500)});case 2:case"end":return e.stop()}},t,e)}))()},created:function(){this.setAppHeader({show:!0,title:"Lavas",showMenu:!1,showBack:!0,showLogo:!1,actions:[{icon:"home",route:{name:"home"}}]}),this.hideBottomNav()}}},438:function(e,t,n){t=e.exports=n(420)(!0),t.push([e.i,".detail-content[data-v-2f661e03]{font-size:16px;line-height:30px;margin-top:30px}.detail-content .detail-title[data-v-2f661e03]{margin-bottom:20px;padding:10px 0;font-size:36px;font-weight:700}","",{version:3,sources:["/Users/chenqiushi/Dev/temp/appshell-demo/src/pages/Detail.vue"],names:[],mappings:"AACA,iCACE,eAAgB,AAChB,iBAAkB,AAClB,eAAiB,CAClB,AACD,+CACE,mBAAoB,AACpB,eAAgB,AAChB,eAAgB,AAChB,eAAkB,CACnB",file:"Detail.vue",sourcesContent:["\n.detail-content[data-v-2f661e03] {\n  font-size: 16px;\n  line-height: 30px;\n  margin-top: 30px;\n}\n.detail-content .detail-title[data-v-2f661e03] {\n  margin-bottom: 20px;\n  padding: 10px 0;\n  font-size: 36px;\n  font-weight: bold;\n}"],sourceRoot:""}])},443:function(e,t,n){var a=n(438);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(421)("2b88a6f2",a,!0)},448:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"detail-wrapper"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs10:"","offset-xs1":""}},[n("article",{staticClass:"detail-content text-xs-center"},[n("header",{staticClass:"detail-title text-xs-center"},[e._v("\n                        Detail "+e._s(e.$route.params.id)+"\n                    ")]),e._v(" "),n("router-link",{attrs:{to:{name:"detail",params:{id:Number(e.$route.params.id)+1}}}},[e._v("\n                        Detail "+e._s(Number(e.$route.params.id)+1)+"\n                    ")]),e._v(" "),n("p",[e._v("\n                    Progressive Web Apps are user experiences that have the reach of the web, and are:\nReliable - Load instantly and never show the downasaur, even in uncertain network conditions.\nFast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.\n                    ")])],1)])],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=3.fc5008be1034563023cf.js.map