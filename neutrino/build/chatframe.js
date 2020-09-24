(function(e,t){'object'==typeof exports&&'object'==typeof module?module.exports=t():'function'==typeof define&&define.amd?define('chatframe',[],t):'object'==typeof exports?exports.chatframe=t():e.chatframe=t()})('undefined'==typeof self?this:self,function(){return function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(a,'a',a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='./',t(t.s=20)}([function(e){e.exports=require('react')},function(e){e.exports=require('styled-components')},function(e){e.exports=require('react-redux')},function(e){e.exports=require('@material-ui/core/colors/grey')},function(e){e.exports=require('date-fns')},function(e){e.exports=require('@material-ui/core/styles')},function(e){e.exports=require('@material-ui/core/Typography')},function(e){e.exports=require('@material-ui/core/Button')},function(e){e.exports=require('uuid/v4')},function(e){e.exports=require('@material-ui/core/Link')},function(e){e.exports=require('@material-ui/core/Card')},function(e){e.exports=require('@material-ui/core/CardContent')},function(e){e.exports=require('redux')},function(e){e.exports=require('@material-ui/core/Avatar')},function(e){e.exports=require('lodash/get')},function(e){e.exports=require('lodash/find')},function(e){e.exports=require('@material-ui/core/IconButton')},function(e){e.exports=require('markdown-to-jsx')},function(e){e.exports=require('@material-ui/core/CardActions')},function(e){e.exports=require('@material-ui/core/TextField')},function(e,t,a){e.exports=a(21)},function(e,t,a){'use strict';function n(e='lightBlue',t='pink',a='lightBlue'){const n={palette:{error:$.red,contrastThreshold:3,tonalOffset:0.2},typography:{useNextVariants:!0},overrides:{MuiFab:{root:{position:'absolute',bottom:48,right:48}}}};if(ae()(e))n.palette.primary={main:e};else if($[e])n.palette.primary=$[e];else throw new Error(`${e} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);if(ae()(t))n.palette.secondary={main:t};else if(t&&$[t])n.palette.secondary=$[t];else throw new Error(`${t} is not a valid color. 
      Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);if(ae()(a))n.palette.header={main:a};else if($[a])n.palette.header=$[a];else throw new Error(`${a} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);return Object(X.createMuiTheme)(n)}function i(e,t=1){const a=fetch(e).then((e)=>e.json()).catch((a)=>{if(1===t)throw a;setTimeout(()=>{i(e,t-1)},500)});return a}function o(e){return(t)=>{const a=new tt(e);t({type:ge,client:a,clientName:'dialogflow'})}}function r(e){return(t,a)=>{const n=a().conversation.messages,i=qe()(e.responses,['type','suggestion']);if(i?t({type:Ce}):t({type:Ie}),0===n.length)t({type:Le,newConversationArray:[e]});else{const a=n.map((t)=>t.loading?e:t).sort((e,t)=>{const a=Object(pe.parse)(e.systemTime,Ze,new Date(e.systemTime)),n=Object(pe.parse)(t.systemTime,Ze,new Date(t.systemTime)),i=Object(pe.differenceInMilliseconds)(a,n);return i});t({type:Le,newConversationArray:a})}}}function s(e){return(t)=>{function a(e){return'text'===e?'text':'card'===e?'card':'quickReplies'===e?'suggestion':'image'===e?'image':'payload'===e?'payload':'text'}const n=me()(e,'queryResult.outputContexts',[]);t({type:Je,rawOutputContexts:n});const i=me()(e,'queryResult.fulfillmentMessages',[]);let o=[],s=!1;try{o=i.map((e)=>{const n=a(e.message),i=me()(e,'quickReplies.quickReplies',[]),o=me()(e,'text.text',null),r={title:me()(e,'card.title',''),subtitle:me()(e,'card.subtitle',''),imageUrl:me()(e,'card.imageUri',''),buttons:me()(e,'card.buttons',[])},l={imageUri:me()(e,'image.imageUri',''),accessibilityText:me()(e,'image.accessibilityText','')},c={};if('payload'===n){const a=me()(e,'payload.fields',{});for(const e of Object.entries(a)){var d=at(e,2);const t=d[0],a=d[1];if('stringValue'===a.kind)try{c[t]=JSON.parse(a.stringValue)}catch(e){c[t]=a.stringValue}else if(a.kind&&'stringValue'!==a.kind)throw new Error('Use stringValue to send payloads');else return c}if('disableInput'in c){if(1<Object.keys(c).length){const e=et()(c,['disableInput']);t({type:ke,modifiedPayload:e})}s=!0,t({type:ze})}else t({type:ke,payload:c})}return'text'===n?{type:n,text:o}:'image'===n?{type:n,image:l}:'suggestion'===n?{type:n,suggestions:i}:'card'===n?{type:n,card:r}:'payload'===n?{type:n,payload:c}:{type:n,text:o}})}catch(e){console.log(e)}let l;s?l=o.filter((e)=>{const t=me()(e,'payload.disableInput',!1);return!t}):(t({type:Oe}),l=o);const c=Object(pe.format)(new Date,Ze),d={entity:'bot',loading:!1,messageId:e.responseId,key:Ke()(),messageSession:e.session,language:e.queryResult.languageCode,systemTime:c,responses:l};t(r(d))}}function l(e){return(t,a)=>{const n=a().conversation.client;t({type:fe}),n.textRequest(e).then((e)=>{e?(t(s(e)),t({type:he})):t({type:we,error:'No response received from chat provider. Please try again.'})}).catch((e)=>{throw new Error(e)}).catch((e)=>{console.log(e),t({type:we,error:'Unable to connect to the chat provider. Please try again.'})})}}function c(e){return(t,a)=>{const n=a().conversation.client;t({type:fe}),n.eventRequest(e).then((e)=>{e?(t(s(e)),t({type:he})):(t({type:we,error:'No response received from chat provider. Please try again.'}),t({type:Pe}))}).catch((e)=>{throw new Error(e)}).catch((e)=>{console.log(e),t({type:we,error:'Unable to connect to the chat provider. Please try again.'})})}}function d(e,t){return(a)=>{try{if(!e)throw new Error('No conversation provider selected.');if('dialogflow'===e.toLowerCase())a(o(t));else throw a({type:we,error:`Unable to connect to ${e}`}),new Error(`${e} is not a recognized conversation provider.`)}catch(e){console.log(e)}}}function u(e){return(t,a)=>{const n=a().conversation.clientName;try{if('dialogflow'===n.toLowerCase())t(l(e));else throw new Error(`${n} is not a recognized conversation provider.`)}catch(e){console.log(e),t({type:we,error:`Unable to connect to ${n}`})}}}function m(e){return(t,a)=>{const n=a().conversation.messages.length,i=Object(pe.format)(new Date,Ze),o={entity:'user',messageId:`usermessage-${n}`,systemTime:i,text:e};t({type:Ee,response:o}),t({type:Ie}),t(u(e))}}function p(e){return(t)=>{t(m(e))}}function y(){return(e,t)=>{const a=t().conversation.conversationStarted;e({type:be}),a||(e(c('Welcome')),e({type:Ae}))}}function M(){return{type:De}}function N(){return{type:Se}}function g(){return{type:ve}}function L(){return(e,t)=>{const a=t().conversation.lastUpdateTime,n=new Date,i=Object(pe.parse)(a,Ze,new Date(a)),o=Object(pe.differenceInMinutes)(n,i),r=Object(pe.differenceInSeconds)(n,i);let s='Now';1<=o?s=`${o} min ago`:9<=r&&(s=`${r} sec ago`);const l=Object(pe.format)(n,Ze);e({type:xe,headerTime:s,currentTime:l})}}function T(){return(e,t)=>{const a=t().conversation.timer;a&&clearInterval(a);const n=setInterval(()=>e(L()),10000);e({type:je,newTimer:n}),e(L())}}function E(e){return(t)=>{const a=e.title,n=e.avatar,i=e.client,o=e.clientOptions,r=e.initialActive,s=e.fullscreen,l=e.policyText,u=e.mapConfig,m=e.activationText,p=e.feedbackUrl;let L=n;if(L||(L=it.a),t({type:Me,title:a}),t({type:Ne,avatar:L}),t(d(i,o)),t(T()),l&&''!==l&&t({type:Ye,policyText:l}),m&&''!==m&&t({type:_e,activationText:m}),p&&t({type:We,feedbackUrl:p}),u){const e=u.googleMapsKey,a=u.centerCoordinates,n=me()(a,'lat',null),i=me()(a,'lng',null);if(e&&''!==e&&t({type:Re,googleMapsKey:e}),a)try{if('object'==typeof a&&null!==n&&null!==i)t({type:Ve,centerCoordinates:a});else throw new Error('Please provide valid latitude and longitude coordinates, see README')}catch(e){console.log(e)}}!0===r?(t({type:Ae}),t(c('Welcome')),t(y())):t(M()),!0===s?t(N()):t(g())}}function f(e){return{type:Be,value:e}}function j(e){return(t)=>{t(u(e))}}function x(e){return{type:Fe,value:e}}function C(e){return Object(z.createElement)(Ma,{message:e.text,entity:e.entity,key:e.key,timestamp:e.systemTime,isLoading:!1})}function I(e){return Object(z.createElement)(Ma,{key:'loading',entity:'bot',timestamp:e.systemTime,isLoading:e.loading})}function w(e,t=!1){return Object(z.createElement)(Nn,{feedbackData:e.payload.feedback,session:e.session,entity:e.entity,key:e.key,isLoading:!1,timestamp:e.systemTime,className:t?'scrollIntoView':''})}function h(e,t,a=!1){return Object(z.createElement)(Ma,{message:e.text,entity:e.entity,key:e.key,isLoading:!1,timestamp:e.systemTime,showTimestamp:t,className:a?'scrollIntoView':''})}function b(e,t=!1){return Object(z.createElement)(ha,{data:e.card,timestamp:e.systemTime,key:e.key,className:t?'scrollIntoView':''})}function D(e,t=!1){return Object(z.createElement)(Ka,{data:e.payload.mapPayload,timestamp:e.systemTime,key:e.key,className:t?'scrollIntoView':''})}function S(e){return!(256<e.length)}function v(e){const t={value:e,charLength:e.length||0,maxExceeded:255<e.length};return{type:Te,userInput:t}}function k(){return(e,t)=>{var a=t();const n=a.userInput,i=n.value.trim();if(i&&''!==i){const t=S(n.value);t&&(e(m(n.value)),e(v('')))}}}Object.defineProperty(t,'__esModule',{value:!0});var z=a(0),O=a.n(z),A=a(2),P=a.n(A),U=a(12),Q=a.n(U),Y=a(1),R=a.n(Y),V=a(22),_=a.n(V),B=a(23),W=a.n(B),G=a(24),F=a.n(G),J=a(25),Z=a.n(J),H=a(3),K=a.n(H),X=a(5),q=a.n(X),$=a(26),ee=a.n($),te=a(27),ae=a.n(te),ne=a(28),ie=a.n(ne),oe=a(29),re=a.n(oe),se=a(30),le=a.n(se),ce=a(13),de=a.n(ce),ue=a(14),me=a.n(ue),pe=a(4),ye=a.n(pe);const Me='SET_TITLE',Ne='SET_AVATAR',ge='SAVE_CLIENT',Le='SAVE_RESPONSE',Te='SAVE_USER_INPUT',Ee='SAVE_USER_RESPONSE',fe='INITIATE_LOADING',je='TIMER_START',xe='UPDATE_CURRENT_TIME',Ce='SHOW_BUTTON_BAR',Ie='HIDE_BUTTON_BAR',we='DISPLAY_ERROR',he='CLEAR_ERROR',be='SHOW_WINDOW',De='HIDE_WINDOW',Se='FULLSCREEN',ve='WINDOWED',ke='RECEIVE_WEBHOOK_DATA',ze='DISABLE_INPUT',Oe='ENABLE_INPUT',Ae='SET_CONVERSATION_STARTED',Pe='SET_CONVERSATION_ENDED',Ue='SHOW_PRIVACY_POLICY',Qe='HIDE_PRIVACY_POLICY',Ye='SET_PRIVACY_POLICY',Re='SET_GOOGLE_MAPS_KEY',Ve='SET_CENTER_COORDINATES',_e='SET_ACTIVATION_TEXT',Be='SAVE_FEEDBACK_INPUT',We='SET_FEEDBACK_URL',Ge='SET_FEEDBACK_SUBMITTED',Fe='SET_FEEDBACK_OPTIONS',Je='SET_OUTPUT_CONTEXTS',Ze='yyyy-MM-dd\'T\'HH:mm:ss.SSS';var He=a(8),Ke=a.n(He),Xe=a(15),qe=a.n(Xe),$e=a(31),et=a.n($e);class tt{constructor(e){if(!e||!e.textUrl)throw new Error('Fulfillment URL is required to generate a conversation client');this.textUrl=e.textUrl,this.eventUrl=e.eventUrl,this.uuid=Ke()()}encodeQueryData(e){const t=[];for(const a in e)t.push(`${encodeURIComponent(a)}=${encodeURIComponent(e[a])}`);return t.join('&')}textRequest(e){if(!e)throw new Error('Query should not be empty');const t={query:e,uuid:this.uuid},a=this.encodeQueryData(t),n=`${this.textUrl}?${a}`;return i(n,2)}eventRequest(e){if(!e)throw new Error('Query should not be empty');const t={query:e,uuid:this.uuid},a=this.encodeQueryData(t),n=`${this.eventUrl}?${a}`;return fetch(n).then((e)=>e.json()).catch((e)=>{throw new Error(e)})}}var at=function(){function e(e,t){var a=[],n=!0,i=!1,o=void 0;try{for(var r,s=e[Symbol.iterator]();!(n=(r=s.next()).done)&&(a.push(r.value),!(t&&a.length===t));n=!0);}catch(e){i=!0,o=e}finally{try{!n&&s['return']&&s['return']()}finally{if(i)throw o}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),nt=a(32),it=a.n(nt);const ot=R()(ie.a)`
  && {
    display: ${(e)=>e.active?'flex':'none'};
    pointer-events: auto;
    width: ${(e)=>e.activationtext?'auto':'56px'};
    height: ${(e)=>e.activationtext?'auto':'56px'};
    padding: ${(e)=>e.activationtext?'4px 6px':'auto'};
    border-radius: ${(e)=>e.activationtext?'20px':'50%'};
  }
`,rt=R.a.div`
  text-transform: none;
  padding-right: 10px;
  color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
`,st=R()(de.a)`
  && {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 50% 50% 0px 50%;
  }
`;class lt extends z.PureComponent{render(){var e=this.props;const t=e.title,a=e.windowVisible,n=e.showWindow,i=e.activationText,o=e.theme,r=e.avatar,s=i?Object(z.createElement)(O.a.Fragment,null,Object(z.createElement)(st,{alt:t,src:r}),Object(z.createElement)(rt,{theme:o},i)):Object(z.createElement)(re.a,null);return Object(z.createElement)(le.a,{in:!a,unmountOnExit:!0},Object(z.createElement)(ot,{color:'primary',onClick:n,active:a?0:1,activationtext:i?1:0},s))}}var ct=Object(X.withTheme)()(Object(A.connect)((e)=>({title:e.config.title,windowVisible:e.config.windowVisible,activationText:e.config.activationText,avatar:e.config.avatar}),(e)=>({showWindow:()=>{e(y())}}))(lt)),dt=a(33),ut=a.n(dt),mt=a(6),pt=a.n(mt),yt=a(34),Mt=a.n(yt),Nt=a(35),gt=a.n(Nt),Lt=a(36),Tt=a.n(Lt),Et=a(16),ft=a.n(Et),jt=a(37),xt=a.n(jt),Ct=a(38),It=a.n(Ct);const wt=R()(de.a)`
  && {
    flex: 0 0 32px;
    width: 32px;
    height: 32px;
    margin-right: 16px;
    border-radius: 50% 50% 0px 50%;
  }
`,ht=R.a.div`
  position: absolute;
  bottom: -1px;
  left: 27px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid ${K.a[100]};
`,bt=R.a.div`
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
`,Dt=R()(pt.a)`
  && {
    font-family: 'Product Sans';
    font-weight: 400;
    height: 32px;
    font-size: 18px;
    line-height: 32px;
    flex: 1;
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
  }
`,St=R()(ft.a)`
  && {
    padding: 6px;
    flex: 0;
    cursor: pointer;
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`;class vt extends z.PureComponent{render(){var e=this.props;const t=e.title,a=e.theme,n=e.hideWindow,i=e.showWindowed,o=e.showFullscreen,r=e.fullscreen,s=e.avatar,l=e.showPrivacyPolicy;return Object(z.createElement)(bt,{theme:a},Object(z.createElement)(ht,null),Object(z.createElement)(wt,{alt:t,src:s}),Object(z.createElement)(Dt,{theme:a,variant:'h6'},t),Object(z.createElement)(It.a,{title:'Privacy Policy',placement:'bottom'},Object(z.createElement)(St,{theme:a,onClick:l,"aria-label":'Windowed'},Object(z.createElement)(Tt.a,{fontSize:'small'}))),r?Object(z.createElement)(St,{theme:a,onClick:i,"aria-label":'Windowed'},Object(z.createElement)(gt.a,{fontSize:'small'})):Object(z.createElement)(St,{theme:a,onClick:o,"aria-label":'Fullscreen'},Object(z.createElement)(Mt.a,{fontSize:'small'})),Object(z.createElement)(St,{theme:a,onClick:n,"aria-label":'Close'},Object(z.createElement)(xt.a,{fontSize:'small'})))}}var kt=Object(X.withTheme)()(Object(A.connect)((e)=>({title:e.config.title,fullscreen:e.config.fullscreen,avatar:e.config.avatar}),{hideWindow:M,showFullscreen:N,showWindowed:g,showPrivacyPolicy:function(){return{type:Ue}}})(vt)),zt=a(39),Ot=a.n(zt),At=a(40),Pt=a.n(At),Ut=a(41),Qt=a.n(Ut),Yt=a(42),Rt=a.n(Yt),Vt=a(43),_t=a.n(Vt),Bt=a(7),Wt=a.n(Bt);const Gt=R()(Pt.a)`
  && {
    position: absolute;
  }
`;class Ft extends z.PureComponent{render(){var e=this.props;const t=e.hidePrivacyPolicy,a=e.privacyPolicyVisible,n=e.privacyPolicy,i=e.parentRef;return Object(z.createElement)(Gt,{open:a,onClose:t,"aria-labelledby":'privacy-policy',container:i,scroll:'paper'},Object(z.createElement)(Ot.a,null,'Privacy Statement'),Object(z.createElement)(Rt.a,null,Object(z.createElement)(_t.a,null,n)),Object(z.createElement)(Qt.a,null,Object(z.createElement)(Wt.a,{onClick:t,color:'primary'},'Close')))}}var Jt=Object(A.connect)((e)=>({privacyPolicyVisible:e.config.privacyPolicyVisible,privacyPolicy:e.config.privacyPolicy}),{hidePrivacyPolicy:function(){return{type:Qe}}})(Ft),Zt=a(44),Ht=a.n(Zt),Kt=a(45),Xt=a.n(Kt),qt=a(46),$t=a.n(qt),ea=a(17),ta=a.n(ea),aa=a(9),na=a.n(aa),ia=a(47),oa=a.n(ia);const ra=R.a.div`
  text-align: center;
  width: 42px;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`,sa=R.a.div`
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
`;class la extends z.PureComponent{render(){return Object(z.createElement)(ra,null,Object(z.createElement)(sa,null),Object(z.createElement)(sa,null),Object(z.createElement)(sa,null))}}const ca=R.a.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 15px 16px 15px 16px;
  height: min-content;
  align-items: ${(e)=>'user'===e.entity?'flex-end':'flex-start'};
  scroll-margin: 15px;
`,da=R.a.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${(e)=>'user'===e.entity?'flex-end':'flex-start'};
`,ua=R.a.div`
  && {
    background: ${K.a[400]};
    border-top-right-radius: 10px;
    border-top-left-radius: 1px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 12px;
  }
`,ma=R.a.div`
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
`,pa=R()(pt.a)`
  && {
    color: ${K.a[500]};
    margin-top: 6px;
    padding-left: 5px;
    padding-right: 2px;
  }
`;class ya extends z.Component{render(){var e=this.props;const t=e.message,a=e.entity,n=e.isLoading,i=e.timestamp,o=e.currentTime,r=e.theme,s=e.showTimestamp,l=e.error,c=e.className,d=e.key,u=Object(pe.parse)(i,Ze,new Date(o)),m=Object(pe.isSameDay)(new Date,u),p=Object(pe.isSameDay)(u,Object(pe.subDays)(new Date,1));let y=null;y=m?`Today ${Object(pe.format)(u,'h:mm aa')}`:p?`Yesterday ${Object(pe.format)(u,'h:mm aa')}`:Object(pe.format)(u,'MMMM dd, yyyy h:mm aa');let M=t&&''!==t[0]?t:['Oops! Something happened with the connection. Please try again.'];let N=Object(z.createElement)(la,null);n&&l&&(N=l);const g='user'===a?Object(z.createElement)(ma,{elevation:1,theme:r},t):Object(z.createElement)(ua,{elevation:1},n?N:Object(z.createElement)(ta.a,{options:{forceBlock:!0,overrides:{h6:{component:pt.a,props:{variant:'h6'}},p:{component:pt.a,props:{variant:'body1'}},a:{component:na.a}}}},M[0]));return Object(z.createElement)(ca,{entity:a,className:c,key:d},Object(z.createElement)(da,{entity:a},g),s?Object(z.createElement)(pa,{variant:'caption'},y):null)}}var Ma=Object(X.withTheme)()(Object(A.connect)((e)=>({currentTime:e.conversation.currentTime,error:e.error}))(ya)),Na=a(10),ga=a.n(Na),La=a(18),Ta=a.n(La),Ea=a(11),fa=a.n(Ea),ja=a(48),xa=a.n(ja);const Ca=R()(ga.a)`
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
`,Ia=R()(xa.a)`
  && {
    height: ${(e)=>e.image&&''!==e.image?'200px':'0px'};
    background-size: cover;
    background-position: center center;
  }
`;class wa extends z.PureComponent{render(){var e=this.props.data;const t=e.title,a=e.subtitle,n=e.imageUrl,i=e.buttons,o=e.className;return Object(z.createElement)(Ca,{className:o,key:this.props.key},n?Object(z.createElement)(Ia,{image:encodeURI(n),title:''}):null,Object(z.createElement)(fa.a,null,Object(z.createElement)(pt.a,{gutterBottom:!0,variant:'h6'},t),Object(z.createElement)(ta.a,{options:{forceBlock:!0,overrides:{h6:{component:pt.a,props:{variant:'h6'}},p:{component:pt.a,props:{variant:'body1'}},a:{component:na.a}}}},a)),Object(z.createElement)(Ta.a,null,i.map((e,t)=>{const a=`card-${t}${Object(pe.format)(new Date,Ze)}`;return Object(z.createElement)(Wt.a,{href:e.postback,target:'_blank',size:'small',color:'primary',key:a},e.text)})))}}var ha=Object(A.connect)((e)=>({inputValue:e.userInput}))(wa),ba=a(49),Da=a.n(ba),Sa=a(50),va=a.n(Sa),ka=a(51),za=a.n(ka),Oa=a(52),Aa=a.n(Oa),Pa=a(53),Ua=a.n(Pa),Qa=a(54),Ya=a.n(Qa),Ra=a(55),Va=a.n(Ra),_a=a(56),Ba=a.n(_a);const Wa=R()(ga.a)`
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
`,Ga=R.a.div`
  height: 150px;
  font-size: 12px;
  margin-top: 10px;
`,Fa=R()(fa.a)`
  &&& {
    padding-top: 0;
    padding-bottom: 0;
  }
`,Ja=R()(za.a)`
  td {
    padding: 4px 0px 4px 0px;
  }
  tr:last-of-type {
    td {
      border-bottom: none;
    }
  }
`,Za=R()(Aa.a)`
  && {
    width: 70%;
    padding: 4px 0px 4px 0px;
  }
`,Ha=R()(Aa.a)`
  &&& {
    width: 20%;
    padding-right: 0;
    text-align: right;
  }
`;var Ka=Object(A.connect)((e)=>({googleMapsKey:e.config.googleMapsKey}))(function(e){const t=e.data,a=e.googleMapsKey,n=e.className,i=e.key,o='230px',r={width:30,height:30},s=`https://maps.googleapis.com/maps/api/js?key=${a}&v=3`,l=(e)=>{const t=`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${e.placeId}`;window.open(t,'_blank')},c=Object(Qa.withScriptjs)(Object(Qa.withGoogleMap)(()=>Object(z.createElement)(Qa.GoogleMap,{defaultZoom:8,defaultCenter:t.nearestLocations[0],defaultOptions:{zoomControl:!0,mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1}},t.locations.map((e,t)=>Object(z.createElement)(Qa.Marker,{key:t,position:{lat:e.lat,lng:e.lng},icon:{url:Va.a,scaledSize:r},onClick:()=>l(e)})),Object(z.createElement)(Qa.Marker,{position:{lat:t.currentGeocode.lat,lng:t.currentGeocode.lng},icon:{url:Ba.a,scaledSize:r}}))));return Object(z.createElement)(Wa,{className:n,key:i},Object(z.createElement)(Da.a,{title:'Office Locations'}),Object(z.createElement)(Fa,null,Object(z.createElement)(c,{googleMapURL:s,loadingElement:Object(z.createElement)('div',{style:{height:`${o}`}}),containerElement:Object(z.createElement)('div',{style:{height:`${o}`}}),mapElement:Object(z.createElement)('div',{style:{height:'100%'}})}),Object(z.createElement)(Ga,null,Object(z.createElement)(va.a,{padding:'dense'},Object(z.createElement)(Ja,null,t.nearestLocations.map((e,t)=>Object(z.createElement)(Ua.a,{key:t},Object(z.createElement)(Za,{padding:'dense'},Object(z.createElement)(pt.a,null,Object(z.createElement)(na.a,{href:`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${e.placeId}`,target:'blank'},e.street,', ',e.city))),Object(z.createElement)(Ha,{padding:'dense'},e.distance))))))))}),Xa=a(57),qa=a.n(Xa),$a=a(58),en=a.n($a),tn=a(59),an=a.n(tn),nn=a(60),on=a.n(nn),rn=a(19),sn=a.n(rn),ln=a(61),cn=a.n(ln),dn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const un=R.a.div`
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 15px;
  padding-top: 13px;
`;class mn extends z.PureComponent{constructor(){super(),this.state={isSubmitted:!1,feedbackComment:''}}render(){var e=this.props;const t=e.feedbackInputs,a=e.feedbackUrl,n=e.saveFeedbackInput,i=e.sendFeedback,o=e.session,r=e.outputContexts,s=(e)=>(t)=>{const a={value:e,checked:t.target.checked};n(a)},l=(e)=>e.filter((e)=>e.checked?e.value:null).map((e)=>e.value),c=(e)=>{fetch(a,{method:'POST',body:JSON.stringify(e),headers:{"Content-Type":'application/json'}})};return Object(z.createElement)(O.a.Fragment,null,this.state.isSubmitted?Object(z.createElement)(fa.a,null,'Thank you. Your feedback is important to us and will help improve Gen.'):Object(z.createElement)('div',null,Object(z.createElement)(fa.a,null,Object(z.createElement)(pt.a,{gutterBottom:!0,variant:'h6'},t.wasHelpful?'Why was Gen helpful?':'Why was Gen not helpful?'),Object(z.createElement)(qa.a,{component:'fieldset'},Object(z.createElement)(en.a,null,t.feedbackList?t.feedbackList.map((e)=>Object(z.createElement)(an.a,{key:e.value,control:Object(z.createElement)(on.a,{checked:e.checked,onChange:s(e.value),value:e.value}),label:e.value})):null,Object(z.createElement)(un,null,'Add your comments'),Object(z.createElement)(sn.a,{placeholder:'Type something',variant:'outlined',multiline:!0,value:this.state.feedbackComment,onChange:(t)=>{const e=t.target.value;this.setState((t)=>dn({},t,{feedbackComment:e}))},InputProps:{classes:{inputMultiline:this.props.classes.inputMultiline}}})))),Object(z.createElement)(Ta.a,null,Object(z.createElement)(Wt.a,{size:'small',color:'primary',onClick:()=>{const e={wasHelpful:t.wasHelpful,session:o,feedbackList:l(t.feedbackList),comment:this.state.feedbackComment,outputContexts:r};c(e),i('Feedback complete'),this.setState((e)=>dn({},e,{isSubmitted:!0}))},disabled:(!t.feedbackList||!(0<t.feedbackList.length)||cn()(t.feedbackList,(e)=>!e.checked))&&!this.state.feedbackComment},'Submit'))))}}var pn=Object(X.withStyles)(()=>({root:{},inputMultiline:{fontSize:'0.875rem',overflowY:'hidden'}}))(Object(A.connect)((e)=>({feedbackInputs:e.feedbackInput,feedbackUrl:e.config.feedbackUrl,outputContexts:e.conversation.outputContexts}),(e)=>({saveFeedbackInput:(t)=>{e(f(t))},sendFeedback:(t)=>{e(j(t))}}))(mn));const yn=R()(ga.a)`
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
`;class Mn extends z.PureComponent{componentDidMount(){var e=this.props;const t=e.setFeedbackOptions,a=e.feedbackData;t(a)}render(){var e=this.props;const t=e.session,a=e.className,n=e.key;return Object(z.createElement)(yn,{className:a,key:n},Object(z.createElement)(pn,{session:t}))}}var Nn=Object(A.connect)((e)=>({feedbackInputs:e.feedbackInput}),(e)=>({setFeedbackOptions:(t)=>{e(x(t))}}))(Mn);const gn={giant:1170,desktop:992,tablet:768,phone:620},Ln=Object.keys(gn).reduce((e,t)=>{const a=gn[t]/16;return e[t]=(...e)=>Y.css`
    @media (max-width: ${a}em) {
      ${Object(Y.css)(...e)};
    }
  `,e},{});var Tn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const En=R.a.div`
  display: flex;
  flex-direction: column;
  /* Vertically flips the container element to achieve flex-direction:column-reverse effect */
  transform: scale(1, -1);
  overflow: auto;
  ${Ln.tablet`
    flex-direction: column-reverse;
    overflow: auto;
    transform: none;
  `};
`,fn=R.a.div`
  background: ${K.a[100]};
  z-index: 4;
  grid-area: chatwindow;
  margin-bottom: 1px;
  margin-top: 8px;

  /* Vertically flips the content element so that the messages won't be upside down */
  transform: scale(1, -1);

  ${Ln.tablet`
   transform: none;
  `};
`;class jn extends z.PureComponent{constructor(e){super(e),Object.defineProperty(this,'findIndexFirstElementInLastResponse',{enumerable:!0,writable:!0,value:(e)=>{let t=0,a=!1;return Object(qt.forEachRight)(e,(e,n)=>{'bot'===e.entity?!a&&(t=n):a=!0}),t}}),Object.defineProperty(this,'parseMessages',{enumerable:!0,writable:!0,value:()=>{const e=this.props.messages,t=[];return e.forEach((e)=>{const a={systemTime:e.systemTime,entity:e.entity,session:e.messageSession,key:e.key};if(e.loading){const n=Xt()(e,a);t.push(n)}else if('bot'===e.entity)e.responses.forEach((e,n)=>{if('text'===e.type||'card'===e.type||'payload'===e.type){const i=Xt()(e,Tn({},a,{key:`${a.key}_${n}`}));t.push(i)}});else if('user'===e.entity){const n=Xt()(e,a);t.push(n)}}),t}}),Object.defineProperty(this,'createMessageElements',{enumerable:!0,writable:!0,value:()=>{const e=this.parseMessages(),t=[];let a=e;1<e.length&&(a=Object(qt.sortBy)(e,(e)=>new Date(e.systemTime)));const n=this.findIndexFirstElementInLastResponse(a);a.forEach((e,o)=>{const i=o===n;let r=!1;o===a.length-1&&(r=!0),e.loading?t.push(I(e)):'user'===e.entity?t.push(C(e)):'bot'===e.entity&&'text'===e.type?t.push(h(e,r,i)):'bot'===e.entity&&'card'===e.type?t.push(b(e,i)):'bot'===e.entity&&'payload'===e.type&&e.payload.mapPayload?t.push(D(e,i)):'bot'===e.entity&&'payload'===e.type&&e.payload.feedback?t.push(w(e,i)):t.push(h({text:['Something went wrong.']}))}),this.setState((e)=>Tn({},e,{messageElements:t}),()=>{document.getElementsByClassName('scrollIntoView')[0]&&setTimeout(()=>document.getElementsByClassName('scrollIntoView')[0].scrollIntoView(!1),0)})}}),Object.defineProperty(this,'handleWheel',{enumerable:!0,writable:!0,value:(t)=>{t.deltaY&&(t.preventDefault(),t.currentTarget.scrollTop-=2*(parseFloat(getComputedStyle(t.currentTarget).getPropertyValue('font-size'))*(0>t.deltaY?-1:1)))}}),Object.defineProperty(this,'componentRef',{enumerable:!0,writable:!0,value:O.a.createRef(null)}),this.messages=[],this.state={messageElements:[]},this.componentRef=O.a.createRef()}componentDidUpdate(){const e=this.parseMessages();Ht()(this.messages,e)||(this.messages=e,this.createMessageElements()),this.componentRef.current&&this.componentRef.current.addEventListener('wheel',this.handleWheel)}render(){const e=this.state.messageElements;return Object(z.createElement)(En,{ref:this.componentRef},Object(z.createElement)(fn,{elevation:1,square:!0},e))}}var xn=Object(A.connect)((e)=>({messages:e.conversation.messages,buttonBarVisible:e.buttonBar.visible,error:e.error}))(jn),Cn=a(62),In=a.n(Cn);const wn=R.a.div`
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
`,hn=R()(sn.a)`
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
`,bn=R()(ft.a)`
  && {
    padding: 16px 12px 16px 4px;
    &:hover {
      background: transparent;
    }
  }
`;class Dn extends z.PureComponent{constructor(){super(),this.handleKeyPress=this.handleKeyPress.bind(this)}handleKeyPress(t){13===t.charCode&&(this.props.submitUserInput(),t.preventDefault())}render(){var e=this.props;const t=e.saveUserInput,a=e.inputValue,n=e.shouldDisable,i=a.value,o=`${a.charLength}/255`,r=a.maxExceeded;let s=null;return s=r?`Exceeded character limit: ${o}`:null,Object(z.createElement)(wn,{visible:n},Object(z.createElement)(hn,{multiline:!0,rowsMax:'4',fullWidth:!0,InputProps:{disableUnderline:!0},placeholder:'Send a message',helperText:s,FormHelperTextProps:{style:{color:'#cd5c5c',margin:0}},onChange:t,value:i,onKeyPress:this.handleKeyPress}),Object(z.createElement)(bn,{onClick:this.props.submitUserInput,"aria-label":'Send',color:'primary',disabled:r,disableRipple:!0},Object(z.createElement)(In.a,null)))}}var Sn=Object(A.connect)((e)=>({inputValue:e.userInput,shouldDisable:e.conversation.disableInput}),(t)=>({saveUserInput:(a)=>{t(v(a.target.value))},submitUserInput:()=>{t(k())}}))(Dn),vn=a(63),kn=a.n(vn);const zn=R.a.div`
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
`,On=R()(Wt.a)`
  && {
    margin-right: 12px;
    margin-top: 12px;
    display: ${(e)=>'true'===e.visible?'block':'none'};
  }
`;class An extends z.PureComponent{render(){var e=this.props;const t=e.visible,a=e.messages,n=e.sendQuickReply,i=kn()(a,(e)=>{const t=qe()(e.responses,['type','suggestion']);return t}),o=[];if(i){const e=i.responses.filter((e)=>'suggestion'===e.type);for(const a of e)for(const e of a.suggestions)o.push({label:e,id:i.messageId,visible:t})}return Object(z.createElement)(zn,{visible:t},o.map((e,t)=>Object(z.createElement)(On,{size:'small',variant:'outlined',color:'secondary',key:`${e.id}-btn${t}`,visible:e.visible.toString(),onClick:()=>n(e.label)},e.label)))}}var Pn=Object(A.connect)((e)=>({visible:e.buttonBar.visible,messages:e.conversation.messages}),(e)=>({sendQuickReply:(t)=>{e(p(t))}}))(An);const Un=R()(ut.a)`
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
    ${(e)=>e.fullscreen&&Y.css`
        width: calc(100% - 96px);
        height: calc(100% - 96px);
      `};
    ${(e)=>!e.visible&&Y.css`
        width: 0;
        height: 0;
      `};

    ${Ln.phone`
    width: ${(e)=>e.visible?'calc(100% - 20px)':'0'};
    height: ${(e)=>e.visible?'calc(100% - 96px)':'0'};
    right: 10px;
    max-width: none;
    max-height: none;
  `};
  }
`,Qn=R.a.div`
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
`;class Yn extends z.PureComponent{constructor(e){super(e),this.containerRef=O.a.createRef()}render(){var e=this.props;const t=e.windowVisible,a=e.fullscreen;return Object(z.createElement)(Un,{elevation:4,fullscreen:a?1:0,visible:t?1:0},Object(z.createElement)(Qn,{ref:this.containerRef,className:'mui-fixed'},Object(z.createElement)(kt,null),Object(z.createElement)(Jt,{parentRef:this.containerRef.current}),Object(z.createElement)(xn,null),Object(z.createElement)(Pn,null),Object(z.createElement)(Sn,null)))}}var Rn=Object(A.connect)((e)=>({windowVisible:e.config.windowVisible,fullscreen:e.config.fullscreen}))(Yn),Vn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const _n={avatar:null,title:'Chat Window',windowVisible:!1,fullscreen:!1,privacyPolicyVisible:!1,googleMapsKey:'',centerCoordinates:'',activationText:'',privacyPolicy:'Please do not enter any personally identifiable information such as SSN, Date of Birth, Case Number or last name.',feedbackUrl:''};var Bn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Wn={client:null,clientName:null,messages:[],webhookPayload:null,disableInput:!1,lastUpdateTime:Object(pe.format)(new Date,Ze),currentTime:Object(pe.format)(new Date,Ze),headerTime:'Now',timer:null,conversationStarted:!1};var Gn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Fn={visible:!1,buttons:[]};const Jn={value:'',charLength:0,maxExceeded:!1};var Zn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Hn={submitted:!1,wasHelpful:null,feedbackList:null};const Kn='';const Xn=Object(U.combineReducers)({config:function(e=_n,t){switch(t.type){case Qe:return Vn({},e,{privacyPolicyVisible:!1});case Ue:return Vn({},e,{privacyPolicyVisible:!0});case Ye:return Vn({},e,{privacyPolicy:t.policyText});case Re:return Vn({},e,{googleMapsKey:t.googleMapsKey});case Ve:return Vn({},e,{centerCoordinates:t.centerCoordinates});case _e:return Vn({},e,{activationText:t.activationText});case Ne:return Vn({},e,{avatar:t.avatar});case Me:return Vn({},e,{title:t.title});case be:return Vn({},e,{windowVisible:!0});case De:return Vn({},e,{windowVisible:!1});case Se:return Vn({},e,{fullscreen:!0});case ve:return Vn({},e,{fullscreen:!1});case We:return Vn({},e,{feedbackUrl:t.feedbackUrl});default:return e;}},conversation:function(e=Wn,t){switch(t.type){case ge:return Bn({},e,{client:t.client,clientName:t.clientName});case xe:return Bn({},e,{headerTime:t.headerTime,currentTime:t.currentTime});case je:return Bn({},e,{timer:t.timer});case fe:return Bn({},e,{messages:[...e.messages,{loading:!0,entity:'bot',systemTime:Object(pe.format)(new Date,Ze)}]});case Le:return Bn({},e,{lastUpdateTime:Object(pe.format)(new Date,Ze),headerTime:'Now',messages:t.newConversationArray});case Ee:return Bn({},e,{lastUpdateTime:Object(pe.format)(new Date,Ze),headerTime:'Now',messages:[...e.messages,Bn({},t.response,{key:Ke()()})].sort((e,t)=>{const a=Object(pe.parse)(e.systemTime,Ze,new Date(e.systemTime)),n=Object(pe.parse)(t.systemTime,Ze,new Date(t.systemTime)),i=Object(pe.differenceInMilliseconds)(n,a);return i})});case ke:return Bn({},e,{webhookPayload:t.payload});case Oe:return Bn({},e,{disableInput:!1});case ze:return Bn({},e,{disableInput:!0});case Ae:return Bn({},e,{conversationStarted:!0});case Pe:return Bn({},e,{conversationStarted:!1});case Je:return Bn({},e,{outputContexts:t.rawOutputContexts});default:return e;}},buttonBar:function(e=Fn,t){switch(t.type){case Ce:return Gn({},e,{visible:!0});case Ie:return Gn({},e,{visible:!1});default:return e;}},userInput:function(e=Jn,t){switch(t.type){case Te:return t.userInput;default:return e;}},feedbackInput:function(e=Hn,t){switch(t.type){case Be:return Zn({},e,{feedbackList:e.feedbackList.map((e)=>e.value===t.value.value?Zn({},e,{checked:t.value.checked}):e)});case Fe:return Zn({},e,{wasHelpful:t.value.helpful,feedbackList:t.value.options.map((e)=>Zn({},e,{checked:!1}))});case Ge:return Zn({},e,{submitted:!0});default:return e;}},error:function(e=Kn,t){switch(t.type){case we:return t.error;case he:return Kn;default:return e;}}});_.a.load({google:{families:['Roboto:300,400,500','Product Sans:400']}});const qn=R.a.div`
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
`,$n=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||U.compose;class ei extends z.PureComponent{constructor(e){super(e),this.store=Object(U.createStore)(Xn,$n(Object(U.applyMiddleware)(F.a))),this.currentValue=null,this.theme=n(this.props.primaryColor,this.props.secondaryColor,this.props.headerColor)}componentDidMount(){this.store.dispatch(E(this.props,this.theme)),this.unsubscribe=this.store.subscribe(()=>this.handleChange(this.store))}componentWillUnmount(){this.unsubscribe()}select(e){return e.conversation.webhookPayload}handleChange(e){const t=this.currentValue;this.currentValue=this.select(e.getState()),t!==this.currentValue&&this.props.onPayload&&this.props.onPayload(this.currentValue)}render(){return Object(z.createElement)(A.Provider,{store:this.store},Object(z.createElement)(W.a,{theme:this.theme},Object(z.createElement)(qn,null,Object(z.createElement)(Rn,null),Object(z.createElement)(ct,null))))}}t['default']=ei},function(e){e.exports=require('webfontloader')},function(e){e.exports=require('@material-ui/core/styles/MuiThemeProvider')},function(e){e.exports=require('redux-thunk')},function(e){e.exports=require('whatwg-fetch')},function(e){e.exports=require('@material-ui/core/colors')},function(e){e.exports=require('validator/lib/isHexColor')},function(e){e.exports=require('@material-ui/core/Fab')},function(e){e.exports=require('@material-ui/icons/Chat')},function(e){e.exports=require('@material-ui/core/Zoom')},function(e){e.exports=require('lodash/omit')},function(e){e.exports='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTkyIDE3MjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1OTIgMTcyODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZCREIzMjtzdHJva2U6I0ZBREEzMjt9DQoJLnN0MXtmaWxsOiNENDczOTQ7fQ0KCS5zdDJ7c3Ryb2tlOiNGQURBMzI7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xODE0LjIzLDEzMzZjMzAuMjQtNDIuOSw1NS40OS04OC44LDc1LjQyLTEzNi44MmMzNS42OS04NS45OSw1NC4zNS0xNzguNzUsNTQuMi0yNzMuMDkNCgkJYy0wLjI4LTM5My41OS0zMTkuMjQtNzEyLjYtNzEyLjgzLTcxMi45NGMtMTU5LjA2LDAtMzA1Ljk0LDUyLjA5LTQyNC41MywxNDAuMTVDNjY5LjQzLDQ4MC40MSw1ODMuNjUsNjYyLjA1LDU4My42NSw4NjMuNzINCgkJYzAsMzg0LjM5LDMxMS42MSw2OTUuOTksNjk1Ljk5LDY5NS45OWMxMTAuOTcsMC4wOSwyMjAuMzQtMjYuMzksMzE4Ljk4LTc3LjIyYzQuMjgtMi4yMSw4Ljc5LTMuOTQsMTMuNDYtNS4xN2wyMi4xNS01LjgyDQoJCWMxNy44MS00LjY4LDM2Ljc2LTEuNjcsNTIuMjQsOC4zbDExLjg4LDcuNjVjMjIuNzYsMTAuMzQsNDYuOTEsMTcuMjksNzEuNjksMjAuNjJjMjAuMjUsMy4wOSw0MC41OCw1LjUyLDYwLjk4LDcuMw0KCQljMTAuMDgsMC44OCwyMC4xNywxLjYsMzAuMjgsMi4xN2MyNi4yMiwxLjI3LDYwLjcxLDAuMTcsODYuNjEtMi44NWMtMzIuNC0yMi43LTg3LjY3LTczLjczLTEwOS42MS0xMTIuNjJsLTE4LjAyLTM3LjM2DQoJCUMxODE2LjEsMTM1NS42NSwxODE0LjA2LDEzNDUuODQsMTgxNC4yMywxMzM2eiIvPg0KCTxwYXRoIGQ9Ik0xMTE1LjQ2LDU5NS40OWMyLjMzLTIyLjY4LTQuNjUtNDEuMzYtMjQuNTctNTMuNTZjLTQyLjQ1LTIzLjE1LTk3LjIxLDAuNjctOTEuNzcsNTMuNTZjMCwyNi41OSwwLDUzLjE4LDAsNzkuNzgNCgkJYy01LjQ0LDUyLjg5LDQ5LjMxLDc2LjcxLDkxLjc3LDUzLjU2YzE5LjkyLTEyLjIsMjYuOTEtMzAuODgsMjQuNTctNTMuNTZDMTExNS40Niw2NDguNjcsMTExNS40Niw2MjIuMDgsMTExNS40Niw1OTUuNDl6Ii8+DQoJPHBhdGggZD0iTTE1NjEuMjUsNTk1LjQ5YzIuMzMtMjIuNjgtNC42NS00MS4zNi0yNC41Ny01My41NmMtNDIuNDUtMjMuMTUtOTcuMjEsMC42Ny05MS43Nyw1My41NmMwLDI2LjU5LDAsNTMuMTgsMCw3OS43OA0KCQljLTUuNDQsNTIuODksNDkuMzEsNzYuNzEsOTEuNzcsNTMuNTZjMTkuOTItMTIuMiwyNi45MS0zMC44OCwyNC41Ny01My41NkMxNTYxLjI1LDY0OC42NywxNTYxLjI1LDYyMi4wOCwxNTYxLjI1LDU5NS40OXoiLz4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTIwOC45OSw5NjMuMTZjMjAuOTMsMTAuMjYsNDQuNDYsMTYuMDMsNjkuMzQsMTYuMDNjMjQuODgsMCw0OC40Mi01Ljc2LDY5LjM0LTE2LjAzDQoJCWMtNy45NS0zMC44OC0zNS45OC01My42OS02OS4zNC01My42OVMxMjE2Ljk0LDkzMi4yOCwxMjA4Ljk5LDk2My4xNnoiLz4NCgk8cGF0aCBkPSJNMTIwOC45OSw5NjMuMTZjNy45NS0zMC44OCwzNS45OC01My42OSw2OS4zNC01My42OXM2MS4zOSwyMi44MSw2OS4zNCw1My42OWM1Mi4zMS0yNS42Niw4OC4zMi03OS40NCw4OC4zMy0xNDEuNjMNCgkJaC0zMTUuMzRDMTEyMC42Nyw4ODMuNzIsMTE1Ni42OCw5MzcuNSwxMjA4Ljk5LDk2My4xNnoiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTgwNi4zOCw0MDYuNjNjMTA2LjY3LDEyMi4yOSwxNzEuMzIsMjgyLjE5LDE3MS40NCw0NTcuMTljMC4yNCwxNTQuNDUtNTEuMTQsMzA0LjU1LTE0NS45OSw0MjYuNDUNCgkJYy02LjcsOS4zOS0xMS4zMywyMC4wOS0xMy41OCwzMS40Yy0zLjQ5LDE0LjQtMiwyOS41Niw0LjIxLDQzLjAybDE4LjAyLDM3LjM2YzIxLjk0LDM4Ljg5LDc3LjIxLDg5LjkyLDEwOS42MSwxMTIuNjINCgkJYy0yNS45LDMuMDItNjAuMzksNC4xMi04Ni42MSwyLjg1Yy0zMC41NS0xLjctNjEuMDEtNC44Ni05MS4yNi05LjQ3Yy0yNC43OC0zLjMzLTQ4LjkzLTEwLjI4LTcxLjY5LTIwLjYybC0xMS44OC03LjY1DQoJCWMtMTUuNDgtOS45Ni0zNC40NC0xMi45Ny01Mi4yNC04LjNsLTIyLjE1LDUuODJjLTQuNjYsMS4yMi05LjE3LDIuOTYtMTMuNDYsNS4xN2MtOTguNjQsNTAuODMtMjA4LjAyLDc3LjMxLTMxOC45OCw3Ny4yMg0KCQljLTM4NC4zOSwwLTY5NS45OS0zMTEuNjEtNjk1Ljk5LTY5NS45OXMzMTEuNjEtNjk1Ljk5LDY5NS45OS02OTUuOTljNzAuMzcsMC4wNiwxMzguMywxMC41NSwyMDIuMzMsMzAuMDINCgkJYzU1LjEzLDYuNDEsNTMuMjktNTMuNywyNC40Ni02MS4zOWMtNzEuNjQtMjIuMzEtMTQ3LjgxLTM0LjMzLTIyNi43OS0zNC4zM2MtNDIwLjY3LDAtNzYxLjY5LDM0MS4wMi03NjEuNjksNzYxLjY5DQoJCXMzNDEuMDIsNzYxLjY5LDc2MS42OSw3NjEuNjljMTI1Ljg0LDAsMjQ0LjU0LTMwLjUxLDM0OS4xMy04NC41NWM4LjQzLTIuNjIsMTUuMy00LjYzLDIyLjE1LTUuODJjNC45NywzLjY1LDEwLjIxLDcsMTUuNjcsMTAuMDgNCgkJYzcxLjQ0LDQwLjI2LDMyMi45NCw2MS43NiwzODkuNjMtMC40MmMxOS42OC0xMi43NywyNS4wMS0zMC45My0xNy43My01NS42N2MtNS43OC0zLjM0LTEyLjM5LTYuNzEtMTkuODYtMTAuMDcNCgkJYy0yNy44Ni0xMi41My0yOS4wOC0xNS4yMS01My4wMi0zNC40OWMtMjQuNzUtMTkuOTQtNDcuMTYtNDAuNTctNzIuMjktNzguMzNjLTQtOC42LTguNDQtMTguMi0xMy40MS0yOS4wMg0KCQljMC40OS0yLjE0LDEuMDItNC4zMSwxLjU4LTYuNTJjMTAwLjE4LTEyOC45NSwxNTkuODQtMjkwLjk2LDE1OS44NC00NjYuOWMwLTE5Ni44Ni03NC42OC0zNzYuMjgtMTk3LjI2LTUxMS40Nw0KCQlDMTgwOS4wNSwzMjAuMjQsMTc2MC4xMSwzNjEuOSwxODA2LjM4LDQwNi42M3oiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTcxMS41MywyMzQuNzFjLTE5LjI0LTEzLjE3LTM5LjExLTI1LjQ3LTU5LjU2LTM2Ljg2Yy0zMy45LTE4Ljg4LTU2LjgxLDQzLjktMzMuNyw1Ni43DQoJCWMxNy42NSw5Ljc4LDM0Ljg0LDIwLjMsNTEuNTEsMzEuNTJDMTcwMy4yOSwzMDguNjMsMTc0Ny43NywyNTkuNTIsMTcxMS41MywyMzQuNzF6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=='},function(e){e.exports=require('@material-ui/core/Paper')},function(e){e.exports=require('@material-ui/icons/Fullscreen')},function(e){e.exports=require('@material-ui/icons/FullscreenExit')},function(e){e.exports=require('@material-ui/icons/Info')},function(e){e.exports=require('@material-ui/icons/Close')},function(e){e.exports=require('@material-ui/core/Tooltip')},function(e){e.exports=require('@material-ui/core/DialogTitle')},function(e){e.exports=require('@material-ui/core/Dialog')},function(e){e.exports=require('@material-ui/core/DialogActions')},function(e){e.exports=require('@material-ui/core/DialogContent')},function(e){e.exports=require('@material-ui/core/DialogContentText')},function(e){e.exports=require('lodash/isEqual')},function(e){e.exports=require('lodash/merge')},function(e){e.exports=require('lodash')},function(e){e.exports=require('@material-ui/core/colors/green')},function(e){e.exports=require('@material-ui/core/CardMedia')},function(e){e.exports=require('@material-ui/core/CardHeader')},function(e){e.exports=require('@material-ui/core/Table')},function(e){e.exports=require('@material-ui/core/TableBody')},function(e){e.exports=require('@material-ui/core/TableCell')},function(e){e.exports=require('@material-ui/core/TableRow')},function(e){e.exports=require('react-google-maps')},function(e){e.exports='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjRUUzODQwIiBkPSJNMTIgMkM4LjEzIDIgNSA1LjEzIDUgOWMwIDUuMjUgNyAxMyA3IDEzczctNy43NSA3LTEzYzAtMy44Ny0zLjEzLTctNy03em0wIDkuNWMtMS4zOCAwLTIuNS0xLjEyLTIuNS0yLjVzMS4xMi0yLjUgMi41LTIuNSAyLjUgMS4xMiAyLjUgMi41LTEuMTIgMi41LTIuNSAyLjV6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg=='},function(e){e.exports='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9ImIiPjx1c2UgeGxpbms6aHJlZj0iI2EiIG92ZXJmbG93PSJ2aXNpYmxlIi8+PC9jbGlwUGF0aD48cGF0aCBjbGlwLXBhdGg9InVybCgjYikiIGZpbGw9IiMyOTc5RkYiIGQ9Ik0xMiAyQzguMTQgMiA1IDUuMTQgNSA5YzAgNS4yNSA3IDEzIDcgMTNzNy03Ljc1IDctMTNjMC0zLjg2LTMuMTQtNy03LTd6bTAgMmMxLjEgMCAyIC45IDIgMiAwIDEuMTEtLjkgMi0yIDJzLTItLjg5LTItMmMwLTEuMS45LTIgMi0yem0wIDEwYy0xLjY3IDAtMy4xNC0uODUtNC0yLjE1LjAyLTEuMzIgMi42Ny0yLjA1IDQtMi4wNXMzLjk4LjczIDQgMi4wNWMtLjg2IDEuMy0yLjMzIDIuMTUtNCAyLjE1eiIvPjwvc3ZnPg=='},function(e){e.exports=require('@material-ui/core/FormControl')},function(e){e.exports=require('@material-ui/core/FormGroup')},function(e){e.exports=require('@material-ui/core/FormControlLabel')},function(e){e.exports=require('@material-ui/core/Checkbox')},function(e){e.exports=require('lodash/every')},function(e){e.exports=require('@material-ui/icons/Send')},function(e){e.exports=require('lodash/findLast')}])});
//# sourceMappingURL=chatframe.js.map