(this.webpackJsonpnarrationizer=this.webpackJsonpnarrationizer||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=(n(14),n(15),n(8)),l=n(1),u=n(5),s=n(3),h=n(2),f=n(4),m=function(e){var t=new Map;return e.forEach((function(e){return t.set(e,!0)})),t},b=[m(["sleep","wait","die"]),m(["go","walk","run"]),m(["up","down","left","right","north","south","east","west"]),m(["open","pick up","take","inspect","look at","throw","stroke"]),m(["door","key","exit","two furry dice"])],d=["singular action","directional action","direction","object action","object"],p=function(e){for(var t=0;t<b.length;t++)if(b[t].get(e))return t;return-1},w=function(){function e(t){Object(l.a)(this,e),this.word=void 0,this.word=t}return Object(u.a)(e,[{key:"toString",value:function(){return this.constructor.name+" "+this.word}}]),e}(),j=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),t}(w),g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"perform",value:function(){return"You will now ".concat(this.word)}}]),t}(w),v=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"perform",value:function(e){return"You wanna ".concat(this.word," to the ").concat(e.word," & it is fine.")}}]),t}(j),O=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),t}(w),k=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"perform",value:function(e){return"You ".concat(this.word," the ").concat(e.word," (somehow)")}}]),t}(j),y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),t}(w),E=function(e,t){switch(t){case 0:return new g(e);case 1:return new v(e);case 2:return new O(e);case 3:return new k(e);case 4:return new y(e);default:return new g("roflmao something went wrong")}},C=[[1,2,-1,3,-1,-1],[-1,-1,-1,-1,-1,-2],[-1,-1,1,-1,-1,-1],[-1,-1,-1,-1,1,-1]],x=(n(16),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).bottomRef=r.a.createRef(),n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.bottomRef.current&&this.bottomRef.current.scrollIntoView({behavior:"smooth"})}},{key:"componentDidUpdate",value:function(e,t,n){this.bottomRef.current&&this.bottomRef.current.scrollIntoView({behavior:"smooth"})}},{key:"render",value:function(){return r.a.createElement("div",{id:"log"},this.props.text.map((function(e,t){return r.a.createElement("p",{key:t},e)})),r.a.createElement("div",{ref:this.bottomRef}))}}]),t}(r.a.Component)),R=function(e){var t=e.onChange,n=e.onSubmit;return r.a.createElement("fieldset",null,r.a.createElement("legend",null,"hello pls tell me wat to do"),"Command: ",r.a.createElement("input",{type:"text",onChange:function(e){return t(e.target.value)}}),r.a.createElement("input",{type:"button",onClick:n,value:"clickety click"}))},S=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={command:"",feedback:["this is the first line of the log",'try something like "go left", "pick up key" or "open door"']},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"getThatMessage",value:function(){var e=function(e){var t=[];t.push(0);for(var n=e.trim().split(" "),a=[],r=0,o=!1,c=!1,i=0;!o&&!c;){if(-1===i){console.error("reached error state; command did not match syntax"),o=!0;break}if(r===n.length){-2===C[i][C[0].length-1]?c=!0:o=!0;break}for(var l=-1,u=r+1,s="";l<0&&u<=n.length;)s=n.slice(r,u).reduce((function(e,t){return"".concat(e," ").concat(t)})),l=p(s.toLowerCase()),u++;if(r=u-1,console.log(s),u===n.length+1&&l<0){console.error("lexical lookup failed, invalid command!"),o=!0;break}t.push(s),t.push(d[l]),a.push(E(s,l)),console.log("was in state",i),i=C[i][l],console.log("state:",i,"lookahead:",l),t.push(i)}return o?(console.log("damn invalid stuff..."),null):(console.log("is valid"),console.log(t),a)}(this.state.command);return e?function(e){if(1===e.length){var t=e[0];return t instanceof g?t.perform():"wtf"}if(2===e.length){var n=e[0],a=e[1];return n instanceof k&&a instanceof y?n.perform(a):n instanceof v&&a instanceof O?n.perform(a):"no viable 2-phrase action"}return"not an accepted command stack size"}(e):"invalid command"}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{text:this.state.feedback}),r.a.createElement(R,{onChange:function(t){return e.setState({command:t})},onSubmit:function(){return e.setState({feedback:[].concat(Object(i.a)(e.state.feedback),[e.getThatMessage()])})}}))}}]),t}(r.a.Component),M=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"hi there")),r.a.createElement("main",null,r.a.createElement(S,null)),r.a.createElement("footer",null,r.a.createElement("p",null,r.a.createElement("small",null,"a friendly reminder that this is ",r.a.createElement("strong",null,"not in any way")," finished"),r.a.createElement("br",null),r.a.createElement("small",null,"please be kind to my creation"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.ec2ad042.chunk.js.map