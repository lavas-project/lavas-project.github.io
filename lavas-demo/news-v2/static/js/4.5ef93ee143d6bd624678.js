webpackJsonp([4],{455:function(t,e,a){function i(t){a(501)}var n=a(60)(a(517),a(490),i,"data-v-2afea9bb",null);t.exports=n.exports},473:function(t,e,a){e=t.exports=a(449)(!0),e.push([t.i,".user-avatar[data-v-2afea9bb]{color:#333;margin:50px auto 20px;display:flex;justify-content:center;flex-direction:column}.user-avatar-icon[data-v-2afea9bb]{width:80px;height:80px;border-radius:50%;background:#666;font-size:70px}.user-item-count[data-v-2afea9bb]{height:24px;width:24px;border-radius:24px;background:#ccc;font-size:14px;line-height:24px;color:#fff;font-weight:700;vertical-align:middle}","",{version:3,sources:["/Users/fake/work/lavas-project/lavas-demo-news/src/pages/User.vue"],names:[],mappings:"AACA,8BACE,WAAY,AACZ,sBAAuB,AACvB,aAAc,AACd,uBAAwB,AACxB,qBAAuB,CACxB,AACD,mCACE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,gBAAiB,AACjB,cAAgB,CACjB,AACD,kCACE,YAAa,AACb,WAAY,AACZ,mBAAoB,AACpB,gBAAiB,AACjB,eAAgB,AAChB,iBAAkB,AAClB,WAAY,AACZ,gBAAkB,AAClB,qBAAuB,CACxB",file:"User.vue",sourcesContent:["\n.user-avatar[data-v-2afea9bb] {\n  color: #333;\n  margin: 50px auto 20px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n.user-avatar-icon[data-v-2afea9bb] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: #666;\n  font-size: 70px;\n}\n.user-item-count[data-v-2afea9bb] {\n  height: 24px;\n  width: 24px;\n  border-radius: 24px;\n  background: #ccc;\n  font-size: 14px;\n  line-height: 24px;\n  color: #fff;\n  font-weight: bold;\n  vertical-align: middle;\n}"],sourceRoot:""}])},490:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-user-page"},[a("div",{staticClass:"app-user-title text-xs-center"},[a("div",{staticClass:"user-avatar"},[a("p",[a("v-icon",{staticClass:"user-avatar-icon",attrs:{light:""}},[t._v("face")])],1),t._v(" "),a("p",[t._v("Lavas")])]),t._v(" "),a("v-list",{attrs:{"two-line":""}},t._l(t.items,function(e){return a("v-list-item",{key:e.title},[a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-avatar",[a("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))]),t._v(" "),a("v-list-tile-sub-title",[t._v(t._s(e.subtitle))])],1),t._v(" "),a("v-list-tile-action",[e.count?a("span",{staticClass:"user-item-count"},[t._v(t._s(e.count))]):t._e()])],1)],1)}))],1)])},staticRenderFns:[]}},501:function(t,e,a){var i=a(473);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(450)("5ed59b17",i,!0)},517:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(122),n=a.n(i),s=a(80),o=a.n(s),r=a(121),c=a.n(r),A=a(78),l=a.n(A),u=a(77);e.default={name:"user",data:function(){return{items:[{title:"Photos",icon:"photo_library",subtitle:"Jan 9, 2014"},{title:"Favorites",icon:"favorite",subtitle:"Feb 9, 2016"},{title:"Work",icon:"work",subtitle:"Nov 9, 2017"}]}},methods:l()({},a.i(u.b)("appShell/appHeader",["setAppHeader"]),a.i(u.b)("appShell/appBottomNavigator",["showBottomNav","activateBottomNav"])),activated:function(){this.setAppHeader({show:!0,title:"Lavas",showMenu:!0,showBack:!1,showLogo:!0,actions:[{icon:"search",route:"/search"}]}),this.activateBottomNav("user"),this.showBottomNav()},asyncData:function(t){var e=this;t.store,t.route;return c()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new o.a(function(t){setTimeout(t,1e3)});case 2:case"end":return t.stop()}},t,e)}))()}}}});
//# sourceMappingURL=4.5ef93ee143d6bd624678.js.map