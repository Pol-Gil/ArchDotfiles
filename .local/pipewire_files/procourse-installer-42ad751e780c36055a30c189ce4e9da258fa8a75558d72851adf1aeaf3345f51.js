define("discourse/plugins/procourse-installer/discourse/routes/admin-plugins-procourse-installer-index",["exports","discourse/routes/discourse"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;t=t.default.extend({model:function(){return{plugin_url:""}},setupController:function(e,t){e.setProperties({model:t})}});e.default=t}),Ember.TEMPLATES["javascripts/admin/plugins-procourse-installer-installed"]=Ember.HTMLBars.template({id:null,block:'{"symbols":["item"],"statements":[[4,"conditional-loading-spinner",null,[["condition"],[[24,["loading"]]]],{"statements":[[0,"\\n"],[7,"table",true],[10,"class","table grid"],[8],[0,"\\n"],[4,"if",[[24,["plugins","length"]]],null,{"statements":[[0,"    "],[7,"thead",true],[8],[0,"\\n      "],[7,"th",true],[8],[0,"Plugin"],[9],[0,"\\n      "],[7,"th",true],[8],[0,"Installed On"],[9],[0,"\\n      "],[7,"th",true],[8],[0,"Installed By"],[9],[0,"\\n      "],[7,"th",true],[8],[9],[0,"\\n    "],[9],[0,"\\n    "],[7,"tbody",true],[8],[0,"\\n"],[4,"each",[[24,["plugins"]]],null,{"statements":[[0,"        "],[7,"tr",true],[10,"class","admin-list-item"],[8],[0,"\\n\\t  "],[7,"td",true],[10,"class","col"],[8],[1,[23,1,["name"]],false],[9],[0,"\\n\\t  "],[7,"td",true],[10,"class","col"],[8],[1,[23,1,["installed_on"]],false],[9],[0,"\\n\\t  "],[7,"td",true],[10,"class","col"],[8],[1,[23,1,["installed_by"]],false],[9],[0,"\\n\\t  "],[7,"td",true],[10,"class","col"],[8],[1,[28,"d-button",null,[["class","icon","action","disabled","title"],["btn btn-danger uninstall","trash",[28,"action",[[23,0,[]],"uninstall",[23,1,["name"]]],null],[24,["uninstalling"]],"procourse_installer.uninstall"]]],false],[9],[0,"\\n\\t"],[9],[0,"\\n"]],"parameters":[1]},null],[0,"    "],[9],[0,"\\n"]],"parameters":[]},null],[9],[0,"\\n"]],"parameters":[]},null],[4,"if",[[24,["uninstalling"]]],null,{"statements":[[7,"h3",true],[8],[0,"Uninstalling Plugin"],[9],[0,"\\n"],[1,[28,"progress-bar",null,[["percent"],[[24,["percent"]]]]],false],[0,"\\n"],[1,[28,"x-console",null,[["output","followOutput"],[[24,["output"]],true]]],false],[0,"\\n"]],"parameters":[]},null],[4,"if",[[24,["installed"]]],null,{"statements":[[7,"span",true],[10,"class","installed-plugin"],[8],[1,[28,"i18n",["procourse_installer.uninstalled"],null],false],[9],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"javascripts/discourse/templates/admin/plugins-procourse-installer-installed"}}),Ember.TEMPLATES["javascripts/admin/plugins-procourse-installer-index"]=Ember.HTMLBars.template({id:null,block:'{"symbols":[],"statements":[[7,"div",true],[10,"class","procourse-installer"],[8],[0,"\\n  "],[7,"h2",true],[8],[0,"ProCourse Installer"],[9],[0,"\\n  "],[7,"div",true],[10,"class","control-group"],[8],[0,"\\n    "],[7,"label",true],[10,"class","control-label"],[8],[1,[28,"i18n",["procourse_installer.plugin_url"],null],false],[9],[0,"\\n    "],[7,"div",true],[10,"class","controls"],[8],[0,"\\n      "],[1,[28,"input",null,[["type","value","class","id"],["text",[24,["model","plugin_url"]],"input-xxlarge","plugin-url"]]],false],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n  "],[4,"d-button",null,[["action","disabled","class"],[[28,"action",[[23,0,[]],"install"],null],[24,["installing"]],"btn btn-primary install-plugin"]],{"statements":[[1,[28,"i18n",["procourse_installer.install"],null],false]],"parameters":[]},null],[0,"\\n\\n"],[4,"if",[[24,["installing"]]],null,{"statements":[[0,"    "],[7,"h3",true],[8],[0,"Installing Plugin"],[9],[0,"\\n    "],[1,[28,"progress-bar",null,[["percent"],[[24,["percent"]]]]],false],[0,"\\n    "],[1,[28,"x-console",null,[["output","followOutput"],[[24,["output"]],true]]],false],[0,"\\n"]],"parameters":[]},null],[4,"if",[[24,["installed"]]],null,{"statements":[[0,"    "],[7,"span",true],[10,"class","installed-plugin"],[8],[1,[28,"i18n",["procourse_installer.installed"],null],false],[9],[0,"\\n"]],"parameters":[]},null],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"javascripts/discourse/templates/admin/plugins-procourse-installer-index"}}),Ember.TEMPLATES["javascripts/admin/plugins-procourse-installer"]=Ember.HTMLBars.template({id:null,block:'{"symbols":[],"statements":[[4,"admin-nav",null,null,{"statements":[[0,"\\t"],[1,[28,"nav-item",null,[["route","label"],["adminPlugins.procourse-installer.index","admin.procourse-installer.titles.install"]]],false],[0,"\\n\\t"],[1,[28,"nav-item",null,[["route","label"],["adminPlugins.procourse-installer.installed","admin.procourse-installer.titles.installed"]]],false],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[7,"div",true],[10,"class","admin-container"],[8],[0,"\\n  "],[1,[22,"outlet"],false],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"javascripts/discourse/templates/admin/plugins-procourse-installer"}}),Ember.TEMPLATES["javascripts/components/x-console"]=Ember.HTMLBars.template({id:null,block:'{"symbols":[],"statements":[[1,[22,"output"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"javascripts/discourse/templates/components/x-console"}}),Ember.TEMPLATES["javascripts/components/progress-bar"]=Ember.HTMLBars.template({id:null,block:'{"symbols":[],"statements":[[7,"progress",true],[10,"max","100"],[11,"value",[29,[[22,"progress"]]]],[8],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"javascripts/discourse/templates/components/progress-bar"}}),define("discourse/plugins/procourse-installer/discourse/models/installer-plugin",["exports","discourse/lib/ajax"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={findAll:function(){return(0,t.ajax)("/procourse-installer/installed")},findById:function(){},getState:function(){return(0,t.ajax)("/procourse-installer/install")},install:function(e){return(0,t.ajax)("/procourse-installer/install",{data:JSON.stringify({plugin_url:e}),type:"POST",dataType:"json",contentType:"application/json"})},uninstall:function(e){return(0,t.ajax)("/procourse-installer/uninstall/".concat(e),{type:"DELETE",dataType:"json",contentType:"application/json"})}};e.default=s}),define("discourse/plugins/procourse-installer/discourse/controllers/admin-plugins-procourse-installer-index",["exports","../models/installer-plugin"],function(e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=Ember.Controller.extend({output:null,percent:"0",_init:function(){var t=this;s.default.getState().then(function(e){e&&(t.set("installing",!0),t.set("output",""),t.set("installed",!1),t.startBus())})}.on("init"),messageReceived:function(e){switch(e.type){case"log":this.set("output",this.get("output")+e.value+"\n");break;case"percent":this.set("percent",e.value);break;case"status":this.set("status",e.value),"complete"===e.value&&(this.set("installed",!0),this.set("installing",!1)),"complete"!==e.value&&"failed"!==e.value||(this.updateAttribute("upgrading",!1),this.set("installing",!1),this.stopBus())}},startBus:function(){var t=this;MessageBus.subscribe("/docker/upgrade",function(e){t.messageReceived(e)})},stopBus:function(){MessageBus.unsubscribe("/docker/upgrade")},actions:{install:function(){this.set("installing",!0),this.set("output",""),this.set("installed",!1),this.startBus(),s.default.install(this.get("model").plugin_url)}}});e.default=t}),define("discourse/plugins/procourse-installer/discourse/controllers/admin-plugins-procourse-installer-installed",["exports","../models/installer-plugin"],function(e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=Ember.Controller.extend({loading:!1,output:null,percent:"0",messageReceived:function(e){var t=this;switch(e.type){case"log":this.set("output",this.get("output")+e.value+"\n");break;case"percent":this.set("percent",e.value);break;case"status":this.set("status",e.value),"complete"===e.value&&(this.set("uninstalled",!0),this.set("uninstalling",!1),this.set("loading",!0),n.default.findAll().then(function(e){t.set("plugins",e),t.set("loading",!1)})),"complete"!==e.value&&"failed"!==e.value||this.stopBus()}},startBus:function(){var t=this;MessageBus.subscribe("/docker/upgrade",function(e){t.messageReceived(e)})},stopBus:function(){MessageBus.unsubscribe("/docker/upgrade")},_init:function(){var t=this;this.set("loading",!0),n.default.findAll().then(function(e){t.set("plugins",e),t.set("loading",!1)})}.on("init"),actions:{uninstall:function(t){var s=this;bootbox.confirm(I18n.t("admin.procourse-installer.remove.modal",{plugin_name:t}),I18n.t("no_value"),I18n.t("yes_value"),function(e){e&&(s.set("uninstalling",!0),s.set("output",""),s.set("uninstalled",!1),s.startBus(),n.default.uninstall(t))})}}});e.default=t}),define("discourse/plugins/procourse-installer/discourse/admin-plugins-procourse-installer-route-map",["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={resource:"admin.adminPlugins",path:"/plugins",map:function(){this.route("procourse-installer",function(){this.route("index",{path:"/"}),this.route("installed")})}}}),define("discourse/plugins/procourse-installer/discourse/components/x-console",["exports","ember-addons/ember-computed-decorators"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=Ember.Component.extend({classNameBindings:[":logs"],_outputChanged:function(){Ember.run.scheduleOnce("afterRender",this,"_scrollBottom")}.observes("output"),_scrollBottom:function(){this.get("followOutput")&&this.$().scrollTop(this.$()[0].scrollHeight)},didInsertElement:function(){this._super.apply(this,arguments),this._scrollBottom()}});e.default=s}),define("discourse/plugins/procourse-installer/discourse/components/progress-bar",["exports","ember-addons/ember-computed-decorators"],function(e,t){"use strict";var s,n;function l(s,n,e,t,l){var i={};return Object.keys(t).forEach(function(e){i[e]=t[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=e.slice().reverse().reduce(function(e,t){return t(s,n,e)||e},i),l&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(l):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(s,n,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;t=Ember.Component.extend((s=(0,t.default)("percent"),n=(0,t.default)("percent"),l(t={classNameBindings:[":progress",":progress-striped","active"],active:function(e){return 100!==parseInt(e,10)},progress:function(e){return parseInt(e,10)}},"active",[s],Object.getOwnPropertyDescriptor(t,"active"),t),l(t,"progress",[n],Object.getOwnPropertyDescriptor(t,"progress"),t),t));e.default=t});
//# sourceMappingURL=/assets/plugins/procourse-installer-42ad751e780c36055a30c189ce4e9da258fa8a75558d72851adf1aeaf3345f51.js.map