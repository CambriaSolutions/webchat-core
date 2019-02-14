(function(e,t){'object'==typeof exports&&'object'==typeof module?module.exports=t():'function'==typeof define&&define.amd?define('chatframe',[],t):'object'==typeof exports?exports.chatframe=t():e.chatframe=t()})('undefined'==typeof self?this:self,function(){return function(e){function t(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(i,'a',i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='./',t(t.s=13)}([function(e){e.exports=require('react')},function(e){e.exports=require('styled-components')},function(e){e.exports=require('react-redux')},function(e){e.exports=require('date-fns')},function(e){e.exports=require('@material-ui/core/colors/grey')},function(e){e.exports=require('@material-ui/core/Typography')},function(e){e.exports=require('@material-ui/core/styles')},function(e){e.exports=require('@material-ui/core/Button')},function(e){e.exports=require('redux')},function(e){e.exports=require('lodash/find')},function(e){e.exports=require('@material-ui/core/IconButton')},function(e){e.exports=require('@material-ui/core/Card')},function(e){e.exports=require('@material-ui/core/CardContent')},function(e,t,i){e.exports=i(14)},function(e,t,i){'use strict';function n(e='lightBlue',t='pink'){const i={palette:{error:F.red,contrastThreshold:3,tonalOffset:0.2},typography:{useNextVariants:!0},overrides:{MuiFab:{root:{position:'absolute',bottom:48,right:48}}}};if(_()(e))i.palette.primary={main:e};else if(F[e])i.palette.primary=F[e];else throw new Error(`${e} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);if(_()(t))i.palette.secondary={main:t};else if(t&&F[t])i.palette.secondary=F[t];else throw new Error(`${t} is not a valid color. 
      Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);return Object(H.createMuiTheme)(i)}function a(e){return(t)=>{const i=new Re(e);t({type:oe,client:i,clientName:'dialogflow'})}}function r(e){return(t,i)=>{const n=i().conversation.messages,a=Oe()(e.responses,['type','suggestion']);if(a?t({type:pe}):t({type:Me}),0===n.length)t({type:le,newConversationArray:[e]});else{const i=n.map((t)=>t.loading?e:t).sort((e,t)=>{const i=Object(ne.parse)(e.systemTime,he,new Date(e.systemTime)),n=Object(ne.parse)(t.systemTime,he,new Date(t.systemTime)),a=Object(ne.differenceInMilliseconds)(i,n);return a});t({type:le,newConversationArray:i})}}}function s(e){return(t)=>{function i(e){return'text'===e?'text':'card'===e?'card':'quickReplies'===e?'suggestion':'image'===e?'image':'payload'===e?'payload':'text'}const n=De()(e,'queryResult.fulfillmentMessages',[]),a=n.map((e)=>{const n=i(e.message),a=De()(e,'quickReplies.quickReplies',[]),r=De()(e,'text.text',null),s={title:De()(e,'card.title',''),subtitle:De()(e,'card.subtitle',''),imageUrl:De()(e,'card.imageUri',''),buttons:De()(e,'card.buttons',[])},o={imageUri:De()(e,'image.imageUri',''),accessibilityText:De()(e,'image.accessibilityText','')},l={};if('payload'===n){const i=De()(e,'payload.fields',{});for(const e of Object.entries(i)){var c=Ue(e,2);const t=c[0],i=c[1];if('stringValue'===i.kind)try{l[t]=JSON.parse(i.stringValue)}catch(e){l[t]=i.stringValue}else if(i.kind&&'stringValue'!==i.kind)throw new Error('Use stringValue to send payloads');else return l}t({type:we,payload:l})}return'text'===n?{type:n,text:r}:'image'===n?{type:n,image:o}:'suggestion'===n?{type:n,suggestions:a}:'card'===n?{type:n,card:s}:'payload'===n?{type:n,payload:l}:{type:n,text:r}}),s=Object(ne.format)(new Date,he),o={entity:'bot',loading:!1,messageId:e.responseId,language:e.queryResult.languageCode,systemTime:s,responses:a};t(r(o))}}function o(e){return(t,i)=>{const n=i().conversation.client;t({type:me}),n.textRequest(e).then((e)=>{e?(t(s(e)),t({type:Ne})):t({type:ge,error:'No response received from chat provider. Please try again.'})}).catch((e)=>{throw t({type:ge,error:'Unable to connect to the chat provider. Please try again.'}),new Error(e)})}}function l(e){return(t,i)=>{const n=i().conversation.client;t({type:me}),n.eventRequest(e).then((e)=>{e?(t(s(e)),t({type:Ne})):(t({type:ge,error:'No response received from chat provider. Please try again.'}),t({type:Ce}))}).catch((e)=>{throw t({type:ge,error:'Unable to connect to the chat provider. Please try again.'}),new Error(e)})}}function c(e,t){return(i)=>{if(!e)throw new Error('No conversation provider selected.');if('dialogflow'===e.toLowerCase())i(a(t));else throw i({type:ge,error:`Unable to connect to ${e}`}),new Error(`${e} is not a recognized conversation provider.`)}}function d(e){return(t,i)=>{const n=i().conversation.clientName;if('dialogflow'===n.toLowerCase())t(o(e));else throw t({type:ge,error:`Unable to connect to ${n}`}),new Error(`${n} is not a recognized conversation provider.`)}}function m(e){return(t,i)=>{const n=i().conversation.messages.length,a=Object(ne.format)(new Date,he),r={entity:'user',messageId:`usermessage-${n}`,systemTime:a,text:e};t({type:de,response:r}),t({type:Me}),t(d(e))}}function u(e){return(t)=>{t(m(e))}}function y(){return(e,t)=>{const i=t().conversation.conversationStarted;e({type:Te}),i||(e(l('Welcome')),e({type:fe}))}}function p(){return{type:Le}}function M(){return{type:xe}}function g(){return{type:Ie}}function N(){return(e,t)=>{const i=t().conversation.lastUpdateTime,n=new Date,a=Object(ne.parse)(i,he,new Date(i)),r=Object(ne.differenceInMinutes)(n,a),s=Object(ne.differenceInSeconds)(n,a);let o='Now';1<=r?o=`${r} min ago`:9<=s&&(o=`${s} sec ago`);const l=Object(ne.format)(n,he);e({type:ye,headerTime:o,currentTime:l})}}function T(){return(e,t)=>{const i=t().conversation.timer;i&&clearInterval(i);const n=setInterval(()=>e(N()),10000);e({type:ue,newTimer:n}),e(N())}}function L(e){return(t)=>{const i=e.title,n=e.avatar,a=e.client,r=e.clientOptions,s=e.initialActive,o=e.fullscreen,d=e.policyText,m=e.googleMapsKey,u=e.centerCoordinates;let N=n;N||(N=Ae.a),t({type:re,title:i}),t({type:se,avatar:N}),t(c(a,r)),t(T()),d&&''!==d&&t({type:be,policyText:d}),m&&''!==m&&t({type:ze,googleMapsKey:m}),u&&''!==u&&t({type:ve,centerCoordinates:u}),!0===s?(t({type:fe}),t(l('Welcome')),t(y())):t(p()),!0===o?t(M()):t(g())}}function x(e){return Object(z.createElement)(Ft,{message:e.text,entity:e.entity,key:e.messageId,timestamp:e.systemTime,isLoading:!1})}function I(e){return Object(z.createElement)(Ft,{key:'loading',entity:'bot',timestamp:e.systemTime,isLoading:e.loading})}function w(e){return Object(z.createElement)(Ft,{message:e.text,entity:e.entity,key:e.messageId,isLoading:!1,timestamp:e.systemTime})}function f(e){return Object(z.createElement)(ri,{data:e.card,timestamp:e.systemTime,key:e.messageId})}function C(e){const t=e.payload.mapPayload,i=t.map((e)=>{const t={lat:e.lat,lng:e.lng};return t});return Object(z.createElement)(mi,{data:e.payload.mapPayload,timestamp:e.systemTime,key:e.key,points:i})}function j(e){return{type:ce,value:e}}function E(){return(e,t)=>{var i=t();const n=i.userInput;n&&''!==n&&(e(m(n)),e(j('')))}}Object.defineProperty(t,'__esModule',{value:!0});var z=i(0),b=i.n(z),v=i(2),h=i.n(v),S=i(8),D=i.n(S),P=i(1),O=i.n(P),k=i(15),Y=i.n(k),R=i(16),U=i.n(R),G=i(17),A=i.n(G),W=i(18),Z=i.n(W),Q=i(4),V=i.n(Q),H=i(6),B=i.n(H),F=i(19),X=i.n(F),J=i(20),_=i.n(J),K=i(21),q=i.n(K),$=i(22),ee=i.n($),te=i(23),ie=i.n(te),ne=i(3),ae=i.n(ne);const re='SET_TITLE',se='SET_AVATAR',oe='SAVE_CLIENT',le='SAVE_RESPONSE',ce='SAVE_USER_INPUT',de='SAVE_USER_RESPONSE',me='INITIATE_LOADING',ue='TIMER_START',ye='UPDATE_CURRENT_TIME',pe='SHOW_BUTTON_BAR',Me='HIDE_BUTTON_BAR',ge='DISPLAY_ERROR',Ne='CLEAR_ERROR',Te='SHOW_WINDOW',Le='HIDE_WINDOW',xe='FULLSCREEN',Ie='WINDOWED',we='RECEIVE_WEBHOOK_DATA',fe='SET_CONVERSATION_STARTED',Ce='SET_CONVERSATION_ENDED',je='SHOW_PRIVACY_POLICY',Ee='HIDE_PRIVACY_POLICY',be='SET_PRIVACY_POLICY',ze='SET_GOOGLE_MAPS_KEY',ve='SET_CENTER_COORDINATES',he='yyyy-MM-dd\'T\'hh:mm:ss.SSS';var Se=i(24),De=i.n(Se),Pe=i(9),Oe=i.n(Pe),ke=i(25),Ye=i.n(ke);class Re{constructor(e){if(!e||!e.textUrl)throw new Error('Fulfillment URL is required to generate a conversation client');this.textUrl=e.textUrl,this.eventUrl=e.eventUrl,this.uuid=Ye()()}encodeQueryData(e){const t=[];for(const i in e)t.push(`${encodeURIComponent(i)}=${encodeURIComponent(e[i])}`);return t.join('&')}textRequest(e){if(!e)throw new Error('Query should not be empty');const t={query:e,uuid:this.uuid},i=this.encodeQueryData(t),n=`${this.textUrl}?${i}`;return fetch(n).then((e)=>e.json()).catch((e)=>{throw new Error(e)})}eventRequest(e){if(!e)throw new Error('Query should not be empty');const t={query:e,uuid:this.uuid},i=this.encodeQueryData(t),n=`${this.eventUrl}?${i}`;return fetch(n).then((e)=>e.json()).catch((e)=>{throw new Error(e)})}}var Ue=function(){function e(e,t){var i=[],n=!0,a=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(i.push(s.value),!(t&&i.length===t));n=!0);}catch(e){a=!0,r=e}finally{try{!n&&o['return']&&o['return']()}finally{if(a)throw r}}return i}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),Ge=i(26),Ae=i.n(Ge);const We=O()(q.a)`
  && {
    display: ${(e)=>e.active?'block':'none'};
    pointer-events: auto;
    padding-top: 8px;
  }
`;class Ze extends z.PureComponent{render(){var e=this.props;const t=e.windowVisible,i=e.showWindow;return Object(z.createElement)(ie.a,{in:!t,unmountOnExit:!0},Object(z.createElement)(We,{color:'primary',onClick:i,active:t?0:1},Object(z.createElement)(ee.a,null)))}}var Qe=Object(v.connect)((e)=>({windowVisible:e.config.windowVisible}),(e)=>({showWindow:()=>{e(y())}}))(Ze),Ve=i(27),He=i.n(Ve),Be=i(5),Fe=i.n(Be),Xe=i(28),Je=i.n(Xe),_e=i(29),Ke=i.n(_e),qe=i(30),$e=i.n(qe),et=i(31),tt=i.n(et),it=i(10),nt=i.n(it),at=i(32),rt=i.n(at),st=i(33),ot=i.n(st);const lt=O()(tt.a)`
  && {
    flex: 0 0 32px;
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
`,ct=O.a.div`
  position: absolute;
  bottom: -1px;
  left: 27px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid ${V.a[100]};
`,dt=O.a.div`
  && {
    position: relative;
    background: ${(e)=>e.theme.palette.primary.dark};
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
`,mt=O()(Fe.a)`
  && {
    font-family: 'Product Sans';
    font-weight: 400;
    height: 32px;
    font-size: 18px;
    line-height: 32px;
    flex: 1;
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
  }
`,ut=O()(nt.a)`
  && {
    padding: 6px;
    flex: 0;
    cursor: pointer;
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`;class yt extends z.PureComponent{render(){var e=this.props;const t=e.title,i=e.theme,n=e.hideWindow,a=e.showWindowed,r=e.showFullscreen,s=e.fullscreen,o=e.avatar,l=e.showPrivacyPolicy;return Object(z.createElement)(dt,{theme:i},Object(z.createElement)(ct,null),Object(z.createElement)(lt,{alt:t,src:o}),Object(z.createElement)(mt,{theme:i,variant:'h6'},t),Object(z.createElement)(ot.a,{title:'Privacy Policy',placement:'bottom'},Object(z.createElement)(ut,{theme:i,onClick:l,"aria-label":'Windowed'},Object(z.createElement)($e.a,{fontSize:'small'}))),s?Object(z.createElement)(ut,{theme:i,onClick:a,"aria-label":'Windowed'},Object(z.createElement)(Ke.a,{fontSize:'small'})):Object(z.createElement)(ut,{theme:i,onClick:r,"aria-label":'Fullscreen'},Object(z.createElement)(Je.a,{fontSize:'small'})),Object(z.createElement)(ut,{theme:i,onClick:n,"aria-label":'Close'},Object(z.createElement)(rt.a,{fontSize:'small'})))}}var pt=Object(H.withTheme)()(Object(v.connect)((e)=>({title:e.config.title,fullscreen:e.config.fullscreen,avatar:e.config.avatar}),{hideWindow:p,showFullscreen:M,showWindowed:g,showPrivacyPolicy:function(){return{type:je}}})(yt)),Mt=i(34),gt=i.n(Mt),Nt=i(35),Tt=i.n(Nt),Lt=i(36),xt=i.n(Lt),It=i(37),wt=i.n(It),ft=i(38),Ct=i.n(ft),jt=i(7),Et=i.n(jt);const bt=O()(Tt.a)`
  && {
    position: absolute;
  }
`;class zt extends z.PureComponent{render(){var e=this.props;const t=e.hidePrivacyPolicy,i=e.privacyPolicyVisible,n=e.privacyPolicy,a=e.parentRef;return Object(z.createElement)(bt,{open:i,onClose:t,"aria-labelledby":'privacy-policy',container:a,scroll:'paper'},Object(z.createElement)(gt.a,null,'Privacy Statement'),Object(z.createElement)(wt.a,null,Object(z.createElement)(Ct.a,null,n)),Object(z.createElement)(xt.a,null,Object(z.createElement)(Et.a,{onClick:t,color:'primary'},'Close')))}}var vt=Object(v.connect)((e)=>({privacyPolicyVisible:e.config.privacyPolicyVisible,privacyPolicy:e.config.privacyPolicy}),{hidePrivacyPolicy:function(){return{type:Ee}}})(zt),ht=i(39),St=i.n(ht),Dt=i(40),Pt=i.n(Dt),Ot=i(41),kt=i.n(Ot),Yt=i(42),Rt=i.n(Yt);const Ut=O.a.div`
  text-align: center;
  width: 42px;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`,Gt=O.a.div`
  animation: dot-keyframes 1s infinite ease-in-out;
  background-color: ${Rt.a[900]};
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
`;class At extends z.PureComponent{render(){return Object(z.createElement)(Ut,null,Object(z.createElement)(Gt,null),Object(z.createElement)(Gt,null),Object(z.createElement)(Gt,null))}}const Wt=O.a.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 16px 0;
  height: min-content;
  align-items: ${(e)=>'user'===e.entity?'flex-end':'flex-start'};
`,Zt=O.a.div`
  width: 100%;
  height: min-content;
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${(e)=>'user'===e.entity?'flex-end':'flex-start'};
`,Qt=O.a.div`
  && {
    background: ${V.a[400]};
    border-top-right-radius: 10px;
    border-top-left-radius: 1px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 12px;
  }
`,Vt=O.a.div`
  && {
    background-color: ${(e)=>e.theme.palette.primary.main};
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
    border-top-left-radius: 10px;
    border-top-right-radius: 1px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 12px;
  }
`,Ht=O()(Fe.a)`
  && {
    color: ${V.a[500]};
    margin-top: 8px;
    padding-left: 12px;
    padding-right: 2px;
  }
`;class Bt extends z.PureComponent{render(){var e=this.props;const t=e.message,i=e.entity,n=e.isLoading,a=e.timestamp,r=e.currentTime,s=e.theme,o=Object(ne.parse)(r,he,new Date(r)),l=Object(ne.parse)(a,he,new Date(r)),c=Object(ne.differenceInMinutes)(o,l),d=Object(ne.differenceInSeconds)(o,l);let m=null;m=1<=c?`${c} min`:10<=d?`${d} sec`:'Now';const u='user'===i?Object(z.createElement)(Vt,{elevation:1,theme:s},Object(z.createElement)(Fe.a,{variant:'body1'},t)):Object(z.createElement)(Qt,{elevation:1},n?Object(z.createElement)(At,null):Object(z.createElement)(Fe.a,{variant:'body1'},t));return Object(z.createElement)(Wt,{entity:i},Object(z.createElement)(Zt,{entity:i},u),Object(z.createElement)(Ht,{variant:'caption'},m))}}var Ft=Object(H.withTheme)()(Object(v.connect)((e)=>({currentTime:e.conversation.currentTime}))(Bt)),Xt=i(11),Jt=i.n(Xt),_t=i(43),Kt=i.n(_t),qt=i(12),$t=i.n(qt),ei=i(44),ti=i.n(ei);const ii=O()(Jt.a)`
  && {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #fff;
    margin: 16px auto;
    white-space: pre-line;
  }
`,ni=O()(ti.a)`
  && {
    height: ${(e)=>e.image&&''!==e.image?'200px':'0px'};
    background-size: cover;
    background-position: center center;
  }
`;class ai extends z.PureComponent{render(){var e=this.props.data;const t=e.title,i=e.subtitle,n=e.imageUrl,a=e.buttons;return Object(z.createElement)(ii,null,Object(z.createElement)(ni,{image:encodeURI(n),title:''}),Object(z.createElement)($t.a,null,Object(z.createElement)(Fe.a,{gutterBottom:!0,variant:'h6'},t),Object(z.createElement)(Fe.a,{variant:'body1'},i)),Object(z.createElement)(Kt.a,null,a.map((e,t)=>{const i=`card-${t}${Object(ne.format)(new Date,he)}`;return Object(z.createElement)(Et.a,{href:e.postback,target:'_blank',size:'small',color:'primary',key:i},e.text)})))}}var ri=Object(v.connect)((e)=>({inputValue:e.userInput}))(ai),si=i(45),oi=i.n(si),li=i(46),ci=i.n(li);const di=O()(Jt.a)`
  && {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #fff;
    margin: 16px auto;
    white-space: pre-line;
  }
`;var mi=Object(v.connect)((e)=>({googleMapsKey:e.config.googleMapsKey,centerCoordinates:e.config.centerCoordinates}))(function(e){const t=e.data,i=e.centerCoordinates,n='300px',a=`https://maps.googleapis.com/maps/api/js?key=${e.googleMapsKey}&v=3`,r=(e)=>{const t=`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${e.placeId}`;window.open(t,'_blank')},s=Object(si.withScriptjs)(Object(si.withGoogleMap)(()=>Object(z.createElement)(si.GoogleMap,{defaultZoom:6,defaultCenter:i,defaultOptions:{mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1}},t.map((e,t)=>Object(z.createElement)(si.Marker,{key:t,position:{lat:e.lat,lng:e.lng},icon:{url:ci.a,scaledSize:{width:20,height:20}},onClick:()=>r(e)})))));return Object(z.createElement)(di,null,Object(z.createElement)($t.a,null,Object(z.createElement)(Fe.a,{gutterBottom:!0,variant:'h6'},'Office Locations'),Object(z.createElement)(s,{googleMapURL:a,loadingElement:Object(z.createElement)('div',{style:{height:`${n}`}}),containerElement:Object(z.createElement)('div',{style:{height:`${n}`}}),mapElement:Object(z.createElement)('div',{style:{height:'100%'}})})))});const ui=O.a.div`
  background: ${V.a[100]};
  z-index: 4;
  grid-area: chatwindow;
  margin-bottom: 1px;
  margin-top: 8px;
  width: 100%;
`;class yi extends z.PureComponent{constructor(e){super(e),Object.defineProperty(this,'onResize',{enumerable:!0,writable:!0,value:()=>{this.ListRef.current.scrollToRow(this.messages.length)}}),Object.defineProperty(this,'parseMessages',{enumerable:!0,writable:!0,value:()=>{const e=this.props.messages,t=[];return e.forEach((e,i)=>{const n={systemTime:e.systemTime,entity:e.entity,key:`msg-${i}-${e.systemTime}`};if(e.loading){const i=Pt()(e,n);t.push(i)}else if('bot'===e.entity)e.responses.forEach((e)=>{if('text'===e.type||'card'===e.type||'payload'===e.type){const i=Pt()(e,n);t.push(i)}});else if('user'===e.entity){const i=Pt()(e,n);t.push(i)}}),t}}),Object.defineProperty(this,'createMessageElements',{enumerable:!0,writable:!0,value:()=>{const e=this.parseMessages(),t=[];e.forEach((e)=>{e.loading?t.push(I(e)):'user'===e.entity?t.push(x(e)):'bot'===e.entity&&'text'===e.type?t.push(w(e)):'bot'===e.entity&&'card'===e.type?t.push(f(e)):'bot'===e.entity&&'payload'===e.type&&e.payload.mapPayload?t.push(C(e)):t.push(w({text:'Something went wrong.'}))}),t.sort((e,t)=>{const i=Object(ne.parse)(e.props.timestamp,he,new Date(e.props.timestamp)),n=Object(ne.parse)(t.props.timestamp,he,new Date(t.props.timestamp)),a=Object(ne.differenceInMilliseconds)(i,n);return a}),this.messageElements=t,this.setState({numMessages:t.length})}}),Object.defineProperty(this,'rowRenderer',{enumerable:!0,writable:!0,value:({index:e,key:t,parent:i,style:n})=>Object(z.createElement)(Ot.CellMeasurer,{cache:this.cache,key:t,parent:i,rowIndex:e},Object(z.createElement)('div',{style:n},this.messageElements[e]))}),this.ListRef=b.a.createRef(),this.cache=new Ot.CellMeasurerCache({defaultHeight:300,fixedWidth:!0}),this.messages=[],this.messageElements=[],this.state={numMessages:0}}componentDidUpdate(){const e=this.parseMessages();St()(this.messages,e)||(this.messages=e,this.createMessageElements(),this.cache.clearAll(),this.ListRef.current&&(this.ListRef.current.recomputeRowHeights(),this.ListRef.current.scrollToRow(e.length),this.ListRef.current.forceUpdateGrid()))}render(){const e=this.props.messages,t=this.state.numMessages;return Object(z.createElement)(ui,{elevation:1,square:!0},Object(z.createElement)(Ot.AutoSizer,{onResize:this.onResize},({height:i,width:n})=>Object(z.createElement)(Ot.List,{messages:e,style:{outline:'none',padding:'0 16px 0 16px'},ref:this.ListRef,height:i,width:n,rowCount:t,deferredMeasurementCache:this.cache,rowHeight:this.cache.rowHeight,rowRenderer:this.rowRenderer,onScroll:this.onScroll,scrollToIndex:t,scrollToAlignment:'end'})))}}var pi=Object(v.connect)((e)=>({messages:e.conversation.messages,buttonBarVisible:e.buttonBar.visible,error:e.error}))(yi),Mi=i(47),gi=i.n(Mi),Ni=i(48),Ti=i.n(Ni);const Li=O.a.div`
  grid-area: userinput;
  background: #fefefe;
  z-index: 1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  z-index: 4;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`,xi=O()(Ti.a)`
  && {
    /*All properties below are specified to combat WordPress*/
    & > input[type='text'] {
      border: none;
      width: 100%;
      line-height: 16px;
      outline: none;
      color: #000;
      height: 100%;
      padding: 0px 16px 0px 16px;
      font-size: 16px;
    }
  }
`;class Ii extends z.PureComponent{constructor(){super(),this.handleKeyPress=this.handleKeyPress.bind(this)}handleKeyPress(t){13===t.charCode&&this.props.submitUserInput()}render(){var e=this.props;const t=e.saveUserInput,i=e.inputValue;return Object(z.createElement)(Li,null,Object(z.createElement)(xi,{fullWidth:!0,disableUnderline:!0,placeholder:'Send a message',onChange:t,value:i,onKeyPress:this.handleKeyPress}),Object(z.createElement)(nt.a,{onClick:this.props.submitUserInput,"aria-label":'Send',color:'primary'},Object(z.createElement)(gi.a,null)))}}var wi=Object(v.connect)((e)=>({inputValue:e.userInput}),(t)=>({saveUserInput:(i)=>{t(j(i.target.value))},submitUserInput:()=>{t(E())}}))(Ii),fi=i(49),Ci=i.n(fi);const ji=O.a.div`
  grid-area: buttonbar;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  padding: ${(e)=>e.visible?'4px 4px 16px 16px':'0 16px'};
  background: ${V.a[300]};
  border-top: ${(e)=>e.visible?'1px solid rgba(0, 0, 0, 0.2)':'none'};
  overflow-y: auto;
`,Ei=O()(Et.a)`
  && {
    margin-right: 12px;
    margin-top: 12px;
    display: ${(e)=>'true'===e.visible?'block':'none'};
  }
`;class bi extends z.PureComponent{render(){var e=this.props;const t=e.visible,i=e.messages,n=e.sendQuickReply,a=Ci()(i,(e)=>{const t=Oe()(e.responses,['type','suggestion']);return t}),r=[];if(a){const e=a.responses.filter((e)=>'suggestion'===e.type);for(const i of e)for(const e of i.suggestions)r.push({label:e,id:a.messageId,visible:t})}return Object(z.createElement)(ji,{visible:t},r.map((e,t)=>Object(z.createElement)(Ei,{size:'small',variant:'outlined',color:'secondary',key:`${e.id}-btn${t}`,visible:e.visible.toString(),onClick:()=>n(e.label)},e.label)))}}var zi=Object(v.connect)((e)=>({visible:e.buttonBar.visible,messages:e.conversation.messages}),(e)=>({sendQuickReply:(t)=>{e(u(t))}}))(bi),vi=i(50),hi=i.n(vi);const Si=O.a.div`
  grid-area: errorbar;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: ${(e)=>e.visible?'24px 16px':'0 16px'};
  background: ${hi.a[300]};
  border-top: ${(e)=>e.visible?`1px solid ${hi.a[500]}`:'none'};
  color: ${hi.a[700]};
`;class Di extends z.PureComponent{render(){const e=this.props.error;return Object(z.createElement)(Si,{visible:''!==e},e)}}var Pi=Object(v.connect)((e)=>({error:e.error}))(Di);const Oi={giant:1170,desktop:992,tablet:768,phone:620},ki=Object.keys(Oi).reduce((e,t)=>{const i=Oi[t]/16;return e[t]=(...e)=>P.css`
    @media (max-width: ${i}em) {
      ${Object(P.css)(...e)};
    }
  `,e},{}),Yi=O()(He.a)`
  && {
    width: 400px;
    height: 600px;
    overflow: hidden;
    position: absolute;
    bottom: 48px;
    right: 48px;
    transition: width 120ms ease-in-out, height 150ms ease-in-out;
    pointer-events: none;
    ${(e)=>e.fullscreen&&P.css`
        width: calc(100% - 96px);
        height: calc(100% - 96px);
      `};
    ${(e)=>!e.visible&&P.css`
        width: 0;
        height: 0;
      `};

    ${ki.phone`
    width: ${(e)=>e.visible?'calc(100% - 96px)':'0'};
    height: ${(e)=>e.visible?'calc(100% - 96px)':'0'};
    max-width: none;
    max-height: none;
  `};
  }
`,Ri=O.a.div`
  && {
    width: 100%;
    height: 100%;
    transform-origin: bottom right;
    pointer-events: auto;
    background: ${V.a[100]};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 64px 1fr auto 0px 48px;
    grid-template-areas:
      'header'
      'chatwindow'
      'buttonbar'
      'errorbar'
      'userinput';
  }
`;class Ui extends z.PureComponent{constructor(e){super(e),this.containerRef=b.a.createRef()}render(){var e=this.props;const t=e.windowVisible,i=e.fullscreen;return Object(z.createElement)(Yi,{elevation:4,fullscreen:i?1:0,visible:t?1:0},Object(z.createElement)(Ri,{ref:this.containerRef},Object(z.createElement)(pt,null),Object(z.createElement)(vt,{parentRef:this.containerRef.current}),Object(z.createElement)(pi,null),Object(z.createElement)(zi,null),Object(z.createElement)(Pi,null),Object(z.createElement)(wi,null)))}}var Gi=Object(v.connect)((e)=>({windowVisible:e.config.windowVisible,fullscreen:e.config.fullscreen}))(Ui),Ai=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e};const Wi={avatar:null,title:'Chat Window',windowVisible:!1,fullscreen:!1,privacyPolicyVisible:!1,googleMapsKey:'',centerCoordinates:'',privacyPolicy:'Please do not enter any personally identifiable information such as SSN, Date of Birth, Case Number or last name.'};var Zi=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e};const Qi={client:null,clientName:null,messages:[],webhookPayload:null,lastUpdateTime:Object(ne.format)(new Date,he),currentTime:Object(ne.format)(new Date,he),headerTime:'Now',timer:null,conversationStarted:!1};var Vi=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e};const Hi={visible:!1,buttons:[]};const Bi='';const Fi=Object(S.combineReducers)({config:function(e=Wi,t){switch(t.type){case Ee:return Ai({},e,{privacyPolicyVisible:!1});case je:return Ai({},e,{privacyPolicyVisible:!0});case be:return Ai({},e,{privacyPolicy:t.policyText});case ze:return Ai({},e,{googleMapsKey:t.googleMapsKey});case ve:return Ai({},e,{centerCoordinates:t.centerCoordinates});case se:return Ai({},e,{avatar:t.avatar});case re:return Ai({},e,{title:t.title});case Te:return Ai({},e,{windowVisible:!0});case Le:return Ai({},e,{windowVisible:!1});case xe:return Ai({},e,{fullscreen:!0});case Ie:return Ai({},e,{fullscreen:!1});default:return e;}},conversation:function(e=Qi,t){switch(t.type){case oe:return Zi({},e,{client:t.client,clientName:t.clientName});case ye:return Zi({},e,{headerTime:t.headerTime,currentTime:t.currentTime});case ue:return Zi({},e,{timer:t.timer});case me:return Zi({},e,{messages:[...e.messages,{loading:!0,entity:'bot',systemTime:Object(ne.format)(new Date,he)}]});case le:return Zi({},e,{lastUpdateTime:Object(ne.format)(new Date,he),headerTime:'Now',messages:t.newConversationArray});case de:return Zi({},e,{lastUpdateTime:Object(ne.format)(new Date,he),headerTime:'Now',messages:[...e.messages,t.response].sort((e,t)=>{const i=Object(ne.parse)(e.systemTime,he,new Date(e.systemTime)),n=Object(ne.parse)(t.systemTime,he,new Date(t.systemTime)),a=Object(ne.differenceInMilliseconds)(n,i);return a})});case we:return Zi({},e,{webhookPayload:t.payload});case fe:return Zi({},e,{conversationStarted:!0});case Ce:return Zi({},e,{conversationStarted:!1});default:return e;}},buttonBar:function(e=Hi,t){switch(t.type){case pe:return Vi({},e,{visible:!0});case Me:return Vi({},e,{visible:!1});default:return e;}},userInput:function(e='',t){switch(t.type){case ce:return t.value;default:return e;}},error:function(e=Bi,t){switch(t.type){case ge:return t.error;case Ne:return Bi;default:return e;}}});Y.a.load({google:{families:['Roboto:300,400,500','Product Sans:400']}});const Xi=O.a.div`
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
      background-color: ${V.a[600]};
      -webkit-border-radius: 8px;
      border-radius: 8px;
      border: 2px solid ${V.a[100]};
    }
    & ::-webkit-scrollbar {
      background-color: ${V.a[100]};
      width: 8px;
    }
  }
`;class Ji extends z.PureComponent{constructor(e){super(e),this.store=Object(S.createStore)(Fi,Object(S.applyMiddleware)(A.a)),this.currentValue=null,this.theme=n(this.props.primaryColor,this.props.secondaryColor)}componentDidMount(){this.store.dispatch(L(this.props,this.theme)),this.unsubscribe=this.store.subscribe(()=>this.handleChange(this.store))}componentWillUnmount(){this.unsubscribe()}select(e){return e.conversation.webhookPayload}handleChange(e){const t=this.currentValue;this.currentValue=this.select(e.getState()),t!==this.currentValue&&this.props.onPayload&&this.props.onPayload(this.currentValue)}render(){return Object(z.createElement)(v.Provider,{store:this.store},Object(z.createElement)(U.a,{theme:this.theme},Object(z.createElement)(Xi,null,Object(z.createElement)(Gi,null),Object(z.createElement)(Qe,null))))}}t['default']=Ji},function(e){e.exports=require('webfontloader')},function(e){e.exports=require('@material-ui/core/styles/MuiThemeProvider')},function(e){e.exports=require('redux-thunk')},function(e){e.exports=require('whatwg-fetch')},function(e){e.exports=require('@material-ui/core/colors')},function(e){e.exports=require('validator/lib/isHexColor')},function(e){e.exports=require('@material-ui/core/Fab')},function(e){e.exports=require('@material-ui/icons/Chat')},function(e){e.exports=require('@material-ui/core/Zoom')},function(e){e.exports=require('lodash/get')},function(e){e.exports=require('uuid/v4')},function(e){e.exports='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTQ0Ljc3IDE0NC43NyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ze2ZpbGw6IzhkYzVkNjt9LmNscy00e2NsaXAtcGF0aDp1cmwoI2NsaXAtcGF0aCk7fS5jbHMtNXtmaWxsOiMyZTU3NmQ7fS5jbHMtNntmaWxsOiNmMWM5YTU7fS5jbHMtN3tmaWxsOiNlNGI2OTI7fS5jbHMtOHtmaWxsOiNkZGFjOGM7b3BhY2l0eTowLjE7bWl4LWJsZW5kLW1vZGU6bXVsdGlwbHk7fS5jbHMtOXtmaWxsOiNmYTU4MmE7fTwvc3R5bGU+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTAuNTQgLTExNDYuMDQpIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02MzUuMzIsMTIxOC40MmE3Mi4zOSw3Mi4zOSwwLDEsMC03Mi4zOSw3Mi4zOUE3Mi4zOCw3Mi4zOCwwLDAsMCw2MzUuMzIsMTIxOC40MloiLz48L2NsaXBQYXRoPjwvZGVmcz48dGl0bGU+VW50aXRsZWQtMTwvdGl0bGU+PGcgY2xhc3M9ImNscy0yIj48ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik02MzUuMzIsMTIxOC40MmE3Mi4zOSw3Mi4zOSwwLDEsMC03Mi4zOSw3Mi4zOUE3Mi4zOCw3Mi4zOCwwLDAsMCw2MzUuMzIsMTIxOC40MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTAuNTQgLTExNDYuMDQpIi8+PGcgY2xhc3M9ImNscy00Ij48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik01MzUuNzgsMTIyMS4wOWMwLDExLjgxLTYuNDgsMTIuMTItNiwxOS45My41MSw4LjY2LDcuMjgsOC42OCw3LjI4LDE0LjY0cy02LjIyLDEyLjYyLS43MSwxOWgyNi42MXYtNzIuMjFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTU5MC4wOCwxMjIwLjdjMCwxMS44MSw2LjQ4LDEyLjExLDYsMTkuOTMtLjUxLDguNjYtNy4yOCw4LjY4LTcuMjgsMTQuNjNzNi4yMiwxMi42My43MSwxOUg1NjIuOTJ2LTcyLjIxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5MC41NCAtMTE0Ni4wNCkiLz48ZWxsaXBzZSBjbGFzcz0iY2xzLTUiIGN4PSI3Mi4zOSIgY3k9IjYyLjcyIiByeD0iMjkuNjMiIHJ5PSIyOS44MyIvPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTU5Ny42LDEyNjNjLTQuNjctOC44NC0zNC42Ny0xNC4zOC0zNC42Ny0xNC4zOHMtMzAsNS41NC0zNC42NywxNC4zOGMtMy40NCwxMi4yNS02LjMzLDI3LjgzLTYuMzMsMjcuODNoODJTNjAyLDEyNzQuMTEsNTk3LjYsMTI2M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTAuNTQgLTExNDYuMDQpIi8+PHBhdGggY2xhc3M9ImNscy03IiBkPSJNNTYyLjkzLDEyNDguNnMzMCw1LjU0LDM0LjY3LDE0LjM4YzQuMzgsMTEuMTMsNi4zMywyNy44Myw2LjMzLDI3LjgzaC00MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTAuNTQgLTExNDYuMDQpIi8+PHJlY3QgY2xhc3M9ImNscy02IiB4PSI2NC4yMiIgeT0iODQuNjEiIHdpZHRoPSIxNi4zMyIgaGVpZ2h0PSIyNy4zNCIvPjxyZWN0IGNsYXNzPSJjbHMtNyIgeD0iNzIuMzkiIHk9Ijg0LjYxIiB3aWR0aD0iOC4xNyIgaGVpZ2h0PSIyNy4zNCIvPjxwYXRoIGNsYXNzPSJjbHMtOCIgZD0iTTU1NC43NiwxMjQzLjMxYzEuNDcsNC4yMiw3LjQsNi42MywxMS43NSw2LjYzYTE0LjgsMTQuOCwwLDAsMCw0LjU5LS43NHYtMTguNTZINTU0Ljc2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5MC41NCAtMTE0Ni4wNCkiLz48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik01ODMuOTMsMTIxMy4zOWMwLTE3LjA3LTkuNC0yNi43OC0yMS0yNi43OHMtMjEsOS43MS0yMSwyNi43OCw5LjQsMzAuOTIsMjEsMzAuOTJTNTgzLjkzLDEyMzAuNDcsNTgzLjkzLDEyMTMuMzlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjxwYXRoIGNsYXNzPSJjbHMtNyIgZD0iTTU4MC43MywxMjI1LjIzYy0zLjgtLjQyLTYuMzctNC43OC01LjczLTkuNzNzNC4yNC04LjYzLDgtOC4yMSw2LjM3LDQuNzgsNS43Myw5LjczUzU4NC41NCwxMjI1LjY1LDU4MC43MywxMjI1LjIzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5MC41NCAtMTE0Ni4wNCkiLz48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik01MzcuMjMsMTIxN2MtLjY0LTUsMS45Mi05LjMxLDUuNzMtOS43M3M3LjQxLDMuMjYsOCw4LjIxLTEuOTMsOS4zMS01LjczLDkuNzNTNTM3Ljg3LDEyMjIsNTM3LjIzLDEyMTdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjxwYXRoIGNsYXNzPSJjbHMtNyIgZD0iTTU4My45MywxMjEzLjM5YzAtMTcuMDctOS40LTI2Ljc4LTIxLTI2Ljc4djU3LjdDNTc0LjUzLDEyNDQuMzEsNTgzLjkzLDEyMzAuNDcsNTgzLjkzLDEyMTMuMzlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTU4NS42NiwxMjExLjQ3YzAtLjA2LDAtLjEsMC0uMTUsMC0xMy4yNS05LTI3LjIzLTIxLjUyLTI3LjIzcy0yMy45MywxNC0yMy45MywyNy4yM3YuMTVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjxwYXRoIGNsYXNzPSJjbHMtOSIgZD0iTTYwMy45MywxMjkwLjgxcy0xLjk1LTE2LjctNi4zMy0yNy44M2MtMi41Ni00Ljg1LTEyLjc0LTguNy0yMS40MS0xMS4xOWwtMTMuMjksMTAuNDNMNTQ5LjA3LDEyNTJjLTguNTMsMi41LTE4LjMxLDYuMjgtMjAuODEsMTEtMy40NCwxMi4yNS02LjMzLDI3LjgzLTYuMzMsMjcuODNoODJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjwvZz48L2c+PC9nPjwvc3ZnPg=='},function(e){e.exports=require('@material-ui/core/Paper')},function(e){e.exports=require('@material-ui/icons/Fullscreen')},function(e){e.exports=require('@material-ui/icons/FullscreenExit')},function(e){e.exports=require('@material-ui/icons/Info')},function(e){e.exports=require('@material-ui/core/Avatar')},function(e){e.exports=require('@material-ui/icons/Close')},function(e){e.exports=require('@material-ui/core/Tooltip')},function(e){e.exports=require('@material-ui/core/DialogTitle')},function(e){e.exports=require('@material-ui/core/Dialog')},function(e){e.exports=require('@material-ui/core/DialogActions')},function(e){e.exports=require('@material-ui/core/DialogContent')},function(e){e.exports=require('@material-ui/core/DialogContentText')},function(e){e.exports=require('lodash/isEqual')},function(e){e.exports=require('lodash/merge')},function(e){e.exports=require('react-virtualized')},function(e){e.exports=require('@material-ui/core/colors/green')},function(e){e.exports=require('@material-ui/core/CardActions')},function(e){e.exports=require('@material-ui/core/CardMedia')},function(e){e.exports=require('react-google-maps')},function(e){e.exports='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDUxMS45OTkgNTExLjk5OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTExLjk5OSA1MTEuOTk5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxwYXRoIHN0eWxlPSJmaWxsOiNFRTM4NDA7IiBkPSJNNDU0Ljg0OCwxOTguODQ4YzAsMTU5LjIyNS0xNzkuNzUxLDMwNi42ODktMTc5Ljc1MSwzMDYuNjg5Yy0xMC41MDMsOC42MTctMjcuNjkyLDguNjE3LTM4LjE5NSwwCgljMCwwLTE3OS43NTEtMTQ3LjQ2NC0xNzkuNzUxLTMwNi42ODlDNTcuMTUzLDg5LjAyNywxNDYuMTgsMCwyNTYsMFM0NTQuODQ4LDg5LjAyNyw0NTQuODQ4LDE5OC44NDh6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGRkUxRDY7IiBkPSJNMjU2LDI5OC44OWMtNTUuMTY0LDAtMTAwLjA0MS00NC44NzktMTAwLjA0MS0xMDAuMDQxUzIwMC44MzgsOTguODA2LDI1Niw5OC44MDYKCXMxMDAuMDQxLDQ0Ljg3OSwxMDAuMDQxLDEwMC4wNDFTMzExLjE2NCwyOTguODksMjU2LDI5OC44OXoiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=='},function(e){e.exports=require('@material-ui/icons/Send')},function(e){e.exports=require('@material-ui/core/Input')},function(e){e.exports=require('lodash/findLast')},function(e){e.exports=require('@material-ui/core/colors/red')}])});
//# sourceMappingURL=chatframe.js.map