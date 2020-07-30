(function(e,t){'object'==typeof exports&&'object'==typeof module?module.exports=t():'function'==typeof define&&define.amd?define('chatframe',[],t):'object'==typeof exports?exports.chatframe=t():e.chatframe=t()})('undefined'==typeof self?this:self,function(){return function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(a,'a',a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='./',t(t.s=19)}([function(e){e.exports=require('react')},function(e){e.exports=require('styled-components')},function(e){e.exports=require('react-redux')},function(e){e.exports=require('date-fns')},function(e){e.exports=require('@material-ui/core/colors/grey')},function(e){e.exports=require('@material-ui/core/Typography')},function(e){e.exports=require('@material-ui/core/styles')},function(e){e.exports=require('@material-ui/core/Button')},function(e){e.exports=require('@material-ui/core/CardContent')},function(e){e.exports=require('@material-ui/core/Link')},function(e){e.exports=require('@material-ui/core/Card')},function(e){e.exports=require('redux')},function(e){e.exports=require('@material-ui/core/Avatar')},function(e){e.exports=require('lodash/get')},function(e){e.exports=require('lodash/find')},function(e){e.exports=require('uuid/v4')},function(e){e.exports=require('@material-ui/core/IconButton')},function(e){e.exports=require('markdown-to-jsx')},function(e){e.exports=require('@material-ui/core/CardActions')},function(e,t,a){e.exports=a(20)},function(e,t,a){'use strict';function n(e='lightBlue',t='pink',a='lightBlue'){const n={palette:{error:ee.red,contrastThreshold:3,tonalOffset:0.2},typography:{useNextVariants:!0},overrides:{MuiFab:{root:{position:'absolute',bottom:48,right:48}}}};if(ne()(e))n.palette.primary={main:e};else if(ee[e])n.palette.primary=ee[e];else throw new Error(`${e} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);if(ne()(t))n.palette.secondary={main:t};else if(t&&ee[t])n.palette.secondary=ee[t];else throw new Error(`${t} is not a valid color. 
      Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);if(ne()(a))n.palette.header={main:a};else if(ee[a])n.palette.header=ee[a];else throw new Error(`${a} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);return Object(q.createMuiTheme)(n)}function i(e,t=1){const a=fetch(e).then((e)=>e.json()).catch((a)=>{if(1===t)throw a;setTimeout(()=>{i(e,t-1)},500)});return a}function r(e){return(t)=>{const a=new ot(e);t({type:je,client:a,clientName:'dialogflow'})}}function o(e){return(t,a)=>{const n=a().conversation.messages,i=tt()(e.responses,['type','suggestion']);if(i?t({type:Se}):t({type:De}),0===n.length)t({type:xe,newConversationArray:[e]});else{const a=n.map((t)=>t.loading?e:t).sort((e,t)=>{const a=Object(Le.parse)(e.systemTime,$e,new Date(e.systemTime)),n=Object(Le.parse)(t.systemTime,$e,new Date(t.systemTime)),i=Object(Le.differenceInMilliseconds)(a,n);return i});t({type:xe,newConversationArray:a})}}}function s(e){return(t)=>{function a(e){return'text'===e?'text':'card'===e?'card':'quickReplies'===e?'suggestion':'image'===e?'image':'payload'===e?'payload':'text'}const n=ge()(e,'queryResult.outputContexts',[]);t({type:qe,rawOutputContexts:n});const i=ge()(e,'queryResult.fulfillmentMessages',[]);let r=[],s=!1;try{r=i.map((e)=>{const n=a(e.message),i=ge()(e,'quickReplies.quickReplies',[]),r=ge()(e,'text.text',null),o={title:ge()(e,'card.title',''),subtitle:ge()(e,'card.subtitle',''),imageUrl:ge()(e,'card.imageUri',''),buttons:ge()(e,'card.buttons',[])},l={imageUri:ge()(e,'image.imageUri',''),accessibilityText:ge()(e,'image.accessibilityText','')},d={};if('payload'===n){const a=ge()(e,'payload.fields',{});for(const e of Object.entries(a)){var c=st(e,2);const t=c[0],a=c[1];if('stringValue'===a.kind)try{d[t]=JSON.parse(a.stringValue)}catch(e){d[t]=a.stringValue}else if(a.kind&&'stringValue'!==a.kind)throw new Error('Use stringValue to send payloads');else return d}if('disableInput'in d){if(1<Object.keys(d).length){const e=nt()(d,['disableInput']);t({type:Ue,modifiedPayload:e})}s=!0,t({type:Qe})}else t({type:Ue,payload:d})}return'text'===n?{type:n,text:r}:'image'===n?{type:n,image:l}:'suggestion'===n?{type:n,suggestions:i}:'card'===n?{type:n,card:o}:'payload'===n?{type:n,payload:d}:{type:n,text:r}})}catch(e){console.log(e)}let l;s?l=r.filter((e)=>{const t=ge()(e,'payload.disableInput',!1);return!t}):(t({type:Ye}),l=r);const d=Object(Le.format)(new Date,$e),c={entity:'bot',loading:!1,messageId:e.responseId,messageSession:e.session,language:e.queryResult.languageCode,systemTime:d,responses:l};t(o(c))}}function l(e){return(t,a)=>{const n=a().conversation.client;t({type:we}),n.textRequest(e).then((e)=>{e?(t(s(e)),t({type:ze})):t({type:ve,error:'No response received from chat provider. Please try again.'})}).catch((e)=>{throw new Error(e)}).catch((e)=>{console.log(e),t({type:ve,error:'Unable to connect to the chat provider. Please try again.'})})}}function d(e){return(t,a)=>{const n=a().conversation.client;t({type:we}),n.eventRequest(e).then((e)=>{e?(t(s(e)),t({type:ze})):(t({type:ve,error:'No response received from chat provider. Please try again.'}),t({type:Ge}))}).catch((e)=>{throw new Error(e)}).catch((e)=>{console.log(e),t({type:ve,error:'Unable to connect to the chat provider. Please try again.'})})}}function c(e,t){return(a)=>{try{if(!e)throw new Error('No conversation provider selected.');if('dialogflow'===e.toLowerCase())a(r(t));else throw a({type:ve,error:`Unable to connect to ${e}`}),new Error(`${e} is not a recognized conversation provider.`)}catch(e){console.log(e)}}}function u(e){return(t,a)=>{const n=a().conversation.clientName;try{if('dialogflow'===n.toLowerCase())t(l(e));else throw new Error(`${n} is not a recognized conversation provider.`)}catch(e){console.log(e),t({type:ve,error:`Unable to connect to ${n}`})}}}function p(e){return(t,a)=>{const n=a().conversation.messages.length,i=Object(Le.format)(new Date,$e),r={entity:'user',messageId:`usermessage-${n}`,systemTime:i,text:e};t({type:Ie,response:r}),t({type:De}),t(u(e))}}function m(e){return(t)=>{t(p(e))}}function y(){return(e,t)=>{const a=t().conversation.conversationStarted;e({type:ke}),a||(e(d('Welcome')),e({type:Re}))}}function M(){return{type:Oe}}function N(){return{type:Ae}}function g(){return{type:Pe}}function L(){return(e,t)=>{const a=t().conversation.lastUpdateTime,n=new Date,i=Object(Le.parse)(a,$e,new Date(a)),r=Object(Le.differenceInMinutes)(n,i),o=Object(Le.differenceInSeconds)(n,i);let s='Now';1<=r?s=`${r} min ago`:9<=o&&(s=`${o} sec ago`);const l=Object(Le.format)(n,$e);e({type:be,headerTime:s,currentTime:l})}}function T(){return(e,t)=>{const a=t().conversation.timer;a&&clearInterval(a);const n=setInterval(()=>e(L()),10000);e({type:he,newTimer:n}),e(L())}}function E(e){return(t)=>{const a=e.title,n=e.avatar,i=e.client,r=e.clientOptions,o=e.initialActive,s=e.fullscreen,l=e.policyText,u=e.mapConfig,p=e.activationText,m=e.feedbackUrl;let L=n;if(L||(L=dt.a),t({type:Ee,title:a}),t({type:fe,avatar:L}),t(c(i,r)),t(T()),l&&''!==l&&t({type:We,policyText:l}),p&&''!==p&&t({type:Je,activationText:p}),m&&t({type:He,feedbackUrl:m}),u){const e=u.googleMapsKey,a=u.centerCoordinates,n=ge()(a,'lat',null),i=ge()(a,'lng',null);if(e&&''!==e&&t({type:Ve,googleMapsKey:e}),a)try{if('object'==typeof a&&null!==n&&null!==i)t({type:Fe,centerCoordinates:a});else throw new Error('Please provide valid latitude and longitude coordinates, see README')}catch(e){console.log(e)}}!0===o?(t({type:Re}),t(d('Welcome')),t(y())):t(M()),!0===s?t(N()):t(g())}}function f(e){return{type:Ze,value:e}}function j(e){return(t)=>{t(u(e))}}function x(e){return{type:Xe,value:e}}function C(e){return{type:Ke,value:e}}function I(e){return Object(O.createElement)(ha,{message:e.text,entity:e.entity,key:e.key,timestamp:e.systemTime,isLoading:!1})}function w(e){return Object(O.createElement)(ha,{key:'loading',entity:'bot',timestamp:e.systemTime,isLoading:e.loading})}function h(e){return Object(O.createElement)(jn,{feedbackData:e.payload.feedback,session:e.session,entity:e.entity,key:e.key,isLoading:!1,timestamp:e.systemTime})}function b(e,t){return Object(O.createElement)(ha,{message:e.text,entity:e.entity,key:e.key,isLoading:!1,timestamp:e.systemTime,showTimestamp:t})}function S(e){return Object(O.createElement)(Ya,{data:e.card,timestamp:e.systemTime,key:e.key})}function D(e){return Object(O.createElement)(dn,{data:e.payload.mapPayload,timestamp:e.systemTime,key:e.key})}function v(e){return!(256<e.length)}function z(e){const t={value:e,charLength:e.length||0,maxExceeded:255<e.length};return{type:Ce,userInput:t}}function k(){return(e,t)=>{var a=t();const n=a.userInput,i=n.value.trim();if(i&&''!==i){const t=v(n.value);t&&(e(p(n.value)),e(z('')))}}}Object.defineProperty(t,'__esModule',{value:!0});var O=a(0),A=a.n(O),P=a(2),U=a.n(P),Q=a(11),Y=a.n(Q),R=a(1),G=a.n(R),_=a(21),B=a.n(_),W=a(22),V=a.n(W),F=a(23),J=a.n(F),Z=a(24),H=a.n(Z),K=a(4),X=a.n(K),q=a(6),$=a.n(q),ee=a(25),te=a.n(ee),ae=a(26),ne=a.n(ae),ie=a(27),re=a.n(ie),oe=a(28),se=a.n(oe),le=a(29),de=a.n(le),ce=a(30),ue=a.n(ce),pe=a(12),me=a.n(pe),ye=a(31),Me=a.n(ye),Ne=a(13),ge=a.n(Ne),Le=a(3),Te=a.n(Le);const Ee='SET_TITLE',fe='SET_AVATAR',je='SAVE_CLIENT',xe='SAVE_RESPONSE',Ce='SAVE_USER_INPUT',Ie='SAVE_USER_RESPONSE',we='INITIATE_LOADING',he='TIMER_START',be='UPDATE_CURRENT_TIME',Se='SHOW_BUTTON_BAR',De='HIDE_BUTTON_BAR',ve='DISPLAY_ERROR',ze='CLEAR_ERROR',ke='SHOW_WINDOW',Oe='HIDE_WINDOW',Ae='FULLSCREEN',Pe='WINDOWED',Ue='RECEIVE_WEBHOOK_DATA',Qe='DISABLE_INPUT',Ye='ENABLE_INPUT',Re='SET_CONVERSATION_STARTED',Ge='SET_CONVERSATION_ENDED',_e='SHOW_PRIVACY_POLICY',Be='HIDE_PRIVACY_POLICY',We='SET_PRIVACY_POLICY',Ve='SET_GOOGLE_MAPS_KEY',Fe='SET_CENTER_COORDINATES',Je='SET_ACTIVATION_TEXT',Ze='SAVE_FEEDBACK_INPUT',He='SET_FEEDBACK_URL',Ke='SET_FEEDBACK_SUBMITTED',Xe='SET_FEEDBACK_OPTIONS',qe='SET_OUTPUT_CONTEXTS',$e='yyyy-MM-dd\'T\'HH:mm:ss.SSS';var et=a(14),tt=a.n(et),at=a(32),nt=a.n(at),it=a(15),rt=a.n(it);class ot{constructor(e){if(!e||!e.textUrl)throw new Error('Fulfillment URL is required to generate a conversation client');this.textUrl=e.textUrl,this.eventUrl=e.eventUrl,this.uuid=rt()()}encodeQueryData(e){const t=[];for(const a in e)t.push(`${encodeURIComponent(a)}=${encodeURIComponent(e[a])}`);return t.join('&')}textRequest(e){if(!e)throw new Error('Query should not be empty');const t={query:e,uuid:this.uuid},a=this.encodeQueryData(t),n=`${this.textUrl}?${a}`;return i(n,2)}eventRequest(e){if(!e)throw new Error('Query should not be empty');const t={query:e,uuid:this.uuid},a=this.encodeQueryData(t),n=`${this.eventUrl}?${a}`;return fetch(n).then((e)=>e.json()).catch((e)=>{throw new Error(e)})}}var st=function(){function e(e,t){var a=[],n=!0,i=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(a.push(o.value),!(t&&a.length===t));n=!0);}catch(e){i=!0,r=e}finally{try{!n&&s['return']&&s['return']()}finally{if(i)throw r}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),lt=a(33),dt=a.n(lt),ct=function(){function e(e,t){var a=[],n=!0,i=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(a.push(o.value),!(t&&a.length===t));n=!0);}catch(e){i=!0,r=e}finally{try{!n&&s['return']&&s['return']()}finally{if(i)throw r}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}();const ut=G()(re.a)`
  && {
    display: ${(e)=>e.active?'flex':'none'};
    pointer-events: auto;
    width: ${(e)=>e.activationtext?'auto':'56px'};
    height: ${(e)=>e.activationtext?'auto':'56px'};
    padding: ${(e)=>e.activationtext?'4px 6px':'auto'};
    border-radius: ${(e)=>e.activationtext?'20px':'50%'};
  }
`,pt=G.a.div`
  text-transform: none;
  padding-right: 10px;
  color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
`,mt=G()(me.a)`
  && {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 50% 50% 0px 50%;
  }
`,yt=window.matchMedia('(min-width: 768px)');var Mt=Object(O.useState)(yt.matches),Nt=ct(Mt,2);const gt=Nt[0],Lt=Nt[1];Object(O.useEffect)(()=>{const e=(t)=>Lt(t.matches);return yt.addListener(e),()=>yt.removeListener(e)});const Tt=()=>({customBadge:{backgroundColor:'red',height:'11px',width:'11px',left:'-13px',border:'solid white 1px'},welcomeBubble:(e)=>({display:e?'':'none'})}),Et=G.a.div`
  z-index: 10000;
  position: absolute;
  top: -43px;
  left: -315px;
  color: black;
  font-family: 'Product Sans';
  font-weight: 400;
  font-size: 15px;
  text-transform: none;
  max-width: 270px;
  border: 2px solid #666;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 8px;
  -webkit-box-shadow: 2px 2px 4px #888;
  -moz-box-shadow: 2px 2px 4px #888;
  box-shadow: 2px 2px 4px #888;
  text-align: left;
  padding: 8px;

  :before {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0px;
    left: 286px;
    top: 11px;
    border: 15px solid;
    border-left: none;
    border-color: transparent transparent #666 transparent;
  }

  :after {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    left: 266px;
    top: 9px;
    border: 15px solid;
    border-color: transparent transparent #fff transparent;
  }
`,ft=G()(Me.a)`
  color: #666
  position: absolute;
  top: -11px;
  right: -13px;
  background-color: white;
`;class jt extends O.PureComponent{constructor(){super(),Object.defineProperty(this,'closeGenGreeting',{enumerable:!0,writable:!0,value:(t)=>{t.stopPropagation(),this.setState(()=>({displayGenGreeting:!1}))}}),this.state={displayGenGreeting:!0}}render(){var e=this.props;const t=e.title,a=e.windowVisible,n=e.showWindow,i=e.activationText,r=e.theme,o=e.avatar,s=e.classes,l=e.conversationStarted,d=this.state.displayGenGreeting,c=i?Object(O.createElement)(A.a.Fragment,null,Object(O.createElement)(ue.a,{classes:{badge:s.customBadge},overlap:'circle',variant:'dot',badgeContent:0,invisible:!d||l},Object(O.createElement)(mt,{alt:t,src:o}),Object(O.createElement)(pt,{theme:r},i),d&&!l&&Object(O.createElement)(Et,{classes:Tt.welcomeBubble(gt)},'I have some new features waiting for you. Check it out and let\'s chat!',Object(O.createElement)(ft,{onClick:this.closeGenGreeting})))):Object(O.createElement)(se.a,null);return Object(O.createElement)(de.a,{in:!a,unmountOnExit:!0},Object(O.createElement)(ut,{color:'primary',onClick:n,active:a?0:1,activationtext:i?1:0},c))}}var xt=Object(q.withStyles)(Tt)(Object(q.withTheme)()(Object(P.connect)((e)=>({title:e.config.title,windowVisible:e.config.windowVisible,activationText:e.config.activationText,avatar:e.config.avatar,conversationStarted:e.conversation.conversationStarted}),(e)=>({showWindow:()=>{e(y())}}))(jt))),Ct=a(34),It=a.n(Ct),wt=a(5),ht=a.n(wt),bt=a(35),St=a.n(bt),Dt=a(36),vt=a.n(Dt),zt=a(37),kt=a.n(zt),Ot=a(16),At=a.n(Ot),Pt=a(38),Ut=a.n(Pt),Qt=a(39),Yt=a.n(Qt);const Rt=G()(me.a)`
  && {
    flex: 0 0 32px;
    width: 32px;
    height: 32px;
    margin-right: 16px;
    border-radius: 50% 50% 0px 50%;
  }
`,Gt=G.a.div`
  position: absolute;
  bottom: -1px;
  left: 27px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid ${X.a[100]};
`,_t=G.a.div`
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
`,Bt=G()(ht.a)`
  && {
    font-family: 'Product Sans';
    font-weight: 400;
    height: 32px;
    font-size: 18px;
    line-height: 32px;
    flex: 1;
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
  }
`,Wt=G()(At.a)`
  && {
    padding: 6px;
    flex: 0;
    cursor: pointer;
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`;class Vt extends O.PureComponent{render(){var e=this.props;const t=e.title,a=e.theme,n=e.hideWindow,i=e.showWindowed,r=e.showFullscreen,o=e.fullscreen,s=e.avatar,l=e.showPrivacyPolicy;return Object(O.createElement)(_t,{theme:a},Object(O.createElement)(Gt,null),Object(O.createElement)(Rt,{alt:t,src:s}),Object(O.createElement)(Bt,{theme:a,variant:'h6'},t),Object(O.createElement)(Yt.a,{title:'Privacy Policy',placement:'bottom'},Object(O.createElement)(Wt,{theme:a,onClick:l,"aria-label":'Windowed'},Object(O.createElement)(kt.a,{fontSize:'small'}))),o?Object(O.createElement)(Wt,{theme:a,onClick:i,"aria-label":'Windowed'},Object(O.createElement)(vt.a,{fontSize:'small'})):Object(O.createElement)(Wt,{theme:a,onClick:r,"aria-label":'Fullscreen'},Object(O.createElement)(St.a,{fontSize:'small'})),Object(O.createElement)(Wt,{theme:a,onClick:n,"aria-label":'Close'},Object(O.createElement)(Ut.a,{fontSize:'small'})))}}var Ft=Object(q.withTheme)()(Object(P.connect)((e)=>({title:e.config.title,fullscreen:e.config.fullscreen,avatar:e.config.avatar}),{hideWindow:M,showFullscreen:N,showWindowed:g,showPrivacyPolicy:function(){return{type:_e}}})(Vt)),Jt=a(40),Zt=a.n(Jt),Ht=a(41),Kt=a.n(Ht),Xt=a(42),qt=a.n(Xt),$t=a(43),ea=a.n($t),ta=a(44),aa=a.n(ta),na=a(7),ia=a.n(na);const ra=G()(Kt.a)`
  && {
    position: absolute;
  }
`;class oa extends O.PureComponent{render(){var e=this.props;const t=e.hidePrivacyPolicy,a=e.privacyPolicyVisible,n=e.privacyPolicy,i=e.parentRef;return Object(O.createElement)(ra,{open:a,onClose:t,"aria-labelledby":'privacy-policy',container:i,scroll:'paper'},Object(O.createElement)(Zt.a,null,'Privacy Statement'),Object(O.createElement)(ea.a,null,Object(O.createElement)(aa.a,null,n)),Object(O.createElement)(qt.a,null,Object(O.createElement)(ia.a,{onClick:t,color:'primary'},'Close')))}}var sa=Object(P.connect)((e)=>({privacyPolicyVisible:e.config.privacyPolicyVisible,privacyPolicy:e.config.privacyPolicy}),{hidePrivacyPolicy:function(){return{type:Be}}})(oa),la=a(45),da=a.n(la),ca=a(46),ua=a.n(ca),pa=a(17),ma=a.n(pa),ya=a(9),Ma=a.n(ya),Na=a(47),ga=a.n(Na);const La=G.a.div`
  text-align: center;
  width: 42px;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`,Ta=G.a.div`
  animation: dot-keyframes 1s infinite ease-in-out;
  background-color: ${ga.a[900]};
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
`;class Ea extends O.PureComponent{render(){return Object(O.createElement)(La,null,Object(O.createElement)(Ta,null),Object(O.createElement)(Ta,null),Object(O.createElement)(Ta,null))}}const fa=G.a.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 15px 16px 15px 16px;
  height: min-content;
  align-items: ${(e)=>'user'===e.entity?'flex-end':'flex-start'};
`,ja=G.a.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${(e)=>'user'===e.entity?'flex-end':'flex-start'};
`,xa=G.a.div`
  && {
    background: ${X.a[400]};
    border-top-right-radius: 10px;
    border-top-left-radius: 1px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 12px;
  }
`,Ca=G.a.div`
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
`,Ia=G()(ht.a)`
  && {
    color: ${X.a[500]};
    margin-top: 6px;
    padding-left: 5px;
    padding-right: 2px;
  }
`;class wa extends O.PureComponent{render(){var e=this.props;const t=e.message,a=e.entity,n=e.isLoading,i=e.timestamp,r=e.currentTime,o=e.theme,s=e.showTimestamp,l=e.error,d=Object(Le.parse)(i,$e,new Date(r)),c=Object(Le.isSameDay)(new Date,d),u=Object(Le.isSameDay)(d,Object(Le.subDays)(new Date,1));let p=null;p=c?`Today ${Object(Le.format)(d,'h:mm aa')}`:u?`Yesterday ${Object(Le.format)(d,'h:mm aa')}`:Object(Le.format)(d,'MMMM dd, yyyy h:mm aa');let m;t&&''!==t[0]?m=t:(console.error('Message.js, class Message, render(), this.props: ',this.props),m=['Oops! Something happened with the connection. Please try again.']);let y=Object(O.createElement)(Ea,null);n&&l&&(y=l);const M='user'===a?Object(O.createElement)(Ca,{elevation:1,theme:o},t):Object(O.createElement)(xa,{elevation:1},n?y:Object(O.createElement)(ma.a,{options:{forceBlock:!0,overrides:{h6:{component:ht.a,props:{variant:'h6'}},p:{component:ht.a,props:{variant:'body1'}},a:{component:Ma.a}}}},m[0]));return Object(O.createElement)(fa,{entity:a},Object(O.createElement)(ja,{entity:a},M),s?Object(O.createElement)(Ia,{variant:'caption'},p):null)}}var ha=Object(q.withTheme)()(Object(P.connect)((e)=>({currentTime:e.conversation.currentTime,error:e.error}))(wa)),ba=a(10),Sa=a.n(ba),Da=a(18),va=a.n(Da),za=a(8),ka=a.n(za),Oa=a(48),Aa=a.n(Oa);const Pa=G()(Sa.a)`
  && {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #fff;
    margin: 15px 16px 15px 16px;
    white-space: pre-line;
  }
`,Ua=G()(Aa.a)`
  && {
    height: ${(e)=>e.image&&''!==e.image?'200px':'0px'};
    background-size: cover;
    background-position: center center;
  }
`;class Qa extends O.PureComponent{render(){var e=this.props.data;const t=e.title,a=e.subtitle,n=e.imageUrl,i=e.buttons;return Object(O.createElement)(Pa,null,n?Object(O.createElement)(Ua,{image:encodeURI(n),title:''}):null,Object(O.createElement)(ka.a,null,Object(O.createElement)(ht.a,{gutterBottom:!0,variant:'h6'},t),Object(O.createElement)(ma.a,{options:{forceBlock:!0,overrides:{h6:{component:ht.a,props:{variant:'h6'}},p:{component:ht.a,props:{variant:'body1'}},a:{component:Ma.a}}}},a)),Object(O.createElement)(va.a,null,i.map((e,t)=>{const a=`card-${t}${Object(Le.format)(new Date,$e)}`;return Object(O.createElement)(ia.a,{href:e.postback,target:'_blank',size:'small',color:'primary',key:a},e.text)})))}}var Ya=Object(P.connect)((e)=>({inputValue:e.userInput}))(Qa),Ra=a(49),Ga=a.n(Ra),_a=a(50),Ba=a.n(_a),Wa=a(51),Va=a.n(Wa),Fa=a(52),Ja=a.n(Fa),Za=a(53),Ha=a.n(Za),Ka=a(54),Xa=a.n(Ka),qa=a(55),$a=a.n(qa),en=a(56),tn=a.n(en);const an=G()(Sa.a)`
  && {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #fff;
    margin: 15px 16px 15px 16px;
    white-space: pre-line;
  }
`,nn=G.a.div`
  height: 150px;
  font-size: 12px;
  margin-top: 10px;
`,rn=G()(ka.a)`
  &&& {
    padding-top: 0;
    padding-bottom: 0;
  }
`,on=G()(Va.a)`
  td {
    padding: 4px 0px 4px 0px;
  }
  tr:last-of-type {
    td {
      border-bottom: none;
    }
  }
`,sn=G()(Ja.a)`
  && {
    width: 70%;
    padding: 4px 0px 4px 0px;
  }
`,ln=G()(Ja.a)`
  &&& {
    width: 20%;
    padding-right: 0;
    text-align: right;
  }
`;var dn=Object(P.connect)((e)=>({googleMapsKey:e.config.googleMapsKey}))(function(e){const t=e.data,a=e.googleMapsKey,n='230px',r={width:30,height:30},i=`https://maps.googleapis.com/maps/api/js?key=${a}&v=3`,o=(e)=>{const t=`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${e.placeId}`;window.open(t,'_blank')},s=Object(Ka.withScriptjs)(Object(Ka.withGoogleMap)(()=>Object(O.createElement)(Ka.GoogleMap,{defaultZoom:8,defaultCenter:t.nearestLocations[0],defaultOptions:{zoomControl:!0,mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1}},t.locations.map((e,t)=>Object(O.createElement)(Ka.Marker,{key:t,position:{lat:e.lat,lng:e.lng},icon:{url:$a.a,scaledSize:r},onClick:()=>o(e)})),Object(O.createElement)(Ka.Marker,{position:{lat:t.currentGeocode.lat,lng:t.currentGeocode.lng},icon:{url:tn.a,scaledSize:r}}))));return Object(O.createElement)(an,null,Object(O.createElement)(Ga.a,{title:'Office Locations'}),Object(O.createElement)(rn,null,Object(O.createElement)(s,{googleMapURL:i,loadingElement:Object(O.createElement)('div',{style:{height:`${n}`}}),containerElement:Object(O.createElement)('div',{style:{height:`${n}`}}),mapElement:Object(O.createElement)('div',{style:{height:'100%'}})}),Object(O.createElement)(nn,null,Object(O.createElement)(Ba.a,{padding:'dense'},Object(O.createElement)(on,null,t.nearestLocations.map((e,t)=>Object(O.createElement)(Ha.a,{key:t},Object(O.createElement)(sn,{padding:'dense'},Object(O.createElement)(ht.a,null,Object(O.createElement)(Ma.a,{href:`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${e.placeId}`,target:'blank'},e.street,', ',e.city))),Object(O.createElement)(ln,{padding:'dense'},e.distance))))))))}),cn=a(57),un=a.n(cn),pn=a(58),mn=a.n(pn),yn=a(59),Mn=a.n(yn),Nn=a(60),gn=a.n(Nn);class Ln extends O.PureComponent{render(){var e=this.props;const t=e.feedbackInputs,a=e.feedbackUrl,n=e.saveFeedbackInput,i=e.setFeedbackSubmitted,r=e.sendFeedback,o=e.session,s=e.outputContexts,l=(e)=>(t)=>{const a={value:e,checked:t.target.checked};n(a)},d=(e)=>e.filter((e)=>e.checked?e.value:null).map((e)=>e.value),c=(e)=>{fetch(a,{method:'POST',body:JSON.stringify(e),headers:{"Content-Type":'application/json'}})};return Object(O.createElement)(A.a.Fragment,null,Object(O.createElement)(ka.a,null,Object(O.createElement)(ht.a,{gutterBottom:!0,variant:'h6'},t.wasHelpful?'Why was Gen helpful?':'Why was Gen not helpful?'),Object(O.createElement)(un.a,{component:'fieldset'},Object(O.createElement)(mn.a,null,t.feedbackList?t.feedbackList.map((e)=>Object(O.createElement)(Mn.a,{key:e.value,control:Object(O.createElement)(gn.a,{checked:e.checked,onChange:l(e.value),value:e.value}),label:e.value})):null))),Object(O.createElement)(va.a,null,Object(O.createElement)(ia.a,{size:'small',color:'primary',onClick:()=>{const e={wasHelpful:t.wasHelpful,session:o,feedbackList:d(t.feedbackList),outputContexts:s};c(e),r('Feedback complete'),i(!0)}},'Submit')))}}var Tn=Object(P.connect)((e)=>({feedbackInputs:e.feedbackInput,feedbackUrl:e.config.feedbackUrl,outputContexts:e.conversation.outputContexts}),(e)=>({saveFeedbackInput:(t)=>{e(f(t))},setFeedbackSubmitted:()=>{e(C(!0))},sendFeedback:(t)=>{e(j(t))}}))(Ln);const En=G()(Sa.a)`
  && {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #fff;
    margin: 15px 16px 15px 16px;
    white-space: pre-line;
  }
`;class fn extends O.PureComponent{componentDidMount(){var e=this.props;const t=e.setFeedbackOptions,a=e.feedbackData;t(a)}render(){var e=this.props;const t=e.session,a=e.feedbackInputs;return Object(O.createElement)(En,null,a.submitted?Object(O.createElement)(ka.a,null,'Thank you. Your feedback is important to us and will help improve Gen.'):Object(O.createElement)(Tn,{session:t}))}}var jn=Object(P.connect)((e)=>({feedbackInputs:e.feedbackInput}),(e)=>({setFeedbackOptions:(t)=>{e(x(t))}}))(fn);const xn={giant:1170,desktop:992,tablet:768,phone:620},Cn=Object.keys(xn).reduce((e,t)=>{const a=xn[t]/16;return e[t]=(...e)=>R.css`
    @media (max-width: ${a}em) {
      ${Object(R.css)(...e)};
    }
  `,e},{}),In=G.a.div`
  display: flex;
  flex-direction: column;
  /* Vertically flips the container element to achieve flex-direction:column-reverse effect */
  transform: scale(1, -1);
  overflow: auto;
  ${Cn.tablet`
    flex-direction: column-reverse;
    overflow: auto;
    transform: none;
  `};
`,wn=G.a.div`
  background: ${X.a[100]};
  z-index: 4;
  grid-area: chatwindow;
  margin-bottom: 1px;
  margin-top: 8px;
`,hn=G.a.div`
  /* Vertically flips the content element so that the messages won't be upside down */
  transform: scale(1, -1);

  ${Cn.tablet`
   transform: none;
  `};
`;class bn extends O.PureComponent{constructor(e){super(e),Object.defineProperty(this,'parseMessages',{enumerable:!0,writable:!0,value:()=>{const e=this.props.messages,t=[];return e.forEach((e)=>{const a={systemTime:e.systemTime,entity:e.entity,session:e.messageSession};if(e.loading){const n=rt()();a.key=n;const i=ua()(e,a);t.push(i)}else if('bot'===e.entity)e.responses.forEach((e)=>{if('text'===e.type||'card'===e.type||'payload'===e.type){const n=rt()();a.key=n;const i=ua()(e,a);t.push(i)}});else if('user'===e.entity){const n=rt()();a.key=n;const i=ua()(e,a);t.push(i)}}),t}}),Object.defineProperty(this,'createMessageElements',{enumerable:!0,writable:!0,value:()=>{const e=this.parseMessages(),t=[];e.forEach((a,n)=>{let i=!1;n===e.length-1&&(i=!0),a.loading?t.push(w(a)):'user'===a.entity?t.push(I(a)):'bot'===a.entity&&'text'===a.type?t.push(b(a,i)):'bot'===a.entity&&'card'===a.type?t.push(S(a)):'bot'===a.entity&&'payload'===a.type&&a.payload.mapPayload?t.push(D(a)):'bot'===a.entity&&'payload'===a.type&&a.payload.feedback?t.push(h(a)):(console.error('ChatWindow.js, createMessageElements(): newMessages, msg, i',e,a,n),t.push(b({text:['Something went wrong.']})))}),t.sort((e,t)=>{const a=Object(Le.parse)(e.props.timestamp,$e,new Date(e.props.timestamp)),n=Object(Le.parse)(t.props.timestamp,$e,new Date(t.props.timestamp)),i=Object(Le.differenceInMilliseconds)(a,n);return i}),this.setState({messageElements:t})}}),Object.defineProperty(this,'handleWheel',{enumerable:!0,writable:!0,value:(t)=>{t.deltaY&&(t.preventDefault(),t.currentTarget.scrollTop-=2*(parseFloat(getComputedStyle(t.currentTarget).getPropertyValue('font-size'))*(0>t.deltaY?-1:1)))}}),Object.defineProperty(this,'componentRef',{enumerable:!0,writable:!0,value:A.a.createRef(null)}),this.messages=[],this.state={messageElements:[]}}componentDidUpdate(){const e=this.parseMessages();da()(this.messages,e)||(this.messages=e,this.createMessageElements()),this.componentRef.current&&this.componentRef.current.addEventListener('wheel',this.handleWheel)}render(){const e=this.state.messageElements;return Object(O.createElement)(In,{ref:this.componentRef},Object(O.createElement)(wn,{elevation:1,square:!0},Object(O.createElement)(hn,null,e)))}}var Sn=Object(P.connect)((e)=>({messages:e.conversation.messages,buttonBarVisible:e.buttonBar.visible,error:e.error}))(bn),Dn=a(61),vn=a.n(Dn),zn=a(62),kn=a.n(zn);const On=G.a.div`
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
`,An=G()(kn.a)`
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
`,Pn=G()(At.a)`
  && {
    padding: 16px 12px 16px 4px;
    &:hover {
      background: transparent;
    }
  }
`;class Un extends O.PureComponent{constructor(){super(),this.handleKeyPress=this.handleKeyPress.bind(this)}handleKeyPress(t){13===t.charCode&&(this.props.submitUserInput(),t.preventDefault())}render(){var e=this.props;const t=e.saveUserInput,a=e.inputValue,n=e.shouldDisable,i=a.value,r=`${a.charLength}/255`,o=a.maxExceeded;let s=null;return s=o?`Exceeded character limit: ${r}`:null,Object(O.createElement)(On,{visible:n},Object(O.createElement)(An,{multiline:!0,rowsMax:'4',fullWidth:!0,InputProps:{disableUnderline:!0},placeholder:'Send a message',helperText:s,FormHelperTextProps:{style:{color:'#cd5c5c',margin:0}},onChange:t,value:i,onKeyPress:this.handleKeyPress}),Object(O.createElement)(Pn,{onClick:this.props.submitUserInput,"aria-label":'Send',color:'primary',disabled:o,disableRipple:!0},Object(O.createElement)(vn.a,null)))}}var Qn=Object(P.connect)((e)=>({inputValue:e.userInput,shouldDisable:e.conversation.disableInput}),(t)=>({saveUserInput:(a)=>{t(z(a.target.value))},submitUserInput:()=>{t(k())}}))(Un),Yn=a(63),Rn=a.n(Yn);const Gn=G.a.div`
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
`,_n=G()(ia.a)`
  && {
    margin-right: 12px;
    margin-top: 12px;
    display: ${(e)=>'true'===e.visible?'block':'none'};
  }
`;class Bn extends O.PureComponent{render(){var e=this.props;const t=e.visible,a=e.messages,n=e.sendQuickReply,i=Rn()(a,(e)=>{const t=tt()(e.responses,['type','suggestion']);return t}),r=[];if(i){const e=i.responses.filter((e)=>'suggestion'===e.type);for(const a of e)for(const e of a.suggestions)r.push({label:e,id:i.messageId,visible:t})}return Object(O.createElement)(Gn,{visible:t},r.map((e,t)=>Object(O.createElement)(_n,{size:'small',variant:'outlined',color:'secondary',key:`${e.id}-btn${t}`,visible:e.visible.toString(),onClick:()=>n(e.label)},e.label)))}}var Wn=Object(P.connect)((e)=>({visible:e.buttonBar.visible,messages:e.conversation.messages}),(e)=>({sendQuickReply:(t)=>{e(m(t))}}))(Bn);const Vn=G()(It.a)`
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

    ${Cn.phone`
    width: ${(e)=>e.visible?'calc(100% - 20px)':'0'};
    height: ${(e)=>e.visible?'calc(100% - 96px)':'0'};
    right: 10px;
    max-width: none;
    max-height: none;
  `};
  }
`,Fn=G.a.div`
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
`;class Jn extends O.PureComponent{constructor(e){super(e),this.containerRef=A.a.createRef()}render(){var e=this.props;const t=e.windowVisible,a=e.fullscreen;return Object(O.createElement)(Vn,{elevation:4,fullscreen:a?1:0,visible:t?1:0},Object(O.createElement)(Fn,{ref:this.containerRef,className:'mui-fixed'},Object(O.createElement)(Ft,null),Object(O.createElement)(sa,{parentRef:this.containerRef.current}),Object(O.createElement)(Sn,null),Object(O.createElement)(Wn,null),Object(O.createElement)(Qn,null)))}}var Zn=Object(P.connect)((e)=>({windowVisible:e.config.windowVisible,fullscreen:e.config.fullscreen}))(Jn),Hn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Kn={avatar:null,title:'Chat Window',windowVisible:!1,fullscreen:!1,privacyPolicyVisible:!1,googleMapsKey:'',centerCoordinates:'',activationText:'',privacyPolicy:'Please do not enter any personally identifiable information such as SSN, Date of Birth, Case Number or last name.',feedbackUrl:''};var Xn=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const qn={client:null,clientName:null,messages:[],webhookPayload:null,disableInput:!1,lastUpdateTime:Object(Le.format)(new Date,$e),currentTime:Object(Le.format)(new Date,$e),headerTime:'Now',timer:null,conversationStarted:!1};var $n=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const ei={visible:!1,buttons:[]};const ti={value:'',charLength:0,maxExceeded:!1};var ai=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const ni={submitted:!1,wasHelpful:null,feedbackList:null};const ii='';const ri=Object(Q.combineReducers)({config:function(e=Kn,t){switch(t.type){case Be:return Hn({},e,{privacyPolicyVisible:!1});case _e:return Hn({},e,{privacyPolicyVisible:!0});case We:return Hn({},e,{privacyPolicy:t.policyText});case Ve:return Hn({},e,{googleMapsKey:t.googleMapsKey});case Fe:return Hn({},e,{centerCoordinates:t.centerCoordinates});case Je:return Hn({},e,{activationText:t.activationText});case fe:return Hn({},e,{avatar:t.avatar});case Ee:return Hn({},e,{title:t.title});case ke:return Hn({},e,{windowVisible:!0});case Oe:return Hn({},e,{windowVisible:!1});case Ae:return Hn({},e,{fullscreen:!0});case Pe:return Hn({},e,{fullscreen:!1});case He:return Hn({},e,{feedbackUrl:t.feedbackUrl});default:return e;}},conversation:function(e=qn,t){switch(t.type){case je:return Xn({},e,{client:t.client,clientName:t.clientName});case be:return Xn({},e,{headerTime:t.headerTime,currentTime:t.currentTime});case he:return Xn({},e,{timer:t.timer});case we:return Xn({},e,{messages:[...e.messages,{loading:!0,entity:'bot',systemTime:Object(Le.format)(new Date,$e)}]});case xe:return Xn({},e,{lastUpdateTime:Object(Le.format)(new Date,$e),headerTime:'Now',messages:t.newConversationArray});case Ie:return Xn({},e,{lastUpdateTime:Object(Le.format)(new Date,$e),headerTime:'Now',messages:[...e.messages,t.response].sort((e,t)=>{const a=Object(Le.parse)(e.systemTime,$e,new Date(e.systemTime)),n=Object(Le.parse)(t.systemTime,$e,new Date(t.systemTime)),i=Object(Le.differenceInMilliseconds)(n,a);return i})});case Ue:return Xn({},e,{webhookPayload:t.payload});case Ye:return Xn({},e,{disableInput:!1});case Qe:return Xn({},e,{disableInput:!0});case Re:return Xn({},e,{conversationStarted:!0});case Ge:return Xn({},e,{conversationStarted:!1});case qe:return Xn({},e,{outputContexts:t.rawOutputContexts});default:return e;}},buttonBar:function(e=ei,t){switch(t.type){case Se:return $n({},e,{visible:!0});case De:return $n({},e,{visible:!1});default:return e;}},userInput:function(e=ti,t){switch(t.type){case Ce:return t.userInput;default:return e;}},feedbackInput:function(e=ni,t){switch(t.type){case Ze:return ai({},e,{feedbackList:e.feedbackList.map((e)=>e.value===t.value.value?ai({},e,{checked:t.value.checked}):e)});case Xe:return ai({},e,{wasHelpful:t.value.helpful,feedbackList:t.value.options.map((e)=>ai({},e,{checked:!1}))});case Ke:return ai({},e,{submitted:!0});default:return e;}},error:function(e=ii,t){switch(t.type){case ve:return t.error;case ze:return ii;default:return e;}}});B.a.load({google:{families:['Roboto:300,400,500','Product Sans:400']}});const oi=G.a.div`
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
`,si=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.compose;class li extends O.PureComponent{constructor(e){super(e),this.store=Object(Q.createStore)(ri,si(Object(Q.applyMiddleware)(J.a))),this.currentValue=null,this.theme=n(this.props.primaryColor,this.props.secondaryColor,this.props.headerColor)}componentDidMount(){this.store.dispatch(E(this.props,this.theme)),this.unsubscribe=this.store.subscribe(()=>this.handleChange(this.store))}componentWillUnmount(){this.unsubscribe()}select(e){return e.conversation.webhookPayload}handleChange(e){const t=this.currentValue;this.currentValue=this.select(e.getState()),t!==this.currentValue&&this.props.onPayload&&this.props.onPayload(this.currentValue)}render(){return Object(O.createElement)(P.Provider,{store:this.store},Object(O.createElement)(V.a,{theme:this.theme},Object(O.createElement)(oi,null,Object(O.createElement)(Zn,null),Object(O.createElement)(xt,null))))}}t['default']=li},function(e){e.exports=require('webfontloader')},function(e){e.exports=require('@material-ui/core/styles/MuiThemeProvider')},function(e){e.exports=require('redux-thunk')},function(e){e.exports=require('whatwg-fetch')},function(e){e.exports=require('@material-ui/core/colors')},function(e){e.exports=require('validator/lib/isHexColor')},function(e){e.exports=require('@material-ui/core/Fab')},function(e){e.exports=require('@material-ui/icons/Chat')},function(e){e.exports=require('@material-ui/core/Zoom')},function(e){e.exports=require('@material-ui/core/Badge')},function(e){e.exports=require('@material-ui/icons/HighlightOff')},function(e){e.exports=require('lodash/omit')},function(e){e.exports='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTkyIDE3MjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1OTIgMTcyODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZCREIzMjtzdHJva2U6I0ZBREEzMjt9DQoJLnN0MXtmaWxsOiNENDczOTQ7fQ0KCS5zdDJ7c3Ryb2tlOiNGQURBMzI7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xODE0LjIzLDEzMzZjMzAuMjQtNDIuOSw1NS40OS04OC44LDc1LjQyLTEzNi44MmMzNS42OS04NS45OSw1NC4zNS0xNzguNzUsNTQuMi0yNzMuMDkNCgkJYy0wLjI4LTM5My41OS0zMTkuMjQtNzEyLjYtNzEyLjgzLTcxMi45NGMtMTU5LjA2LDAtMzA1Ljk0LDUyLjA5LTQyNC41MywxNDAuMTVDNjY5LjQzLDQ4MC40MSw1ODMuNjUsNjYyLjA1LDU4My42NSw4NjMuNzINCgkJYzAsMzg0LjM5LDMxMS42MSw2OTUuOTksNjk1Ljk5LDY5NS45OWMxMTAuOTcsMC4wOSwyMjAuMzQtMjYuMzksMzE4Ljk4LTc3LjIyYzQuMjgtMi4yMSw4Ljc5LTMuOTQsMTMuNDYtNS4xN2wyMi4xNS01LjgyDQoJCWMxNy44MS00LjY4LDM2Ljc2LTEuNjcsNTIuMjQsOC4zbDExLjg4LDcuNjVjMjIuNzYsMTAuMzQsNDYuOTEsMTcuMjksNzEuNjksMjAuNjJjMjAuMjUsMy4wOSw0MC41OCw1LjUyLDYwLjk4LDcuMw0KCQljMTAuMDgsMC44OCwyMC4xNywxLjYsMzAuMjgsMi4xN2MyNi4yMiwxLjI3LDYwLjcxLDAuMTcsODYuNjEtMi44NWMtMzIuNC0yMi43LTg3LjY3LTczLjczLTEwOS42MS0xMTIuNjJsLTE4LjAyLTM3LjM2DQoJCUMxODE2LjEsMTM1NS42NSwxODE0LjA2LDEzNDUuODQsMTgxNC4yMywxMzM2eiIvPg0KCTxwYXRoIGQ9Ik0xMTE1LjQ2LDU5NS40OWMyLjMzLTIyLjY4LTQuNjUtNDEuMzYtMjQuNTctNTMuNTZjLTQyLjQ1LTIzLjE1LTk3LjIxLDAuNjctOTEuNzcsNTMuNTZjMCwyNi41OSwwLDUzLjE4LDAsNzkuNzgNCgkJYy01LjQ0LDUyLjg5LDQ5LjMxLDc2LjcxLDkxLjc3LDUzLjU2YzE5LjkyLTEyLjIsMjYuOTEtMzAuODgsMjQuNTctNTMuNTZDMTExNS40Niw2NDguNjcsMTExNS40Niw2MjIuMDgsMTExNS40Niw1OTUuNDl6Ii8+DQoJPHBhdGggZD0iTTE1NjEuMjUsNTk1LjQ5YzIuMzMtMjIuNjgtNC42NS00MS4zNi0yNC41Ny01My41NmMtNDIuNDUtMjMuMTUtOTcuMjEsMC42Ny05MS43Nyw1My41NmMwLDI2LjU5LDAsNTMuMTgsMCw3OS43OA0KCQljLTUuNDQsNTIuODksNDkuMzEsNzYuNzEsOTEuNzcsNTMuNTZjMTkuOTItMTIuMiwyNi45MS0zMC44OCwyNC41Ny01My41NkMxNTYxLjI1LDY0OC42NywxNTYxLjI1LDYyMi4wOCwxNTYxLjI1LDU5NS40OXoiLz4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTIwOC45OSw5NjMuMTZjMjAuOTMsMTAuMjYsNDQuNDYsMTYuMDMsNjkuMzQsMTYuMDNjMjQuODgsMCw0OC40Mi01Ljc2LDY5LjM0LTE2LjAzDQoJCWMtNy45NS0zMC44OC0zNS45OC01My42OS02OS4zNC01My42OVMxMjE2Ljk0LDkzMi4yOCwxMjA4Ljk5LDk2My4xNnoiLz4NCgk8cGF0aCBkPSJNMTIwOC45OSw5NjMuMTZjNy45NS0zMC44OCwzNS45OC01My42OSw2OS4zNC01My42OXM2MS4zOSwyMi44MSw2OS4zNCw1My42OWM1Mi4zMS0yNS42Niw4OC4zMi03OS40NCw4OC4zMy0xNDEuNjMNCgkJaC0zMTUuMzRDMTEyMC42Nyw4ODMuNzIsMTE1Ni42OCw5MzcuNSwxMjA4Ljk5LDk2My4xNnoiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTgwNi4zOCw0MDYuNjNjMTA2LjY3LDEyMi4yOSwxNzEuMzIsMjgyLjE5LDE3MS40NCw0NTcuMTljMC4yNCwxNTQuNDUtNTEuMTQsMzA0LjU1LTE0NS45OSw0MjYuNDUNCgkJYy02LjcsOS4zOS0xMS4zMywyMC4wOS0xMy41OCwzMS40Yy0zLjQ5LDE0LjQtMiwyOS41Niw0LjIxLDQzLjAybDE4LjAyLDM3LjM2YzIxLjk0LDM4Ljg5LDc3LjIxLDg5LjkyLDEwOS42MSwxMTIuNjINCgkJYy0yNS45LDMuMDItNjAuMzksNC4xMi04Ni42MSwyLjg1Yy0zMC41NS0xLjctNjEuMDEtNC44Ni05MS4yNi05LjQ3Yy0yNC43OC0zLjMzLTQ4LjkzLTEwLjI4LTcxLjY5LTIwLjYybC0xMS44OC03LjY1DQoJCWMtMTUuNDgtOS45Ni0zNC40NC0xMi45Ny01Mi4yNC04LjNsLTIyLjE1LDUuODJjLTQuNjYsMS4yMi05LjE3LDIuOTYtMTMuNDYsNS4xN2MtOTguNjQsNTAuODMtMjA4LjAyLDc3LjMxLTMxOC45OCw3Ny4yMg0KCQljLTM4NC4zOSwwLTY5NS45OS0zMTEuNjEtNjk1Ljk5LTY5NS45OXMzMTEuNjEtNjk1Ljk5LDY5NS45OS02OTUuOTljNzAuMzcsMC4wNiwxMzguMywxMC41NSwyMDIuMzMsMzAuMDINCgkJYzU1LjEzLDYuNDEsNTMuMjktNTMuNywyNC40Ni02MS4zOWMtNzEuNjQtMjIuMzEtMTQ3LjgxLTM0LjMzLTIyNi43OS0zNC4zM2MtNDIwLjY3LDAtNzYxLjY5LDM0MS4wMi03NjEuNjksNzYxLjY5DQoJCXMzNDEuMDIsNzYxLjY5LDc2MS42OSw3NjEuNjljMTI1Ljg0LDAsMjQ0LjU0LTMwLjUxLDM0OS4xMy04NC41NWM4LjQzLTIuNjIsMTUuMy00LjYzLDIyLjE1LTUuODJjNC45NywzLjY1LDEwLjIxLDcsMTUuNjcsMTAuMDgNCgkJYzcxLjQ0LDQwLjI2LDMyMi45NCw2MS43NiwzODkuNjMtMC40MmMxOS42OC0xMi43NywyNS4wMS0zMC45My0xNy43My01NS42N2MtNS43OC0zLjM0LTEyLjM5LTYuNzEtMTkuODYtMTAuMDcNCgkJYy0yNy44Ni0xMi41My0yOS4wOC0xNS4yMS01My4wMi0zNC40OWMtMjQuNzUtMTkuOTQtNDcuMTYtNDAuNTctNzIuMjktNzguMzNjLTQtOC42LTguNDQtMTguMi0xMy40MS0yOS4wMg0KCQljMC40OS0yLjE0LDEuMDItNC4zMSwxLjU4LTYuNTJjMTAwLjE4LTEyOC45NSwxNTkuODQtMjkwLjk2LDE1OS44NC00NjYuOWMwLTE5Ni44Ni03NC42OC0zNzYuMjgtMTk3LjI2LTUxMS40Nw0KCQlDMTgwOS4wNSwzMjAuMjQsMTc2MC4xMSwzNjEuOSwxODA2LjM4LDQwNi42M3oiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTcxMS41MywyMzQuNzFjLTE5LjI0LTEzLjE3LTM5LjExLTI1LjQ3LTU5LjU2LTM2Ljg2Yy0zMy45LTE4Ljg4LTU2LjgxLDQzLjktMzMuNyw1Ni43DQoJCWMxNy42NSw5Ljc4LDM0Ljg0LDIwLjMsNTEuNTEsMzEuNTJDMTcwMy4yOSwzMDguNjMsMTc0Ny43NywyNTkuNTIsMTcxMS41MywyMzQuNzF6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=='},function(e){e.exports=require('@material-ui/core/Paper')},function(e){e.exports=require('@material-ui/icons/Fullscreen')},function(e){e.exports=require('@material-ui/icons/FullscreenExit')},function(e){e.exports=require('@material-ui/icons/Info')},function(e){e.exports=require('@material-ui/icons/Close')},function(e){e.exports=require('@material-ui/core/Tooltip')},function(e){e.exports=require('@material-ui/core/DialogTitle')},function(e){e.exports=require('@material-ui/core/Dialog')},function(e){e.exports=require('@material-ui/core/DialogActions')},function(e){e.exports=require('@material-ui/core/DialogContent')},function(e){e.exports=require('@material-ui/core/DialogContentText')},function(e){e.exports=require('lodash/isEqual')},function(e){e.exports=require('lodash/merge')},function(e){e.exports=require('@material-ui/core/colors/green')},function(e){e.exports=require('@material-ui/core/CardMedia')},function(e){e.exports=require('@material-ui/core/CardHeader')},function(e){e.exports=require('@material-ui/core/Table')},function(e){e.exports=require('@material-ui/core/TableBody')},function(e){e.exports=require('@material-ui/core/TableCell')},function(e){e.exports=require('@material-ui/core/TableRow')},function(e){e.exports=require('react-google-maps')},function(e){e.exports='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjRUUzODQwIiBkPSJNMTIgMkM4LjEzIDIgNSA1LjEzIDUgOWMwIDUuMjUgNyAxMyA3IDEzczctNy43NSA3LTEzYzAtMy44Ny0zLjEzLTctNy03em0wIDkuNWMtMS4zOCAwLTIuNS0xLjEyLTIuNS0yLjVzMS4xMi0yLjUgMi41LTIuNSAyLjUgMS4xMiAyLjUgMi41LTEuMTIgMi41LTIuNSAyLjV6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg=='},function(e){e.exports='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9ImIiPjx1c2UgeGxpbms6aHJlZj0iI2EiIG92ZXJmbG93PSJ2aXNpYmxlIi8+PC9jbGlwUGF0aD48cGF0aCBjbGlwLXBhdGg9InVybCgjYikiIGZpbGw9IiMyOTc5RkYiIGQ9Ik0xMiAyQzguMTQgMiA1IDUuMTQgNSA5YzAgNS4yNSA3IDEzIDcgMTNzNy03Ljc1IDctMTNjMC0zLjg2LTMuMTQtNy03LTd6bTAgMmMxLjEgMCAyIC45IDIgMiAwIDEuMTEtLjkgMi0yIDJzLTItLjg5LTItMmMwLTEuMS45LTIgMi0yem0wIDEwYy0xLjY3IDAtMy4xNC0uODUtNC0yLjE1LjAyLTEuMzIgMi42Ny0yLjA1IDQtMi4wNXMzLjk4LjczIDQgMi4wNWMtLjg2IDEuMy0yLjMzIDIuMTUtNCAyLjE1eiIvPjwvc3ZnPg=='},function(e){e.exports=require('@material-ui/core/FormControl')},function(e){e.exports=require('@material-ui/core/FormGroup')},function(e){e.exports=require('@material-ui/core/FormControlLabel')},function(e){e.exports=require('@material-ui/core/Checkbox')},function(e){e.exports=require('@material-ui/icons/Send')},function(e){e.exports=require('@material-ui/core/TextField')},function(e){e.exports=require('lodash/findLast')}])});
//# sourceMappingURL=chatframe.js.map