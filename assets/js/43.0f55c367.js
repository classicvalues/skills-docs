(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{445:function(t,s,a){"use strict";a.r(s);var i={name:"FormAndPki",props:{pkiPath:{type:String,required:!0},formPath:{type:String,required:!0}},data:function(){return{tabItems:[]}},mounted:function(){this.tabItems=this.getNavItems()},computed:{passwordAuthInstallVisible:function(){return this.$themeConfig.visibility.passwordAuthInstall},pkiAuthInstallVisible:function(){return this.$themeConfig.visibility.pkiAuthInstall}},methods:{getNavItems:function(){var t=[{name:"<b>PKI Auth</b> Install",path:this.pkiPath,icon:"fas fa-key",helpUrl:"/dashboard/install-guide/installModes.html#pki-auth-mode"},{name:"<b>Password Auth</b> Install",path:this.formPath,icon:"fab fa-wpforms",helpUrl:"/dashboard/install-guide/installModes.html#password-auth-mode"}];return"form"===this.$themeConfig.installType&&(t=t.reverse()),t}}},e=a(41),n=Object(e.a)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"my-3"},[t.passwordAuthInstallVisible&&!t.pkiAuthInstallVisible?a("div",[a("import-content",{staticClass:"mt-3",attrs:{path:this.formPath}})],1):t._e(),t._v(" "),t.pkiAuthInstallVisible&&!t.passwordAuthInstallVisible?a("div",[a("import-content",{staticClass:"mt-3",attrs:{path:this.pkiPath}})],1):t._e(),t._v(" "),t.passwordAuthInstallVisible&&t.pkiAuthInstallVisible?a("b-tabs",{attrs:{"content-class":"mt-3"}},t._l(t.tabItems,(function(s){return a("b-tab",{key:s.name,scopedSlots:t._u([{key:"title",fn:function(){return[a("i",{staticClass:"mr-1",class:s.icon}),t._v(" "),a("span",{domProps:{innerHTML:t._s(s.name)}})]},proxy:!0}],null,!0)},[a("div",{staticClass:"text-right text-secondary",staticStyle:{"font-size":"0.8rem"}},[t._v("Visit to learn about this mode:\n                "),a("a",{attrs:{href:t.$withBase(s.helpUrl),target:"_blank"}},[a("span",{domProps:{innerHTML:t._s(s.name)}}),t._v(" "),a("i",{staticClass:"fas fa-external-link-alt"})])]),t._v(" "),t._v(" "),a("import-content",{staticClass:"mt-3",attrs:{path:s.path}})],1)})),1):t._e()],1)}),[],!1,null,"fff2fea8",null);s.default=n.exports}}]);