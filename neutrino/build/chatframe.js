(function(e,t){'object'==typeof exports&&'object'==typeof module?module.exports=t():'function'==typeof define&&define.amd?define('chatframe',[],t):'object'==typeof exports?exports.chatframe=t():e.chatframe=t()})('undefined'==typeof self?this:self,function(){return function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(a,'a',a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='./',t(t.s=20)}([function(e){e.exports=require('react')},function(e){e.exports=require('styled-components')},function(e){e.exports=require('react-redux')},function(e){e.exports=require('date-fns')},function(e){e.exports=require('@material-ui/core/colors/grey')},function(e){e.exports=require('@material-ui/core/styles')},function(e){e.exports=require('@material-ui/core/Typography')},function(e){e.exports=require('@material-ui/core/Button')},function(e){e.exports=require('uuid/v4')},function(e){e.exports=require('lodash')},function(e){e.exports=require('@material-ui/core/Link')},function(e){e.exports=require('@material-ui/core/Card')},function(e){e.exports=require('@material-ui/core/CardContent')},function(e){e.exports=require('redux')},function(e){e.exports=require('@material-ui/core/Avatar')},function(e){e.exports=require('lodash/get')},function(e){e.exports=require('@material-ui/core/IconButton')},function(e){e.exports=require('markdown-to-jsx')},function(e){e.exports=require('@material-ui/core/CardActions')},function(e){e.exports=require('@material-ui/core/TextField')},function(e,t,a){e.exports=a(21)},function(e,t,a){'use strict';function n(e='lightBlue',t='pink',a='lightBlue'){const n={palette:{error:ee.red,contrastThreshold:3,tonalOffset:0.2},typography:{useNextVariants:!0},overrides:{MuiFab:{root:{position:'absolute',bottom:48,right:48}}}};if(ne()(e))n.palette.primary={main:e};else if(ee[e])n.palette.primary=ee[e];else throw new Error(`${e} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);if(ne()(t))n.palette.secondary={main:t};else if(t&&ee[t])n.palette.secondary=ee[t];else throw new Error(`${t} is not a valid color. 
      Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);if(ne()(a))n.palette.header={main:a};else if(ee[a])n.palette.header=ee[a];else throw new Error(`${a} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);return Object(X.createMuiTheme)(n)}function i(e){return new Promise(function(t,a){var n=function(n){try{return console.error(n),t({})}catch(e){return a(e)}};try{let a,i;return console.log('*** Request 1 ***'),Promise.resolve(fetch(e)).then(function(o){try{return a=o,Promise.resolve(a.json()).then(function(a){try{function o(){return t(i)}if(i=a,console.log('response1',i),4===i.webhookStatus.code){let a,i;return console.log('*** Request 2 ***'),Promise.resolve(fetch(e)).then(function(o){try{return a=o,Promise.resolve(a.json()).then(function(a){try{function o(){return t(i)}if(i=a,4===i.webhookStatus.code){let a,i;return console.log('*** Request 3 ***'),Promise.resolve(fetch(e)).then(function(e){try{return a=e,Promise.resolve(a.json()).then(function(e){try{return i=e,0===i.webhookStatus.code?t(i):t(nt(i))}catch(e){return n(e)}},n)}catch(e){return n(e)}},n)}return 0===i.webhookStatus.code?o.call(this):t(nt(i))}catch(e){return n(e)}}.bind(this),n)}catch(e){return n(e)}}.bind(this),n)}return 0===i.webhookStatus.code?o.call(this):t(nt(i))}catch(e){return n(e)}}.bind(this),n)}catch(e){return n(e)}}.bind(this),n)}catch(t){n(t)}})}function o(e){return(t)=>{const a=new it(e);t({type:Te,client:a,clientName:'dialogflow'})}}function s(e){return(t,a)=>{const n=a().conversation.messages,i=$e()(e.responses,['type','suggestion']);if(i?t({type:we}):t({type:he}),0===n.length)t({type:fe,newConversationArray:[e]});else{const a=n.map((t)=>t.loading?e:t).sort((e,t)=>{const a=Object(ye.parse)(e.systemTime,Ze,new Date(e.systemTime)),n=Object(ye.parse)(t.systemTime,Ze,new Date(t.systemTime)),i=Object(ye.differenceInMilliseconds)(a,n);return i});t({type:fe,newConversationArray:a})}}}function r(e){return(t)=>{function a(e){return'text'===e?'text':'card'===e?'card':'quickReplies'===e?'suggestion':'image'===e?'image':'payload'===e?'payload':'text'}const n=pe()(e,'queryResult.outputContexts',[]);t({type:Fe,rawOutputContexts:n});const i=pe()(e,'queryResult.fulfillmentMessages',[]);let o=[],r=!1;try{o=i.map((e)=>{const n=a(e.message),i=pe()(e,'quickReplies.quickReplies',[]),o=pe()(e,'text.text',null),s={title:pe()(e,'card.title',''),subtitle:pe()(e,'card.subtitle',''),imageUrl:pe()(e,'card.imageUri',''),buttons:pe()(e,'card.buttons',[])},l={imageUri:pe()(e,'image.imageUri',''),accessibilityText:pe()(e,'image.accessibilityText','')},d={};if('payload'===n){const a=pe()(e,'payload.fields',{});for(const e of Object.entries(a)){var c=ot(e,2);const t=c[0],a=c[1];if('stringValue'===a.kind)try{d[t]=JSON.parse(a.stringValue)}catch(e){d[t]=a.stringValue}else if(a.kind&&'stringValue'!==a.kind)throw new Error('Use stringValue to send payloads');else return d}if('disableInput'in d){if(1<Object.keys(d).length){const e=tt()(d,['disableInput']);t({type:ze,modifiedPayload:e})}r=!0,t({type:Oe})}else t({type:ze,payload:d})}return'text'===n?{type:n,text:o}:'image'===n?{type:n,image:l}:'suggestion'===n?{type:n,suggestions:i}:'card'===n?{type:n,card:s}:'payload'===n?{type:n,payload:d}:{type:n,text:o}})}catch(e){console.log(e)}let l;r?l=o.filter((e)=>{const t=pe()(e,'payload.disableInput',!1);return!t}):(t({type:Pe}),l=o);const d=Object(ye.format)(new Date,Ze),c={entity:'bot',loading:!1,messageId:e.responseId,key:qe()(),messageSession:e.session,language:e.queryResult.languageCode,systemTime:d,responses:l};t(s(c))}}function l(e){return(t,a)=>{const n=a().conversation.client;t({type:je}),n.textRequest(e).then((e)=>{e?(t(r(e)),t({type:Ce})):t({type:Ie,error:'No response received from chat provider. Please try again.'})}).catch((e)=>{throw new Error(e)}).catch((e)=>{console.log(e),t({type:Ie,error:'Unable to connect to the chat provider. Please try again.'})})}}function d(e){return(t,a)=>{const n=a().conversation.client;t({type:je}),n.eventRequest(e).then((e)=>{e?(t(r(e)),t({type:Ce})):(t({type:Ie,error:'No response received from chat provider. Please try again.'}),t({type:Ae}))}).catch((e)=>{throw new Error(e)}).catch((e)=>{console.log(e),t({type:Ie,error:'Unable to connect to the chat provider. Please try again.'})})}}function c(e,t){return(a)=>{try{if(!e)throw new Error('No conversation provider selected.');if('dialogflow'===e.toLowerCase())a(o(t));else throw a({type:Ie,error:`Unable to connect to ${e}`}),new Error(`${e} is not a recognized conversation provider.`)}catch(e){console.log(e)}}}function u(e){return(t,a)=>{const n=a().conversation.clientName;try{if('dialogflow'===n.toLowerCase())t(l(e));else throw new Error(`${n} is not a recognized conversation provider.`)}catch(e){console.log(e),t({type:Ie,error:`Unable to connect to ${n}`})}}}function m(e){return(t,a)=>{const n=a().conversation.messages.length,i=Object(ye.format)(new Date,Ze),o={entity:'user',messageId:`usermessage-${n}`,systemTime:i,text:e};t({type:Ee,response:o}),t({type:he}),t(u(e))}}function p(e){return(t)=>{t(m(e))}}function y(){return(e,t)=>{const a=t().conversation.conversationStarted;e({type:ve}),a||(e(d('Welcome')),e({type:Ue}))}}function M(){return{type:Re}}function g(){return{type:Se}}function L(){return{type:ke}}function T(){return{type:De}}function f(){return(e,t)=>{const a=t().conversation.lastUpdateTime,n=new Date,i=Object(ye.parse)(a,Ze,new Date(a)),o=Object(ye.differenceInMinutes)(n,i),s=Object(ye.differenceInSeconds)(n,i);let r='Now';1<=o?r=`${o} min ago`:9<=s&&(r=`${s} sec ago`);const l=Object(ye.format)(n,Ze);e({type:xe,headerTime:r,currentTime:l})}}function N(){return(e,t)=>{const a=t().conversation.timer;a&&clearInterval(a);const n=setInterval(()=>e(f()),10000);e({type:be,newTimer:n}),e(f())}}function E(e){return(t)=>{const a=e.title,n=e.avatar,i=e.client,o=e.clientOptions,s=e.initialActive,r=e.fullscreen,l=e.policyText,u=e.mapConfig,m=e.activationText,p=e.feedbackUrl;let M=n;if(M||(M=rt.a),t({type:ge,title:a}),t({type:Le,avatar:M}),t(c(i,o)),t(N()),l&&''!==l&&t({type:Qe,policyText:l}),m&&''!==m&&t({type:_e,activationText:m}),p&&t({type:Ge,feedbackUrl:p}),u){const e=u.googleMapsKey,a=u.centerCoordinates,n=pe()(a,'lat',null),i=pe()(a,'lng',null);if(e&&''!==e&&t({type:Ve,googleMapsKey:e}),a)try{if('object'==typeof a&&null!==n&&null!==i)t({type:Be,centerCoordinates:a});else throw new Error('Please provide valid latitude and longitude coordinates, see README')}catch(e){console.log(e)}}!0===s?(t({type:Ue}),t(d('Welcome')),t(y())):t(g()),!0===r?t(L()):t(T())}}function j(e){return{type:We,value:e}}function b(e){return(t)=>{t(u(e))}}function x(e){return{type:Je,value:e}}function w(e){return Object(O.createElement)(fa,{message:e.text,entity:e.entity,key:e.key,timestamp:e.systemTime,isLoading:!1})}function h(e){return Object(O.createElement)(fa,{key:'loading',entity:'bot',timestamp:e.systemTime,isLoading:e.loading})}function I(e,t=!1){return Object(O.createElement)(Nn,{feedbackData:e.payload.feedback,session:e.session,entity:e.entity,key:e.key,isLoading:!1,timestamp:e.systemTime,className:t?'scrollIntoView':''})}function C(e,t,a=!1){return Object(O.createElement)(fa,{message:e.text,entity:e.entity,key:e.key,isLoading:!1,timestamp:e.systemTime,showTimestamp:t,className:a?'scrollIntoView':''})}function v(e,t=!1){return Object(O.createElement)(ka,{data:e.card,timestamp:e.systemTime,key:e.key,className:t?'scrollIntoView':''})}function S(e,t=!1){return Object(O.createElement)(en,{data:e.payload.mapPayload,timestamp:e.systemTime,key:e.key,className:t?'scrollIntoView':''})}function k(e){return!(256<e.length)}function D(e){const t={value:e,charLength:e.length||0,maxExceeded:255<e.length};return{type:Ne,userInput:t}}function z(){return(e,t)=>{var a=t();const n=a.userInput,i=n.value.trim();if(i&&''!==i){const t=k(n.value);t&&(e(m(n.value)),e(D('')))}}}Object.defineProperty(t,'__esModule',{value:!0});var O=a(0),P=a.n(O),U=a(2),A=a.n(U),R=a(13),Y=a.n(R),Q=a(1),V=a.n(Q),B=a(22),_=a.n(B),W=a(23),G=a.n(W),H=a(24),J=a.n(H),F=a(25),Z=a.n(F),K=a(4),q=a.n(K),X=a(5),$=a.n(X),ee=a(26),te=a.n(ee),ae=a(27),ne=a.n(ae),ie=a(28),oe=a.n(ie),se=a(29),re=a.n(se),le=a(30),de=a.n(le),ce=a(14),ue=a.n(ce),me=a(15),pe=a.n(me),ye=a(3),Me=a.n(ye);const ge='SET_TITLE',Le='SET_AVATAR',Te='SAVE_CLIENT',fe='SAVE_RESPONSE',Ne='SAVE_USER_INPUT',Ee='SAVE_USER_RESPONSE',je='INITIATE_LOADING',be='TIMER_START',xe='UPDATE_CURRENT_TIME',we='SHOW_BUTTON_BAR',he='HIDE_BUTTON_BAR',Ie='DISPLAY_ERROR',Ce='CLEAR_ERROR',ve='SHOW_WINDOW',Se='HIDE_WINDOW',ke='FULLSCREEN',De='WINDOWED',ze='RECEIVE_WEBHOOK_DATA',Oe='DISABLE_INPUT',Pe='ENABLE_INPUT',Ue='SET_CONVERSATION_STARTED',Ae='SET_CONVERSATION_ENDED',Re='SHOW_PRIVACY_POLICY',Ye='HIDE_PRIVACY_POLICY',Qe='SET_PRIVACY_POLICY',Ve='SET_GOOGLE_MAPS_KEY',Be='SET_CENTER_COORDINATES',_e='SET_ACTIVATION_TEXT',We='SAVE_FEEDBACK_INPUT',Ge='SET_FEEDBACK_URL',He='SET_FEEDBACK_SUBMITTED',Je='SET_FEEDBACK_OPTIONS',Fe='SET_OUTPUT_CONTEXTS',Ze='yyyy-MM-dd\'T\'HH:mm:ss.SSS';var Ke=a(8),qe=a.n(Ke),Xe=a(31),$e=a.n(Xe),et=a(32),tt=a.n(et),at=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const nt=(e)=>at({},e,{queryResult:at({},e.queryResult,{fulfillmentMessages:[{message:'',platform:'PLATFORM_UNSPECIFIED',text:{text:['']}}],fulfillmentText:''})});class it{constructor(e){if(!e||!e.textUrl)throw new Error('Fulfillment URL is required to generate a conversation client');this.textUrl=e.textUrl,this.eventUrl=e.eventUrl,this.uuid=qe()()}encodeQueryData(e){const t=[];for(const a in e)t.push(`${encodeURIComponent(a)}=${encodeURIComponent(e[a])}`);return t.join('&')}textRequest(e){return new Promise(function(t,a){if(!e)return a(new Error('Query should not be empty'));const n={query:e,uuid:this.uuid},o=this.encodeQueryData(n),s=`${this.textUrl}?${o}`;return t(i(s))}.bind(this))}eventRequest(e){return new Promise(function(t,a){if(!e)return a(new Error('Query should not be empty'));const n={query:e,uuid:this.uuid},o=this.encodeQueryData(n),s=`${this.eventUrl}?${o}`;return t(i(s))}.bind(this))}}var ot=function(){function e(e,t){var a=[],n=!0,i=!1,o=void 0;try{for(var s,r=e[Symbol.iterator]();!(n=(s=r.next()).done)&&(a.push(s.value),!(t&&a.length===t));n=!0);}catch(e){i=!0,o=e}finally{try{!n&&r['return']&&r['return']()}finally{if(i)throw o}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),st=a(33),rt=a.n(st);const lt=V()(oe.a)`
  && {
    display: ${(e)=>e.active?'flex':'none'};
    pointer-events: auto;
    width: ${(e)=>e.activationtext?'auto':'56px'};
    height: ${(e)=>e.activationtext?'auto':'56px'};
    padding: ${(e)=>e.activationtext?'4px 6px':'auto'};
    border-radius: ${(e)=>e.activationtext?'20px':'50%'};
  }
`,dt=V.a.div`
  text-transform: none;
  padding-right: 10px;
  color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
`,ct=V()(ue.a)`
  && {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 50% 50% 0px 50%;
  }
`;class ut extends O.PureComponent{render(){var e=this.props;const t=e.title,a=e.windowVisible,n=e.showWindow,i=e.activationText,o=e.theme,s=e.avatar,r=i?Object(O.createElement)(P.a.Fragment,null,Object(O.createElement)(ct,{alt:t,src:s}),Object(O.createElement)(dt,{theme:o},i)):Object(O.createElement)(re.a,null);return Object(O.createElement)(de.a,{in:!a,unmountOnExit:!0},Object(O.createElement)(lt,{color:'primary',onClick:n,active:a?0:1,activationtext:i?1:0},r))}}var mt=Object(X.withTheme)()(Object(U.connect)((e)=>({title:e.config.title,windowVisible:e.config.windowVisible,activationText:e.config.activationText,avatar:e.config.avatar}),(e)=>({showWindow:()=>{e(y())}}))(ut)),pt=a(34),yt=a.n(pt),Mt=a(6),gt=a.n(Mt),Lt=a(35),Tt=a.n(Lt),ft=a(36),Nt=a.n(ft),Et=a(37),jt=a.n(Et),bt=a(16),xt=a.n(bt),wt=a(38),ht=a.n(wt),It=a(39),Ct=a.n(It),vt=a(7),St=a.n(vt),kt=a(9),Dt=a.n(kt);const zt=V()(ue.a)`
  && {
    flex: 0 0 32px;
    width: 32px;
    height: 32px;
    margin-right: 16px;
    border-radius: 50% 50% 0px 50%;
  }
`,Ot=V.a.div`
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
`,Pt=V()(gt.a)`
  && {
    font-family: 'Product Sans';
    font-weight: 400;
    height: 32px;
    font-size: 18px;
    line-height: 32px;
    flex: 1;
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
  }
`,Ut=V()(xt.a)`
  && {
    padding: 6px;
    flex: 0;
    cursor: pointer;
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`,At=V()(St.a)`
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
`;class Rt extends O.PureComponent{render(){var e=this.props;const t=e.title,a=e.theme,n=e.hideWindow,i=e.showWindowed,o=e.showFullscreen,s=e.fullscreen,r=e.avatar,l=e.showPrivacyPolicy,d=e.sendQuickReply,c=e.messages,u=Object(kt.findLast)(c,(e)=>{const t=Object(kt.find)(e.responses,['type','suggestion']);return t});let m=null;if(u){const e=u.responses.filter((e)=>'suggestion'===e.type)[0].suggestions;m=Object(kt.find)(e,(e)=>'home'===e.toLowerCase()||'start over'===e.toLowerCase())}return Object(O.createElement)(Ot,{theme:a},Object(O.createElement)(zt,{alt:t,src:r}),Object(O.createElement)(Pt,{theme:a,variant:'h6'},t),m&&Object(O.createElement)(Ct.a,{title:'Return to subject selection',placement:'bottom'},Object(O.createElement)(At,{theme:a,onClick:()=>d('START OVER')},'Start Over')),Object(O.createElement)(Ct.a,{title:'Privacy Policy',placement:'bottom'},Object(O.createElement)(Ut,{theme:a,onClick:l,"aria-label":'Windowed'},Object(O.createElement)(jt.a,{fontSize:'small'}))),s?Object(O.createElement)(Ut,{theme:a,onClick:i,"aria-label":'Windowed'},Object(O.createElement)(Nt.a,{fontSize:'small'})):Object(O.createElement)(Ut,{theme:a,onClick:o,"aria-label":'Fullscreen'},Object(O.createElement)(Tt.a,{fontSize:'small'})),Object(O.createElement)(Ut,{theme:a,onClick:n,"aria-label":'Close'},Object(O.createElement)(ht.a,{fontSize:'small'})))}}var Yt=Object(X.withTheme)()(Object(U.connect)((e)=>({title:e.config.title,fullscreen:e.config.fullscreen,avatar:e.config.avatar,messages:e.conversation.messages}),(e)=>({hideWindow:g,showFullscreen:L,showWindowed:T,showPrivacyPolicy:M,sendQuickReply:(t)=>e(p(t))}))(Rt)),Qt=a(40),Vt=a.n(Qt),Bt=a(41),_t=a.n(Bt),Wt=a(42),Gt=a.n(Wt),Ht=a(43),Jt=a.n(Ht),Ft=a(44),Zt=a.n(Ft);const Kt=V()(_t.a)`
  && {
    position: absolute;
  }
`;class qt extends O.PureComponent{render(){var e=this.props;const t=e.hidePrivacyPolicy,a=e.privacyPolicyVisible,n=e.privacyPolicy,i=e.parentRef;return Object(O.createElement)(Kt,{open:a,onClose:t,"aria-labelledby":'privacy-policy',container:i,scroll:'paper'},Object(O.createElement)(Vt.a,null,'Privacy Statement'),Object(O.createElement)(Jt.a,null,Object(O.createElement)(Zt.a,null,n)),Object(O.createElement)(Gt.a,null,Object(O.createElement)(St.a,{onClick:t,color:'primary'},'Close')))}}var Xt=Object(U.connect)((e)=>({privacyPolicyVisible:e.config.privacyPolicyVisible,privacyPolicy:e.config.privacyPolicy}),{hidePrivacyPolicy:function(){return{type:Ye}}})(qt),$t=a(45),ea=a.n($t),ta=a(46),aa=a.n(ta),na=a(17),ia=a.n(na),oa=a(10),sa=a.n(oa),ra=a(47),la=a.n(ra);const da=V.a.div`
  text-align: center;
  width: 42px;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`,ca=V.a.div`
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
`;class ua extends O.PureComponent{render(){return Object(O.createElement)(da,null,Object(O.createElement)(ca,null),Object(O.createElement)(ca,null),Object(O.createElement)(ca,null))}}const ma=V.a.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 10px;
  height: min-content;
  align-items: ${(e)=>'user'===e.entity?'flex-end':'flex-start'};
  scroll-margin: 15px;
  p, div {
    font-size: 14px;
  }
`,pa=V.a.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  padding: 0;
  justify-content: ${(e)=>'user'===e.entity?'flex-end':'flex-start'};
`,ya=V.a.div`
  && {
    background: ${q.a[400]};
    border-top-right-radius: 10px;
    border-top-left-radius: 1px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 9px;
  }
`,Ma=V.a.div`
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
`,ga=V()(gt.a)`
  && {
    color: ${q.a[500]};
    margin-top: 6px;
    padding-left: 5px;
    padding-right: 2px;
  }
`,La={forceBlock:!0,overrides:{h6:{component:gt.a,props:{variant:'h6'}},p:{component:gt.a,props:{variant:'body1'}},a:{component:sa.a}}};class Ta extends O.Component{constructor(){super(),this.state={isResponseDelayed:!1}}componentDidMount(){const e=this.props.isLoading;e&&(this.loadingTimer=setTimeout(()=>{this.setState(()=>({isResponseDelayed:!0}))},8e3))}componentWillUnmount(){clearTimeout(this.loadingTimer)}render(){var e=this.props;const t=e.message,a=e.entity,n=e.isLoading,i=e.timestamp,o=e.currentTime,s=e.theme,r=e.showTimestamp,l=e.error,d=e.className,c=e.key,u=this.state.isResponseDelayed,m=Object(ye.parse)(i,Ze,new Date(o)),p=Object(ye.isSameDay)(new Date,m),y=Object(ye.isSameDay)(m,Object(ye.subDays)(new Date,1));let M=null;M=p?`Today ${Object(ye.format)(m,'h:mm aa')}`:y?`Yesterday ${Object(ye.format)(m,'h:mm aa')}`:Object(ye.format)(m,'MMMM dd, yyyy h:mm aa');let g;console.log('Message',t),t&&''!==t[0]?(console.log('message[0]',t[0]),g=t):g=['I\u2019m sorry, I am having trouble understanding that question right now. Please try again later or ask me something else.'];return Object(O.createElement)(ma,{entity:a,className:d,key:c},Object(O.createElement)(pa,{entity:a},'user'===a&&Object(O.createElement)(Ma,{elevation:1,theme:s},t),'user'!==a&&Object(O.createElement)(ya,{elevation:1},n&&!l&&!u&&Object(O.createElement)(ua,null),n&&!l&&u&&Object(O.createElement)(ia.a,{options:La},'Thank you for your patience, I\u2019m working hard to get you the best answer. Hold tight!'),n&&l&&l,!n&&Object(O.createElement)(ia.a,{options:La},g[0]))),r?Object(O.createElement)(ga,{variant:'caption'},M):null)}}var fa=Object(X.withTheme)()(Object(U.connect)((e)=>({currentTime:e.conversation.currentTime,error:e.error}))(Ta)),Na=a(11),Ea=a.n(Na),ja=a(18),ba=a.n(ja),xa=a(12),wa=a.n(xa),ha=a(48),Ia=a.n(ha);const Ca=V()(Ea.a)`
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
`,va=V()(Ia.a)`
  && {
    height: ${(e)=>e.image&&''!==e.image?'200px':'0px'};
    background-size: cover;
    background-position: center center;
  }
`;class Sa extends O.PureComponent{render(){var e=this.props.data;const t=e.title,a=e.subtitle,n=e.imageUrl,i=e.buttons,o=e.className;return Object(O.createElement)(Ca,{className:o,key:this.props.key},n?Object(O.createElement)(va,{image:encodeURI(n),title:''}):null,Object(O.createElement)(wa.a,null,Object(O.createElement)(gt.a,{gutterBottom:!0,variant:'h6'},t),Object(O.createElement)(ia.a,{options:{forceBlock:!0,overrides:{h6:{component:gt.a,props:{variant:'h6'}},p:{component:gt.a,props:{variant:'body1'}},a:{component:sa.a}}}},a)),Object(O.createElement)(ba.a,null,i.map((e,t)=>{const a=`card-${t}${Object(ye.format)(new Date,Ze)}`;return Object(O.createElement)(St.a,{href:e.postback,target:'_blank',size:'small',color:'primary',key:a},e.text)})))}}var ka=Object(U.connect)((e)=>({inputValue:e.userInput}))(Sa),Da=a(49),za=a.n(Da),Oa=a(50),Pa=a.n(Oa),Ua=a(51),Aa=a.n(Ua),Ra=a(52),Ya=a.n(Ra),Qa=a(53),Va=a.n(Qa),Ba=a(54),_a=a.n(Ba),Wa=a(55),Ga=a.n(Wa),Ha=a(56),Ja=a.n(Ha);const Fa=V()(Ea.a)`
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
`,Za=V.a.div`
  height: 150px;
  font-size: 14px;
  margin-top: 10px;
`,Ka=V()(wa.a)`
  &&& {
    padding-top: 0;
    padding-bottom: 0;
  }
`,qa=V()(Aa.a)`
  td {
    padding: 4px 0px 4px 0px;
  }
  tr:last-of-type {
    td {
      border-bottom: none;
    }
  }
`,Xa=V()(Ya.a)`
  && {
    width: 70%;
    padding: 4px 0px 4px 0px;
  }
`,$a=V()(Ya.a)`
  &&& {
    width: 20%;
    padding-right: 0;
    text-align: right;
  }
`;var en=Object(U.connect)((e)=>({googleMapsKey:e.config.googleMapsKey}))(function(e){const t=e.data,a=e.googleMapsKey,n=e.className,i=e.key,o='230px',s={width:30,height:30},r=`https://maps.googleapis.com/maps/api/js?key=${a}&v=3`,l=(e)=>{const t=`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${e.placeId}`;window.open(t,'_blank')},d=Object(Ba.withScriptjs)(Object(Ba.withGoogleMap)(()=>Object(O.createElement)(Ba.GoogleMap,{defaultZoom:8,defaultCenter:t.nearestLocations[0],defaultOptions:{zoomControl:!0,mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1}},t.locations.map((e,t)=>Object(O.createElement)(Ba.Marker,{key:t,position:{lat:e.lat,lng:e.lng},icon:{url:Ga.a,scaledSize:s},onClick:()=>l(e)})),Object(O.createElement)(Ba.Marker,{position:{lat:t.currentGeocode.lat,lng:t.currentGeocode.lng},icon:{url:Ja.a,scaledSize:s}}))));return Object(O.createElement)(Fa,{className:n,key:i},Object(O.createElement)(za.a,{title:'Office Locations',titleTypographyProps:{variant:'h6'}}),Object(O.createElement)(Ka,null,Object(O.createElement)(d,{googleMapURL:r,loadingElement:Object(O.createElement)('div',{style:{height:`${o}`}}),containerElement:Object(O.createElement)('div',{style:{height:`${o}`}}),mapElement:Object(O.createElement)('div',{style:{height:'100%'}})}),Object(O.createElement)(Za,null,Object(O.createElement)(Pa.a,{padding:'dense'},Object(O.createElement)(qa,null,t.nearestLocations.map((e,t)=>Object(O.createElement)(Va.a,{key:t},Object(O.createElement)(Xa,{padding:'dense'},Object(O.createElement)(gt.a,null,Object(O.createElement)(sa.a,{href:`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${e.placeId}`,target:'blank'},e.street,', ',e.city))),Object(O.createElement)($a,{padding:'dense'},e.distance))))))))}),tn=a(57),an=a.n(tn),nn=a(58),on=a.n(nn),sn=a(59),rn=a.n(sn),ln=a(60),dn=a.n(ln),cn=a(19),un=a.n(cn),mn=a(61),pn=a.n(mn),yn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Mn=V.a.div`
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 15px;
  padding-top: 13px;
`;class gn extends O.PureComponent{constructor(){super(),this.state={isSubmitted:!1,feedbackComment:''}}render(){var e=this.props;const t=e.feedbackInputs,a=e.feedbackUrl,n=e.saveFeedbackInput,i=e.sendFeedback,o=e.session,s=e.outputContexts,r=(e)=>(t)=>{const a={value:e,checked:t.target.checked};n(a)},l=(e)=>e.filter((e)=>e.checked?e.value:null).map((e)=>e.value),d=(e)=>{fetch(a,{method:'POST',body:JSON.stringify(e),headers:{"Content-Type":'application/json'}})};return Object(O.createElement)(P.a.Fragment,null,this.state.isSubmitted?Object(O.createElement)(wa.a,null,'Thank you. Your feedback is important to us and will help improve Gen.'):Object(O.createElement)('div',null,Object(O.createElement)(wa.a,null,Object(O.createElement)(gt.a,{gutterBottom:!0,variant:'h6'},t.wasHelpful?'Why was Gen helpful?':'Why was Gen not helpful?'),Object(O.createElement)(an.a,{component:'fieldset'},Object(O.createElement)(on.a,null,t.feedbackList?t.feedbackList.map((e)=>Object(O.createElement)(rn.a,{key:e.value,control:Object(O.createElement)(dn.a,{checked:e.checked,onChange:r(e.value),value:e.value}),label:e.value})):null,Object(O.createElement)(Mn,null,'Add your comments'),Object(O.createElement)(un.a,{placeholder:'Type something',variant:'outlined',multiline:!0,value:this.state.feedbackComment,onChange:(t)=>{const e=t.target.value;this.setState((t)=>yn({},t,{feedbackComment:e}))},InputProps:{classes:{inputMultiline:this.props.classes.inputMultiline}}})))),Object(O.createElement)(ba.a,null,Object(O.createElement)(St.a,{size:'small',color:'primary',onClick:()=>{const e={wasHelpful:t.wasHelpful,session:o,feedbackList:l(t.feedbackList),comment:this.state.feedbackComment,outputContexts:s};d(e),i('Feedback complete'),this.setState((e)=>yn({},e,{isSubmitted:!0}))},disabled:(!t.feedbackList||!(0<t.feedbackList.length)||pn()(t.feedbackList,(e)=>!e.checked))&&!this.state.feedbackComment},'Submit'))))}}var Ln=Object(X.withStyles)(()=>({root:{},inputMultiline:{fontSize:'0.875rem',overflowY:'hidden'}}))(Object(U.connect)((e)=>({feedbackInputs:e.feedbackInput,feedbackUrl:e.config.feedbackUrl,outputContexts:e.conversation.outputContexts}),(e)=>({saveFeedbackInput:(t)=>{e(j(t))},sendFeedback:(t)=>{e(b(t))}}))(gn));const Tn=V()(Ea.a)`
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
`;class fn extends O.PureComponent{componentDidMount(){var e=this.props;const t=e.setFeedbackOptions,a=e.feedbackData;t(a)}render(){var e=this.props;const t=e.session,a=e.className,n=e.key;return Object(O.createElement)(Tn,{className:a,key:n},Object(O.createElement)(Ln,{session:t}))}}var Nn=Object(U.connect)((e)=>({feedbackInputs:e.feedbackInput}),(e)=>({setFeedbackOptions:(t)=>{e(x(t))}}))(fn);const En={giant:1170,desktop:992,tablet:768,phone:620},jn=Object.keys(En).reduce((e,t)=>{const a=En[t]/16;return e[t]=(...e)=>Q.css`
    @media (max-width: ${a}em) {
      ${Object(Q.css)(...e)};
    }
  `,e},{});var bn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const xn=V.a.div`
  display: flex;
  flex-direction: column;
  /* Vertically flips the container element to achieve flex-direction:column-reverse effect */
  transform: scale(1, -1);
  overflow: auto;
  ${jn.tablet`
    flex-direction: column-reverse;
    overflow: auto;
    transform: none;
  `};
`,wn=V.a.div`
  background: ${q.a[100]};
  z-index: 4;
  grid-area: chatwindow;
  margin-bottom: 1px;
  margin-top: 8px;

  /* Vertically flips the content element so that the messages won't be upside down */
  transform: scale(1, -1);

  ${jn.tablet`
   transform: none;
  `};
`;class hn extends O.PureComponent{constructor(e){super(e),Object.defineProperty(this,'findIndexFirstElementInLastResponse',{enumerable:!0,writable:!0,value:(e)=>{let t=0,a=!1;return Object(kt.forEachRight)(e,(e,n)=>{'bot'===e.entity?!a&&(t=n):a=!0}),t}}),Object.defineProperty(this,'parseMessages',{enumerable:!0,writable:!0,value:()=>{const e=this.props.messages,t=[];return e.forEach((e)=>{const a={systemTime:e.systemTime,entity:e.entity,session:e.messageSession,key:e.key};if(e.loading){const n=aa()(e,a);t.push(n)}else if('bot'===e.entity)e.responses.forEach((e,n)=>{if('text'===e.type||'card'===e.type||'payload'===e.type){const i=aa()(e,bn({},a,{key:`${a.key}_${n}`}));t.push(i)}});else if('user'===e.entity){const n=aa()(e,a);t.push(n)}}),t}}),Object.defineProperty(this,'createMessageElements',{enumerable:!0,writable:!0,value:()=>{const e=this.parseMessages(),t=[];let a=e;1<e.length&&(a=Object(kt.sortBy)(e,(e)=>new Date(e.systemTime)));const n=this.findIndexFirstElementInLastResponse(a);a.forEach((e,o)=>{const i=o===n;let s=!1;o===a.length-1&&(s=!0),e.loading?t.push(h(e)):'user'===e.entity?t.push(w(e)):'bot'===e.entity&&'text'===e.type?t.push(C(e,s,i)):'bot'===e.entity&&'card'===e.type?t.push(v(e,i)):'bot'===e.entity&&'payload'===e.type&&e.payload.mapPayload?t.push(S(e,i)):'bot'===e.entity&&'payload'===e.type&&e.payload.feedback?t.push(I(e,i)):t.push(C({text:['Something went wrong.']}))}),this.setState((e)=>bn({},e,{messageElements:t}),()=>{document.getElementsByClassName('scrollIntoView')[0]&&setTimeout(()=>document.getElementsByClassName('scrollIntoView')[0].scrollIntoView(!1),0)})}}),Object.defineProperty(this,'handleWheel',{enumerable:!0,writable:!0,value:(t)=>{t.deltaY&&(t.preventDefault(),t.currentTarget.scrollTop-=2*(parseFloat(getComputedStyle(t.currentTarget).getPropertyValue('font-size'))*(0>t.deltaY?-1:1)))}}),Object.defineProperty(this,'componentRef',{enumerable:!0,writable:!0,value:P.a.createRef(null)}),this.messages=[],this.state={messageElements:[]},this.componentRef=P.a.createRef()}componentDidUpdate(){const e=this.parseMessages();ea()(this.messages,e)||(this.messages=e,this.createMessageElements()),this.componentRef.current&&this.componentRef.current.addEventListener('wheel',this.handleWheel)}render(){const e=this.state.messageElements;return Object(O.createElement)(xn,{ref:this.componentRef},Object(O.createElement)(wn,{elevation:1,square:!0},e))}}var In=Object(U.connect)((e)=>({messages:e.conversation.messages,buttonBarVisible:e.buttonBar.visible,error:e.error}))(hn),Cn=a(62),vn=a.n(Cn);const Sn=V.a.div`
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
`,kn=V()(un.a)`
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
`,Dn=V()(xt.a)`
  && {
    padding-right: 15px;
    &:hover {
      background: transparent;
    }
  }
`;class zn extends O.PureComponent{constructor(){super(),this.handleKeyPress=this.handleKeyPress.bind(this)}handleKeyPress(t){13===t.charCode&&(this.props.submitUserInput(),t.preventDefault())}render(){var e=this.props;const t=e.saveUserInput,a=e.inputValue,n=e.shouldDisable,i=a.value,o=`${a.charLength}/255`,s=a.maxExceeded;let r=null;return r=s?`Exceeded character limit: ${o}`:null,Object(O.createElement)(Sn,{visible:n},Object(O.createElement)(kn,{multiline:!0,rowsMax:'4',fullWidth:!0,InputProps:{disableUnderline:!0},placeholder:'Send a message',helperText:r,FormHelperTextProps:{style:{color:'#cd5c5c',margin:0}},onChange:t,value:i,onKeyPress:this.handleKeyPress}),Object(O.createElement)(Dn,{onClick:this.props.submitUserInput,"aria-label":'Send',color:'primary',disabled:s,disableRipple:!0},Object(O.createElement)(vn.a,null)))}}var On=Object(U.connect)((e)=>({inputValue:e.userInput,shouldDisable:e.conversation.disableInput}),(t)=>({saveUserInput:(a)=>{t(D(a.target.value))},submitUserInput:()=>{t(z())}}))(zn),Pn=a(63),Un=a.n(Pn);const An=V.a.div`
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
`,Rn=V()(St.a)`
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
`;class Yn extends O.PureComponent{constructor(){super(),Object.defineProperty(this,'minColumnSpan',{enumerable:!0,writable:!0,value:(e)=>{if(18<=e.length)return 3;return 13<=e.length&&18>e.length?2:1}}),Object.defineProperty(this,'arrangeSubjectMatterSuggestions',{enumerable:!0,writable:!0,value:(e)=>[[Object(kt.find)(e,(e)=>'child support'===e.label.toLowerCase())],[Object(kt.find)(e,(e)=>'snap'===e.label.toLowerCase()),Object(kt.find)(e,(e)=>'tanf'===e.label.toLowerCase())],[Object(kt.find)(e,(e)=>'workforce development'===e.label.toLowerCase())]]}),Object.defineProperty(this,'playTetris',{enumerable:!0,writable:!0,value:(e)=>{const t=(e,t)=>{const a=Object(kt.find)(t,(t)=>t.minColumnSpan===e),n=Object(kt.filter)(t,(e)=>!a||e.label!==a.label);return{next:a,remainingButtons:n}},a=Object(kt.reduce)(e,(e,a)=>{if(0<=Object(kt.findIndex)(e.remainingButtons,(e)=>e.label===a.label)){const n=a;let i=Object(kt.filter)(e.remainingButtons,(e)=>e.label!==n.label);if(3===n.minColumnSpan)return{buttonRows:[...e.buttonRows,[n]],remainingButtons:i};if(2===n.minColumnSpan){let a=t(2,i);i=a.remainingButtons,a.next||(a=t(1,i),i=a.remainingButtons);const o=a.next,s=Object(kt.filter)([n,o],(e)=>!!e);return{buttonRows:[...e.buttonRows,s],remainingButtons:i}}if(1===n.minColumnSpan){let a=t(1,i),o=a.next;if(i=a.remainingButtons,o){const a=t(1,i),s=a.next;i=a.remainingButtons;const r=Object(kt.filter)([n,o,s],(e)=>!!e);return{buttonRows:[...e.buttonRows,r],remainingButtons:i}}a.next||(a=t(2,i),o=a.next,i=a.remainingButtons);const s=Object(kt.filter)([n,o],(e)=>!!e);return{buttonRows:[...e.buttonRows,s],remainingButtons:i}}}return e},{buttonRows:[],remainingButtons:e}),n=a.buttonRows;return n}}),Object.defineProperty(this,'handleSuggestionClick',{enumerable:!0,writable:!0,value:(e)=>{this.setState(()=>({paginationPage:1})),this.props.sendQuickReply(e.toUpperCase())}}),this.state={paginationPage:1}}render(){const e=this.state.paginationPage;var t=this.props;const a=t.visible,n=t.messages,i=Object(kt.findLast)(n,(e)=>{const t=Object(kt.find)(e.responses,['type','suggestion']);return t}),o=[];let s=null,r=!1;if(i){const e=i.responses.filter((e)=>'suggestion'===e.type)[0].suggestions,t=Object(kt.filter)(e,(e)=>'go back'!==e.toLowerCase()&&'home'!==e.toLowerCase()&&'start over'!==e.toLowerCase());4===t.length&&Object(kt.find)(t,(e)=>'child support'===e.toLowerCase())&&Object(kt.find)(t,(e)=>'tanf'===e.toLowerCase())&&Object(kt.find)(t,(e)=>'snap'===e.toLowerCase())&&Object(kt.find)(t,(e)=>'workforce development'===e.toLowerCase())&&(r=!0),s=Object(kt.find)(e,(e)=>'go back'===e.toLowerCase());for(const e of t){const t=this.minColumnSpan(e);o.push({label:e,id:i.messageId,visible:a,minColumnSpan:t})}}const l=r?this.arrangeSubjectMatterSuggestions(o):this.playTetris(o),d=4,c=Math.ceil(l.length/d),u=Array(c).fill().map(()=>l.splice(0,d));return(0<o.length||s)&&Object(O.createElement)(An,{visible:a},Object(O.createElement)(Un.a,{container:!0},0<o.length&&u[e-1].map((e,t)=>Object(O.createElement)(Un.a,{key:`buttonRow_${t}`,container:!0,item:!0,spacing:8,xs:12},e.map((a,n)=>Object(O.createElement)(Un.a,{key:`buttonRow_${t}_${n}`,item:!0,xs:12/e.length},Object(O.createElement)(Rn,{size:'small',color:'secondary',key:`${a.id}-btn${n}`,visible:a.visible.toString(),navigationbutton:'false',onClick:()=>this.handleSuggestionClick(a.label)},a.label))))),Object(O.createElement)(Un.a,{item:!0,container:!0,xs:12,justify:'space-between',spacing:8},s&&1===e&&Object(O.createElement)(Un.a,{item:!0,xs:4},Object(O.createElement)(Rn,{size:'small',color:'secondary',visible:'true',navigationbutton:'true',onClick:()=>this.handleSuggestionClick(s)},s)),1<c&&1<e&&Object(O.createElement)(Un.a,{item:!0,xs:5},Object(O.createElement)(Rn,{size:'small',color:'secondary',visible:'true',navigationbutton:'true',onClick:()=>this.setState((e)=>({paginationPage:e.paginationPage-1}))},'Previous Options')),1<c&&e<c&&Object(O.createElement)(Un.a,{item:!0,xs:5},Object(O.createElement)(Rn,{size:'small',color:'secondary',visible:'true',navigationbutton:'true',onClick:()=>this.setState((e)=>({paginationPage:e.paginationPage+1}))},'More Options')))))}}var Qn=Object(U.connect)((e)=>({visible:e.buttonBar.visible,messages:e.conversation.messages}),(e)=>({sendQuickReply:(t)=>{e(p(t))}}))(Yn);const Vn=V()(yt.a)`
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

    ${jn.phone`
    width: ${(e)=>e.visible?'calc(100% - 20px)':'0'};
    height: ${(e)=>e.visible?'calc(100% - 96px)':'0'};
    right: 10px;
    max-width: none;
    max-height: none;
  `};
  }
`,Bn=V.a.div`
  && {
    width: 100%;
    height: 100%;
    transform-origin: bottom right;
    pointer-events: auto;
    background: ${q.a[100]};
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
`;class _n extends O.PureComponent{constructor(e){super(e),this.containerRef=P.a.createRef()}render(){var e=this.props;const t=e.windowVisible,a=e.fullscreen;return Object(O.createElement)(Vn,{elevation:4,fullscreen:a?1:0,visible:t?1:0},Object(O.createElement)(Bn,{ref:this.containerRef,className:'mui-fixed'},Object(O.createElement)(Yt,null),Object(O.createElement)(Xt,{parentRef:this.containerRef.current}),Object(O.createElement)(In,null),Object(O.createElement)(Qn,null),Object(O.createElement)(On,null)))}}var Wn=Object(U.connect)((e)=>({windowVisible:e.config.windowVisible,fullscreen:e.config.fullscreen}))(_n),Gn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Hn={avatar:null,title:'Chat Window',windowVisible:!1,fullscreen:!1,privacyPolicyVisible:!1,googleMapsKey:'',centerCoordinates:'',activationText:'',privacyPolicy:'Please do not enter any personally identifiable information such as SSN, Date of Birth, Case Number or last name.',feedbackUrl:''};var Jn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Fn={client:null,clientName:null,messages:[],webhookPayload:null,disableInput:!1,lastUpdateTime:Object(ye.format)(new Date,Ze),currentTime:Object(ye.format)(new Date,Ze),headerTime:'Now',timer:null,conversationStarted:!1};var Zn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Kn={visible:!1,buttons:[]};const qn={value:'',charLength:0,maxExceeded:!1};var Xn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const $n={submitted:!1,wasHelpful:null,feedbackList:null};const ei='';const ti=Object(R.combineReducers)({config:function(e=Hn,t){switch(t.type){case Ye:return Gn({},e,{privacyPolicyVisible:!1});case Re:return Gn({},e,{privacyPolicyVisible:!0});case Qe:return Gn({},e,{privacyPolicy:t.policyText});case Ve:return Gn({},e,{googleMapsKey:t.googleMapsKey});case Be:return Gn({},e,{centerCoordinates:t.centerCoordinates});case _e:return Gn({},e,{activationText:t.activationText});case Le:return Gn({},e,{avatar:t.avatar});case ge:return Gn({},e,{title:t.title});case ve:return Gn({},e,{windowVisible:!0});case Se:return Gn({},e,{windowVisible:!1});case ke:return Gn({},e,{fullscreen:!0});case De:return Gn({},e,{fullscreen:!1});case Ge:return Gn({},e,{feedbackUrl:t.feedbackUrl});default:return e;}},conversation:function(e=Fn,t){switch(t.type){case Te:return Jn({},e,{client:t.client,clientName:t.clientName});case xe:return Jn({},e,{headerTime:t.headerTime,currentTime:t.currentTime});case be:return Jn({},e,{timer:t.timer});case je:return Jn({},e,{messages:[...e.messages,{loading:!0,entity:'bot',systemTime:Object(ye.format)(new Date,Ze)}]});case fe:return Jn({},e,{lastUpdateTime:Object(ye.format)(new Date,Ze),headerTime:'Now',messages:t.newConversationArray});case Ee:return Jn({},e,{lastUpdateTime:Object(ye.format)(new Date,Ze),headerTime:'Now',messages:[...e.messages,Jn({},t.response,{key:qe()()})].sort((e,t)=>{const a=Object(ye.parse)(e.systemTime,Ze,new Date(e.systemTime)),n=Object(ye.parse)(t.systemTime,Ze,new Date(t.systemTime)),i=Object(ye.differenceInMilliseconds)(n,a);return i})});case ze:return Jn({},e,{webhookPayload:t.payload});case Pe:return Jn({},e,{disableInput:!1});case Oe:return Jn({},e,{disableInput:!0});case Ue:return Jn({},e,{conversationStarted:!0});case Ae:return Jn({},e,{conversationStarted:!1});case Fe:return Jn({},e,{outputContexts:t.rawOutputContexts});default:return e;}},buttonBar:function(e=Kn,t){switch(t.type){case we:return Zn({},e,{visible:!0});case he:return Zn({},e,{visible:!1});default:return e;}},userInput:function(e=qn,t){switch(t.type){case Ne:return t.userInput;default:return e;}},feedbackInput:function(e=$n,t){switch(t.type){case We:return Xn({},e,{feedbackList:e.feedbackList.map((e)=>e.value===t.value.value?Xn({},e,{checked:t.value.checked}):e)});case Je:return Xn({},e,{wasHelpful:t.value.helpful,feedbackList:t.value.options.map((e)=>Xn({},e,{checked:!1}))});case He:return Xn({},e,{submitted:!0});default:return e;}},error:function(e=ei,t){switch(t.type){case Ie:return t.error;case Ce:return ei;default:return e;}}});_.a.load({google:{families:['Roboto:300,400,500','Product Sans:400']}});const ai=V.a.div`
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
`,ni=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.compose;class ii extends O.PureComponent{constructor(e){super(e),this.store=Object(R.createStore)(ti,ni(Object(R.applyMiddleware)(J.a))),this.currentValue=null,this.theme=n(this.props.primaryColor,this.props.secondaryColor,this.props.headerColor)}componentDidMount(){this.store.dispatch(E(this.props,this.theme)),this.unsubscribe=this.store.subscribe(()=>this.handleChange(this.store))}componentWillUnmount(){this.unsubscribe()}select(e){return e.conversation.webhookPayload}handleChange(e){const t=this.currentValue;this.currentValue=this.select(e.getState()),t!==this.currentValue&&this.props.onPayload&&this.props.onPayload(this.currentValue)}render(){return Object(O.createElement)(U.Provider,{store:this.store},Object(O.createElement)(G.a,{theme:this.theme},Object(O.createElement)(ai,null,Object(O.createElement)(Wn,null),Object(O.createElement)(mt,null))))}}t['default']=ii},function(e){e.exports=require('webfontloader')},function(e){e.exports=require('@material-ui/core/styles/MuiThemeProvider')},function(e){e.exports=require('redux-thunk')},function(e){e.exports=require('whatwg-fetch')},function(e){e.exports=require('@material-ui/core/colors')},function(e){e.exports=require('validator/lib/isHexColor')},function(e){e.exports=require('@material-ui/core/Fab')},function(e){e.exports=require('@material-ui/icons/Chat')},function(e){e.exports=require('@material-ui/core/Zoom')},function(e){e.exports=require('lodash/find')},function(e){e.exports=require('lodash/omit')},function(e){e.exports='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNTkyIDE3MjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1OTIgMTcyODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGQkRCMzI7c3Ryb2tlOiNGQURBMzI7fQoJLnN0MXtmaWxsOiNENDczOTQ7fQoJLnN0MntzdHJva2U6I0ZBREEzMjt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE4MTQuMjMsMTMzNmMzMC4yNC00Mi45LDU1LjQ5LTg4LjgsNzUuNDItMTM2LjgyYzM1LjY5LTg1Ljk5LDU0LjM1LTE3OC43NSw1NC4yLTI3My4wOQoJCWMtMC4yOC0zOTMuNTktMzE5LjI0LTcxMi42LTcxMi44My03MTIuOTRjLTE1OS4wNiwwLTMwNS45NCw1Mi4wOS00MjQuNTMsMTQwLjE1QzY2OS40Myw0ODAuNDEsNTgzLjY1LDY2Mi4wNSw1ODMuNjUsODYzLjcyCgkJYzAsMzg0LjM5LDMxMS42MSw2OTUuOTksNjk1Ljk5LDY5NS45OWMxMTAuOTcsMC4wOSwyMjAuMzQtMjYuMzksMzE4Ljk4LTc3LjIyYzQuMjgtMi4yMSw4Ljc5LTMuOTQsMTMuNDYtNS4xN2wyMi4xNS01LjgyCgkJYzE3LjgxLTQuNjgsMzYuNzYtMS42Nyw1Mi4yNCw4LjNsMTEuODgsNy42NWMyMi43NiwxMC4zNCw0Ni45MSwxNy4yOSw3MS42OSwyMC42MmMyMC4yNSwzLjA5LDQwLjU4LDUuNTIsNjAuOTgsNy4zCgkJYzEwLjA4LDAuODgsMjAuMTcsMS42LDMwLjI4LDIuMTdjMjYuMjIsMS4yNyw2MC43MSwwLjE3LDg2LjYxLTIuODVjLTMyLjQtMjIuNy04Ny42Ny03My43My0xMDkuNjEtMTEyLjYybC0xOC4wMi0zNy4zNgoJCUMxODE2LjEsMTM1NS42NSwxODE0LjA2LDEzNDUuODQsMTgxNC4yMywxMzM2eiIvPgoJPHBhdGggZD0iTTExMTUuNDYsNTk1LjQ5YzIuMzMtMjIuNjgtNC42NS00MS4zNi0yNC41Ny01My41NmMtNDIuNDUtMjMuMTUtOTcuMjEsMC42Ny05MS43Nyw1My41NmMwLDI2LjU5LDAsNTMuMTgsMCw3OS43OAoJCWMtNS40NCw1Mi44OSw0OS4zMSw3Ni43MSw5MS43Nyw1My41NmMxOS45Mi0xMi4yLDI2LjkxLTMwLjg4LDI0LjU3LTUzLjU2QzExMTUuNDYsNjQ4LjY3LDExMTUuNDYsNjIyLjA4LDExMTUuNDYsNTk1LjQ5eiIvPgoJPHBhdGggZD0iTTE1NjEuMjUsNTk1LjQ5YzIuMzMtMjIuNjgtNC42NS00MS4zNi0yNC41Ny01My41NmMtNDIuNDUtMjMuMTUtOTcuMjEsMC42Ny05MS43Nyw1My41NmMwLDI2LjU5LDAsNTMuMTgsMCw3OS43OAoJCWMtNS40NCw1Mi44OSw0OS4zMSw3Ni43MSw5MS43Nyw1My41NmMxOS45Mi0xMi4yLDI2LjkxLTMwLjg4LDI0LjU3LTUzLjU2QzE1NjEuMjUsNjQ4LjY3LDE1NjEuMjUsNjIyLjA4LDE1NjEuMjUsNTk1LjQ5eiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTEyMDguOTksOTYzLjE2YzIwLjkzLDEwLjI2LDQ0LjQ2LDE2LjAzLDY5LjM0LDE2LjAzYzI0Ljg4LDAsNDguNDItNS43Niw2OS4zNC0xNi4wMwoJCWMtNy45NS0zMC44OC0zNS45OC01My42OS02OS4zNC01My42OVMxMjE2Ljk0LDkzMi4yOCwxMjA4Ljk5LDk2My4xNnoiLz4KCTxwYXRoIGQ9Ik0xMjA4Ljk5LDk2My4xNmM3Ljk1LTMwLjg4LDM1Ljk4LTUzLjY5LDY5LjM0LTUzLjY5czYxLjM5LDIyLjgxLDY5LjM0LDUzLjY5YzUyLjMxLTI1LjY2LDg4LjMyLTc5LjQ0LDg4LjMzLTE0MS42MwoJCWgtMzE1LjM0QzExMjAuNjcsODgzLjcyLDExNTYuNjgsOTM3LjUsMTIwOC45OSw5NjMuMTZ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTgwNi4zOCw0MDYuNjNjMTA2LjY3LDEyMi4yOSwxNzEuMzIsMjgyLjE5LDE3MS40NCw0NTcuMTljMC4yNCwxNTQuNDUtNTEuMTQsMzA0LjU1LTE0NS45OSw0MjYuNDUKCQljLTYuNyw5LjM5LTExLjMzLDIwLjA5LTEzLjU4LDMxLjRjLTMuNDksMTQuNC0yLDI5LjU2LDQuMjEsNDMuMDJsMTguMDIsMzcuMzZjMjEuOTQsMzguODksNzcuMjEsODkuOTIsMTA5LjYxLDExMi42MgoJCWMtMjUuOSwzLjAyLTYwLjM5LDQuMTItODYuNjEsMi44NWMtMzAuNTUtMS43LTYxLjAxLTQuODYtOTEuMjYtOS40N2MtMjQuNzgtMy4zMy00OC45My0xMC4yOC03MS42OS0yMC42MmwtMTEuODgtNy42NQoJCWMtMTUuNDgtOS45Ni0zNC40NC0xMi45Ny01Mi4yNC04LjNsLTIyLjE1LDUuODJjLTQuNjYsMS4yMi05LjE3LDIuOTYtMTMuNDYsNS4xN2MtOTguNjQsNTAuODMtMjA4LjAyLDc3LjMxLTMxOC45OCw3Ny4yMgoJCWMtMzg0LjM5LDAtNjk1Ljk5LTMxMS42MS02OTUuOTktNjk1Ljk5czMxMS42MS02OTUuOTksNjk1Ljk5LTY5NS45OWM3MC4zNywwLjA2LDEzOC4zLDEwLjU1LDIwMi4zMywzMC4wMgoJCWM1NS4xMyw2LjQxLDUzLjI5LTUzLjcsMjQuNDYtNjEuMzljLTcxLjY0LTIyLjMxLTE0Ny44MS0zNC4zMy0yMjYuNzktMzQuMzNjLTQyMC42NywwLTc2MS42OSwzNDEuMDItNzYxLjY5LDc2MS42OQoJCXMzNDEuMDIsNzYxLjY5LDc2MS42OSw3NjEuNjljMTI1Ljg0LDAsMjQ0LjU0LTMwLjUxLDM0OS4xMy04NC41NWM4LjQzLTIuNjIsMTUuMy00LjYzLDIyLjE1LTUuODJjNC45NywzLjY1LDEwLjIxLDcsMTUuNjcsMTAuMDgKCQljNzEuNDQsNDAuMjYsMzIyLjk0LDYxLjc2LDM4OS42My0wLjQyYzE5LjY4LTEyLjc3LDI1LjAxLTMwLjkzLTE3LjczLTU1LjY3Yy01Ljc4LTMuMzQtMTIuMzktNi43MS0xOS44Ni0xMC4wNwoJCWMtMjcuODYtMTIuNTMtMjkuMDgtMTUuMjEtNTMuMDItMzQuNDljLTI0Ljc1LTE5Ljk0LTQ3LjE2LTQwLjU3LTcyLjI5LTc4LjMzYy00LTguNi04LjQ0LTE4LjItMTMuNDEtMjkuMDIKCQljMC40OS0yLjE0LDEuMDItNC4zMSwxLjU4LTYuNTJjMTAwLjE4LTEyOC45NSwxNTkuODQtMjkwLjk2LDE1OS44NC00NjYuOWMwLTE5Ni44Ni03NC42OC0zNzYuMjgtMTk3LjI2LTUxMS40NwoJCUMxODA5LjA1LDMyMC4yNCwxNzYwLjExLDM2MS45LDE4MDYuMzgsNDA2LjYzeiIvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTE3MTEuNTMsMjM0LjcxYy0xOS4yNC0xMy4xNy0zOS4xMS0yNS40Ny01OS41Ni0zNi44NmMtMzMuOS0xOC44OC01Ni44MSw0My45LTMzLjcsNTYuNwoJCWMxNy42NSw5Ljc4LDM0Ljg0LDIwLjMsNTEuNTEsMzEuNTJDMTcwMy4yOSwzMDguNjMsMTc0Ny43NywyNTkuNTIsMTcxMS41MywyMzQuNzF6Ii8+CjwvZz4KPC9zdmc+Cg=='},function(e){e.exports=require('@material-ui/core/Paper')},function(e){e.exports=require('@material-ui/icons/Fullscreen')},function(e){e.exports=require('@material-ui/icons/FullscreenExit')},function(e){e.exports=require('@material-ui/icons/Info')},function(e){e.exports=require('@material-ui/icons/Close')},function(e){e.exports=require('@material-ui/core/Tooltip')},function(e){e.exports=require('@material-ui/core/DialogTitle')},function(e){e.exports=require('@material-ui/core/Dialog')},function(e){e.exports=require('@material-ui/core/DialogActions')},function(e){e.exports=require('@material-ui/core/DialogContent')},function(e){e.exports=require('@material-ui/core/DialogContentText')},function(e){e.exports=require('lodash/isEqual')},function(e){e.exports=require('lodash/merge')},function(e){e.exports=require('@material-ui/core/colors/green')},function(e){e.exports=require('@material-ui/core/CardMedia')},function(e){e.exports=require('@material-ui/core/CardHeader')},function(e){e.exports=require('@material-ui/core/Table')},function(e){e.exports=require('@material-ui/core/TableBody')},function(e){e.exports=require('@material-ui/core/TableCell')},function(e){e.exports=require('@material-ui/core/TableRow')},function(e){e.exports=require('react-google-maps')},function(e){e.exports='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjRUUzODQwIiBkPSJNMTIgMkM4LjEzIDIgNSA1LjEzIDUgOWMwIDUuMjUgNyAxMyA3IDEzczctNy43NSA3LTEzYzAtMy44Ny0zLjEzLTctNy03em0wIDkuNWMtMS4zOCAwLTIuNS0xLjEyLTIuNS0yLjVzMS4xMi0yLjUgMi41LTIuNSAyLjUgMS4xMiAyLjUgMi41LTEuMTIgMi41LTIuNSAyLjV6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg=='},function(e){e.exports='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9ImIiPjx1c2UgeGxpbms6aHJlZj0iI2EiIG92ZXJmbG93PSJ2aXNpYmxlIi8+PC9jbGlwUGF0aD48cGF0aCBjbGlwLXBhdGg9InVybCgjYikiIGZpbGw9IiMyOTc5RkYiIGQ9Ik0xMiAyQzguMTQgMiA1IDUuMTQgNSA5YzAgNS4yNSA3IDEzIDcgMTNzNy03Ljc1IDctMTNjMC0zLjg2LTMuMTQtNy03LTd6bTAgMmMxLjEgMCAyIC45IDIgMiAwIDEuMTEtLjkgMi0yIDJzLTItLjg5LTItMmMwLTEuMS45LTIgMi0yem0wIDEwYy0xLjY3IDAtMy4xNC0uODUtNC0yLjE1LjAyLTEuMzIgMi42Ny0yLjA1IDQtMi4wNXMzLjk4LjczIDQgMi4wNWMtLjg2IDEuMy0yLjMzIDIuMTUtNCAyLjE1eiIvPjwvc3ZnPg=='},function(e){e.exports=require('@material-ui/core/FormControl')},function(e){e.exports=require('@material-ui/core/FormGroup')},function(e){e.exports=require('@material-ui/core/FormControlLabel')},function(e){e.exports=require('@material-ui/core/Checkbox')},function(e){e.exports=require('lodash/every')},function(e){e.exports=require('@material-ui/icons/Send')},function(e){e.exports=require('@material-ui/core/Grid')}])});
//# sourceMappingURL=chatframe.js.map