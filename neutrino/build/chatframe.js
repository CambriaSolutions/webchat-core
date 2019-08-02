(function(e,t){'object'==typeof exports&&'object'==typeof module?module.exports=t():'function'==typeof define&&define.amd?define('chatframe',[],t):'object'==typeof exports?exports.chatframe=t():e.chatframe=t()})('undefined'==typeof self?this:self,function(){return function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(a,'a',a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='./',t(t.s=19)}([function(e){e.exports=require('react')},function(e){e.exports=require('styled-components')},function(e){e.exports=require('react-redux')},function(e){e.exports=require('date-fns')},function(e){e.exports=require('@material-ui/core/colors/grey')},function(e){e.exports=require('@material-ui/core/Typography')},function(e){e.exports=require('@material-ui/core/styles')},function(e){e.exports=require('@material-ui/core/Button')},function(e){e.exports=require('@material-ui/core/CardContent')},function(e){e.exports=require('@material-ui/core/Link')},function(e){e.exports=require('@material-ui/core/Card')},function(e){e.exports=require('redux')},function(e){e.exports=require('@material-ui/core/Avatar')},function(e){e.exports=require('lodash/get')},function(e){e.exports=require('lodash/find')},function(e){e.exports=require('uuid/v4')},function(e){e.exports=require('@material-ui/core/IconButton')},function(e){e.exports=require('markdown-to-jsx')},function(e){e.exports=require('@material-ui/core/CardActions')},function(e,t,a){e.exports=a(20)},function(e,t,a){'use strict';function n(e='lightBlue',t='pink',a='lightBlue'){const n={palette:{error:ee.red,contrastThreshold:3,tonalOffset:0.2},typography:{useNextVariants:!0},overrides:{MuiFab:{root:{position:'absolute',bottom:48,right:48}}}};if(ne()(e))n.palette.primary={main:e};else if(ee[e])n.palette.primary=ee[e];else throw new Error(`${e} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);if(ne()(t))n.palette.secondary={main:t};else if(t&&ee[t])n.palette.secondary=ee[t];else throw new Error(`${t} is not a valid color. 
      Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);if(ne()(a))n.palette.header={main:a};else if(ee[a])n.palette.header=ee[a];else throw new Error(`${a} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);return Object(q.createMuiTheme)(n)}function i(e,t=1){const a=fetch(e).then((e)=>e.json()).catch((a)=>{if(1===t)throw a;setTimeout(()=>{i(e,t-1)},500)});return a}function r(e){return(t)=>{const a=new tt(e);t({type:Ie,client:a,clientName:'dialogflow'})}}function o(e){return(t,a)=>{const n=a().conversation.messages,i=Je()(e.responses,['type','suggestion']);if(i?t({type:he}):t({type:ve}),0===n.length)t({type:Te,newConversationArray:[e]});else{const a=n.map((t)=>t.loading?e:t).sort((e,t)=>{const a=Object(ye.parse)(e.systemTime,_e,new Date(e.systemTime)),n=Object(ye.parse)(t.systemTime,_e,new Date(t.systemTime)),i=Object(ye.differenceInMilliseconds)(a,n);return i});t({type:Te,newConversationArray:a})}}}function s(e){return(t)=>{function a(e){return'text'===e?'text':'card'===e?'card':'quickReplies'===e?'suggestion':'image'===e?'image':'payload'===e?'payload':'text'}const n=pe()(e,'queryResult.fulfillmentMessages',[]);let i=[],r=!1;try{i=n.map((e)=>{const n=a(e.message),i=pe()(e,'quickReplies.quickReplies',[]),o=pe()(e,'text.text',null),s={title:pe()(e,'card.title',''),subtitle:pe()(e,'card.subtitle',''),imageUrl:pe()(e,'card.imageUri',''),buttons:pe()(e,'card.buttons',[])},l={imageUri:pe()(e,'image.imageUri',''),accessibilityText:pe()(e,'image.accessibilityText','')},d={};if('payload'===n){const a=pe()(e,'payload.fields',{});for(const e of Object.entries(a)){var c=at(e,2);const t=c[0],a=c[1];if('stringValue'===a.kind)try{d[t]=JSON.parse(a.stringValue)}catch(e){d[t]=a.stringValue}else if(a.kind&&'stringValue'!==a.kind)throw new Error('Use stringValue to send payloads');else return d}if('disableInput'in d){if(1<Object.keys(d).length){const e=qe()(d,['disableInput']);t({type:De,modifiedPayload:e})}r=!0,t({type:Pe})}else t({type:De,payload:d})}return'text'===n?{type:n,text:o}:'image'===n?{type:n,image:l}:'suggestion'===n?{type:n,suggestions:i}:'card'===n?{type:n,card:s}:'payload'===n?{type:n,payload:d}:{type:n,text:o}})}catch(e){console.log(e)}let s;r?s=i.filter((e)=>{const t=pe()(e,'payload.disableInput',!1);return!t}):(t({type:Oe}),s=i);const l=Object(ye.format)(new Date,_e),d={entity:'bot',loading:!1,messageId:e.responseId,messageSession:e.session,language:e.queryResult.languageCode,systemTime:l,responses:s};t(o(d))}}function l(e){return(t,a)=>{const n=a().conversation.client;t({type:be}),n.textRequest(e).then((e)=>{e?(t(s(e)),t({type:Ce})):t({type:je,error:'No response received from chat provider. Please try again.'})}).catch((e)=>{throw new Error(e)}).catch((e)=>{console.log(e),t({type:je,error:'Unable to connect to the chat provider. Please try again.'})})}}function d(e){return(t,a)=>{const n=a().conversation.client;t({type:be}),n.eventRequest(e).then((e)=>{e?(t(s(e)),t({type:Ce})):(t({type:je,error:'No response received from chat provider. Please try again.'}),t({type:Ue}))}).catch((e)=>{throw new Error(e)}).catch((e)=>{console.log(e),t({type:je,error:'Unable to connect to the chat provider. Please try again.'})})}}function c(e,t){return(a)=>{try{if(!e)throw new Error('No conversation provider selected.');if('dialogflow'===e.toLowerCase())a(r(t));else throw a({type:je,error:`Unable to connect to ${e}`}),new Error(`${e} is not a recognized conversation provider.`)}catch(e){console.log(e)}}}function u(e){return(t,a)=>{const n=a().conversation.clientName;try{if('dialogflow'===n.toLowerCase())t(l(e));else throw new Error(`${n} is not a recognized conversation provider.`)}catch(e){console.log(e),t({type:je,error:`Unable to connect to ${n}`})}}}function m(e){return(t,a)=>{const n=a().conversation.messages.length,i=Object(ye.format)(new Date,_e),r={entity:'user',messageId:`usermessage-${n}`,systemTime:i,text:e};t({type:Le,response:r}),t({type:ve}),t(u(e))}}function p(e){return(t)=>{t(m(e))}}function y(){return(e,t)=>{const a=t().conversation.conversationStarted;e({type:we}),a||(e(d('Welcome')),e({type:Ye}))}}function M(){return{type:ze}}function g(){return{type:Se}}function f(){return{type:ke}}function I(){return(e,t)=>{const a=t().conversation.lastUpdateTime,n=new Date,i=Object(ye.parse)(a,_e,new Date(a)),r=Object(ye.differenceInMinutes)(n,i),o=Object(ye.differenceInSeconds)(n,i);let s='Now';1<=r?s=`${r} min ago`:9<=o&&(s=`${o} sec ago`);const l=Object(ye.format)(n,_e);e({type:Ne,headerTime:s,currentTime:l})}}function T(){return(e,t)=>{const a=t().conversation.timer;a&&clearInterval(a);const n=setInterval(()=>e(I()),10000);e({type:Ee,newTimer:n}),e(I())}}function x(e){return(t)=>{const a=e.title,n=e.avatar,i=e.client,r=e.clientOptions,o=e.initialActive,s=e.fullscreen,l=e.policyText,u=e.mapConfig,m=e.activationText,p=e.feedbackUrl;let I=n;if(I||(I=it.a),t({type:ge,title:a}),t({type:fe,avatar:I}),t(c(i,r)),t(T()),l&&''!==l&&t({type:Ge,policyText:l}),m&&''!==m&&t({type:Fe,activationText:m}),p&&t({type:Qe,feedbackUrl:p}),u){const e=u.googleMapsKey,a=u.centerCoordinates,n=pe()(a,'lat',null),i=pe()(a,'lng',null);if(e&&''!==e&&t({type:We,googleMapsKey:e}),a)try{if('object'==typeof a&&null!==n&&null!==i)t({type:He,centerCoordinates:a});else throw new Error('Please provide valid latitude and longitude coordinates, see README')}catch(e){console.log(e)}}!0===o?(t({type:Ye}),t(d('Welcome')),t(y())):t(M()),!0===s?t(g()):t(f())}}function L(e){return{type:Ze,value:e}}function b(e){return(t)=>{t(u(e))}}function E(e){return{type:Ve,value:e}}function N(e){return{type:Be,value:e}}function h(e){return Object(P.createElement)(pa,{message:e.text,entity:e.entity,key:e.key,timestamp:e.systemTime,isLoading:!1})}function v(e){return Object(P.createElement)(pa,{key:'loading',entity:'bot',timestamp:e.systemTime,isLoading:e.loading})}function j(e){return Object(P.createElement)(ln,{feedbackData:e.payload.feedback,session:e.session,entity:e.entity,key:e.key,isLoading:!1,timestamp:e.systemTime})}function C(e,t){return Object(P.createElement)(pa,{message:e.text,entity:e.entity,key:e.key,isLoading:!1,timestamp:e.systemTime,showTimestamp:t})}function w(e){return Object(P.createElement)(ha,{data:e.card,timestamp:e.systemTime,key:e.key})}function z(e){return Object(P.createElement)(_a,{data:e.payload.mapPayload,timestamp:e.systemTime,key:e.key})}function S(e){return!(256<e.length)}function k(e){const t={value:e,charLength:e.length||0,maxExceeded:255<e.length};return{type:xe,userInput:t}}function D(){return(e,t)=>{var a=t();const n=a.userInput,i=n.value.trim();if(i&&''!==i){const t=S(n.value);t&&(e(m(n.value)),e(k('')))}}}Object.defineProperty(t,'__esModule',{value:!0});var P=a(0),O=a.n(P),Y=a(2),U=a.n(Y),A=a(11),R=a.n(A),G=a(1),W=a.n(G),H=a(21),F=a.n(H),Z=a(22),Q=a.n(Z),B=a(23),V=a.n(B),_=a(24),X=a.n(_),J=a(4),K=a.n(J),q=a(6),$=a.n(q),ee=a(25),te=a.n(ee),ae=a(26),ne=a.n(ae),ie=a(27),re=a.n(ie),oe=a(28),se=a.n(oe),le=a(29),de=a.n(le),ce=a(12),ue=a.n(ce),me=a(13),pe=a.n(me),ye=a(3),Me=a.n(ye);const ge='SET_TITLE',fe='SET_AVATAR',Ie='SAVE_CLIENT',Te='SAVE_RESPONSE',xe='SAVE_USER_INPUT',Le='SAVE_USER_RESPONSE',be='INITIATE_LOADING',Ee='TIMER_START',Ne='UPDATE_CURRENT_TIME',he='SHOW_BUTTON_BAR',ve='HIDE_BUTTON_BAR',je='DISPLAY_ERROR',Ce='CLEAR_ERROR',we='SHOW_WINDOW',ze='HIDE_WINDOW',Se='FULLSCREEN',ke='WINDOWED',De='RECEIVE_WEBHOOK_DATA',Pe='DISABLE_INPUT',Oe='ENABLE_INPUT',Ye='SET_CONVERSATION_STARTED',Ue='SET_CONVERSATION_ENDED',Ae='SHOW_PRIVACY_POLICY',Re='HIDE_PRIVACY_POLICY',Ge='SET_PRIVACY_POLICY',We='SET_GOOGLE_MAPS_KEY',He='SET_CENTER_COORDINATES',Fe='SET_ACTIVATION_TEXT',Ze='SAVE_FEEDBACK_INPUT',Qe='SET_FEEDBACK_URL',Be='SET_FEEDBACK_SUBMITTED',Ve='SET_FEEDBACK_OPTIONS',_e='yyyy-MM-dd\'T\'HH:mm:ss.SSS';var Xe=a(14),Je=a.n(Xe),Ke=a(30),qe=a.n(Ke),$e=a(15),et=a.n($e);class tt{constructor(e){if(!e||!e.textUrl)throw new Error('Fulfillment URL is required to generate a conversation client');this.textUrl=e.textUrl,this.eventUrl=e.eventUrl,this.uuid=et()()}encodeQueryData(e){const t=[];for(const a in e)t.push(`${encodeURIComponent(a)}=${encodeURIComponent(e[a])}`);return t.join('&')}textRequest(e){if(!e)throw new Error('Query should not be empty');const t={query:e,uuid:this.uuid},a=this.encodeQueryData(t),n=`${this.textUrl}?${a}`;return i(n,2)}eventRequest(e){if(!e)throw new Error('Query should not be empty');const t={query:e,uuid:this.uuid},a=this.encodeQueryData(t),n=`${this.eventUrl}?${a}`;return fetch(n).then((e)=>e.json()).catch((e)=>{throw new Error(e)})}}var at=function(){function e(e,t){var a=[],n=!0,i=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(a.push(o.value),!(t&&a.length===t));n=!0);}catch(e){i=!0,r=e}finally{try{!n&&s['return']&&s['return']()}finally{if(i)throw r}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),nt=a(31),it=a.n(nt);const rt=W()(re.a)`
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
`;class lt extends P.PureComponent{render(){var e=this.props;const t=e.title,a=e.windowVisible,n=e.showWindow,i=e.activationText,r=e.theme,o=e.avatar,s=i?Object(P.createElement)(O.a.Fragment,null,Object(P.createElement)(st,{alt:t,src:o}),Object(P.createElement)(ot,{theme:r},i)):Object(P.createElement)(se.a,null);return Object(P.createElement)(de.a,{in:!a,unmountOnExit:!0},Object(P.createElement)(rt,{color:'primary',onClick:n,active:a?0:1,activationtext:i?1:0},s))}}var dt=Object(q.withTheme)()(Object(Y.connect)((e)=>({title:e.config.title,windowVisible:e.config.windowVisible,activationText:e.config.activationText,avatar:e.config.avatar}),(e)=>({showWindow:()=>{e(y())}}))(lt)),ct=a(32),ut=a.n(ct),mt=a(5),pt=a.n(mt),yt=a(33),Mt=a.n(yt),gt=a(34),ft=a.n(gt),It=a(35),Tt=a.n(It),xt=a(16),Lt=a.n(xt),bt=a(36),Et=a.n(bt),Nt=a(37),ht=a.n(Nt);const vt=W()(ue.a)`
  && {
    flex: 0 0 32px;
    width: 32px;
    height: 32px;
    margin-right: 16px;
    border-radius: 50% 50% 0px 50%;
  }
`,jt=W.a.div`
  position: absolute;
  bottom: -1px;
  left: 27px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid ${K.a[100]};
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
`,wt=W()(pt.a)`
  && {
    font-family: 'Product Sans';
    font-weight: 400;
    height: 32px;
    font-size: 18px;
    line-height: 32px;
    flex: 1;
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
  }
`,zt=W()(Lt.a)`
  && {
    padding: 6px;
    flex: 0;
    cursor: pointer;
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`;class St extends P.PureComponent{render(){var e=this.props;const t=e.title,a=e.theme,n=e.hideWindow,i=e.showWindowed,r=e.showFullscreen,o=e.fullscreen,s=e.avatar,l=e.showPrivacyPolicy;return Object(P.createElement)(Ct,{theme:a},Object(P.createElement)(jt,null),Object(P.createElement)(vt,{alt:t,src:s}),Object(P.createElement)(wt,{theme:a,variant:'h6'},t),Object(P.createElement)(ht.a,{title:'Privacy Policy',placement:'bottom'},Object(P.createElement)(zt,{theme:a,onClick:l,"aria-label":'Windowed'},Object(P.createElement)(Tt.a,{fontSize:'small'}))),o?Object(P.createElement)(zt,{theme:a,onClick:i,"aria-label":'Windowed'},Object(P.createElement)(ft.a,{fontSize:'small'})):Object(P.createElement)(zt,{theme:a,onClick:r,"aria-label":'Fullscreen'},Object(P.createElement)(Mt.a,{fontSize:'small'})),Object(P.createElement)(zt,{theme:a,onClick:n,"aria-label":'Close'},Object(P.createElement)(Et.a,{fontSize:'small'})))}}var kt=Object(q.withTheme)()(Object(Y.connect)((e)=>({title:e.config.title,fullscreen:e.config.fullscreen,avatar:e.config.avatar}),{hideWindow:M,showFullscreen:g,showWindowed:f,showPrivacyPolicy:function(){return{type:Ae}}})(St)),Dt=a(38),Pt=a.n(Dt),Ot=a(39),Yt=a.n(Ot),Ut=a(40),At=a.n(Ut),Rt=a(41),Gt=a.n(Rt),Wt=a(42),Ht=a.n(Wt),Ft=a(7),Zt=a.n(Ft);const Qt=W()(Yt.a)`
  && {
    position: absolute;
  }
`;class Bt extends P.PureComponent{render(){var e=this.props;const t=e.hidePrivacyPolicy,a=e.privacyPolicyVisible,n=e.privacyPolicy,i=e.parentRef;return Object(P.createElement)(Qt,{open:a,onClose:t,"aria-labelledby":'privacy-policy',container:i,scroll:'paper'},Object(P.createElement)(Pt.a,null,'Privacy Statement'),Object(P.createElement)(Gt.a,null,Object(P.createElement)(Ht.a,null,n)),Object(P.createElement)(At.a,null,Object(P.createElement)(Zt.a,{onClick:t,color:'primary'},'Close')))}}var Vt=Object(Y.connect)((e)=>({privacyPolicyVisible:e.config.privacyPolicyVisible,privacyPolicy:e.config.privacyPolicy}),{hidePrivacyPolicy:function(){return{type:Re}}})(Bt),_t=a(43),Xt=a.n(_t),Jt=a(44),Kt=a.n(Jt),qt=a(17),$t=a.n(qt),ea=a(9),ta=a.n(ea),aa=a(45),na=a.n(aa);const ia=W.a.div`
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
`;class oa extends P.PureComponent{render(){return Object(P.createElement)(ia,null,Object(P.createElement)(ra,null),Object(P.createElement)(ra,null),Object(P.createElement)(ra,null))}}const sa=W.a.div`
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
    background: ${K.a[400]};
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
`,ua=W()(pt.a)`
  && {
    color: ${K.a[500]};
    margin-top: 6px;
    padding-left: 5px;
    padding-right: 2px;
  }
`;class ma extends P.PureComponent{render(){var e=this.props;const t=e.message,a=e.entity,n=e.isLoading,i=e.timestamp,r=e.currentTime,o=e.theme,s=e.showTimestamp,l=e.error,d=Object(ye.parse)(i,_e,new Date(r)),c=Object(ye.isSameDay)(new Date,d),u=Object(ye.isSameDay)(d,Object(ye.subDays)(new Date,1));let m=null;m=c?`Today ${Object(ye.format)(d,'h:mm aa')}`:u?`Yesterday ${Object(ye.format)(d,'h:mm aa')}`:Object(ye.format)(d,'MMMM dd, yyyy h:mm aa');let p=t&&''!==t[0]?t:['Oops! Something happened with the connection. Please try again.'];let y=Object(P.createElement)(oa,null);n&&l&&(y=l);const M='user'===a?Object(P.createElement)(ca,{elevation:1,theme:o},t):Object(P.createElement)(da,{elevation:1},n?y:Object(P.createElement)($t.a,{options:{forceBlock:!0,overrides:{h6:{component:pt.a,props:{variant:'h6'}},p:{component:pt.a,props:{variant:'body1'}},a:{component:ta.a}}}},p[0]));return Object(P.createElement)(sa,{entity:a},Object(P.createElement)(la,{entity:a},M),s?Object(P.createElement)(ua,{variant:'caption'},m):null)}}var pa=Object(q.withTheme)()(Object(Y.connect)((e)=>({currentTime:e.conversation.currentTime,error:e.error}))(ma)),ya=a(10),Ma=a.n(ya),ga=a(18),fa=a.n(ga),Ia=a(8),Ta=a.n(Ia),xa=a(46),La=a.n(xa);const ba=W()(Ma.a)`
  && {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #fff;
    margin: 15px 16px 15px 16px;
    white-space: pre-line;
  }
`,Ea=W()(La.a)`
  && {
    height: ${(e)=>e.image&&''!==e.image?'200px':'0px'};
    background-size: cover;
    background-position: center center;
  }
`;class Na extends P.PureComponent{render(){var e=this.props.data;const t=e.title,a=e.subtitle,n=e.imageUrl,i=e.buttons;return Object(P.createElement)(ba,null,n?Object(P.createElement)(Ea,{image:encodeURI(n),title:''}):null,Object(P.createElement)(Ta.a,null,Object(P.createElement)(pt.a,{gutterBottom:!0,variant:'h6'},t),Object(P.createElement)($t.a,{options:{forceBlock:!0,overrides:{h6:{component:pt.a,props:{variant:'h6'}},p:{component:pt.a,props:{variant:'body1'}},a:{component:ta.a}}}},a)),Object(P.createElement)(fa.a,null,i.map((e,t)=>{const a=`card-${t}${Object(ye.format)(new Date,_e)}`;return Object(P.createElement)(Zt.a,{href:e.postback,target:'_blank',size:'small',color:'primary',key:a},e.text)})))}}var ha=Object(Y.connect)((e)=>({inputValue:e.userInput}))(Na),va=a(47),ja=a.n(va),Ca=a(48),wa=a.n(Ca),za=a(49),Sa=a.n(za),ka=a(50),Da=a.n(ka),Pa=a(51),Oa=a.n(Pa),Ya=a(52),Ua=a.n(Ya),Aa=a(53),Ra=a.n(Aa),Ga=a(54),Wa=a.n(Ga);const Ha=W()(Ma.a)`
  && {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #fff;
    margin: 15px 16px 15px 16px;
    white-space: pre-line;
  }
`,Fa=W.a.div`
  height: 150px;
  font-size: 12px;
  margin-top: 10px;
`,Za=W()(Ta.a)`
  &&& {
    padding-top: 0;
    padding-bottom: 0;
  }
`,Qa=W()(Sa.a)`
  td {
    padding: 4px 0px 4px 0px;
  }
  tr:last-of-type {
    td {
      border-bottom: none;
    }
  }
`,Ba=W()(Da.a)`
  && {
    width: 70%;
    padding: 4px 0px 4px 0px;
  }
`,Va=W()(Da.a)`
  &&& {
    width: 20%;
    padding-right: 0;
    text-align: right;
  }
`;var _a=Object(Y.connect)((e)=>({googleMapsKey:e.config.googleMapsKey}))(function(e){const t=e.data,a=e.googleMapsKey,n='230px',r={width:30,height:30},i=`https://maps.googleapis.com/maps/api/js?key=${a}&v=3`,o=(e)=>{const t=`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${e.placeId}`;window.open(t,'_blank')},s=Object(Ya.withScriptjs)(Object(Ya.withGoogleMap)(()=>Object(P.createElement)(Ya.GoogleMap,{defaultZoom:8,defaultCenter:t.nearestLocations[0],defaultOptions:{zoomControl:!0,mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1}},t.locations.map((e,t)=>Object(P.createElement)(Ya.Marker,{key:t,position:{lat:e.lat,lng:e.lng},icon:{url:Ra.a,scaledSize:r},onClick:()=>o(e)})),Object(P.createElement)(Ya.Marker,{position:{lat:t.currentGeocode.lat,lng:t.currentGeocode.lng},icon:{url:Wa.a,scaledSize:r}}))));return Object(P.createElement)(Ha,null,Object(P.createElement)(ja.a,{title:'Office Locations'}),Object(P.createElement)(Za,null,Object(P.createElement)(s,{googleMapURL:i,loadingElement:Object(P.createElement)('div',{style:{height:`${n}`}}),containerElement:Object(P.createElement)('div',{style:{height:`${n}`}}),mapElement:Object(P.createElement)('div',{style:{height:'100%'}})}),Object(P.createElement)(Fa,null,Object(P.createElement)(wa.a,{padding:'dense'},Object(P.createElement)(Qa,null,t.nearestLocations.map((e,t)=>Object(P.createElement)(Oa.a,{key:t},Object(P.createElement)(Ba,{padding:'dense'},Object(P.createElement)(pt.a,null,Object(P.createElement)(ta.a,{href:`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${e.placeId}`,target:'blank'},e.street,', ',e.city))),Object(P.createElement)(Va,{padding:'dense'},e.distance))))))))}),Xa=a(55),Ja=a.n(Xa),Ka=a(56),qa=a.n(Ka),$a=a(57),en=a.n($a),tn=a(58),an=a.n(tn);class nn extends P.PureComponent{render(){var e=this.props;const t=e.feedbackInputs,a=e.feedbackUrl,n=e.saveFeedbackInput,i=e.setFeedbackSubmitted,r=e.sendFeedback,o=e.session,s=(e)=>(t)=>{const a={value:e,checked:t.target.checked};n(a)},l=(e)=>e.filter((e)=>e.checked?e.value:null).map((e)=>e.value),d=(e)=>{fetch(a,{method:'POST',body:JSON.stringify(e),headers:{"Content-Type":'application/json'}})};return Object(P.createElement)(O.a.Fragment,null,Object(P.createElement)(Ta.a,null,Object(P.createElement)(pt.a,{gutterBottom:!0,variant:'h6'},t.wasHelpful?'Why was Gen helpful?':'Why was Gen not helpful?'),Object(P.createElement)(Ja.a,{component:'fieldset'},Object(P.createElement)(qa.a,null,t.feedbackList?t.feedbackList.map((e)=>Object(P.createElement)(en.a,{key:e.value,control:Object(P.createElement)(an.a,{checked:e.checked,onChange:s(e.value),value:e.value}),label:e.value})):null))),Object(P.createElement)(fa.a,null,Object(P.createElement)(Zt.a,{size:'small',color:'primary',onClick:()=>{const e={wasHelpful:t.wasHelpful,session:o,feedbackList:l(t.feedbackList)};d(e),r('Feedback complete'),i(!0)}},'Submit')))}}var rn=Object(Y.connect)((e)=>({feedbackInputs:e.feedbackInput,feedbackUrl:e.config.feedbackUrl}),(e)=>({saveFeedbackInput:(t)=>{e(L(t))},setFeedbackSubmitted:()=>{e(N(!0))},sendFeedback:(t)=>{e(b(t))}}))(nn);const on=W()(Ma.a)`
  && {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #fff;
    margin: 15px 16px 15px 16px;
    white-space: pre-line;
  }
`;class sn extends P.PureComponent{componentDidMount(){var e=this.props;const t=e.setFeedbackOptions,a=e.feedbackData;t(a)}render(){var e=this.props;const t=e.session,a=e.feedbackInputs;return Object(P.createElement)(on,null,a.submitted?Object(P.createElement)(Ta.a,null,'Thank you. Your feedback is important to us and will help improve Gen.'):Object(P.createElement)(rn,{session:t}))}}var ln=Object(Y.connect)((e)=>({feedbackInputs:e.feedbackInput}),(e)=>({setFeedbackOptions:(t)=>{e(E(t))}}))(sn);const dn={giant:1170,desktop:992,tablet:768,phone:620},cn=Object.keys(dn).reduce((e,t)=>{const a=dn[t]/16;return e[t]=(...e)=>G.css`
    @media (max-width: ${a}em) {
      ${Object(G.css)(...e)};
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
`,mn=W.a.div`
  background: ${K.a[100]};
  z-index: 4;
  grid-area: chatwindow;
  margin-bottom: 1px;
  margin-top: 8px;
`,pn=W.a.div`
  /* Vertically flips the content element so that the messages won't be upside down */
  transform: scale(1, -1);

  ${cn.tablet`
   transform: none;
  `};
`;class yn extends P.PureComponent{constructor(e){super(e),Object.defineProperty(this,'parseMessages',{enumerable:!0,writable:!0,value:()=>{const e=this.props.messages,t=[];return e.forEach((e)=>{const a={systemTime:e.systemTime,entity:e.entity,session:e.messageSession};if(e.loading){const n=et()();a.key=n;const i=Kt()(e,a);t.push(i)}else if('bot'===e.entity)e.responses.forEach((e)=>{if('text'===e.type||'card'===e.type||'payload'===e.type){const n=et()();a.key=n;const i=Kt()(e,a);t.push(i)}});else if('user'===e.entity){const n=et()();a.key=n;const i=Kt()(e,a);t.push(i)}}),t}}),Object.defineProperty(this,'createMessageElements',{enumerable:!0,writable:!0,value:()=>{const e=this.parseMessages(),t=[];e.forEach((a,n)=>{let i=!1;n===e.length-1&&(i=!0),a.loading?t.push(v(a)):'user'===a.entity?t.push(h(a)):'bot'===a.entity&&'text'===a.type?t.push(C(a,i)):'bot'===a.entity&&'card'===a.type?t.push(w(a)):'bot'===a.entity&&'payload'===a.type&&a.payload.mapPayload?t.push(z(a)):'bot'===a.entity&&'payload'===a.type&&a.payload.feedback?t.push(j(a)):t.push(C({text:['Something went wrong.']}))}),t.sort((e,t)=>{const a=Object(ye.parse)(e.props.timestamp,_e,new Date(e.props.timestamp)),n=Object(ye.parse)(t.props.timestamp,_e,new Date(t.props.timestamp)),i=Object(ye.differenceInMilliseconds)(a,n);return i}),this.setState({messageElements:t})}}),Object.defineProperty(this,'handleWheel',{enumerable:!0,writable:!0,value:(t)=>{t.deltaY&&(t.preventDefault(),t.currentTarget.scrollTop-=2*(parseFloat(getComputedStyle(t.currentTarget).getPropertyValue('font-size'))*(0>t.deltaY?-1:1)))}}),Object.defineProperty(this,'componentRef',{enumerable:!0,writable:!0,value:O.a.createRef(null)}),this.messages=[],this.state={messageElements:[]}}componentDidUpdate(){const e=this.parseMessages();Xt()(this.messages,e)||(this.messages=e,this.createMessageElements()),this.componentRef.current&&this.componentRef.current.addEventListener('wheel',this.handleWheel)}render(){const e=this.state.messageElements;return Object(P.createElement)(un,{ref:this.componentRef},Object(P.createElement)(mn,{elevation:1,square:!0},Object(P.createElement)(pn,null,e)))}}var Mn=Object(Y.connect)((e)=>({messages:e.conversation.messages,buttonBarVisible:e.buttonBar.visible,error:e.error}))(yn),gn=a(59),fn=a.n(gn),In=a(60),Tn=a.n(In);const xn=W.a.div`
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
`,Ln=W()(Tn.a)`
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
`,bn=W()(Lt.a)`
  && {
    padding: 16px 12px 16px 4px;
    &:hover {
      background: transparent;
    }
  }
`;class En extends P.PureComponent{constructor(){super(),this.handleKeyPress=this.handleKeyPress.bind(this)}handleKeyPress(t){13===t.charCode&&(this.props.submitUserInput(),t.preventDefault())}render(){var e=this.props;const t=e.saveUserInput,a=e.inputValue,n=e.shouldDisable,i=a.value,r=`${a.charLength}/255`,o=a.maxExceeded;let s=null;return s=o?`Exceeded character limit: ${r}`:null,Object(P.createElement)(xn,{visible:n},Object(P.createElement)(Ln,{multiline:!0,rowsMax:'4',fullWidth:!0,InputProps:{disableUnderline:!0},placeholder:'Send a message',helperText:s,FormHelperTextProps:{style:{color:'#cd5c5c',margin:0}},onChange:t,value:i,onKeyPress:this.handleKeyPress}),Object(P.createElement)(bn,{onClick:this.props.submitUserInput,"aria-label":'Send',color:'primary',disabled:o,disableRipple:!0},Object(P.createElement)(fn.a,null)))}}var Nn=Object(Y.connect)((e)=>({inputValue:e.userInput,shouldDisable:e.conversation.disableInput}),(t)=>({saveUserInput:(a)=>{t(k(a.target.value))},submitUserInput:()=>{t(D())}}))(En),hn=a(61),vn=a.n(hn);const jn=W.a.div`
  grid-area: buttonbar;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  padding: ${(e)=>e.visible?'4px 4px 16px 16px':'0 16px'};
  background: ${K.a[300]};
  border-top: ${(e)=>e.visible?'1px solid rgba(0, 0, 0, 0.2)':'none'};
  overflow-y: auto;
`,Cn=W()(Zt.a)`
  && {
    margin-right: 12px;
    margin-top: 12px;
    display: ${(e)=>'true'===e.visible?'block':'none'};
  }
`;class wn extends P.PureComponent{render(){var e=this.props;const t=e.visible,a=e.messages,n=e.sendQuickReply,i=vn()(a,(e)=>{const t=Je()(e.responses,['type','suggestion']);return t}),r=[];if(i){const e=i.responses.filter((e)=>'suggestion'===e.type);for(const a of e)for(const e of a.suggestions)r.push({label:e,id:i.messageId,visible:t})}return Object(P.createElement)(jn,{visible:t},r.map((e,t)=>Object(P.createElement)(Cn,{size:'small',variant:'outlined',color:'secondary',key:`${e.id}-btn${t}`,visible:e.visible.toString(),onClick:()=>n(e.label)},e.label)))}}var zn=Object(Y.connect)((e)=>({visible:e.buttonBar.visible,messages:e.conversation.messages}),(e)=>({sendQuickReply:(t)=>{e(p(t))}}))(wn);const Sn=W()(ut.a)`
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
    ${(e)=>e.fullscreen&&G.css`
        width: calc(100% - 96px);
        height: calc(100% - 96px);
      `};
    ${(e)=>!e.visible&&G.css`
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
    background: ${K.a[100]};
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
`;class Dn extends P.PureComponent{constructor(e){super(e),this.containerRef=O.a.createRef()}render(){var e=this.props;const t=e.windowVisible,a=e.fullscreen;return Object(P.createElement)(Sn,{elevation:4,fullscreen:a?1:0,visible:t?1:0},Object(P.createElement)(kn,{ref:this.containerRef,className:'mui-fixed'},Object(P.createElement)(kt,null),Object(P.createElement)(Vt,{parentRef:this.containerRef.current}),Object(P.createElement)(Mn,null),Object(P.createElement)(zn,null),Object(P.createElement)(Nn,null)))}}var Pn=Object(Y.connect)((e)=>({windowVisible:e.config.windowVisible,fullscreen:e.config.fullscreen}))(Dn),On=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Yn={avatar:null,title:'Chat Window',windowVisible:!1,fullscreen:!1,privacyPolicyVisible:!1,googleMapsKey:'',centerCoordinates:'',activationText:'',privacyPolicy:'Please do not enter any personally identifiable information such as SSN, Date of Birth, Case Number or last name.',feedbackUrl:''};var Un=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const An={client:null,clientName:null,messages:[],webhookPayload:null,disableInput:!1,lastUpdateTime:Object(ye.format)(new Date,_e),currentTime:Object(ye.format)(new Date,_e),headerTime:'Now',timer:null,conversationStarted:!1};var Rn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Gn={visible:!1,buttons:[]};const Wn={value:'',charLength:0,maxExceeded:!1};var Hn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Fn={submitted:!1,wasHelpful:null,feedbackList:null};const Zn='';const Qn=Object(A.combineReducers)({config:function(e=Yn,t){switch(t.type){case Re:return On({},e,{privacyPolicyVisible:!1});case Ae:return On({},e,{privacyPolicyVisible:!0});case Ge:return On({},e,{privacyPolicy:t.policyText});case We:return On({},e,{googleMapsKey:t.googleMapsKey});case He:return On({},e,{centerCoordinates:t.centerCoordinates});case Fe:return On({},e,{activationText:t.activationText});case fe:return On({},e,{avatar:t.avatar});case ge:return On({},e,{title:t.title});case we:return On({},e,{windowVisible:!0});case ze:return On({},e,{windowVisible:!1});case Se:return On({},e,{fullscreen:!0});case ke:return On({},e,{fullscreen:!1});case Qe:return On({},e,{feedbackUrl:t.feedbackUrl});default:return e;}},conversation:function(e=An,t){switch(t.type){case Ie:return Un({},e,{client:t.client,clientName:t.clientName});case Ne:return Un({},e,{headerTime:t.headerTime,currentTime:t.currentTime});case Ee:return Un({},e,{timer:t.timer});case be:return Un({},e,{messages:[...e.messages,{loading:!0,entity:'bot',systemTime:Object(ye.format)(new Date,_e)}]});case Te:return Un({},e,{lastUpdateTime:Object(ye.format)(new Date,_e),headerTime:'Now',messages:t.newConversationArray});case Le:return Un({},e,{lastUpdateTime:Object(ye.format)(new Date,_e),headerTime:'Now',messages:[...e.messages,t.response].sort((e,t)=>{const a=Object(ye.parse)(e.systemTime,_e,new Date(e.systemTime)),n=Object(ye.parse)(t.systemTime,_e,new Date(t.systemTime)),i=Object(ye.differenceInMilliseconds)(n,a);return i})});case De:return Un({},e,{webhookPayload:t.payload});case Oe:return Un({},e,{disableInput:!1});case Pe:return Un({},e,{disableInput:!0});case Ye:return Un({},e,{conversationStarted:!0});case Ue:return Un({},e,{conversationStarted:!1});default:return e;}},buttonBar:function(e=Gn,t){switch(t.type){case he:return Rn({},e,{visible:!0});case ve:return Rn({},e,{visible:!1});default:return e;}},userInput:function(e=Wn,t){switch(t.type){case xe:return t.userInput;default:return e;}},feedbackInput:function(e=Fn,t){switch(t.type){case Ze:return Hn({},e,{feedbackList:e.feedbackList.map((e)=>e.value===t.value.value?Hn({},e,{checked:t.value.checked}):e)});case Ve:return Hn({},e,{wasHelpful:t.value.helpful,feedbackList:t.value.options.map((e)=>Hn({},e,{checked:!1}))});case Be:return Hn({},e,{submitted:!0});default:return e;}},error:function(e=Zn,t){switch(t.type){case je:return t.error;case Ce:return Zn;default:return e;}}});F.a.load({google:{families:['Roboto:300,400,500','Product Sans:400']}});const Bn=W.a.div`
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
      background-color: ${K.a[600]};
      -webkit-border-radius: 8px;
      border-radius: 8px;
      border: 2px solid ${K.a[100]};
    }
    & ::-webkit-scrollbar {
      background-color: ${K.a[100]};
      width: 8px;
    }
  }
`;class Vn extends P.PureComponent{constructor(e){super(e),this.store=Object(A.createStore)(Qn,Object(A.applyMiddleware)(V.a)),this.currentValue=null,this.theme=n(this.props.primaryColor,this.props.secondaryColor,this.props.headerColor)}componentDidMount(){this.store.dispatch(x(this.props,this.theme)),this.unsubscribe=this.store.subscribe(()=>this.handleChange(this.store))}componentWillUnmount(){this.unsubscribe()}select(e){return e.conversation.webhookPayload}handleChange(e){const t=this.currentValue;this.currentValue=this.select(e.getState()),t!==this.currentValue&&this.props.onPayload&&this.props.onPayload(this.currentValue)}render(){return Object(P.createElement)(Y.Provider,{store:this.store},Object(P.createElement)(Q.a,{theme:this.theme},Object(P.createElement)(Bn,null,Object(P.createElement)(Pn,null),Object(P.createElement)(dt,null))))}}t['default']=Vn},function(e){e.exports=require('webfontloader')},function(e){e.exports=require('@material-ui/core/styles/MuiThemeProvider')},function(e){e.exports=require('redux-thunk')},function(e){e.exports=require('whatwg-fetch')},function(e){e.exports=require('@material-ui/core/colors')},function(e){e.exports=require('validator/lib/isHexColor')},function(e){e.exports=require('@material-ui/core/Fab')},function(e){e.exports=require('@material-ui/icons/Chat')},function(e){e.exports=require('@material-ui/core/Zoom')},function(e){e.exports=require('lodash/omit')},function(e){e.exports='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTQ0Ljc3IDE0NC43NyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ze2ZpbGw6IzhkYzVkNjt9LmNscy00e2NsaXAtcGF0aDp1cmwoI2NsaXAtcGF0aCk7fS5jbHMtNXtmaWxsOiMyZTU3NmQ7fS5jbHMtNntmaWxsOiNmMWM5YTU7fS5jbHMtN3tmaWxsOiNlNGI2OTI7fS5jbHMtOHtmaWxsOiNkZGFjOGM7b3BhY2l0eTowLjE7bWl4LWJsZW5kLW1vZGU6bXVsdGlwbHk7fS5jbHMtOXtmaWxsOiNmYTU4MmE7fTwvc3R5bGU+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTAuNTQgLTExNDYuMDQpIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02MzUuMzIsMTIxOC40MmE3Mi4zOSw3Mi4zOSwwLDEsMC03Mi4zOSw3Mi4zOUE3Mi4zOCw3Mi4zOCwwLDAsMCw2MzUuMzIsMTIxOC40MloiLz48L2NsaXBQYXRoPjwvZGVmcz48dGl0bGU+VW50aXRsZWQtMTwvdGl0bGU+PGcgY2xhc3M9ImNscy0yIj48ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik02MzUuMzIsMTIxOC40MmE3Mi4zOSw3Mi4zOSwwLDEsMC03Mi4zOSw3Mi4zOUE3Mi4zOCw3Mi4zOCwwLDAsMCw2MzUuMzIsMTIxOC40MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTAuNTQgLTExNDYuMDQpIi8+PGcgY2xhc3M9ImNscy00Ij48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik01MzUuNzgsMTIyMS4wOWMwLDExLjgxLTYuNDgsMTIuMTItNiwxOS45My41MSw4LjY2LDcuMjgsOC42OCw3LjI4LDE0LjY0cy02LjIyLDEyLjYyLS43MSwxOWgyNi42MXYtNzIuMjFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTU5MC4wOCwxMjIwLjdjMCwxMS44MSw2LjQ4LDEyLjExLDYsMTkuOTMtLjUxLDguNjYtNy4yOCw4LjY4LTcuMjgsMTQuNjNzNi4yMiwxMi42My43MSwxOUg1NjIuOTJ2LTcyLjIxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5MC41NCAtMTE0Ni4wNCkiLz48ZWxsaXBzZSBjbGFzcz0iY2xzLTUiIGN4PSI3Mi4zOSIgY3k9IjYyLjcyIiByeD0iMjkuNjMiIHJ5PSIyOS44MyIvPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTU5Ny42LDEyNjNjLTQuNjctOC44NC0zNC42Ny0xNC4zOC0zNC42Ny0xNC4zOHMtMzAsNS41NC0zNC42NywxNC4zOGMtMy40NCwxMi4yNS02LjMzLDI3LjgzLTYuMzMsMjcuODNoODJTNjAyLDEyNzQuMTEsNTk3LjYsMTI2M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTAuNTQgLTExNDYuMDQpIi8+PHBhdGggY2xhc3M9ImNscy03IiBkPSJNNTYyLjkzLDEyNDguNnMzMCw1LjU0LDM0LjY3LDE0LjM4YzQuMzgsMTEuMTMsNi4zMywyNy44Myw2LjMzLDI3LjgzaC00MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTAuNTQgLTExNDYuMDQpIi8+PHJlY3QgY2xhc3M9ImNscy02IiB4PSI2NC4yMiIgeT0iODQuNjEiIHdpZHRoPSIxNi4zMyIgaGVpZ2h0PSIyNy4zNCIvPjxyZWN0IGNsYXNzPSJjbHMtNyIgeD0iNzIuMzkiIHk9Ijg0LjYxIiB3aWR0aD0iOC4xNyIgaGVpZ2h0PSIyNy4zNCIvPjxwYXRoIGNsYXNzPSJjbHMtOCIgZD0iTTU1NC43NiwxMjQzLjMxYzEuNDcsNC4yMiw3LjQsNi42MywxMS43NSw2LjYzYTE0LjgsMTQuOCwwLDAsMCw0LjU5LS43NHYtMTguNTZINTU0Ljc2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5MC41NCAtMTE0Ni4wNCkiLz48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik01ODMuOTMsMTIxMy4zOWMwLTE3LjA3LTkuNC0yNi43OC0yMS0yNi43OHMtMjEsOS43MS0yMSwyNi43OCw5LjQsMzAuOTIsMjEsMzAuOTJTNTgzLjkzLDEyMzAuNDcsNTgzLjkzLDEyMTMuMzlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjxwYXRoIGNsYXNzPSJjbHMtNyIgZD0iTTU4MC43MywxMjI1LjIzYy0zLjgtLjQyLTYuMzctNC43OC01LjczLTkuNzNzNC4yNC04LjYzLDgtOC4yMSw2LjM3LDQuNzgsNS43Myw5LjczUzU4NC41NCwxMjI1LjY1LDU4MC43MywxMjI1LjIzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5MC41NCAtMTE0Ni4wNCkiLz48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik01MzcuMjMsMTIxN2MtLjY0LTUsMS45Mi05LjMxLDUuNzMtOS43M3M3LjQxLDMuMjYsOCw4LjIxLTEuOTMsOS4zMS01LjczLDkuNzNTNTM3Ljg3LDEyMjIsNTM3LjIzLDEyMTdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjxwYXRoIGNsYXNzPSJjbHMtNyIgZD0iTTU4My45MywxMjEzLjM5YzAtMTcuMDctOS40LTI2Ljc4LTIxLTI2Ljc4djU3LjdDNTc0LjUzLDEyNDQuMzEsNTgzLjkzLDEyMzAuNDcsNTgzLjkzLDEyMTMuMzlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTU4NS42NiwxMjExLjQ3YzAtLjA2LDAtLjEsMC0uMTUsMC0xMy4yNS05LTI3LjIzLTIxLjUyLTI3LjIzcy0yMy45MywxNC0yMy45MywyNy4yM3YuMTVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjxwYXRoIGNsYXNzPSJjbHMtOSIgZD0iTTYwMy45MywxMjkwLjgxcy0xLjk1LTE2LjctNi4zMy0yNy44M2MtMi41Ni00Ljg1LTEyLjc0LTguNy0yMS40MS0xMS4xOWwtMTMuMjksMTAuNDNMNTQ5LjA3LDEyNTJjLTguNTMsMi41LTE4LjMxLDYuMjgtMjAuODEsMTEtMy40NCwxMi4yNS02LjMzLDI3LjgzLTYuMzMsMjcuODNoODJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjwvZz48L2c+PC9nPjwvc3ZnPg=='},function(e){e.exports=require('@material-ui/core/Paper')},function(e){e.exports=require('@material-ui/icons/Fullscreen')},function(e){e.exports=require('@material-ui/icons/FullscreenExit')},function(e){e.exports=require('@material-ui/icons/Info')},function(e){e.exports=require('@material-ui/icons/Close')},function(e){e.exports=require('@material-ui/core/Tooltip')},function(e){e.exports=require('@material-ui/core/DialogTitle')},function(e){e.exports=require('@material-ui/core/Dialog')},function(e){e.exports=require('@material-ui/core/DialogActions')},function(e){e.exports=require('@material-ui/core/DialogContent')},function(e){e.exports=require('@material-ui/core/DialogContentText')},function(e){e.exports=require('lodash/isEqual')},function(e){e.exports=require('lodash/merge')},function(e){e.exports=require('@material-ui/core/colors/green')},function(e){e.exports=require('@material-ui/core/CardMedia')},function(e){e.exports=require('@material-ui/core/CardHeader')},function(e){e.exports=require('@material-ui/core/Table')},function(e){e.exports=require('@material-ui/core/TableBody')},function(e){e.exports=require('@material-ui/core/TableCell')},function(e){e.exports=require('@material-ui/core/TableRow')},function(e){e.exports=require('react-google-maps')},function(e){e.exports='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjRUUzODQwIiBkPSJNMTIgMkM4LjEzIDIgNSA1LjEzIDUgOWMwIDUuMjUgNyAxMyA3IDEzczctNy43NSA3LTEzYzAtMy44Ny0zLjEzLTctNy03em0wIDkuNWMtMS4zOCAwLTIuNS0xLjEyLTIuNS0yLjVzMS4xMi0yLjUgMi41LTIuNSAyLjUgMS4xMiAyLjUgMi41LTEuMTIgMi41LTIuNSAyLjV6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg=='},function(e){e.exports='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9ImIiPjx1c2UgeGxpbms6aHJlZj0iI2EiIG92ZXJmbG93PSJ2aXNpYmxlIi8+PC9jbGlwUGF0aD48cGF0aCBjbGlwLXBhdGg9InVybCgjYikiIGZpbGw9IiMyOTc5RkYiIGQ9Ik0xMiAyQzguMTQgMiA1IDUuMTQgNSA5YzAgNS4yNSA3IDEzIDcgMTNzNy03Ljc1IDctMTNjMC0zLjg2LTMuMTQtNy03LTd6bTAgMmMxLjEgMCAyIC45IDIgMiAwIDEuMTEtLjkgMi0yIDJzLTItLjg5LTItMmMwLTEuMS45LTIgMi0yem0wIDEwYy0xLjY3IDAtMy4xNC0uODUtNC0yLjE1LjAyLTEuMzIgMi42Ny0yLjA1IDQtMi4wNXMzLjk4LjczIDQgMi4wNWMtLjg2IDEuMy0yLjMzIDIuMTUtNCAyLjE1eiIvPjwvc3ZnPg=='},function(e){e.exports=require('@material-ui/core/FormControl')},function(e){e.exports=require('@material-ui/core/FormGroup')},function(e){e.exports=require('@material-ui/core/FormControlLabel')},function(e){e.exports=require('@material-ui/core/Checkbox')},function(e){e.exports=require('@material-ui/icons/Send')},function(e){e.exports=require('@material-ui/core/TextField')},function(e){e.exports=require('lodash/findLast')}])});
//# sourceMappingURL=chatframe.js.map