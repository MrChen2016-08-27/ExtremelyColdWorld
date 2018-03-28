(function(d){var c=(function(){function e(f,g){this.notify=null;this.context=null;this.setNotifyMethod(f);this.setNotifyContext(g)}e.prototype.getNotifyMethod=function(){return this.notify};e.prototype.setNotifyMethod=function(f){this.notify=f};e.prototype.getNotifyContext=function(){return this.context};e.prototype.setNotifyContext=function(f){this.context=f};e.prototype.notifyObserver=function(f){this.getNotifyMethod().call(this.getNotifyContext(),f)
};e.prototype.compareNotifyContext=function(f){return f===this.context};return e})();d.Observer=c})(b||(b={}));var b;(function(c){var d=(function(){function e(f){this.mediatorMap=null;this.observerMap=null;this.multitonKey=null;if(e.instanceMap[f]){throw Error(e.MULTITON_MSG)}e.instanceMap[f]=this;this.multitonKey=f;this.mediatorMap={};this.observerMap={};this.initializeView()}e.prototype.initializeView=function(){};e.prototype.registerObserver=function(g,f){var h=this.observerMap[g];if(h){h.push(f)
}else{this.observerMap[g]=[f]}};e.prototype.removeObserver=function(j,h){var k=this.observerMap[j];var g=k.length;while(g--){var f=k[g];if(f.compareNotifyContext(h)){k.splice(g,1);break}}if(k.length==0){delete this.observerMap[j]}};e.prototype.notifyObservers=function(k){var j=k.getName();var m=this.observerMap[j];if(m){var l=m.slice(0);var f=l.length;for(var h=0;h<f;h++){var g=l[h];g.notifyObserver(k)}}};e.prototype.registerMediator=function(k){var h=k.getMediatorName();if(this.mediatorMap[h]){return
}k.initializeNotifier(this.multitonKey);this.mediatorMap[h]=k;var l=k.listNotificationInterests();var f=l.length;if(f>0){var g=new c.Observer(k.handleNotification,k);for(var j=0;j<f;j++){this.registerObserver(l[j],g)}}k.onRegister()};e.prototype.retrieveMediator=function(f){return this.mediatorMap[f]||null};e.prototype.removeMediator=function(f){var h=this.mediatorMap[f];if(!h){return null}var j=h.listNotificationInterests();var g=j.length;while(g--){this.removeObserver(j[g],h)}delete this.mediatorMap[f];
h.onRemove();return h};e.prototype.hasMediator=function(f){return this.mediatorMap[f]!=null};e.getInstance=function(f){if(!e.instanceMap[f]){e.instanceMap[f]=new e(f)}return e.instanceMap[f]};e.removeView=function(f){delete e.instanceMap[f]};e.MULTITON_MSG="View instance for this multiton key already constructed!";e.instanceMap={};return e})();c.View=d})(b||(b={}));var b;(function(c){var d=(function(){function e(f){this.view=null;this.commandMap=null;this.multitonKey=null;if(e.instanceMap[f]){throw Error(e.MULTITON_MSG)
}e.instanceMap[f]=this;this.multitonKey=f;this.commandMap={};this.initializeController()}e.prototype.initializeController=function(){this.view=c.View.getInstance(this.multitonKey)};e.prototype.executeCommand=function(f){var h=this.commandMap[f.getName()];if(h){var g=new h();g.initializeNotifier(this.multitonKey);g.execute(f)}};e.prototype.registerCommand=function(f,g){if(!this.commandMap[f]){this.view.registerObserver(f,new c.Observer(this.executeCommand,this))}this.commandMap[f]=g};e.prototype.hasCommand=function(f){return this.commandMap[f]!=null
};e.prototype.removeCommand=function(f){if(this.hasCommand(f)){this.view.removeObserver(f,this);delete this.commandMap[f]}};e.getInstance=function(f){if(!e.instanceMap[f]){e.instanceMap[f]=new e(f)}return e.instanceMap[f]};e.removeController=function(f){delete e.instanceMap[f]};e.MULTITON_MSG="Controller instance for this multiton key already constructed!";e.instanceMap={};return e})();c.Controller=d})(b||(b={}));var b;(function(c){var d=(function(){function e(f){this.proxyMap=null;this.multitonKey=null;
if(e.instanceMap[f]){throw Error(e.MULTITON_MSG)}e.instanceMap[f]=this;this.multitonKey=f;this.proxyMap={};this.initializeModel()}e.prototype.initializeModel=function(){};e.prototype.registerProxy=function(f){f.initializeNotifier(this.multitonKey);this.proxyMap[f.getProxyName()]=f;f.onRegister()};e.prototype.removeProxy=function(g){var f=this.proxyMap[g];if(f){delete this.proxyMap[g];f.onRemove()}return f};e.prototype.retrieveProxy=function(f){return this.proxyMap[f]||null};e.prototype.hasProxy=function(f){return this.proxyMap[f]!=null
};e.getInstance=function(f){if(!e.instanceMap[f]){e.instanceMap[f]=new e(f)}return e.instanceMap[f]};e.removeModel=function(f){delete e.instanceMap[f]};e.MULTITON_MSG="Model instance for this multiton key already constructed!";e.instanceMap={};return e})();c.Model=d})(b||(b={}));var b;(function(c){var d=(function(){function e(g,f,h){if(typeof f==="undefined"){f=null}if(typeof h==="undefined"){h=null}this.name=null;this.body=null;this.type=null;this.name=g;this.body=f;this.type=h}e.prototype.getName=function(){return this.name
};e.prototype.setBody=function(f){this.body=f};e.prototype.getBody=function(){return this.body};e.prototype.setType=function(f){this.type=f};e.prototype.getType=function(){return this.type};e.prototype.toString=function(){var f="Notification Name: "+this.getName();f+="\nBody:"+((this.getBody()==null)?"null":this.getBody().toString());f+="\nType:"+((this.getType()==null)?"null":this.getType());return f};return e})();c.Notification=d})(b||(b={}));var b;(function(d){var c=(function(){function e(f){this.model=null;
this.view=null;this.controller=null;this.multitonKey=null;if(e.instanceMap[f]){throw Error(e.MULTITON_MSG)}this.initializeNotifier(f);e.instanceMap[f]=this;this.initializeFacade()}e.prototype.initializeFacade=function(){this.initializeModel();this.initializeController();this.initializeView()};e.prototype.initializeModel=function(){if(!this.model){this.model=d.Model.getInstance(this.multitonKey)}};e.prototype.initializeController=function(){if(!this.controller){this.controller=d.Controller.getInstance(this.multitonKey)
}};e.prototype.initializeView=function(){if(!this.view){this.view=d.View.getInstance(this.multitonKey)}};e.prototype.registerCommand=function(f,g){this.controller.registerCommand(f,g)};e.prototype.removeCommand=function(f){this.controller.removeCommand(f)};e.prototype.hasCommand=function(f){return this.controller.hasCommand(f)};e.prototype.registerProxy=function(f){this.model.registerProxy(f)};e.prototype.retrieveProxy=function(f){return this.model.retrieveProxy(f)};e.prototype.removeProxy=function(g){var f;
if(this.model){f=this.model.removeProxy(g)}return f};e.prototype.hasProxy=function(f){return this.model.hasProxy(f)};e.prototype.registerMediator=function(f){if(this.view){this.view.registerMediator(f)}};e.prototype.retrieveMediator=function(f){return this.view.retrieveMediator(f)};e.prototype.removeMediator=function(f){var g;if(this.view){g=this.view.removeMediator(f)}return g};e.prototype.hasMediator=function(f){return this.view.hasMediator(f)};e.prototype.notifyObservers=function(f){if(this.view){this.view.notifyObservers(f)
}};e.prototype.sendNotification=function(g,f,h){if(typeof f==="undefined"){f=null}if(typeof h==="undefined"){h=null}this.notifyObservers(new d.Notification(g,f,h))};e.prototype.initializeNotifier=function(f){this.multitonKey=f};e.getInstance=function(f){if(!e.instanceMap[f]){e.instanceMap[f]=new e(f)}return e.instanceMap[f]};e.hasCore=function(f){return e.instanceMap[f]?true:false};e.removeCore=function(f){if(!e.instanceMap[f]){return}d.Model.removeModel(f);d.View.removeView(f);d.Controller.removeController(f);
delete e.instanceMap[f]};e.MULTITON_MSG="Facade instance for this multiton key already constructed!";e.instanceMap={};return e})();d.Facade=c})(b||(b={}));var b;(function(d){var c=(function(){function e(){this.multitonKey=null}e.prototype.initializeNotifier=function(f){this.multitonKey=f};e.prototype.sendNotification=function(g,f,h){if(typeof f==="undefined"){f=null}if(typeof h==="undefined"){h=null}if(this.facade()){this.facade().sendNotification(g,f,h)}};e.prototype.facade=function(){if(this.multitonKey===null){throw Error(e.MULTITON_MSG)
}return d.Facade.getInstance(this.multitonKey)};e.MULTITON_MSG="multitonKey for this Notifier not yet initialized!";return e})();d.Notifier=c})(b||(b={}));var a=this.__extends||function(g,c){for(var f in c){if(c.hasOwnProperty(f)){g[f]=c[f]}}function e(){this.constructor=g}e.prototype=c.prototype;g.prototype=new e()};var b;(function(d){var c=(function(f){a(e,f);function e(){f.call(this);this.subCommands=null;this.subCommands=new Array();this.initializeMacroCommand()}e.prototype.initializeMacroCommand=function(){};
e.prototype.addSubCommand=function(g){this.subCommands.push(g)};e.prototype.execute=function(l){var j=this.subCommands.slice(0);var g=this.subCommands.length;for(var h=0;h<g;h++){var m=j[h];var k=new m();k.initializeNotifier(this.multitonKey);k.execute(l)}this.subCommands.splice(0)};return e})(d.Notifier);d.MacroCommand=c})(b||(b={}));var b;(function(c){var d=(function(e){a(f,e);function f(){e.apply(this,arguments)}f.prototype.execute=function(g){};return f})(c.Notifier);c.SimpleCommand=d})(b||(b={}));
var b;(function(c){var d=(function(e){a(f,e);function f(g,h){if(typeof g==="undefined"){g=null}if(typeof h==="undefined"){h=null}e.call(this);this.mediatorName=null;this.viewComponent=null;this.mediatorName=(g!=null)?g:f.NAME;this.viewComponent=h}f.prototype.getMediatorName=function(){return this.mediatorName};f.prototype.getViewComponent=function(){return this.viewComponent};f.prototype.setViewComponent=function(g){this.viewComponent=g};f.prototype.listNotificationInterests=function(){return new Array()
};f.prototype.handleNotification=function(g){};f.prototype.onRegister=function(){};f.prototype.onRemove=function(){};f.NAME="Mediator";return f})(c.Notifier);c.Mediator=d})(b||(b={}));var b;(function(c){var d=(function(e){a(f,e);function f(h,g){if(typeof h==="undefined"){h=null}if(typeof g==="undefined"){g=null}e.call(this);this.proxyName=null;this.data=null;this.proxyName=(h!=null)?h:f.NAME;if(g!=null){this.setData(g)}}f.prototype.getProxyName=function(){return this.proxyName};f.prototype.setData=function(g){this.data=g
};f.prototype.getData=function(){return this.data};f.prototype.onRegister=function(){};f.prototype.onRemove=function(){};f.NAME="Proxy";return f})(c.Notifier);c.Proxy=d})(b||(b={}));