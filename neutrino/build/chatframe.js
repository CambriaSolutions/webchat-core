(function(e,t){'object'==typeof exports&&'object'==typeof module?module.exports=t():'function'==typeof define&&define.amd?define('chatframe',[],t):'object'==typeof exports?exports.chatframe=t():e.chatframe=t()})('undefined'==typeof self?this:self,function(){return function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(a,'a',a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='./',t(t.s=19)}([function(e){e.exports=require('react')},function(e){e.exports=require('styled-components')},function(e){e.exports=require('react-redux')},function(e){e.exports=require('date-fns')},function(e){e.exports=require('@material-ui/core/colors/grey')},function(e){e.exports=require('@material-ui/core/Typography')},function(e){e.exports=require('@material-ui/core/styles')},function(e){e.exports=require('@material-ui/core/Button')},function(e){e.exports=require('@material-ui/core/CardContent')},function(e){e.exports=require('@material-ui/core/Link')},function(e){e.exports=require('@material-ui/core/Card')},function(e){e.exports=require('redux')},function(e){e.exports=require('@material-ui/core/Avatar')},function(e){e.exports=require('lodash/get')},function(e){e.exports=require('lodash/find')},function(e){e.exports=require('uuid/v4')},function(e){e.exports=require('@material-ui/core/IconButton')},function(e){e.exports=require('markdown-to-jsx')},function(e){e.exports=require('@material-ui/core/CardActions')},function(e,t,a){e.exports=a(20)},function(e,t,a){'use strict';function n(e='lightBlue',t='pink',a='lightBlue'){const n={palette:{error:ee.red,contrastThreshold:3,tonalOffset:0.2},typography:{useNextVariants:!0},overrides:{MuiFab:{root:{position:'absolute',bottom:48,right:48}}}};if(ne()(e))n.palette.primary={main:e};else if(ee[e])n.palette.primary=ee[e];else throw new Error(`${e} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);if(ne()(t))n.palette.secondary={main:t};else if(t&&ee[t])n.palette.secondary=ee[t];else throw new Error(`${t} is not a valid color. 
      Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);if(ne()(a))n.palette.header={main:a};else if(ee[a])n.palette.header=ee[a];else throw new Error(`${a} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);return Object(q.createMuiTheme)(n)}function i(e,t=1){const a=fetch(e).then((e)=>e.json()).catch((a)=>{if(1===t)throw a;setTimeout(()=>{i(e,t-1)},500)});return a}function r(e){return(t)=>{const a=new tt(e);t({type:Te,client:a,clientName:'dialogflow'})}}function o(e){return(t,a)=>{const n=a().conversation.messages,i=Ke()(e.responses,['type','suggestion']);if(i?t({type:we}):t({type:he}),0===n.length)t({type:Ne,newConversationArray:[e]});else{const a=n.map((t)=>t.loading?e:t).sort((e,t)=>{const a=Object(ye.parse)(e.systemTime,Ze,new Date(e.systemTime)),n=Object(ye.parse)(t.systemTime,Ze,new Date(t.systemTime)),i=Object(ye.differenceInMilliseconds)(a,n);return i});t({type:Ne,newConversationArray:a})}}}function s(e){return(t)=>{function a(e){return'text'===e?'text':'card'===e?'card':'quickReplies'===e?'suggestion':'image'===e?'image':'payload'===e?'payload':'text'}const n=me()(e,'queryResult.fulfillmentMessages',[]);let i=[],r=!1;try{i=n.map((e)=>{const n=a(e.message),i=me()(e,'quickReplies.quickReplies',[]),o=me()(e,'text.text',null),s={title:me()(e,'card.title',''),subtitle:me()(e,'card.subtitle',''),imageUrl:me()(e,'card.imageUri',''),buttons:me()(e,'card.buttons',[])},l={imageUri:me()(e,'image.imageUri',''),accessibilityText:me()(e,'image.accessibilityText','')},d={};if('payload'===n){const a=me()(e,'payload.fields',{});for(const e of Object.entries(a)){var c=at(e,2);const t=c[0],a=c[1];if('stringValue'===a.kind)try{d[t]=JSON.parse(a.stringValue)}catch(e){d[t]=a.stringValue}else if(a.kind&&'stringValue'!==a.kind)throw new Error('Use stringValue to send payloads');else return d}if('disableInput'in d){if(1<Object.keys(d).length){const e=qe()(d,['disableInput']);t({type:ze,modifiedPayload:e})}r=!0,t({type:Oe})}else t({type:ze,payload:d})}return'text'===n?{type:n,text:o}:'image'===n?{type:n,image:l}:'suggestion'===n?{type:n,suggestions:i}:'card'===n?{type:n,card:s}:'payload'===n?{type:n,payload:d}:{type:n,text:o}})}catch(e){console.log(e)}let s;r?s=i.filter((e)=>{const t=me()(e,'payload.disableInput',!1);return!t}):(t({type:Ue}),s=i);const l=Object(ye.format)(new Date,Ze),d={entity:'bot',loading:!1,messageId:e.responseId,messageSession:e.session,language:e.queryResult.languageCode,systemTime:l,responses:s};t(o(d))}}function l(e){return(t,a)=>{const n=a().conversation.client;t({type:fe}),n.textRequest(e).then((e)=>{e?(t(s(e)),t({type:Ce})):t({type:be,error:'No response received from chat provider. Please try again.'})}).catch((e)=>{throw new Error(e)}).catch((e)=>{console.log(e),t({type:be,error:'Unable to connect to the chat provider. Please try again.'})})}}function d(e){return(t,a)=>{const n=a().conversation.client;t({type:fe}),n.eventRequest(e).then((e)=>{e?(t(s(e)),t({type:Ce})):(t({type:be,error:'No response received from chat provider. Please try again.'}),t({type:Ae}))}).catch((e)=>{throw new Error(e)}).catch((e)=>{console.log(e),t({type:be,error:'Unable to connect to the chat provider. Please try again.'})})}}function c(e,t){return(a)=>{try{if(!e)throw new Error('No conversation provider selected.');if('dialogflow'===e.toLowerCase())a(r(t));else throw a({type:be,error:`Unable to connect to ${e}`}),new Error(`${e} is not a recognized conversation provider.`)}catch(e){console.log(e)}}}function u(e){return(t,a)=>{const n=a().conversation.clientName;try{if('dialogflow'===n.toLowerCase())t(l(e));else throw new Error(`${n} is not a recognized conversation provider.`)}catch(e){console.log(e),t({type:be,error:`Unable to connect to ${n}`})}}}function p(e){return(t,a)=>{const n=a().conversation.messages.length,i=Object(ye.format)(new Date,Ze),r={entity:'user',messageId:`usermessage-${n}`,systemTime:i,text:e};t({type:je,response:r}),t({type:he}),t(u(e))}}function m(e){return(t)=>{t(p(e))}}function y(){return(e,t)=>{const a=t().conversation.conversationStarted;e({type:De}),a||(e(d('Welcome')),e({type:Pe}))}}function M(){return{type:ve}}function L(){return{type:Se}}function g(){return{type:ke}}function T(){return(e,t)=>{const a=t().conversation.lastUpdateTime,n=new Date,i=Object(ye.parse)(a,Ze,new Date(a)),r=Object(ye.differenceInMinutes)(n,i),o=Object(ye.differenceInSeconds)(n,i);let s='Now';1<=r?s=`${r} min ago`:9<=o&&(s=`${o} sec ago`);const l=Object(ye.format)(n,Ze);e({type:Ie,headerTime:s,currentTime:l})}}function N(){return(e,t)=>{const a=t().conversation.timer;a&&clearInterval(a);const n=setInterval(()=>e(T()),10000);e({type:xe,newTimer:n}),e(T())}}function E(e){return(t)=>{const a=e.title,n=e.avatar,i=e.client,r=e.clientOptions,o=e.initialActive,s=e.fullscreen,l=e.policyText,u=e.mapConfig,p=e.activationText,m=e.feedbackUrl;let T=n;if(T||(T=it.a),t({type:Le,title:a}),t({type:ge,avatar:T}),t(c(i,r)),t(N()),l&&''!==l&&t({type:Re,policyText:l}),p&&''!==p&&t({type:Ge,activationText:p}),m&&t({type:He,feedbackUrl:m}),u){const e=u.googleMapsKey,a=u.centerCoordinates,n=me()(a,'lat',null),i=me()(a,'lng',null);if(e&&''!==e&&t({type:We,googleMapsKey:e}),a)try{if('object'==typeof a&&null!==n&&null!==i)t({type:Ve,centerCoordinates:a});else throw new Error('Please provide valid latitude and longitude coordinates, see README')}catch(e){console.log(e)}}!0===o?(t({type:Pe}),t(d('Welcome')),t(y())):t(M()),!0===s?t(L()):t(g())}}function j(e){return{type:_e,value:e}}function f(e){return(t)=>{t(u(e))}}function x(e){return{type:Je,value:e}}function I(e){return{type:Be,value:e}}function w(e){return Object(O.createElement)(ma,{message:e.text,entity:e.entity,key:e.key,timestamp:e.systemTime,isLoading:!1})}function h(e){return Object(O.createElement)(ma,{key:'loading',entity:'bot',timestamp:e.systemTime,isLoading:e.loading})}function b(e){return Object(O.createElement)(ln,{feedbackData:e.payload.feedback,session:e.session,entity:e.entity,key:e.key,isLoading:!1,timestamp:e.systemTime})}function C(e,t){return Object(O.createElement)(ma,{message:e.text,entity:e.entity,key:e.key,isLoading:!1,timestamp:e.systemTime,showTimestamp:t})}function D(e){return Object(O.createElement)(wa,{data:e.card,timestamp:e.systemTime,key:e.key})}function v(e){return Object(O.createElement)(Za,{data:e.payload.mapPayload,timestamp:e.systemTime,key:e.key})}function S(e){return!(256<e.length)}function k(e){const t={value:e,charLength:e.length||0,maxExceeded:255<e.length};return{type:Ee,userInput:t}}function z(){return(e,t)=>{var a=t();const n=a.userInput,i=n.value.trim();if(i&&''!==i){const t=S(n.value);t&&(e(p(n.value)),e(k('')))}}}Object.defineProperty(t,'__esModule',{value:!0});var O=a(0),U=a.n(O),P=a(2),A=a.n(P),Y=a(11),Q=a.n(Y),R=a(1),W=a.n(R),V=a(21),G=a.n(V),_=a(22),H=a.n(_),B=a(23),J=a.n(B),Z=a(24),F=a.n(Z),K=a(4),X=a.n(K),q=a(6),$=a.n(q),ee=a(25),te=a.n(ee),ae=a(26),ne=a.n(ae),ie=a(27),re=a.n(ie),oe=a(28),se=a.n(oe),le=a(29),de=a.n(le),ce=a(12),ue=a.n(ce),pe=a(13),me=a.n(pe),ye=a(3),Me=a.n(ye);const Le='SET_TITLE',ge='SET_AVATAR',Te='SAVE_CLIENT',Ne='SAVE_RESPONSE',Ee='SAVE_USER_INPUT',je='SAVE_USER_RESPONSE',fe='INITIATE_LOADING',xe='TIMER_START',Ie='UPDATE_CURRENT_TIME',we='SHOW_BUTTON_BAR',he='HIDE_BUTTON_BAR',be='DISPLAY_ERROR',Ce='CLEAR_ERROR',De='SHOW_WINDOW',ve='HIDE_WINDOW',Se='FULLSCREEN',ke='WINDOWED',ze='RECEIVE_WEBHOOK_DATA',Oe='DISABLE_INPUT',Ue='ENABLE_INPUT',Pe='SET_CONVERSATION_STARTED',Ae='SET_CONVERSATION_ENDED',Ye='SHOW_PRIVACY_POLICY',Qe='HIDE_PRIVACY_POLICY',Re='SET_PRIVACY_POLICY',We='SET_GOOGLE_MAPS_KEY',Ve='SET_CENTER_COORDINATES',Ge='SET_ACTIVATION_TEXT',_e='SAVE_FEEDBACK_INPUT',He='SET_FEEDBACK_URL',Be='SET_FEEDBACK_SUBMITTED',Je='SET_FEEDBACK_OPTIONS',Ze='yyyy-MM-dd\'T\'HH:mm:ss.SSS';var Fe=a(14),Ke=a.n(Fe),Xe=a(30),qe=a.n(Xe),$e=a(15),et=a.n($e);class tt{constructor(e){if(!e||!e.textUrl)throw new Error('Fulfillment URL is required to generate a conversation client');this.textUrl=e.textUrl,this.eventUrl=e.eventUrl,this.uuid=et()()}encodeQueryData(e){const t=[];for(const a in e)t.push(`${encodeURIComponent(a)}=${encodeURIComponent(e[a])}`);return t.join('&')}textRequest(e){if(!e)throw new Error('Query should not be empty');const t={query:e,uuid:this.uuid},a=this.encodeQueryData(t),n=`${this.textUrl}?${a}`;return i(n,2)}eventRequest(e){if(!e)throw new Error('Query should not be empty');const t={query:e,uuid:this.uuid},a=this.encodeQueryData(t),n=`${this.eventUrl}?${a}`;return fetch(n).then((e)=>e.json()).catch((e)=>{throw new Error(e)})}}var at=function(){function e(e,t){var a=[],n=!0,i=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(a.push(o.value),!(t&&a.length===t));n=!0);}catch(e){i=!0,r=e}finally{try{!n&&s['return']&&s['return']()}finally{if(i)throw r}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),nt=a(31),it=a.n(nt);const rt=W()(re.a)`
  && {
    display: ${(e)=>e.active?'flex':'none'};
    pointer-events: auto;
    width: ${(e)=>e.activationtext?'auto':'56px'};
    height: ${(e)=>e.activationtext?'auto':'56px'};
    padding: ${(e)=>e.activationtext?'4px 6px':'auto'};
    border-radius: ${(e)=>e.activationtext?'20px':'50%'};
  }
`,ot=W.a.div`
  text-transform: none;
  padding-right: 10px;
  color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
`,st=W()(ue.a)`
  && {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 50% 50% 0px 50%;
  }
`;class lt extends O.PureComponent{render(){var e=this.props;const t=e.title,a=e.windowVisible,n=e.showWindow,i=e.activationText,r=e.theme,o=e.avatar,s=i?Object(O.createElement)(U.a.Fragment,null,Object(O.createElement)(st,{alt:t,src:o}),Object(O.createElement)(ot,{theme:r},i)):Object(O.createElement)(se.a,null);return Object(O.createElement)(de.a,{in:!a,unmountOnExit:!0},Object(O.createElement)(rt,{color:'primary',onClick:n,active:a?0:1,activationtext:i?1:0},s))}}var dt=Object(q.withTheme)()(Object(P.connect)((e)=>({title:e.config.title,windowVisible:e.config.windowVisible,activationText:e.config.activationText,avatar:e.config.avatar}),(e)=>({showWindow:()=>{e(y())}}))(lt)),ct=a(32),ut=a.n(ct),pt=a(5),mt=a.n(pt),yt=a(33),Mt=a.n(yt),Lt=a(34),gt=a.n(Lt),Tt=a(35),Nt=a.n(Tt),Et=a(16),jt=a.n(Et),ft=a(36),xt=a.n(ft),It=a(37),wt=a.n(It);const ht=W()(ue.a)`
  && {
    flex: 0 0 32px;
    width: 32px;
    height: 32px;
    margin-right: 16px;
    border-radius: 50% 50% 0px 50%;
  }
`,bt=W.a.div`
  position: absolute;
  bottom: -1px;
  left: 27px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid ${X.a[100]};
`,Ct=W.a.div`
  && {
    position: relative;
    background: ${(e)=>e.theme.palette.header.main};
    padding: 16px;
    height: 32px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    z-index: 1;
    grid-area: header;
    box-sizing: content-box; /*For WordPress*/
    line-height: normal; /*For WordPress*/
  }
`,Dt=W()(mt.a)`
  && {
    font-family: 'Product Sans';
    font-weight: 400;
    height: 32px;
    font-size: 18px;
    line-height: 32px;
    flex: 1;
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
  }
`,vt=W()(jt.a)`
  && {
    padding: 6px;
    flex: 0;
    cursor: pointer;
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`;class St extends O.PureComponent{render(){var e=this.props;const t=e.title,a=e.theme,n=e.hideWindow,i=e.showWindowed,r=e.showFullscreen,o=e.fullscreen,s=e.avatar,l=e.showPrivacyPolicy;return Object(O.createElement)(Ct,{theme:a},Object(O.createElement)(bt,null),Object(O.createElement)(ht,{alt:t,src:s}),Object(O.createElement)(Dt,{theme:a,variant:'h6'},t),Object(O.createElement)(wt.a,{title:'Privacy Policy',placement:'bottom'},Object(O.createElement)(vt,{theme:a,onClick:l,"aria-label":'Windowed'},Object(O.createElement)(Nt.a,{fontSize:'small'}))),o?Object(O.createElement)(vt,{theme:a,onClick:i,"aria-label":'Windowed'},Object(O.createElement)(gt.a,{fontSize:'small'})):Object(O.createElement)(vt,{theme:a,onClick:r,"aria-label":'Fullscreen'},Object(O.createElement)(Mt.a,{fontSize:'small'})),Object(O.createElement)(vt,{theme:a,onClick:n,"aria-label":'Close'},Object(O.createElement)(xt.a,{fontSize:'small'})))}}var kt=Object(q.withTheme)()(Object(P.connect)((e)=>({title:e.config.title,fullscreen:e.config.fullscreen,avatar:e.config.avatar}),{hideWindow:M,showFullscreen:L,showWindowed:g,showPrivacyPolicy:function(){return{type:Ye}}})(St)),zt=a(38),Ot=a.n(zt),Ut=a(39),Pt=a.n(Ut),At=a(40),Yt=a.n(At),Qt=a(41),Rt=a.n(Qt),Wt=a(42),Vt=a.n(Wt),Gt=a(7),_t=a.n(Gt);const Ht=W()(Pt.a)`
  && {
    position: absolute;
  }
`;class Bt extends O.PureComponent{render(){var e=this.props;const t=e.hidePrivacyPolicy,a=e.privacyPolicyVisible,n=e.privacyPolicy,i=e.parentRef;return Object(O.createElement)(Ht,{open:a,onClose:t,"aria-labelledby":'privacy-policy',container:i,scroll:'paper'},Object(O.createElement)(Ot.a,null,'Privacy Statement'),Object(O.createElement)(Rt.a,null,Object(O.createElement)(Vt.a,null,n)),Object(O.createElement)(Yt.a,null,Object(O.createElement)(_t.a,{onClick:t,color:'primary'},'Close')))}}var Jt=Object(P.connect)((e)=>({privacyPolicyVisible:e.config.privacyPolicyVisible,privacyPolicy:e.config.privacyPolicy}),{hidePrivacyPolicy:function(){return{type:Qe}}})(Bt),Zt=a(43),Ft=a.n(Zt),Kt=a(44),Xt=a.n(Kt),qt=a(17),$t=a.n(qt),ea=a(9),ta=a.n(ea),aa=a(45),na=a.n(aa);const ia=W.a.div`
  text-align: center;
  width: 42px;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`,ra=W.a.div`
  animation: dot-keyframes 1s infinite ease-in-out;
  background-color: ${na.a[900]};
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
`;class oa extends O.PureComponent{render(){return Object(O.createElement)(ia,null,Object(O.createElement)(ra,null),Object(O.createElement)(ra,null),Object(O.createElement)(ra,null))}}const sa=W.a.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 15px 16px 15px 16px;
  height: min-content;
  align-items: ${(e)=>'user'===e.entity?'flex-end':'flex-start'};
`,la=W.a.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${(e)=>'user'===e.entity?'flex-end':'flex-start'};
`,da=W.a.div`
  && {
    background: ${X.a[400]};
    border-top-right-radius: 10px;
    border-top-left-radius: 1px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 12px;
  }
`,ca=W.a.div`
  && {
    max-width: 360px;
    overflow: hidden;
    background-color: ${(e)=>e.theme.palette.primary.main};
    color: #ffffff;
    border-top-left-radius: 10px;
    border-top-right-radius: 1px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 12px;
  }
`,ua=W()(mt.a)`
  && {
    color: ${X.a[500]};
    margin-top: 6px;
    padding-left: 5px;
    padding-right: 2px;
  }
`;class pa extends O.PureComponent{render(){var e=this.props;const t=e.message,a=e.entity,n=e.isLoading,i=e.timestamp,r=e.currentTime,o=e.theme,s=e.showTimestamp,l=e.error,d=Object(ye.parse)(i,Ze,new Date(r)),c=Object(ye.isSameDay)(new Date,d),u=Object(ye.isSameDay)(d,Object(ye.subDays)(new Date,1));let p=null;p=c?`Today ${Object(ye.format)(d,'h:mm aa')}`:u?`Yesterday ${Object(ye.format)(d,'h:mm aa')}`:Object(ye.format)(d,'MMMM dd, yyyy h:mm aa');let m;t&&''!==t[0]?m=t:(console.error('Message.js, class Message, render(), this.props: ',this.props),m=['Oops! Something happened with the connection. Please try again.']);let y=Object(O.createElement)(oa,null);n&&l&&(y=l);const M='user'===a?Object(O.createElement)(ca,{elevation:1,theme:o},t):Object(O.createElement)(da,{elevation:1},n?y:Object(O.createElement)($t.a,{options:{forceBlock:!0,overrides:{h6:{component:mt.a,props:{variant:'h6'}},p:{component:mt.a,props:{variant:'body1'}},a:{component:ta.a}}}},m[0]));return Object(O.createElement)(sa,{entity:a},Object(O.createElement)(la,{entity:a},M),s?Object(O.createElement)(ua,{variant:'caption'},p):null)}}var ma=Object(q.withTheme)()(Object(P.connect)((e)=>({currentTime:e.conversation.currentTime,error:e.error}))(pa)),ya=a(10),Ma=a.n(ya),La=a(18),ga=a.n(La),Ta=a(8),Na=a.n(Ta),Ea=a(46),ja=a.n(Ea);const fa=W()(Ma.a)`
  && {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #fff;
    margin: 15px 16px 15px 16px;
    white-space: pre-line;
  }
`,xa=W()(ja.a)`
  && {
    height: ${(e)=>e.image&&''!==e.image?'200px':'0px'};
    background-size: cover;
    background-position: center center;
  }
`;class Ia extends O.PureComponent{render(){var e=this.props.data;const t=e.title,a=e.subtitle,n=e.imageUrl,i=e.buttons;return Object(O.createElement)(fa,null,n?Object(O.createElement)(xa,{image:encodeURI(n),title:''}):null,Object(O.createElement)(Na.a,null,Object(O.createElement)(mt.a,{gutterBottom:!0,variant:'h6'},t),Object(O.createElement)($t.a,{options:{forceBlock:!0,overrides:{h6:{component:mt.a,props:{variant:'h6'}},p:{component:mt.a,props:{variant:'body1'}},a:{component:ta.a}}}},a)),Object(O.createElement)(ga.a,null,i.map((e,t)=>{const a=`card-${t}${Object(ye.format)(new Date,Ze)}`;return Object(O.createElement)(_t.a,{href:e.postback,target:'_blank',size:'small',color:'primary',key:a},e.text)})))}}var wa=Object(P.connect)((e)=>({inputValue:e.userInput}))(Ia),ha=a(47),ba=a.n(ha),Ca=a(48),Da=a.n(Ca),va=a(49),Sa=a.n(va),ka=a(50),za=a.n(ka),Oa=a(51),Ua=a.n(Oa),Pa=a(52),Aa=a.n(Pa),Ya=a(53),Qa=a.n(Ya),Ra=a(54),Wa=a.n(Ra);const Va=W()(Ma.a)`
  && {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #fff;
    margin: 15px 16px 15px 16px;
    white-space: pre-line;
  }
`,Ga=W.a.div`
  height: 150px;
  font-size: 12px;
  margin-top: 10px;
`,_a=W()(Na.a)`
  &&& {
    padding-top: 0;
    padding-bottom: 0;
  }
`,Ha=W()(Sa.a)`
  td {
    padding: 4px 0px 4px 0px;
  }
  tr:last-of-type {
    td {
      border-bottom: none;
    }
  }
`,Ba=W()(za.a)`
  && {
    width: 70%;
    padding: 4px 0px 4px 0px;
  }
`,Ja=W()(za.a)`
  &&& {
    width: 20%;
    padding-right: 0;
    text-align: right;
  }
`;var Za=Object(P.connect)((e)=>({googleMapsKey:e.config.googleMapsKey}))(function(e){const t=e.data,a=e.googleMapsKey,n='230px',r={width:30,height:30},i=`https://maps.googleapis.com/maps/api/js?key=${a}&v=3`,o=(e)=>{const t=`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${e.placeId}`;window.open(t,'_blank')},s=Object(Pa.withScriptjs)(Object(Pa.withGoogleMap)(()=>Object(O.createElement)(Pa.GoogleMap,{defaultZoom:8,defaultCenter:t.nearestLocations[0],defaultOptions:{zoomControl:!0,mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1}},t.locations.map((e,t)=>Object(O.createElement)(Pa.Marker,{key:t,position:{lat:e.lat,lng:e.lng},icon:{url:Qa.a,scaledSize:r},onClick:()=>o(e)})),Object(O.createElement)(Pa.Marker,{position:{lat:t.currentGeocode.lat,lng:t.currentGeocode.lng},icon:{url:Wa.a,scaledSize:r}}))));return Object(O.createElement)(Va,null,Object(O.createElement)(ba.a,{title:'Office Locations'}),Object(O.createElement)(_a,null,Object(O.createElement)(s,{googleMapURL:i,loadingElement:Object(O.createElement)('div',{style:{height:`${n}`}}),containerElement:Object(O.createElement)('div',{style:{height:`${n}`}}),mapElement:Object(O.createElement)('div',{style:{height:'100%'}})}),Object(O.createElement)(Ga,null,Object(O.createElement)(Da.a,{padding:'dense'},Object(O.createElement)(Ha,null,t.nearestLocations.map((e,t)=>Object(O.createElement)(Ua.a,{key:t},Object(O.createElement)(Ba,{padding:'dense'},Object(O.createElement)(mt.a,null,Object(O.createElement)(ta.a,{href:`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${e.placeId}`,target:'blank'},e.street,', ',e.city))),Object(O.createElement)(Ja,{padding:'dense'},e.distance))))))))}),Fa=a(55),Ka=a.n(Fa),Xa=a(56),qa=a.n(Xa),$a=a(57),en=a.n($a),tn=a(58),an=a.n(tn);class nn extends O.PureComponent{render(){var e=this.props;const t=e.feedbackInputs,a=e.feedbackUrl,n=e.saveFeedbackInput,i=e.setFeedbackSubmitted,r=e.sendFeedback,o=e.session,s=(e)=>(t)=>{const a={value:e,checked:t.target.checked};n(a)},l=(e)=>e.filter((e)=>e.checked?e.value:null).map((e)=>e.value),d=(e)=>{fetch(a,{method:'POST',body:JSON.stringify(e),headers:{"Content-Type":'application/json'}})};return Object(O.createElement)(U.a.Fragment,null,Object(O.createElement)(Na.a,null,Object(O.createElement)(mt.a,{gutterBottom:!0,variant:'h6'},t.wasHelpful?'Why was Gen helpful?':'Why was Gen not helpful?'),Object(O.createElement)(Ka.a,{component:'fieldset'},Object(O.createElement)(qa.a,null,t.feedbackList?t.feedbackList.map((e)=>Object(O.createElement)(en.a,{key:e.value,control:Object(O.createElement)(an.a,{checked:e.checked,onChange:s(e.value),value:e.value}),label:e.value})):null))),Object(O.createElement)(ga.a,null,Object(O.createElement)(_t.a,{size:'small',color:'primary',onClick:()=>{const e={wasHelpful:t.wasHelpful,session:o,feedbackList:l(t.feedbackList)};d(e),r('Feedback complete'),i(!0)}},'Submit')))}}var rn=Object(P.connect)((e)=>({feedbackInputs:e.feedbackInput,feedbackUrl:e.config.feedbackUrl}),(e)=>({saveFeedbackInput:(t)=>{e(j(t))},setFeedbackSubmitted:()=>{e(I(!0))},sendFeedback:(t)=>{e(f(t))}}))(nn);const on=W()(Ma.a)`
  && {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #fff;
    margin: 15px 16px 15px 16px;
    white-space: pre-line;
  }
`;class sn extends O.PureComponent{componentDidMount(){var e=this.props;const t=e.setFeedbackOptions,a=e.feedbackData;t(a)}render(){var e=this.props;const t=e.session,a=e.feedbackInputs;return Object(O.createElement)(on,null,a.submitted?Object(O.createElement)(Na.a,null,'Thank you. Your feedback is important to us and will help improve Gen.'):Object(O.createElement)(rn,{session:t}))}}var ln=Object(P.connect)((e)=>({feedbackInputs:e.feedbackInput}),(e)=>({setFeedbackOptions:(t)=>{e(x(t))}}))(sn);const dn={giant:1170,desktop:992,tablet:768,phone:620},cn=Object.keys(dn).reduce((e,t)=>{const a=dn[t]/16;return e[t]=(...e)=>R.css`
    @media (max-width: ${a}em) {
      ${Object(R.css)(...e)};
    }
  `,e},{}),un=W.a.div`
  display: flex;
  flex-direction: column;
  /* Vertically flips the container element to achieve flex-direction:column-reverse effect */
  transform: scale(1, -1);
  overflow: auto;
  ${cn.tablet`
    flex-direction: column-reverse;
    overflow: auto;
    transform: none;
  `};
`,pn=W.a.div`
  background: ${X.a[100]};
  z-index: 4;
  grid-area: chatwindow;
  margin-bottom: 1px;
  margin-top: 8px;
`,mn=W.a.div`
  /* Vertically flips the content element so that the messages won't be upside down */
  transform: scale(1, -1);

  ${cn.tablet`
   transform: none;
  `};
`;class yn extends O.PureComponent{constructor(e){super(e),Object.defineProperty(this,'parseMessages',{enumerable:!0,writable:!0,value:()=>{const e=this.props.messages,t=[];return e.forEach((e)=>{const a={systemTime:e.systemTime,entity:e.entity,session:e.messageSession};if(e.loading){const n=et()();a.key=n;const i=Xt()(e,a);t.push(i)}else if('bot'===e.entity)e.responses.forEach((e)=>{if('text'===e.type||'card'===e.type||'payload'===e.type){const n=et()();a.key=n;const i=Xt()(e,a);t.push(i)}});else if('user'===e.entity){const n=et()();a.key=n;const i=Xt()(e,a);t.push(i)}}),t}}),Object.defineProperty(this,'createMessageElements',{enumerable:!0,writable:!0,value:()=>{const e=this.parseMessages(),t=[];e.forEach((a,n)=>{let i=!1;n===e.length-1&&(i=!0),a.loading?t.push(h(a)):'user'===a.entity?t.push(w(a)):'bot'===a.entity&&'text'===a.type?t.push(C(a,i)):'bot'===a.entity&&'card'===a.type?t.push(D(a)):'bot'===a.entity&&'payload'===a.type&&a.payload.mapPayload?t.push(v(a)):'bot'===a.entity&&'payload'===a.type&&a.payload.feedback?t.push(b(a)):(console.error('ChatWindow.js, createMessageElements(): newMessages, msg, i',e,a,n),t.push(C({text:['Something went wrong.']})))}),t.sort((e,t)=>{const a=Object(ye.parse)(e.props.timestamp,Ze,new Date(e.props.timestamp)),n=Object(ye.parse)(t.props.timestamp,Ze,new Date(t.props.timestamp)),i=Object(ye.differenceInMilliseconds)(a,n);return i}),this.setState({messageElements:t})}}),Object.defineProperty(this,'handleWheel',{enumerable:!0,writable:!0,value:(t)=>{t.deltaY&&(t.preventDefault(),t.currentTarget.scrollTop-=2*(parseFloat(getComputedStyle(t.currentTarget).getPropertyValue('font-size'))*(0>t.deltaY?-1:1)))}}),Object.defineProperty(this,'componentRef',{enumerable:!0,writable:!0,value:U.a.createRef(null)}),this.messages=[],this.state={messageElements:[]}}componentDidUpdate(){const e=this.parseMessages();Ft()(this.messages,e)||(this.messages=e,this.createMessageElements()),this.componentRef.current&&this.componentRef.current.addEventListener('wheel',this.handleWheel)}render(){const e=this.state.messageElements;return Object(O.createElement)(un,{ref:this.componentRef},Object(O.createElement)(pn,{elevation:1,square:!0},Object(O.createElement)(mn,null,e)))}}var Mn=Object(P.connect)((e)=>({messages:e.conversation.messages,buttonBarVisible:e.buttonBar.visible,error:e.error}))(yn),Ln=a(59),gn=a.n(Ln),Tn=a(60),Nn=a.n(Tn);const En=W.a.div`
  grid-area: userinput;
  background: #fefefe;
  display: flex;
  display: ${(e)=>e.visible?'none':'flex'};
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  z-index: 4;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`,jn=W()(Nn.a)`
  && {
    padding: 8px 4px 8px 16px;
    padding-bottom: ${(e)=>null!==e.helperText&&'16px'};
    /*All properties below are specified to combat WordPress*/
    & > textarea {
      border: none;
      width: 100%;
      outline: none;
      color: #000;
      height: 100%;
      padding: 0;
      font-size: 16px;
    }
  }
`,fn=W()(jt.a)`
  && {
    padding: 16px 12px 16px 4px;
    &:hover {
      background: transparent;
    }
  }
`;class xn extends O.PureComponent{constructor(){super(),this.handleKeyPress=this.handleKeyPress.bind(this)}handleKeyPress(t){13===t.charCode&&(this.props.submitUserInput(),t.preventDefault())}render(){var e=this.props;const t=e.saveUserInput,a=e.inputValue,n=e.shouldDisable,i=a.value,r=`${a.charLength}/255`,o=a.maxExceeded;let s=null;return s=o?`Exceeded character limit: ${r}`:null,Object(O.createElement)(En,{visible:n},Object(O.createElement)(jn,{multiline:!0,rowsMax:'4',fullWidth:!0,InputProps:{disableUnderline:!0},placeholder:'Send a message',helperText:s,FormHelperTextProps:{style:{color:'#cd5c5c',margin:0}},onChange:t,value:i,onKeyPress:this.handleKeyPress}),Object(O.createElement)(fn,{onClick:this.props.submitUserInput,"aria-label":'Send',color:'primary',disabled:o,disableRipple:!0},Object(O.createElement)(gn.a,null)))}}var In=Object(P.connect)((e)=>({inputValue:e.userInput,shouldDisable:e.conversation.disableInput}),(t)=>({saveUserInput:(a)=>{t(k(a.target.value))},submitUserInput:()=>{t(z())}}))(xn),wn=a(61),hn=a.n(wn);const bn=W.a.div`
  grid-area: buttonbar;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  padding: ${(e)=>e.visible?'4px 4px 16px 16px':'0 16px'};
  background: ${X.a[300]};
  border-top: ${(e)=>e.visible?'1px solid rgba(0, 0, 0, 0.2)':'none'};
  overflow-y: auto;
`,Cn=W()(_t.a)`
  && {
    margin-right: 12px;
    margin-top: 12px;
    display: ${(e)=>'true'===e.visible?'block':'none'};
  }
`;class Dn extends O.PureComponent{render(){var e=this.props;const t=e.visible,a=e.messages,n=e.sendQuickReply,i=hn()(a,(e)=>{const t=Ke()(e.responses,['type','suggestion']);return t}),r=[];if(i){const e=i.responses.filter((e)=>'suggestion'===e.type);for(const a of e)for(const e of a.suggestions)r.push({label:e,id:i.messageId,visible:t})}return Object(O.createElement)(bn,{visible:t},r.map((e,t)=>Object(O.createElement)(Cn,{size:'small',variant:'outlined',color:'secondary',key:`${e.id}-btn${t}`,visible:e.visible.toString(),onClick:()=>n(e.label)},e.label)))}}var vn=Object(P.connect)((e)=>({visible:e.buttonBar.visible,messages:e.conversation.messages}),(e)=>({sendQuickReply:(t)=>{e(m(t))}}))(Dn);const Sn=W()(ut.a)`
  && {
    width: 400px;
    height: 70vh;
    max-height: 600px;
    overflow: hidden;
    position: absolute;
    bottom: 48px;
    right: 48px;
    transition: width 120ms ease-in-out, height 150ms ease-in-out;
    pointer-events: none;
    ${(e)=>e.fullscreen&&R.css`
        width: calc(100% - 96px);
        height: calc(100% - 96px);
      `};
    ${(e)=>!e.visible&&R.css`
        width: 0;
        height: 0;
      `};

    ${cn.phone`
    width: ${(e)=>e.visible?'calc(100% - 20px)':'0'};
    height: ${(e)=>e.visible?'calc(100% - 96px)':'0'};
    right: 10px;
    max-width: none;
    max-height: none;
  `};
  }
`,kn=W.a.div`
  && {
    width: 100%;
    height: 100%;
    transform-origin: bottom right;
    pointer-events: auto;
    background: ${X.a[100]};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 64px 1fr auto min-content;
    grid-template-areas:
      'header'
      'chatwindow'
      'buttonbar'
      'userinput';
    box-sizing: content-box;
  }
`;class zn extends O.PureComponent{constructor(e){super(e),this.containerRef=U.a.createRef()}render(){var e=this.props;const t=e.windowVisible,a=e.fullscreen;return Object(O.createElement)(Sn,{elevation:4,fullscreen:a?1:0,visible:t?1:0},Object(O.createElement)(kn,{ref:this.containerRef,className:'mui-fixed'},Object(O.createElement)(kt,null),Object(O.createElement)(Jt,{parentRef:this.containerRef.current}),Object(O.createElement)(Mn,null),Object(O.createElement)(vn,null),Object(O.createElement)(In,null)))}}var On=Object(P.connect)((e)=>({windowVisible:e.config.windowVisible,fullscreen:e.config.fullscreen}))(zn),Un=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Pn={avatar:null,title:'Chat Window',windowVisible:!1,fullscreen:!1,privacyPolicyVisible:!1,googleMapsKey:'',centerCoordinates:'',activationText:'',privacyPolicy:'Please do not enter any personally identifiable information such as SSN, Date of Birth, Case Number or last name.',feedbackUrl:''};var An=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Yn={client:null,clientName:null,messages:[],webhookPayload:null,disableInput:!1,lastUpdateTime:Object(ye.format)(new Date,Ze),currentTime:Object(ye.format)(new Date,Ze),headerTime:'Now',timer:null,conversationStarted:!1};var Qn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Rn={visible:!1,buttons:[]};const Wn={value:'',charLength:0,maxExceeded:!1};var Vn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Gn={submitted:!1,wasHelpful:null,feedbackList:null};const _n='';const Hn=Object(Y.combineReducers)({config:function(e=Pn,t){switch(t.type){case Qe:return Un({},e,{privacyPolicyVisible:!1});case Ye:return Un({},e,{privacyPolicyVisible:!0});case Re:return Un({},e,{privacyPolicy:t.policyText});case We:return Un({},e,{googleMapsKey:t.googleMapsKey});case Ve:return Un({},e,{centerCoordinates:t.centerCoordinates});case Ge:return Un({},e,{activationText:t.activationText});case ge:return Un({},e,{avatar:t.avatar});case Le:return Un({},e,{title:t.title});case De:return Un({},e,{windowVisible:!0});case ve:return Un({},e,{windowVisible:!1});case Se:return Un({},e,{fullscreen:!0});case ke:return Un({},e,{fullscreen:!1});case He:return Un({},e,{feedbackUrl:t.feedbackUrl});default:return e;}},conversation:function(e=Yn,t){switch(t.type){case Te:return An({},e,{client:t.client,clientName:t.clientName});case Ie:return An({},e,{headerTime:t.headerTime,currentTime:t.currentTime});case xe:return An({},e,{timer:t.timer});case fe:return An({},e,{messages:[...e.messages,{loading:!0,entity:'bot',systemTime:Object(ye.format)(new Date,Ze)}]});case Ne:return An({},e,{lastUpdateTime:Object(ye.format)(new Date,Ze),headerTime:'Now',messages:t.newConversationArray});case je:return An({},e,{lastUpdateTime:Object(ye.format)(new Date,Ze),headerTime:'Now',messages:[...e.messages,t.response].sort((e,t)=>{const a=Object(ye.parse)(e.systemTime,Ze,new Date(e.systemTime)),n=Object(ye.parse)(t.systemTime,Ze,new Date(t.systemTime)),i=Object(ye.differenceInMilliseconds)(n,a);return i})});case ze:return An({},e,{webhookPayload:t.payload});case Ue:return An({},e,{disableInput:!1});case Oe:return An({},e,{disableInput:!0});case Pe:return An({},e,{conversationStarted:!0});case Ae:return An({},e,{conversationStarted:!1});default:return e;}},buttonBar:function(e=Rn,t){switch(t.type){case we:return Qn({},e,{visible:!0});case he:return Qn({},e,{visible:!1});default:return e;}},userInput:function(e=Wn,t){switch(t.type){case Ee:return t.userInput;default:return e;}},feedbackInput:function(e=Gn,t){switch(t.type){case _e:return Vn({},e,{feedbackList:e.feedbackList.map((e)=>e.value===t.value.value?Vn({},e,{checked:t.value.checked}):e)});case Je:return Vn({},e,{wasHelpful:t.value.helpful,feedbackList:t.value.options.map((e)=>Vn({},e,{checked:!1}))});case Be:return Vn({},e,{submitted:!0});default:return e;}},error:function(e=_n,t){switch(t.type){case be:return t.error;case Ce:return _n;default:return e;}}});G.a.load({google:{families:['Roboto:300,400,500','Product Sans:400']}});const Bn=W.a.div`
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
  line-height: normal; /*For WordPress*/
  & > * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

    & ::-webkit-scrollbar-thumb {
      background-color: ${X.a[600]};
      -webkit-border-radius: 8px;
      border-radius: 8px;
      border: 2px solid ${X.a[100]};
    }
    & ::-webkit-scrollbar {
      background-color: ${X.a[100]};
      width: 8px;
    }
  }
`;class Jn extends O.PureComponent{constructor(e){super(e),this.store=Object(Y.createStore)(Hn,Object(Y.applyMiddleware)(J.a)),this.currentValue=null,this.theme=n(this.props.primaryColor,this.props.secondaryColor,this.props.headerColor)}componentDidMount(){this.store.dispatch(E(this.props,this.theme)),this.unsubscribe=this.store.subscribe(()=>this.handleChange(this.store))}componentWillUnmount(){this.unsubscribe()}select(e){return e.conversation.webhookPayload}handleChange(e){const t=this.currentValue;this.currentValue=this.select(e.getState()),t!==this.currentValue&&this.props.onPayload&&this.props.onPayload(this.currentValue)}render(){return Object(O.createElement)(P.Provider,{store:this.store},Object(O.createElement)(H.a,{theme:this.theme},Object(O.createElement)(Bn,null,Object(O.createElement)(On,null),Object(O.createElement)(dt,null))))}}t['default']=Jn},function(e){e.exports=require('webfontloader')},function(e){e.exports=require('@material-ui/core/styles/MuiThemeProvider')},function(e){e.exports=require('redux-thunk')},function(e){e.exports=require('whatwg-fetch')},function(e){e.exports=require('@material-ui/core/colors')},function(e){e.exports=require('validator/lib/isHexColor')},function(e){e.exports=require('@material-ui/core/Fab')},function(e){e.exports=require('@material-ui/icons/Chat')},function(e){e.exports=require('@material-ui/core/Zoom')},function(e){e.exports=require('lodash/omit')},function(e){e.exports='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNTkyIDE3MjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1OTIgMTcyODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGQkRCMzI7c3Ryb2tlOiNGQURBMzI7fQoJLnN0MXtmaWxsOiNENDczOTQ7fQoJLnN0MntzdHJva2U6I0ZBREEzMjt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE4MTQuMjMsMTMzNmMzMC4yNC00Mi45LDU1LjQ5LTg4LjgsNzUuNDItMTM2LjgyYzM1LjY5LTg1Ljk5LDU0LjM1LTE3OC43NSw1NC4yLTI3My4wOQoJCWMtMC4yOC0zOTMuNTktMzE5LjI0LTcxMi42LTcxMi44My03MTIuOTRjLTE1OS4wNiwwLTMwNS45NCw1Mi4wOS00MjQuNTMsMTQwLjE1QzY2OS40Myw0ODAuNDEsNTgzLjY1LDY2Mi4wNSw1ODMuNjUsODYzLjcyCgkJYzAsMzg0LjM5LDMxMS42MSw2OTUuOTksNjk1Ljk5LDY5NS45OWMxMTAuOTcsMC4wOSwyMjAuMzQtMjYuMzksMzE4Ljk4LTc3LjIyYzQuMjgtMi4yMSw4Ljc5LTMuOTQsMTMuNDYtNS4xN2wyMi4xNS01LjgyCgkJYzE3LjgxLTQuNjgsMzYuNzYtMS42Nyw1Mi4yNCw4LjNsMTEuODgsNy42NWMyMi43NiwxMC4zNCw0Ni45MSwxNy4yOSw3MS42OSwyMC42MmMyMC4yNSwzLjA5LDQwLjU4LDUuNTIsNjAuOTgsNy4zCgkJYzEwLjA4LDAuODgsMjAuMTcsMS42LDMwLjI4LDIuMTdjMjYuMjIsMS4yNyw2MC43MSwwLjE3LDg2LjYxLTIuODVjLTMyLjQtMjIuNy04Ny42Ny03My43My0xMDkuNjEtMTEyLjYybC0xOC4wMi0zNy4zNgoJCUMxODE2LjEsMTM1NS42NSwxODE0LjA2LDEzNDUuODQsMTgxNC4yMywxMzM2eiIvPgoJPHBhdGggZD0iTTExMTUuNDYsNTk1LjQ5YzIuMzMtMjIuNjgtNC42NS00MS4zNi0yNC41Ny01My41NmMtNDIuNDUtMjMuMTUtOTcuMjEsMC42Ny05MS43Nyw1My41NmMwLDI2LjU5LDAsNTMuMTgsMCw3OS43OAoJCWMtNS40NCw1Mi44OSw0OS4zMSw3Ni43MSw5MS43Nyw1My41NmMxOS45Mi0xMi4yLDI2LjkxLTMwLjg4LDI0LjU3LTUzLjU2QzExMTUuNDYsNjQ4LjY3LDExMTUuNDYsNjIyLjA4LDExMTUuNDYsNTk1LjQ5eiIvPgoJPHBhdGggZD0iTTE1NjEuMjUsNTk1LjQ5YzIuMzMtMjIuNjgtNC42NS00MS4zNi0yNC41Ny01My41NmMtNDIuNDUtMjMuMTUtOTcuMjEsMC42Ny05MS43Nyw1My41NmMwLDI2LjU5LDAsNTMuMTgsMCw3OS43OAoJCWMtNS40NCw1Mi44OSw0OS4zMSw3Ni43MSw5MS43Nyw1My41NmMxOS45Mi0xMi4yLDI2LjkxLTMwLjg4LDI0LjU3LTUzLjU2QzE1NjEuMjUsNjQ4LjY3LDE1NjEuMjUsNjIyLjA4LDE1NjEuMjUsNTk1LjQ5eiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTEyMDguOTksOTYzLjE2YzIwLjkzLDEwLjI2LDQ0LjQ2LDE2LjAzLDY5LjM0LDE2LjAzYzI0Ljg4LDAsNDguNDItNS43Niw2OS4zNC0xNi4wMwoJCWMtNy45NS0zMC44OC0zNS45OC01My42OS02OS4zNC01My42OVMxMjE2Ljk0LDkzMi4yOCwxMjA4Ljk5LDk2My4xNnoiLz4KCTxwYXRoIGQ9Ik0xMjA4Ljk5LDk2My4xNmM3Ljk1LTMwLjg4LDM1Ljk4LTUzLjY5LDY5LjM0LTUzLjY5czYxLjM5LDIyLjgxLDY5LjM0LDUzLjY5YzUyLjMxLTI1LjY2LDg4LjMyLTc5LjQ0LDg4LjMzLTE0MS42MwoJCWgtMzE1LjM0QzExMjAuNjcsODgzLjcyLDExNTYuNjgsOTM3LjUsMTIwOC45OSw5NjMuMTZ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTgwNi4zOCw0MDYuNjNjMTA2LjY3LDEyMi4yOSwxNzEuMzIsMjgyLjE5LDE3MS40NCw0NTcuMTljMC4yNCwxNTQuNDUtNTEuMTQsMzA0LjU1LTE0NS45OSw0MjYuNDUKCQljLTYuNyw5LjM5LTExLjMzLDIwLjA5LTEzLjU4LDMxLjRjLTMuNDksMTQuNC0yLDI5LjU2LDQuMjEsNDMuMDJsMTguMDIsMzcuMzZjMjEuOTQsMzguODksNzcuMjEsODkuOTIsMTA5LjYxLDExMi42MgoJCWMtMjUuOSwzLjAyLTYwLjM5LDQuMTItODYuNjEsMi44NWMtMzAuNTUtMS43LTYxLjAxLTQuODYtOTEuMjYtOS40N2MtMjQuNzgtMy4zMy00OC45My0xMC4yOC03MS42OS0yMC42MmwtMTEuODgtNy42NQoJCWMtMTUuNDgtOS45Ni0zNC40NC0xMi45Ny01Mi4yNC04LjNsLTIyLjE1LDUuODJjLTQuNjYsMS4yMi05LjE3LDIuOTYtMTMuNDYsNS4xN2MtOTguNjQsNTAuODMtMjA4LjAyLDc3LjMxLTMxOC45OCw3Ny4yMgoJCWMtMzg0LjM5LDAtNjk1Ljk5LTMxMS42MS02OTUuOTktNjk1Ljk5czMxMS42MS02OTUuOTksNjk1Ljk5LTY5NS45OWM3MC4zNywwLjA2LDEzOC4zLDEwLjU1LDIwMi4zMywzMC4wMgoJCWM1NS4xMyw2LjQxLDUzLjI5LTUzLjcsMjQuNDYtNjEuMzljLTcxLjY0LTIyLjMxLTE0Ny44MS0zNC4zMy0yMjYuNzktMzQuMzNjLTQyMC42NywwLTc2MS42OSwzNDEuMDItNzYxLjY5LDc2MS42OQoJCXMzNDEuMDIsNzYxLjY5LDc2MS42OSw3NjEuNjljMTI1Ljg0LDAsMjQ0LjU0LTMwLjUxLDM0OS4xMy04NC41NWM4LjQzLTIuNjIsMTUuMy00LjYzLDIyLjE1LTUuODJjNC45NywzLjY1LDEwLjIxLDcsMTUuNjcsMTAuMDgKCQljNzEuNDQsNDAuMjYsMzIyLjk0LDYxLjc2LDM4OS42My0wLjQyYzE5LjY4LTEyLjc3LDI1LjAxLTMwLjkzLTE3LjczLTU1LjY3Yy01Ljc4LTMuMzQtMTIuMzktNi43MS0xOS44Ni0xMC4wNwoJCWMtMjcuODYtMTIuNTMtMjkuMDgtMTUuMjEtNTMuMDItMzQuNDljLTI0Ljc1LTE5Ljk0LTQ3LjE2LTQwLjU3LTcyLjI5LTc4LjMzYy00LTguNi04LjQ0LTE4LjItMTMuNDEtMjkuMDIKCQljMC40OS0yLjE0LDEuMDItNC4zMSwxLjU4LTYuNTJjMTAwLjE4LTEyOC45NSwxNTkuODQtMjkwLjk2LDE1OS44NC00NjYuOWMwLTE5Ni44Ni03NC42OC0zNzYuMjgtMTk3LjI2LTUxMS40NwoJCUMxODA5LjA1LDMyMC4yNCwxNzYwLjExLDM2MS45LDE4MDYuMzgsNDA2LjYzeiIvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTE3MTEuNTMsMjM0LjcxYy0xOS4yNC0xMy4xNy0zOS4xMS0yNS40Ny01OS41Ni0zNi44NmMtMzMuOS0xOC44OC01Ni44MSw0My45LTMzLjcsNTYuNwoJCWMxNy42NSw5Ljc4LDM0Ljg0LDIwLjMsNTEuNTEsMzEuNTJDMTcwMy4yOSwzMDguNjMsMTc0Ny43NywyNTkuNTIsMTcxMS41MywyMzQuNzF6Ii8+CjwvZz4KPC9zdmc+Cg=='},function(e){e.exports=require('@material-ui/core/Paper')},function(e){e.exports=require('@material-ui/icons/Fullscreen')},function(e){e.exports=require('@material-ui/icons/FullscreenExit')},function(e){e.exports=require('@material-ui/icons/Info')},function(e){e.exports=require('@material-ui/icons/Close')},function(e){e.exports=require('@material-ui/core/Tooltip')},function(e){e.exports=require('@material-ui/core/DialogTitle')},function(e){e.exports=require('@material-ui/core/Dialog')},function(e){e.exports=require('@material-ui/core/DialogActions')},function(e){e.exports=require('@material-ui/core/DialogContent')},function(e){e.exports=require('@material-ui/core/DialogContentText')},function(e){e.exports=require('lodash/isEqual')},function(e){e.exports=require('lodash/merge')},function(e){e.exports=require('@material-ui/core/colors/green')},function(e){e.exports=require('@material-ui/core/CardMedia')},function(e){e.exports=require('@material-ui/core/CardHeader')},function(e){e.exports=require('@material-ui/core/Table')},function(e){e.exports=require('@material-ui/core/TableBody')},function(e){e.exports=require('@material-ui/core/TableCell')},function(e){e.exports=require('@material-ui/core/TableRow')},function(e){e.exports=require('react-google-maps')},function(e){e.exports='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjRUUzODQwIiBkPSJNMTIgMkM4LjEzIDIgNSA1LjEzIDUgOWMwIDUuMjUgNyAxMyA3IDEzczctNy43NSA3LTEzYzAtMy44Ny0zLjEzLTctNy03em0wIDkuNWMtMS4zOCAwLTIuNS0xLjEyLTIuNS0yLjVzMS4xMi0yLjUgMi41LTIuNSAyLjUgMS4xMiAyLjUgMi41LTEuMTIgMi41LTIuNSAyLjV6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg=='},function(e){e.exports='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9ImIiPjx1c2UgeGxpbms6aHJlZj0iI2EiIG92ZXJmbG93PSJ2aXNpYmxlIi8+PC9jbGlwUGF0aD48cGF0aCBjbGlwLXBhdGg9InVybCgjYikiIGZpbGw9IiMyOTc5RkYiIGQ9Ik0xMiAyQzguMTQgMiA1IDUuMTQgNSA5YzAgNS4yNSA3IDEzIDcgMTNzNy03Ljc1IDctMTNjMC0zLjg2LTMuMTQtNy03LTd6bTAgMmMxLjEgMCAyIC45IDIgMiAwIDEuMTEtLjkgMi0yIDJzLTItLjg5LTItMmMwLTEuMS45LTIgMi0yem0wIDEwYy0xLjY3IDAtMy4xNC0uODUtNC0yLjE1LjAyLTEuMzIgMi42Ny0yLjA1IDQtMi4wNXMzLjk4LjczIDQgMi4wNWMtLjg2IDEuMy0yLjMzIDIuMTUtNCAyLjE1eiIvPjwvc3ZnPg=='},function(e){e.exports=require('@material-ui/core/FormControl')},function(e){e.exports=require('@material-ui/core/FormGroup')},function(e){e.exports=require('@material-ui/core/FormControlLabel')},function(e){e.exports=require('@material-ui/core/Checkbox')},function(e){e.exports=require('@material-ui/icons/Send')},function(e){e.exports=require('@material-ui/core/TextField')},function(e){e.exports=require('lodash/findLast')}])});
//# sourceMappingURL=chatframe.js.map