(function(e,t){'object'==typeof exports&&'object'==typeof module?module.exports=t():'function'==typeof define&&define.amd?define('chatframe',[],t):'object'==typeof exports?exports.chatframe=t():e.chatframe=t()})('undefined'==typeof self?this:self,function(){return function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(n,'a',n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='./',t(t.s=20)}([function(e){e.exports=require('react')},function(e){e.exports=require('styled-components')},function(e){e.exports=require('react-redux')},function(e){e.exports=require('date-fns')},function(e){e.exports=require('@material-ui/core/colors/grey')},function(e){e.exports=require('@material-ui/core/styles')},function(e){e.exports=require('@material-ui/core/Typography')},function(e){e.exports=require('@material-ui/core/Button')},function(e){e.exports=require('uuid/v4')},function(e){e.exports=require('lodash')},function(e){e.exports=require('@material-ui/core/Link')},function(e){e.exports=require('@material-ui/core/Card')},function(e){e.exports=require('@material-ui/core/CardContent')},function(e){e.exports=require('redux')},function(e){e.exports=require('@material-ui/core/Avatar')},function(e){e.exports=require('lodash/get')},function(e){e.exports=require('@material-ui/core/IconButton')},function(e){e.exports=require('markdown-to-jsx')},function(e){e.exports=require('@material-ui/core/CardActions')},function(e){e.exports=require('@material-ui/core/TextField')},function(e,t,n){e.exports=n(21)},function(e,t,n){'use strict';function a(e='lightBlue',t='pink',n='lightBlue'){const a={palette:{error:ee.red,contrastThreshold:3,tonalOffset:0.2},typography:{useNextVariants:!0},overrides:{MuiFab:{root:{position:'absolute',bottom:48,right:48}}}};if(ae()(e))a.palette.primary={main:e};else if(ee[e])a.palette.primary=ee[e];else throw new Error(`${e} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);if(ae()(t))a.palette.secondary={main:t};else if(t&&ee[t])a.palette.secondary=ee[t];else throw new Error(`${t} is not a valid color. 
      Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);if(ae()(n))a.palette.header={main:n};else if(ee[n])a.palette.header=ee[n];else throw new Error(`${n} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);return Object(q.createMuiTheme)(a)}function i(e,t=1){const n=fetch(e).then((e)=>e.json()).catch((n)=>{if(1===t)throw n;setTimeout(()=>{i(e,t-1)},500)});return n}function o(e){return(t)=>{const n=new nt(e);t({type:Te,client:n,clientName:'dialogflow'})}}function s(e){return(t,n)=>{const a=n().conversation.messages,i=$e()(e.responses,['type','suggestion']);if(i?t({type:Ie}):t({type:we}),0===a.length)t({type:Ne,newConversationArray:[e]});else{const n=a.map((t)=>t.loading?e:t).sort((e,t)=>{const n=Object(ye.parse)(e.systemTime,Fe,new Date(e.systemTime)),a=Object(ye.parse)(t.systemTime,Fe,new Date(t.systemTime)),i=Object(ye.differenceInMilliseconds)(n,a);return i});t({type:Ne,newConversationArray:n})}}}function r(e){return(t)=>{function n(e){return'text'===e?'text':'card'===e?'card':'quickReplies'===e?'suggestion':'image'===e?'image':'payload'===e?'payload':'text'}const a=pe()(e,'queryResult.outputContexts',[]);t({type:Ze,rawOutputContexts:a});const i=pe()(e,'queryResult.fulfillmentMessages',[]);let o=[],r=!1;try{o=i.map((e)=>{const a=n(e.message),i=pe()(e,'quickReplies.quickReplies',[]),o=pe()(e,'text.text',null),s={title:pe()(e,'card.title',''),subtitle:pe()(e,'card.subtitle',''),imageUrl:pe()(e,'card.imageUri',''),buttons:pe()(e,'card.buttons',[])},l={imageUri:pe()(e,'image.imageUri',''),accessibilityText:pe()(e,'image.accessibilityText','')},c={};if('payload'===a){const n=pe()(e,'payload.fields',{});for(const e of Object.entries(n)){var d=at(e,2);const t=d[0],n=d[1];if('stringValue'===n.kind)try{c[t]=JSON.parse(n.stringValue)}catch(e){c[t]=n.stringValue}else if(n.kind&&'stringValue'!==n.kind)throw new Error('Use stringValue to send payloads');else return c}if('disableInput'in c){if(1<Object.keys(c).length){const e=tt()(c,['disableInput']);t({type:ze,modifiedPayload:e})}r=!0,t({type:Oe})}else t({type:ze,payload:c})}return'text'===a?{type:a,text:o}:'image'===a?{type:a,image:l}:'suggestion'===a?{type:a,suggestions:i}:'card'===a?{type:a,card:s}:'payload'===a?{type:a,payload:c}:{type:a,text:o}})}catch(e){console.log(e)}let l;r?l=o.filter((e)=>{const t=pe()(e,'payload.disableInput',!1);return!t}):(t({type:Pe}),l=o);const c=Object(ye.format)(new Date,Fe),d={entity:'bot',loading:!1,messageId:e.responseId,key:Xe()(),messageSession:e.session,language:e.queryResult.languageCode,systemTime:c,responses:l};t(s(d))}}function l(e){return(t,n)=>{const a=n().conversation.client;t({type:je}),a.textRequest(e).then((e)=>{e?(t(r(e)),t({type:he})):t({type:Ce,error:'No response received from chat provider. Please try again.'})}).catch((e)=>{throw new Error(e)}).catch((e)=>{console.log(e),t({type:Ce,error:'Unable to connect to the chat provider. Please try again.'})})}}function c(e){return(t,n)=>{const a=n().conversation.client;t({type:je}),a.eventRequest(e).then((e)=>{e?(t(r(e)),t({type:he})):(t({type:Ce,error:'No response received from chat provider. Please try again.'}),t({type:Ae}))}).catch((e)=>{throw new Error(e)}).catch((e)=>{console.log(e),t({type:Ce,error:'Unable to connect to the chat provider. Please try again.'})})}}function d(e,t){return(n)=>{try{if(!e)throw new Error('No conversation provider selected.');if('dialogflow'===e.toLowerCase())n(o(t));else throw n({type:Ce,error:`Unable to connect to ${e}`}),new Error(`${e} is not a recognized conversation provider.`)}catch(e){console.log(e)}}}function u(e){return(t,n)=>{const a=n().conversation.clientName;try{if('dialogflow'===a.toLowerCase())t(l(e));else throw new Error(`${a} is not a recognized conversation provider.`)}catch(e){console.log(e),t({type:Ce,error:`Unable to connect to ${a}`})}}}function m(e){return(t,n)=>{const a=n().conversation.messages.length,i=Object(ye.format)(new Date,Fe),o={entity:'user',messageId:`usermessage-${a}`,systemTime:i,text:e};t({type:fe,response:o}),t({type:we}),t(u(e))}}function p(e){return(t)=>{t(m(e))}}function y(){return(e,t)=>{const n=t().conversation.conversationStarted;e({type:ve}),n||(e(c('Welcome')),e({type:Ue}))}}function M(){return{type:Ye}}function g(){return{type:De}}function L(){return{type:Se}}function T(){return{type:ke}}function N(){return(e,t)=>{const n=t().conversation.lastUpdateTime,a=new Date,i=Object(ye.parse)(n,Fe,new Date(n)),o=Object(ye.differenceInMinutes)(a,i),s=Object(ye.differenceInSeconds)(a,i);let r='Now';1<=o?r=`${o} min ago`:9<=s&&(r=`${s} sec ago`);const l=Object(ye.format)(a,Fe);e({type:be,headerTime:r,currentTime:l})}}function E(){return(e,t)=>{const n=t().conversation.timer;n&&clearInterval(n);const a=setInterval(()=>e(N()),10000);e({type:xe,newTimer:a}),e(N())}}function f(e){return(t)=>{const n=e.title,a=e.avatar,i=e.client,o=e.clientOptions,s=e.initialActive,r=e.fullscreen,l=e.policyText,u=e.mapConfig,m=e.activationText,p=e.feedbackUrl;let M=a;if(M||(M=ot.a),t({type:ge,title:n}),t({type:Le,avatar:M}),t(d(i,o)),t(E()),l&&''!==l&&t({type:Qe,policyText:l}),m&&''!==m&&t({type:_e,activationText:m}),p&&t({type:Ge,feedbackUrl:p}),u){const e=u.googleMapsKey,n=u.centerCoordinates,a=pe()(n,'lat',null),i=pe()(n,'lng',null);if(e&&''!==e&&t({type:Ve,googleMapsKey:e}),n)try{if('object'==typeof n&&null!==a&&null!==i)t({type:Be,centerCoordinates:n});else throw new Error('Please provide valid latitude and longitude coordinates, see README')}catch(e){console.log(e)}}!0===s?(t({type:Ue}),t(c('Welcome')),t(y())):t(g()),!0===r?t(L()):t(T())}}function j(e){return{type:We,value:e}}function x(e){return(t)=>{t(u(e))}}function b(e){return{type:Je,value:e}}function I(e){return Object(O.createElement)(Ln,{message:e.text,entity:e.entity,key:e.key,timestamp:e.systemTime,isLoading:!1})}function w(e){return Object(O.createElement)(Ln,{key:'loading',entity:'bot',timestamp:e.systemTime,isLoading:e.loading})}function C(e,t=!1){return Object(O.createElement)(La,{feedbackData:e.payload.feedback,session:e.session,entity:e.entity,key:e.key,isLoading:!1,timestamp:e.systemTime,className:t?'scrollIntoView':''})}function h(e,t,n=!1){return Object(O.createElement)(Ln,{message:e.text,entity:e.entity,key:e.key,isLoading:!1,timestamp:e.systemTime,showTimestamp:t,className:n?'scrollIntoView':''})}function v(e,t=!1){return Object(O.createElement)(vn,{data:e.card,timestamp:e.systemTime,key:e.key,className:t?'scrollIntoView':''})}function D(e,t=!1){return Object(O.createElement)(qn,{data:e.payload.mapPayload,timestamp:e.systemTime,key:e.key,className:t?'scrollIntoView':''})}function S(e){return!(256<e.length)}function k(e){const t={value:e,charLength:e.length||0,maxExceeded:255<e.length};return{type:Ee,userInput:t}}function z(){return(e,t)=>{var n=t();const a=n.userInput,i=a.value.trim();if(i&&''!==i){const t=S(a.value);t&&(e(m(a.value)),e(k('')))}}}Object.defineProperty(t,'__esModule',{value:!0});var O=n(0),P=n.n(O),U=n(2),A=n.n(U),Y=n(13),R=n.n(Y),Q=n(1),V=n.n(Q),B=n(22),_=n.n(B),W=n(23),G=n.n(W),H=n(24),J=n.n(H),Z=n(25),F=n.n(Z),K=n(4),X=n.n(K),q=n(5),$=n.n(q),ee=n(26),te=n.n(ee),ne=n(27),ae=n.n(ne),ie=n(28),oe=n.n(ie),se=n(29),re=n.n(se),le=n(30),ce=n.n(le),de=n(14),ue=n.n(de),me=n(15),pe=n.n(me),ye=n(3),Me=n.n(ye);const ge='SET_TITLE',Le='SET_AVATAR',Te='SAVE_CLIENT',Ne='SAVE_RESPONSE',Ee='SAVE_USER_INPUT',fe='SAVE_USER_RESPONSE',je='INITIATE_LOADING',xe='TIMER_START',be='UPDATE_CURRENT_TIME',Ie='SHOW_BUTTON_BAR',we='HIDE_BUTTON_BAR',Ce='DISPLAY_ERROR',he='CLEAR_ERROR',ve='SHOW_WINDOW',De='HIDE_WINDOW',Se='FULLSCREEN',ke='WINDOWED',ze='RECEIVE_WEBHOOK_DATA',Oe='DISABLE_INPUT',Pe='ENABLE_INPUT',Ue='SET_CONVERSATION_STARTED',Ae='SET_CONVERSATION_ENDED',Ye='SHOW_PRIVACY_POLICY',Re='HIDE_PRIVACY_POLICY',Qe='SET_PRIVACY_POLICY',Ve='SET_GOOGLE_MAPS_KEY',Be='SET_CENTER_COORDINATES',_e='SET_ACTIVATION_TEXT',We='SAVE_FEEDBACK_INPUT',Ge='SET_FEEDBACK_URL',He='SET_FEEDBACK_SUBMITTED',Je='SET_FEEDBACK_OPTIONS',Ze='SET_OUTPUT_CONTEXTS',Fe='yyyy-MM-dd\'T\'HH:mm:ss.SSS';var Ke=n(8),Xe=n.n(Ke),qe=n(31),$e=n.n(qe),et=n(32),tt=n.n(et);class nt{constructor(e){if(!e||!e.textUrl)throw new Error('Fulfillment URL is required to generate a conversation client');this.textUrl=e.textUrl,this.eventUrl=e.eventUrl,this.uuid=Xe()()}encodeQueryData(e){const t=[];for(const n in e)t.push(`${encodeURIComponent(n)}=${encodeURIComponent(e[n])}`);return t.join('&')}textRequest(e){if(!e)throw new Error('Query should not be empty');const t={query:e,uuid:this.uuid},n=this.encodeQueryData(t),a=`${this.textUrl}?${n}`;return i(a,2)}eventRequest(e){if(!e)throw new Error('Query should not be empty');const t={query:e,uuid:this.uuid},n=this.encodeQueryData(t),a=`${this.eventUrl}?${n}`;return fetch(a).then((e)=>e.json()).catch((e)=>{throw new Error(e)})}}var at=function(){function e(e,t){var n=[],a=!0,i=!1,o=void 0;try{for(var s,r=e[Symbol.iterator]();!(a=(s=r.next()).done)&&(n.push(s.value),!(t&&n.length===t));a=!0);}catch(e){i=!0,o=e}finally{try{!a&&r['return']&&r['return']()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),it=n(33),ot=n.n(it);const st=V()(oe.a)`
  && {
    display: ${(e)=>e.active?'flex':'none'};
    pointer-events: auto;
    width: ${(e)=>e.activationtext?'auto':'56px'};
    height: ${(e)=>e.activationtext?'auto':'56px'};
    padding: ${(e)=>e.activationtext?'4px 6px':'auto'};
    border-radius: ${(e)=>e.activationtext?'20px':'50%'};
  }
`,rt=V.a.div`
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
`;class ct extends O.PureComponent{render(){var e=this.props;const t=e.title,n=e.windowVisible,a=e.showWindow,i=e.activationText,o=e.theme,s=e.avatar,r=i?Object(O.createElement)(P.a.Fragment,null,Object(O.createElement)(lt,{alt:t,src:s}),Object(O.createElement)(rt,{theme:o},i)):Object(O.createElement)(re.a,null);return Object(O.createElement)(ce.a,{in:!n,unmountOnExit:!0},Object(O.createElement)(st,{color:'primary',onClick:a,active:n?0:1,activationtext:i?1:0},r))}}var dt=Object(q.withTheme)()(Object(U.connect)((e)=>({title:e.config.title,windowVisible:e.config.windowVisible,activationText:e.config.activationText,avatar:e.config.avatar}),(e)=>({showWindow:()=>{e(y())}}))(ct)),ut=n(34),mt=n.n(ut),pt=n(6),yt=n.n(pt),Mt=n(35),gt=n.n(Mt),Lt=n(36),Tt=n.n(Lt),Nt=n(37),Et=n.n(Nt),ft=n(16),jt=n.n(ft),xt=n(38),bt=n.n(xt),It=n(39),wt=n.n(It),Ct=n(7),ht=n.n(Ct),vt=n(9),Dt=n.n(vt);const St=V()(ue.a)`
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
    font-size: 14px;
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
`;class Ut extends O.PureComponent{render(){var e=this.props;const t=e.title,n=e.theme,a=e.hideWindow,i=e.showWindowed,o=e.showFullscreen,s=e.fullscreen,r=e.avatar,l=e.showPrivacyPolicy,c=e.sendQuickReply,d=e.messages,u=Object(vt.findLast)(d,(e)=>{const t=Object(vt.find)(e.responses,['type','suggestion']);return t});let m=null;if(u){const e=u.responses.filter((e)=>'suggestion'===e.type)[0].suggestions;m=Object(vt.find)(e,(e)=>'home'===e.toLowerCase()||'start over'===e.toLowerCase())}return Object(O.createElement)(kt,{theme:n},Object(O.createElement)(St,{alt:t,src:r}),Object(O.createElement)(zt,{theme:n,variant:'h6'},t),m&&Object(O.createElement)(wt.a,{title:'Return to subject selection',placement:'bottom'},Object(O.createElement)(Pt,{theme:n,onClick:()=>c('START OVER')},'Start Over')),Object(O.createElement)(wt.a,{title:'Privacy Policy',placement:'bottom'},Object(O.createElement)(Ot,{theme:n,onClick:l,"aria-label":'Windowed'},Object(O.createElement)(Et.a,{fontSize:'small'}))),s?Object(O.createElement)(Ot,{theme:n,onClick:i,"aria-label":'Windowed'},Object(O.createElement)(Tt.a,{fontSize:'small'})):Object(O.createElement)(Ot,{theme:n,onClick:o,"aria-label":'Fullscreen'},Object(O.createElement)(gt.a,{fontSize:'small'})),Object(O.createElement)(Ot,{theme:n,onClick:a,"aria-label":'Close'},Object(O.createElement)(bt.a,{fontSize:'small'})))}}var At=Object(q.withTheme)()(Object(U.connect)((e)=>({title:e.config.title,fullscreen:e.config.fullscreen,avatar:e.config.avatar,messages:e.conversation.messages}),(e)=>({hideWindow:g,showFullscreen:L,showWindowed:T,showPrivacyPolicy:M,sendQuickReply:(t)=>e(p(t))}))(Ut)),Yt=n(40),Rt=n.n(Yt),Qt=n(41),Vt=n.n(Qt),Bt=n(42),_t=n.n(Bt),Wt=n(43),Gt=n.n(Wt),Ht=n(44),Jt=n.n(Ht);const Zt=V()(Vt.a)`
  && {
    position: absolute;
  }
`;class Ft extends O.PureComponent{render(){var e=this.props;const t=e.hidePrivacyPolicy,n=e.privacyPolicyVisible,a=e.privacyPolicy,i=e.parentRef;return Object(O.createElement)(Zt,{open:n,onClose:t,"aria-labelledby":'privacy-policy',container:i,scroll:'paper'},Object(O.createElement)(Rt.a,null,'Privacy Statement'),Object(O.createElement)(Gt.a,null,Object(O.createElement)(Jt.a,null,a)),Object(O.createElement)(_t.a,null,Object(O.createElement)(ht.a,{onClick:t,color:'primary'},'Close')))}}var Kt=Object(U.connect)((e)=>({privacyPolicyVisible:e.config.privacyPolicyVisible,privacyPolicy:e.config.privacyPolicy}),{hidePrivacyPolicy:function(){return{type:Re}}})(Ft),Xt=n(45),qt=n.n(Xt),$t=n(46),en=n.n($t),tn=n(17),nn=n.n(tn),an=n(10),on=n.n(an),sn=n(47),rn=n.n(sn);const ln=V.a.div`
  text-align: center;
  width: 42px;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`,cn=V.a.div`
  animation: dot-keyframes 1s infinite ease-in-out;
  background-color: ${rn.a[900]};
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
`;class dn extends O.PureComponent{render(){return Object(O.createElement)(ln,null,Object(O.createElement)(cn,null),Object(O.createElement)(cn,null),Object(O.createElement)(cn,null))}}const un=V.a.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 10px;
  height: min-content;
  align-items: ${(e)=>'user'===e.entity?'flex-end':'flex-start'};
  scroll-margin: 15px;
  p, div {
    font-size: 14px;
  }
`,mn=V.a.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  padding: 0;
  justify-content: ${(e)=>'user'===e.entity?'flex-end':'flex-start'};
`,pn=V.a.div`
  && {
    background: ${X.a[400]};
    border-top-right-radius: 10px;
    border-top-left-radius: 1px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 9px;
  }
`,yn=V.a.div`
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
`,Mn=V()(yt.a)`
  && {
    color: ${X.a[500]};
    margin-top: 6px;
    padding-left: 5px;
    padding-right: 2px;
  }
`;class gn extends O.Component{render(){var e=this.props;const t=e.message,n=e.entity,a=e.isLoading,i=e.timestamp,o=e.currentTime,s=e.theme,r=e.showTimestamp,l=e.error,c=e.className,d=e.key,u=Object(ye.parse)(i,Fe,new Date(o)),m=Object(ye.isSameDay)(new Date,u),p=Object(ye.isSameDay)(u,Object(ye.subDays)(new Date,1));let y=null;y=m?`Today ${Object(ye.format)(u,'h:mm aa')}`:p?`Yesterday ${Object(ye.format)(u,'h:mm aa')}`:Object(ye.format)(u,'MMMM dd, yyyy h:mm aa');let M=t&&''!==t[0]?t:['Oops! Something happened with the connection. Please try again.'];let g=Object(O.createElement)(dn,null);a&&l&&(g=l);const L='user'===n?Object(O.createElement)(yn,{elevation:1,theme:s},t):Object(O.createElement)(pn,{elevation:1},a?g:Object(O.createElement)(nn.a,{options:{forceBlock:!0,overrides:{h6:{component:yt.a,props:{variant:'h6'}},p:{component:yt.a,props:{variant:'body1'}},a:{component:on.a}}}},M[0]));return Object(O.createElement)(un,{entity:n,className:c,key:d},Object(O.createElement)(mn,{entity:n},L),r?Object(O.createElement)(Mn,{variant:'caption'},y):null)}}var Ln=Object(q.withTheme)()(Object(U.connect)((e)=>({currentTime:e.conversation.currentTime,error:e.error}))(gn)),Tn=n(11),Nn=n.n(Tn),En=n(18),fn=n.n(En),jn=n(12),xn=n.n(jn),bn=n(48),In=n.n(bn);const wn=V()(Nn.a)`
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
`,Cn=V()(In.a)`
  && {
    height: ${(e)=>e.image&&''!==e.image?'200px':'0px'};
    background-size: cover;
    background-position: center center;
  }
`;class hn extends O.PureComponent{render(){var e=this.props.data;const t=e.title,n=e.subtitle,a=e.imageUrl,i=e.buttons,o=e.className;return Object(O.createElement)(wn,{className:o,key:this.props.key},a?Object(O.createElement)(Cn,{image:encodeURI(a),title:''}):null,Object(O.createElement)(xn.a,null,Object(O.createElement)(yt.a,{gutterBottom:!0,variant:'h6'},t),Object(O.createElement)(nn.a,{options:{forceBlock:!0,overrides:{h6:{component:yt.a,props:{variant:'h6'}},p:{component:yt.a,props:{variant:'body1'}},a:{component:on.a}}}},n)),Object(O.createElement)(fn.a,null,i.map((e,t)=>{const n=`card-${t}${Object(ye.format)(new Date,Fe)}`;return Object(O.createElement)(ht.a,{href:e.postback,target:'_blank',size:'small',color:'primary',key:n},e.text)})))}}var vn=Object(U.connect)((e)=>({inputValue:e.userInput}))(hn),Dn=n(49),Sn=n.n(Dn),kn=n(50),zn=n.n(kn),On=n(51),Pn=n.n(On),Un=n(52),An=n.n(Un),Yn=n(53),Rn=n.n(Yn),Qn=n(54),Vn=n.n(Qn),Bn=n(55),_n=n.n(Bn),Wn=n(56),Gn=n.n(Wn);const Hn=V()(Nn.a)`
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
`,Jn=V.a.div`
  height: 150px;
  font-size: 14px;
  margin-top: 10px;
`,Zn=V()(xn.a)`
  &&& {
    padding-top: 0;
    padding-bottom: 0;
  }
`,Fn=V()(Pn.a)`
  td {
    padding: 4px 0px 4px 0px;
  }
  tr:last-of-type {
    td {
      border-bottom: none;
    }
  }
`,Kn=V()(An.a)`
  && {
    width: 70%;
    padding: 4px 0px 4px 0px;
  }
`,Xn=V()(An.a)`
  &&& {
    width: 20%;
    padding-right: 0;
    text-align: right;
  }
`;var qn=Object(U.connect)((e)=>({googleMapsKey:e.config.googleMapsKey}))(function(e){const t=e.data,n=e.googleMapsKey,a=e.className,i=e.key,o='230px',s={width:30,height:30},r=`https://maps.googleapis.com/maps/api/js?key=${n}&v=3`,l=(e)=>{const t=`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${e.placeId}`;window.open(t,'_blank')},c=Object(Qn.withScriptjs)(Object(Qn.withGoogleMap)(()=>Object(O.createElement)(Qn.GoogleMap,{defaultZoom:8,defaultCenter:t.nearestLocations[0],defaultOptions:{zoomControl:!0,mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1}},t.locations.map((e,t)=>Object(O.createElement)(Qn.Marker,{key:t,position:{lat:e.lat,lng:e.lng},icon:{url:_n.a,scaledSize:s},onClick:()=>l(e)})),Object(O.createElement)(Qn.Marker,{position:{lat:t.currentGeocode.lat,lng:t.currentGeocode.lng},icon:{url:Gn.a,scaledSize:s}}))));return Object(O.createElement)(Hn,{className:a,key:i},Object(O.createElement)(Sn.a,{title:'Office Locations',titleTypographyProps:{variant:'h6'}}),Object(O.createElement)(Zn,null,Object(O.createElement)(c,{googleMapURL:r,loadingElement:Object(O.createElement)('div',{style:{height:`${o}`}}),containerElement:Object(O.createElement)('div',{style:{height:`${o}`}}),mapElement:Object(O.createElement)('div',{style:{height:'100%'}})}),Object(O.createElement)(Jn,null,Object(O.createElement)(zn.a,{padding:'dense'},Object(O.createElement)(Fn,null,t.nearestLocations.map((e,t)=>Object(O.createElement)(Rn.a,{key:t},Object(O.createElement)(Kn,{padding:'dense'},Object(O.createElement)(yt.a,null,Object(O.createElement)(on.a,{href:`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${e.placeId}`,target:'blank'},e.street,', ',e.city))),Object(O.createElement)(Xn,{padding:'dense'},e.distance))))))))}),$n=n(57),ea=n.n($n),ta=n(58),na=n.n(ta),aa=n(59),ia=n.n(aa),oa=n(60),sa=n.n(oa),ra=n(19),la=n.n(ra),ca=n(61),da=n.n(ca),ua=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var a in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e};const ma=V.a.div`
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 15px;
  padding-top: 13px;
`;class pa extends O.PureComponent{constructor(){super(),this.state={isSubmitted:!1,feedbackComment:''}}render(){var e=this.props;const t=e.feedbackInputs,n=e.feedbackUrl,a=e.saveFeedbackInput,i=e.sendFeedback,o=e.session,s=e.outputContexts,r=(e)=>(t)=>{const n={value:e,checked:t.target.checked};a(n)},l=(e)=>e.filter((e)=>e.checked?e.value:null).map((e)=>e.value),c=(e)=>{fetch(n,{method:'POST',body:JSON.stringify(e),headers:{"Content-Type":'application/json'}})};return Object(O.createElement)(P.a.Fragment,null,this.state.isSubmitted?Object(O.createElement)(xn.a,null,'Thank you. Your feedback is important to us and will help improve Gen.'):Object(O.createElement)('div',null,Object(O.createElement)(xn.a,null,Object(O.createElement)(yt.a,{gutterBottom:!0,variant:'h6'},t.wasHelpful?'Why was Gen helpful?':'Why was Gen not helpful?'),Object(O.createElement)(ea.a,{component:'fieldset'},Object(O.createElement)(na.a,null,t.feedbackList?t.feedbackList.map((e)=>Object(O.createElement)(ia.a,{key:e.value,control:Object(O.createElement)(sa.a,{checked:e.checked,onChange:r(e.value),value:e.value}),label:e.value})):null,Object(O.createElement)(ma,null,'Add your comments'),Object(O.createElement)(la.a,{placeholder:'Type something',variant:'outlined',multiline:!0,value:this.state.feedbackComment,onChange:(t)=>{const e=t.target.value;this.setState((t)=>ua({},t,{feedbackComment:e}))},InputProps:{classes:{inputMultiline:this.props.classes.inputMultiline}}})))),Object(O.createElement)(fn.a,null,Object(O.createElement)(ht.a,{size:'small',color:'primary',onClick:()=>{const e={wasHelpful:t.wasHelpful,session:o,feedbackList:l(t.feedbackList),comment:this.state.feedbackComment,outputContexts:s};c(e),i('Feedback complete'),this.setState((e)=>ua({},e,{isSubmitted:!0}))},disabled:(!t.feedbackList||!(0<t.feedbackList.length)||da()(t.feedbackList,(e)=>!e.checked))&&!this.state.feedbackComment},'Submit'))))}}var ya=Object(q.withStyles)(()=>({root:{},inputMultiline:{fontSize:'0.875rem',overflowY:'hidden'}}))(Object(U.connect)((e)=>({feedbackInputs:e.feedbackInput,feedbackUrl:e.config.feedbackUrl,outputContexts:e.conversation.outputContexts}),(e)=>({saveFeedbackInput:(t)=>{e(j(t))},sendFeedback:(t)=>{e(x(t))}}))(pa));const Ma=V()(Nn.a)`
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
`;class ga extends O.PureComponent{componentDidMount(){var e=this.props;const t=e.setFeedbackOptions,n=e.feedbackData;t(n)}render(){var e=this.props;const t=e.session,n=e.className,a=e.key;return Object(O.createElement)(Ma,{className:n,key:a},Object(O.createElement)(ya,{session:t}))}}var La=Object(U.connect)((e)=>({feedbackInputs:e.feedbackInput}),(e)=>({setFeedbackOptions:(t)=>{e(b(t))}}))(ga);const Ta={giant:1170,desktop:992,tablet:768,phone:620},Na=Object.keys(Ta).reduce((e,t)=>{const n=Ta[t]/16;return e[t]=(...e)=>Q.css`
    @media (max-width: ${n}em) {
      ${Object(Q.css)(...e)};
    }
  `,e},{});var Ea=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var a in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e};const fa=V.a.div`
  display: flex;
  flex-direction: column;
  /* Vertically flips the container element to achieve flex-direction:column-reverse effect */
  transform: scale(1, -1);
  overflow: auto;
  ${Na.tablet`
    flex-direction: column-reverse;
    overflow: auto;
    transform: none;
  `};
`,ja=V.a.div`
  background: ${X.a[100]};
  z-index: 4;
  grid-area: chatwindow;
  margin-bottom: 1px;
  margin-top: 8px;

  /* Vertically flips the content element so that the messages won't be upside down */
  transform: scale(1, -1);

  ${Na.tablet`
   transform: none;
  `};
`;class xa extends O.PureComponent{constructor(e){super(e),Object.defineProperty(this,'findIndexFirstElementInLastResponse',{enumerable:!0,writable:!0,value:(e)=>{let t=0,n=!1;return Object(vt.forEachRight)(e,(e,a)=>{'bot'===e.entity?!n&&(t=a):n=!0}),t}}),Object.defineProperty(this,'parseMessages',{enumerable:!0,writable:!0,value:()=>{const e=this.props.messages,t=[];return e.forEach((e)=>{const n={systemTime:e.systemTime,entity:e.entity,session:e.messageSession,key:e.key};if(e.loading){const a=en()(e,n);t.push(a)}else if('bot'===e.entity)e.responses.forEach((e,a)=>{if('text'===e.type||'card'===e.type||'payload'===e.type){const i=en()(e,Ea({},n,{key:`${n.key}_${a}`}));t.push(i)}});else if('user'===e.entity){const a=en()(e,n);t.push(a)}}),t}}),Object.defineProperty(this,'createMessageElements',{enumerable:!0,writable:!0,value:()=>{const e=this.parseMessages(),t=[];let n=e;1<e.length&&(n=Object(vt.sortBy)(e,(e)=>new Date(e.systemTime)));const a=this.findIndexFirstElementInLastResponse(n);n.forEach((e,o)=>{const i=o===a;let s=!1;o===n.length-1&&(s=!0),e.loading?t.push(w(e)):'user'===e.entity?t.push(I(e)):'bot'===e.entity&&'text'===e.type?t.push(h(e,s,i)):'bot'===e.entity&&'card'===e.type?t.push(v(e,i)):'bot'===e.entity&&'payload'===e.type&&e.payload.mapPayload?t.push(D(e,i)):'bot'===e.entity&&'payload'===e.type&&e.payload.feedback?t.push(C(e,i)):t.push(h({text:['Something went wrong.']}))}),this.setState((e)=>Ea({},e,{messageElements:t}),()=>{document.getElementsByClassName('scrollIntoView')[0]&&setTimeout(()=>document.getElementsByClassName('scrollIntoView')[0].scrollIntoView(!1),0)})}}),Object.defineProperty(this,'handleWheel',{enumerable:!0,writable:!0,value:(t)=>{t.deltaY&&(t.preventDefault(),t.currentTarget.scrollTop-=2*(parseFloat(getComputedStyle(t.currentTarget).getPropertyValue('font-size'))*(0>t.deltaY?-1:1)))}}),Object.defineProperty(this,'componentRef',{enumerable:!0,writable:!0,value:P.a.createRef(null)}),this.messages=[],this.state={messageElements:[]},this.componentRef=P.a.createRef()}componentDidUpdate(){const e=this.parseMessages();qt()(this.messages,e)||(this.messages=e,this.createMessageElements()),this.componentRef.current&&this.componentRef.current.addEventListener('wheel',this.handleWheel)}render(){const e=this.state.messageElements;return Object(O.createElement)(fa,{ref:this.componentRef},Object(O.createElement)(ja,{elevation:1,square:!0},e))}}var ba=Object(U.connect)((e)=>({messages:e.conversation.messages,buttonBarVisible:e.buttonBar.visible,error:e.error}))(xa),Ia=n(62),wa=n.n(Ia);const Ca=V.a.div`
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
`,ha=V()(la.a)`
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
`,va=V()(jt.a)`
  && {
    padding-right: 15px;
    &:hover {
      background: transparent;
    }
  }
`;class Da extends O.PureComponent{constructor(){super(),this.handleKeyPress=this.handleKeyPress.bind(this)}handleKeyPress(t){13===t.charCode&&(this.props.submitUserInput(),t.preventDefault())}render(){var e=this.props;const t=e.saveUserInput,n=e.inputValue,a=e.shouldDisable,i=n.value,o=`${n.charLength}/255`,s=n.maxExceeded;let r=null;return r=s?`Exceeded character limit: ${o}`:null,Object(O.createElement)(Ca,{visible:a},Object(O.createElement)(ha,{multiline:!0,rowsMax:'4',fullWidth:!0,InputProps:{disableUnderline:!0},placeholder:'Send a message',helperText:r,FormHelperTextProps:{style:{color:'#cd5c5c',margin:0}},onChange:t,value:i,onKeyPress:this.handleKeyPress}),Object(O.createElement)(va,{onClick:this.props.submitUserInput,"aria-label":'Send',color:'primary',disabled:s,disableRipple:!0},Object(O.createElement)(wa.a,null)))}}var Sa=Object(U.connect)((e)=>({inputValue:e.userInput,shouldDisable:e.conversation.disableInput}),(t)=>({saveUserInput:(n)=>{t(k(n.target.value))},submitUserInput:()=>{t(z())}}))(Da),ka=n(63),za=n.n(ka);const Oa=V.a.div`
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
`,Pa=V()(ht.a)`
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
`;class Ua extends O.PureComponent{constructor(){super(),Object.defineProperty(this,'minColumnSpan',{enumerable:!0,writable:!0,value:(e)=>{if(21<=e.length)return 3;return 13<=e.length&&21>e.length?2:1}}),Object.defineProperty(this,'playTetris',{enumerable:!0,writable:!0,value:(e)=>{const t=(e,t)=>{const n=Object(vt.find)(t,(t)=>t.minColumnSpan===e),a=Object(vt.filter)(t,(e)=>!n||e.label!==n.label);return{next:n,remainingButtons:a}},n=Object(vt.reduce)(e,(e,n)=>{if(0<=Object(vt.findIndex)(e.remainingButtons,(e)=>e.label===n.label)){const a=n;let i=Object(vt.filter)(e.remainingButtons,(e)=>e.label!==a.label);if(3===a.minColumnSpan)return{buttonRows:[...e.buttonRows,[a]],remainingButtons:i};if(2===a.minColumnSpan){let n=t(2,i);i=n.remainingButtons,n.next||(n=t(1,i),i=n.remainingButtons);const o=n.next,s=Object(vt.filter)([a,o],(e)=>!!e);return{buttonRows:[...e.buttonRows,s],remainingButtons:i}}if(1===a.minColumnSpan){let n=t(1,i),o=n.next;if(i=n.remainingButtons,o){const n=t(1,i),s=n.next;i=n.remainingButtons;const r=Object(vt.filter)([a,o,s],(e)=>!!e);return{buttonRows:[...e.buttonRows,r],remainingButtons:i}}n.next||(n=t(2,i),o=n.next,i=n.remainingButtons);const s=Object(vt.filter)([a,o],(e)=>!!e);return{buttonRows:[...e.buttonRows,s],remainingButtons:i}}}return e},{buttonRows:[],remainingButtons:e}),a=n.buttonRows;return a}}),Object.defineProperty(this,'handleSuggestionClick',{enumerable:!0,writable:!0,value:(e)=>{this.setState(()=>({paginationPage:1})),this.props.sendQuickReply(e.toUpperCase())}}),this.state={paginationPage:1}}render(){const e=this.state.paginationPage;var t=this.props;const n=t.visible,a=t.messages,i=Object(vt.findLast)(a,(e)=>{const t=Object(vt.find)(e.responses,['type','suggestion']);return t}),o=[];let s=null;if(i){const e=i.responses.filter((e)=>'suggestion'===e.type)[0].suggestions,t=Object(vt.filter)(e,(e)=>'go back'!==e.toLowerCase()&&'home'!==e.toLowerCase()&&'start over'!==e.toLowerCase());s=Object(vt.find)(e,(e)=>'go back'===e.toLowerCase());for(const e of t){const t=this.minColumnSpan(e);o.push({label:e,id:i.messageId,visible:n,minColumnSpan:t})}}const r=this.playTetris(o),l=4,c=Math.ceil(r.length/l),d=Array(c).fill().map(()=>r.splice(0,l));return(0<o.length||s)&&Object(O.createElement)(Oa,{visible:n},Object(O.createElement)(za.a,{container:!0},0<o.length&&d[e-1].map((e,t)=>Object(O.createElement)(za.a,{key:`buttonRow_${t}`,container:!0,item:!0,spacing:8,xs:12},e.map((n,a)=>Object(O.createElement)(za.a,{key:`buttonRow_${t}_${a}`,item:!0,xs:12/e.length},Object(O.createElement)(Pa,{size:'small',color:'secondary',key:`${n.id}-btn${a}`,visible:n.visible.toString(),navigationbutton:'false',onClick:()=>this.handleSuggestionClick(n.label)},n.label))))),Object(O.createElement)(za.a,{item:!0,container:!0,xs:12,justify:'space-between',spacing:8},s&&1===e&&Object(O.createElement)(za.a,{item:!0,xs:4},Object(O.createElement)(Pa,{size:'small',color:'secondary',visible:'true',navigationbutton:'true',onClick:()=>this.handleSuggestionClick(s)},s)),1<c&&1<e&&Object(O.createElement)(za.a,{item:!0,xs:5},Object(O.createElement)(Pa,{size:'small',color:'secondary',visible:'true',navigationbutton:'true',onClick:()=>this.setState((e)=>({paginationPage:e.paginationPage-1}))},'Previous Options')),1<c&&e<c&&Object(O.createElement)(za.a,{item:!0,xs:5},Object(O.createElement)(Pa,{size:'small',color:'secondary',visible:'true',navigationbutton:'true',onClick:()=>this.setState((e)=>({paginationPage:e.paginationPage+1}))},'More Options')))))}}var Aa=Object(U.connect)((e)=>({visible:e.buttonBar.visible,messages:e.conversation.messages}),(e)=>({sendQuickReply:(t)=>{e(p(t))}}))(Ua);const Ya=V()(mt.a)`
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

    ${Na.phone`
    width: ${(e)=>e.visible?'calc(100% - 20px)':'0'};
    height: ${(e)=>e.visible?'calc(100% - 96px)':'0'};
    right: 10px;
    max-width: none;
    max-height: none;
  `};
  }
`,Ra=V.a.div`
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
`;class Qa extends O.PureComponent{constructor(e){super(e),this.containerRef=P.a.createRef()}render(){var e=this.props;const t=e.windowVisible,n=e.fullscreen;return Object(O.createElement)(Ya,{elevation:4,fullscreen:n?1:0,visible:t?1:0},Object(O.createElement)(Ra,{ref:this.containerRef,className:'mui-fixed'},Object(O.createElement)(At,null),Object(O.createElement)(Kt,{parentRef:this.containerRef.current}),Object(O.createElement)(ba,null),Object(O.createElement)(Aa,null),Object(O.createElement)(Sa,null)))}}var Va=Object(U.connect)((e)=>({windowVisible:e.config.windowVisible,fullscreen:e.config.fullscreen}))(Qa),Ba=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var a in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e};const _a={avatar:null,title:'Chat Window',windowVisible:!1,fullscreen:!1,privacyPolicyVisible:!1,googleMapsKey:'',centerCoordinates:'',activationText:'',privacyPolicy:'Please do not enter any personally identifiable information such as SSN, Date of Birth, Case Number or last name.',feedbackUrl:''};var Wa=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var a in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e};const Ga={client:null,clientName:null,messages:[],webhookPayload:null,disableInput:!1,lastUpdateTime:Object(ye.format)(new Date,Fe),currentTime:Object(ye.format)(new Date,Fe),headerTime:'Now',timer:null,conversationStarted:!1};var Ha=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var a in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e};const Ja={visible:!1,buttons:[]};const Za={value:'',charLength:0,maxExceeded:!1};var Fa=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var a in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e};const Ka={submitted:!1,wasHelpful:null,feedbackList:null};const Xa='';const qa=Object(Y.combineReducers)({config:function(e=_a,t){switch(t.type){case Re:return Ba({},e,{privacyPolicyVisible:!1});case Ye:return Ba({},e,{privacyPolicyVisible:!0});case Qe:return Ba({},e,{privacyPolicy:t.policyText});case Ve:return Ba({},e,{googleMapsKey:t.googleMapsKey});case Be:return Ba({},e,{centerCoordinates:t.centerCoordinates});case _e:return Ba({},e,{activationText:t.activationText});case Le:return Ba({},e,{avatar:t.avatar});case ge:return Ba({},e,{title:t.title});case ve:return Ba({},e,{windowVisible:!0});case De:return Ba({},e,{windowVisible:!1});case Se:return Ba({},e,{fullscreen:!0});case ke:return Ba({},e,{fullscreen:!1});case Ge:return Ba({},e,{feedbackUrl:t.feedbackUrl});default:return e;}},conversation:function(e=Ga,t){switch(t.type){case Te:return Wa({},e,{client:t.client,clientName:t.clientName});case be:return Wa({},e,{headerTime:t.headerTime,currentTime:t.currentTime});case xe:return Wa({},e,{timer:t.timer});case je:return Wa({},e,{messages:[...e.messages,{loading:!0,entity:'bot',systemTime:Object(ye.format)(new Date,Fe)}]});case Ne:return Wa({},e,{lastUpdateTime:Object(ye.format)(new Date,Fe),headerTime:'Now',messages:t.newConversationArray});case fe:return Wa({},e,{lastUpdateTime:Object(ye.format)(new Date,Fe),headerTime:'Now',messages:[...e.messages,Wa({},t.response,{key:Xe()()})].sort((e,t)=>{const n=Object(ye.parse)(e.systemTime,Fe,new Date(e.systemTime)),a=Object(ye.parse)(t.systemTime,Fe,new Date(t.systemTime)),i=Object(ye.differenceInMilliseconds)(a,n);return i})});case ze:return Wa({},e,{webhookPayload:t.payload});case Pe:return Wa({},e,{disableInput:!1});case Oe:return Wa({},e,{disableInput:!0});case Ue:return Wa({},e,{conversationStarted:!0});case Ae:return Wa({},e,{conversationStarted:!1});case Ze:return Wa({},e,{outputContexts:t.rawOutputContexts});default:return e;}},buttonBar:function(e=Ja,t){switch(t.type){case Ie:return Ha({},e,{visible:!0});case we:return Ha({},e,{visible:!1});default:return e;}},userInput:function(e=Za,t){switch(t.type){case Ee:return t.userInput;default:return e;}},feedbackInput:function(e=Ka,t){switch(t.type){case We:return Fa({},e,{feedbackList:e.feedbackList.map((e)=>e.value===t.value.value?Fa({},e,{checked:t.value.checked}):e)});case Je:return Fa({},e,{wasHelpful:t.value.helpful,feedbackList:t.value.options.map((e)=>Fa({},e,{checked:!1}))});case He:return Fa({},e,{submitted:!0});default:return e;}},error:function(e=Xa,t){switch(t.type){case Ce:return t.error;case he:return Xa;default:return e;}}});_.a.load({google:{families:['Roboto:300,400,500','Product Sans:400']}});const $a=V.a.div`
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
`,ei=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.compose;class ti extends O.PureComponent{constructor(e){super(e),this.store=Object(Y.createStore)(qa,ei(Object(Y.applyMiddleware)(J.a))),this.currentValue=null,this.theme=a(this.props.primaryColor,this.props.secondaryColor,this.props.headerColor)}componentDidMount(){this.store.dispatch(f(this.props,this.theme)),this.unsubscribe=this.store.subscribe(()=>this.handleChange(this.store))}componentWillUnmount(){this.unsubscribe()}select(e){return e.conversation.webhookPayload}handleChange(e){const t=this.currentValue;this.currentValue=this.select(e.getState()),t!==this.currentValue&&this.props.onPayload&&this.props.onPayload(this.currentValue)}render(){return Object(O.createElement)(U.Provider,{store:this.store},Object(O.createElement)(G.a,{theme:this.theme},Object(O.createElement)($a,null,Object(O.createElement)(Va,null),Object(O.createElement)(dt,null))))}}t['default']=ti},function(e){e.exports=require('webfontloader')},function(e){e.exports=require('@material-ui/core/styles/MuiThemeProvider')},function(e){e.exports=require('redux-thunk')},function(e){e.exports=require('whatwg-fetch')},function(e){e.exports=require('@material-ui/core/colors')},function(e){e.exports=require('validator/lib/isHexColor')},function(e){e.exports=require('@material-ui/core/Fab')},function(e){e.exports=require('@material-ui/icons/Chat')},function(e){e.exports=require('@material-ui/core/Zoom')},function(e){e.exports=require('lodash/find')},function(e){e.exports=require('lodash/omit')},function(e){e.exports='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNTkyIDE3MjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1OTIgMTcyODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGQkRCMzI7c3Ryb2tlOiNGQURBMzI7fQoJLnN0MXtmaWxsOiNENDczOTQ7fQoJLnN0MntzdHJva2U6I0ZBREEzMjt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE4MTQuMjMsMTMzNmMzMC4yNC00Mi45LDU1LjQ5LTg4LjgsNzUuNDItMTM2LjgyYzM1LjY5LTg1Ljk5LDU0LjM1LTE3OC43NSw1NC4yLTI3My4wOQoJCWMtMC4yOC0zOTMuNTktMzE5LjI0LTcxMi42LTcxMi44My03MTIuOTRjLTE1OS4wNiwwLTMwNS45NCw1Mi4wOS00MjQuNTMsMTQwLjE1QzY2OS40Myw0ODAuNDEsNTgzLjY1LDY2Mi4wNSw1ODMuNjUsODYzLjcyCgkJYzAsMzg0LjM5LDMxMS42MSw2OTUuOTksNjk1Ljk5LDY5NS45OWMxMTAuOTcsMC4wOSwyMjAuMzQtMjYuMzksMzE4Ljk4LTc3LjIyYzQuMjgtMi4yMSw4Ljc5LTMuOTQsMTMuNDYtNS4xN2wyMi4xNS01LjgyCgkJYzE3LjgxLTQuNjgsMzYuNzYtMS42Nyw1Mi4yNCw4LjNsMTEuODgsNy42NWMyMi43NiwxMC4zNCw0Ni45MSwxNy4yOSw3MS42OSwyMC42MmMyMC4yNSwzLjA5LDQwLjU4LDUuNTIsNjAuOTgsNy4zCgkJYzEwLjA4LDAuODgsMjAuMTcsMS42LDMwLjI4LDIuMTdjMjYuMjIsMS4yNyw2MC43MSwwLjE3LDg2LjYxLTIuODVjLTMyLjQtMjIuNy04Ny42Ny03My43My0xMDkuNjEtMTEyLjYybC0xOC4wMi0zNy4zNgoJCUMxODE2LjEsMTM1NS42NSwxODE0LjA2LDEzNDUuODQsMTgxNC4yMywxMzM2eiIvPgoJPHBhdGggZD0iTTExMTUuNDYsNTk1LjQ5YzIuMzMtMjIuNjgtNC42NS00MS4zNi0yNC41Ny01My41NmMtNDIuNDUtMjMuMTUtOTcuMjEsMC42Ny05MS43Nyw1My41NmMwLDI2LjU5LDAsNTMuMTgsMCw3OS43OAoJCWMtNS40NCw1Mi44OSw0OS4zMSw3Ni43MSw5MS43Nyw1My41NmMxOS45Mi0xMi4yLDI2LjkxLTMwLjg4LDI0LjU3LTUzLjU2QzExMTUuNDYsNjQ4LjY3LDExMTUuNDYsNjIyLjA4LDExMTUuNDYsNTk1LjQ5eiIvPgoJPHBhdGggZD0iTTE1NjEuMjUsNTk1LjQ5YzIuMzMtMjIuNjgtNC42NS00MS4zNi0yNC41Ny01My41NmMtNDIuNDUtMjMuMTUtOTcuMjEsMC42Ny05MS43Nyw1My41NmMwLDI2LjU5LDAsNTMuMTgsMCw3OS43OAoJCWMtNS40NCw1Mi44OSw0OS4zMSw3Ni43MSw5MS43Nyw1My41NmMxOS45Mi0xMi4yLDI2LjkxLTMwLjg4LDI0LjU3LTUzLjU2QzE1NjEuMjUsNjQ4LjY3LDE1NjEuMjUsNjIyLjA4LDE1NjEuMjUsNTk1LjQ5eiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTEyMDguOTksOTYzLjE2YzIwLjkzLDEwLjI2LDQ0LjQ2LDE2LjAzLDY5LjM0LDE2LjAzYzI0Ljg4LDAsNDguNDItNS43Niw2OS4zNC0xNi4wMwoJCWMtNy45NS0zMC44OC0zNS45OC01My42OS02OS4zNC01My42OVMxMjE2Ljk0LDkzMi4yOCwxMjA4Ljk5LDk2My4xNnoiLz4KCTxwYXRoIGQ9Ik0xMjA4Ljk5LDk2My4xNmM3Ljk1LTMwLjg4LDM1Ljk4LTUzLjY5LDY5LjM0LTUzLjY5czYxLjM5LDIyLjgxLDY5LjM0LDUzLjY5YzUyLjMxLTI1LjY2LDg4LjMyLTc5LjQ0LDg4LjMzLTE0MS42MwoJCWgtMzE1LjM0QzExMjAuNjcsODgzLjcyLDExNTYuNjgsOTM3LjUsMTIwOC45OSw5NjMuMTZ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTgwNi4zOCw0MDYuNjNjMTA2LjY3LDEyMi4yOSwxNzEuMzIsMjgyLjE5LDE3MS40NCw0NTcuMTljMC4yNCwxNTQuNDUtNTEuMTQsMzA0LjU1LTE0NS45OSw0MjYuNDUKCQljLTYuNyw5LjM5LTExLjMzLDIwLjA5LTEzLjU4LDMxLjRjLTMuNDksMTQuNC0yLDI5LjU2LDQuMjEsNDMuMDJsMTguMDIsMzcuMzZjMjEuOTQsMzguODksNzcuMjEsODkuOTIsMTA5LjYxLDExMi42MgoJCWMtMjUuOSwzLjAyLTYwLjM5LDQuMTItODYuNjEsMi44NWMtMzAuNTUtMS43LTYxLjAxLTQuODYtOTEuMjYtOS40N2MtMjQuNzgtMy4zMy00OC45My0xMC4yOC03MS42OS0yMC42MmwtMTEuODgtNy42NQoJCWMtMTUuNDgtOS45Ni0zNC40NC0xMi45Ny01Mi4yNC04LjNsLTIyLjE1LDUuODJjLTQuNjYsMS4yMi05LjE3LDIuOTYtMTMuNDYsNS4xN2MtOTguNjQsNTAuODMtMjA4LjAyLDc3LjMxLTMxOC45OCw3Ny4yMgoJCWMtMzg0LjM5LDAtNjk1Ljk5LTMxMS42MS02OTUuOTktNjk1Ljk5czMxMS42MS02OTUuOTksNjk1Ljk5LTY5NS45OWM3MC4zNywwLjA2LDEzOC4zLDEwLjU1LDIwMi4zMywzMC4wMgoJCWM1NS4xMyw2LjQxLDUzLjI5LTUzLjcsMjQuNDYtNjEuMzljLTcxLjY0LTIyLjMxLTE0Ny44MS0zNC4zMy0yMjYuNzktMzQuMzNjLTQyMC42NywwLTc2MS42OSwzNDEuMDItNzYxLjY5LDc2MS42OQoJCXMzNDEuMDIsNzYxLjY5LDc2MS42OSw3NjEuNjljMTI1Ljg0LDAsMjQ0LjU0LTMwLjUxLDM0OS4xMy04NC41NWM4LjQzLTIuNjIsMTUuMy00LjYzLDIyLjE1LTUuODJjNC45NywzLjY1LDEwLjIxLDcsMTUuNjcsMTAuMDgKCQljNzEuNDQsNDAuMjYsMzIyLjk0LDYxLjc2LDM4OS42My0wLjQyYzE5LjY4LTEyLjc3LDI1LjAxLTMwLjkzLTE3LjczLTU1LjY3Yy01Ljc4LTMuMzQtMTIuMzktNi43MS0xOS44Ni0xMC4wNwoJCWMtMjcuODYtMTIuNTMtMjkuMDgtMTUuMjEtNTMuMDItMzQuNDljLTI0Ljc1LTE5Ljk0LTQ3LjE2LTQwLjU3LTcyLjI5LTc4LjMzYy00LTguNi04LjQ0LTE4LjItMTMuNDEtMjkuMDIKCQljMC40OS0yLjE0LDEuMDItNC4zMSwxLjU4LTYuNTJjMTAwLjE4LTEyOC45NSwxNTkuODQtMjkwLjk2LDE1OS44NC00NjYuOWMwLTE5Ni44Ni03NC42OC0zNzYuMjgtMTk3LjI2LTUxMS40NwoJCUMxODA5LjA1LDMyMC4yNCwxNzYwLjExLDM2MS45LDE4MDYuMzgsNDA2LjYzeiIvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTE3MTEuNTMsMjM0LjcxYy0xOS4yNC0xMy4xNy0zOS4xMS0yNS40Ny01OS41Ni0zNi44NmMtMzMuOS0xOC44OC01Ni44MSw0My45LTMzLjcsNTYuNwoJCWMxNy42NSw5Ljc4LDM0Ljg0LDIwLjMsNTEuNTEsMzEuNTJDMTcwMy4yOSwzMDguNjMsMTc0Ny43NywyNTkuNTIsMTcxMS41MywyMzQuNzF6Ii8+CjwvZz4KPC9zdmc+Cg=='},function(e){e.exports=require('@material-ui/core/Paper')},function(e){e.exports=require('@material-ui/icons/Fullscreen')},function(e){e.exports=require('@material-ui/icons/FullscreenExit')},function(e){e.exports=require('@material-ui/icons/Info')},function(e){e.exports=require('@material-ui/icons/Close')},function(e){e.exports=require('@material-ui/core/Tooltip')},function(e){e.exports=require('@material-ui/core/DialogTitle')},function(e){e.exports=require('@material-ui/core/Dialog')},function(e){e.exports=require('@material-ui/core/DialogActions')},function(e){e.exports=require('@material-ui/core/DialogContent')},function(e){e.exports=require('@material-ui/core/DialogContentText')},function(e){e.exports=require('lodash/isEqual')},function(e){e.exports=require('lodash/merge')},function(e){e.exports=require('@material-ui/core/colors/green')},function(e){e.exports=require('@material-ui/core/CardMedia')},function(e){e.exports=require('@material-ui/core/CardHeader')},function(e){e.exports=require('@material-ui/core/Table')},function(e){e.exports=require('@material-ui/core/TableBody')},function(e){e.exports=require('@material-ui/core/TableCell')},function(e){e.exports=require('@material-ui/core/TableRow')},function(e){e.exports=require('react-google-maps')},function(e){e.exports='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjRUUzODQwIiBkPSJNMTIgMkM4LjEzIDIgNSA1LjEzIDUgOWMwIDUuMjUgNyAxMyA3IDEzczctNy43NSA3LTEzYzAtMy44Ny0zLjEzLTctNy03em0wIDkuNWMtMS4zOCAwLTIuNS0xLjEyLTIuNS0yLjVzMS4xMi0yLjUgMi41LTIuNSAyLjUgMS4xMiAyLjUgMi41LTEuMTIgMi41LTIuNSAyLjV6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg=='},function(e){e.exports='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9ImIiPjx1c2UgeGxpbms6aHJlZj0iI2EiIG92ZXJmbG93PSJ2aXNpYmxlIi8+PC9jbGlwUGF0aD48cGF0aCBjbGlwLXBhdGg9InVybCgjYikiIGZpbGw9IiMyOTc5RkYiIGQ9Ik0xMiAyQzguMTQgMiA1IDUuMTQgNSA5YzAgNS4yNSA3IDEzIDcgMTNzNy03Ljc1IDctMTNjMC0zLjg2LTMuMTQtNy03LTd6bTAgMmMxLjEgMCAyIC45IDIgMiAwIDEuMTEtLjkgMi0yIDJzLTItLjg5LTItMmMwLTEuMS45LTIgMi0yem0wIDEwYy0xLjY3IDAtMy4xNC0uODUtNC0yLjE1LjAyLTEuMzIgMi42Ny0yLjA1IDQtMi4wNXMzLjk4LjczIDQgMi4wNWMtLjg2IDEuMy0yLjMzIDIuMTUtNCAyLjE1eiIvPjwvc3ZnPg=='},function(e){e.exports=require('@material-ui/core/FormControl')},function(e){e.exports=require('@material-ui/core/FormGroup')},function(e){e.exports=require('@material-ui/core/FormControlLabel')},function(e){e.exports=require('@material-ui/core/Checkbox')},function(e){e.exports=require('lodash/every')},function(e){e.exports=require('@material-ui/icons/Send')},function(e){e.exports=require('@material-ui/core/Grid')}])});
//# sourceMappingURL=chatframe.js.map