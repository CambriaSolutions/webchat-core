(function(e,t){'object'==typeof exports&&'object'==typeof module?module.exports=t():'function'==typeof define&&define.amd?define('chatframe',[],t):'object'==typeof exports?exports.chatframe=t():e.chatframe=t()})('undefined'==typeof self?this:self,function(){return function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(a,'a',a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='./',t(t.s=20)}([function(e){e.exports=require('react')},function(e){e.exports=require('styled-components')},function(e){e.exports=require('react-redux')},function(e){e.exports=require('@material-ui/core/colors/grey')},function(e){e.exports=require('date-fns')},function(e){e.exports=require('@material-ui/core/styles')},function(e){e.exports=require('@material-ui/core/Typography')},function(e){e.exports=require('@material-ui/core/Button')},function(e){e.exports=require('@material-ui/core/CardContent')},function(e){e.exports=require('@material-ui/core/Link')},function(e){e.exports=require('@material-ui/core/Card')},function(e){e.exports=require('redux')},function(e){e.exports=require('@material-ui/core/Avatar')},function(e){e.exports=require('lodash/get')},function(e){e.exports=require('lodash/find')},function(e){e.exports=require('uuid/v4')},function(e){e.exports=require('@material-ui/core/IconButton')},function(e){e.exports=require('markdown-to-jsx')},function(e){e.exports=require('@material-ui/core/CardActions')},function(e){e.exports=require('@material-ui/core/TextField')},function(e,t,a){e.exports=a(21)},function(e,t,a){'use strict';function n(e='lightBlue',t='pink',a='lightBlue'){const n={palette:{error:q.red,contrastThreshold:3,tonalOffset:0.2},typography:{useNextVariants:!0},overrides:{MuiFab:{root:{position:'absolute',bottom:48,right:48}}}};if(te()(e))n.palette.primary={main:e};else if(q[e])n.palette.primary=q[e];else throw new Error(`${e} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);if(te()(t))n.palette.secondary={main:t};else if(t&&q[t])n.palette.secondary=q[t];else throw new Error(`${t} is not a valid color. 
      Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);if(te()(a))n.palette.header={main:a};else if(q[a])n.palette.header=q[a];else throw new Error(`${a} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);return Object(K.createMuiTheme)(n)}function i(e,t=1){const a=fetch(e).then((e)=>e.json()).catch((a)=>{if(1===t)throw a;setTimeout(()=>{i(e,t-1)},500)});return a}function o(e){return(t)=>{const a=new et(e);t({type:ge,client:a,clientName:'dialogflow'})}}function r(e){return(t,a)=>{const n=a().conversation.messages,i=Ze()(e.responses,['type','suggestion']);if(i?t({type:xe}):t({type:Ie}),0===n.length)t({type:Le,newConversationArray:[e]});else{const a=n.map((t)=>t.loading?e:t).sort((e,t)=>{const a=Object(me.parse)(e.systemTime,Je,new Date(e.systemTime)),n=Object(me.parse)(t.systemTime,Je,new Date(t.systemTime)),i=Object(me.differenceInMilliseconds)(a,n);return i});t({type:Le,newConversationArray:a})}}}function s(e){return(t)=>{function a(e){return'text'===e?'text':'card'===e?'card':'quickReplies'===e?'suggestion':'image'===e?'image':'payload'===e?'payload':'text'}const n=ue()(e,'queryResult.outputContexts',[]);t({type:He,rawOutputContexts:n});const i=ue()(e,'queryResult.fulfillmentMessages',[]);let o=[],s=!1;try{o=i.map((e)=>{const n=a(e.message),i=ue()(e,'quickReplies.quickReplies',[]),o=ue()(e,'text.text',null),r={title:ue()(e,'card.title',''),subtitle:ue()(e,'card.subtitle',''),imageUrl:ue()(e,'card.imageUri',''),buttons:ue()(e,'card.buttons',[])},l={imageUri:ue()(e,'image.imageUri',''),accessibilityText:ue()(e,'image.accessibilityText','')},c={};if('payload'===n){const a=ue()(e,'payload.fields',{});for(const e of Object.entries(a)){var d=tt(e,2);const t=d[0],a=d[1];if('stringValue'===a.kind)try{c[t]=JSON.parse(a.stringValue)}catch(e){c[t]=a.stringValue}else if(a.kind&&'stringValue'!==a.kind)throw new Error('Use stringValue to send payloads');else return c}if('disableInput'in c){if(1<Object.keys(c).length){const e=Xe()(c,['disableInput']);t({type:Se,modifiedPayload:e})}s=!0,t({type:ke})}else t({type:Se,payload:c})}return'text'===n?{type:n,text:o}:'image'===n?{type:n,image:l}:'suggestion'===n?{type:n,suggestions:i}:'card'===n?{type:n,card:r}:'payload'===n?{type:n,payload:c}:{type:n,text:o}})}catch(e){console.log(e)}let l;s?l=o.filter((e)=>{const t=ue()(e,'payload.disableInput',!1);return!t}):(t({type:ze}),l=o);const c=Object(me.format)(new Date,Je),d={entity:'bot',loading:!1,messageId:e.responseId,messageSession:e.session,language:e.queryResult.languageCode,systemTime:c,responses:l};t(r(d))}}function l(e){return(t,a)=>{const n=a().conversation.client;t({type:Ee}),n.textRequest(e).then((e)=>{e?(t(s(e)),t({type:Ce})):t({type:we,error:'No response received from chat provider. Please try again.'})}).catch((e)=>{throw new Error(e)}).catch((e)=>{console.log(e),t({type:we,error:'Unable to connect to the chat provider. Please try again.'})})}}function c(e){return(t,a)=>{const n=a().conversation.client;t({type:Ee}),n.eventRequest(e).then((e)=>{e?(t(s(e)),t({type:Ce})):(t({type:we,error:'No response received from chat provider. Please try again.'}),t({type:Pe}))}).catch((e)=>{throw new Error(e)}).catch((e)=>{console.log(e),t({type:we,error:'Unable to connect to the chat provider. Please try again.'})})}}function d(e,t){return(a)=>{try{if(!e)throw new Error('No conversation provider selected.');if('dialogflow'===e.toLowerCase())a(o(t));else throw a({type:we,error:`Unable to connect to ${e}`}),new Error(`${e} is not a recognized conversation provider.`)}catch(e){console.log(e)}}}function u(e){return(t,a)=>{const n=a().conversation.clientName;try{if('dialogflow'===n.toLowerCase())t(l(e));else throw new Error(`${n} is not a recognized conversation provider.`)}catch(e){console.log(e),t({type:we,error:`Unable to connect to ${n}`})}}}function m(e){return(t,a)=>{const n=a().conversation.messages.length,i=Object(me.format)(new Date,Je),o={entity:'user',messageId:`usermessage-${n}`,systemTime:i,text:e};t({type:Te,response:o}),t({type:Ie}),t(u(e))}}function p(e){return(t)=>{t(m(e))}}function y(){return(e,t)=>{const a=t().conversation.conversationStarted;e({type:he}),a||(e(c('Welcome')),e({type:Oe}))}}function M(){return{type:be}}function g(){return{type:De}}function L(){return{type:ve}}function N(e){return(t)=>{const a=e.title,n=e.avatar,i=e.client,o=e.clientOptions,r=e.initialActive,s=e.fullscreen,l=e.policyText,u=e.mapConfig,m=e.activationText,p=e.feedbackUrl;let N=n;if(N||(N=nt.a),t({type:ye,title:a}),t({type:Me,avatar:N}),t(d(i,o)),l&&''!==l&&t({type:Ye,policyText:l}),m&&''!==m&&t({type:Ve,activationText:m}),p&&t({type:We,feedbackUrl:p}),u){const e=u.googleMapsKey,a=u.centerCoordinates,n=ue()(a,'lat',null),i=ue()(a,'lng',null);if(e&&''!==e&&t({type:Re,googleMapsKey:e}),a)try{if('object'==typeof a&&null!==n&&null!==i)t({type:Qe,centerCoordinates:a});else throw new Error('Please provide valid latitude and longitude coordinates, see README')}catch(e){console.log(e)}}!0===r?(t({type:Oe}),t(c('Welcome')),t(y())):t(M()),!0===s?t(g()):t(L())}}function T(e){return{type:_e,value:e}}function E(e){return(t)=>{t(u(e))}}function j(e){return{type:Be,value:e}}function f(e){return{type:Ge,value:e}}function x(e){return Object(k.createElement)(ya,{message:e.text,entity:e.entity,key:e.key,timestamp:e.systemTime,isLoading:!1})}function I(e){return Object(k.createElement)(ya,{key:'loading',entity:'bot',timestamp:e.systemTime,isLoading:e.loading})}function w(e,t=!1){return Object(k.createElement)(pn,{feedbackData:e.payload.feedback,session:e.session,entity:e.entity,key:e.key,isLoading:!1,timestamp:e.systemTime,className:t?'scrollIntoView':''})}function C(e,t,a=!1){return Object(k.createElement)(ya,{message:e.text,entity:e.entity,key:e.key,isLoading:!1,timestamp:e.systemTime,showTimestamp:t,className:a?'scrollIntoView':''})}function h(e,t=!1){return Object(k.createElement)(Ca,{data:e.card,timestamp:e.systemTime,key:e.key,className:t?'scrollIntoView':''})}function b(e,t=!1){return Object(k.createElement)(Za,{data:e.payload.mapPayload,timestamp:e.systemTime,key:e.key,className:t?'scrollIntoView':''})}function D(e){return!(256<e.length)}function v(e){const t={value:e,charLength:e.length||0,maxExceeded:255<e.length};return{type:Ne,userInput:t}}function S(){return(e,t)=>{var a=t();const n=a.userInput,i=n.value.trim();if(i&&''!==i){const t=D(n.value);t&&(e(m(n.value)),e(v('')))}}}Object.defineProperty(t,'__esModule',{value:!0});var k=a(0),z=a.n(k),O=a(2),P=a.n(O),U=a(11),A=a.n(U),Y=a(1),R=a.n(Y),Q=a(22),V=a.n(Q),_=a(23),W=a.n(_),G=a(24),B=a.n(G),H=a(25),J=a.n(H),F=a(3),Z=a.n(F),K=a(5),X=a.n(K),q=a(26),$=a.n(q),ee=a(27),te=a.n(ee),ae=a(28),ne=a.n(ae),ie=a(29),oe=a.n(ie),re=a(30),se=a.n(re),le=a(12),ce=a.n(le),de=a(13),ue=a.n(de),me=a(4),pe=a.n(me);const ye='SET_TITLE',Me='SET_AVATAR',ge='SAVE_CLIENT',Le='SAVE_RESPONSE',Ne='SAVE_USER_INPUT',Te='SAVE_USER_RESPONSE',Ee='INITIATE_LOADING',je='TIMER_START',fe='UPDATE_CURRENT_TIME',xe='SHOW_BUTTON_BAR',Ie='HIDE_BUTTON_BAR',we='DISPLAY_ERROR',Ce='CLEAR_ERROR',he='SHOW_WINDOW',be='HIDE_WINDOW',De='FULLSCREEN',ve='WINDOWED',Se='RECEIVE_WEBHOOK_DATA',ke='DISABLE_INPUT',ze='ENABLE_INPUT',Oe='SET_CONVERSATION_STARTED',Pe='SET_CONVERSATION_ENDED',Ue='SHOW_PRIVACY_POLICY',Ae='HIDE_PRIVACY_POLICY',Ye='SET_PRIVACY_POLICY',Re='SET_GOOGLE_MAPS_KEY',Qe='SET_CENTER_COORDINATES',Ve='SET_ACTIVATION_TEXT',_e='SAVE_FEEDBACK_INPUT',We='SET_FEEDBACK_URL',Ge='SET_FEEDBACK_SUBMITTED',Be='SET_FEEDBACK_OPTIONS',He='SET_OUTPUT_CONTEXTS',Je='yyyy-MM-dd\'T\'HH:mm:ss.SSS';var Fe=a(14),Ze=a.n(Fe),Ke=a(31),Xe=a.n(Ke),qe=a(15),$e=a.n(qe);class et{constructor(e){if(!e||!e.textUrl)throw new Error('Fulfillment URL is required to generate a conversation client');this.textUrl=e.textUrl,this.eventUrl=e.eventUrl,this.uuid=$e()()}encodeQueryData(e){const t=[];for(const a in e)t.push(`${encodeURIComponent(a)}=${encodeURIComponent(e[a])}`);return t.join('&')}textRequest(e){if(!e)throw new Error('Query should not be empty');const t={query:e,uuid:this.uuid},a=this.encodeQueryData(t),n=`${this.textUrl}?${a}`;return i(n,2)}eventRequest(e){if(!e)throw new Error('Query should not be empty');const t={query:e,uuid:this.uuid},a=this.encodeQueryData(t),n=`${this.eventUrl}?${a}`;return fetch(n).then((e)=>e.json()).catch((e)=>{throw new Error(e)})}}var tt=function(){function e(e,t){var a=[],n=!0,i=!1,o=void 0;try{for(var r,s=e[Symbol.iterator]();!(n=(r=s.next()).done)&&(a.push(r.value),!(t&&a.length===t));n=!0);}catch(e){i=!0,o=e}finally{try{!n&&s['return']&&s['return']()}finally{if(i)throw o}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),at=a(32),nt=a.n(at);const it=R()(ne.a)`
  && {
    display: ${(e)=>e.active?'flex':'none'};
    pointer-events: auto;
    width: ${(e)=>e.activationtext?'auto':'56px'};
    height: ${(e)=>e.activationtext?'auto':'56px'};
    padding: ${(e)=>e.activationtext?'4px 6px':'auto'};
    border-radius: ${(e)=>e.activationtext?'20px':'50%'};
  }
`,ot=R.a.div`
  text-transform: none;
  padding-right: 10px;
  color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
`,rt=R()(ce.a)`
  && {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 50% 50% 0px 50%;
  }
`;class st extends k.PureComponent{render(){var e=this.props;const t=e.title,a=e.windowVisible,n=e.showWindow,i=e.activationText,o=e.theme,r=e.avatar,s=i?Object(k.createElement)(z.a.Fragment,null,Object(k.createElement)(rt,{alt:t,src:r}),Object(k.createElement)(ot,{theme:o},i)):Object(k.createElement)(oe.a,null);return Object(k.createElement)(se.a,{in:!a,unmountOnExit:!0},Object(k.createElement)(it,{color:'primary',onClick:n,active:a?0:1,activationtext:i?1:0},s))}}var lt=Object(K.withTheme)()(Object(O.connect)((e)=>({title:e.config.title,windowVisible:e.config.windowVisible,activationText:e.config.activationText,avatar:e.config.avatar}),(e)=>({showWindow:()=>{e(y())}}))(st)),ct=a(33),dt=a.n(ct),ut=a(6),mt=a.n(ut),pt=a(34),yt=a.n(pt),Mt=a(35),gt=a.n(Mt),Lt=a(36),Nt=a.n(Lt),Tt=a(16),Et=a.n(Tt),jt=a(37),ft=a.n(jt),xt=a(38),It=a.n(xt);const wt=R()(ce.a)`
  && {
    flex: 0 0 32px;
    width: 32px;
    height: 32px;
    margin-right: 16px;
    border-radius: 50% 50% 0px 50%;
  }
`,Ct=R.a.div`
  position: absolute;
  bottom: -1px;
  left: 27px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid ${Z.a[100]};
`,ht=R.a.div`
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
`,bt=R()(mt.a)`
  && {
    font-family: 'Product Sans';
    font-weight: 400;
    height: 32px;
    font-size: 18px;
    line-height: 32px;
    flex: 1;
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
  }
`,Dt=R()(Et.a)`
  && {
    padding: 6px;
    flex: 0;
    cursor: pointer;
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`;class vt extends k.PureComponent{render(){var e=this.props;const t=e.title,a=e.theme,n=e.hideWindow,i=e.showWindowed,o=e.showFullscreen,r=e.fullscreen,s=e.avatar,l=e.showPrivacyPolicy;return Object(k.createElement)(ht,{theme:a},Object(k.createElement)(Ct,null),Object(k.createElement)(wt,{alt:t,src:s}),Object(k.createElement)(bt,{theme:a,variant:'h6'},t),Object(k.createElement)(It.a,{title:'Privacy Policy',placement:'bottom'},Object(k.createElement)(Dt,{theme:a,onClick:l,"aria-label":'Windowed'},Object(k.createElement)(Nt.a,{fontSize:'small'}))),r?Object(k.createElement)(Dt,{theme:a,onClick:i,"aria-label":'Windowed'},Object(k.createElement)(gt.a,{fontSize:'small'})):Object(k.createElement)(Dt,{theme:a,onClick:o,"aria-label":'Fullscreen'},Object(k.createElement)(yt.a,{fontSize:'small'})),Object(k.createElement)(Dt,{theme:a,onClick:n,"aria-label":'Close'},Object(k.createElement)(ft.a,{fontSize:'small'})))}}var St=Object(K.withTheme)()(Object(O.connect)((e)=>({title:e.config.title,fullscreen:e.config.fullscreen,avatar:e.config.avatar}),{hideWindow:M,showFullscreen:g,showWindowed:L,showPrivacyPolicy:function(){return{type:Ue}}})(vt)),kt=a(39),zt=a.n(kt),Ot=a(40),Pt=a.n(Ot),Ut=a(41),At=a.n(Ut),Yt=a(42),Rt=a.n(Yt),Qt=a(43),Vt=a.n(Qt),_t=a(7),Wt=a.n(_t);const Gt=R()(Pt.a)`
  && {
    position: absolute;
  }
`;class Bt extends k.PureComponent{render(){var e=this.props;const t=e.hidePrivacyPolicy,a=e.privacyPolicyVisible,n=e.privacyPolicy,i=e.parentRef;return Object(k.createElement)(Gt,{open:a,onClose:t,"aria-labelledby":'privacy-policy',container:i,scroll:'paper'},Object(k.createElement)(zt.a,null,'Privacy Statement'),Object(k.createElement)(Rt.a,null,Object(k.createElement)(Vt.a,null,n)),Object(k.createElement)(At.a,null,Object(k.createElement)(Wt.a,{onClick:t,color:'primary'},'Close')))}}var Ht=Object(O.connect)((e)=>({privacyPolicyVisible:e.config.privacyPolicyVisible,privacyPolicy:e.config.privacyPolicy}),{hidePrivacyPolicy:function(){return{type:Ae}}})(Bt),Jt=a(44),Ft=a.n(Jt),Zt=a(45),Kt=a.n(Zt),Xt=a(46),qt=a.n(Xt),$t=a(17),ea=a.n($t),ta=a(9),aa=a.n(ta),na=a(47),ia=a.n(na);const oa=R.a.div`
  text-align: center;
  width: 42px;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`,ra=R.a.div`
  animation: dot-keyframes 1s infinite ease-in-out;
  background-color: ${ia.a[900]};
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
`;class sa extends k.PureComponent{render(){return Object(k.createElement)(oa,null,Object(k.createElement)(ra,null),Object(k.createElement)(ra,null),Object(k.createElement)(ra,null))}}const la=R.a.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 15px 16px 15px 16px;
  height: min-content;
  align-items: ${(e)=>'user'===e.entity?'flex-end':'flex-start'};
  scroll-margin: 15px;
`,ca=R.a.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${(e)=>'user'===e.entity?'flex-end':'flex-start'};
`,da=R.a.div`
  && {
    background: ${Z.a[400]};
    border-top-right-radius: 10px;
    border-top-left-radius: 1px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 12px;
  }
`,ua=R.a.div`
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
`,ma=R()(mt.a)`
  && {
    color: ${Z.a[500]};
    margin-top: 6px;
    padding-left: 5px;
    padding-right: 2px;
  }
`;class pa extends k.PureComponent{render(){var e=this.props;const t=e.message,a=e.entity,n=e.isLoading,i=e.timestamp,o=e.currentTime,r=e.theme,s=e.showTimestamp,l=e.error,c=e.className;console.log('Rendering Message');const d=Object(me.parse)(i,Je,new Date(o)),u=Object(me.isSameDay)(new Date,d),m=Object(me.isSameDay)(d,Object(me.subDays)(new Date,1));let p=null;p=u?`Today ${Object(me.format)(d,'h:mm aa')}`:m?`Yesterday ${Object(me.format)(d,'h:mm aa')}`:Object(me.format)(d,'MMMM dd, yyyy h:mm aa');let y;t&&''!==t[0]?y=t:(console.error('Message.js, class Message, render(), this.props: ',this.props),y=['Oops! Something happened with the connection. Please try again.']);let M=Object(k.createElement)(sa,null);n&&l&&(M=l);const g='user'===a?Object(k.createElement)(ua,{elevation:1,theme:r},t):Object(k.createElement)(da,{elevation:1},n?M:Object(k.createElement)(ea.a,{options:{forceBlock:!0,overrides:{h6:{component:mt.a,props:{variant:'h6'}},p:{component:mt.a,props:{variant:'body1'}},a:{component:aa.a}}}},y[0]));return Object(k.createElement)(la,{entity:a,className:c},Object(k.createElement)(ca,{entity:a},g),s?Object(k.createElement)(ma,{variant:'caption'},p):null)}}var ya=Object(K.withTheme)()(Object(O.connect)((e)=>({currentTime:e.conversation.currentTime,error:e.error}))(pa)),Ma=a(10),ga=a.n(Ma),La=a(18),Na=a.n(La),Ta=a(8),Ea=a.n(Ta),ja=a(48),fa=a.n(ja);const xa=R()(ga.a)`
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
`,Ia=R()(fa.a)`
  && {
    height: ${(e)=>e.image&&''!==e.image?'200px':'0px'};
    background-size: cover;
    background-position: center center;
  }
`;class wa extends k.PureComponent{render(){var e=this.props.data;const t=e.title,a=e.subtitle,n=e.imageUrl,i=e.buttons,o=e.className;return Object(k.createElement)(xa,{className:o},n?Object(k.createElement)(Ia,{image:encodeURI(n),title:''}):null,Object(k.createElement)(Ea.a,null,Object(k.createElement)(mt.a,{gutterBottom:!0,variant:'h6'},t),Object(k.createElement)(ea.a,{options:{forceBlock:!0,overrides:{h6:{component:mt.a,props:{variant:'h6'}},p:{component:mt.a,props:{variant:'body1'}},a:{component:aa.a}}}},a)),Object(k.createElement)(Na.a,null,i.map((e,t)=>{const a=`card-${t}${Object(me.format)(new Date,Je)}`;return Object(k.createElement)(Wt.a,{href:e.postback,target:'_blank',size:'small',color:'primary',key:a},e.text)})))}}var Ca=Object(O.connect)((e)=>({inputValue:e.userInput}))(wa),ha=a(49),ba=a.n(ha),Da=a(50),va=a.n(Da),Sa=a(51),ka=a.n(Sa),za=a(52),Oa=a.n(za),Pa=a(53),Ua=a.n(Pa),Aa=a(54),Ya=a.n(Aa),Ra=a(55),Qa=a.n(Ra),Va=a(56),_a=a.n(Va);const Wa=R()(ga.a)`
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
`,Ba=R()(Ea.a)`
  &&& {
    padding-top: 0;
    padding-bottom: 0;
  }
`,Ha=R()(ka.a)`
  td {
    padding: 4px 0px 4px 0px;
  }
  tr:last-of-type {
    td {
      border-bottom: none;
    }
  }
`,Ja=R()(Oa.a)`
  && {
    width: 70%;
    padding: 4px 0px 4px 0px;
  }
`,Fa=R()(Oa.a)`
  &&& {
    width: 20%;
    padding-right: 0;
    text-align: right;
  }
`;var Za=Object(O.connect)((e)=>({googleMapsKey:e.config.googleMapsKey}))(function(e){const t=e.data,a=e.googleMapsKey,n=e.className,i='230px',o={width:30,height:30},r=`https://maps.googleapis.com/maps/api/js?key=${a}&v=3`,s=(e)=>{const t=`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${e.placeId}`;window.open(t,'_blank')},l=Object(Aa.withScriptjs)(Object(Aa.withGoogleMap)(()=>Object(k.createElement)(Aa.GoogleMap,{defaultZoom:8,defaultCenter:t.nearestLocations[0],defaultOptions:{zoomControl:!0,mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1}},t.locations.map((e,t)=>Object(k.createElement)(Aa.Marker,{key:t,position:{lat:e.lat,lng:e.lng},icon:{url:Qa.a,scaledSize:o},onClick:()=>s(e)})),Object(k.createElement)(Aa.Marker,{position:{lat:t.currentGeocode.lat,lng:t.currentGeocode.lng},icon:{url:_a.a,scaledSize:o}}))));return Object(k.createElement)(Wa,{className:n},Object(k.createElement)(ba.a,{title:'Office Locations'}),Object(k.createElement)(Ba,null,Object(k.createElement)(l,{googleMapURL:r,loadingElement:Object(k.createElement)('div',{style:{height:`${i}`}}),containerElement:Object(k.createElement)('div',{style:{height:`${i}`}}),mapElement:Object(k.createElement)('div',{style:{height:'100%'}})}),Object(k.createElement)(Ga,null,Object(k.createElement)(va.a,{padding:'dense'},Object(k.createElement)(Ha,null,t.nearestLocations.map((e,t)=>Object(k.createElement)(Ua.a,{key:t},Object(k.createElement)(Ja,{padding:'dense'},Object(k.createElement)(mt.a,null,Object(k.createElement)(aa.a,{href:`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${e.placeId}`,target:'blank'},e.street,', ',e.city))),Object(k.createElement)(Fa,{padding:'dense'},e.distance))))))))}),Ka=a(57),Xa=a.n(Ka),qa=a(58),$a=a.n(qa),en=a(59),tn=a.n(en),an=a(60),nn=a.n(an),on=a(19),rn=a.n(on),sn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const ln=R.a.div`
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 15px;
  padding-top: 13px;
`;class cn extends k.PureComponent{constructor(){super(),this.state={feedbackComment:''}}render(){var e=this.props;const t=e.feedbackInputs,a=e.feedbackUrl,n=e.saveFeedbackInput,i=e.setFeedbackSubmitted,o=e.sendFeedback,r=e.session,s=e.outputContexts,l=(e)=>(t)=>{const a={value:e,checked:t.target.checked};n(a)},c=(e)=>e.filter((e)=>e.checked?e.value:null).map((e)=>e.value),d=(e)=>{fetch(a,{method:'POST',body:JSON.stringify(e),headers:{"Content-Type":'application/json'}})};return Object(k.createElement)(z.a.Fragment,null,Object(k.createElement)(Ea.a,null,Object(k.createElement)(mt.a,{gutterBottom:!0,variant:'h6'},t.wasHelpful?'Why was Gen helpful?':'Why was Gen not helpful?'),Object(k.createElement)(Xa.a,{component:'fieldset'},Object(k.createElement)($a.a,null,t.feedbackList?t.feedbackList.map((e)=>Object(k.createElement)(tn.a,{key:e.value,control:Object(k.createElement)(nn.a,{checked:e.checked,onChange:l(e.value),value:e.value}),label:e.value})):null,Object(k.createElement)(ln,null,'Add your comments'),Object(k.createElement)(rn.a,{placeholder:'Type something',variant:'outlined',multiline:!0,value:this.state.feedbackComment,onChange:(t)=>{const e=t.target.value;this.setState((t)=>sn({},t,{feedbackComment:e}))},InputProps:{classes:{inputMultiline:this.props.classes.inputMultiline}}})))),Object(k.createElement)(Na.a,null,Object(k.createElement)(Wt.a,{size:'small',color:'primary',onClick:()=>{const e={wasHelpful:t.wasHelpful,session:r,feedbackList:c(t.feedbackList),comment:this.state.feedbackComment,outputContexts:s};d(e),o('Feedback complete'),i(!0)}},'Submit')))}}var dn=Object(K.withStyles)(()=>({root:{},inputMultiline:{fontSize:'0.875rem',overflowY:'hidden'}}))(Object(O.connect)((e)=>({feedbackInputs:e.feedbackInput,feedbackUrl:e.config.feedbackUrl,outputContexts:e.conversation.outputContexts}),(e)=>({saveFeedbackInput:(t)=>{e(T(t))},setFeedbackSubmitted:()=>{e(f(!0))},sendFeedback:(t)=>{e(E(t))}}))(cn));const un=R()(ga.a)`
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
`;class mn extends k.PureComponent{componentDidMount(){var e=this.props;const t=e.setFeedbackOptions,a=e.feedbackData;t(a)}render(){var e=this.props;const t=e.session,a=e.feedbackInputs,n=e.className;return Object(k.createElement)(un,{className:n},a.submitted?Object(k.createElement)(Ea.a,null,'Thank you. Your feedback is important to us and will help improve Gen.'):Object(k.createElement)(dn,{session:t}))}}var pn=Object(O.connect)((e)=>({feedbackInputs:e.feedbackInput}),(e)=>({setFeedbackOptions:(t)=>{e(j(t))}}))(mn);const yn={giant:1170,desktop:992,tablet:768,phone:620},Mn=Object.keys(yn).reduce((e,t)=>{const a=yn[t]/16;return e[t]=(...e)=>Y.css`
    @media (max-width: ${a}em) {
      ${Object(Y.css)(...e)};
    }
  `,e},{});var gn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Ln=R.a.div`
  display: flex;
  flex-direction: column;
  /* Vertically flips the container element to achieve flex-direction:column-reverse effect */
  transform: scale(1, -1);
  overflow: auto;
  ${Mn.tablet`
    flex-direction: column-reverse;
    overflow: auto;
    transform: none;
  `};
`,Nn=R.a.div`
  background: ${Z.a[100]};
  z-index: 4;
  grid-area: chatwindow;
  margin-bottom: 1px;
  margin-top: 8px;

  /* Vertically flips the content element so that the messages won't be upside down */
  transform: scale(1, -1);

  ${Mn.tablet`
   transform: none;
  `};
`;class Tn extends k.PureComponent{constructor(e){super(e),Object.defineProperty(this,'findIndexFirstElementInLastResponse',{enumerable:!0,writable:!0,value:(e)=>{let t=0,a=!1;return Object(Xt.forEachRight)(e,(e,n)=>{'bot'===e.entity?!a&&(t=n):a=!0}),t}}),Object.defineProperty(this,'parseMessages',{enumerable:!0,writable:!0,value:()=>{const e=this.props.messages,t=[];return e.forEach((e)=>{const a={systemTime:e.systemTime,entity:e.entity,session:e.messageSession};if(e.loading){const n=$e()();a.key=n;const i=Kt()(e,a);t.push(i)}else if('bot'===e.entity)e.responses.forEach((e)=>{if('text'===e.type||'card'===e.type||'payload'===e.type){const n=$e()();a.key=n;const i=Kt()(e,a);t.push(i)}});else if('user'===e.entity){const n=$e()();a.key=n;const i=Kt()(e,a);t.push(i)}}),t}}),Object.defineProperty(this,'createMessageElements',{enumerable:!0,writable:!0,value:()=>{const e=this.parseMessages(),t=[];let a=e;1<e.length&&(a=Object(Xt.sortBy)(e,(e)=>new Date(e.systemTime)));const n=this.findIndexFirstElementInLastResponse(a);a.forEach((e,o)=>{const i=o===n;let r=!1;o===a.length-1&&(r=!0),e.loading?t.push(I(e)):'user'===e.entity?t.push(x(e)):'bot'===e.entity&&'text'===e.type?t.push(C(e,r,i)):'bot'===e.entity&&'card'===e.type?t.push(h(e,i)):'bot'===e.entity&&'payload'===e.type&&e.payload.mapPayload?t.push(b(e,i)):'bot'===e.entity&&'payload'===e.type&&e.payload.feedback?t.push(w(e,i)):(console.error('ChatWindow.js, createMessageElements(): sortedNewMessages, msg, i',a,e,o),t.push(C({text:['Something went wrong.']})))}),this.setState((e)=>gn({},e,{messageElements:t}),()=>{document.getElementsByClassName('scrollIntoView')[0]&&document.getElementsByClassName('scrollIntoView')[0].scrollIntoView(!1)})}}),Object.defineProperty(this,'handleWheel',{enumerable:!0,writable:!0,value:(t)=>{t.deltaY&&(t.preventDefault(),t.currentTarget.scrollTop-=2*(parseFloat(getComputedStyle(t.currentTarget).getPropertyValue('font-size'))*(0>t.deltaY?-1:1)))}}),Object.defineProperty(this,'componentRef',{enumerable:!0,writable:!0,value:z.a.createRef(null)}),this.messages=[],this.state={messageElements:[]},this.componentRef=z.a.createRef()}componentDidUpdate(){const e=this.parseMessages();Ft()(this.messages,e)||(this.messages=e,this.createMessageElements()),this.componentRef.current&&this.componentRef.current.addEventListener('wheel',this.handleWheel)}render(){const e=this.state.messageElements;return Object(k.createElement)(Ln,{ref:this.componentRef},Object(k.createElement)(Nn,{elevation:1,square:!0},e))}}var En=Object(O.connect)((e)=>({messages:e.conversation.messages,buttonBarVisible:e.buttonBar.visible,error:e.error}))(Tn),jn=a(61),fn=a.n(jn);const xn=R.a.div`
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
`,In=R()(rn.a)`
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
`,wn=R()(Et.a)`
  && {
    padding: 16px 12px 16px 4px;
    &:hover {
      background: transparent;
    }
  }
`;class Cn extends k.PureComponent{constructor(){super(),this.handleKeyPress=this.handleKeyPress.bind(this)}handleKeyPress(t){13===t.charCode&&(this.props.submitUserInput(),t.preventDefault())}render(){var e=this.props;const t=e.saveUserInput,a=e.inputValue,n=e.shouldDisable,i=a.value,o=`${a.charLength}/255`,r=a.maxExceeded;let s=null;return s=r?`Exceeded character limit: ${o}`:null,Object(k.createElement)(xn,{visible:n},Object(k.createElement)(In,{multiline:!0,rowsMax:'4',fullWidth:!0,InputProps:{disableUnderline:!0},placeholder:'Send a message',helperText:s,FormHelperTextProps:{style:{color:'#cd5c5c',margin:0}},onChange:t,value:i,onKeyPress:this.handleKeyPress}),Object(k.createElement)(wn,{onClick:this.props.submitUserInput,"aria-label":'Send',color:'primary',disabled:r,disableRipple:!0},Object(k.createElement)(fn.a,null)))}}var hn=Object(O.connect)((e)=>({inputValue:e.userInput,shouldDisable:e.conversation.disableInput}),(t)=>({saveUserInput:(a)=>{t(v(a.target.value))},submitUserInput:()=>{t(S())}}))(Cn),bn=a(62),Dn=a.n(bn);const vn=R.a.div`
  grid-area: buttonbar;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  padding: ${(e)=>e.visible?'4px 4px 16px 16px':'0 16px'};
  background: ${Z.a[300]};
  border-top: ${(e)=>e.visible?'1px solid rgba(0, 0, 0, 0.2)':'none'};
  overflow-y: auto;
`,Sn=R()(Wt.a)`
  && {
    margin-right: 12px;
    margin-top: 12px;
    display: ${(e)=>'true'===e.visible?'block':'none'};
  }
`;class kn extends k.PureComponent{render(){var e=this.props;const t=e.visible,a=e.messages,n=e.sendQuickReply,i=Dn()(a,(e)=>{const t=Ze()(e.responses,['type','suggestion']);return t}),o=[];if(i){const e=i.responses.filter((e)=>'suggestion'===e.type);for(const a of e)for(const e of a.suggestions)o.push({label:e,id:i.messageId,visible:t})}return Object(k.createElement)(vn,{visible:t},o.map((e,t)=>Object(k.createElement)(Sn,{size:'small',variant:'outlined',color:'secondary',key:`${e.id}-btn${t}`,visible:e.visible.toString(),onClick:()=>n(e.label)},e.label)))}}var zn=Object(O.connect)((e)=>({visible:e.buttonBar.visible,messages:e.conversation.messages}),(e)=>({sendQuickReply:(t)=>{e(p(t))}}))(kn);const On=R()(dt.a)`
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

    ${Mn.phone`
    width: ${(e)=>e.visible?'calc(100% - 20px)':'0'};
    height: ${(e)=>e.visible?'calc(100% - 96px)':'0'};
    right: 10px;
    max-width: none;
    max-height: none;
  `};
  }
`,Pn=R.a.div`
  && {
    width: 100%;
    height: 100%;
    transform-origin: bottom right;
    pointer-events: auto;
    background: ${Z.a[100]};
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
`;class Un extends k.PureComponent{constructor(e){super(e),this.containerRef=z.a.createRef()}render(){var e=this.props;const t=e.windowVisible,a=e.fullscreen;return Object(k.createElement)(On,{elevation:4,fullscreen:a?1:0,visible:t?1:0},Object(k.createElement)(Pn,{ref:this.containerRef,className:'mui-fixed'},Object(k.createElement)(St,null),Object(k.createElement)(Ht,{parentRef:this.containerRef.current}),Object(k.createElement)(En,null),Object(k.createElement)(zn,null),Object(k.createElement)(hn,null)))}}var An=Object(O.connect)((e)=>({windowVisible:e.config.windowVisible,fullscreen:e.config.fullscreen}))(Un),Yn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Rn={avatar:null,title:'Chat Window',windowVisible:!1,fullscreen:!1,privacyPolicyVisible:!1,googleMapsKey:'',centerCoordinates:'',activationText:'',privacyPolicy:'Please do not enter any personally identifiable information such as SSN, Date of Birth, Case Number or last name.',feedbackUrl:''};var Qn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Vn={client:null,clientName:null,messages:[],webhookPayload:null,disableInput:!1,lastUpdateTime:Object(me.format)(new Date,Je),currentTime:Object(me.format)(new Date,Je),headerTime:'Now',timer:null,conversationStarted:!1};var _n=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Wn={visible:!1,buttons:[]};const Gn={value:'',charLength:0,maxExceeded:!1};var Bn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Hn={submitted:!1,wasHelpful:null,feedbackList:null};const Jn='';const Fn=Object(U.combineReducers)({config:function(e=Rn,t){switch(t.type){case Ae:return Yn({},e,{privacyPolicyVisible:!1});case Ue:return Yn({},e,{privacyPolicyVisible:!0});case Ye:return Yn({},e,{privacyPolicy:t.policyText});case Re:return Yn({},e,{googleMapsKey:t.googleMapsKey});case Qe:return Yn({},e,{centerCoordinates:t.centerCoordinates});case Ve:return Yn({},e,{activationText:t.activationText});case Me:return Yn({},e,{avatar:t.avatar});case ye:return Yn({},e,{title:t.title});case he:return Yn({},e,{windowVisible:!0});case be:return Yn({},e,{windowVisible:!1});case De:return Yn({},e,{fullscreen:!0});case ve:return Yn({},e,{fullscreen:!1});case We:return Yn({},e,{feedbackUrl:t.feedbackUrl});default:return e;}},conversation:function(e=Vn,t){const a=[...e.messages,t.response].sort((e,t)=>{const a=Object(me.parse)(e.systemTime,Je,new Date(e.systemTime)),n=Object(me.parse)(t.systemTime,Je,new Date(t.systemTime)),i=Object(me.differenceInMilliseconds)(n,a);return i});switch(t.type){case ge:return Qn({},e,{client:t.client,clientName:t.clientName});case fe:return Qn({},e,{headerTime:t.headerTime,currentTime:t.currentTime});case je:return Qn({},e,{timer:t.timer});case Ee:return Qn({},e,{messages:[...e.messages,{loading:!0,entity:'bot',systemTime:Object(me.format)(new Date,Je)}]});case Le:return console.log('SAVE_RESPONSE, action.newConversationArray: ',t.newConversationArray),t.newConversationArray&&1===t.newConversationArray.length&&''===t.newConversationArray[0]&&console.log('conversationReducer, SAVE_RESPONSE, action.newConversationArray: ',t.newConversationArray),Qn({},e,{lastUpdateTime:Object(me.format)(new Date,Je),headerTime:'Now',messages:t.newConversationArray});case Te:return console.log('SAVE_USER_RESPONSE, newMessages: ',a),a&&1===a.length&&''===a[0]&&console.log('conversationReducer, SAVE_USER_RESPONSE, newMessages: ',a),Qn({},e,{lastUpdateTime:Object(me.format)(new Date,Je),headerTime:'Now',messages:a});case Se:return Qn({},e,{webhookPayload:t.payload});case ze:return Qn({},e,{disableInput:!1});case ke:return Qn({},e,{disableInput:!0});case Oe:return Qn({},e,{conversationStarted:!0});case Pe:return Qn({},e,{conversationStarted:!1});case He:return Qn({},e,{outputContexts:t.rawOutputContexts});default:return e;}},buttonBar:function(e=Wn,t){switch(t.type){case xe:return _n({},e,{visible:!0});case Ie:return _n({},e,{visible:!1});default:return e;}},userInput:function(e=Gn,t){switch(t.type){case Ne:return t.userInput;default:return e;}},feedbackInput:function(e=Hn,t){switch(t.type){case _e:return Bn({},e,{feedbackList:e.feedbackList.map((e)=>e.value===t.value.value?Bn({},e,{checked:t.value.checked}):e)});case Be:return Bn({},e,{wasHelpful:t.value.helpful,feedbackList:t.value.options.map((e)=>Bn({},e,{checked:!1}))});case Ge:return Bn({},e,{submitted:!0});default:return e;}},error:function(e=Jn,t){switch(t.type){case we:return t.error;case Ce:return Jn;default:return e;}}});V.a.load({google:{families:['Roboto:300,400,500','Product Sans:400']}});const Zn=R.a.div`
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
      background-color: ${Z.a[600]};
      -webkit-border-radius: 8px;
      border-radius: 8px;
      border: 2px solid ${Z.a[100]};
    }
    & ::-webkit-scrollbar {
      background-color: ${Z.a[100]};
      width: 8px;
    }
  }
`,Kn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||U.compose;class Xn extends k.PureComponent{constructor(e){super(e),this.store=Object(U.createStore)(Fn,Kn(Object(U.applyMiddleware)(B.a))),this.currentValue=null,this.theme=n(this.props.primaryColor,this.props.secondaryColor,this.props.headerColor)}componentDidMount(){this.store.dispatch(N(this.props,this.theme)),this.unsubscribe=this.store.subscribe(()=>this.handleChange(this.store))}componentWillUnmount(){this.unsubscribe()}select(e){return e.conversation.webhookPayload}handleChange(e){const t=this.currentValue;this.currentValue=this.select(e.getState()),t!==this.currentValue&&this.props.onPayload&&this.props.onPayload(this.currentValue)}render(){return Object(k.createElement)(O.Provider,{store:this.store},Object(k.createElement)(W.a,{theme:this.theme},Object(k.createElement)(Zn,null,Object(k.createElement)(An,null),Object(k.createElement)(lt,null))))}}t['default']=Xn},function(e){e.exports=require('webfontloader')},function(e){e.exports=require('@material-ui/core/styles/MuiThemeProvider')},function(e){e.exports=require('redux-thunk')},function(e){e.exports=require('whatwg-fetch')},function(e){e.exports=require('@material-ui/core/colors')},function(e){e.exports=require('validator/lib/isHexColor')},function(e){e.exports=require('@material-ui/core/Fab')},function(e){e.exports=require('@material-ui/icons/Chat')},function(e){e.exports=require('@material-ui/core/Zoom')},function(e){e.exports=require('lodash/omit')},function(e){e.exports='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNTkyIDE3MjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1OTIgMTcyODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGQkRCMzI7c3Ryb2tlOiNGQURBMzI7fQoJLnN0MXtmaWxsOiNENDczOTQ7fQoJLnN0MntzdHJva2U6I0ZBREEzMjt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE4MTQuMjMsMTMzNmMzMC4yNC00Mi45LDU1LjQ5LTg4LjgsNzUuNDItMTM2LjgyYzM1LjY5LTg1Ljk5LDU0LjM1LTE3OC43NSw1NC4yLTI3My4wOQoJCWMtMC4yOC0zOTMuNTktMzE5LjI0LTcxMi42LTcxMi44My03MTIuOTRjLTE1OS4wNiwwLTMwNS45NCw1Mi4wOS00MjQuNTMsMTQwLjE1QzY2OS40Myw0ODAuNDEsNTgzLjY1LDY2Mi4wNSw1ODMuNjUsODYzLjcyCgkJYzAsMzg0LjM5LDMxMS42MSw2OTUuOTksNjk1Ljk5LDY5NS45OWMxMTAuOTcsMC4wOSwyMjAuMzQtMjYuMzksMzE4Ljk4LTc3LjIyYzQuMjgtMi4yMSw4Ljc5LTMuOTQsMTMuNDYtNS4xN2wyMi4xNS01LjgyCgkJYzE3LjgxLTQuNjgsMzYuNzYtMS42Nyw1Mi4yNCw4LjNsMTEuODgsNy42NWMyMi43NiwxMC4zNCw0Ni45MSwxNy4yOSw3MS42OSwyMC42MmMyMC4yNSwzLjA5LDQwLjU4LDUuNTIsNjAuOTgsNy4zCgkJYzEwLjA4LDAuODgsMjAuMTcsMS42LDMwLjI4LDIuMTdjMjYuMjIsMS4yNyw2MC43MSwwLjE3LDg2LjYxLTIuODVjLTMyLjQtMjIuNy04Ny42Ny03My43My0xMDkuNjEtMTEyLjYybC0xOC4wMi0zNy4zNgoJCUMxODE2LjEsMTM1NS42NSwxODE0LjA2LDEzNDUuODQsMTgxNC4yMywxMzM2eiIvPgoJPHBhdGggZD0iTTExMTUuNDYsNTk1LjQ5YzIuMzMtMjIuNjgtNC42NS00MS4zNi0yNC41Ny01My41NmMtNDIuNDUtMjMuMTUtOTcuMjEsMC42Ny05MS43Nyw1My41NmMwLDI2LjU5LDAsNTMuMTgsMCw3OS43OAoJCWMtNS40NCw1Mi44OSw0OS4zMSw3Ni43MSw5MS43Nyw1My41NmMxOS45Mi0xMi4yLDI2LjkxLTMwLjg4LDI0LjU3LTUzLjU2QzExMTUuNDYsNjQ4LjY3LDExMTUuNDYsNjIyLjA4LDExMTUuNDYsNTk1LjQ5eiIvPgoJPHBhdGggZD0iTTE1NjEuMjUsNTk1LjQ5YzIuMzMtMjIuNjgtNC42NS00MS4zNi0yNC41Ny01My41NmMtNDIuNDUtMjMuMTUtOTcuMjEsMC42Ny05MS43Nyw1My41NmMwLDI2LjU5LDAsNTMuMTgsMCw3OS43OAoJCWMtNS40NCw1Mi44OSw0OS4zMSw3Ni43MSw5MS43Nyw1My41NmMxOS45Mi0xMi4yLDI2LjkxLTMwLjg4LDI0LjU3LTUzLjU2QzE1NjEuMjUsNjQ4LjY3LDE1NjEuMjUsNjIyLjA4LDE1NjEuMjUsNTk1LjQ5eiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTEyMDguOTksOTYzLjE2YzIwLjkzLDEwLjI2LDQ0LjQ2LDE2LjAzLDY5LjM0LDE2LjAzYzI0Ljg4LDAsNDguNDItNS43Niw2OS4zNC0xNi4wMwoJCWMtNy45NS0zMC44OC0zNS45OC01My42OS02OS4zNC01My42OVMxMjE2Ljk0LDkzMi4yOCwxMjA4Ljk5LDk2My4xNnoiLz4KCTxwYXRoIGQ9Ik0xMjA4Ljk5LDk2My4xNmM3Ljk1LTMwLjg4LDM1Ljk4LTUzLjY5LDY5LjM0LTUzLjY5czYxLjM5LDIyLjgxLDY5LjM0LDUzLjY5YzUyLjMxLTI1LjY2LDg4LjMyLTc5LjQ0LDg4LjMzLTE0MS42MwoJCWgtMzE1LjM0QzExMjAuNjcsODgzLjcyLDExNTYuNjgsOTM3LjUsMTIwOC45OSw5NjMuMTZ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTgwNi4zOCw0MDYuNjNjMTA2LjY3LDEyMi4yOSwxNzEuMzIsMjgyLjE5LDE3MS40NCw0NTcuMTljMC4yNCwxNTQuNDUtNTEuMTQsMzA0LjU1LTE0NS45OSw0MjYuNDUKCQljLTYuNyw5LjM5LTExLjMzLDIwLjA5LTEzLjU4LDMxLjRjLTMuNDksMTQuNC0yLDI5LjU2LDQuMjEsNDMuMDJsMTguMDIsMzcuMzZjMjEuOTQsMzguODksNzcuMjEsODkuOTIsMTA5LjYxLDExMi42MgoJCWMtMjUuOSwzLjAyLTYwLjM5LDQuMTItODYuNjEsMi44NWMtMzAuNTUtMS43LTYxLjAxLTQuODYtOTEuMjYtOS40N2MtMjQuNzgtMy4zMy00OC45My0xMC4yOC03MS42OS0yMC42MmwtMTEuODgtNy42NQoJCWMtMTUuNDgtOS45Ni0zNC40NC0xMi45Ny01Mi4yNC04LjNsLTIyLjE1LDUuODJjLTQuNjYsMS4yMi05LjE3LDIuOTYtMTMuNDYsNS4xN2MtOTguNjQsNTAuODMtMjA4LjAyLDc3LjMxLTMxOC45OCw3Ny4yMgoJCWMtMzg0LjM5LDAtNjk1Ljk5LTMxMS42MS02OTUuOTktNjk1Ljk5czMxMS42MS02OTUuOTksNjk1Ljk5LTY5NS45OWM3MC4zNywwLjA2LDEzOC4zLDEwLjU1LDIwMi4zMywzMC4wMgoJCWM1NS4xMyw2LjQxLDUzLjI5LTUzLjcsMjQuNDYtNjEuMzljLTcxLjY0LTIyLjMxLTE0Ny44MS0zNC4zMy0yMjYuNzktMzQuMzNjLTQyMC42NywwLTc2MS42OSwzNDEuMDItNzYxLjY5LDc2MS42OQoJCXMzNDEuMDIsNzYxLjY5LDc2MS42OSw3NjEuNjljMTI1Ljg0LDAsMjQ0LjU0LTMwLjUxLDM0OS4xMy04NC41NWM4LjQzLTIuNjIsMTUuMy00LjYzLDIyLjE1LTUuODJjNC45NywzLjY1LDEwLjIxLDcsMTUuNjcsMTAuMDgKCQljNzEuNDQsNDAuMjYsMzIyLjk0LDYxLjc2LDM4OS42My0wLjQyYzE5LjY4LTEyLjc3LDI1LjAxLTMwLjkzLTE3LjczLTU1LjY3Yy01Ljc4LTMuMzQtMTIuMzktNi43MS0xOS44Ni0xMC4wNwoJCWMtMjcuODYtMTIuNTMtMjkuMDgtMTUuMjEtNTMuMDItMzQuNDljLTI0Ljc1LTE5Ljk0LTQ3LjE2LTQwLjU3LTcyLjI5LTc4LjMzYy00LTguNi04LjQ0LTE4LjItMTMuNDEtMjkuMDIKCQljMC40OS0yLjE0LDEuMDItNC4zMSwxLjU4LTYuNTJjMTAwLjE4LTEyOC45NSwxNTkuODQtMjkwLjk2LDE1OS44NC00NjYuOWMwLTE5Ni44Ni03NC42OC0zNzYuMjgtMTk3LjI2LTUxMS40NwoJCUMxODA5LjA1LDMyMC4yNCwxNzYwLjExLDM2MS45LDE4MDYuMzgsNDA2LjYzeiIvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTE3MTEuNTMsMjM0LjcxYy0xOS4yNC0xMy4xNy0zOS4xMS0yNS40Ny01OS41Ni0zNi44NmMtMzMuOS0xOC44OC01Ni44MSw0My45LTMzLjcsNTYuNwoJCWMxNy42NSw5Ljc4LDM0Ljg0LDIwLjMsNTEuNTEsMzEuNTJDMTcwMy4yOSwzMDguNjMsMTc0Ny43NywyNTkuNTIsMTcxMS41MywyMzQuNzF6Ii8+CjwvZz4KPC9zdmc+Cg=='},function(e){e.exports=require('@material-ui/core/Paper')},function(e){e.exports=require('@material-ui/icons/Fullscreen')},function(e){e.exports=require('@material-ui/icons/FullscreenExit')},function(e){e.exports=require('@material-ui/icons/Info')},function(e){e.exports=require('@material-ui/icons/Close')},function(e){e.exports=require('@material-ui/core/Tooltip')},function(e){e.exports=require('@material-ui/core/DialogTitle')},function(e){e.exports=require('@material-ui/core/Dialog')},function(e){e.exports=require('@material-ui/core/DialogActions')},function(e){e.exports=require('@material-ui/core/DialogContent')},function(e){e.exports=require('@material-ui/core/DialogContentText')},function(e){e.exports=require('lodash/isEqual')},function(e){e.exports=require('lodash/merge')},function(e){e.exports=require('lodash')},function(e){e.exports=require('@material-ui/core/colors/green')},function(e){e.exports=require('@material-ui/core/CardMedia')},function(e){e.exports=require('@material-ui/core/CardHeader')},function(e){e.exports=require('@material-ui/core/Table')},function(e){e.exports=require('@material-ui/core/TableBody')},function(e){e.exports=require('@material-ui/core/TableCell')},function(e){e.exports=require('@material-ui/core/TableRow')},function(e){e.exports=require('react-google-maps')},function(e){e.exports='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjRUUzODQwIiBkPSJNMTIgMkM4LjEzIDIgNSA1LjEzIDUgOWMwIDUuMjUgNyAxMyA3IDEzczctNy43NSA3LTEzYzAtMy44Ny0zLjEzLTctNy03em0wIDkuNWMtMS4zOCAwLTIuNS0xLjEyLTIuNS0yLjVzMS4xMi0yLjUgMi41LTIuNSAyLjUgMS4xMiAyLjUgMi41LTEuMTIgMi41LTIuNSAyLjV6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg=='},function(e){e.exports='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9ImIiPjx1c2UgeGxpbms6aHJlZj0iI2EiIG92ZXJmbG93PSJ2aXNpYmxlIi8+PC9jbGlwUGF0aD48cGF0aCBjbGlwLXBhdGg9InVybCgjYikiIGZpbGw9IiMyOTc5RkYiIGQ9Ik0xMiAyQzguMTQgMiA1IDUuMTQgNSA5YzAgNS4yNSA3IDEzIDcgMTNzNy03Ljc1IDctMTNjMC0zLjg2LTMuMTQtNy03LTd6bTAgMmMxLjEgMCAyIC45IDIgMiAwIDEuMTEtLjkgMi0yIDJzLTItLjg5LTItMmMwLTEuMS45LTIgMi0yem0wIDEwYy0xLjY3IDAtMy4xNC0uODUtNC0yLjE1LjAyLTEuMzIgMi42Ny0yLjA1IDQtMi4wNXMzLjk4LjczIDQgMi4wNWMtLjg2IDEuMy0yLjMzIDIuMTUtNCAyLjE1eiIvPjwvc3ZnPg=='},function(e){e.exports=require('@material-ui/core/FormControl')},function(e){e.exports=require('@material-ui/core/FormGroup')},function(e){e.exports=require('@material-ui/core/FormControlLabel')},function(e){e.exports=require('@material-ui/core/Checkbox')},function(e){e.exports=require('@material-ui/icons/Send')},function(e){e.exports=require('lodash/findLast')}])});
//# sourceMappingURL=chatframe.js.map