"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var interfaceConfig=function(){function e(){_classCallCheck(this,e),this.env_dev_url="http://192.168.1.141:91",this.env_dev_proxy_url="/api",this.env_production_url="https://ecportal.api.7224.com",this.appid="c471cbfc4b4e473599c91266e4972ade",this.contentType="application/json",this.withCredentials=Boolean(process.client),this.crossDomain=Boolean(process.client),this.timeout=1e5,this.baseURL=process.client?this.getCurrentConfigProxyUrl():this.getCurrentConfigUrl()}return _createClass(e,[{key:"getCurrentConfigUrl",value:function(){return"production"==process.env.NODE_ENV?this.env_production_url:this.env_dev_url}},{key:"getCurrentConfigProxyUrl",value:function(){return"production"==process.env.NODE_ENV?this.env_production_url:this.env_dev_proxy_url}}]),e}();exports.default=new interfaceConfig;