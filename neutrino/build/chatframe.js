(function(e,t){'object'==typeof exports&&'object'==typeof module?module.exports=t():'function'==typeof define&&define.amd?define('chatframe',[],t):'object'==typeof exports?exports.chatframe=t():e.chatframe=t()})('undefined'==typeof self?this:self,function(){return function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(a,'a',a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='./',t(t.s=20)}([function(e){e.exports=require('react')},function(e){e.exports=require('styled-components')},function(e){e.exports=require('react-redux')},function(e){e.exports=require('@material-ui/core/colors/grey')},function(e){e.exports=require('date-fns')},function(e){e.exports=require('@material-ui/core/styles')},function(e){e.exports=require('@material-ui/core/Typography')},function(e){e.exports=require('@material-ui/core/Button')},function(e){e.exports=require('@material-ui/core/CardContent')},function(e){e.exports=require('@material-ui/core/Link')},function(e){e.exports=require('@material-ui/core/Card')},function(e){e.exports=require('redux')},function(e){e.exports=require('@material-ui/core/Avatar')},function(e){e.exports=require('lodash/get')},function(e){e.exports=require('lodash/find')},function(e){e.exports=require('uuid/v4')},function(e){e.exports=require('@material-ui/core/IconButton')},function(e){e.exports=require('markdown-to-jsx')},function(e){e.exports=require('@material-ui/core/CardActions')},function(e){e.exports=require('@material-ui/core/TextField')},function(e,t,a){e.exports=a(21)},function(e,t,a){'use strict';function n(e='lightBlue',t='pink',a='lightBlue'){const n={palette:{error:ee.red,contrastThreshold:3,tonalOffset:0.2},typography:{useNextVariants:!0},overrides:{MuiFab:{root:{position:'absolute',bottom:48,right:48}}}};if(ne()(e))n.palette.primary={main:e};else if(ee[e])n.palette.primary=ee[e];else throw new Error(`${e} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);if(ne()(t))n.palette.secondary={main:t};else if(t&&ee[t])n.palette.secondary=ee[t];else throw new Error(`${t} is not a valid color. 
      Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);if(ne()(a))n.palette.header={main:a};else if(ee[a])n.palette.header=ee[a];else throw new Error(`${a} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);return Object(q.createMuiTheme)(n)}function i(e,t=1){const a=fetch(e).then((e)=>e.json()).catch((a)=>{if(1===t)throw a;setTimeout(()=>{i(e,t-1)},500)});return a}function r(e){return(t)=>{const a=new at(e);t({type:Le,client:a,clientName:'dialogflow'})}}function o(e){return(t,a)=>{const n=a().conversation.messages,i=Xe()(e.responses,['type','suggestion']);if(i?t({type:Ie}):t({type:we}),0===n.length)t({type:Te,newConversationArray:[e]});else{const a=n.map((t)=>t.loading?e:t).sort((e,t)=>{const a=Object(ye.parse)(e.systemTime,He,new Date(e.systemTime)),n=Object(ye.parse)(t.systemTime,He,new Date(t.systemTime)),i=Object(ye.differenceInMilliseconds)(a,n);return i});t({type:Te,newConversationArray:a})}}}function s(e){return(t)=>{function a(e){return'text'===e?'text':'card'===e?'card':'quickReplies'===e?'suggestion':'image'===e?'image':'payload'===e?'payload':'text'}const n=me()(e,'queryResult.outputContexts',[]);t({type:Ze,rawOutputContexts:n});const i=me()(e,'queryResult.fulfillmentMessages',[]);let r=[],s=!1;try{r=i.map((e)=>{const n=a(e.message),i=me()(e,'quickReplies.quickReplies',[]),r=me()(e,'text.text',null),o={title:me()(e,'card.title',''),subtitle:me()(e,'card.subtitle',''),imageUrl:me()(e,'card.imageUri',''),buttons:me()(e,'card.buttons',[])},l={imageUri:me()(e,'image.imageUri',''),accessibilityText:me()(e,'image.accessibilityText','')},c={};if('payload'===n){const a=me()(e,'payload.fields',{});for(const e of Object.entries(a)){var d=nt(e,2);const t=d[0],a=d[1];if('stringValue'===a.kind)try{c[t]=JSON.parse(a.stringValue)}catch(e){c[t]=a.stringValue}else if(a.kind&&'stringValue'!==a.kind)throw new Error('Use stringValue to send payloads');else return c}if('disableInput'in c){if(1<Object.keys(c).length){const e=$e()(c,['disableInput']);t({type:ke,modifiedPayload:e})}s=!0,t({type:Oe})}else t({type:ke,payload:c})}return'text'===n?{type:n,text:r}:'image'===n?{type:n,image:l}:'suggestion'===n?{type:n,suggestions:i}:'card'===n?{type:n,card:o}:'payload'===n?{type:n,payload:c}:{type:n,text:r}})}catch(e){console.log(e)}let l;s?l=r.filter((e)=>{const t=me()(e,'payload.disableInput',!1);return!t}):(t({type:Ae}),l=r);const c=Object(ye.format)(new Date,He),d={entity:'bot',loading:!1,messageId:e.responseId,messageSession:e.session,language:e.queryResult.languageCode,systemTime:c,responses:l};t(o(d))}}function l(e){return(t,a)=>{const n=a().conversation.client;t({type:je}),n.textRequest(e).then((e)=>{e?(t(s(e)),t({type:be})):t({type:he,error:'No response received from chat provider. Please try again.'})}).catch((e)=>{throw new Error(e)}).catch((e)=>{console.log(e),t({type:he,error:'Unable to connect to the chat provider. Please try again.'})})}}function c(e){return(t,a)=>{const n=a().conversation.client;t({type:je}),n.eventRequest(e).then((e)=>{e?(t(s(e)),t({type:be})):(t({type:he,error:'No response received from chat provider. Please try again.'}),t({type:Ue}))}).catch((e)=>{throw new Error(e)}).catch((e)=>{console.log(e),t({type:he,error:'Unable to connect to the chat provider. Please try again.'})})}}function d(e,t){return(a)=>{try{if(!e)throw new Error('No conversation provider selected.');if('dialogflow'===e.toLowerCase())a(r(t));else throw a({type:he,error:`Unable to connect to ${e}`}),new Error(`${e} is not a recognized conversation provider.`)}catch(e){console.log(e)}}}function u(e){return(t,a)=>{const n=a().conversation.clientName;try{if('dialogflow'===n.toLowerCase())t(l(e));else throw new Error(`${n} is not a recognized conversation provider.`)}catch(e){console.log(e),t({type:he,error:`Unable to connect to ${n}`})}}}function p(e){return(t,a)=>{const n=a().conversation.messages.length,i=Object(ye.format)(new Date,He),r={entity:'user',messageId:`usermessage-${n}`,systemTime:i,text:e};t({type:fe,response:r}),t({type:we}),t(u(e))}}function m(e){return(t)=>{t(p(e))}}function y(){return(e,t)=>{const a=t().conversation.conversationStarted;e({type:De}),a||(e(c('Welcome')),e({type:Pe}))}}function M(){return{type:Se}}function N(){return{type:ve}}function g(){return{type:ze}}function L(){return(e,t)=>{const a=t().conversation.lastUpdateTime,n=new Date,i=Object(ye.parse)(a,He,new Date(a)),r=Object(ye.differenceInMinutes)(n,i),o=Object(ye.differenceInSeconds)(n,i);let s='Now';1<=r?s=`${r} min ago`:9<=o&&(s=`${o} sec ago`);const l=Object(ye.format)(n,He);e({type:Ce,headerTime:s,currentTime:l})}}function T(){return(e,t)=>{const a=t().conversation.timer;a&&clearInterval(a);const n=setInterval(()=>e(L()),10000);e({type:xe,newTimer:n}),e(L())}}function E(e){return(t)=>{const a=e.title,n=e.avatar,i=e.client,r=e.clientOptions,o=e.initialActive,s=e.fullscreen,l=e.policyText,u=e.mapConfig,p=e.activationText,m=e.feedbackUrl;let L=n;if(L||(L=rt.a),t({type:Ne,title:a}),t({type:ge,avatar:L}),t(d(i,r)),t(T()),l&&''!==l&&t({type:Re,policyText:l}),p&&''!==p&&t({type:Be,activationText:p}),m&&t({type:Ge,feedbackUrl:m}),u){const e=u.googleMapsKey,a=u.centerCoordinates,n=me()(a,'lat',null),i=me()(a,'lng',null);if(e&&''!==e&&t({type:Ve,googleMapsKey:e}),a)try{if('object'==typeof a&&null!==n&&null!==i)t({type:_e,centerCoordinates:a});else throw new Error('Please provide valid latitude and longitude coordinates, see README')}catch(e){console.log(e)}}!0===o?(t({type:Pe}),t(c('Welcome')),t(y())):t(M()),!0===s?t(N()):t(g())}}function f(e){return{type:We,value:e}}function j(e){return(t)=>{t(u(e))}}function x(e){return{type:Je,value:e}}function C(e){return{type:Fe,value:e}}function I(e){return Object(O.createElement)(Na,{message:e.text,entity:e.entity,key:e.key,timestamp:e.systemTime,isLoading:!1})}function w(e){return Object(O.createElement)(Na,{key:'loading',entity:'bot',timestamp:e.systemTime,isLoading:e.loading})}function h(e,t=!1){return Object(O.createElement)(Mn,{feedbackData:e.payload.feedback,session:e.session,entity:e.entity,key:e.key,isLoading:!1,timestamp:e.systemTime,className:t?'scrollIntoView':''})}function b(e,t,a=!1){return Object(O.createElement)(Na,{message:e.text,entity:e.entity,key:e.key,isLoading:!1,timestamp:e.systemTime,showTimestamp:t,className:a?'scrollIntoView':''})}function D(e,t=!1){return Object(O.createElement)(ba,{data:e.card,timestamp:e.systemTime,key:e.key,className:t?'scrollIntoView':''})}function S(e,t=!1){return Object(O.createElement)(Xa,{data:e.payload.mapPayload,timestamp:e.systemTime,key:e.key,className:t?'scrollIntoView':''})}function v(e){return!(256<e.length)}function z(e){const t={value:e,charLength:e.length||0,maxExceeded:255<e.length};return{type:Ee,userInput:t}}function k(){return(e,t)=>{var a=t();const n=a.userInput,i=n.value.trim();if(i&&''!==i){const t=v(n.value);t&&(e(p(n.value)),e(z('')))}}}Object.defineProperty(t,'__esModule',{value:!0});var O=a(0),A=a.n(O),P=a(2),U=a.n(P),Q=a(11),Y=a.n(Q),R=a(1),V=a.n(R),_=a(22),B=a.n(_),W=a(23),G=a.n(W),F=a(24),J=a.n(F),Z=a(25),H=a.n(Z),K=a(3),X=a.n(K),q=a(5),$=a.n(q),ee=a(26),te=a.n(ee),ae=a(27),ne=a.n(ae),ie=a(28),re=a.n(ie),oe=a(29),se=a.n(oe),le=a(30),ce=a.n(le),de=a(12),ue=a.n(de),pe=a(13),me=a.n(pe),ye=a(4),Me=a.n(ye);const Ne='SET_TITLE',ge='SET_AVATAR',Le='SAVE_CLIENT',Te='SAVE_RESPONSE',Ee='SAVE_USER_INPUT',fe='SAVE_USER_RESPONSE',je='INITIATE_LOADING',xe='TIMER_START',Ce='UPDATE_CURRENT_TIME',Ie='SHOW_BUTTON_BAR',we='HIDE_BUTTON_BAR',he='DISPLAY_ERROR',be='CLEAR_ERROR',De='SHOW_WINDOW',Se='HIDE_WINDOW',ve='FULLSCREEN',ze='WINDOWED',ke='RECEIVE_WEBHOOK_DATA',Oe='DISABLE_INPUT',Ae='ENABLE_INPUT',Pe='SET_CONVERSATION_STARTED',Ue='SET_CONVERSATION_ENDED',Qe='SHOW_PRIVACY_POLICY',Ye='HIDE_PRIVACY_POLICY',Re='SET_PRIVACY_POLICY',Ve='SET_GOOGLE_MAPS_KEY',_e='SET_CENTER_COORDINATES',Be='SET_ACTIVATION_TEXT',We='SAVE_FEEDBACK_INPUT',Ge='SET_FEEDBACK_URL',Fe='SET_FEEDBACK_SUBMITTED',Je='SET_FEEDBACK_OPTIONS',Ze='SET_OUTPUT_CONTEXTS',He='yyyy-MM-dd\'T\'HH:mm:ss.SSS';var Ke=a(14),Xe=a.n(Ke),qe=a(31),$e=a.n(qe),et=a(15),tt=a.n(et);class at{constructor(e){if(!e||!e.textUrl)throw new Error('Fulfillment URL is required to generate a conversation client');this.textUrl=e.textUrl,this.eventUrl=e.eventUrl,this.uuid=tt()()}encodeQueryData(e){const t=[];for(const a in e)t.push(`${encodeURIComponent(a)}=${encodeURIComponent(e[a])}`);return t.join('&')}textRequest(e){if(!e)throw new Error('Query should not be empty');const t={query:e,uuid:this.uuid},a=this.encodeQueryData(t),n=`${this.textUrl}?${a}`;return i(n,2)}eventRequest(e){if(!e)throw new Error('Query should not be empty');const t={query:e,uuid:this.uuid},a=this.encodeQueryData(t),n=`${this.eventUrl}?${a}`;return fetch(n).then((e)=>e.json()).catch((e)=>{throw new Error(e)})}}var nt=function(){function e(e,t){var a=[],n=!0,i=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(a.push(o.value),!(t&&a.length===t));n=!0);}catch(e){i=!0,r=e}finally{try{!n&&s['return']&&s['return']()}finally{if(i)throw r}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),it=a(32),rt=a.n(it);const ot=V()(re.a)`
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
`;class ct extends O.PureComponent{render(){var e=this.props;const t=e.title,a=e.windowVisible,n=e.showWindow,i=e.activationText,r=e.theme,o=e.avatar,s=i?Object(O.createElement)(A.a.Fragment,null,Object(O.createElement)(lt,{alt:t,src:o}),Object(O.createElement)(st,{theme:r},i)):Object(O.createElement)(se.a,null);return Object(O.createElement)(ce.a,{in:!a,unmountOnExit:!0},Object(O.createElement)(ot,{color:'primary',onClick:n,active:a?0:1,activationtext:i?1:0},s))}}var dt=Object(q.withTheme)()(Object(P.connect)((e)=>({title:e.config.title,windowVisible:e.config.windowVisible,activationText:e.config.activationText,avatar:e.config.avatar}),(e)=>({showWindow:()=>{e(y())}}))(ct)),ut=a(33),pt=a.n(ut),mt=a(6),yt=a.n(mt),Mt=a(34),Nt=a.n(Mt),gt=a(35),Lt=a.n(gt),Tt=a(36),Et=a.n(Tt),ft=a(16),jt=a.n(ft),xt=a(37),Ct=a.n(xt),It=a(38),wt=a.n(It);const ht=V()(ue.a)`
  && {
    flex: 0 0 32px;
    width: 32px;
    height: 32px;
    margin-right: 16px;
    border-radius: 50% 50% 0px 50%;
  }
`,bt=V.a.div`
  position: absolute;
  bottom: -1px;
  left: 27px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid ${X.a[100]};
`,Dt=V.a.div`
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
`,St=V()(yt.a)`
  && {
    font-family: 'Product Sans';
    font-weight: 400;
    height: 32px;
    font-size: 18px;
    line-height: 32px;
    flex: 1;
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
  }
`,vt=V()(jt.a)`
  && {
    padding: 6px;
    flex: 0;
    cursor: pointer;
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`;class zt extends O.PureComponent{render(){var e=this.props;const t=e.title,a=e.theme,n=e.hideWindow,i=e.showWindowed,r=e.showFullscreen,o=e.fullscreen,s=e.avatar,l=e.showPrivacyPolicy;return Object(O.createElement)(Dt,{theme:a},Object(O.createElement)(bt,null),Object(O.createElement)(ht,{alt:t,src:s}),Object(O.createElement)(St,{theme:a,variant:'h6'},t),Object(O.createElement)(wt.a,{title:'Privacy Policy',placement:'bottom'},Object(O.createElement)(vt,{theme:a,onClick:l,"aria-label":'Windowed'},Object(O.createElement)(Et.a,{fontSize:'small'}))),o?Object(O.createElement)(vt,{theme:a,onClick:i,"aria-label":'Windowed'},Object(O.createElement)(Lt.a,{fontSize:'small'})):Object(O.createElement)(vt,{theme:a,onClick:r,"aria-label":'Fullscreen'},Object(O.createElement)(Nt.a,{fontSize:'small'})),Object(O.createElement)(vt,{theme:a,onClick:n,"aria-label":'Close'},Object(O.createElement)(Ct.a,{fontSize:'small'})))}}var kt=Object(q.withTheme)()(Object(P.connect)((e)=>({title:e.config.title,fullscreen:e.config.fullscreen,avatar:e.config.avatar}),{hideWindow:M,showFullscreen:N,showWindowed:g,showPrivacyPolicy:function(){return{type:Qe}}})(zt)),Ot=a(39),At=a.n(Ot),Pt=a(40),Ut=a.n(Pt),Qt=a(41),Yt=a.n(Qt),Rt=a(42),Vt=a.n(Rt),_t=a(43),Bt=a.n(_t),Wt=a(7),Gt=a.n(Wt);const Ft=V()(Ut.a)`
  && {
    position: absolute;
  }
`;class Jt extends O.PureComponent{render(){var e=this.props;const t=e.hidePrivacyPolicy,a=e.privacyPolicyVisible,n=e.privacyPolicy,i=e.parentRef;return Object(O.createElement)(Ft,{open:a,onClose:t,"aria-labelledby":'privacy-policy',container:i,scroll:'paper'},Object(O.createElement)(At.a,null,'Privacy Statement'),Object(O.createElement)(Vt.a,null,Object(O.createElement)(Bt.a,null,n)),Object(O.createElement)(Yt.a,null,Object(O.createElement)(Gt.a,{onClick:t,color:'primary'},'Close')))}}var Zt=Object(P.connect)((e)=>({privacyPolicyVisible:e.config.privacyPolicyVisible,privacyPolicy:e.config.privacyPolicy}),{hidePrivacyPolicy:function(){return{type:Ye}}})(Jt),Ht=a(44),Kt=a.n(Ht),Xt=a(45),qt=a.n(Xt),$t=a(46),ea=a.n($t),ta=a(17),aa=a.n(ta),na=a(9),ia=a.n(na),ra=a(47),oa=a.n(ra);const sa=V.a.div`
  text-align: center;
  width: 42px;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`,la=V.a.div`
  animation: dot-keyframes 1s infinite ease-in-out;
  background-color: ${oa.a[900]};
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
  margin: 15px 16px 15px 16px;
  height: min-content;
  align-items: ${(e)=>'user'===e.entity?'flex-end':'flex-start'};
  scroll-margin: 15px;
`,ua=V.a.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${(e)=>'user'===e.entity?'flex-end':'flex-start'};
`,pa=V.a.div`
  && {
    background: ${X.a[400]};
    border-top-right-radius: 10px;
    border-top-left-radius: 1px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 12px;
  }
`,ma=V.a.div`
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
`,ya=V()(yt.a)`
  && {
    color: ${X.a[500]};
    margin-top: 6px;
    padding-left: 5px;
    padding-right: 2px;
  }
`;class Ma extends O.PureComponent{render(){var e=this.props;const t=e.message,a=e.entity,n=e.isLoading,i=e.timestamp,r=e.currentTime,o=e.theme,s=e.showTimestamp,l=e.error,c=e.className,d=Object(ye.parse)(i,He,new Date(r)),u=Object(ye.isSameDay)(new Date,d),p=Object(ye.isSameDay)(d,Object(ye.subDays)(new Date,1));let m=null;m=u?`Today ${Object(ye.format)(d,'h:mm aa')}`:p?`Yesterday ${Object(ye.format)(d,'h:mm aa')}`:Object(ye.format)(d,'MMMM dd, yyyy h:mm aa');let y;t&&''!==t[0]?y=t:(console.error('Message.js, class Message, render(), this.props: ',this.props),y=['Oops! Something happened with the connection. Please try again.']);let M=Object(O.createElement)(ca,null);n&&l&&(M=l);const N='user'===a?Object(O.createElement)(ma,{elevation:1,theme:o},t):Object(O.createElement)(pa,{elevation:1},n?M:Object(O.createElement)(aa.a,{options:{forceBlock:!0,overrides:{h6:{component:yt.a,props:{variant:'h6'}},p:{component:yt.a,props:{variant:'body1'}},a:{component:ia.a}}}},y[0]));return Object(O.createElement)(da,{entity:a,className:c},Object(O.createElement)(ua,{entity:a},N),s?Object(O.createElement)(ya,{variant:'caption'},m):null)}}var Na=Object(q.withTheme)()(Object(P.connect)((e)=>({currentTime:e.conversation.currentTime,error:e.error}))(Ma)),ga=a(10),La=a.n(ga),Ta=a(18),Ea=a.n(Ta),fa=a(8),ja=a.n(fa),xa=a(48),Ca=a.n(xa);const Ia=V()(La.a)`
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
`,wa=V()(Ca.a)`
  && {
    height: ${(e)=>e.image&&''!==e.image?'200px':'0px'};
    background-size: cover;
    background-position: center center;
  }
`;class ha extends O.PureComponent{render(){var e=this.props.data;const t=e.title,a=e.subtitle,n=e.imageUrl,i=e.buttons,r=e.className;return Object(O.createElement)(Ia,{className:r},n?Object(O.createElement)(wa,{image:encodeURI(n),title:''}):null,Object(O.createElement)(ja.a,null,Object(O.createElement)(yt.a,{gutterBottom:!0,variant:'h6'},t),Object(O.createElement)(aa.a,{options:{forceBlock:!0,overrides:{h6:{component:yt.a,props:{variant:'h6'}},p:{component:yt.a,props:{variant:'body1'}},a:{component:ia.a}}}},a)),Object(O.createElement)(Ea.a,null,i.map((e,t)=>{const a=`card-${t}${Object(ye.format)(new Date,He)}`;return Object(O.createElement)(Gt.a,{href:e.postback,target:'_blank',size:'small',color:'primary',key:a},e.text)})))}}var ba=Object(P.connect)((e)=>({inputValue:e.userInput}))(ha),Da=a(49),Sa=a.n(Da),va=a(50),za=a.n(va),ka=a(51),Oa=a.n(ka),Aa=a(52),Pa=a.n(Aa),Ua=a(53),Qa=a.n(Ua),Ya=a(54),Ra=a.n(Ya),Va=a(55),_a=a.n(Va),Ba=a(56),Wa=a.n(Ba);const Ga=V()(La.a)`
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
`,Fa=V.a.div`
  height: 150px;
  font-size: 12px;
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
`,Ha=V()(Pa.a)`
  && {
    width: 70%;
    padding: 4px 0px 4px 0px;
  }
`,Ka=V()(Pa.a)`
  &&& {
    width: 20%;
    padding-right: 0;
    text-align: right;
  }
`;var Xa=Object(P.connect)((e)=>({googleMapsKey:e.config.googleMapsKey}))(function(e){const t=e.data,a=e.googleMapsKey,n=e.className,i='230px',r={width:30,height:30},o=`https://maps.googleapis.com/maps/api/js?key=${a}&v=3`,s=(e)=>{const t=`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${e.placeId}`;window.open(t,'_blank')},l=Object(Ya.withScriptjs)(Object(Ya.withGoogleMap)(()=>Object(O.createElement)(Ya.GoogleMap,{defaultZoom:8,defaultCenter:t.nearestLocations[0],defaultOptions:{zoomControl:!0,mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1}},t.locations.map((e,t)=>Object(O.createElement)(Ya.Marker,{key:t,position:{lat:e.lat,lng:e.lng},icon:{url:_a.a,scaledSize:r},onClick:()=>s(e)})),Object(O.createElement)(Ya.Marker,{position:{lat:t.currentGeocode.lat,lng:t.currentGeocode.lng},icon:{url:Wa.a,scaledSize:r}}))));return Object(O.createElement)(Ga,{className:n},Object(O.createElement)(Sa.a,{title:'Office Locations'}),Object(O.createElement)(Ja,null,Object(O.createElement)(l,{googleMapURL:o,loadingElement:Object(O.createElement)('div',{style:{height:`${i}`}}),containerElement:Object(O.createElement)('div',{style:{height:`${i}`}}),mapElement:Object(O.createElement)('div',{style:{height:'100%'}})}),Object(O.createElement)(Fa,null,Object(O.createElement)(za.a,{padding:'dense'},Object(O.createElement)(Za,null,t.nearestLocations.map((e,t)=>Object(O.createElement)(Qa.a,{key:t},Object(O.createElement)(Ha,{padding:'dense'},Object(O.createElement)(yt.a,null,Object(O.createElement)(ia.a,{href:`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${e.placeId}`,target:'blank'},e.street,', ',e.city))),Object(O.createElement)(Ka,{padding:'dense'},e.distance))))))))}),qa=a(57),$a=a.n(qa),en=a(58),tn=a.n(en),an=a(59),nn=a.n(an),rn=a(60),on=a.n(rn),sn=a(19),ln=a.n(sn),cn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const dn=V.a.div`
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 15px;
  padding-top: 13px;
`;class un extends O.PureComponent{constructor(){super(),this.state={feedbackComment:''}}render(){var e=this.props;const t=e.feedbackInputs,a=e.feedbackUrl,n=e.saveFeedbackInput,i=e.setFeedbackSubmitted,r=e.sendFeedback,o=e.session,s=e.outputContexts,l=(e)=>(t)=>{const a={value:e,checked:t.target.checked};n(a)},c=(e)=>e.filter((e)=>e.checked?e.value:null).map((e)=>e.value),d=(e)=>{fetch(a,{method:'POST',body:JSON.stringify(e),headers:{"Content-Type":'application/json'}})};return Object(O.createElement)(A.a.Fragment,null,Object(O.createElement)(ja.a,null,Object(O.createElement)(yt.a,{gutterBottom:!0,variant:'h6'},t.wasHelpful?'Why was Gen helpful?':'Why was Gen not helpful?'),Object(O.createElement)($a.a,{component:'fieldset'},Object(O.createElement)(tn.a,null,t.feedbackList?t.feedbackList.map((e)=>Object(O.createElement)(nn.a,{key:e.value,control:Object(O.createElement)(on.a,{checked:e.checked,onChange:l(e.value),value:e.value}),label:e.value})):null,Object(O.createElement)(dn,null,'Add your comments'),Object(O.createElement)(ln.a,{placeholder:'Type something',variant:'outlined',multiline:!0,value:this.state.feedbackComment,onChange:(t)=>{const e=t.target.value;this.setState((t)=>cn({},t,{feedbackComment:e}))},InputProps:{classes:{inputMultiline:this.props.classes.inputMultiline}}})))),Object(O.createElement)(Ea.a,null,Object(O.createElement)(Gt.a,{size:'small',color:'primary',onClick:()=>{const e={wasHelpful:t.wasHelpful,session:o,feedbackList:c(t.feedbackList),comment:this.state.feedbackComment,outputContexts:s};d(e),r('Feedback complete'),i(!0)}},'Submit')))}}var pn=Object(q.withStyles)(()=>({root:{},inputMultiline:{fontSize:'0.875rem',overflowY:'hidden'}}))(Object(P.connect)((e)=>({feedbackInputs:e.feedbackInput,feedbackUrl:e.config.feedbackUrl,outputContexts:e.conversation.outputContexts}),(e)=>({saveFeedbackInput:(t)=>{e(f(t))},setFeedbackSubmitted:()=>{e(C(!0))},sendFeedback:(t)=>{e(j(t))}}))(un));const mn=V()(La.a)`
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
`;class yn extends O.PureComponent{componentDidMount(){var e=this.props;const t=e.setFeedbackOptions,a=e.feedbackData;t(a)}render(){var e=this.props;const t=e.session,a=e.feedbackInputs,n=e.className;return Object(O.createElement)(mn,{className:n},a.submitted?Object(O.createElement)(ja.a,null,'Thank you. Your feedback is important to us and will help improve Gen.'):Object(O.createElement)(pn,{session:t}))}}var Mn=Object(P.connect)((e)=>({feedbackInputs:e.feedbackInput}),(e)=>({setFeedbackOptions:(t)=>{e(x(t))}}))(yn);const Nn={giant:1170,desktop:992,tablet:768,phone:620},gn=Object.keys(Nn).reduce((e,t)=>{const a=Nn[t]/16;return e[t]=(...e)=>R.css`
    @media (max-width: ${a}em) {
      ${Object(R.css)(...e)};
    }
  `,e},{});var Ln=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Tn=V.a.div`
  display: flex;
  flex-direction: column;
  /* Vertically flips the container element to achieve flex-direction:column-reverse effect */
  transform: scale(1, -1);
  overflow: auto;
  ${gn.tablet`
    flex-direction: column-reverse;
    overflow: auto;
    transform: none;
  `};
`,En=V.a.div`
  background: ${X.a[100]};
  z-index: 4;
  grid-area: chatwindow;
  margin-bottom: 1px;
  margin-top: 8px;

  /* Vertically flips the content element so that the messages won't be upside down */
  transform: scale(1, -1);

  ${gn.tablet`
   transform: none;
  `};
`;class fn extends O.PureComponent{constructor(e){super(e),Object.defineProperty(this,'findIndexFirstElementInLastResponse',{enumerable:!0,writable:!0,value:(e)=>{let t=0,a=!1;return Object($t.forEachRight)(e,(e,n)=>{'bot'===e.entity?!a&&(t=n):a=!0}),t}}),Object.defineProperty(this,'parseMessages',{enumerable:!0,writable:!0,value:()=>{const e=this.props.messages,t=[];return e.forEach((e)=>{const a={systemTime:e.systemTime,entity:e.entity,session:e.messageSession};if(e.loading){const n=tt()();a.key=n;const i=qt()(e,a);t.push(i)}else if('bot'===e.entity)e.responses.forEach((e)=>{if('text'===e.type||'card'===e.type||'payload'===e.type){const n=tt()();a.key=n;const i=qt()(e,a);t.push(i)}});else if('user'===e.entity){const n=tt()();a.key=n;const i=qt()(e,a);t.push(i)}}),t}}),Object.defineProperty(this,'createMessageElements',{enumerable:!0,writable:!0,value:()=>{const e=this.parseMessages(),t=[];let a=e;1<e.length&&(a=Object($t.sortBy)(e,(e)=>new Date(e.systemTime)));const n=this.findIndexFirstElementInLastResponse(a);a.forEach((e,r)=>{const i=r===n;let o=!1;r===a.length-1&&(o=!0),e.loading?t.push(w(e)):'user'===e.entity?t.push(I(e)):'bot'===e.entity&&'text'===e.type?t.push(b(e,o,i)):'bot'===e.entity&&'card'===e.type?t.push(D(e,i)):'bot'===e.entity&&'payload'===e.type&&e.payload.mapPayload?t.push(S(e,i)):'bot'===e.entity&&'payload'===e.type&&e.payload.feedback?t.push(h(e,i)):(console.error('ChatWindow.js, createMessageElements(): sortedNewMessages, msg, i',a,e,r),t.push(b({text:['Something went wrong.']})))}),this.setState((e)=>Ln({},e,{messageElements:t}),()=>{document.getElementsByClassName('scrollIntoView')[0]&&document.getElementsByClassName('scrollIntoView')[0].scrollIntoView(!1)})}}),Object.defineProperty(this,'handleWheel',{enumerable:!0,writable:!0,value:(t)=>{t.deltaY&&(t.preventDefault(),t.currentTarget.scrollTop-=2*(parseFloat(getComputedStyle(t.currentTarget).getPropertyValue('font-size'))*(0>t.deltaY?-1:1)))}}),Object.defineProperty(this,'componentRef',{enumerable:!0,writable:!0,value:A.a.createRef(null)}),this.messages=[],this.state={messageElements:[]},this.componentRef=A.a.createRef()}componentDidUpdate(){const e=this.parseMessages();Kt()(this.messages,e)||(this.messages=e,this.createMessageElements()),this.componentRef.current&&this.componentRef.current.addEventListener('wheel',this.handleWheel)}render(){const e=this.state.messageElements;return Object(O.createElement)(Tn,{ref:this.componentRef},Object(O.createElement)(En,{elevation:1,square:!0},e))}}var jn=Object(P.connect)((e)=>({messages:e.conversation.messages,buttonBarVisible:e.buttonBar.visible,error:e.error}))(fn),xn=a(61),Cn=a.n(xn);const In=V.a.div`
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
`,wn=V()(ln.a)`
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
`,hn=V()(jt.a)`
  && {
    padding: 16px 12px 16px 4px;
    &:hover {
      background: transparent;
    }
  }
`;class bn extends O.PureComponent{constructor(){super(),this.handleKeyPress=this.handleKeyPress.bind(this)}handleKeyPress(t){13===t.charCode&&(this.props.submitUserInput(),t.preventDefault())}render(){var e=this.props;const t=e.saveUserInput,a=e.inputValue,n=e.shouldDisable,i=a.value,r=`${a.charLength}/255`,o=a.maxExceeded;let s=null;return s=o?`Exceeded character limit: ${r}`:null,Object(O.createElement)(In,{visible:n},Object(O.createElement)(wn,{multiline:!0,rowsMax:'4',fullWidth:!0,InputProps:{disableUnderline:!0},placeholder:'Send a message',helperText:s,FormHelperTextProps:{style:{color:'#cd5c5c',margin:0}},onChange:t,value:i,onKeyPress:this.handleKeyPress}),Object(O.createElement)(hn,{onClick:this.props.submitUserInput,"aria-label":'Send',color:'primary',disabled:o,disableRipple:!0},Object(O.createElement)(Cn.a,null)))}}var Dn=Object(P.connect)((e)=>({inputValue:e.userInput,shouldDisable:e.conversation.disableInput}),(t)=>({saveUserInput:(a)=>{t(z(a.target.value))},submitUserInput:()=>{t(k())}}))(bn),Sn=a(62),vn=a.n(Sn);const zn=V.a.div`
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
`,kn=V()(Gt.a)`
  && {
    margin-right: 12px;
    margin-top: 12px;
    display: ${(e)=>'true'===e.visible?'block':'none'};
  }
`;class On extends O.PureComponent{render(){var e=this.props;const t=e.visible,a=e.messages,n=e.sendQuickReply,i=vn()(a,(e)=>{const t=Xe()(e.responses,['type','suggestion']);return t}),r=[];if(i){const e=i.responses.filter((e)=>'suggestion'===e.type);for(const a of e)for(const e of a.suggestions)r.push({label:e,id:i.messageId,visible:t})}return Object(O.createElement)(zn,{visible:t},r.map((e,t)=>Object(O.createElement)(kn,{size:'small',variant:'outlined',color:'secondary',key:`${e.id}-btn${t}`,visible:e.visible.toString(),onClick:()=>n(e.label)},e.label)))}}var An=Object(P.connect)((e)=>({visible:e.buttonBar.visible,messages:e.conversation.messages}),(e)=>({sendQuickReply:(t)=>{e(m(t))}}))(On);const Pn=V()(pt.a)`
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

    ${gn.phone`
    width: ${(e)=>e.visible?'calc(100% - 20px)':'0'};
    height: ${(e)=>e.visible?'calc(100% - 96px)':'0'};
    right: 10px;
    max-width: none;
    max-height: none;
  `};
  }
`,Un=V.a.div`
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
`;class Qn extends O.PureComponent{constructor(e){super(e),this.containerRef=A.a.createRef()}render(){var e=this.props;const t=e.windowVisible,a=e.fullscreen;return Object(O.createElement)(Pn,{elevation:4,fullscreen:a?1:0,visible:t?1:0},Object(O.createElement)(Un,{ref:this.containerRef,className:'mui-fixed'},Object(O.createElement)(kt,null),Object(O.createElement)(Zt,{parentRef:this.containerRef.current}),Object(O.createElement)(jn,null),Object(O.createElement)(An,null),Object(O.createElement)(Dn,null)))}}var Yn=Object(P.connect)((e)=>({windowVisible:e.config.windowVisible,fullscreen:e.config.fullscreen}))(Qn),Rn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Vn={avatar:null,title:'Chat Window',windowVisible:!1,fullscreen:!1,privacyPolicyVisible:!1,googleMapsKey:'',centerCoordinates:'',activationText:'',privacyPolicy:'Please do not enter any personally identifiable information such as SSN, Date of Birth, Case Number or last name.',feedbackUrl:''};var _n=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Bn={client:null,clientName:null,messages:[],webhookPayload:null,disableInput:!1,lastUpdateTime:Object(ye.format)(new Date,He),currentTime:Object(ye.format)(new Date,He),headerTime:'Now',timer:null,conversationStarted:!1};var Wn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Gn={visible:!1,buttons:[]};const Fn={value:'',charLength:0,maxExceeded:!1};var Jn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Zn={submitted:!1,wasHelpful:null,feedbackList:null};const Hn='';const Kn=Object(Q.combineReducers)({config:function(e=Vn,t){switch(t.type){case Ye:return Rn({},e,{privacyPolicyVisible:!1});case Qe:return Rn({},e,{privacyPolicyVisible:!0});case Re:return Rn({},e,{privacyPolicy:t.policyText});case Ve:return Rn({},e,{googleMapsKey:t.googleMapsKey});case _e:return Rn({},e,{centerCoordinates:t.centerCoordinates});case Be:return Rn({},e,{activationText:t.activationText});case ge:return Rn({},e,{avatar:t.avatar});case Ne:return Rn({},e,{title:t.title});case De:return Rn({},e,{windowVisible:!0});case Se:return Rn({},e,{windowVisible:!1});case ve:return Rn({},e,{fullscreen:!0});case ze:return Rn({},e,{fullscreen:!1});case Ge:return Rn({},e,{feedbackUrl:t.feedbackUrl});default:return e;}},conversation:function(e=Bn,t){switch(t.type){case Le:return _n({},e,{client:t.client,clientName:t.clientName});case Ce:return _n({},e,{headerTime:t.headerTime,currentTime:t.currentTime});case xe:return _n({},e,{timer:t.timer});case je:return _n({},e,{messages:[...e.messages,{loading:!0,entity:'bot',systemTime:Object(ye.format)(new Date,He)}]});case Te:return _n({},e,{lastUpdateTime:Object(ye.format)(new Date,He),headerTime:'Now',messages:t.newConversationArray});case fe:return _n({},e,{lastUpdateTime:Object(ye.format)(new Date,He),headerTime:'Now',messages:[...e.messages,t.response].sort((e,t)=>{const a=Object(ye.parse)(e.systemTime,He,new Date(e.systemTime)),n=Object(ye.parse)(t.systemTime,He,new Date(t.systemTime)),i=Object(ye.differenceInMilliseconds)(n,a);return i})});case ke:return _n({},e,{webhookPayload:t.payload});case Ae:return _n({},e,{disableInput:!1});case Oe:return _n({},e,{disableInput:!0});case Pe:return _n({},e,{conversationStarted:!0});case Ue:return _n({},e,{conversationStarted:!1});case Ze:return _n({},e,{outputContexts:t.rawOutputContexts});default:return e;}},buttonBar:function(e=Gn,t){switch(t.type){case Ie:return Wn({},e,{visible:!0});case we:return Wn({},e,{visible:!1});default:return e;}},userInput:function(e=Fn,t){switch(t.type){case Ee:return t.userInput;default:return e;}},feedbackInput:function(e=Zn,t){switch(t.type){case We:return Jn({},e,{feedbackList:e.feedbackList.map((e)=>e.value===t.value.value?Jn({},e,{checked:t.value.checked}):e)});case Je:return Jn({},e,{wasHelpful:t.value.helpful,feedbackList:t.value.options.map((e)=>Jn({},e,{checked:!1}))});case Fe:return Jn({},e,{submitted:!0});default:return e;}},error:function(e=Hn,t){switch(t.type){case he:return t.error;case be:return Hn;default:return e;}}});B.a.load({google:{families:['Roboto:300,400,500','Product Sans:400']}});const Xn=V.a.div`
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
`,qn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.compose;class $n extends O.PureComponent{constructor(e){super(e),this.store=Object(Q.createStore)(Kn,qn(Object(Q.applyMiddleware)(J.a))),this.currentValue=null,this.theme=n(this.props.primaryColor,this.props.secondaryColor,this.props.headerColor)}componentDidMount(){this.store.dispatch(E(this.props,this.theme)),this.unsubscribe=this.store.subscribe(()=>this.handleChange(this.store))}componentWillUnmount(){this.unsubscribe()}select(e){return e.conversation.webhookPayload}handleChange(e){const t=this.currentValue;this.currentValue=this.select(e.getState()),t!==this.currentValue&&this.props.onPayload&&this.props.onPayload(this.currentValue)}render(){return Object(O.createElement)(P.Provider,{store:this.store},Object(O.createElement)(G.a,{theme:this.theme},Object(O.createElement)(Xn,null,Object(O.createElement)(Yn,null),Object(O.createElement)(dt,null))))}}t['default']=$n},function(e){e.exports=require('webfontloader')},function(e){e.exports=require('@material-ui/core/styles/MuiThemeProvider')},function(e){e.exports=require('redux-thunk')},function(e){e.exports=require('whatwg-fetch')},function(e){e.exports=require('@material-ui/core/colors')},function(e){e.exports=require('validator/lib/isHexColor')},function(e){e.exports=require('@material-ui/core/Fab')},function(e){e.exports=require('@material-ui/icons/Chat')},function(e){e.exports=require('@material-ui/core/Zoom')},function(e){e.exports=require('lodash/omit')},function(e){e.exports='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTkyIDE3MjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1OTIgMTcyODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZCREIzMjtzdHJva2U6I0ZBREEzMjt9DQoJLnN0MXtmaWxsOiNENDczOTQ7fQ0KCS5zdDJ7c3Ryb2tlOiNGQURBMzI7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xODE0LjIzLDEzMzZjMzAuMjQtNDIuOSw1NS40OS04OC44LDc1LjQyLTEzNi44MmMzNS42OS04NS45OSw1NC4zNS0xNzguNzUsNTQuMi0yNzMuMDkNCgkJYy0wLjI4LTM5My41OS0zMTkuMjQtNzEyLjYtNzEyLjgzLTcxMi45NGMtMTU5LjA2LDAtMzA1Ljk0LDUyLjA5LTQyNC41MywxNDAuMTVDNjY5LjQzLDQ4MC40MSw1ODMuNjUsNjYyLjA1LDU4My42NSw4NjMuNzINCgkJYzAsMzg0LjM5LDMxMS42MSw2OTUuOTksNjk1Ljk5LDY5NS45OWMxMTAuOTcsMC4wOSwyMjAuMzQtMjYuMzksMzE4Ljk4LTc3LjIyYzQuMjgtMi4yMSw4Ljc5LTMuOTQsMTMuNDYtNS4xN2wyMi4xNS01LjgyDQoJCWMxNy44MS00LjY4LDM2Ljc2LTEuNjcsNTIuMjQsOC4zbDExLjg4LDcuNjVjMjIuNzYsMTAuMzQsNDYuOTEsMTcuMjksNzEuNjksMjAuNjJjMjAuMjUsMy4wOSw0MC41OCw1LjUyLDYwLjk4LDcuMw0KCQljMTAuMDgsMC44OCwyMC4xNywxLjYsMzAuMjgsMi4xN2MyNi4yMiwxLjI3LDYwLjcxLDAuMTcsODYuNjEtMi44NWMtMzIuNC0yMi43LTg3LjY3LTczLjczLTEwOS42MS0xMTIuNjJsLTE4LjAyLTM3LjM2DQoJCUMxODE2LjEsMTM1NS42NSwxODE0LjA2LDEzNDUuODQsMTgxNC4yMywxMzM2eiIvPg0KCTxwYXRoIGQ9Ik0xMTE1LjQ2LDU5NS40OWMyLjMzLTIyLjY4LTQuNjUtNDEuMzYtMjQuNTctNTMuNTZjLTQyLjQ1LTIzLjE1LTk3LjIxLDAuNjctOTEuNzcsNTMuNTZjMCwyNi41OSwwLDUzLjE4LDAsNzkuNzgNCgkJYy01LjQ0LDUyLjg5LDQ5LjMxLDc2LjcxLDkxLjc3LDUzLjU2YzE5LjkyLTEyLjIsMjYuOTEtMzAuODgsMjQuNTctNTMuNTZDMTExNS40Niw2NDguNjcsMTExNS40Niw2MjIuMDgsMTExNS40Niw1OTUuNDl6Ii8+DQoJPHBhdGggZD0iTTE1NjEuMjUsNTk1LjQ5YzIuMzMtMjIuNjgtNC42NS00MS4zNi0yNC41Ny01My41NmMtNDIuNDUtMjMuMTUtOTcuMjEsMC42Ny05MS43Nyw1My41NmMwLDI2LjU5LDAsNTMuMTgsMCw3OS43OA0KCQljLTUuNDQsNTIuODksNDkuMzEsNzYuNzEsOTEuNzcsNTMuNTZjMTkuOTItMTIuMiwyNi45MS0zMC44OCwyNC41Ny01My41NkMxNTYxLjI1LDY0OC42NywxNTYxLjI1LDYyMi4wOCwxNTYxLjI1LDU5NS40OXoiLz4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTIwOC45OSw5NjMuMTZjMjAuOTMsMTAuMjYsNDQuNDYsMTYuMDMsNjkuMzQsMTYuMDNjMjQuODgsMCw0OC40Mi01Ljc2LDY5LjM0LTE2LjAzDQoJCWMtNy45NS0zMC44OC0zNS45OC01My42OS02OS4zNC01My42OVMxMjE2Ljk0LDkzMi4yOCwxMjA4Ljk5LDk2My4xNnoiLz4NCgk8cGF0aCBkPSJNMTIwOC45OSw5NjMuMTZjNy45NS0zMC44OCwzNS45OC01My42OSw2OS4zNC01My42OXM2MS4zOSwyMi44MSw2OS4zNCw1My42OWM1Mi4zMS0yNS42Niw4OC4zMi03OS40NCw4OC4zMy0xNDEuNjMNCgkJaC0zMTUuMzRDMTEyMC42Nyw4ODMuNzIsMTE1Ni42OCw5MzcuNSwxMjA4Ljk5LDk2My4xNnoiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTgwNi4zOCw0MDYuNjNjMTA2LjY3LDEyMi4yOSwxNzEuMzIsMjgyLjE5LDE3MS40NCw0NTcuMTljMC4yNCwxNTQuNDUtNTEuMTQsMzA0LjU1LTE0NS45OSw0MjYuNDUNCgkJYy02LjcsOS4zOS0xMS4zMywyMC4wOS0xMy41OCwzMS40Yy0zLjQ5LDE0LjQtMiwyOS41Niw0LjIxLDQzLjAybDE4LjAyLDM3LjM2YzIxLjk0LDM4Ljg5LDc3LjIxLDg5LjkyLDEwOS42MSwxMTIuNjINCgkJYy0yNS45LDMuMDItNjAuMzksNC4xMi04Ni42MSwyLjg1Yy0zMC41NS0xLjctNjEuMDEtNC44Ni05MS4yNi05LjQ3Yy0yNC43OC0zLjMzLTQ4LjkzLTEwLjI4LTcxLjY5LTIwLjYybC0xMS44OC03LjY1DQoJCWMtMTUuNDgtOS45Ni0zNC40NC0xMi45Ny01Mi4yNC04LjNsLTIyLjE1LDUuODJjLTQuNjYsMS4yMi05LjE3LDIuOTYtMTMuNDYsNS4xN2MtOTguNjQsNTAuODMtMjA4LjAyLDc3LjMxLTMxOC45OCw3Ny4yMg0KCQljLTM4NC4zOSwwLTY5NS45OS0zMTEuNjEtNjk1Ljk5LTY5NS45OXMzMTEuNjEtNjk1Ljk5LDY5NS45OS02OTUuOTljNzAuMzcsMC4wNiwxMzguMywxMC41NSwyMDIuMzMsMzAuMDINCgkJYzU1LjEzLDYuNDEsNTMuMjktNTMuNywyNC40Ni02MS4zOWMtNzEuNjQtMjIuMzEtMTQ3LjgxLTM0LjMzLTIyNi43OS0zNC4zM2MtNDIwLjY3LDAtNzYxLjY5LDM0MS4wMi03NjEuNjksNzYxLjY5DQoJCXMzNDEuMDIsNzYxLjY5LDc2MS42OSw3NjEuNjljMTI1Ljg0LDAsMjQ0LjU0LTMwLjUxLDM0OS4xMy04NC41NWM4LjQzLTIuNjIsMTUuMy00LjYzLDIyLjE1LTUuODJjNC45NywzLjY1LDEwLjIxLDcsMTUuNjcsMTAuMDgNCgkJYzcxLjQ0LDQwLjI2LDMyMi45NCw2MS43NiwzODkuNjMtMC40MmMxOS42OC0xMi43NywyNS4wMS0zMC45My0xNy43My01NS42N2MtNS43OC0zLjM0LTEyLjM5LTYuNzEtMTkuODYtMTAuMDcNCgkJYy0yNy44Ni0xMi41My0yOS4wOC0xNS4yMS01My4wMi0zNC40OWMtMjQuNzUtMTkuOTQtNDcuMTYtNDAuNTctNzIuMjktNzguMzNjLTQtOC42LTguNDQtMTguMi0xMy40MS0yOS4wMg0KCQljMC40OS0yLjE0LDEuMDItNC4zMSwxLjU4LTYuNTJjMTAwLjE4LTEyOC45NSwxNTkuODQtMjkwLjk2LDE1OS44NC00NjYuOWMwLTE5Ni44Ni03NC42OC0zNzYuMjgtMTk3LjI2LTUxMS40Nw0KCQlDMTgwOS4wNSwzMjAuMjQsMTc2MC4xMSwzNjEuOSwxODA2LjM4LDQwNi42M3oiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTcxMS41MywyMzQuNzFjLTE5LjI0LTEzLjE3LTM5LjExLTI1LjQ3LTU5LjU2LTM2Ljg2Yy0zMy45LTE4Ljg4LTU2LjgxLDQzLjktMzMuNyw1Ni43DQoJCWMxNy42NSw5Ljc4LDM0Ljg0LDIwLjMsNTEuNTEsMzEuNTJDMTcwMy4yOSwzMDguNjMsMTc0Ny43NywyNTkuNTIsMTcxMS41MywyMzQuNzF6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=='},function(e){e.exports=require('@material-ui/core/Paper')},function(e){e.exports=require('@material-ui/icons/Fullscreen')},function(e){e.exports=require('@material-ui/icons/FullscreenExit')},function(e){e.exports=require('@material-ui/icons/Info')},function(e){e.exports=require('@material-ui/icons/Close')},function(e){e.exports=require('@material-ui/core/Tooltip')},function(e){e.exports=require('@material-ui/core/DialogTitle')},function(e){e.exports=require('@material-ui/core/Dialog')},function(e){e.exports=require('@material-ui/core/DialogActions')},function(e){e.exports=require('@material-ui/core/DialogContent')},function(e){e.exports=require('@material-ui/core/DialogContentText')},function(e){e.exports=require('lodash/isEqual')},function(e){e.exports=require('lodash/merge')},function(e){e.exports=require('lodash')},function(e){e.exports=require('@material-ui/core/colors/green')},function(e){e.exports=require('@material-ui/core/CardMedia')},function(e){e.exports=require('@material-ui/core/CardHeader')},function(e){e.exports=require('@material-ui/core/Table')},function(e){e.exports=require('@material-ui/core/TableBody')},function(e){e.exports=require('@material-ui/core/TableCell')},function(e){e.exports=require('@material-ui/core/TableRow')},function(e){e.exports=require('react-google-maps')},function(e){e.exports='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjRUUzODQwIiBkPSJNMTIgMkM4LjEzIDIgNSA1LjEzIDUgOWMwIDUuMjUgNyAxMyA3IDEzczctNy43NSA3LTEzYzAtMy44Ny0zLjEzLTctNy03em0wIDkuNWMtMS4zOCAwLTIuNS0xLjEyLTIuNS0yLjVzMS4xMi0yLjUgMi41LTIuNSAyLjUgMS4xMiAyLjUgMi41LTEuMTIgMi41LTIuNSAyLjV6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg=='},function(e){e.exports='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9ImIiPjx1c2UgeGxpbms6aHJlZj0iI2EiIG92ZXJmbG93PSJ2aXNpYmxlIi8+PC9jbGlwUGF0aD48cGF0aCBjbGlwLXBhdGg9InVybCgjYikiIGZpbGw9IiMyOTc5RkYiIGQ9Ik0xMiAyQzguMTQgMiA1IDUuMTQgNSA5YzAgNS4yNSA3IDEzIDcgMTNzNy03Ljc1IDctMTNjMC0zLjg2LTMuMTQtNy03LTd6bTAgMmMxLjEgMCAyIC45IDIgMiAwIDEuMTEtLjkgMi0yIDJzLTItLjg5LTItMmMwLTEuMS45LTIgMi0yem0wIDEwYy0xLjY3IDAtMy4xNC0uODUtNC0yLjE1LjAyLTEuMzIgMi42Ny0yLjA1IDQtMi4wNXMzLjk4LjczIDQgMi4wNWMtLjg2IDEuMy0yLjMzIDIuMTUtNCAyLjE1eiIvPjwvc3ZnPg=='},function(e){e.exports=require('@material-ui/core/FormControl')},function(e){e.exports=require('@material-ui/core/FormGroup')},function(e){e.exports=require('@material-ui/core/FormControlLabel')},function(e){e.exports=require('@material-ui/core/Checkbox')},function(e){e.exports=require('@material-ui/icons/Send')},function(e){e.exports=require('lodash/findLast')}])});
//# sourceMappingURL=chatframe.js.map