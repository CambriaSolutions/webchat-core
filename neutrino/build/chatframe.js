(function(e,t){'object'==typeof exports&&'object'==typeof module?module.exports=t():'function'==typeof define&&define.amd?define('chatframe',[],t):'object'==typeof exports?exports.chatframe=t():e.chatframe=t()})('undefined'==typeof self?this:self,function(){return function(e){function t(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(i,'a',i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='./',t(t.s=12)}([function(e){e.exports=require('react')},function(e){e.exports=require('styled-components')},function(e){e.exports=require('react-redux')},function(e){e.exports=require('date-fns')},function(e){e.exports=require('@material-ui/core/colors/grey')},function(e){e.exports=require('@material-ui/core/styles')},function(e){e.exports=require('@material-ui/core/Typography')},function(e){e.exports=require('@material-ui/core/Button')},function(e){e.exports=require('redux')},function(e){e.exports=require('@material-ui/core/Zoom')},function(e){e.exports=require('lodash/find')},function(e){e.exports=require('@material-ui/core/IconButton')},function(e,t,i){e.exports=i(13)},function(e,t,i){'use strict';function n(e='lightBlue',t='pink'){const i={palette:{error:F.red,contrastThreshold:3,tonalOffset:0.2},typography:{useNextVariants:!0},overrides:{MuiFab:{root:{position:'absolute',bottom:48,right:48}}}};if(_()(e))i.palette.primary={main:e};else if(F[e])i.palette.primary=F[e];else throw new Error(`${e} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);if(_()(t))i.palette.secondary={main:t};else if(t&&F[t])i.palette.secondary=F[t];else throw new Error(`${t} is not a valid color. 
      Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);return Object(Z.createMuiTheme)(i)}function a(e){return(t)=>{const i=new Pe(e);t({type:se,client:i,clientName:'dialogflow'})}}function r(e){return(t,i)=>{const n=i().conversation.messages,a=Se()(e.responses,['type','suggestion']);if(a?t({type:pe}):t({type:ye}),0===n.length)t({type:oe,newConversationArray:[e]});else{const i=n.map((t)=>t.loading?e:t).sort((e,t)=>{const i=Object(ie.parse)(e.systemTime,je,new Date(e.systemTime)),n=Object(ie.parse)(t.systemTime,je,new Date(t.systemTime)),a=Object(ie.differenceInMilliseconds)(i,n);return a});t({type:oe,newConversationArray:i})}}}function s(e){return(t)=>{function i(e){return'text'===e?'text':'card'===e?'card':'quickReplies'===e?'suggestion':'image'===e?'image':'payload'===e?'payload':'text'}const n=ve()(e,'queryResult.fulfillmentMessages',[]),a=n.map((e)=>{const n=i(e.message),a=ve()(e,'quickReplies.quickReplies',[]),r=ve()(e,'text.text',null),s={title:ve()(e,'card.title',''),subtitle:ve()(e,'card.subtitle',''),imageUrl:ve()(e,'card.imageUri',''),buttons:ve()(e,'card.buttons',[])},o={imageUri:ve()(e,'image.imageUri',''),accessibilityText:ve()(e,'image.accessibilityText','')},l={};if('payload'===n){const i=ve()(e,'payload.fields',{});for(const e of Object.entries(i)){var c=Oe(e,2);const t=c[0],i=c[1];if('stringValue'===i.kind)try{l[t]=JSON.parse(i.stringValue)}catch(e){l[t]=i.stringValue}}t({type:fe,payload:l})}return'text'===n?{type:n,text:r}:'image'===n?{type:n,image:o}:'suggestion'===n?{type:n,suggestions:a}:'card'===n?{type:n,card:s}:'payload'===n?{type:n,payload:l}:{type:n,text:r}}),s=Object(ie.format)(new Date,je),o={entity:'bot',loading:!1,messageId:e.responseId,language:e.queryResult.languageCode,systemTime:s,responses:a};t(r(o))}}function o(e){return(t,i)=>{const n=i().conversation.client;t({type:de}),n.textRequest(e).then((e)=>{e?(t(s(e)),t({type:ge})):t({type:Me,error:'No response received from chat provider. Please try again.'})}).catch((e)=>{throw t({type:Me,error:'Unable to connect to the chat provider. Please try again.'}),new Error(e)})}}function l(e){return(t,i)=>{const n=i().conversation.client;t({type:de}),n.eventRequest(e).then((e)=>{e?(t(s(e)),t({type:ge})):(t({type:Me,error:'No response received from chat provider. Please try again.'}),t({type:be}))}).catch((e)=>{throw t({type:Me,error:'Unable to connect to the chat provider. Please try again.'}),new Error(e)})}}function c(e,t){return(i)=>{if(!e)throw new Error('No conversation provider selected.');if('dialogflow'===e.toLowerCase())i(a(t));else throw i({type:Me,error:`Unable to connect to ${e}`}),new Error(`${e} is not a recognized conversation provider.`)}}function d(e){return(t,i)=>{const n=i().conversation.clientName;if('dialogflow'===n.toLowerCase())t(o(e));else throw t({type:Me,error:`Unable to connect to ${n}`}),new Error(`${n} is not a recognized conversation provider.`)}}function m(e){return(t,i)=>{const n=i().conversation.messages.length,a=Object(ie.format)(new Date,je),r={entity:'user',messageId:`usermessage-${n}`,systemTime:a,text:e};t({type:ce,response:r}),t({type:ye}),t(d(e))}}function u(e){return(t)=>{t(m(e))}}function p(){return(e,t)=>{const i=t().conversation.conversationStarted;e({type:Te}),i||(e(l('Welcome')),e({type:Le}))}}function y(){return{type:Ne}}function M(){return{type:xe}}function g(){return{type:Ie}}function T(){return(e,t)=>{const i=t().conversation.lastUpdateTime,n=new Date,a=Object(ie.parse)(i,je,new Date(i)),r=Object(ie.differenceInMinutes)(n,a),s=Object(ie.differenceInSeconds)(n,a);let o='Now';1<=r?o=`${r} min ago`:9<=s&&(o=`${s} sec ago`);const l=Object(ie.format)(n,je);e({type:ue,headerTime:o,currentTime:l})}}function N(){return(e,t)=>{const i=t().conversation.timer;i&&clearInterval(i);const n=setInterval(()=>e(T()),10000);e({type:me,newTimer:n}),e(T())}}function x(e){return(t)=>{const i=e.title,n=e.avatar,a=e.client,r=e.clientOptions,s=e.initialActive,o=e.fullscreen,d=e.policyText;let m=n;m||(m=Ye.a),t({type:ae,title:i}),t({type:re,avatar:m}),t(c(a,r)),t(N()),d&&''!==d&&t({type:we,policyText:d}),!0===s?(t({type:Le}),t(l('Welcome')),t(p())):t(y()),!0===o?t(M()):t(g())}}function I(e){return Object(w.createElement)(Ht,{message:e.text,entity:e.entity,key:e.messageId,timestamp:e.systemTime,isLoading:!1})}function f(e){return Object(w.createElement)(Ht,{key:'loading',entity:'bot',timestamp:e.systemTime,isLoading:e.loading})}function L(e){return Object(w.createElement)(Ht,{message:e.text,entity:e.entity,key:e.messageId,isLoading:!1,timestamp:e.systemTime})}function b(e){return Object(w.createElement)(ei,{data:e.card,timestamp:e.systemTime,key:e.messageId})}function E(e){return{type:le,value:e}}function h(){return(e,t)=>{var i=t();const n=i.userInput;n&&''!==n&&(e(m(n)),e(E('')))}}Object.defineProperty(t,'__esModule',{value:!0});var w=i(0),j=i.n(w),C=i(2),v=i.n(C),z=i(8),S=i.n(z),P=i(1),O=i.n(P),D=i(14),Y=i.n(D),R=i(15),k=i.n(R),U=i(16),A=i.n(U),G=i(17),W=i.n(G),H=i(4),Q=i.n(H),Z=i(5),V=i.n(Z),F=i(18),B=i.n(F),X=i(19),_=i.n(X),J=i(20),K=i.n(J),q=i(21),$=i.n(q),ee=i(9),te=i.n(ee),ie=i(3),ne=i.n(ie);const ae='SET_TITLE',re='SET_AVATAR',se='SAVE_CLIENT',oe='SAVE_RESPONSE',le='SAVE_USER_INPUT',ce='SAVE_USER_RESPONSE',de='INITIATE_LOADING',me='TIMER_START',ue='UPDATE_CURRENT_TIME',pe='SHOW_BUTTON_BAR',ye='HIDE_BUTTON_BAR',Me='DISPLAY_ERROR',ge='CLEAR_ERROR',Te='SHOW_WINDOW',Ne='HIDE_WINDOW',xe='FULLSCREEN',Ie='WINDOWED',fe='RECEIVE_WEBHOOK_DATA',Le='SET_CONVERSATION_STARTED',be='SET_CONVERSATION_ENDED',Ee='SHOW_PRIVACY_POLICY',he='HIDE_PRIVACY_POLICY',we='SET_PRIVACY_POLICY',je='yyyy-MM-dd\'T\'hh:mm:ss.SSS';var Ce=i(22),ve=i.n(Ce),ze=i(10),Se=i.n(ze);class Pe{constructor(e){if(!e||!e.textUrl)throw new Error('Fulfillment URL is required to generate a conversation client');this.textUrl=e.textUrl,this.eventUrl=e.eventUrl}encodeQueryData(e){const t=[];for(const i in e)t.push(`${encodeURIComponent(i)}=${encodeURIComponent(e[i])}`);return t.join('&')}textRequest(e){if(!e)throw new Error('Query should not be empty');const t=this.encodeQueryData({query:e}),i=`${this.textUrl}?${t}`;return fetch(i).then((e)=>e.json()).catch((e)=>{throw new Error(e)})}eventRequest(e){if(!e)throw new Error('Query should not be empty');const t=this.encodeQueryData({query:e}),i=`${this.eventUrl}?${t}`;return fetch(i).then((e)=>e.json()).catch((e)=>{throw new Error(e)})}}var Oe=function(){function e(e,t){var i=[],n=!0,a=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(i.push(s.value),!(t&&i.length===t));n=!0);}catch(e){a=!0,r=e}finally{try{!n&&o['return']&&o['return']()}finally{if(a)throw r}}return i}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),De=i(23),Ye=i.n(De);const Re=O()(K.a)`
  && {
    display: ${(e)=>e.active?'block':'none'};
    pointer-events: auto;
    padding-top: 8px;
  }
`;class ke extends w.PureComponent{render(){var e=this.props;const t=e.windowVisible,i=e.showWindow;return Object(w.createElement)(te.a,{in:!t,unmountOnExit:!0},Object(w.createElement)(Re,{color:'primary',onClick:i,active:t?0:1},Object(w.createElement)($.a,null)))}}var Ue=Object(C.connect)((e)=>({windowVisible:e.config.windowVisible}),(e)=>({showWindow:()=>{e(p())}}))(ke),Ae=i(24),Ge=i.n(Ae),We=i(6),He=i.n(We),Qe=i(25),Ze=i.n(Qe),Ve=i(26),Fe=i.n(Ve),Be=i(27),Xe=i.n(Be),_e=i(28),Je=i.n(_e),Ke=i(11),qe=i.n(Ke),$e=i(29),et=i.n($e),tt=i(30),it=i.n(tt);const nt=O()(Je.a)`
  && {
    flex: 0 0 32px;
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
`,at=O.a.div`
  position: absolute;
  bottom: -1px;
  left: 27px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid ${Q.a[100]};
`,rt=O.a.div`
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
`,st=O()(He.a)`
  && {
    font-family: 'Product Sans';
    font-weight: 400;
    height: 32px;
    font-size: 18px;
    line-height: 32px;
    flex: 1;
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
  }
`,ot=O()(qe.a)`
  && {
    padding: 6px;
    flex: 0;
    cursor: pointer;
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`;class lt extends w.PureComponent{render(){var e=this.props;const t=e.title,i=e.theme,n=e.hideWindow,a=e.showWindowed,r=e.showFullscreen,s=e.fullscreen,o=e.avatar,l=e.showPrivacyPolicy;return Object(w.createElement)(rt,{theme:i},Object(w.createElement)(at,null),Object(w.createElement)(nt,{alt:t,src:o}),Object(w.createElement)(st,{theme:i,variant:'h6'},t),Object(w.createElement)(it.a,{title:'Privacy Policy',placement:'bottom'},Object(w.createElement)(ot,{theme:i,onClick:l,"aria-label":'Windowed'},Object(w.createElement)(Xe.a,{fontSize:'small'}))),s?Object(w.createElement)(ot,{theme:i,onClick:a,"aria-label":'Windowed'},Object(w.createElement)(Fe.a,{fontSize:'small'})):Object(w.createElement)(ot,{theme:i,onClick:r,"aria-label":'Fullscreen'},Object(w.createElement)(Ze.a,{fontSize:'small'})),Object(w.createElement)(ot,{theme:i,onClick:n,"aria-label":'Close'},Object(w.createElement)(et.a,{fontSize:'small'})))}}var ct=Object(Z.withTheme)()(Object(C.connect)((e)=>({title:e.config.title,fullscreen:e.config.fullscreen,avatar:e.config.avatar}),{hideWindow:y,showFullscreen:M,showWindowed:g,showPrivacyPolicy:function(){return{type:Ee}}})(lt)),dt=i(31),mt=i.n(dt),ut=i(32),pt=i.n(ut),yt=i(33),Mt=i.n(yt),gt=i(34),Tt=i.n(gt),Nt=i(35),xt=i.n(Nt),It=i(7),ft=i.n(It);const Lt=O()(pt.a)`
  && {
    position: absolute;
  }
`;class bt extends w.PureComponent{render(){var e=this.props;const t=e.hidePrivacyPolicy,i=e.privacyPolicyVisible,n=e.privacyPolicy,a=e.parentRef;return Object(w.createElement)(Lt,{open:i,onClose:t,"aria-labelledby":'privacy-policy',container:a,scroll:'paper'},Object(w.createElement)(mt.a,null,'Privacy Statement'),Object(w.createElement)(Tt.a,null,Object(w.createElement)(xt.a,null,n)),Object(w.createElement)(Mt.a,null,Object(w.createElement)(ft.a,{onClick:t,color:'primary'},'Close')))}}var Et=Object(C.connect)((e)=>({privacyPolicyVisible:e.config.privacyPolicyVisible,privacyPolicy:e.config.privacyPolicy}),{hidePrivacyPolicy:function(){return{type:he}}})(bt),ht=i(36),wt=i.n(ht),jt=i(37),Ct=i.n(jt),vt=i(38),zt=i.n(vt),St=i(39),Pt=i.n(St);const Ot=O.a.div`
  text-align: center;
  width: 42px;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`,Dt=O.a.div`
  animation: dot-keyframes 1s infinite ease-in-out;
  background-color: ${Pt.a[900]};
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
`;class Yt extends w.PureComponent{render(){return Object(w.createElement)(Ot,null,Object(w.createElement)(Dt,null),Object(w.createElement)(Dt,null),Object(w.createElement)(Dt,null))}}const Rt=O.a.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 16px 0;
  height: min-content;
  align-items: ${(e)=>'user'===e.entity?'flex-end':'flex-start'};
`,kt=O.a.div`
  width: 100%;
  height: min-content;
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${(e)=>'user'===e.entity?'flex-end':'flex-start'};
`,Ut=O.a.div`
  && {
    background: ${Q.a[400]};
    border-top-right-radius: 10px;
    border-top-left-radius: 1px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 12px;
  }
`,At=O.a.div`
  && {
    background-color: ${(e)=>e.theme.palette.primary.main};
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
    border-top-left-radius: 10px;
    border-top-right-radius: 1px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 12px;
  }
`,Gt=O()(He.a)`
  && {
    color: ${Q.a[500]};
    margin-top: 8px;
    padding-left: 12px;
    padding-right: 2px;
  }
`;class Wt extends w.PureComponent{render(){var e=this.props;const t=e.message,i=e.entity,n=e.isLoading,a=e.timestamp,r=e.currentTime,s=e.theme,o=Object(ie.parse)(r,je,new Date(r)),l=Object(ie.parse)(a,je,new Date(r)),c=Object(ie.differenceInMinutes)(o,l),d=Object(ie.differenceInSeconds)(o,l);let m=null;m=1<=c?`${c} min`:10<=d?`${d} sec`:'Now';const u='user'===i?Object(w.createElement)(At,{elevation:1,theme:s},Object(w.createElement)(He.a,{variant:'body1'},t)):Object(w.createElement)(Ut,{elevation:1},n?Object(w.createElement)(Yt,null):Object(w.createElement)(He.a,{variant:'body1'},t));return Object(w.createElement)(Rt,{entity:i},Object(w.createElement)(kt,{entity:i},u),Object(w.createElement)(Gt,{variant:'caption'},m))}}var Ht=Object(Z.withTheme)()(Object(C.connect)((e)=>({currentTime:e.conversation.currentTime}))(Wt)),Qt=i(40),Zt=i.n(Qt),Vt=i(41),Ft=i.n(Vt),Bt=i(42),Xt=i.n(Bt),_t=i(43),Jt=i.n(_t);const Kt=O()(Zt.a)`
  && {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #fff;
    margin: 16px auto;
    white-space: pre-line;
  }
`,qt=O()(Jt.a)`
  && {
    height: ${(e)=>e.image&&''!==e.image?'200px':'0px'};
    background-size: cover;
    background-position: center center;
  }
`;class $t extends w.PureComponent{render(){var e=this.props.data;const t=e.title,i=e.subtitle,n=e.imageUrl,a=e.buttons;return Object(w.createElement)(Kt,null,Object(w.createElement)(qt,{image:encodeURI(n),title:''}),Object(w.createElement)(Xt.a,null,Object(w.createElement)(He.a,{gutterBottom:!0,variant:'h6'},t),Object(w.createElement)(He.a,{variant:'body1'},i)),Object(w.createElement)(Ft.a,null,a.map((e,t)=>{const i=`card-${t}${Object(ie.format)(new Date,je)}`;return Object(w.createElement)(ft.a,{href:e.postback,target:'_blank',size:'small',color:'primary',key:i},e.text)})))}}var ei=Object(C.connect)((e)=>({inputValue:e.userInput}))($t);const ti=O.a.div`
  background: ${Q.a[100]};
  z-index: 4;
  grid-area: chatwindow;
  margin-bottom: 1px;
  margin-top: 8px;
  width: 100%;
`;class ii extends w.PureComponent{constructor(e){super(e),Object.defineProperty(this,'onResize',{enumerable:!0,writable:!0,value:()=>{this.ListRef.current.scrollToRow(this.messages.length)}}),Object.defineProperty(this,'parseMessages',{enumerable:!0,writable:!0,value:()=>{const e=this.props.messages,t=[];return e.forEach((e,i)=>{const n={systemTime:e.systemTime,entity:e.entity,key:`msg-${i}-${e.systemTime}`};if(e.loading){const i=Ct()(e,n);t.push(i)}else if('bot'===e.entity)e.responses.forEach((e)=>{if('text'===e.type||'card'===e.type){const i=Ct()(e,n);t.push(i)}});else if('user'===e.entity){const i=Ct()(e,n);t.push(i)}}),t}}),Object.defineProperty(this,'createMessageElements',{enumerable:!0,writable:!0,value:()=>{const e=this.parseMessages(),t=[];e.forEach((e)=>{e.loading?t.push(f(e)):'user'===e.entity?t.push(I(e)):'bot'===e.entity&&'text'===e.type?t.push(L(e)):'bot'===e.entity&&'card'===e.type?t.push(b(e)):t.push(L({text:'Something went wrong.'}))}),t.sort((e,t)=>{const i=Object(ie.parse)(e.props.timestamp,je,new Date(e.props.timestamp)),n=Object(ie.parse)(t.props.timestamp,je,new Date(t.props.timestamp)),a=Object(ie.differenceInMilliseconds)(i,n);return a}),this.messageElements=t,this.setState({numMessages:t.length})}}),Object.defineProperty(this,'rowRenderer',{enumerable:!0,writable:!0,value:({index:e,key:t,parent:i,style:n})=>Object(w.createElement)(vt.CellMeasurer,{cache:this.cache,key:t,parent:i,rowIndex:e},Object(w.createElement)('div',{style:n},this.messageElements[e]))}),this.ListRef=j.a.createRef(),this.cache=new vt.CellMeasurerCache({defaultHeight:300,fixedWidth:!0}),this.messages=[],this.messageElements=[],this.state={numMessages:0}}componentDidUpdate(){const e=this.parseMessages();wt()(this.messages,e)||(this.messages=e,this.createMessageElements(),this.cache.clearAll(),this.ListRef.current&&(this.ListRef.current.recomputeRowHeights(),this.ListRef.current.scrollToRow(e.length),this.ListRef.current.forceUpdateGrid()))}render(){const e=this.props.messages,t=this.state.numMessages;return Object(w.createElement)(ti,{elevation:1,square:!0},Object(w.createElement)(vt.AutoSizer,{onResize:this.onResize},({height:i,width:n})=>Object(w.createElement)(vt.List,{messages:e,style:{outline:'none',padding:'0 16px 0 16px'},ref:this.ListRef,height:i,width:n,rowCount:t,deferredMeasurementCache:this.cache,rowHeight:this.cache.rowHeight,rowRenderer:this.rowRenderer,onScroll:this.onScroll,scrollToIndex:t,scrollToAlignment:'end'})))}}var ni=Object(C.connect)((e)=>({messages:e.conversation.messages,buttonBarVisible:e.buttonBar.visible,error:e.error}))(ii),ai=i(44),ri=i.n(ai),si=i(45),oi=i.n(si);const li=O.a.div`
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
`,ci=O()(oi.a)`
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
`;class di extends w.PureComponent{constructor(){super(),this.handleKeyPress=this.handleKeyPress.bind(this)}handleKeyPress(t){13===t.charCode&&this.props.submitUserInput()}render(){var e=this.props;const t=e.saveUserInput,i=e.inputValue;return Object(w.createElement)(li,null,Object(w.createElement)(ci,{fullWidth:!0,disableUnderline:!0,placeholder:'Send a message',onChange:t,value:i,onKeyPress:this.handleKeyPress}),Object(w.createElement)(qe.a,{onClick:this.props.submitUserInput,"aria-label":'Send',color:'primary'},Object(w.createElement)(ri.a,null)))}}var mi=Object(C.connect)((e)=>({inputValue:e.userInput}),(t)=>({saveUserInput:(i)=>{t(E(i.target.value))},submitUserInput:()=>{t(h())}}))(di),ui=i(46),pi=i.n(ui);const yi=O.a.div`
  grid-area: buttonbar;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  padding: ${(e)=>e.visible?'4px 4px 16px 16px':'0 16px'};
  background: ${Q.a[300]};
  border-top: ${(e)=>e.visible?'1px solid rgba(0, 0, 0, 0.2)':'none'};
  overflow-y: auto;
`,Mi=O()(ft.a)`
  && {
    margin-right: 12px;
    margin-top: 12px;
    display: ${(e)=>'true'===e.visible?'block':'none'};
  }
`;class gi extends w.PureComponent{render(){var e=this.props;const t=e.visible,i=e.messages,n=e.sendQuickReply,a=pi()(i,(e)=>{const t=Se()(e.responses,['type','suggestion']);return t}),r=[];if(a){const e=a.responses.filter((e)=>'suggestion'===e.type);for(const i of e)for(const e of i.suggestions)r.push({label:e,id:a.messageId,visible:t})}return Object(w.createElement)(yi,{visible:t},r.map((e,t)=>Object(w.createElement)(Mi,{size:'small',variant:'outlined',color:'secondary',key:`${e.id}-btn${t}`,visible:e.visible.toString(),onClick:()=>n(e.label)},e.label)))}}var Ti=Object(C.connect)((e)=>({visible:e.buttonBar.visible,messages:e.conversation.messages}),(e)=>({sendQuickReply:(t)=>{e(u(t))}}))(gi),Ni=i(47),xi=i.n(Ni);const Ii=O.a.div`
  grid-area: errorbar;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: ${(e)=>e.visible?'24px 16px':'0 16px'};
  background: ${xi.a[300]};
  border-top: ${(e)=>e.visible?`1px solid ${xi.a[500]}`:'none'};
  color: ${xi.a[700]};
`;class fi extends w.PureComponent{render(){const e=this.props.error;return Object(w.createElement)(Ii,{visible:''!==e},e)}}var Li=Object(C.connect)((e)=>({error:e.error}))(fi);const bi={giant:1170,desktop:992,tablet:768,phone:620},Ei=Object.keys(bi).reduce((e,t)=>{const i=bi[t]/16;return e[t]=(...e)=>P.css`
    @media (max-width: ${i}em) {
      ${Object(P.css)(...e)};
    }
  `,e},{}),hi=O()(Ge.a)`
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

    ${Ei.phone`
    width: ${(e)=>e.visible?'calc(100% - 96px)':'0'};
    height: ${(e)=>e.visible?'calc(100% - 96px)':'0'};
    max-width: none;
    max-height: none;
  `};
  }
`,wi=O.a.div`
  && {
    width: 100%;
    height: 100%;
    transform-origin: bottom right;
    pointer-events: auto;
    background: ${Q.a[100]};
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
`;class ji extends w.PureComponent{constructor(e){super(e),this.containerRef=j.a.createRef()}render(){var e=this.props;const t=e.windowVisible,i=e.fullscreen;return Object(w.createElement)(hi,{elevation:4,fullscreen:i?1:0,visible:t?1:0},Object(w.createElement)(te.a,{in:t},Object(w.createElement)(wi,{ref:this.containerRef},Object(w.createElement)(ct,null),Object(w.createElement)(Et,{parentRef:this.containerRef.current}),Object(w.createElement)(ni,null),Object(w.createElement)(Ti,null),Object(w.createElement)(Li,null),Object(w.createElement)(mi,null))))}}var Ci=Object(C.connect)((e)=>({windowVisible:e.config.windowVisible,fullscreen:e.config.fullscreen}))(ji),vi=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e};const zi={avatar:null,title:'Chat Window',windowVisible:!1,fullscreen:!1,privacyPolicyVisible:!1,privacyPolicy:'Please do not enter any personally identifiable information such as SSN, Date of Birth, Case Number or last name.'};var Si=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e};const Pi={client:null,clientName:null,messages:[],webhookPayload:null,lastUpdateTime:Object(ie.format)(new Date,je),currentTime:Object(ie.format)(new Date,je),headerTime:'Now',timer:null,conversationStarted:!1};var Oi=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e};const Di={visible:!1,buttons:[]};const Yi='';const Ri=Object(z.combineReducers)({config:function(e=zi,t){switch(t.type){case he:return vi({},e,{privacyPolicyVisible:!1});case Ee:return vi({},e,{privacyPolicyVisible:!0});case we:return vi({},e,{privacyPolicy:t.policyText});case re:return vi({},e,{avatar:t.avatar});case ae:return vi({},e,{title:t.title});case Te:return vi({},e,{windowVisible:!0});case Ne:return vi({},e,{windowVisible:!1});case xe:return vi({},e,{fullscreen:!0});case Ie:return vi({},e,{fullscreen:!1});default:return e;}},conversation:function(e=Pi,t){switch(t.type){case se:return Si({},e,{client:t.client,clientName:t.clientName});case ue:return Si({},e,{headerTime:t.headerTime,currentTime:t.currentTime});case me:return Si({},e,{timer:t.timer});case de:return Si({},e,{messages:[...e.messages,{loading:!0,entity:'bot',systemTime:Object(ie.format)(new Date,je)}]});case oe:return Si({},e,{lastUpdateTime:Object(ie.format)(new Date,je),headerTime:'Now',messages:t.newConversationArray});case ce:return Si({},e,{lastUpdateTime:Object(ie.format)(new Date,je),headerTime:'Now',messages:[...e.messages,t.response].sort((e,t)=>{const i=Object(ie.parse)(e.systemTime,je,new Date(e.systemTime)),n=Object(ie.parse)(t.systemTime,je,new Date(t.systemTime)),a=Object(ie.differenceInMilliseconds)(n,i);return a})});case fe:return Si({},e,{webhookPayload:t.webhookPayload});case Le:return Si({},e,{conversationStarted:!0});case be:return Si({},e,{conversationStarted:!1});default:return e;}},buttonBar:function(e=Di,t){switch(t.type){case pe:return Oi({},e,{visible:!0});case ye:return Oi({},e,{visible:!1});default:return e;}},userInput:function(e='',t){switch(t.type){case le:return t.value;default:return e;}},error:function(e=Yi,t){switch(t.type){case Me:return t.error;case ge:return Yi;default:return e;}}});Y.a.load({google:{families:['Roboto:300,400,500','Product Sans:400']}});const ki=O.a.div`
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
      background-color: ${Q.a[600]};
      -webkit-border-radius: 8px;
      border-radius: 8px;
      border: 2px solid ${Q.a[100]};
    }
    & ::-webkit-scrollbar {
      background-color: ${Q.a[100]};
      width: 8px;
    }
  }
`;class Ui extends w.PureComponent{constructor(e){super(e),this.store=Object(z.createStore)(Ri,Object(z.applyMiddleware)(A.a)),this.currentValue=null,this.theme=n(this.props.primaryColor,this.props.secondaryColor)}componentDidMount(){this.store.dispatch(x(this.props,this.theme)),this.unsubscribe=this.store.subscribe(()=>this.handleChange(this.store))}componentWillUnmount(){this.unsubscribe()}select(e){return e.conversation.webhookPayload}handleChange(e){const t=this.currentValue;this.currentValue=this.select(e.getState()),t!==this.currentValue&&this.props.onPayload&&this.props.onPayload(this.currentValue)}render(){return Object(w.createElement)(C.Provider,{store:this.store},Object(w.createElement)(k.a,{theme:this.theme},Object(w.createElement)(ki,null,Object(w.createElement)(Ci,null),Object(w.createElement)(Ue,null))))}}t['default']=Ui},function(e){e.exports=require('webfontloader')},function(e){e.exports=require('@material-ui/core/styles/MuiThemeProvider')},function(e){e.exports=require('redux-thunk')},function(e){e.exports=require('whatwg-fetch')},function(e){e.exports=require('@material-ui/core/colors')},function(e){e.exports=require('validator/lib/isHexColor')},function(e){e.exports=require('@material-ui/core/Fab')},function(e){e.exports=require('@material-ui/icons/Chat')},function(e){e.exports=require('lodash/get')},function(e){e.exports='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTQ0Ljc3IDE0NC43NyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ze2ZpbGw6IzhkYzVkNjt9LmNscy00e2NsaXAtcGF0aDp1cmwoI2NsaXAtcGF0aCk7fS5jbHMtNXtmaWxsOiMyZTU3NmQ7fS5jbHMtNntmaWxsOiNmMWM5YTU7fS5jbHMtN3tmaWxsOiNlNGI2OTI7fS5jbHMtOHtmaWxsOiNkZGFjOGM7b3BhY2l0eTowLjE7bWl4LWJsZW5kLW1vZGU6bXVsdGlwbHk7fS5jbHMtOXtmaWxsOiNmYTU4MmE7fTwvc3R5bGU+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTAuNTQgLTExNDYuMDQpIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02MzUuMzIsMTIxOC40MmE3Mi4zOSw3Mi4zOSwwLDEsMC03Mi4zOSw3Mi4zOUE3Mi4zOCw3Mi4zOCwwLDAsMCw2MzUuMzIsMTIxOC40MloiLz48L2NsaXBQYXRoPjwvZGVmcz48dGl0bGU+VW50aXRsZWQtMTwvdGl0bGU+PGcgY2xhc3M9ImNscy0yIj48ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik02MzUuMzIsMTIxOC40MmE3Mi4zOSw3Mi4zOSwwLDEsMC03Mi4zOSw3Mi4zOUE3Mi4zOCw3Mi4zOCwwLDAsMCw2MzUuMzIsMTIxOC40MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTAuNTQgLTExNDYuMDQpIi8+PGcgY2xhc3M9ImNscy00Ij48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik01MzUuNzgsMTIyMS4wOWMwLDExLjgxLTYuNDgsMTIuMTItNiwxOS45My41MSw4LjY2LDcuMjgsOC42OCw3LjI4LDE0LjY0cy02LjIyLDEyLjYyLS43MSwxOWgyNi42MXYtNzIuMjFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTU5MC4wOCwxMjIwLjdjMCwxMS44MSw2LjQ4LDEyLjExLDYsMTkuOTMtLjUxLDguNjYtNy4yOCw4LjY4LTcuMjgsMTQuNjNzNi4yMiwxMi42My43MSwxOUg1NjIuOTJ2LTcyLjIxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5MC41NCAtMTE0Ni4wNCkiLz48ZWxsaXBzZSBjbGFzcz0iY2xzLTUiIGN4PSI3Mi4zOSIgY3k9IjYyLjcyIiByeD0iMjkuNjMiIHJ5PSIyOS44MyIvPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTU5Ny42LDEyNjNjLTQuNjctOC44NC0zNC42Ny0xNC4zOC0zNC42Ny0xNC4zOHMtMzAsNS41NC0zNC42NywxNC4zOGMtMy40NCwxMi4yNS02LjMzLDI3LjgzLTYuMzMsMjcuODNoODJTNjAyLDEyNzQuMTEsNTk3LjYsMTI2M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTAuNTQgLTExNDYuMDQpIi8+PHBhdGggY2xhc3M9ImNscy03IiBkPSJNNTYyLjkzLDEyNDguNnMzMCw1LjU0LDM0LjY3LDE0LjM4YzQuMzgsMTEuMTMsNi4zMywyNy44Myw2LjMzLDI3LjgzaC00MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTAuNTQgLTExNDYuMDQpIi8+PHJlY3QgY2xhc3M9ImNscy02IiB4PSI2NC4yMiIgeT0iODQuNjEiIHdpZHRoPSIxNi4zMyIgaGVpZ2h0PSIyNy4zNCIvPjxyZWN0IGNsYXNzPSJjbHMtNyIgeD0iNzIuMzkiIHk9Ijg0LjYxIiB3aWR0aD0iOC4xNyIgaGVpZ2h0PSIyNy4zNCIvPjxwYXRoIGNsYXNzPSJjbHMtOCIgZD0iTTU1NC43NiwxMjQzLjMxYzEuNDcsNC4yMiw3LjQsNi42MywxMS43NSw2LjYzYTE0LjgsMTQuOCwwLDAsMCw0LjU5LS43NHYtMTguNTZINTU0Ljc2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5MC41NCAtMTE0Ni4wNCkiLz48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik01ODMuOTMsMTIxMy4zOWMwLTE3LjA3LTkuNC0yNi43OC0yMS0yNi43OHMtMjEsOS43MS0yMSwyNi43OCw5LjQsMzAuOTIsMjEsMzAuOTJTNTgzLjkzLDEyMzAuNDcsNTgzLjkzLDEyMTMuMzlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjxwYXRoIGNsYXNzPSJjbHMtNyIgZD0iTTU4MC43MywxMjI1LjIzYy0zLjgtLjQyLTYuMzctNC43OC01LjczLTkuNzNzNC4yNC04LjYzLDgtOC4yMSw2LjM3LDQuNzgsNS43Myw5LjczUzU4NC41NCwxMjI1LjY1LDU4MC43MywxMjI1LjIzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5MC41NCAtMTE0Ni4wNCkiLz48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik01MzcuMjMsMTIxN2MtLjY0LTUsMS45Mi05LjMxLDUuNzMtOS43M3M3LjQxLDMuMjYsOCw4LjIxLTEuOTMsOS4zMS01LjczLDkuNzNTNTM3Ljg3LDEyMjIsNTM3LjIzLDEyMTdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjxwYXRoIGNsYXNzPSJjbHMtNyIgZD0iTTU4My45MywxMjEzLjM5YzAtMTcuMDctOS40LTI2Ljc4LTIxLTI2Ljc4djU3LjdDNTc0LjUzLDEyNDQuMzEsNTgzLjkzLDEyMzAuNDcsNTgzLjkzLDEyMTMuMzlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTU4NS42NiwxMjExLjQ3YzAtLjA2LDAtLjEsMC0uMTUsMC0xMy4yNS05LTI3LjIzLTIxLjUyLTI3LjIzcy0yMy45MywxNC0yMy45MywyNy4yM3YuMTVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjxwYXRoIGNsYXNzPSJjbHMtOSIgZD0iTTYwMy45MywxMjkwLjgxcy0xLjk1LTE2LjctNi4zMy0yNy44M2MtMi41Ni00Ljg1LTEyLjc0LTguNy0yMS40MS0xMS4xOWwtMTMuMjksMTAuNDNMNTQ5LjA3LDEyNTJjLTguNTMsMi41LTE4LjMxLDYuMjgtMjAuODEsMTEtMy40NCwxMi4yNS02LjMzLDI3LjgzLTYuMzMsMjcuODNoODJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjwvZz48L2c+PC9nPjwvc3ZnPg=='},function(e){e.exports=require('@material-ui/core/Paper')},function(e){e.exports=require('@material-ui/icons/Fullscreen')},function(e){e.exports=require('@material-ui/icons/FullscreenExit')},function(e){e.exports=require('@material-ui/icons/Info')},function(e){e.exports=require('@material-ui/core/Avatar')},function(e){e.exports=require('@material-ui/icons/Close')},function(e){e.exports=require('@material-ui/core/Tooltip')},function(e){e.exports=require('@material-ui/core/DialogTitle')},function(e){e.exports=require('@material-ui/core/Dialog')},function(e){e.exports=require('@material-ui/core/DialogActions')},function(e){e.exports=require('@material-ui/core/DialogContent')},function(e){e.exports=require('@material-ui/core/DialogContentText')},function(e){e.exports=require('lodash/isEqual')},function(e){e.exports=require('lodash/merge')},function(e){e.exports=require('react-virtualized')},function(e){e.exports=require('@material-ui/core/colors/green')},function(e){e.exports=require('@material-ui/core/Card')},function(e){e.exports=require('@material-ui/core/CardActions')},function(e){e.exports=require('@material-ui/core/CardContent')},function(e){e.exports=require('@material-ui/core/CardMedia')},function(e){e.exports=require('@material-ui/icons/Send')},function(e){e.exports=require('@material-ui/core/Input')},function(e){e.exports=require('lodash/findLast')},function(e){e.exports=require('@material-ui/core/colors/red')}])});
//# sourceMappingURL=chatframe.js.map