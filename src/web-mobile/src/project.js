System.register("chunks:///Cube.js",["./_virtual/_rollupPluginBabelHelpers.js","cc"],(function(e,t){var c,r,s,n,o,u,i,l,a,p,C;return e({_dec:void 0,_class:void 0}),{setters:[function(e){c=e.inherits,r=e.createClass,s=e.classCallCheck,n=e.possibleConstructorReturn,o=e.getPrototypeOf},function(e){u=e.cclegacy,i=e._decorator,l=e.Component}],execute:function(){u._RF.push({},"23253LdhAdOXLGUrGemjSZx","Cube",void 0),C=i.ccclass,i.property,e("Cube",(a=C("Cube"),a(p=function(e){function t(){return s(this,t),n(this,o(t).apply(this,arguments))}return c(t,e),r(t,[{key:"start",value:function(){cc.log("123")}}]),t}(l))||p)),u._RF.pop()}}}));

System.register("chunks:///PlayerControler.js",["./_virtual/_rollupPluginBabelHelpers.js","cc"],(function(t,e){var s,i,o,u,n,r,c,p,_,h,a,m,l,P,d;return t({_dec:void 0,_class:void 0,_temp:void 0}),{setters:[function(t){s=t.inherits,i=t.classCallCheck,o=t.possibleConstructorReturn,u=t.getPrototypeOf,n=t.createClass},function(t){r=t.cclegacy,c=t._decorator,p=t.v3,_=t.systemEvent,h=t.SystemEvent,a=t.Vec3,m=t.Component}],execute:function(){r._RF.push({},"c85e2iyLkJPrbceZD5JlWmx","PlayerControler",void 0),d=c.ccclass,c.property,t("PlayerControler",(l=d("PlayerControler"),l(P=function(t){function e(){var t,s;i(this,e);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(s=o(this,(t=u(e)).call.apply(t,[this].concat(r))))._startJump=!1,s._jumpStep=0,s._curJumpTime=0,s._jumpTime=.1,s._curJumpSpeed=0,s._curPos=p(),s._deltaPos=p(0,0,0),s._targetPos=p(),s._isMoving=!1,s}return s(e,t),n(e,[{key:"start",value:function(){_.on(h.EventType.MOUSE_UP,this.onMouseUp,this)}},{key:"onMouseUp",value:function(t){0===t.getButton()?this.jumpByStep(1):2===t.getButton()&&this.jumpByStep(2)}},{key:"jumpByStep",value:function(t){this._isMoving||(this._startJump=!0,this._jumpStep=t,this._curJumpTime=0,this._curJumpSpeed=this._jumpStep/this._jumpTime,this.node.getPosition(this._curPos),a.add(this._targetPos,this._curPos,p(this._jumpStep,0,0)),this._isMoving=!0)}},{key:"onOnceJumpEnd",value:function(){this._isMoving=!1}},{key:"update",value:function(t){this._startJump&&(this._curJumpTime+=t,this._curJumpTime>this._jumpTime?(this.node.setPosition(this._targetPos),this._startJump=!1,this.onOnceJumpEnd()):(this.node.getPosition(this._curPos),this._deltaPos.x=this._curJumpSpeed*t,a.add(this._curPos,this._curPos,this._deltaPos),this.node.setPosition(this._curPos)))}}]),e}(m))||P)),r._RF.pop()}}}));

System.register("chunks:///scene.js",["./_virtual/_rollupPluginBabelHelpers.js","cc"],(function(e,t){var c,s,n,r,o,u,i,l,a,p,f;return e({_dec:void 0,_class:void 0}),{setters:[function(e){c=e.inherits,s=e.createClass,n=e.classCallCheck,r=e.possibleConstructorReturn,o=e.getPrototypeOf},function(e){u=e.cclegacy,i=e._decorator,l=e.Component}],execute:function(){u._RF.push({},"d8ba8+BVhVI2py3ELI9rMxU","scene",void 0),f=i.ccclass,i.property,e("Cube",(a=f("Cube"),a(p=function(e){function t(){return n(this,t),r(this,o(t).apply(this,arguments))}return c(t,e),s(t,[{key:"start",value:function(){cc.log("123")}}]),t}(l))||p)),u._RF.pop()}}}));

System.register("chunks:///_virtual/prerequisite-imports:main",["../Cube.js","../PlayerControler.js","../scene.js"],(function(e,n){return{setters:[function(e){},function(e){},function(e){}],execute:function(){}}}));

(function(r) {
  r('project:///assets/Cube.js', 'chunks:///Cube.js');
  r('project:///assets/PlayerControler.js', 'chunks:///PlayerControler.js');
  r('project:///assets/scene.js', 'chunks:///scene.js');
  r('virtual:///prerequisite-imports:main', 'chunks:///_virtual/prerequisite-imports:main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    var _m;
    return {
        setters: [function(m) { _m = m; }],
        execute: function () { _export(_m); }
    };
    });
});