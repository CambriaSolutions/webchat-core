(function(a,b){'object'==typeof exports&&'object'==typeof module?module.exports=b():'function'==typeof define&&define.amd?define('chatframe',[],b):'object'==typeof exports?exports.chatframe=b():a.chatframe=b()})('undefined'==typeof self?this:self,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='./',b(b.s=11)}([function(a){a.exports=require('react')},function(a){a.exports=require('styled-components')},function(a){a.exports=require('react-redux')},function(a){a.exports=require('date-fns')},function(a){a.exports=require('@material-ui/core/Paper')},function(a){a.exports=require('@material-ui/core/Button')},function(a){a.exports=require('redux')},function(a){a.exports=require('@material-ui/icons/Chat')},function(a){a.exports=require('@material-ui/core/styles')},function(a){a.exports=require('lodash/find')},function(a){a.exports=require('@material-ui/core/colors/grey')},function(a,b,c){a.exports=c(12)},function(a,b,c){'use strict';function d(a){return(b)=>{const c=new qa(a);b({type:S,client:c,clientName:'dialogflow'})}}function e(a){return(b,c)=>{const d=c().conversation.client;b({type:W}),d.textRequest(a).then((a)=>{a?(b(g(a)),b({type:aa})):b({type:_,error:'No response received from chat provider. Please try again.'})}).catch((a)=>{throw b({type:_,error:'Unable to connect to the chat provider. Please try again.'}),new Error(a)})}}function f(a){return(b,c)=>{const d=c().conversation.client;b({type:W}),d.eventRequest(a).then((a)=>{a?(b(g(a)),b({type:aa})):b({type:_,error:'No response received from chat provider. Please try again.'})}).catch((a)=>{throw b({type:_,error:'Unable to connect to the chat provider. Please try again.'}),new Error(a)})}}function g(a){return(b)=>{const c=ma()(a,'queryResult.fulfillmentMessages',{}),d=c.map((a)=>{const b=i(a.message);return{type:b,suggestions:ma()(a,'quickReplies.quickReplies',[]),text:ma()(a,'text.text',null),card:{title:ma()(a,'title',''),subtitle:ma()(a,'subtitle',''),imageUrl:ma()(a,'imageUrl',''),buttons:ma()(a,'buttons',[])},payload:ma()(a,'payload',{})}}),e=ma()(a,'queryResult.webhookPayload.fields',null);if(e){for(let a of Object.entries(e)){var f=ra(a,2);let b=f[0],c=f[1];'stringValue'===c.kind&&(e[b]=JSON.parse(c.stringValue))}b({type:ga,webhookPayload:e})}const g=Object(ja.format)(new Date,pa),j=Object(ja.getTime)(new Date),k={entity:'bot',loading:!1,messageId:a.responseId,language:a.queryResult.languageCode,timestamp:j,systemTime:g,providerResponse:a,responses:d};b(h(k))}}function h(a){return(b)=>{const c=!!oa()(a.responses,['type','suggestion']);c?b({type:Z}):b({type:$}),b({type:T,data:a})}}function i(a){return'text'===a?'text':'card'===a?'card':'quickReplies'===a?'suggestion':'image'===a?'image':4===a?'payload':'text'}function j(a,b){return(c)=>{if(!a)throw new Error('No coversation provider selected.');if('dialogflow'===a.toLowerCase())c(d(b));else throw c({type:_,error:`Unable to connect to ${a}`}),new Error(`${a} is not a recognized conversation provider.`)}}function k(a){return(b,c)=>{const d=c().conversation.messages.length,e=Object(ja.format)(new Date,pa),f={entity:'user',messageId:`usermessage-${d}`,systemTime:e,text:a};b({type:V,response:f}),b(l(a))}}function l(a){return(b,c)=>{const d=c().conversation.clientName;if('dialogflow'===d.toLowerCase())b({type:$}),b(e(a));else throw b({type:_,error:`Unable to connect to ${d}`}),new Error(`${d} is not a recognized conversation provider.`)}}function m(a){return(b)=>{b(k(a))}}function n(a){return(b)=>{const c=a.title,d=a.avatar,e=a.client,g=a.clientOptions,h=a.token,i=a.primaryColor,k=a.secondaryColor,l=a.initialActive,m=a.fullscreen;b({type:Q,title:c}),b({type:R,avatar:d}),b(j(e,g)),b(o()),b(f('Welcome')),(i||k)&&b(q(i,k)),!0===l?b(r()):b(s()),!0===m?b(t()):b(u())}}function o(){return(a,b)=>{const c=b().conversation.timer;c&&clearInterval(c);const d=setInterval(()=>a(p()),10000);a({type:X,newTimer:d}),a(p())}}function p(){return{type:Y}}function q(a='lightBlue',b='pink'){return(c)=>{let d={palette:{error:sa.red,contrastThreshold:3,tonalOffset:0.2}};va()(a)?d.palette.primary={main:a}:sa[a]?d.palette.primary=sa[a]:console.error(`${a} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`),va()(b)?d.palette.secondary={main:b}:b&&sa[b]?d.palette.secondary=sa[b]:console.error(`${b} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);const e=Object(ha.createMuiTheme)(d);c({type:ba,theme:e})}}function r(){return{type:ca}}function s(){return{type:da}}function t(){return{type:ea}}function u(){return{type:fa}}function v(a){const b=Sa()(a,['entity','user']),c=[];for(let d of b)c.push({systemTime:d.systemTime,element:Object(C.createElement)(gb,{message:d.text,entity:d.entity,key:d.messageId,timestamp:d.systemTime})});return c}function w(a){return{systemTime:a.systemTime,element:Object(C.createElement)(gb,{key:'loading',entity:'bot',timestamp:a.systemTime,isLoading:a.loading+Object(ja.format)(new Date,pa)})}}function x(a){const b=[];for(let c in a.responses){const d=a.responses[c];if('text'===d.type){const e=Object(ja.parse)(a.systemTime,pa,new Date(a.systemTime));b.push({systemTime:Object(ja.format)(Object(ja.addMilliseconds)(e,10*c),pa),element:Object(C.createElement)(gb,{message:d.text,entity:a.entity,key:a.messageId+c+Object(ja.format)(new Date,pa),isLoading:!1,timestamp:a.systemTime})})}}return b}function y(a){const b=[];for(let c in a.responses){const d=a.responses[c];'card'===d.type&&b.push({systemTime:a.systemTime,element:Object(C.createElement)(ub,{data:d.card,timestamp:a.systemTime,key:a.messageId+c+Object(ja.format)(new Date,pa)})})}return b}function z(a){const b=Sa()(a,['entity','bot']);let c=[];for(let d of b)d.loading?c.push(w(d)):c=[...c,...x(d),...y(d)];return c}function A(a){return{type:U,value:a}}function B(){return(a,b)=>{const c=b().userInput;c&&''!==c&&(a(k(c)),a(A('')))}}Object.defineProperty(b,'__esModule',{value:!0});var C=c(0),D=c.n(C),E=c(2),F=c.n(E),G=c(6),H=c.n(G),I=c(1),J=c.n(I),K=c(13),L=c.n(K),M=c(5),N=c.n(M),O=c(7),P=c.n(O);const Q='SET_TITLE',R='SET_AVATAR',S='SAVE_CLIENT',T='SAVE_RESPONSE',U='SAVE_USER_INPUT',V='SAVE_USER_RESPONSE',W='INITIATE_LOADING',X='TIMER_START',Y='UPDATE_CURRENT_TIME',Z='SHOW_BUTTON_BAR',$='HIDE_BUTTON_BAR',_='DISPLAY_ERROR',aa='CLEAR_ERROR',ba='CREATE_THEME',ca='SHOW_WINDOW',da='HIDE_WINDOW',ea='FULLSCREEN',fa='WINDOWED',ga='RECEIVE_WEBHOOK_DATA';var ha=c(8),ia=c.n(ha),ja=c(3),ka=c.n(ja),la=c(14),ma=c.n(la),na=c(9),oa=c.n(na);const pa='MM-dd-yyyy hh:mm:ss.SSSa';class qa{constructor(a){if(!a||!a.textUrl)throw new Error('Fulfillment URL is required to generate a conversation client');this.textUrl=a.textUrl,this.eventUrl=a.eventUrl,this.apiKey=a.apiKey}textRequest(a){if(!a)throw new Error('Query should not be empty');let b=new URL(this.textUrl);const c={query:a};return this.apiKey&&(c['x-api-key']=this.apiKey),Object.keys(c).forEach((a)=>b.searchParams.append(a,c[a])),fetch(b).then((a)=>a.json())}eventRequest(a){if(!a)throw new Error('Query should not be empty');let b=new URL(this.eventUrl);const c={query:a};return this.apiKey&&(c['x-api-key']=this.apiKey),Object.keys(c).forEach((a)=>b.searchParams.append(a,c[a])),fetch(b).then((a)=>a.json())}}var ra=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h['return']&&h['return']()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),sa=c(15),ta=c.n(sa),ua=c(16),va=c.n(ua);const wa=J()(N.a)`
  && {
    display: ${(a)=>a.active?'block':'none'};
    position: absolute;
    bottom: 48px;
    right: 48px;
    pointer-events: auto;
    padding-top: 8px;
    background: ${(a)=>a.theme.palette.primary.main};
    color: ${(a)=>a.theme.palette.getContrastText(a.theme.palette.primary.main)};
    &:hover {
      background: ${(a)=>a.theme.palette.primary.dark};
      color: ${(a)=>a.theme.palette.getContrastText(a.theme.palette.primary.dark)};
    }
  }
`;class xa extends C.PureComponent{render(){var a=this.props;const b=a.windowVisible,c=a.showWindow,d=a.theme;return Object(C.createElement)(wa,{variant:'fab',onClick:c,active:b?0:1,theme:d},Object(C.createElement)(P.a,null))}}var ya=Object(E.connect)((a)=>({windowVisible:a.config.windowVisible,theme:a.config.theme}),(a)=>({showWindow:()=>{a(r())}}))(xa),za=c(4),Aa=c.n(za),Ba=c(17),Ca=c.n(Ba),Da=c(18),Ea=c.n(Da),Fa=c(19),Ga=c.n(Fa),Ha=c(20),Ia=c.n(Ha);const Ja=J()(Aa.a)`
  && {
    background: ${(a)=>a.theme.palette.primary.dark};
    padding: 16px;
    color: ${(a)=>a.theme.palette.getContrastText(a.theme.palette.primary.dark)};
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    position: relative;
    z-index: 1;
  }
`,Ka=J.a.div`
  flex: 0;
`,La=J.a.div`
  flex: 1;
`,Ma=J.a.div`
  font-size: 16px;
  line-height: 16px;
  padding-left: 16px;
`,Na=J.a.div`
  padding-top: 2px;
  font-size: 10px;
  line-height: 10px;
  padding-left: 16px;
`,Oa=J.a.div`
  flex: 0;
  cursor: pointer;
  height: 28px;
  color: ${(a)=>a.theme.palette.getContrastText(a.theme.palette.primary.dark)};
  padding: 2px;
  &:hover {
    background: rgba(255, 255, 255, 0.24);
  }
`;class Pa extends C.PureComponent{render(){var a=this.props;const b=a.title,c=a.timestamp,d=a.theme,e=a.hideWindow,f=a.showWindowed,g=a.showFullscreen,h=a.fullscreen;return Object(C.createElement)(Ja,{elevation:3,theme:d},Object(C.createElement)(Ka,null,Object(C.createElement)(P.a,null)),Object(C.createElement)(La,null,Object(C.createElement)(Ma,null,b),Object(C.createElement)(Na,null,'Active ',c)),h?Object(C.createElement)(Oa,{theme:d,onClick:f},Object(C.createElement)(Ga.a,null)):Object(C.createElement)(Oa,{theme:d,onClick:g},Object(C.createElement)(Ea.a,null)),Object(C.createElement)(Oa,{theme:d,onClick:e},Object(C.createElement)(Ia.a,null)))}}var Qa=Object(E.connect)((a)=>({title:a.config.title,timestamp:a.conversation.headerTime,theme:a.config.theme,fullscreen:a.config.fullscreen}),(a)=>({hideWindow:()=>{a(s())},showFullscreen:()=>{a(t())},showWindowed:()=>{a(u())}}))(Pa),Ra=c(21),Sa=c.n(Ra),Ta=c(10),Ua=c.n(Ta);const Va=J()(Aa.a)`
  && {
    ${(a)=>'user'===a.entity?'display: none;':''} height: 36px;
    width: 42px;
    height: 42px;
    min-width: 42px;
    border-radius: 50%;
    margin: ${(a)=>'user'===a.entity?'0 0 0 16px':'0 16px 0 0'};
    order: ${(a)=>'user'===a.entity?1:0};
    background-color: #fff;
    background-image: ${(a)=>a.avatar?`url(${a.avatar})`:Ua.a[400]};
    background-position: center;
    background-size: 80%;
    background-repeat: no-repeat;
  }
`;class Wa extends C.PureComponent{render(){var a=this.props;const b=a.entity,c=a.avatar;return Object(C.createElement)(Va,{entity:b,avatar:c})}}var Xa=c(22),Ya=c.n(Xa);const Za=J.a.div`
  text-align: center;
  width: 42px;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`,$a=J.a.div`
  animation: dot-keyframes 1s infinite ease-in-out;
  background-color: ${Ya.a[900]};
  border-radius: 10px;
  display: inline-block;
  height: 8px;
  width: 8px;

  &:nth-child(2) {
    animation-delay: 0.25s;
  }

  &:nth-child(3) {
    animation-delay: 0.5s;
  }

  @keyframes dot-keyframes {
    0% {
      opacity: 0.4;
      transform: scale(1, 1);
    }

    50% {
      opacity: 1;
      transform: scale(1.3, 1.3);
    }

    100% {
      opacity: 0.4;
      transform: scale(1, 1);
    }
  }
`;class _a extends C.PureComponent{render(){return Object(C.createElement)(Za,null,Object(C.createElement)($a,null),Object(C.createElement)($a,null),Object(C.createElement)($a,null))}}const ab=J.a.div`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 24px;
  min-height: 32px;
  align-items: ${(a)=>'user'===a.entity?'flex-end':'flex-start'};
`,bb=J.a.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${(a)=>'user'===a.entity?'flex-end':'flex-start'};
`,cb=J()(Aa.a)`
  && {
    background: #fff;
    border-radius: 3px;
    font-size: 16px;
    line-height: 1.2rem;
    padding: 12px;
    position: relative;
    color: ${Ua.a[900]};
    max-width: 85%;

    &:after {
      content: '\\00a0';
      height: 10px;
      width: 10px;
      position: absolute;
      transform: rotate(-45deg);
      top: 16px;
      left: -6px;
      background-color: #fff;
      border-top: 1px solid ${Ua.a[400]};
      border-left: 1px solid ${Ua.a[400]};
    }
  }
`,db=J()(Aa.a)`
  && {
    background-color: ${Ua.a[400]};
    border-radius: 3px;
    font-size: 16px;
    line-height: 1.2rem;
    padding: 12px;
    width: auto;
    position: relative;
    color: ${Ua.a[900]};
    max-width: 85%;

    &:after {
      height: 10px;
      width: 10px;
      position: absolute;
      transform: rotate(-45deg);
      top: 16px;
      right: -6px;
      background-color: ${Ua.a[400]};
      border-bottom: 1px solid ${Ua.a[300]};
      border-right: 1px solid ${Ua.a[300]};
    }
  }
`,eb=J.a.div`
  font-size: 12px;
  color: ${Ua.a[500]};
  margin-top: 8px;
  padding-left: 62px;
  padding-right: 2px;
`;class fb extends C.PureComponent{render(){var a=this.props;const b=a.message,c=a.entity,d=a.avatar,e=a.isLoading,f=a.timestamp,g=a.currentTime,h=Object(ja.parse)(g,pa,new Date(g)),i=Object(ja.parse)(f,pa,new Date(g)),j=Object(ja.differenceInMinutes)(h,i),k=Object(ja.differenceInSeconds)(h,i);let l=null;l=1<=j?`${j} min`:10<=k?`${k} sec`:'Now';const m='user'===c?Object(C.createElement)(db,{elevation:1},b):Object(C.createElement)(cb,{elevation:1},e?Object(C.createElement)(_a,null):b);return Object(C.createElement)(ab,{entity:c},Object(C.createElement)(bb,{entity:c},Object(C.createElement)(Wa,{entity:c,avatar:d}),m),Object(C.createElement)(eb,null,l))}}var gb=Object(E.connect)((a)=>({avatar:a.config.avatar,currentTime:a.conversation.currentTime}),()=>({}))(fb),hb=c(23),ib=c.n(hb),jb=c(24),kb=c.n(jb),lb=c(25),mb=c.n(lb),nb=c(26),ob=c.n(nb),pb=c(27),qb=c.n(pb);const rb=J()(ib.a)`
  && {
    margin: 16px auto;
    white-space: pre-line;
  }
`,sb=J()(ob.a)`
  && {
    height: ${(a)=>a.image&&''!==a.image?'200px':'0px'};
    background-size: cover;
    background-position: center center;
  }
`;class tb extends C.PureComponent{render(){var a=this.props.data;const b=a.title,c=a.subtitle,d=a.imageUrl,e=a.buttons;return Object(C.createElement)(rb,null,Object(C.createElement)(sb,{image:encodeURI(d),title:''}),Object(C.createElement)(mb.a,null,Object(C.createElement)(qb.a,{gutterBottom:!0,variant:'headline',component:'h2'},b),Object(C.createElement)(qb.a,{component:'p'},c)),Object(C.createElement)(kb.a,null,e.map((a,b)=>Object(C.createElement)(N.a,{href:a.postback,target:'_blank',size:'small',color:'primary',key:'card-'+b+Object(ja.format)(new date,'MMDDYYYYhhmmssSSS')},a.text))))}}var ub=Object(E.connect)((a)=>({inputValue:a.userInput}),()=>({saveUserInput:()=>{},submitUserInput:()=>{}}))(tb);const vb=J.a.div`
  /* box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); */
  position: relative;
  padding: 0 16px 16px 16px;
  overflow-y: auto;
  height: 100%;
  background: ${(a)=>a.theme.palette.grey[200]};
  display: flex;
  flex-direction: column-reverse;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`,wb=J.a.div`
  flex: 1 0 auto;
  min-height: min-content;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  min-height: 100%;
  height: auto;
`;class xb extends C.PureComponent{constructor(a){super(a),this.chatWindowRef=D.a.createRef()}componentDidUpdate(){this.chatWindowRef.current}render(){var a=this.props;const b=a.messages,c=a.theme,d=z(b),e=v(b),f=[...d,...e];f.sort((c,a)=>{const b=Object(ja.parse)(c.systemTime,pa,new Date(c.systemTime)),d=Object(ja.parse)(a.systemTime,pa,new Date(c.systemTime)),e=Object(ja.differenceInMilliseconds)(b,d);return e});const g=f.map((a)=>a.element);return Object(C.createElement)(vb,{innerRef:this.chatWindowRef,theme:c,elevation:1,square:!0},Object(C.createElement)(wb,null,g))}}var yb=Object(E.connect)((a)=>({messages:a.conversation.messages,theme:a.config.theme}),()=>({}))(xb),zb=c(28),Ab=c.n(zb);const Bb=J.a.div`
  background: #fff;
  flex: 1 0 48px;
  max-height: 48px;
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  box-shadow: 0px -1px 3px 0px rgba(0, 0, 0, 0.23);
`,Cb=J.a.div`
  flex: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  color: ${(a)=>a.theme.palette.primary.dark};
  padding: 0 16px;
  cursor: pointer;
  &:hover {
    color: ${(a)=>a.theme.palette.primary.dark};
  }
`,Db=J.a.input`
  width: 100%;
  height: 100%;
  font-size: 16px;
  line-height: 16px;
  outline: none;
  border: none;
  padding: 0 16px;
`;class Eb extends C.PureComponent{constructor(){super(),this.handleKeyPress=this.handleKeyPress.bind(this)}handleKeyPress(a){13===a.charCode&&this.props.submitUserInput()}render(){var a=this.props;const b=a.saveUserInput,c=a.inputValue,d=a.theme;return Object(C.createElement)(Bb,null,Object(C.createElement)(Db,{type:'text',placeholder:'Send a message',onChange:b,value:c,onKeyPress:this.handleKeyPress}),Object(C.createElement)(Cb,{onClick:this.props.submitUserInput,theme:d},Object(C.createElement)(Ab.a,null)))}}var Fb=Object(E.connect)((a)=>({inputValue:a.userInput,theme:a.config.theme}),(a)=>({saveUserInput:(b)=>{a(A(b.target.value))},submitUserInput:()=>{a(B())}}))(Eb),Gb=c(29),Hb=c.n(Gb),Ib=c(30),Jb=c.n(Ib);const Kb=J.a.div`
  width: 100%;
  flex: 1 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  padding: ${(a)=>a.visible?'8px 8px':'0 8px'};
  background: ${(a)=>a.theme.palette.grey[100]};
`,Lb=J()(N.a)`
  && {
    border-color: ${(a)=>a.theme.palette.secondary.main};
    color: ${(a)=>a.theme.palette.secondary.main};
    margin: 8px;
    display: ${(a)=>'true'===a.visible?'block':'none'};
    &:hover {
      /* background: ${(a)=>a.theme.palette.secondary.dark}; */
      background-color: ${(a)=>Object(Gb.fade)(a.theme.palette.secondary.main,a.theme.palette.action.hoverOpacity)};

    border-color: ${(a)=>a.theme.palette.secondary.main};
    }
  }
`;class Mb extends C.PureComponent{render(){var a=this.props;const b=a.visible,c=a.messages,d=a.sendQuickReply,e=a.theme,f=Jb()(c,(a)=>{const b=!!oa()(a.responses,['type','suggestion']);return b});let g=[];if(f){const a=f.responses.filter((a)=>'suggestion'===a.type);for(let c of a)for(let a of c.suggestions)g.push({label:a,id:f.messageId,visible:b})}return Object(C.createElement)(Kb,{visible:b,theme:e},g.map((a,b)=>Object(C.createElement)(Lb,{size:'small',theme:e,variant:'outlined',color:'secondary',key:`${a.id}-btn${b}`,visible:a.visible.toString(),onClick:()=>d(a.label)},a.label)))}}var Nb=Object(E.connect)((a)=>({visible:a.buttonBar.visible,messages:a.conversation.messages,theme:a.config.theme}),(a)=>({sendQuickReply:(b)=>{a(m(b))}}))(Mb);const Ob=J.a.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: ${(a)=>a.visible?'24px 16px':'0 16px'};
  background: ${(a)=>a.theme.palette.error.light};
  border-top: ${(a)=>a.visible?`1px solid ${a.theme.palette.error.main}`:'none'};
  color: ${(a)=>a.theme.palette.error.dark};
`;class Pb extends C.PureComponent{render(){var a=this.props;const b=a.error,c=a.theme;return Object(C.createElement)(Ob,{visible:''!==b,theme:c},b)}}var Qb=Object(E.connect)((a)=>({error:a.error,theme:a.config.theme}),()=>({}))(Pb);const Rb={giant:1170,desktop:992,tablet:768,phone:620},Sb=Object.keys(Rb).reduce((a,b)=>{const c=Rb[b]/16;return a[b]=(...a)=>I.css`
    @media (max-width: ${c}em) {
      ${Object(I.css)(...a)};
    }
  `,a},{}),Tb=J()(Aa.a)`
  && {
    transform-origin: bottom right;
    pointer-events: auto;
    width: ${(a)=>a.fullscreen?'calc(100% - 96px)':'65%'};
    height: ${(a)=>a.fullscreen?'calc(100% - 96px)':'60%'};
    max-width: ${(a)=>a.fullscreen?'':'700px'};
    max-height: ${(a)=>a.fullscreen?'':'1000px'};
    background: none;
    display: flex;
    flex-flow: column nowrap;
    overflow: hidden;
    position: absolute;
    bottom: 48px;
    right: 48px;

    ${Sb.phone`
      width: calc(100% - 48px);
      height: calc(100% - 48px);
      position: absolute;
      top: 24px;
      left: 24px;
      max-width: none;
      max-height: none;
    `};
  }
`;class Ub extends C.PureComponent{render(){var a=this.props;const b=a.windowVisible,c=a.fullscreen;return Object(C.createElement)(Ca.a,{in:b},Object(C.createElement)(Tb,{elevation:6,fullscreen:c?1:0},Object(C.createElement)(Qa,null),Object(C.createElement)(yb,null),Object(C.createElement)(Nb,null),Object(C.createElement)(Qb,null),Object(C.createElement)(Fb,null)))}}var Vb=Object(E.connect)((a)=>({windowVisible:a.config.windowVisible,fullscreen:a.config.fullscreen}),()=>({}))(Ub),Wb=c(31),Xb=c.n(Wb),Yb=c(32),Zb=c.n(Yb),$b=c(33),_b=c.n($b),ac=c(34),bc=c.n(ac),cc=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};const dc=Object(ha.createMuiTheme)({palette:{primary:bc.a,secondary:_b.a}}),ec={avatar:null,title:'Chat Window',theme:dc,windowVisible:!1,fullscreen:!1};var fc=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};const gc={client:null,clientName:null,messages:[],webhookPayload:null,lastUpdateTime:Object(ja.format)(new Date,pa),currentTime:Object(ja.format)(new Date,pa),headerTime:'Now',timer:null};var hc=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};const ic={visible:!1,buttons:[]};const jc='';const kc=Object(G.combineReducers)({config:function(a=ec,b){switch(b.type){case R:return b.avatar?cc({},a,{avatar:b.avatar}):a;case Q:return cc({},a,{title:b.title});case ba:return cc({},a,{theme:b.theme});case ca:return cc({},a,{windowVisible:!0});case da:return cc({},a,{windowVisible:!1});case ea:return cc({},a,{fullscreen:!0});case fa:return cc({},a,{fullscreen:!1});default:return a;}},conversation:function(a=gc,b){switch(b.type){case S:return fc({},a,{client:b.client,clientName:b.clientName});case Y:const c=new Date,d=Object(ja.parse)(a.lastUpdateTime,pa,new Date(a.lastUpdateTime)),e=Object(ja.differenceInMinutes)(c,d),f=Object(ja.differenceInSeconds)(c,d);let g='Now';return 1<=e?g=`${e} min ago`:9<=f&&(g=`${f} sec ago`),fc({},a,{headerTime:g,currentTime:Object(ja.format)(c,pa)});case X:return fc({},a,{timer:b.timer});case W:const h={loading:!0,entity:'bot',systemTime:Object(ja.format)(new Date,pa)};return fc({},a,{messages:[...a.messages,h]});case T:const i=a.messages.map((a)=>a.loading?b.data:a);return fc({},a,{lastUpdateTime:Object(ja.format)(new Date,pa),headerTime:'Now',messages:i.sort((c,a)=>{const b=Object(ja.parse)(c.systemTime,pa,new Date(c.systemTime)),d=Object(ja.parse)(a.systemTime,pa,new Date(a.systemTime)),e=Object(ja.differenceInMilliseconds)(b,d);return e})});case V:return fc({},a,{lastUpdateTime:Object(ja.format)(new Date,pa),headerTime:'Now',messages:[...a.messages,b.response].sort((c,a)=>{const b=Object(ja.parse)(c.systemTime,pa,new Date(c.systemTime)),d=Object(ja.parse)(a.systemTime,pa,new Date(a.systemTime)),e=Object(ja.differenceInMilliseconds)(d,b);return e})});case ga:return fc({},a,{webhookPayload:b.webhookPayload});default:return a;}},buttonBar:function(a=ic,b){switch(b.type){case Z:return hc({},a,{visible:!0});case $:return hc({},a,{visible:!1});default:return a;}},userInput:function(a='',b){switch(b.type){case U:return b.value;default:return a;}},error:function(a=jc,b){switch(b.type){case _:return b.error;case aa:return jc;default:return a;}}});L.a.load({google:{families:['Roboto:300,400,500']}});const lc=J.a.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  & > * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`;class mc extends C.PureComponent{constructor(a){super(a),this.store=Object(G.createStore)(kc,Object(Yb.composeWithDevTools)(Object(G.applyMiddleware)(Xb.a))),this.currentValue=null}componentDidMount(){this.store.dispatch(n(this.props)),this.unsubscribe=this.store.subscribe(()=>this.handleChange(this.store))}componentWillUnmount(){this.unsubscribe()}select(a){return a.conversation.webhookPayload}handleChange(a){let b=this.currentValue;this.currentValue=this.select(a.getState()),b!==this.currentValue&&this.props.onPayload&&this.props.onPayload(this.currentValue)}render(){return Object(C.createElement)(E.Provider,{store:this.store},Object(C.createElement)(lc,null,Object(C.createElement)(Vb,null),Object(C.createElement)(ya,{variant:'fab'})))}}b['default']=mc},function(a){a.exports=require('webfontloader')},function(a){a.exports=require('lodash/get')},function(a){a.exports=require('@material-ui/core/colors')},function(a){a.exports=require('validator/lib/isHexColor')},function(a){a.exports=require('@material-ui/core/Zoom')},function(a){a.exports=require('@material-ui/icons/Fullscreen')},function(a){a.exports=require('@material-ui/icons/FullscreenExit')},function(a){a.exports=require('@material-ui/icons/Close')},function(a){a.exports=require('lodash/filter')},function(a){a.exports=require('@material-ui/core/colors/green')},function(a){a.exports=require('@material-ui/core/Card')},function(a){a.exports=require('@material-ui/core/CardActions')},function(a){a.exports=require('@material-ui/core/CardContent')},function(a){a.exports=require('@material-ui/core/CardMedia')},function(a){a.exports=require('@material-ui/core/Typography')},function(a){a.exports=require('@material-ui/icons/Send')},function(a){a.exports=require('@material-ui/core/styles/colorManipulator')},function(a){a.exports=require('lodash/findLast')},function(a){a.exports=require('redux-thunk')},function(a){a.exports=require('redux-devtools-extension/logOnlyInProduction')},function(a){a.exports=require('@material-ui/core/colors/pink')},function(a){a.exports=require('@material-ui/core/colors/blue')}])});
//# sourceMappingURL=chatframe.js.map