(function(e,t){'object'==typeof exports&&'object'==typeof module?module.exports=t():'function'==typeof define&&define.amd?define('chatframe',[],t):'object'==typeof exports?exports.chatframe=t():e.chatframe=t()})('undefined'==typeof self?this:self,function(){return function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(a,'a',a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='./',t(t.s=20)}([function(e){e.exports=require('react')},function(e){e.exports=require('styled-components')},function(e){e.exports=require('react-redux')},function(e){e.exports=require('date-fns')},function(e){e.exports=require('@material-ui/core/colors/grey')},function(e){e.exports=require('@material-ui/core/styles')},function(e){e.exports=require('@material-ui/core/Typography')},function(e){e.exports=require('@material-ui/core/Button')},function(e){e.exports=require('uuid/v4')},function(e){e.exports=require('lodash')},function(e){e.exports=require('@material-ui/core/Link')},function(e){e.exports=require('@material-ui/core/Card')},function(e){e.exports=require('@material-ui/core/CardContent')},function(e){e.exports=require('redux')},function(e){e.exports=require('@material-ui/core/Avatar')},function(e){e.exports=require('lodash/get')},function(e){e.exports=require('@material-ui/core/IconButton')},function(e){e.exports=require('markdown-to-jsx')},function(e){e.exports=require('@material-ui/core/CardActions')},function(e){e.exports=require('@material-ui/core/TextField')},function(e,t,a){e.exports=a(21)},function(e,t,a){'use strict';function n(e='lightBlue',t='pink',a='lightBlue'){const n={palette:{error:ee.red,contrastThreshold:3,tonalOffset:0.2},typography:{useNextVariants:!0},overrides:{MuiFab:{root:{position:'absolute',bottom:48,right:48}}}};if(ne()(e))n.palette.primary={main:e};else if(ee[e])n.palette.primary=ee[e];else throw new Error(`${e} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);if(ne()(t))n.palette.secondary={main:t};else if(t&&ee[t])n.palette.secondary=ee[t];else throw new Error(`${t} is not a valid color. 
      Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);if(ne()(a))n.palette.header={main:a};else if(ee[a])n.palette.header=ee[a];else throw new Error(`${a} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);return Object(q.createMuiTheme)(n)}function i(e,t=1){const a=fetch(e).then((e)=>e.json()).catch((a)=>{if(1===t)throw a;setTimeout(()=>{i(e,t-1)},500)});return a}function o(e){return(t)=>{const a=new at(e);t({type:Te,client:a,clientName:'dialogflow'})}}function r(e){return(t,a)=>{const n=a().conversation.messages,i=$e()(e.responses,['type','suggestion']);if(i?t({type:Ce}):t({type:we}),0===n.length)t({type:fe,newConversationArray:[e]});else{const a=n.map((t)=>t.loading?e:t).sort((e,t)=>{const a=Object(ye.parse)(e.systemTime,Fe,new Date(e.systemTime)),n=Object(ye.parse)(t.systemTime,Fe,new Date(t.systemTime)),i=Object(ye.differenceInMilliseconds)(a,n);return i});t({type:fe,newConversationArray:a})}}}function s(e){return(t)=>{function a(e){return'text'===e?'text':'card'===e?'card':'quickReplies'===e?'suggestion':'image'===e?'image':'payload'===e?'payload':'text'}const n=pe()(e,'queryResult.outputContexts',[]);t({type:Ze,rawOutputContexts:n});const i=pe()(e,'queryResult.fulfillmentMessages',[]);let o=[],s=!1;try{o=i.map((e)=>{const n=a(e.message),i=pe()(e,'quickReplies.quickReplies',[]),o=pe()(e,'text.text',null),r={title:pe()(e,'card.title',''),subtitle:pe()(e,'card.subtitle',''),imageUrl:pe()(e,'card.imageUri',''),buttons:pe()(e,'card.buttons',[])},l={imageUri:pe()(e,'image.imageUri',''),accessibilityText:pe()(e,'image.accessibilityText','')},c={};if('payload'===n){const a=pe()(e,'payload.fields',{});for(const e of Object.entries(a)){var d=nt(e,2);const t=d[0],a=d[1];if('stringValue'===a.kind)try{c[t]=JSON.parse(a.stringValue)}catch(e){c[t]=a.stringValue}else if(a.kind&&'stringValue'!==a.kind)throw new Error('Use stringValue to send payloads');else return c}if('disableInput'in c){if(1<Object.keys(c).length){const e=tt()(c,['disableInput']);t({type:ze,modifiedPayload:e})}s=!0,t({type:Oe})}else t({type:ze,payload:c})}return'text'===n?{type:n,text:o}:'image'===n?{type:n,image:l}:'suggestion'===n?{type:n,suggestions:i}:'card'===n?{type:n,card:r}:'payload'===n?{type:n,payload:c}:{type:n,text:o}})}catch(e){console.log(e)}let l;s?l=o.filter((e)=>{const t=pe()(e,'payload.disableInput',!1);return!t}):(t({type:Pe}),l=o);const c=Object(ye.format)(new Date,Fe),d={entity:'bot',loading:!1,messageId:e.responseId,key:Xe()(),messageSession:e.session,language:e.queryResult.languageCode,systemTime:c,responses:l};t(r(d))}}function l(e){return(t,a)=>{const n=a().conversation.client;t({type:je}),n.textRequest(e).then((e)=>{e?(t(s(e)),t({type:he})):t({type:Ie,error:'No response received from chat provider. Please try again.'})}).catch((e)=>{throw new Error(e)}).catch((e)=>{console.log(e),t({type:Ie,error:'Unable to connect to the chat provider. Please try again.'})})}}function c(e){return(t,a)=>{const n=a().conversation.client;t({type:je}),n.eventRequest(e).then((e)=>{e?(t(s(e)),t({type:he})):(t({type:Ie,error:'No response received from chat provider. Please try again.'}),t({type:Ae}))}).catch((e)=>{throw new Error(e)}).catch((e)=>{console.log(e),t({type:Ie,error:'Unable to connect to the chat provider. Please try again.'})})}}function d(e,t){return(a)=>{try{if(!e)throw new Error('No conversation provider selected.');if('dialogflow'===e.toLowerCase())a(o(t));else throw a({type:Ie,error:`Unable to connect to ${e}`}),new Error(`${e} is not a recognized conversation provider.`)}catch(e){console.log(e)}}}function u(e){return(t,a)=>{const n=a().conversation.clientName;try{if('dialogflow'===n.toLowerCase())t(l(e));else throw new Error(`${n} is not a recognized conversation provider.`)}catch(e){console.log(e),t({type:Ie,error:`Unable to connect to ${n}`})}}}function m(e){return(t,a)=>{const n=a().conversation.messages.length,i=Object(ye.format)(new Date,Fe),o={entity:'user',messageId:`usermessage-${n}`,systemTime:i,text:e};t({type:Ee,response:o}),t({type:we}),t(u(e))}}function p(e){return(t)=>{t(m(e))}}function y(){return(e,t)=>{const a=t().conversation.conversationStarted;e({type:ve}),a||(e(c('Welcome')),e({type:Ue}))}}function M(){return{type:Ye}}function g(){return{type:Se}}function L(){return{type:De}}function T(){return{type:ke}}function f(){return(e,t)=>{const a=t().conversation.lastUpdateTime,n=new Date,i=Object(ye.parse)(a,Fe,new Date(a)),o=Object(ye.differenceInMinutes)(n,i),r=Object(ye.differenceInSeconds)(n,i);let s='Now';1<=o?s=`${o} min ago`:9<=r&&(s=`${r} sec ago`);const l=Object(ye.format)(n,Fe);e({type:be,headerTime:s,currentTime:l})}}function N(){return(e,t)=>{const a=t().conversation.timer;a&&clearInterval(a);const n=setInterval(()=>e(f()),10000);e({type:xe,newTimer:n}),e(f())}}function E(e){return(t)=>{const a=e.title,n=e.avatar,i=e.client,o=e.clientOptions,r=e.initialActive,s=e.fullscreen,l=e.policyText,u=e.mapConfig,m=e.activationText,p=e.feedbackUrl;let M=n;if(M||(M=ot.a),t({type:ge,title:a}),t({type:Le,avatar:M}),t(d(i,o)),t(N()),l&&''!==l&&t({type:Qe,policyText:l}),m&&''!==m&&t({type:Be,activationText:m}),p&&t({type:We,feedbackUrl:p}),u){const e=u.googleMapsKey,a=u.centerCoordinates,n=pe()(a,'lat',null),i=pe()(a,'lng',null);if(e&&''!==e&&t({type:Ve,googleMapsKey:e}),a)try{if('object'==typeof a&&null!==n&&null!==i)t({type:_e,centerCoordinates:a});else throw new Error('Please provide valid latitude and longitude coordinates, see README')}catch(e){console.log(e)}}!0===r?(t({type:Ue}),t(c('Welcome')),t(y())):t(g()),!0===s?t(L()):t(T())}}function j(e){return{type:Ge,value:e}}function x(e){return(t)=>{t(u(e))}}function b(e){return{type:Je,value:e}}function C(e){return Object(O.createElement)(ga,{message:e.text,entity:e.entity,key:e.key,timestamp:e.systemTime,isLoading:!1})}function w(e){return Object(O.createElement)(ga,{key:'loading',entity:'bot',timestamp:e.systemTime,isLoading:e.loading})}function I(e,t=!1){return Object(O.createElement)(Ln,{feedbackData:e.payload.feedback,session:e.session,entity:e.entity,key:e.key,isLoading:!1,timestamp:e.systemTime,className:t?'scrollIntoView':''})}function h(e,t,a=!1){return Object(O.createElement)(ga,{message:e.text,entity:e.entity,key:e.key,isLoading:!1,timestamp:e.systemTime,showTimestamp:t,className:a?'scrollIntoView':''})}function v(e,t=!1){return Object(O.createElement)(ha,{data:e.card,timestamp:e.systemTime,key:e.key,className:t?'scrollIntoView':''})}function S(e,t=!1){return Object(O.createElement)(Xa,{data:e.payload.mapPayload,timestamp:e.systemTime,key:e.key,className:t?'scrollIntoView':''})}function D(e){return!(256<e.length)}function k(e){const t={value:e,charLength:e.length||0,maxExceeded:255<e.length};return{type:Ne,userInput:t}}function z(){return(e,t)=>{var a=t();const n=a.userInput,i=n.value.trim();if(i&&''!==i){const t=D(n.value);t&&(e(m(n.value)),e(k('')))}}}Object.defineProperty(t,'__esModule',{value:!0});var O=a(0),P=a.n(O),U=a(2),A=a.n(U),Y=a(13),R=a.n(Y),Q=a(1),V=a.n(Q),_=a(22),B=a.n(_),G=a(23),W=a.n(G),H=a(24),J=a.n(H),Z=a(25),F=a.n(Z),K=a(4),X=a.n(K),q=a(5),$=a.n(q),ee=a(26),te=a.n(ee),ae=a(27),ne=a.n(ae),ie=a(28),oe=a.n(ie),re=a(29),se=a.n(re),le=a(30),ce=a.n(le),de=a(14),ue=a.n(de),me=a(15),pe=a.n(me),ye=a(3),Me=a.n(ye);const ge='SET_TITLE',Le='SET_AVATAR',Te='SAVE_CLIENT',fe='SAVE_RESPONSE',Ne='SAVE_USER_INPUT',Ee='SAVE_USER_RESPONSE',je='INITIATE_LOADING',xe='TIMER_START',be='UPDATE_CURRENT_TIME',Ce='SHOW_BUTTON_BAR',we='HIDE_BUTTON_BAR',Ie='DISPLAY_ERROR',he='CLEAR_ERROR',ve='SHOW_WINDOW',Se='HIDE_WINDOW',De='FULLSCREEN',ke='WINDOWED',ze='RECEIVE_WEBHOOK_DATA',Oe='DISABLE_INPUT',Pe='ENABLE_INPUT',Ue='SET_CONVERSATION_STARTED',Ae='SET_CONVERSATION_ENDED',Ye='SHOW_PRIVACY_POLICY',Re='HIDE_PRIVACY_POLICY',Qe='SET_PRIVACY_POLICY',Ve='SET_GOOGLE_MAPS_KEY',_e='SET_CENTER_COORDINATES',Be='SET_ACTIVATION_TEXT',Ge='SAVE_FEEDBACK_INPUT',We='SET_FEEDBACK_URL',He='SET_FEEDBACK_SUBMITTED',Je='SET_FEEDBACK_OPTIONS',Ze='SET_OUTPUT_CONTEXTS',Fe='yyyy-MM-dd\'T\'HH:mm:ss.SSS';var Ke=a(8),Xe=a.n(Ke),qe=a(31),$e=a.n(qe),et=a(32),tt=a.n(et);class at{constructor(e){if(!e||!e.textUrl)throw new Error('Fulfillment URL is required to generate a conversation client');this.textUrl=e.textUrl,this.eventUrl=e.eventUrl,this.uuid=Xe()()}encodeQueryData(e){const t=[];for(const a in e)t.push(`${encodeURIComponent(a)}=${encodeURIComponent(e[a])}`);return t.join('&')}textRequest(e){if(!e)throw new Error('Query should not be empty');const t={query:e,uuid:this.uuid},a=this.encodeQueryData(t),n=`${this.textUrl}?${a}`;return i(n,2)}eventRequest(e){if(!e)throw new Error('Query should not be empty');const t={query:e,uuid:this.uuid},a=this.encodeQueryData(t),n=`${this.eventUrl}?${a}`;return fetch(n).then((e)=>e.json()).catch((e)=>{throw new Error(e)})}}var nt=function(){function e(e,t){var a=[],n=!0,i=!1,o=void 0;try{for(var r,s=e[Symbol.iterator]();!(n=(r=s.next()).done)&&(a.push(r.value),!(t&&a.length===t));n=!0);}catch(e){i=!0,o=e}finally{try{!n&&s['return']&&s['return']()}finally{if(i)throw o}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),it=a(33),ot=a.n(it);const rt=V()(oe.a)`
  && {
    display: ${(e)=>e.active?'flex':'none'};
    pointer-events: auto;
    width: ${(e)=>e.activationtext?'auto':'56px'};
    height: ${(e)=>e.activationtext?'auto':'56px'};
    padding: ${(e)=>e.activationtext?'4px 6px':'auto'};
    border-radius: ${(e)=>e.activationtext?'20px':'50%'};
  }
`,st=V.a.div`
  text-transform: none;
  padding-right: 10px;
  color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
`,lt=V()(ue.a)`
  && {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 50% 50% 0px 50%;
  }
`;class ct extends O.PureComponent{render(){var e=this.props;const t=e.title,a=e.windowVisible,n=e.showWindow,i=e.activationText,o=e.theme,r=e.avatar,s=i?Object(O.createElement)(P.a.Fragment,null,Object(O.createElement)(lt,{alt:t,src:r}),Object(O.createElement)(st,{theme:o},i)):Object(O.createElement)(se.a,null);return Object(O.createElement)(ce.a,{in:!a,unmountOnExit:!0},Object(O.createElement)(rt,{color:'primary',onClick:n,active:a?0:1,activationtext:i?1:0},s))}}var dt=Object(q.withTheme)()(Object(U.connect)((e)=>({title:e.config.title,windowVisible:e.config.windowVisible,activationText:e.config.activationText,avatar:e.config.avatar}),(e)=>({showWindow:()=>{e(y())}}))(ct)),ut=a(34),mt=a.n(ut),pt=a(6),yt=a.n(pt),Mt=a(35),gt=a.n(Mt),Lt=a(36),Tt=a.n(Lt),ft=a(37),Nt=a.n(ft),Et=a(16),jt=a.n(Et),xt=a(38),bt=a.n(xt),Ct=a(39),wt=a.n(Ct),It=a(7),ht=a.n(It),vt=a(9),St=a.n(vt);const Dt=V()(ue.a)`
  && {
    flex: 0 0 32px;
    width: 32px;
    height: 32px;
    margin-right: 16px;
    border-radius: 50% 50% 0px 50%;
  }
`,kt=V.a.div`
  && {
    position: relative;
    background: ${(e)=>e.theme.palette.header.main};
    padding: 6px;
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
`,zt=V()(yt.a)`
  && {
    font-family: 'Product Sans';
    font-weight: 400;
    height: 32px;
    font-size: 18px;
    line-height: 32px;
    flex: 1;
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
  }
`,Ot=V()(jt.a)`
  && {
    padding: 6px;
    flex: 0;
    cursor: pointer;
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`,Pt=V()(ht.a)`
  && {
    font-size: 12px;
    font-weight: lighter;
    flex: 0;
    cursor: pointer;
    min-width: 85px;
    padding: 1px;
    border-radius: 10px;
    border: 1px solid ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`;class Ut extends O.PureComponent{render(){var e=this.props;const t=e.title,a=e.theme,n=e.hideWindow,i=e.showWindowed,o=e.showFullscreen,r=e.fullscreen,s=e.avatar,l=e.showPrivacyPolicy,c=e.sendQuickReply,d=e.messages,u=Object(vt.findLast)(d,(e)=>{const t=Object(vt.find)(e.responses,['type','suggestion']);return t});let m=null;if(u){const e=u.responses.filter((e)=>'suggestion'===e.type)[0].suggestions;m=Object(vt.find)(e,(e)=>'home'===e.toLowerCase()||'start over'===e.toLowerCase())}return Object(O.createElement)(kt,{theme:a},Object(O.createElement)(Dt,{alt:t,src:s}),Object(O.createElement)(zt,{theme:a,variant:'h6'},t),m&&Object(O.createElement)(wt.a,{title:'Return to subject selection',placement:'bottom'},Object(O.createElement)(Pt,{theme:a,onClick:()=>c('START OVER')},'Start Over')),Object(O.createElement)(wt.a,{title:'Privacy Policy',placement:'bottom'},Object(O.createElement)(Ot,{theme:a,onClick:l,"aria-label":'Windowed'},Object(O.createElement)(Nt.a,{fontSize:'small'}))),r?Object(O.createElement)(Ot,{theme:a,onClick:i,"aria-label":'Windowed'},Object(O.createElement)(Tt.a,{fontSize:'small'})):Object(O.createElement)(Ot,{theme:a,onClick:o,"aria-label":'Fullscreen'},Object(O.createElement)(gt.a,{fontSize:'small'})),Object(O.createElement)(Ot,{theme:a,onClick:n,"aria-label":'Close'},Object(O.createElement)(bt.a,{fontSize:'small'})))}}var At=Object(q.withTheme)()(Object(U.connect)((e)=>({title:e.config.title,fullscreen:e.config.fullscreen,avatar:e.config.avatar,messages:e.conversation.messages}),(e)=>({hideWindow:g,showFullscreen:L,showWindowed:T,showPrivacyPolicy:M,sendQuickReply:(t)=>e(p(t))}))(Ut)),Yt=a(40),Rt=a.n(Yt),Qt=a(41),Vt=a.n(Qt),_t=a(42),Bt=a.n(_t),Gt=a(43),Wt=a.n(Gt),Ht=a(44),Jt=a.n(Ht);const Zt=V()(Vt.a)`
  && {
    position: absolute;
  }
`;class Ft extends O.PureComponent{render(){var e=this.props;const t=e.hidePrivacyPolicy,a=e.privacyPolicyVisible,n=e.privacyPolicy,i=e.parentRef;return Object(O.createElement)(Zt,{open:a,onClose:t,"aria-labelledby":'privacy-policy',container:i,scroll:'paper'},Object(O.createElement)(Rt.a,null,'Privacy Statement'),Object(O.createElement)(Wt.a,null,Object(O.createElement)(Jt.a,null,n)),Object(O.createElement)(Bt.a,null,Object(O.createElement)(ht.a,{onClick:t,color:'primary'},'Close')))}}var Kt=Object(U.connect)((e)=>({privacyPolicyVisible:e.config.privacyPolicyVisible,privacyPolicy:e.config.privacyPolicy}),{hidePrivacyPolicy:function(){return{type:Re}}})(Ft),Xt=a(45),qt=a.n(Xt),$t=a(46),ea=a.n($t),ta=a(17),aa=a.n(ta),na=a(10),ia=a.n(na),oa=a(47),ra=a.n(oa);const sa=V.a.div`
  text-align: center;
  width: 42px;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`,la=V.a.div`
  animation: dot-keyframes 1s infinite ease-in-out;
  background-color: ${ra.a[900]};
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
`;class ca extends O.PureComponent{render(){return Object(O.createElement)(sa,null,Object(O.createElement)(la,null),Object(O.createElement)(la,null),Object(O.createElement)(la,null))}}const da=V.a.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 10px;
  height: min-content;
  align-items: ${(e)=>'user'===e.entity?'flex-end':'flex-start'};
  scroll-margin: 15px;
  p, div {
    font-size: 14px;
  }
`,ua=V.a.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  padding: 0;
  justify-content: ${(e)=>'user'===e.entity?'flex-end':'flex-start'};
`,ma=V.a.div`
  && {
    background: ${X.a[400]};
    border-top-right-radius: 10px;
    border-top-left-radius: 1px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 9px;
  }
`,pa=V.a.div`
  && {
    max-width: 360px;
    overflow: hidden;
    background-color: ${(e)=>e.theme.palette.primary.main};
    color: #ffffff;
    border-top-left-radius: 10px;
    border-top-right-radius: 1px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 9px;
  }
`,ya=V()(yt.a)`
  && {
    color: ${X.a[500]};
    margin-top: 6px;
    padding-left: 5px;
    padding-right: 2px;
  }
`;class Ma extends O.Component{render(){var e=this.props;const t=e.message,a=e.entity,n=e.isLoading,i=e.timestamp,o=e.currentTime,r=e.theme,s=e.showTimestamp,l=e.error,c=e.className,d=e.key,u=Object(ye.parse)(i,Fe,new Date(o)),m=Object(ye.isSameDay)(new Date,u),p=Object(ye.isSameDay)(u,Object(ye.subDays)(new Date,1));let y=null;y=m?`Today ${Object(ye.format)(u,'h:mm aa')}`:p?`Yesterday ${Object(ye.format)(u,'h:mm aa')}`:Object(ye.format)(u,'MMMM dd, yyyy h:mm aa');let M=t&&''!==t[0]?t:['Oops! Something happened with the connection. Please try again.'];let g=Object(O.createElement)(ca,null);n&&l&&(g=l);const L='user'===a?Object(O.createElement)(pa,{elevation:1,theme:r},t):Object(O.createElement)(ma,{elevation:1},n?g:Object(O.createElement)(aa.a,{options:{forceBlock:!0,overrides:{h6:{component:yt.a,props:{variant:'h6'}},p:{component:yt.a,props:{variant:'body1'}},a:{component:ia.a}}}},M[0]));return Object(O.createElement)(da,{entity:a,className:c,key:d},Object(O.createElement)(ua,{entity:a},L),s?Object(O.createElement)(ya,{variant:'caption'},y):null)}}var ga=Object(q.withTheme)()(Object(U.connect)((e)=>({currentTime:e.conversation.currentTime,error:e.error}))(Ma)),La=a(11),Ta=a.n(La),fa=a(18),Na=a.n(fa),Ea=a(12),ja=a.n(Ea),xa=a(48),ba=a.n(xa);const Ca=V()(Ta.a)`
  && {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #fff;
    margin: 15px 16px 15px 16px;
    white-space: pre-line;
    scroll-margin: 15px;
  }
`,wa=V()(ba.a)`
  && {
    height: ${(e)=>e.image&&''!==e.image?'200px':'0px'};
    background-size: cover;
    background-position: center center;
  }
`;class Ia extends O.PureComponent{render(){var e=this.props.data;const t=e.title,a=e.subtitle,n=e.imageUrl,i=e.buttons,o=e.className;return Object(O.createElement)(Ca,{className:o,key:this.props.key},n?Object(O.createElement)(wa,{image:encodeURI(n),title:''}):null,Object(O.createElement)(ja.a,null,Object(O.createElement)(yt.a,{gutterBottom:!0,variant:'h6'},t),Object(O.createElement)(aa.a,{options:{forceBlock:!0,overrides:{h6:{component:yt.a,props:{variant:'h6'}},p:{component:yt.a,props:{variant:'body1'}},a:{component:ia.a}}}},a)),Object(O.createElement)(Na.a,null,i.map((e,t)=>{const a=`card-${t}${Object(ye.format)(new Date,Fe)}`;return Object(O.createElement)(ht.a,{href:e.postback,target:'_blank',size:'small',color:'primary',key:a},e.text)})))}}var ha=Object(U.connect)((e)=>({inputValue:e.userInput}))(Ia),va=a(49),Sa=a.n(va),Da=a(50),ka=a.n(Da),za=a(51),Oa=a.n(za),Pa=a(52),Ua=a.n(Pa),Aa=a(53),Ya=a.n(Aa),Ra=a(54),Qa=a.n(Ra),Va=a(55),_a=a.n(Va),Ba=a(56),Ga=a.n(Ba);const Wa=V()(Ta.a)`
  && {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #fff;
    margin: 15px 16px 15px 16px;
    white-space: pre-line;
    scroll-margin: 15px;
  }
`,Ha=V.a.div`
  height: 150px;
  font-size: 14px;
  margin-top: 10px;
`,Ja=V()(ja.a)`
  &&& {
    padding-top: 0;
    padding-bottom: 0;
  }
`,Za=V()(Oa.a)`
  td {
    padding: 4px 0px 4px 0px;
  }
  tr:last-of-type {
    td {
      border-bottom: none;
    }
  }
`,Fa=V()(Ua.a)`
  && {
    width: 70%;
    padding: 4px 0px 4px 0px;
  }
`,Ka=V()(Ua.a)`
  &&& {
    width: 20%;
    padding-right: 0;
    text-align: right;
  }
`;var Xa=Object(U.connect)((e)=>({googleMapsKey:e.config.googleMapsKey}))(function(e){const t=e.data,a=e.googleMapsKey,n=e.className,i=e.key,o='230px',r={width:30,height:30},s=`https://maps.googleapis.com/maps/api/js?key=${a}&v=3`,l=(e)=>{const t=`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${e.placeId}`;window.open(t,'_blank')},c=Object(Ra.withScriptjs)(Object(Ra.withGoogleMap)(()=>Object(O.createElement)(Ra.GoogleMap,{defaultZoom:8,defaultCenter:t.nearestLocations[0],defaultOptions:{zoomControl:!0,mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1}},t.locations.map((e,t)=>Object(O.createElement)(Ra.Marker,{key:t,position:{lat:e.lat,lng:e.lng},icon:{url:_a.a,scaledSize:r},onClick:()=>l(e)})),Object(O.createElement)(Ra.Marker,{position:{lat:t.currentGeocode.lat,lng:t.currentGeocode.lng},icon:{url:Ga.a,scaledSize:r}}))));return Object(O.createElement)(Wa,{className:n,key:i},Object(O.createElement)(Sa.a,{title:'Office Locations',titleTypographyProps:{variant:'h6'}}),Object(O.createElement)(Ja,null,Object(O.createElement)(c,{googleMapURL:s,loadingElement:Object(O.createElement)('div',{style:{height:`${o}`}}),containerElement:Object(O.createElement)('div',{style:{height:`${o}`}}),mapElement:Object(O.createElement)('div',{style:{height:'100%'}})}),Object(O.createElement)(Ha,null,Object(O.createElement)(ka.a,{padding:'dense'},Object(O.createElement)(Za,null,t.nearestLocations.map((e,t)=>Object(O.createElement)(Ya.a,{key:t},Object(O.createElement)(Fa,{padding:'dense'},Object(O.createElement)(yt.a,null,Object(O.createElement)(ia.a,{href:`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${e.placeId}`,target:'blank'},e.street,', ',e.city))),Object(O.createElement)(Ka,{padding:'dense'},e.distance))))))))}),qa=a(57),$a=a.n(qa),en=a(58),tn=a.n(en),an=a(59),nn=a.n(an),on=a(60),rn=a.n(on),sn=a(19),ln=a.n(sn),cn=a(61),dn=a.n(cn),un=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const mn=V.a.div`
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 15px;
  padding-top: 13px;
`;class pn extends O.PureComponent{constructor(){super(),this.state={isSubmitted:!1,feedbackComment:''}}render(){var e=this.props;const t=e.feedbackInputs,a=e.feedbackUrl,n=e.saveFeedbackInput,i=e.sendFeedback,o=e.session,r=e.outputContexts,s=(e)=>(t)=>{const a={value:e,checked:t.target.checked};n(a)},l=(e)=>e.filter((e)=>e.checked?e.value:null).map((e)=>e.value),c=(e)=>{fetch(a,{method:'POST',body:JSON.stringify(e),headers:{"Content-Type":'application/json'}})};return Object(O.createElement)(P.a.Fragment,null,this.state.isSubmitted?Object(O.createElement)(ja.a,null,'Thank you. Your feedback is important to us and will help improve Gen.'):Object(O.createElement)('div',null,Object(O.createElement)(ja.a,null,Object(O.createElement)(yt.a,{gutterBottom:!0,variant:'h6'},t.wasHelpful?'Why was Gen helpful?':'Why was Gen not helpful?'),Object(O.createElement)($a.a,{component:'fieldset'},Object(O.createElement)(tn.a,null,t.feedbackList?t.feedbackList.map((e)=>Object(O.createElement)(nn.a,{key:e.value,control:Object(O.createElement)(rn.a,{checked:e.checked,onChange:s(e.value),value:e.value}),label:e.value})):null,Object(O.createElement)(mn,null,'Add your comments'),Object(O.createElement)(ln.a,{placeholder:'Type something',variant:'outlined',multiline:!0,value:this.state.feedbackComment,onChange:(t)=>{const e=t.target.value;this.setState((t)=>un({},t,{feedbackComment:e}))},InputProps:{classes:{inputMultiline:this.props.classes.inputMultiline}}})))),Object(O.createElement)(Na.a,null,Object(O.createElement)(ht.a,{size:'small',color:'primary',onClick:()=>{const e={wasHelpful:t.wasHelpful,session:o,feedbackList:l(t.feedbackList),comment:this.state.feedbackComment,outputContexts:r};c(e),i('Feedback complete'),this.setState((e)=>un({},e,{isSubmitted:!0}))},disabled:(!t.feedbackList||!(0<t.feedbackList.length)||dn()(t.feedbackList,(e)=>!e.checked))&&!this.state.feedbackComment},'Submit'))))}}var yn=Object(q.withStyles)(()=>({root:{},inputMultiline:{fontSize:'0.875rem',overflowY:'hidden'}}))(Object(U.connect)((e)=>({feedbackInputs:e.feedbackInput,feedbackUrl:e.config.feedbackUrl,outputContexts:e.conversation.outputContexts}),(e)=>({saveFeedbackInput:(t)=>{e(j(t))},sendFeedback:(t)=>{e(x(t))}}))(pn));const Mn=V()(Ta.a)`
  && {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #fff;
    margin: 15px 16px 15px 16px;
    white-space: pre-line;
    scroll-margin: 15px;
  }
`;class gn extends O.PureComponent{componentDidMount(){var e=this.props;const t=e.setFeedbackOptions,a=e.feedbackData;t(a)}render(){var e=this.props;const t=e.session,a=e.className,n=e.key;return Object(O.createElement)(Mn,{className:a,key:n},Object(O.createElement)(yn,{session:t}))}}var Ln=Object(U.connect)((e)=>({feedbackInputs:e.feedbackInput}),(e)=>({setFeedbackOptions:(t)=>{e(b(t))}}))(gn);const Tn={giant:1170,desktop:992,tablet:768,phone:620},fn=Object.keys(Tn).reduce((e,t)=>{const a=Tn[t]/16;return e[t]=(...e)=>Q.css`
    @media (max-width: ${a}em) {
      ${Object(Q.css)(...e)};
    }
  `,e},{});var Nn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const En=V.a.div`
  display: flex;
  flex-direction: column;
  /* Vertically flips the container element to achieve flex-direction:column-reverse effect */
  transform: scale(1, -1);
  overflow: auto;
  ${fn.tablet`
    flex-direction: column-reverse;
    overflow: auto;
    transform: none;
  `};
`,jn=V.a.div`
  background: ${X.a[100]};
  z-index: 4;
  grid-area: chatwindow;
  margin-bottom: 1px;
  margin-top: 8px;

  /* Vertically flips the content element so that the messages won't be upside down */
  transform: scale(1, -1);

  ${fn.tablet`
   transform: none;
  `};
`;class xn extends O.PureComponent{constructor(e){super(e),Object.defineProperty(this,'findIndexFirstElementInLastResponse',{enumerable:!0,writable:!0,value:(e)=>{let t=0,a=!1;return Object(vt.forEachRight)(e,(e,n)=>{'bot'===e.entity?!a&&(t=n):a=!0}),t}}),Object.defineProperty(this,'parseMessages',{enumerable:!0,writable:!0,value:()=>{const e=this.props.messages,t=[];return e.forEach((e)=>{const a={systemTime:e.systemTime,entity:e.entity,session:e.messageSession,key:e.key};if(e.loading){const n=ea()(e,a);t.push(n)}else if('bot'===e.entity)e.responses.forEach((e,n)=>{if('text'===e.type||'card'===e.type||'payload'===e.type){const i=ea()(e,Nn({},a,{key:`${a.key}_${n}`}));t.push(i)}});else if('user'===e.entity){const n=ea()(e,a);t.push(n)}}),t}}),Object.defineProperty(this,'createMessageElements',{enumerable:!0,writable:!0,value:()=>{const e=this.parseMessages(),t=[];let a=e;1<e.length&&(a=Object(vt.sortBy)(e,(e)=>new Date(e.systemTime)));const n=this.findIndexFirstElementInLastResponse(a);a.forEach((e,o)=>{const i=o===n;let r=!1;o===a.length-1&&(r=!0),e.loading?t.push(w(e)):'user'===e.entity?t.push(C(e)):'bot'===e.entity&&'text'===e.type?t.push(h(e,r,i)):'bot'===e.entity&&'card'===e.type?t.push(v(e,i)):'bot'===e.entity&&'payload'===e.type&&e.payload.mapPayload?t.push(S(e,i)):'bot'===e.entity&&'payload'===e.type&&e.payload.feedback?t.push(I(e,i)):t.push(h({text:['Something went wrong.']}))}),this.setState((e)=>Nn({},e,{messageElements:t}),()=>{document.getElementsByClassName('scrollIntoView')[0]&&setTimeout(()=>document.getElementsByClassName('scrollIntoView')[0].scrollIntoView(!1),0)})}}),Object.defineProperty(this,'handleWheel',{enumerable:!0,writable:!0,value:(t)=>{t.deltaY&&(t.preventDefault(),t.currentTarget.scrollTop-=2*(parseFloat(getComputedStyle(t.currentTarget).getPropertyValue('font-size'))*(0>t.deltaY?-1:1)))}}),Object.defineProperty(this,'componentRef',{enumerable:!0,writable:!0,value:P.a.createRef(null)}),this.messages=[],this.state={messageElements:[]},this.componentRef=P.a.createRef()}componentDidUpdate(){const e=this.parseMessages();qt()(this.messages,e)||(this.messages=e,this.createMessageElements()),this.componentRef.current&&this.componentRef.current.addEventListener('wheel',this.handleWheel)}render(){const e=this.state.messageElements;return Object(O.createElement)(En,{ref:this.componentRef},Object(O.createElement)(jn,{elevation:1,square:!0},e))}}var bn=Object(U.connect)((e)=>({messages:e.conversation.messages,buttonBarVisible:e.buttonBar.visible,error:e.error}))(xn),Cn=a(62),wn=a.n(Cn);const In=V.a.div`
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
`,hn=V()(ln.a)`
  && {
    padding: 5px 15px;
    padding-bottom: ${(e)=>null!==e.helperText&&'16px'};
    /*All properties below are specified to combat WordPress*/
    
    textarea {
      border: none;
      width: 100%;
      outline: none;
      color: #000;
      height: 100%;
      padding: 0;
      font-size: 14px;
    }
  }
`,vn=V()(jt.a)`
  && {
    padding-right: 15px;
    &:hover {
      background: transparent;
    }
  }
`;class Sn extends O.PureComponent{constructor(){super(),this.handleKeyPress=this.handleKeyPress.bind(this)}handleKeyPress(t){13===t.charCode&&(this.props.submitUserInput(),t.preventDefault())}render(){var e=this.props;const t=e.saveUserInput,a=e.inputValue,n=e.shouldDisable,i=a.value,o=`${a.charLength}/255`,r=a.maxExceeded;let s=null;return s=r?`Exceeded character limit: ${o}`:null,Object(O.createElement)(In,{visible:n},Object(O.createElement)(hn,{multiline:!0,rowsMax:'4',fullWidth:!0,InputProps:{disableUnderline:!0},placeholder:'Send a message',helperText:s,FormHelperTextProps:{style:{color:'#cd5c5c',margin:0}},onChange:t,value:i,onKeyPress:this.handleKeyPress}),Object(O.createElement)(vn,{onClick:this.props.submitUserInput,"aria-label":'Send',color:'primary',disabled:r,disableRipple:!0},Object(O.createElement)(wn.a,null)))}}var Dn=Object(U.connect)((e)=>({inputValue:e.userInput,shouldDisable:e.conversation.disableInput}),(t)=>({saveUserInput:(a)=>{t(k(a.target.value))},submitUserInput:()=>{t(z())}}))(Sn),kn=a(63),zn=a.n(kn);const On=V.a.div`
  grid-area: buttonbar;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  padding: ${(e)=>e.visible?'4px 8px 12px 16px':'0 16px'};
  background: ${X.a[300]};
  border-top: ${(e)=>e.visible?'1px solid rgba(0, 0, 0, 0.2)':'none'};
  overflow-y: auto;
`,Pn=V()(ht.a)`
  && {
    margin-right: 8px;
    margin-top: 8px;
    padding-left: 5px;
    padding-right: 5px;
    display: ${(e)=>'true'===e.visible?'block':'none'};
    background-color: ${(e)=>'true'===e.navigationbutton?'rgb(36,39,44)':'rgb(240,240,240)'};
    color: ${(e)=>'true'===e.navigationbutton?' white':'secondary'};
    border-radius: 10px;
    font-size: 14px;
    width: 100%
    
  }

  :hover {
    background-color: rgb(181,181,181) !important;
  }
`,Un=(e)=>Object(vt.findLast)(e,(e)=>{const t=Object(vt.find)(e.responses,['type','suggestion']);return t}),An=(e)=>e.responses.filter((e)=>'suggestion'===e.type)[0].suggestions;class Yn extends O.PureComponent{constructor(...e){var t;return t=super(...e),Object.defineProperty(this,'minColumnSpan',{enumerable:!0,writable:!0,value:(e)=>{if(18<=e.length)return 3;return 13<=e.length&&18>e.length?2:1}}),Object.defineProperty(this,'arrangeSubjectMatterSuggestions',{enumerable:!0,writable:!0,value:(e)=>[[Object(vt.find)(e,(e)=>'child support'===e.label.toLowerCase())],[Object(vt.find)(e,(e)=>'snap'===e.label.toLowerCase()),Object(vt.find)(e,(e)=>'tanf'===e.label.toLowerCase())],[Object(vt.find)(e,(e)=>'workforce development'===e.label.toLowerCase())]]}),Object.defineProperty(this,'playTetris',{enumerable:!0,writable:!0,value:(e)=>{const t=(e,t)=>{const a=Object(vt.find)(t,(t)=>t.minColumnSpan===e),n=Object(vt.filter)(t,(e)=>!a||e.label!==a.label);return{next:a,remainingButtons:n}},a=Object(vt.reduce)(e,(e,a)=>{if(0<=Object(vt.findIndex)(e.remainingButtons,(e)=>e.label===a.label)){const n=a;let i=Object(vt.filter)(e.remainingButtons,(e)=>e.label!==n.label);if(3===n.minColumnSpan)return{buttonRows:[...e.buttonRows,[n]],remainingButtons:i};if(2===n.minColumnSpan){let a=t(2,i);i=a.remainingButtons,a.next||(a=t(1,i),i=a.remainingButtons);const o=a.next,r=Object(vt.filter)([n,o],(e)=>!!e);return{buttonRows:[...e.buttonRows,r],remainingButtons:i}}if(1===n.minColumnSpan){let a=t(1,i),o=a.next;if(i=a.remainingButtons,o){const a=t(1,i),r=a.next;i=a.remainingButtons;const s=Object(vt.filter)([n,o,r],(e)=>!!e);return{buttonRows:[...e.buttonRows,s],remainingButtons:i}}a.next||(a=t(2,i),o=a.next,i=a.remainingButtons);const r=Object(vt.filter)([n,o],(e)=>!!e);return{buttonRows:[...e.buttonRows,r],remainingButtons:i}}}return e},{buttonRows:[],remainingButtons:e}),n=a.buttonRows;return n}}),t}render(){var e=this.props;const t=e.visible,a=e.messages,n=e.sendQuickReply,i=e.paginationPage,o=e.changeSuggestionPage,r=Un(a),s=[];let l=null,c=!1;if(r){const e=An(r),a=Object(vt.filter)(e,(e)=>'go back'!==e.toLowerCase()&&'home'!==e.toLowerCase()&&'start over'!==e.toLowerCase());4===a.length&&Object(vt.find)(a,(e)=>'child support'===e.toLowerCase())&&Object(vt.find)(a,(e)=>'tanf'===e.toLowerCase())&&Object(vt.find)(a,(e)=>'snap'===e.toLowerCase())&&Object(vt.find)(a,(e)=>'workforce development'===e.toLowerCase())&&(c=!0),l=Object(vt.find)(e,(e)=>'go back'===e.toLowerCase());for(const e of a){const a=this.minColumnSpan(e);s.push({label:e,id:r.messageId,visible:t,minColumnSpan:a})}}const d=c?this.arrangeSubjectMatterSuggestions(s):this.playTetris(s),u=4,m=Math.ceil(d.length/u),p=Array(m).fill().map(()=>d.splice(0,u)),y=p[i-1]?p[i-1]:p[0];return(0<s.length||l)&&Object(O.createElement)(On,{visible:t},Object(O.createElement)(zn.a,{container:!0},0<s.length&&y.map((e,t)=>Object(O.createElement)(zn.a,{key:`buttonRow_${t}`,container:!0,item:!0,spacing:8,xs:12},e.map((a,i)=>Object(O.createElement)(zn.a,{key:`buttonRow_${t}_${i}`,item:!0,xs:12/e.length},Object(O.createElement)(Pn,{size:'small',color:'secondary',key:`${a.id}-btn${i}`,visible:a.visible.toString(),navigationbutton:'false',onClick:()=>n(a.label.toUpperCase())},a.label.toUpperCase()))))),Object(O.createElement)(zn.a,{item:!0,container:!0,xs:12,justify:'space-between',spacing:8},l&&1===i&&Object(O.createElement)(zn.a,{item:!0,xs:4},Object(O.createElement)(Pn,{size:'small',color:'secondary',visible:'true',navigationbutton:'true',onClick:()=>n(l.toUpperCase())},l.toUpperCase())),1<m&&1<i&&Object(O.createElement)(zn.a,{item:!0,xs:5},Object(O.createElement)(Pn,{size:'small',color:'secondary',visible:'true',navigationbutton:'true',onClick:()=>o(i-1)},'Previous Options')),1<m&&i<m&&Object(O.createElement)(zn.a,{item:!0,xs:5},Object(O.createElement)(Pn,{size:'small',color:'secondary',visible:'true',navigationbutton:'true',onClick:()=>o(i+1)},'More Options')))))}}var Rn=Object(U.connect)((e)=>({visible:e.buttonBar.visible,messages:e.conversation.messages,paginationPage:e.buttonBar.paginationPage}),(e)=>({sendQuickReply:(t)=>{e(p(t))},changeSuggestionPage:(t)=>e({type:'CHANGE_SUGGESTION_PAGE',paginationPage:t})}))(Yn);const Qn=V()(mt.a)`
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
    ${(e)=>e.fullscreen&&Q.css`
        width: calc(100% - 96px);
        height: calc(100% - 96px);
      `};
    ${(e)=>!e.visible&&Q.css`
        width: 0;
        height: 0;
      `};

    ${fn.phone`
    width: ${(e)=>e.visible?'calc(100% - 20px)':'0'};
    height: ${(e)=>e.visible?'calc(100% - 96px)':'0'};
    right: 10px;
    max-width: none;
    max-height: none;
  `};
  }
`,Vn=V.a.div`
  && {
    width: 100%;
    height: 100%;
    transform-origin: bottom right;
    pointer-events: auto;
    background: ${X.a[100]};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 44px 1fr auto min-content;
    grid-template-areas:
      'header'
      'chatwindow'
      'buttonbar'
      'userinput';
    box-sizing: content-box;
  }
`;class _n extends O.PureComponent{constructor(e){super(e),this.containerRef=P.a.createRef()}render(){var e=this.props;const t=e.windowVisible,a=e.fullscreen;return Object(O.createElement)(Qn,{elevation:4,fullscreen:a?1:0,visible:t?1:0},Object(O.createElement)(Vn,{ref:this.containerRef,className:'mui-fixed'},Object(O.createElement)(At,null),Object(O.createElement)(Kt,{parentRef:this.containerRef.current}),Object(O.createElement)(bn,null),Object(O.createElement)(Rn,null),Object(O.createElement)(Dn,null)))}}var Bn=Object(U.connect)((e)=>({windowVisible:e.config.windowVisible,fullscreen:e.config.fullscreen}))(_n),Gn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Wn={avatar:null,title:'Chat Window',windowVisible:!1,fullscreen:!1,privacyPolicyVisible:!1,googleMapsKey:'',centerCoordinates:'',activationText:'',privacyPolicy:'Please do not enter any personally identifiable information such as SSN, Date of Birth, Case Number or last name.',feedbackUrl:''};var Hn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Jn={client:null,clientName:null,messages:[],webhookPayload:null,disableInput:!1,lastUpdateTime:Object(ye.format)(new Date,Fe),currentTime:Object(ye.format)(new Date,Fe),headerTime:'Now',timer:null,conversationStarted:!1};var Zn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Fn={visible:!1,buttons:[]};const Kn={value:'',charLength:0,maxExceeded:!1};var Xn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const qn={submitted:!1,wasHelpful:null,feedbackList:null};const $n='';const ei=Object(Y.combineReducers)({config:function(e=Wn,t){switch(t.type){case Re:return Gn({},e,{privacyPolicyVisible:!1});case Ye:return Gn({},e,{privacyPolicyVisible:!0});case Qe:return Gn({},e,{privacyPolicy:t.policyText});case Ve:return Gn({},e,{googleMapsKey:t.googleMapsKey});case _e:return Gn({},e,{centerCoordinates:t.centerCoordinates});case Be:return Gn({},e,{activationText:t.activationText});case Le:return Gn({},e,{avatar:t.avatar});case ge:return Gn({},e,{title:t.title});case ve:return Gn({},e,{windowVisible:!0});case Se:return Gn({},e,{windowVisible:!1});case De:return Gn({},e,{fullscreen:!0});case ke:return Gn({},e,{fullscreen:!1});case We:return Gn({},e,{feedbackUrl:t.feedbackUrl});default:return e;}},conversation:function(e=Jn,t){switch(t.type){case Te:return Hn({},e,{client:t.client,clientName:t.clientName});case be:return Hn({},e,{headerTime:t.headerTime,currentTime:t.currentTime});case xe:return Hn({},e,{timer:t.timer});case je:return Hn({},e,{messages:[...e.messages,{loading:!0,entity:'bot',systemTime:Object(ye.format)(new Date,Fe)}]});case fe:return Hn({},e,{lastUpdateTime:Object(ye.format)(new Date,Fe),headerTime:'Now',messages:t.newConversationArray});case Ee:return Hn({},e,{lastUpdateTime:Object(ye.format)(new Date,Fe),headerTime:'Now',messages:[...e.messages,Hn({},t.response,{key:Xe()()})].sort((e,t)=>{const a=Object(ye.parse)(e.systemTime,Fe,new Date(e.systemTime)),n=Object(ye.parse)(t.systemTime,Fe,new Date(t.systemTime)),i=Object(ye.differenceInMilliseconds)(n,a);return i})});case ze:return Hn({},e,{webhookPayload:t.payload});case Pe:return Hn({},e,{disableInput:!1});case Oe:return Hn({},e,{disableInput:!0});case Ue:return Hn({},e,{conversationStarted:!0});case Ae:return Hn({},e,{conversationStarted:!1});case Ze:return Hn({},e,{outputContexts:t.rawOutputContexts});default:return e;}},buttonBar:function(e=Fn,t){switch(t.type){case Ce:return Zn({},e,{visible:!0});case we:return Zn({},e,{visible:!1});case je:return Zn({},e,{paginationPage:1});case fe:return Zn({},e,{paginationPage:1});case Ee:return Zn({},e,{paginationPage:1});case'CHANGE_SUGGESTION_PAGE':return Zn({},e,{paginationPage:t.paginationPage});default:return e;}},userInput:function(e=Kn,t){switch(t.type){case Ne:return t.userInput;default:return e;}},feedbackInput:function(e=qn,t){switch(t.type){case Ge:return Xn({},e,{feedbackList:e.feedbackList.map((e)=>e.value===t.value.value?Xn({},e,{checked:t.value.checked}):e)});case Je:return Xn({},e,{wasHelpful:t.value.helpful,feedbackList:t.value.options.map((e)=>Xn({},e,{checked:!1}))});case He:return Xn({},e,{submitted:!0});default:return e;}},error:function(e=$n,t){switch(t.type){case Ie:return t.error;case he:return $n;default:return e;}}});B.a.load({google:{families:['Roboto:300,400,500','Product Sans:400']}});const ti=V.a.div`
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
`,ai=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.compose;class ni extends O.PureComponent{constructor(e){super(e),this.store=Object(Y.createStore)(ei,ai(Object(Y.applyMiddleware)(J.a))),this.currentValue=null,this.theme=n(this.props.primaryColor,this.props.secondaryColor,this.props.headerColor)}componentDidMount(){this.store.dispatch(E(this.props,this.theme)),this.unsubscribe=this.store.subscribe(()=>this.handleChange(this.store))}componentWillUnmount(){this.unsubscribe()}select(e){return e.conversation.webhookPayload}handleChange(e){const t=this.currentValue;this.currentValue=this.select(e.getState()),t!==this.currentValue&&this.props.onPayload&&this.props.onPayload(this.currentValue)}render(){return Object(O.createElement)(U.Provider,{store:this.store},Object(O.createElement)(W.a,{theme:this.theme},Object(O.createElement)(ti,null,Object(O.createElement)(Bn,null),Object(O.createElement)(dt,null))))}}t['default']=ni},function(e){e.exports=require('webfontloader')},function(e){e.exports=require('@material-ui/core/styles/MuiThemeProvider')},function(e){e.exports=require('redux-thunk')},function(e){e.exports=require('whatwg-fetch')},function(e){e.exports=require('@material-ui/core/colors')},function(e){e.exports=require('validator/lib/isHexColor')},function(e){e.exports=require('@material-ui/core/Fab')},function(e){e.exports=require('@material-ui/icons/Chat')},function(e){e.exports=require('@material-ui/core/Zoom')},function(e){e.exports=require('lodash/find')},function(e){e.exports=require('lodash/omit')},function(e){e.exports='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNTkyIDE3MjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1OTIgMTcyODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGQkRCMzI7c3Ryb2tlOiNGQURBMzI7fQoJLnN0MXtmaWxsOiNENDczOTQ7fQoJLnN0MntzdHJva2U6I0ZBREEzMjt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE4MTQuMjMsMTMzNmMzMC4yNC00Mi45LDU1LjQ5LTg4LjgsNzUuNDItMTM2LjgyYzM1LjY5LTg1Ljk5LDU0LjM1LTE3OC43NSw1NC4yLTI3My4wOQoJCWMtMC4yOC0zOTMuNTktMzE5LjI0LTcxMi42LTcxMi44My03MTIuOTRjLTE1OS4wNiwwLTMwNS45NCw1Mi4wOS00MjQuNTMsMTQwLjE1QzY2OS40Myw0ODAuNDEsNTgzLjY1LDY2Mi4wNSw1ODMuNjUsODYzLjcyCgkJYzAsMzg0LjM5LDMxMS42MSw2OTUuOTksNjk1Ljk5LDY5NS45OWMxMTAuOTcsMC4wOSwyMjAuMzQtMjYuMzksMzE4Ljk4LTc3LjIyYzQuMjgtMi4yMSw4Ljc5LTMuOTQsMTMuNDYtNS4xN2wyMi4xNS01LjgyCgkJYzE3LjgxLTQuNjgsMzYuNzYtMS42Nyw1Mi4yNCw4LjNsMTEuODgsNy42NWMyMi43NiwxMC4zNCw0Ni45MSwxNy4yOSw3MS42OSwyMC42MmMyMC4yNSwzLjA5LDQwLjU4LDUuNTIsNjAuOTgsNy4zCgkJYzEwLjA4LDAuODgsMjAuMTcsMS42LDMwLjI4LDIuMTdjMjYuMjIsMS4yNyw2MC43MSwwLjE3LDg2LjYxLTIuODVjLTMyLjQtMjIuNy04Ny42Ny03My43My0xMDkuNjEtMTEyLjYybC0xOC4wMi0zNy4zNgoJCUMxODE2LjEsMTM1NS42NSwxODE0LjA2LDEzNDUuODQsMTgxNC4yMywxMzM2eiIvPgoJPHBhdGggZD0iTTExMTUuNDYsNTk1LjQ5YzIuMzMtMjIuNjgtNC42NS00MS4zNi0yNC41Ny01My41NmMtNDIuNDUtMjMuMTUtOTcuMjEsMC42Ny05MS43Nyw1My41NmMwLDI2LjU5LDAsNTMuMTgsMCw3OS43OAoJCWMtNS40NCw1Mi44OSw0OS4zMSw3Ni43MSw5MS43Nyw1My41NmMxOS45Mi0xMi4yLDI2LjkxLTMwLjg4LDI0LjU3LTUzLjU2QzExMTUuNDYsNjQ4LjY3LDExMTUuNDYsNjIyLjA4LDExMTUuNDYsNTk1LjQ5eiIvPgoJPHBhdGggZD0iTTE1NjEuMjUsNTk1LjQ5YzIuMzMtMjIuNjgtNC42NS00MS4zNi0yNC41Ny01My41NmMtNDIuNDUtMjMuMTUtOTcuMjEsMC42Ny05MS43Nyw1My41NmMwLDI2LjU5LDAsNTMuMTgsMCw3OS43OAoJCWMtNS40NCw1Mi44OSw0OS4zMSw3Ni43MSw5MS43Nyw1My41NmMxOS45Mi0xMi4yLDI2LjkxLTMwLjg4LDI0LjU3LTUzLjU2QzE1NjEuMjUsNjQ4LjY3LDE1NjEuMjUsNjIyLjA4LDE1NjEuMjUsNTk1LjQ5eiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTEyMDguOTksOTYzLjE2YzIwLjkzLDEwLjI2LDQ0LjQ2LDE2LjAzLDY5LjM0LDE2LjAzYzI0Ljg4LDAsNDguNDItNS43Niw2OS4zNC0xNi4wMwoJCWMtNy45NS0zMC44OC0zNS45OC01My42OS02OS4zNC01My42OVMxMjE2Ljk0LDkzMi4yOCwxMjA4Ljk5LDk2My4xNnoiLz4KCTxwYXRoIGQ9Ik0xMjA4Ljk5LDk2My4xNmM3Ljk1LTMwLjg4LDM1Ljk4LTUzLjY5LDY5LjM0LTUzLjY5czYxLjM5LDIyLjgxLDY5LjM0LDUzLjY5YzUyLjMxLTI1LjY2LDg4LjMyLTc5LjQ0LDg4LjMzLTE0MS42MwoJCWgtMzE1LjM0QzExMjAuNjcsODgzLjcyLDExNTYuNjgsOTM3LjUsMTIwOC45OSw5NjMuMTZ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTgwNi4zOCw0MDYuNjNjMTA2LjY3LDEyMi4yOSwxNzEuMzIsMjgyLjE5LDE3MS40NCw0NTcuMTljMC4yNCwxNTQuNDUtNTEuMTQsMzA0LjU1LTE0NS45OSw0MjYuNDUKCQljLTYuNyw5LjM5LTExLjMzLDIwLjA5LTEzLjU4LDMxLjRjLTMuNDksMTQuNC0yLDI5LjU2LDQuMjEsNDMuMDJsMTguMDIsMzcuMzZjMjEuOTQsMzguODksNzcuMjEsODkuOTIsMTA5LjYxLDExMi42MgoJCWMtMjUuOSwzLjAyLTYwLjM5LDQuMTItODYuNjEsMi44NWMtMzAuNTUtMS43LTYxLjAxLTQuODYtOTEuMjYtOS40N2MtMjQuNzgtMy4zMy00OC45My0xMC4yOC03MS42OS0yMC42MmwtMTEuODgtNy42NQoJCWMtMTUuNDgtOS45Ni0zNC40NC0xMi45Ny01Mi4yNC04LjNsLTIyLjE1LDUuODJjLTQuNjYsMS4yMi05LjE3LDIuOTYtMTMuNDYsNS4xN2MtOTguNjQsNTAuODMtMjA4LjAyLDc3LjMxLTMxOC45OCw3Ny4yMgoJCWMtMzg0LjM5LDAtNjk1Ljk5LTMxMS42MS02OTUuOTktNjk1Ljk5czMxMS42MS02OTUuOTksNjk1Ljk5LTY5NS45OWM3MC4zNywwLjA2LDEzOC4zLDEwLjU1LDIwMi4zMywzMC4wMgoJCWM1NS4xMyw2LjQxLDUzLjI5LTUzLjcsMjQuNDYtNjEuMzljLTcxLjY0LTIyLjMxLTE0Ny44MS0zNC4zMy0yMjYuNzktMzQuMzNjLTQyMC42NywwLTc2MS42OSwzNDEuMDItNzYxLjY5LDc2MS42OQoJCXMzNDEuMDIsNzYxLjY5LDc2MS42OSw3NjEuNjljMTI1Ljg0LDAsMjQ0LjU0LTMwLjUxLDM0OS4xMy04NC41NWM4LjQzLTIuNjIsMTUuMy00LjYzLDIyLjE1LTUuODJjNC45NywzLjY1LDEwLjIxLDcsMTUuNjcsMTAuMDgKCQljNzEuNDQsNDAuMjYsMzIyLjk0LDYxLjc2LDM4OS42My0wLjQyYzE5LjY4LTEyLjc3LDI1LjAxLTMwLjkzLTE3LjczLTU1LjY3Yy01Ljc4LTMuMzQtMTIuMzktNi43MS0xOS44Ni0xMC4wNwoJCWMtMjcuODYtMTIuNTMtMjkuMDgtMTUuMjEtNTMuMDItMzQuNDljLTI0Ljc1LTE5Ljk0LTQ3LjE2LTQwLjU3LTcyLjI5LTc4LjMzYy00LTguNi04LjQ0LTE4LjItMTMuNDEtMjkuMDIKCQljMC40OS0yLjE0LDEuMDItNC4zMSwxLjU4LTYuNTJjMTAwLjE4LTEyOC45NSwxNTkuODQtMjkwLjk2LDE1OS44NC00NjYuOWMwLTE5Ni44Ni03NC42OC0zNzYuMjgtMTk3LjI2LTUxMS40NwoJCUMxODA5LjA1LDMyMC4yNCwxNzYwLjExLDM2MS45LDE4MDYuMzgsNDA2LjYzeiIvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTE3MTEuNTMsMjM0LjcxYy0xOS4yNC0xMy4xNy0zOS4xMS0yNS40Ny01OS41Ni0zNi44NmMtMzMuOS0xOC44OC01Ni44MSw0My45LTMzLjcsNTYuNwoJCWMxNy42NSw5Ljc4LDM0Ljg0LDIwLjMsNTEuNTEsMzEuNTJDMTcwMy4yOSwzMDguNjMsMTc0Ny43NywyNTkuNTIsMTcxMS41MywyMzQuNzF6Ii8+CjwvZz4KPC9zdmc+Cg=='},function(e){e.exports=require('@material-ui/core/Paper')},function(e){e.exports=require('@material-ui/icons/Fullscreen')},function(e){e.exports=require('@material-ui/icons/FullscreenExit')},function(e){e.exports=require('@material-ui/icons/Info')},function(e){e.exports=require('@material-ui/icons/Close')},function(e){e.exports=require('@material-ui/core/Tooltip')},function(e){e.exports=require('@material-ui/core/DialogTitle')},function(e){e.exports=require('@material-ui/core/Dialog')},function(e){e.exports=require('@material-ui/core/DialogActions')},function(e){e.exports=require('@material-ui/core/DialogContent')},function(e){e.exports=require('@material-ui/core/DialogContentText')},function(e){e.exports=require('lodash/isEqual')},function(e){e.exports=require('lodash/merge')},function(e){e.exports=require('@material-ui/core/colors/green')},function(e){e.exports=require('@material-ui/core/CardMedia')},function(e){e.exports=require('@material-ui/core/CardHeader')},function(e){e.exports=require('@material-ui/core/Table')},function(e){e.exports=require('@material-ui/core/TableBody')},function(e){e.exports=require('@material-ui/core/TableCell')},function(e){e.exports=require('@material-ui/core/TableRow')},function(e){e.exports=require('react-google-maps')},function(e){e.exports='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjRUUzODQwIiBkPSJNMTIgMkM4LjEzIDIgNSA1LjEzIDUgOWMwIDUuMjUgNyAxMyA3IDEzczctNy43NSA3LTEzYzAtMy44Ny0zLjEzLTctNy03em0wIDkuNWMtMS4zOCAwLTIuNS0xLjEyLTIuNS0yLjVzMS4xMi0yLjUgMi41LTIuNSAyLjUgMS4xMiAyLjUgMi41LTEuMTIgMi41LTIuNSAyLjV6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg=='},function(e){e.exports='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9ImIiPjx1c2UgeGxpbms6aHJlZj0iI2EiIG92ZXJmbG93PSJ2aXNpYmxlIi8+PC9jbGlwUGF0aD48cGF0aCBjbGlwLXBhdGg9InVybCgjYikiIGZpbGw9IiMyOTc5RkYiIGQ9Ik0xMiAyQzguMTQgMiA1IDUuMTQgNSA5YzAgNS4yNSA3IDEzIDcgMTNzNy03Ljc1IDctMTNjMC0zLjg2LTMuMTQtNy03LTd6bTAgMmMxLjEgMCAyIC45IDIgMiAwIDEuMTEtLjkgMi0yIDJzLTItLjg5LTItMmMwLTEuMS45LTIgMi0yem0wIDEwYy0xLjY3IDAtMy4xNC0uODUtNC0yLjE1LjAyLTEuMzIgMi42Ny0yLjA1IDQtMi4wNXMzLjk4LjczIDQgMi4wNWMtLjg2IDEuMy0yLjMzIDIuMTUtNCAyLjE1eiIvPjwvc3ZnPg=='},function(e){e.exports=require('@material-ui/core/FormControl')},function(e){e.exports=require('@material-ui/core/FormGroup')},function(e){e.exports=require('@material-ui/core/FormControlLabel')},function(e){e.exports=require('@material-ui/core/Checkbox')},function(e){e.exports=require('lodash/every')},function(e){e.exports=require('@material-ui/icons/Send')},function(e){e.exports=require('@material-ui/core/Grid')}])});
//# sourceMappingURL=chatframe.js.map