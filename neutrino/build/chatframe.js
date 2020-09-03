(function(e,t){'object'==typeof exports&&'object'==typeof module?module.exports=t():'function'==typeof define&&define.amd?define('chatframe',[],t):'object'==typeof exports?exports.chatframe=t():e.chatframe=t()})('undefined'==typeof self?this:self,function(){return function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(a,'a',a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='./',t(t.s=20)}([function(e){e.exports=require('react')},function(e){e.exports=require('styled-components')},function(e){e.exports=require('react-redux')},function(e){e.exports=require('@material-ui/core/colors/grey')},function(e){e.exports=require('date-fns')},function(e){e.exports=require('@material-ui/core/styles')},function(e){e.exports=require('@material-ui/core/Typography')},function(e){e.exports=require('@material-ui/core/Button')},function(e){e.exports=require('@material-ui/core/CardContent')},function(e){e.exports=require('@material-ui/core/Link')},function(e){e.exports=require('@material-ui/core/Card')},function(e){e.exports=require('redux')},function(e){e.exports=require('@material-ui/core/Avatar')},function(e){e.exports=require('lodash/get')},function(e){e.exports=require('lodash/find')},function(e){e.exports=require('uuid/v4')},function(e){e.exports=require('@material-ui/core/IconButton')},function(e){e.exports=require('markdown-to-jsx')},function(e){e.exports=require('@material-ui/core/CardActions')},function(e){e.exports=require('@material-ui/core/TextField')},function(e,t,a){e.exports=a(21)},function(e,t,a){'use strict';function n(e='lightBlue',t='pink',a='lightBlue'){const n={palette:{error:te.red,contrastThreshold:3,tonalOffset:0.2},typography:{useNextVariants:!0},overrides:{MuiFab:{root:{position:'absolute',bottom:48,right:48}}}};if(ie()(e))n.palette.primary={main:e};else if(te[e])n.palette.primary=te[e];else throw new Error(`${e} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);if(ie()(t))n.palette.secondary={main:t};else if(t&&te[t])n.palette.secondary=te[t];else throw new Error(`${t} is not a valid color. 
      Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);if(ie()(a))n.palette.header={main:a};else if(te[a])n.palette.header=te[a];else throw new Error(`${a} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);return Object($.createMuiTheme)(n)}function i(e,t=1){const a=fetch(e).then((e)=>e.json()).catch((a)=>{if(1===t)throw a;setTimeout(()=>{i(e,t-1)},500)});return a}function r(e){return(t)=>{const a=new it(e);t({type:Te,client:a,clientName:'dialogflow'})}}function s(e){return(t,a)=>{const n=a().conversation.messages,i=$e()(e.responses,['type','suggestion']);if(i?t({type:we}):t({type:be}),0===n.length)t({type:Ee,newConversationArray:[e]});else{const a=n.map((t)=>t.loading?e:t).sort((e,t)=>{const a=Object(Me.parse)(e.systemTime,Xe,new Date(e.systemTime)),n=Object(Me.parse)(t.systemTime,Xe,new Date(t.systemTime)),i=Object(Me.differenceInMilliseconds)(a,n);return i});t({type:Ee,newConversationArray:a})}}}function o(e){return(t)=>{function a(e){return'text'===e?'text':'card'===e?'card':'quickReplies'===e?'suggestion':'image'===e?'image':'payload'===e?'payload':'text'}const n=ye()(e,'queryResult.outputContexts',[]);t({type:Ke,rawOutputContexts:n});const i=ye()(e,'queryResult.fulfillmentMessages',[]);let r=[],o=!1;try{r=i.map((e)=>{const n=a(e.message),i=ye()(e,'quickReplies.quickReplies',[]),r=ye()(e,'text.text',null),s={title:ye()(e,'card.title',''),subtitle:ye()(e,'card.subtitle',''),imageUrl:ye()(e,'card.imageUri',''),buttons:ye()(e,'card.buttons',[])},l={imageUri:ye()(e,'image.imageUri',''),accessibilityText:ye()(e,'image.accessibilityText','')},c={};if('payload'===n){const a=ye()(e,'payload.fields',{});for(const e of Object.entries(a)){var d=rt(e,2);const t=d[0],a=d[1];if('stringValue'===a.kind)try{c[t]=JSON.parse(a.stringValue)}catch(e){c[t]=a.stringValue}else if(a.kind&&'stringValue'!==a.kind)throw new Error('Use stringValue to send payloads');else return c}if('disableInput'in c){if(1<Object.keys(c).length){const e=tt()(c,['disableInput']);t({type:Oe,modifiedPayload:e})}o=!0,t({type:Ae})}else t({type:Oe,payload:c})}return'text'===n?{type:n,text:r}:'image'===n?{type:n,image:l}:'suggestion'===n?{type:n,suggestions:i}:'card'===n?{type:n,card:s}:'payload'===n?{type:n,payload:c}:{type:n,text:r}})}catch(e){console.log(e)}let l;o?l=r.filter((e)=>{const t=ye()(e,'payload.disableInput',!1);return!t}):(t({type:Pe}),l=r);const c=Object(Me.format)(new Date,Xe),d={entity:'bot',loading:!1,messageId:e.responseId,messageSession:e.session,language:e.queryResult.languageCode,systemTime:c,responses:l};t(s(d))}}function l(e){return(t,a)=>{const n=a().conversation.client;t({type:xe}),n.textRequest(e).then((e)=>{e?(t(o(e)),t({type:De})):t({type:he,error:'No response received from chat provider. Please try again.'})}).catch((e)=>{throw new Error(e)}).catch((e)=>{console.log(e),t({type:he,error:'Unable to connect to the chat provider. Please try again.'})})}}function c(e){return(t,a)=>{const n=a().conversation.client;t({type:xe}),n.eventRequest(e).then((e)=>{e?(t(o(e)),t({type:De})):(t({type:he,error:'No response received from chat provider. Please try again.'}),t({type:Qe}))}).catch((e)=>{throw new Error(e)}).catch((e)=>{console.log(e),t({type:he,error:'Unable to connect to the chat provider. Please try again.'})})}}function d(e,t){return(a)=>{try{if(!e)throw new Error('No conversation provider selected.');if('dialogflow'===e.toLowerCase())a(r(t));else throw a({type:he,error:`Unable to connect to ${e}`}),new Error(`${e} is not a recognized conversation provider.`)}catch(e){console.log(e)}}}function u(e){return(t,a)=>{const n=a().conversation.clientName;try{if('dialogflow'===n.toLowerCase())t(l(e));else throw new Error(`${n} is not a recognized conversation provider.`)}catch(e){console.log(e),t({type:he,error:`Unable to connect to ${n}`})}}}function p(e){return(t,a)=>{const n=a().conversation.messages.length,i=Object(Me.format)(new Date,Xe),r={entity:'user',messageId:`usermessage-${n}`,systemTime:i,text:e};t({type:je,response:r}),t({type:be}),t(u(e))}}function m(e){return(t)=>{t(p(e))}}function y(){return(e,t)=>{const a=t().conversation.conversationStarted;e({type:Se}),a||(e(c('Welcome')),e({type:Ue}))}}function M(){return{type:ve}}function N(){return{type:ke}}function g(){return{type:ze}}function L(){return(e,t)=>{const a=t().conversation.lastUpdateTime,n=new Date,i=Object(Me.parse)(a,Xe,new Date(a)),r=Object(Me.differenceInMinutes)(n,i),s=Object(Me.differenceInSeconds)(n,i);let o='Now';1<=r?o=`${r} min ago`:9<=s&&(o=`${s} sec ago`);const l=Object(Me.format)(n,Xe);e({type:Ie,headerTime:o,currentTime:l})}}function T(){return(e,t)=>{const a=t().conversation.timer;a&&clearInterval(a);const n=setInterval(()=>e(L()),10000);e({type:Ce,newTimer:n}),e(L())}}function E(e){return(t)=>{const a=e.title,n=e.avatar,i=e.client,r=e.clientOptions,s=e.initialActive,o=e.fullscreen,l=e.policyText,u=e.mapConfig,p=e.activationText,m=e.feedbackUrl;let L=n;if(L||(L=ot.a),t({type:ge,title:a}),t({type:Le,avatar:L}),t(d(i,r)),t(T()),l&&''!==l&&t({type:Ve,policyText:l}),p&&''!==p&&t({type:We,activationText:p}),m&&t({type:Fe,feedbackUrl:m}),u){const e=u.googleMapsKey,a=u.centerCoordinates,n=ye()(a,'lat',null),i=ye()(a,'lng',null);if(e&&''!==e&&t({type:_e,googleMapsKey:e}),a)try{if('object'==typeof a&&null!==n&&null!==i)t({type:Be,centerCoordinates:a});else throw new Error('Please provide valid latitude and longitude coordinates, see README')}catch(e){console.log(e)}}!0===s?(t({type:Ue}),t(c('Welcome')),t(y())):t(M()),!0===o?t(N()):t(g())}}function f(e){return{type:Ge,value:e}}function j(e){return(t)=>{t(u(e))}}function x(e){return{type:Ze,value:e}}function C(e){return{type:Je,value:e}}function I(){return{type:He}}function w(e){return Object(A.createElement)(La,{message:e.text,entity:e.entity,key:e.key,timestamp:e.systemTime,isLoading:!1})}function b(e){return Object(A.createElement)(La,{key:'loading',entity:'bot',timestamp:e.systemTime,isLoading:e.loading})}function h(e,t=!1){return Object(A.createElement)(gn,{feedbackData:e.payload.feedback,session:e.session,entity:e.entity,key:e.key,isLoading:!1,timestamp:e.systemTime,className:t?'scrollIntoView':''})}function D(e,t,a=!1){return Object(A.createElement)(La,{message:e.text,entity:e.entity,key:e.key,isLoading:!1,timestamp:e.systemTime,showTimestamp:t,className:a?'scrollIntoView':''})}function S(e,t=!1){return Object(A.createElement)(Sa,{data:e.card,timestamp:e.systemTime,key:e.key,className:t?'scrollIntoView':''})}function v(e,t=!1){return Object(A.createElement)($a,{data:e.payload.mapPayload,timestamp:e.systemTime,key:e.key,className:t?'scrollIntoView':''})}function k(e){return!(256<e.length)}function z(e){const t={value:e,charLength:e.length||0,maxExceeded:255<e.length};return{type:fe,userInput:t}}function O(){return(e,t)=>{var a=t();const n=a.userInput,i=n.value.trim();if(i&&''!==i){const t=k(n.value);t&&(e(p(n.value)),e(z('')))}}}Object.defineProperty(t,'__esModule',{value:!0});var A=a(0),P=a.n(A),U=a(2),Q=a.n(U),Y=a(11),R=a.n(Y),V=a(1),_=a.n(V),B=a(22),W=a.n(B),G=a(23),F=a.n(G),J=a(24),Z=a.n(J),H=a(25),K=a.n(H),X=a(3),q=a.n(X),$=a(5),ee=a.n($),te=a(26),ae=a.n(te),ne=a(27),ie=a.n(ne),re=a(28),se=a.n(re),oe=a(29),le=a.n(oe),ce=a(30),de=a.n(ce),ue=a(12),pe=a.n(ue),me=a(13),ye=a.n(me),Me=a(4),Ne=a.n(Me);const ge='SET_TITLE',Le='SET_AVATAR',Te='SAVE_CLIENT',Ee='SAVE_RESPONSE',fe='SAVE_USER_INPUT',je='SAVE_USER_RESPONSE',xe='INITIATE_LOADING',Ce='TIMER_START',Ie='UPDATE_CURRENT_TIME',we='SHOW_BUTTON_BAR',be='HIDE_BUTTON_BAR',he='DISPLAY_ERROR',De='CLEAR_ERROR',Se='SHOW_WINDOW',ve='HIDE_WINDOW',ke='FULLSCREEN',ze='WINDOWED',Oe='RECEIVE_WEBHOOK_DATA',Ae='DISABLE_INPUT',Pe='ENABLE_INPUT',Ue='SET_CONVERSATION_STARTED',Qe='SET_CONVERSATION_ENDED',Ye='SHOW_PRIVACY_POLICY',Re='HIDE_PRIVACY_POLICY',Ve='SET_PRIVACY_POLICY',_e='SET_GOOGLE_MAPS_KEY',Be='SET_CENTER_COORDINATES',We='SET_ACTIVATION_TEXT',Ge='SAVE_FEEDBACK_INPUT',Fe='SET_FEEDBACK_URL',Je='SET_FEEDBACK_SUBMITTED',Ze='SET_FEEDBACK_OPTIONS',He='RESET_FEEDBACK_DATA',Ke='SET_OUTPUT_CONTEXTS',Xe='yyyy-MM-dd\'T\'HH:mm:ss.SSS';var qe=a(14),$e=a.n(qe),et=a(31),tt=a.n(et),at=a(15),nt=a.n(at);class it{constructor(e){if(!e||!e.textUrl)throw new Error('Fulfillment URL is required to generate a conversation client');this.textUrl=e.textUrl,this.eventUrl=e.eventUrl,this.uuid=nt()()}encodeQueryData(e){const t=[];for(const a in e)t.push(`${encodeURIComponent(a)}=${encodeURIComponent(e[a])}`);return t.join('&')}textRequest(e){if(!e)throw new Error('Query should not be empty');const t={query:e,uuid:this.uuid},a=this.encodeQueryData(t),n=`${this.textUrl}?${a}`;return i(n,2)}eventRequest(e){if(!e)throw new Error('Query should not be empty');const t={query:e,uuid:this.uuid},a=this.encodeQueryData(t),n=`${this.eventUrl}?${a}`;return fetch(n).then((e)=>e.json()).catch((e)=>{throw new Error(e)})}}var rt=function(){function e(e,t){var a=[],n=!0,i=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(a.push(s.value),!(t&&a.length===t));n=!0);}catch(e){i=!0,r=e}finally{try{!n&&o['return']&&o['return']()}finally{if(i)throw r}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),st=a(32),ot=a.n(st);const lt=_()(se.a)`
  && {
    display: ${(e)=>e.active?'flex':'none'};
    pointer-events: auto;
    width: ${(e)=>e.activationtext?'auto':'56px'};
    height: ${(e)=>e.activationtext?'auto':'56px'};
    padding: ${(e)=>e.activationtext?'4px 6px':'auto'};
    border-radius: ${(e)=>e.activationtext?'20px':'50%'};
  }
`,ct=_.a.div`
  text-transform: none;
  padding-right: 10px;
  color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
`,dt=_()(pe.a)`
  && {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 50% 50% 0px 50%;
  }
`;class ut extends A.PureComponent{render(){var e=this.props;const t=e.title,a=e.windowVisible,n=e.showWindow,i=e.activationText,r=e.theme,s=e.avatar,o=i?Object(A.createElement)(P.a.Fragment,null,Object(A.createElement)(dt,{alt:t,src:s}),Object(A.createElement)(ct,{theme:r},i)):Object(A.createElement)(le.a,null);return Object(A.createElement)(de.a,{in:!a,unmountOnExit:!0},Object(A.createElement)(lt,{color:'primary',onClick:n,active:a?0:1,activationtext:i?1:0},o))}}var pt=Object($.withTheme)()(Object(U.connect)((e)=>({title:e.config.title,windowVisible:e.config.windowVisible,activationText:e.config.activationText,avatar:e.config.avatar}),(e)=>({showWindow:()=>{e(y())}}))(ut)),mt=a(33),yt=a.n(mt),Mt=a(6),Nt=a.n(Mt),gt=a(34),Lt=a.n(gt),Tt=a(35),Et=a.n(Tt),ft=a(36),jt=a.n(ft),xt=a(16),Ct=a.n(xt),It=a(37),wt=a.n(It),bt=a(38),ht=a.n(bt);const Dt=_()(pe.a)`
  && {
    flex: 0 0 32px;
    width: 32px;
    height: 32px;
    margin-right: 16px;
    border-radius: 50% 50% 0px 50%;
  }
`,St=_.a.div`
  position: absolute;
  bottom: -1px;
  left: 27px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid ${q.a[100]};
`,vt=_.a.div`
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
`,kt=_()(Nt.a)`
  && {
    font-family: 'Product Sans';
    font-weight: 400;
    height: 32px;
    font-size: 18px;
    line-height: 32px;
    flex: 1;
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
  }
`,zt=_()(Ct.a)`
  && {
    padding: 6px;
    flex: 0;
    cursor: pointer;
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`;class Ot extends A.PureComponent{render(){var e=this.props;const t=e.title,a=e.theme,n=e.hideWindow,i=e.showWindowed,r=e.showFullscreen,s=e.fullscreen,o=e.avatar,l=e.showPrivacyPolicy;return Object(A.createElement)(vt,{theme:a},Object(A.createElement)(St,null),Object(A.createElement)(Dt,{alt:t,src:o}),Object(A.createElement)(kt,{theme:a,variant:'h6'},t),Object(A.createElement)(ht.a,{title:'Privacy Policy',placement:'bottom'},Object(A.createElement)(zt,{theme:a,onClick:l,"aria-label":'Windowed'},Object(A.createElement)(jt.a,{fontSize:'small'}))),s?Object(A.createElement)(zt,{theme:a,onClick:i,"aria-label":'Windowed'},Object(A.createElement)(Et.a,{fontSize:'small'})):Object(A.createElement)(zt,{theme:a,onClick:r,"aria-label":'Fullscreen'},Object(A.createElement)(Lt.a,{fontSize:'small'})),Object(A.createElement)(zt,{theme:a,onClick:n,"aria-label":'Close'},Object(A.createElement)(wt.a,{fontSize:'small'})))}}var At=Object($.withTheme)()(Object(U.connect)((e)=>({title:e.config.title,fullscreen:e.config.fullscreen,avatar:e.config.avatar}),{hideWindow:M,showFullscreen:N,showWindowed:g,showPrivacyPolicy:function(){return{type:Ye}}})(Ot)),Pt=a(39),Ut=a.n(Pt),Qt=a(40),Yt=a.n(Qt),Rt=a(41),Vt=a.n(Rt),_t=a(42),Bt=a.n(_t),Wt=a(43),Gt=a.n(Wt),Ft=a(7),Jt=a.n(Ft);const Zt=_()(Yt.a)`
  && {
    position: absolute;
  }
`;class Ht extends A.PureComponent{render(){var e=this.props;const t=e.hidePrivacyPolicy,a=e.privacyPolicyVisible,n=e.privacyPolicy,i=e.parentRef;return Object(A.createElement)(Zt,{open:a,onClose:t,"aria-labelledby":'privacy-policy',container:i,scroll:'paper'},Object(A.createElement)(Ut.a,null,'Privacy Statement'),Object(A.createElement)(Bt.a,null,Object(A.createElement)(Gt.a,null,n)),Object(A.createElement)(Vt.a,null,Object(A.createElement)(Jt.a,{onClick:t,color:'primary'},'Close')))}}var Kt=Object(U.connect)((e)=>({privacyPolicyVisible:e.config.privacyPolicyVisible,privacyPolicy:e.config.privacyPolicy}),{hidePrivacyPolicy:function(){return{type:Re}}})(Ht),Xt=a(44),qt=a.n(Xt),$t=a(45),ea=a.n($t),ta=a(46),aa=a.n(ta),na=a(17),ia=a.n(na),ra=a(9),sa=a.n(ra),oa=a(47),la=a.n(oa);const ca=_.a.div`
  text-align: center;
  width: 42px;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`,da=_.a.div`
  animation: dot-keyframes 1s infinite ease-in-out;
  background-color: ${la.a[900]};
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
`;class ua extends A.PureComponent{render(){return Object(A.createElement)(ca,null,Object(A.createElement)(da,null),Object(A.createElement)(da,null),Object(A.createElement)(da,null))}}const pa=_.a.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 15px 16px 15px 16px;
  height: min-content;
  align-items: ${(e)=>'user'===e.entity?'flex-end':'flex-start'};
  scroll-margin: 15px;
`,ma=_.a.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${(e)=>'user'===e.entity?'flex-end':'flex-start'};
`,ya=_.a.div`
  && {
    background: ${q.a[400]};
    border-top-right-radius: 10px;
    border-top-left-radius: 1px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 12px;
  }
`,Ma=_.a.div`
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
`,Na=_()(Nt.a)`
  && {
    color: ${q.a[500]};
    margin-top: 6px;
    padding-left: 5px;
    padding-right: 2px;
  }
`;class ga extends A.PureComponent{render(){var e=this.props;const t=e.message,a=e.entity,n=e.isLoading,i=e.timestamp,r=e.currentTime,s=e.theme,o=e.showTimestamp,l=e.error,c=e.className,d=Object(Me.parse)(i,Xe,new Date(r)),u=Object(Me.isSameDay)(new Date,d),p=Object(Me.isSameDay)(d,Object(Me.subDays)(new Date,1));let m=null;m=u?`Today ${Object(Me.format)(d,'h:mm aa')}`:p?`Yesterday ${Object(Me.format)(d,'h:mm aa')}`:Object(Me.format)(d,'MMMM dd, yyyy h:mm aa');let y;t&&''!==t[0]?y=t:(console.error('Message.js, class Message, render(), this.props: ',this.props),y=['Oops! Something happened with the connection. Please try again.']);let M=Object(A.createElement)(ua,null);n&&l&&(M=l);const N='user'===a?Object(A.createElement)(Ma,{elevation:1,theme:s},t):Object(A.createElement)(ya,{elevation:1},n?M:Object(A.createElement)(ia.a,{options:{forceBlock:!0,overrides:{h6:{component:Nt.a,props:{variant:'h6'}},p:{component:Nt.a,props:{variant:'body1'}},a:{component:sa.a}}}},y[0]));return Object(A.createElement)(pa,{entity:a,className:c},Object(A.createElement)(ma,{entity:a},N),o?Object(A.createElement)(Na,{variant:'caption'},m):null)}}var La=Object($.withTheme)()(Object(U.connect)((e)=>({currentTime:e.conversation.currentTime,error:e.error}))(ga)),Ta=a(10),Ea=a.n(Ta),fa=a(18),ja=a.n(fa),xa=a(8),Ca=a.n(xa),Ia=a(48),wa=a.n(Ia);const ba=_()(Ea.a)`
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
`,ha=_()(wa.a)`
  && {
    height: ${(e)=>e.image&&''!==e.image?'200px':'0px'};
    background-size: cover;
    background-position: center center;
  }
`;class Da extends A.PureComponent{render(){var e=this.props.data;const t=e.title,a=e.subtitle,n=e.imageUrl,i=e.buttons,r=e.className;return Object(A.createElement)(ba,{className:r},n?Object(A.createElement)(ha,{image:encodeURI(n),title:''}):null,Object(A.createElement)(Ca.a,null,Object(A.createElement)(Nt.a,{gutterBottom:!0,variant:'h6'},t),Object(A.createElement)(ia.a,{options:{forceBlock:!0,overrides:{h6:{component:Nt.a,props:{variant:'h6'}},p:{component:Nt.a,props:{variant:'body1'}},a:{component:sa.a}}}},a)),Object(A.createElement)(ja.a,null,i.map((e,t)=>{const a=`card-${t}${Object(Me.format)(new Date,Xe)}`;return Object(A.createElement)(Jt.a,{href:e.postback,target:'_blank',size:'small',color:'primary',key:a},e.text)})))}}var Sa=Object(U.connect)((e)=>({inputValue:e.userInput}))(Da),va=a(49),ka=a.n(va),za=a(50),Oa=a.n(za),Aa=a(51),Pa=a.n(Aa),Ua=a(52),Qa=a.n(Ua),Ya=a(53),Ra=a.n(Ya),Va=a(54),_a=a.n(Va),Ba=a(55),Wa=a.n(Ba),Ga=a(56),Fa=a.n(Ga);const Ja=_()(Ea.a)`
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
`,Za=_.a.div`
  height: 150px;
  font-size: 12px;
  margin-top: 10px;
`,Ha=_()(Ca.a)`
  &&& {
    padding-top: 0;
    padding-bottom: 0;
  }
`,Ka=_()(Pa.a)`
  td {
    padding: 4px 0px 4px 0px;
  }
  tr:last-of-type {
    td {
      border-bottom: none;
    }
  }
`,Xa=_()(Qa.a)`
  && {
    width: 70%;
    padding: 4px 0px 4px 0px;
  }
`,qa=_()(Qa.a)`
  &&& {
    width: 20%;
    padding-right: 0;
    text-align: right;
  }
`;var $a=Object(U.connect)((e)=>({googleMapsKey:e.config.googleMapsKey}))(function(e){const t=e.data,a=e.googleMapsKey,n=e.className,i='230px',r={width:30,height:30},s=`https://maps.googleapis.com/maps/api/js?key=${a}&v=3`,o=(e)=>{const t=`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${e.placeId}`;window.open(t,'_blank')},l=Object(Va.withScriptjs)(Object(Va.withGoogleMap)(()=>Object(A.createElement)(Va.GoogleMap,{defaultZoom:8,defaultCenter:t.nearestLocations[0],defaultOptions:{zoomControl:!0,mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1}},t.locations.map((e,t)=>Object(A.createElement)(Va.Marker,{key:t,position:{lat:e.lat,lng:e.lng},icon:{url:Wa.a,scaledSize:r},onClick:()=>o(e)})),Object(A.createElement)(Va.Marker,{position:{lat:t.currentGeocode.lat,lng:t.currentGeocode.lng},icon:{url:Fa.a,scaledSize:r}}))));return Object(A.createElement)(Ja,{className:n},Object(A.createElement)(ka.a,{title:'Office Locations'}),Object(A.createElement)(Ha,null,Object(A.createElement)(l,{googleMapURL:s,loadingElement:Object(A.createElement)('div',{style:{height:`${i}`}}),containerElement:Object(A.createElement)('div',{style:{height:`${i}`}}),mapElement:Object(A.createElement)('div',{style:{height:'100%'}})}),Object(A.createElement)(Za,null,Object(A.createElement)(Oa.a,{padding:'dense'},Object(A.createElement)(Ka,null,t.nearestLocations.map((e,t)=>Object(A.createElement)(Ra.a,{key:t},Object(A.createElement)(Xa,{padding:'dense'},Object(A.createElement)(Nt.a,null,Object(A.createElement)(sa.a,{href:`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${e.placeId}`,target:'blank'},e.street,', ',e.city))),Object(A.createElement)(qa,{padding:'dense'},e.distance))))))))}),en=a(57),tn=a.n(en),an=a(58),nn=a.n(an),rn=a(59),sn=a.n(rn),on=a(60),ln=a.n(on),cn=a(19),dn=a.n(cn),un=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const pn=_.a.div`
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 15px;
  padding-top: 13px;
`;class mn extends A.PureComponent{constructor(){super(),this.state={feedbackComment:''}}render(){var e=this.props;const t=e.feedbackInputs,a=e.feedbackUrl,n=e.saveFeedbackInput,i=e.setFeedbackSubmitted,r=e.sendFeedback,s=e.session,o=e.outputContexts,l=(e)=>(t)=>{const a={value:e,checked:t.target.checked};n(a)},c=(e)=>e.filter((e)=>e.checked?e.value:null).map((e)=>e.value),d=(e)=>{fetch(a,{method:'POST',body:JSON.stringify(e),headers:{"Content-Type":'application/json'}})};return Object(A.createElement)(P.a.Fragment,null,Object(A.createElement)(Ca.a,null,Object(A.createElement)(Nt.a,{gutterBottom:!0,variant:'h6'},t.wasHelpful?'Why was Gen helpful?':'Why was Gen not helpful?'),Object(A.createElement)(tn.a,{component:'fieldset'},Object(A.createElement)(nn.a,null,t.feedbackList?t.feedbackList.map((e)=>Object(A.createElement)(sn.a,{key:e.value,control:Object(A.createElement)(ln.a,{checked:e.checked,onChange:l(e.value),value:e.value}),label:e.value})):null,Object(A.createElement)(pn,null,'Add your comments'),Object(A.createElement)(dn.a,{placeholder:'Type something',variant:'outlined',multiline:!0,value:this.state.feedbackComment,onChange:(t)=>{const e=t.target.value;this.setState((t)=>un({},t,{feedbackComment:e}))},InputProps:{classes:{inputMultiline:this.props.classes.inputMultiline}}})))),Object(A.createElement)(ja.a,null,Object(A.createElement)(Jt.a,{size:'small',color:'primary',onClick:()=>{const e={wasHelpful:t.wasHelpful,session:s,feedbackList:c(t.feedbackList),comment:this.state.feedbackComment,outputContexts:o};d(e),r('Feedback complete'),i(!0)}},'Submit')))}}var yn=Object($.withStyles)(()=>({root:{},inputMultiline:{fontSize:'0.875rem',overflowY:'hidden'}}))(Object(U.connect)((e)=>({feedbackInputs:e.feedbackInput,feedbackUrl:e.config.feedbackUrl,outputContexts:e.conversation.outputContexts}),(e)=>({saveFeedbackInput:(t)=>{e(f(t))},setFeedbackSubmitted:()=>{e(C(!0))},sendFeedback:(t)=>{e(j(t))}}))(mn));const Mn=_()(Ea.a)`
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
`;class Nn extends A.PureComponent{componentDidMount(){var e=this.props;const t=e.setFeedbackOptions,a=e.feedbackData;t(a)}componentWillUnmount(){const e=this.props.resetFeedbackData;e()}render(){var e=this.props;const t=e.session,a=e.feedbackInputs,n=e.className;return Object(A.createElement)(Mn,{className:n},a.submitted?Object(A.createElement)(Ca.a,null,'Thank you. Your feedback is important to us and will help improve Gen.'):Object(A.createElement)(yn,{session:t}))}}var gn=Object(U.connect)((e)=>({feedbackInputs:e.feedbackInput}),(e)=>({setFeedbackOptions:(t)=>{e(x(t))},resetFeedbackData:()=>e(I())}))(Nn);const Ln={giant:1170,desktop:992,tablet:768,phone:620},Tn=Object.keys(Ln).reduce((e,t)=>{const a=Ln[t]/16;return e[t]=(...e)=>V.css`
    @media (max-width: ${a}em) {
      ${Object(V.css)(...e)};
    }
  `,e},{});var En=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const fn=_.a.div`
  display: flex;
  flex-direction: column;
  /* Vertically flips the container element to achieve flex-direction:column-reverse effect */
  transform: scale(1, -1);
  overflow: auto;
  ${Tn.tablet`
    flex-direction: column-reverse;
    overflow: auto;
    transform: none;
  `};
`,jn=_.a.div`
  background: ${q.a[100]};
  z-index: 4;
  grid-area: chatwindow;
  margin-bottom: 1px;
  margin-top: 8px;

  /* Vertically flips the content element so that the messages won't be upside down */
  transform: scale(1, -1);

  ${Tn.tablet`
   transform: none;
  `};
`;class xn extends A.PureComponent{constructor(e){super(e),Object.defineProperty(this,'findIndexFirstElementInLastResponse',{enumerable:!0,writable:!0,value:(e)=>{let t=0,a=!1;return Object(ta.forEachRight)(e,(e,n)=>{'bot'===e.entity?!a&&(t=n):a=!0}),t}}),Object.defineProperty(this,'parseMessages',{enumerable:!0,writable:!0,value:()=>{const e=this.props.messages,t=[];return e.forEach((e)=>{const a={systemTime:e.systemTime,entity:e.entity,session:e.messageSession};if(e.loading){const n=nt()();a.key=n;const i=ea()(e,a);t.push(i)}else if('bot'===e.entity)e.responses.forEach((e)=>{if('text'===e.type||'card'===e.type||'payload'===e.type){const n=nt()();a.key=n;const i=ea()(e,a);t.push(i)}});else if('user'===e.entity){const n=nt()();a.key=n;const i=ea()(e,a);t.push(i)}}),t}}),Object.defineProperty(this,'createMessageElements',{enumerable:!0,writable:!0,value:()=>{const e=this.parseMessages(),t=[];let a=e;1<e.length&&(a=Object(ta.sortBy)(e,(e)=>new Date(e.systemTime)));const n=this.findIndexFirstElementInLastResponse(a);a.forEach((e,r)=>{const i=r===n;let s=!1;r===a.length-1&&(s=!0),e.loading?t.push(b(e)):'user'===e.entity?t.push(w(e)):'bot'===e.entity&&'text'===e.type?t.push(D(e,s,i)):'bot'===e.entity&&'card'===e.type?t.push(S(e,i)):'bot'===e.entity&&'payload'===e.type&&e.payload.mapPayload?t.push(v(e,i)):'bot'===e.entity&&'payload'===e.type&&e.payload.feedback?t.push(h(e,i)):(console.error('ChatWindow.js, createMessageElements(): sortedNewMessages, msg, i',a,e,r),t.push(D({text:['Something went wrong.']})))}),this.setState((e)=>En({},e,{messageElements:t}),()=>{document.getElementsByClassName('scrollIntoView')[0]&&document.getElementsByClassName('scrollIntoView')[0].scrollIntoView(!1)})}}),Object.defineProperty(this,'handleWheel',{enumerable:!0,writable:!0,value:(t)=>{t.deltaY&&(t.preventDefault(),t.currentTarget.scrollTop-=2*(parseFloat(getComputedStyle(t.currentTarget).getPropertyValue('font-size'))*(0>t.deltaY?-1:1)))}}),Object.defineProperty(this,'componentRef',{enumerable:!0,writable:!0,value:P.a.createRef(null)}),this.messages=[],this.state={messageElements:[]},this.componentRef=P.a.createRef()}componentDidUpdate(){const e=this.parseMessages();qt()(this.messages,e)||(this.messages=e,this.createMessageElements()),this.componentRef.current&&this.componentRef.current.addEventListener('wheel',this.handleWheel)}render(){const e=this.state.messageElements;return Object(A.createElement)(fn,{ref:this.componentRef},Object(A.createElement)(jn,{elevation:1,square:!0},e))}}var Cn=Object(U.connect)((e)=>({messages:e.conversation.messages,buttonBarVisible:e.buttonBar.visible,error:e.error}))(xn),In=a(61),wn=a.n(In);const bn=_.a.div`
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
`,hn=_()(dn.a)`
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
`,Dn=_()(Ct.a)`
  && {
    padding: 16px 12px 16px 4px;
    &:hover {
      background: transparent;
    }
  }
`;class Sn extends A.PureComponent{constructor(){super(),this.handleKeyPress=this.handleKeyPress.bind(this)}handleKeyPress(t){13===t.charCode&&(this.props.submitUserInput(),t.preventDefault())}render(){var e=this.props;const t=e.saveUserInput,a=e.inputValue,n=e.shouldDisable,i=a.value,r=`${a.charLength}/255`,s=a.maxExceeded;let o=null;return o=s?`Exceeded character limit: ${r}`:null,Object(A.createElement)(bn,{visible:n},Object(A.createElement)(hn,{multiline:!0,rowsMax:'4',fullWidth:!0,InputProps:{disableUnderline:!0},placeholder:'Send a message',helperText:o,FormHelperTextProps:{style:{color:'#cd5c5c',margin:0}},onChange:t,value:i,onKeyPress:this.handleKeyPress}),Object(A.createElement)(Dn,{onClick:this.props.submitUserInput,"aria-label":'Send',color:'primary',disabled:s,disableRipple:!0},Object(A.createElement)(wn.a,null)))}}var vn=Object(U.connect)((e)=>({inputValue:e.userInput,shouldDisable:e.conversation.disableInput}),(t)=>({saveUserInput:(a)=>{t(z(a.target.value))},submitUserInput:()=>{t(O())}}))(Sn),kn=a(62),zn=a.n(kn);const On=_.a.div`
  grid-area: buttonbar;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  padding: ${(e)=>e.visible?'4px 4px 16px 16px':'0 16px'};
  background: ${q.a[300]};
  border-top: ${(e)=>e.visible?'1px solid rgba(0, 0, 0, 0.2)':'none'};
  overflow-y: auto;
`,An=_()(Jt.a)`
  && {
    margin-right: 12px;
    margin-top: 12px;
    display: ${(e)=>'true'===e.visible?'block':'none'};
  }
`;class Pn extends A.PureComponent{render(){var e=this.props;const t=e.visible,a=e.messages,n=e.sendQuickReply,i=zn()(a,(e)=>{const t=$e()(e.responses,['type','suggestion']);return t}),r=[];if(i){const e=i.responses.filter((e)=>'suggestion'===e.type);for(const a of e)for(const e of a.suggestions)r.push({label:e,id:i.messageId,visible:t})}return Object(A.createElement)(On,{visible:t},r.map((e,t)=>Object(A.createElement)(An,{size:'small',variant:'outlined',color:'secondary',key:`${e.id}-btn${t}`,visible:e.visible.toString(),onClick:()=>n(e.label)},e.label)))}}var Un=Object(U.connect)((e)=>({visible:e.buttonBar.visible,messages:e.conversation.messages}),(e)=>({sendQuickReply:(t)=>{e(m(t))}}))(Pn);const Qn=_()(yt.a)`
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
    ${(e)=>e.fullscreen&&V.css`
        width: calc(100% - 96px);
        height: calc(100% - 96px);
      `};
    ${(e)=>!e.visible&&V.css`
        width: 0;
        height: 0;
      `};

    ${Tn.phone`
    width: ${(e)=>e.visible?'calc(100% - 20px)':'0'};
    height: ${(e)=>e.visible?'calc(100% - 96px)':'0'};
    right: 10px;
    max-width: none;
    max-height: none;
  `};
  }
`,Yn=_.a.div`
  && {
    width: 100%;
    height: 100%;
    transform-origin: bottom right;
    pointer-events: auto;
    background: ${q.a[100]};
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
`;class Rn extends A.PureComponent{constructor(e){super(e),this.containerRef=P.a.createRef()}render(){var e=this.props;const t=e.windowVisible,a=e.fullscreen;return Object(A.createElement)(Qn,{elevation:4,fullscreen:a?1:0,visible:t?1:0},Object(A.createElement)(Yn,{ref:this.containerRef,className:'mui-fixed'},Object(A.createElement)(At,null),Object(A.createElement)(Kt,{parentRef:this.containerRef.current}),Object(A.createElement)(Cn,null),Object(A.createElement)(Un,null),Object(A.createElement)(vn,null)))}}var Vn=Object(U.connect)((e)=>({windowVisible:e.config.windowVisible,fullscreen:e.config.fullscreen}))(Rn),_n=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Bn={avatar:null,title:'Chat Window',windowVisible:!1,fullscreen:!1,privacyPolicyVisible:!1,googleMapsKey:'',centerCoordinates:'',activationText:'',privacyPolicy:'Please do not enter any personally identifiable information such as SSN, Date of Birth, Case Number or last name.',feedbackUrl:''};var Wn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Gn={client:null,clientName:null,messages:[],webhookPayload:null,disableInput:!1,lastUpdateTime:Object(Me.format)(new Date,Xe),currentTime:Object(Me.format)(new Date,Xe),headerTime:'Now',timer:null,conversationStarted:!1};var Fn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Jn={visible:!1,buttons:[]};const Zn={value:'',charLength:0,maxExceeded:!1};var Hn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Kn={submitted:!1,wasHelpful:null,feedbackList:null};const Xn='';const qn=Object(Y.combineReducers)({config:function(e=Bn,t){switch(t.type){case Re:return _n({},e,{privacyPolicyVisible:!1});case Ye:return _n({},e,{privacyPolicyVisible:!0});case Ve:return _n({},e,{privacyPolicy:t.policyText});case _e:return _n({},e,{googleMapsKey:t.googleMapsKey});case Be:return _n({},e,{centerCoordinates:t.centerCoordinates});case We:return _n({},e,{activationText:t.activationText});case Le:return _n({},e,{avatar:t.avatar});case ge:return _n({},e,{title:t.title});case Se:return _n({},e,{windowVisible:!0});case ve:return _n({},e,{windowVisible:!1});case ke:return _n({},e,{fullscreen:!0});case ze:return _n({},e,{fullscreen:!1});case Fe:return _n({},e,{feedbackUrl:t.feedbackUrl});default:return e;}},conversation:function(e=Gn,t){switch(t.type){case Te:return Wn({},e,{client:t.client,clientName:t.clientName});case Ie:return Wn({},e,{headerTime:t.headerTime,currentTime:t.currentTime});case Ce:return Wn({},e,{timer:t.timer});case xe:return Wn({},e,{messages:[...e.messages,{loading:!0,entity:'bot',systemTime:Object(Me.format)(new Date,Xe)}]});case Ee:return Wn({},e,{lastUpdateTime:Object(Me.format)(new Date,Xe),headerTime:'Now',messages:t.newConversationArray});case je:return Wn({},e,{lastUpdateTime:Object(Me.format)(new Date,Xe),headerTime:'Now',messages:[...e.messages,t.response].sort((e,t)=>{const a=Object(Me.parse)(e.systemTime,Xe,new Date(e.systemTime)),n=Object(Me.parse)(t.systemTime,Xe,new Date(t.systemTime)),i=Object(Me.differenceInMilliseconds)(n,a);return i})});case Oe:return Wn({},e,{webhookPayload:t.payload});case Pe:return Wn({},e,{disableInput:!1});case Ae:return Wn({},e,{disableInput:!0});case Ue:return Wn({},e,{conversationStarted:!0});case Qe:return Wn({},e,{conversationStarted:!1});case Ke:return Wn({},e,{outputContexts:t.rawOutputContexts});default:return e;}},buttonBar:function(e=Jn,t){switch(t.type){case we:return Fn({},e,{visible:!0});case be:return Fn({},e,{visible:!1});default:return e;}},userInput:function(e=Zn,t){switch(t.type){case fe:return t.userInput;default:return e;}},feedbackInput:function(e=Kn,t){switch(t.type){case Ge:return Hn({},e,{feedbackList:e.feedbackList.map((e)=>e.value===t.value.value?Hn({},e,{checked:t.value.checked}):e)});case Ze:return Hn({},e,{wasHelpful:t.value.helpful,feedbackList:t.value.options.map((e)=>Hn({},e,{checked:!1}))});case Je:return Hn({},e,{submitted:!0});case He:return Hn({},e,{submitted:!1,wasHelpful:null,feedbackList:null});default:return e;}},error:function(e=Xn,t){switch(t.type){case he:return t.error;case De:return Xn;default:return e;}}});W.a.load({google:{families:['Roboto:300,400,500','Product Sans:400']}});const $n=_.a.div`
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
      background-color: ${q.a[600]};
      -webkit-border-radius: 8px;
      border-radius: 8px;
      border: 2px solid ${q.a[100]};
    }
    & ::-webkit-scrollbar {
      background-color: ${q.a[100]};
      width: 8px;
    }
  }
`,ei=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.compose;class ti extends A.PureComponent{constructor(e){super(e),this.store=Object(Y.createStore)(qn,ei(Object(Y.applyMiddleware)(Z.a))),this.currentValue=null,this.theme=n(this.props.primaryColor,this.props.secondaryColor,this.props.headerColor)}componentDidMount(){this.store.dispatch(E(this.props,this.theme)),this.unsubscribe=this.store.subscribe(()=>this.handleChange(this.store))}componentWillUnmount(){this.unsubscribe()}select(e){return e.conversation.webhookPayload}handleChange(e){const t=this.currentValue;this.currentValue=this.select(e.getState()),t!==this.currentValue&&this.props.onPayload&&this.props.onPayload(this.currentValue)}render(){return Object(A.createElement)(U.Provider,{store:this.store},Object(A.createElement)(F.a,{theme:this.theme},Object(A.createElement)($n,null,Object(A.createElement)(Vn,null),Object(A.createElement)(pt,null))))}}t['default']=ti},function(e){e.exports=require('webfontloader')},function(e){e.exports=require('@material-ui/core/styles/MuiThemeProvider')},function(e){e.exports=require('redux-thunk')},function(e){e.exports=require('whatwg-fetch')},function(e){e.exports=require('@material-ui/core/colors')},function(e){e.exports=require('validator/lib/isHexColor')},function(e){e.exports=require('@material-ui/core/Fab')},function(e){e.exports=require('@material-ui/icons/Chat')},function(e){e.exports=require('@material-ui/core/Zoom')},function(e){e.exports=require('lodash/omit')},function(e){e.exports='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTkyIDE3MjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1OTIgMTcyODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZCREIzMjtzdHJva2U6I0ZBREEzMjt9DQoJLnN0MXtmaWxsOiNENDczOTQ7fQ0KCS5zdDJ7c3Ryb2tlOiNGQURBMzI7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xODE0LjIzLDEzMzZjMzAuMjQtNDIuOSw1NS40OS04OC44LDc1LjQyLTEzNi44MmMzNS42OS04NS45OSw1NC4zNS0xNzguNzUsNTQuMi0yNzMuMDkNCgkJYy0wLjI4LTM5My41OS0zMTkuMjQtNzEyLjYtNzEyLjgzLTcxMi45NGMtMTU5LjA2LDAtMzA1Ljk0LDUyLjA5LTQyNC41MywxNDAuMTVDNjY5LjQzLDQ4MC40MSw1ODMuNjUsNjYyLjA1LDU4My42NSw4NjMuNzINCgkJYzAsMzg0LjM5LDMxMS42MSw2OTUuOTksNjk1Ljk5LDY5NS45OWMxMTAuOTcsMC4wOSwyMjAuMzQtMjYuMzksMzE4Ljk4LTc3LjIyYzQuMjgtMi4yMSw4Ljc5LTMuOTQsMTMuNDYtNS4xN2wyMi4xNS01LjgyDQoJCWMxNy44MS00LjY4LDM2Ljc2LTEuNjcsNTIuMjQsOC4zbDExLjg4LDcuNjVjMjIuNzYsMTAuMzQsNDYuOTEsMTcuMjksNzEuNjksMjAuNjJjMjAuMjUsMy4wOSw0MC41OCw1LjUyLDYwLjk4LDcuMw0KCQljMTAuMDgsMC44OCwyMC4xNywxLjYsMzAuMjgsMi4xN2MyNi4yMiwxLjI3LDYwLjcxLDAuMTcsODYuNjEtMi44NWMtMzIuNC0yMi43LTg3LjY3LTczLjczLTEwOS42MS0xMTIuNjJsLTE4LjAyLTM3LjM2DQoJCUMxODE2LjEsMTM1NS42NSwxODE0LjA2LDEzNDUuODQsMTgxNC4yMywxMzM2eiIvPg0KCTxwYXRoIGQ9Ik0xMTE1LjQ2LDU5NS40OWMyLjMzLTIyLjY4LTQuNjUtNDEuMzYtMjQuNTctNTMuNTZjLTQyLjQ1LTIzLjE1LTk3LjIxLDAuNjctOTEuNzcsNTMuNTZjMCwyNi41OSwwLDUzLjE4LDAsNzkuNzgNCgkJYy01LjQ0LDUyLjg5LDQ5LjMxLDc2LjcxLDkxLjc3LDUzLjU2YzE5LjkyLTEyLjIsMjYuOTEtMzAuODgsMjQuNTctNTMuNTZDMTExNS40Niw2NDguNjcsMTExNS40Niw2MjIuMDgsMTExNS40Niw1OTUuNDl6Ii8+DQoJPHBhdGggZD0iTTE1NjEuMjUsNTk1LjQ5YzIuMzMtMjIuNjgtNC42NS00MS4zNi0yNC41Ny01My41NmMtNDIuNDUtMjMuMTUtOTcuMjEsMC42Ny05MS43Nyw1My41NmMwLDI2LjU5LDAsNTMuMTgsMCw3OS43OA0KCQljLTUuNDQsNTIuODksNDkuMzEsNzYuNzEsOTEuNzcsNTMuNTZjMTkuOTItMTIuMiwyNi45MS0zMC44OCwyNC41Ny01My41NkMxNTYxLjI1LDY0OC42NywxNTYxLjI1LDYyMi4wOCwxNTYxLjI1LDU5NS40OXoiLz4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTIwOC45OSw5NjMuMTZjMjAuOTMsMTAuMjYsNDQuNDYsMTYuMDMsNjkuMzQsMTYuMDNjMjQuODgsMCw0OC40Mi01Ljc2LDY5LjM0LTE2LjAzDQoJCWMtNy45NS0zMC44OC0zNS45OC01My42OS02OS4zNC01My42OVMxMjE2Ljk0LDkzMi4yOCwxMjA4Ljk5LDk2My4xNnoiLz4NCgk8cGF0aCBkPSJNMTIwOC45OSw5NjMuMTZjNy45NS0zMC44OCwzNS45OC01My42OSw2OS4zNC01My42OXM2MS4zOSwyMi44MSw2OS4zNCw1My42OWM1Mi4zMS0yNS42Niw4OC4zMi03OS40NCw4OC4zMy0xNDEuNjMNCgkJaC0zMTUuMzRDMTEyMC42Nyw4ODMuNzIsMTE1Ni42OCw5MzcuNSwxMjA4Ljk5LDk2My4xNnoiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTgwNi4zOCw0MDYuNjNjMTA2LjY3LDEyMi4yOSwxNzEuMzIsMjgyLjE5LDE3MS40NCw0NTcuMTljMC4yNCwxNTQuNDUtNTEuMTQsMzA0LjU1LTE0NS45OSw0MjYuNDUNCgkJYy02LjcsOS4zOS0xMS4zMywyMC4wOS0xMy41OCwzMS40Yy0zLjQ5LDE0LjQtMiwyOS41Niw0LjIxLDQzLjAybDE4LjAyLDM3LjM2YzIxLjk0LDM4Ljg5LDc3LjIxLDg5LjkyLDEwOS42MSwxMTIuNjINCgkJYy0yNS45LDMuMDItNjAuMzksNC4xMi04Ni42MSwyLjg1Yy0zMC41NS0xLjctNjEuMDEtNC44Ni05MS4yNi05LjQ3Yy0yNC43OC0zLjMzLTQ4LjkzLTEwLjI4LTcxLjY5LTIwLjYybC0xMS44OC03LjY1DQoJCWMtMTUuNDgtOS45Ni0zNC40NC0xMi45Ny01Mi4yNC04LjNsLTIyLjE1LDUuODJjLTQuNjYsMS4yMi05LjE3LDIuOTYtMTMuNDYsNS4xN2MtOTguNjQsNTAuODMtMjA4LjAyLDc3LjMxLTMxOC45OCw3Ny4yMg0KCQljLTM4NC4zOSwwLTY5NS45OS0zMTEuNjEtNjk1Ljk5LTY5NS45OXMzMTEuNjEtNjk1Ljk5LDY5NS45OS02OTUuOTljNzAuMzcsMC4wNiwxMzguMywxMC41NSwyMDIuMzMsMzAuMDINCgkJYzU1LjEzLDYuNDEsNTMuMjktNTMuNywyNC40Ni02MS4zOWMtNzEuNjQtMjIuMzEtMTQ3LjgxLTM0LjMzLTIyNi43OS0zNC4zM2MtNDIwLjY3LDAtNzYxLjY5LDM0MS4wMi03NjEuNjksNzYxLjY5DQoJCXMzNDEuMDIsNzYxLjY5LDc2MS42OSw3NjEuNjljMTI1Ljg0LDAsMjQ0LjU0LTMwLjUxLDM0OS4xMy04NC41NWM4LjQzLTIuNjIsMTUuMy00LjYzLDIyLjE1LTUuODJjNC45NywzLjY1LDEwLjIxLDcsMTUuNjcsMTAuMDgNCgkJYzcxLjQ0LDQwLjI2LDMyMi45NCw2MS43NiwzODkuNjMtMC40MmMxOS42OC0xMi43NywyNS4wMS0zMC45My0xNy43My01NS42N2MtNS43OC0zLjM0LTEyLjM5LTYuNzEtMTkuODYtMTAuMDcNCgkJYy0yNy44Ni0xMi41My0yOS4wOC0xNS4yMS01My4wMi0zNC40OWMtMjQuNzUtMTkuOTQtNDcuMTYtNDAuNTctNzIuMjktNzguMzNjLTQtOC42LTguNDQtMTguMi0xMy40MS0yOS4wMg0KCQljMC40OS0yLjE0LDEuMDItNC4zMSwxLjU4LTYuNTJjMTAwLjE4LTEyOC45NSwxNTkuODQtMjkwLjk2LDE1OS44NC00NjYuOWMwLTE5Ni44Ni03NC42OC0zNzYuMjgtMTk3LjI2LTUxMS40Nw0KCQlDMTgwOS4wNSwzMjAuMjQsMTc2MC4xMSwzNjEuOSwxODA2LjM4LDQwNi42M3oiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTcxMS41MywyMzQuNzFjLTE5LjI0LTEzLjE3LTM5LjExLTI1LjQ3LTU5LjU2LTM2Ljg2Yy0zMy45LTE4Ljg4LTU2LjgxLDQzLjktMzMuNyw1Ni43DQoJCWMxNy42NSw5Ljc4LDM0Ljg0LDIwLjMsNTEuNTEsMzEuNTJDMTcwMy4yOSwzMDguNjMsMTc0Ny43NywyNTkuNTIsMTcxMS41MywyMzQuNzF6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=='},function(e){e.exports=require('@material-ui/core/Paper')},function(e){e.exports=require('@material-ui/icons/Fullscreen')},function(e){e.exports=require('@material-ui/icons/FullscreenExit')},function(e){e.exports=require('@material-ui/icons/Info')},function(e){e.exports=require('@material-ui/icons/Close')},function(e){e.exports=require('@material-ui/core/Tooltip')},function(e){e.exports=require('@material-ui/core/DialogTitle')},function(e){e.exports=require('@material-ui/core/Dialog')},function(e){e.exports=require('@material-ui/core/DialogActions')},function(e){e.exports=require('@material-ui/core/DialogContent')},function(e){e.exports=require('@material-ui/core/DialogContentText')},function(e){e.exports=require('lodash/isEqual')},function(e){e.exports=require('lodash/merge')},function(e){e.exports=require('lodash')},function(e){e.exports=require('@material-ui/core/colors/green')},function(e){e.exports=require('@material-ui/core/CardMedia')},function(e){e.exports=require('@material-ui/core/CardHeader')},function(e){e.exports=require('@material-ui/core/Table')},function(e){e.exports=require('@material-ui/core/TableBody')},function(e){e.exports=require('@material-ui/core/TableCell')},function(e){e.exports=require('@material-ui/core/TableRow')},function(e){e.exports=require('react-google-maps')},function(e){e.exports='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjRUUzODQwIiBkPSJNMTIgMkM4LjEzIDIgNSA1LjEzIDUgOWMwIDUuMjUgNyAxMyA3IDEzczctNy43NSA3LTEzYzAtMy44Ny0zLjEzLTctNy03em0wIDkuNWMtMS4zOCAwLTIuNS0xLjEyLTIuNS0yLjVzMS4xMi0yLjUgMi41LTIuNSAyLjUgMS4xMiAyLjUgMi41LTEuMTIgMi41LTIuNSAyLjV6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg=='},function(e){e.exports='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9ImIiPjx1c2UgeGxpbms6aHJlZj0iI2EiIG92ZXJmbG93PSJ2aXNpYmxlIi8+PC9jbGlwUGF0aD48cGF0aCBjbGlwLXBhdGg9InVybCgjYikiIGZpbGw9IiMyOTc5RkYiIGQ9Ik0xMiAyQzguMTQgMiA1IDUuMTQgNSA5YzAgNS4yNSA3IDEzIDcgMTNzNy03Ljc1IDctMTNjMC0zLjg2LTMuMTQtNy03LTd6bTAgMmMxLjEgMCAyIC45IDIgMiAwIDEuMTEtLjkgMi0yIDJzLTItLjg5LTItMmMwLTEuMS45LTIgMi0yem0wIDEwYy0xLjY3IDAtMy4xNC0uODUtNC0yLjE1LjAyLTEuMzIgMi42Ny0yLjA1IDQtMi4wNXMzLjk4LjczIDQgMi4wNWMtLjg2IDEuMy0yLjMzIDIuMTUtNCAyLjE1eiIvPjwvc3ZnPg=='},function(e){e.exports=require('@material-ui/core/FormControl')},function(e){e.exports=require('@material-ui/core/FormGroup')},function(e){e.exports=require('@material-ui/core/FormControlLabel')},function(e){e.exports=require('@material-ui/core/Checkbox')},function(e){e.exports=require('@material-ui/icons/Send')},function(e){e.exports=require('lodash/findLast')}])});
//# sourceMappingURL=chatframe.js.map