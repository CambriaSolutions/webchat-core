(function(e,t){'object'==typeof exports&&'object'==typeof module?module.exports=t():'function'==typeof define&&define.amd?define('chatframe',[],t):'object'==typeof exports?exports.chatframe=t():e.chatframe=t()})('undefined'==typeof self?this:self,function(){return function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(n,'a',n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='./',t(t.s=11)}([function(e){e.exports=require('react')},function(e){e.exports=require('styled-components')},function(e){e.exports=require('react-redux')},function(e){e.exports=require('date-fns')},function(e){e.exports=require('@material-ui/core/colors/grey')},function(e){e.exports=require('@material-ui/core/styles')},function(e){e.exports=require('@material-ui/core/Button')},function(e){e.exports=require('@material-ui/core/Typography')},function(e){e.exports=require('redux')},function(e){e.exports=require('lodash/find')},function(e){e.exports=require('@material-ui/core/IconButton')},function(e,t,n){e.exports=n(12)},function(e,t,n){'use strict';function i(e='lightBlue',t='pink'){const n={palette:{error:H.red,contrastThreshold:3,tonalOffset:0.2},typography:{useNextVariants:!0}};if(F()(e))n.palette.primary={main:e};else if(H[e])n.palette.primary=H[e];else throw new Error(`${e} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);if(F()(t))n.palette.secondary={main:t};else if(t&&H[t])n.palette.secondary=H[t];else throw new Error(`${t} is not a valid color. 
      Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);return Object(A.createMuiTheme)(n)}function a(e){return(t)=>{const n=new we(e);t({type:ee,client:n,clientName:'dialogflow'})}}function r(e){return(t,n)=>{const i=n().conversation.messages,a=fe()(e.responses,['type','suggestion']);if(a?t({type:oe}):t({type:le}),0===i.length)t({type:te,newConversationArray:[e]});else{const n=i.map((t)=>t.loading?e:t).sort((e,t)=>{const n=Object(_.parse)(e.systemTime,ge,new Date(e.systemTime)),i=Object(_.parse)(t.systemTime,ge,new Date(t.systemTime)),a=Object(_.differenceInMilliseconds)(n,i);return a});t({type:te,newConversationArray:n})}}}function s(e){return(t)=>{function n(e){return'text'===e?'text':'card'===e?'card':'quickReplies'===e?'suggestion':'image'===e?'image':4===e?'payload':'text'}const i=Ie()(e,'queryResult.fulfillmentMessages',[]),a=i.map((e)=>{const t=n(e.message);return{type:t,suggestions:Ie()(e,'quickReplies.quickReplies',[]),text:Ie()(e,'text.text',null),card:{title:Ie()(e,'card.title',''),subtitle:Ie()(e,'card.subtitle',''),imageUrl:Ie()(e,'card.imageUri',''),buttons:Ie()(e,'card.buttons',[])},payload:Ie()(e,'payload',{})}}),s=Ie()(e,'queryResult.webhookPayload.fields',null);if(s){for(const e of Object.entries(s)){var o=be(e,2);const t=o[0],n=o[1];'stringValue'===n.kind&&(s[t]=JSON.parse(n.stringValue))}t({type:Me,webhookPayload:s})}const l=Object(_.format)(new Date,ge),d={entity:'bot',loading:!1,messageId:e.responseId,language:e.queryResult.languageCode,systemTime:l,providerResponse:e,responses:a};t(r(d))}}function o(e){return(t,n)=>{const i=n().conversation.client;t({type:ae}),i.textRequest(e).then((e)=>{e?(t(s(e)),t({type:ce})):t({type:de,error:'No response received from chat provider. Please try again.'})}).catch((e)=>{throw t({type:de,error:'Unable to connect to the chat provider. Please try again.'}),new Error(e)})}}function l(e){return(t,n)=>{const i=n().conversation.client;t({type:ae}),i.eventRequest(e).then((e)=>{e?(t(s(e)),t({type:ce})):(t({type:de,error:'No response received from chat provider. Please try again.'}),t({type:Te}))}).catch((e)=>{throw t({type:de,error:'Unable to connect to the chat provider. Please try again.'}),new Error(e)})}}function d(e,t){return(n)=>{if(!e)throw new Error('No conversation provider selected.');if('dialogflow'===e.toLowerCase())n(a(t));else throw n({type:de,error:`Unable to connect to ${e}`}),new Error(`${e} is not a recognized conversation provider.`)}}function c(e){return(t,n)=>{const i=n().conversation.clientName;if('dialogflow'===i.toLowerCase())t(o(e));else throw t({type:de,error:`Unable to connect to ${i}`}),new Error(`${i} is not a recognized conversation provider.`)}}function u(e){return(t,n)=>{const i=n().conversation.messages.length,a=Object(_.format)(new Date,ge),r={entity:'user',messageId:`usermessage-${i}`,systemTime:a,text:e};t({type:ie,response:r}),t({type:le}),t(c(e))}}function m(e){return(t)=>{t(u(e))}}function p(){return(e,t)=>{const n=t().conversation.conversationStarted;e({type:ue}),n||(e(l('Welcome')),e({type:Ne}))}}function y(){return{type:me}}function M(){return{type:pe}}function N(){return{type:ye}}function T(){return(e,t)=>{const n=t().conversation.lastUpdateTime,i=new Date,a=Object(_.parse)(n,ge,new Date(n)),r=Object(_.differenceInMinutes)(i,a),s=Object(_.differenceInSeconds)(i,a);let o='Now';1<=r?o=`${r} min ago`:9<=s&&(o=`${s} sec ago`);const l=Object(_.format)(i,ge);e({type:se,headerTime:o,currentTime:l})}}function g(){return(e,t)=>{const n=t().conversation.timer;n&&clearInterval(n);const i=setInterval(()=>e(T()),10000);e({type:re,newTimer:i}),e(T())}}function L(e){return(t)=>{const n=e.title,i=e.avatar,a=e.client,r=e.clientOptions,s=e.initialActive,o=e.fullscreen;let c=i;c||(c=ze.a),t({type:q,title:n}),t({type:$,avatar:c}),t(d(a,r)),t(g()),!0===s?(t({type:Ne}),t(l('Welcome')),t(p())):t(y()),!0===o?t(M()):t(N())}}function I(e){return Object(E.createElement)(It,{message:e.text,entity:e.entity,key:e.messageId,timestamp:e.systemTime,isLoading:!1})}function x(e){return Object(E.createElement)(It,{key:'loading',entity:'bot',timestamp:e.systemTime,isLoading:e.loading})}function f(e){return Object(E.createElement)(It,{message:e.text,entity:e.entity,key:e.messageId,isLoading:!1,timestamp:e.systemTime})}function h(e){return Object(E.createElement)(Ot,{data:e.card,timestamp:e.systemTime,key:e.messageId})}function j(e){return{type:ne,value:e}}function w(){return(e,t)=>{var n=t();const i=n.userInput;i&&''!==i&&(e(u(i)),e(j('')))}}Object.defineProperty(t,'__esModule',{value:!0});var E=n(0),b=n.n(E),z=n(2),C=n.n(z),v=n(8),S=n.n(v),O=n(1),D=n.n(O),P=n(13),Y=n.n(P),k=n(14),R=n.n(k),U=n(15),G=n.n(U),A=n(5),W=n.n(A),H=n(16),Q=n.n(H),Z=n(17),F=n.n(Z),B=n(6),V=n.n(B),X=n(18),J=n.n(X),_=n(3),K=n.n(_);const q='SET_TITLE',$='SET_AVATAR',ee='SAVE_CLIENT',te='SAVE_RESPONSE',ne='SAVE_USER_INPUT',ie='SAVE_USER_RESPONSE',ae='INITIATE_LOADING',re='TIMER_START',se='UPDATE_CURRENT_TIME',oe='SHOW_BUTTON_BAR',le='HIDE_BUTTON_BAR',de='DISPLAY_ERROR',ce='CLEAR_ERROR',ue='SHOW_WINDOW',me='HIDE_WINDOW',pe='FULLSCREEN',ye='WINDOWED',Me='RECEIVE_WEBHOOK_DATA',Ne='SET_CONVERSATION_STARTED',Te='SET_CONVERSATION_ENDED',ge='yyyy-MM-dd\'T\'hh:mm:ss.SSS';var Le=n(19),Ie=n.n(Le),xe=n(9),fe=n.n(xe),he=n(20),je=n.n(he);class we{constructor(e){if(!e||!e.textUrl)throw new Error('Fulfillment URL is required to generate a conversation client');this.textUrl=e.textUrl,this.eventUrl=e.eventUrl,this.apiKey=e.apiKey}encodeQueryData(e){const t=[];for(const n in e)t.push(`${encodeURIComponent(n)}=${encodeURIComponent(e[n])}`);return t.join('&')}textRequest(e){if(!e)throw new Error('Query should not be empty');const t={query:e};this.apiKey&&(t['x-api-key']=this.apiKey);const n=this.encodeQueryData(t),i=`${this.textUrl}?${n}`;return fetch(i).then((e)=>e.json()).catch((e)=>{throw new Error(e)})}eventRequest(e){if(!e)throw new Error('Query should not be empty');const t=this.encodeQueryData({query:e}),n=`${this.eventUrl}?${t}`;return fetch(n).then((e)=>e.json()).catch((e)=>{throw new Error(e)})}}var be=function(){function e(e,t){var n=[],i=!0,a=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(i=(s=o.next()).done)&&(n.push(s.value),!(t&&n.length===t));i=!0);}catch(e){a=!0,r=e}finally{try{!i&&o['return']&&o['return']()}finally{if(a)throw r}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),Ee=n(21),ze=n.n(Ee);const Ce=D()(V.a)`
  && {
    display: ${(e)=>e.active?'block':'none'};
    position: absolute;
    bottom: 48px;
    right: 48px;
    pointer-events: auto;
    padding-top: 8px;
  }
`;class ve extends E.PureComponent{render(){var e=this.props;const t=e.windowVisible,n=e.showWindow;return Object(E.createElement)(Ce,{color:'primary',variant:'fab',onClick:n,active:t?0:1},Object(E.createElement)(J.a,null))}}var Se=Object(z.connect)((e)=>({windowVisible:e.config.windowVisible}),(e)=>({showWindow:()=>{e(p())}}))(ve),Oe=n(22),De=n.n(Oe),Pe=n(23),Ye=n.n(Pe),ke=n(4),Re=n.n(ke),Ue=n(7),Ge=n.n(Ue),Ae=n(24),We=n.n(Ae),He=n(25),Qe=n.n(He),Ze=n(26),Fe=n.n(Ze),Be=n(10),Ve=n.n(Be),Xe=n(27),Je=n.n(Xe);const _e=D()(Fe.a)`
  && {
    flex: 0 0 32px;
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
`,Ke=D.a.div`
  position: absolute;
  bottom: -1px;
  left: 27px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid ${Re.a[100]};
`,qe=D.a.div`
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
    box-sizing: content-box;
    z-index: 1;
    grid-area: header;
    line-height: normal;
  }
`,$e=D()(Ge.a)`
  && {
    font-family: 'Product Sans';
    font-weight: 400;
    height: 32px;
    font-size: 18px;
    line-height: 32px;
    flex: 1;
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
  }
`,et=D()(Ve.a)`
  && {
    padding: 6px;
    flex: 0;
    cursor: pointer;
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`;class tt extends E.PureComponent{render(){var e=this.props;const t=e.title,n=e.theme,i=e.hideWindow,a=e.showWindowed,r=e.showFullscreen,s=e.fullscreen,o=e.avatar;return Object(E.createElement)(qe,{theme:n},Object(E.createElement)(Ke,null),Object(E.createElement)(_e,{alt:t,src:o}),Object(E.createElement)($e,{theme:n,variant:'h6'},t),s?Object(E.createElement)(et,{theme:n,onClick:a,"aria-label":'Windowed'},Object(E.createElement)(Qe.a,{fontSize:'small'})):Object(E.createElement)(et,{theme:n,onClick:r,"aria-label":'Fullscreen'},Object(E.createElement)(We.a,{fontSize:'small'})),Object(E.createElement)(et,{theme:n,onClick:i,"aria-label":'Close'},Object(E.createElement)(Je.a,{fontSize:'small'})))}}var nt=Object(A.withTheme)()(Object(z.connect)((e)=>({title:e.config.title,fullscreen:e.config.fullscreen,avatar:e.config.avatar}),(e)=>({hideWindow:()=>{e(y())},showFullscreen:()=>{e(M())},showWindowed:()=>{e(N())}}))(tt)),it=n(28),at=n.n(it),rt=n(29),st=n.n(rt),ot=n(30),lt=n.n(ot),dt=n(31),ct=n.n(dt);const ut=D.a.div`
  text-align: center;
  width: 42px;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`,mt=D.a.div`
  animation: dot-keyframes 1s infinite ease-in-out;
  background-color: ${ct.a[900]};
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
`;class pt extends E.PureComponent{render(){return Object(E.createElement)(ut,null,Object(E.createElement)(mt,null),Object(E.createElement)(mt,null),Object(E.createElement)(mt,null))}}const yt=D.a.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 16px 0;
  height: min-content;
  align-items: ${(e)=>'user'===e.entity?'flex-end':'flex-start'};
`,Mt=D.a.div`
  width: 100%;
  height: min-content;
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${(e)=>'user'===e.entity?'flex-end':'flex-start'};
`,Nt=D.a.div`
  && {
    background: ${Re.a[400]};
    border-top-right-radius: 10px;
    border-top-left-radius: 1px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 12px;
  }
`,Tt=D.a.div`
  && {
    background-color: ${(e)=>e.theme.palette.primary.main};
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
    border-top-left-radius: 10px;
    border-top-right-radius: 1px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 12px;
  }
`,gt=D()(Ge.a)`
  && {
    color: ${Re.a[500]};
    margin-top: 8px;
    padding-left: 12px;
    padding-right: 2px;
  }
`;class Lt extends E.PureComponent{render(){var e=this.props;const t=e.message,n=e.entity,i=e.isLoading,a=e.timestamp,r=e.currentTime,s=e.theme,o=Object(_.parse)(r,ge,new Date(r)),l=Object(_.parse)(a,ge,new Date(r)),d=Object(_.differenceInMinutes)(o,l),c=Object(_.differenceInSeconds)(o,l);let u=null;u=1<=d?`${d} min`:10<=c?`${c} sec`:'Now';const m='user'===n?Object(E.createElement)(Tt,{elevation:1,theme:s},Object(E.createElement)(Ge.a,{variant:'body1'},t)):Object(E.createElement)(Nt,{elevation:1},i?Object(E.createElement)(pt,null):Object(E.createElement)(Ge.a,{variant:'body1'},t));return Object(E.createElement)(yt,{entity:n},Object(E.createElement)(Mt,{entity:n},m),Object(E.createElement)(gt,{variant:'caption'},u))}}var It=Object(A.withTheme)()(Object(z.connect)((e)=>({currentTime:e.conversation.currentTime}))(Lt)),xt=n(32),ft=n.n(xt),ht=n(33),jt=n.n(ht),wt=n(34),bt=n.n(wt),Et=n(35),zt=n.n(Et);const Ct=D()(ft.a)`
  && {
    border-top-left-radius: 1px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: ${Re.a[400]};
    margin: 16px auto;
    white-space: pre-line;
  }
`,vt=D()(zt.a)`
  && {
    height: ${(e)=>e.image&&''!==e.image?'200px':'0px'};
    background-size: cover;
    background-position: center center;
  }
`;class St extends E.PureComponent{render(){var e=this.props.data;const t=e.title,n=e.subtitle,i=e.imageUrl,a=e.buttons;return Object(E.createElement)(Ct,null,Object(E.createElement)(vt,{image:encodeURI(i),title:''}),Object(E.createElement)(bt.a,null,Object(E.createElement)(Ge.a,{gutterBottom:!0,variant:'h6'},t),Object(E.createElement)(Ge.a,{variant:'body1'},n)),Object(E.createElement)(jt.a,null,a.map((e,t)=>{const n=`card-${t}${Object(_.format)(new Date,ge)}`;return Object(E.createElement)(V.a,{href:e.postback,target:'_blank',size:'small',color:'primary',key:n},e.text)})))}}var Ot=Object(z.connect)((e)=>({inputValue:e.userInput}))(St);const Dt=D.a.div`
  background: ${Re.a[100]};
  z-index: 4;
  grid-area: chatwindow;
  margin-bottom: 1px;
  margin-top: 8px;
  width: 100%;

  & ::-webkit-scrollbar-thumb {
    background-color: ${Re.a[600]};
    -webkit-border-radius: 8px;
    border-radius: 8px;
    border: 2px solid ${Re.a[100]};
  }
  & ::-webkit-scrollbar {
    background-color: ${Re.a[100]};
    width: 8px;
  }
`;class Pt extends E.PureComponent{constructor(e){super(e),Object.defineProperty(this,'onResize',{enumerable:!0,writable:!0,value:()=>{this.ListRef.current.scrollToRow(this.messages.length)}}),Object.defineProperty(this,'parseMessages',{enumerable:!0,writable:!0,value:()=>{const e=this.props.messages,t=[];return e.forEach((e,n)=>{const i={systemTime:e.systemTime,entity:e.entity,key:`msg-${n}-${e.systemTime}`};if(e.loading){const n=st()(e,i);t.push(n)}else if('bot'===e.entity)e.responses.forEach((e)=>{if('text'===e.type||'card'===e.type){const n=st()(e,i);t.push(n)}});else if('user'===e.entity){const n=st()(e,i);t.push(n)}}),t}}),Object.defineProperty(this,'createMessageElements',{enumerable:!0,writable:!0,value:()=>{const e=this.parseMessages(),t=[];e.forEach((e)=>{e.loading?t.push(x(e)):'user'===e.entity?t.push(I(e)):'bot'===e.entity&&'text'===e.type?t.push(f(e)):'bot'===e.entity&&'card'===e.type?t.push(h(e)):t.push(f({text:'Something went wrong.'}))}),t.sort((e,t)=>{const n=Object(_.parse)(e.props.timestamp,ge,new Date(e.props.timestamp)),i=Object(_.parse)(t.props.timestamp,ge,new Date(t.props.timestamp)),a=Object(_.differenceInMilliseconds)(n,i);return a}),this.messageElements=t}}),Object.defineProperty(this,'rowRenderer',{enumerable:!0,writable:!0,value:({index:e,key:t,parent:n,style:i})=>Object(E.createElement)(ot.CellMeasurer,{cache:this.cache,key:t,parent:n,rowIndex:e},Object(E.createElement)('div',{style:i},this.messageElements[e]))}),this.ListRef=b.a.createRef(),this.cache=new ot.CellMeasurerCache({defaultHeight:300,fixedWidth:!0}),this.messages=[],this.messageElements=[]}componentDidUpdate(){const e=this.parseMessages();at()(this.messages,e)||(this.messages=e,this.createMessageElements(),this.cache.clearAll(),this.ListRef.current&&(this.ListRef.current.recomputeRowHeights(),this.ListRef.current.scrollToRow(e.length),this.ListRef.current.forceUpdateGrid()))}render(){return Object(E.createElement)(Dt,{elevation:1,square:!0},Object(E.createElement)(ot.AutoSizer,{onResize:this.onResize},({height:e,width:t})=>Object(E.createElement)(ot.List,{messages:this.props.messages,style:{outline:'none',padding:'0 16px 0 16px'},ref:this.ListRef,height:e,width:t,rowCount:this.props.messages.length,deferredMeasurementCache:this.cache,rowHeight:this.cache.rowHeight,rowRenderer:this.rowRenderer,onScroll:this.onScroll,scrollToIndex:this.props.messages.length,scrollToAlignment:'end'})))}}var Yt=Object(z.connect)((e)=>({messages:e.conversation.messages,buttonBarVisible:e.buttonBar.visible,error:e.error}))(Pt),kt=n(36),Rt=n.n(kt),Ut=n(37),Gt=n.n(Ut);const At=D.a.div`
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
`,Wt=D()(Gt.a)`
  && {
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
`;class Ht extends E.PureComponent{constructor(){super(),this.handleKeyPress=this.handleKeyPress.bind(this)}handleKeyPress(t){13===t.charCode&&this.props.submitUserInput()}render(){var e=this.props;const t=e.saveUserInput,n=e.inputValue;return Object(E.createElement)(At,null,Object(E.createElement)(Wt,{fullWidth:!0,disableUnderline:!0,placeholder:'Send a message',onChange:t,value:n,onKeyPress:this.handleKeyPress}),Object(E.createElement)(Ve.a,{onClick:this.props.submitUserInput,"aria-label":'Send',color:'primary'},Object(E.createElement)(Rt.a,null)))}}var Qt=Object(z.connect)((e)=>({inputValue:e.userInput}),(t)=>({saveUserInput:(n)=>{t(j(n.target.value))},submitUserInput:()=>{t(w())}}))(Ht),Zt=n(38),Ft=n.n(Zt);const Bt=D.a.div`
  grid-area: buttonbar;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  padding: ${(e)=>e.visible?'4px 4px 16px 16px':'0 16px'};
  background: ${Re.a[300]};
  border-top: ${(e)=>e.visible?'1px solid rgba(0, 0, 0, 0.2)':'none'};
  overflow-y: auto;
`,Vt=D()(V.a)`
  && {
    margin-right: 12px;
    margin-top: 12px;
    display: ${(e)=>'true'===e.visible?'block':'none'};
  }
`;class Xt extends E.PureComponent{render(){var e=this.props;const t=e.visible,n=e.messages,i=e.sendQuickReply,a=Ft()(n,(e)=>{const t=fe()(e.responses,['type','suggestion']);return t}),r=[];if(a){const e=a.responses.filter((e)=>'suggestion'===e.type);for(const n of e)for(const e of n.suggestions)r.push({label:e,id:a.messageId,visible:t})}return Object(E.createElement)(Bt,{visible:t},r.map((e,t)=>Object(E.createElement)(Vt,{size:'small',variant:'outlined',color:'secondary',key:`${e.id}-btn${t}`,visible:e.visible.toString(),onClick:()=>i(e.label)},e.label)))}}var Jt=Object(z.connect)((e)=>({visible:e.buttonBar.visible,messages:e.conversation.messages}),(e)=>({sendQuickReply:(t)=>{e(m(t))}}))(Xt),_t=n(39),Kt=n.n(_t);const qt=D.a.div`
  grid-area: errorbar;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: ${(e)=>e.visible?'24px 16px':'0 16px'};
  background: ${Kt.a[300]};
  border-top: ${(e)=>e.visible?`1px solid ${Kt.a[500]}`:'none'};
  color: ${Kt.a[700]};
`;class $t extends E.PureComponent{render(){const e=this.props.error;return Object(E.createElement)(qt,{visible:''!==e},e)}}var en=Object(z.connect)((e)=>({error:e.error}))($t);const tn={giant:1170,desktop:992,tablet:768,phone:620},nn=Object.keys(tn).reduce((e,t)=>{const n=tn[t]/16;return e[t]=(...e)=>O.css`
    @media (max-width: ${n}em) {
      ${Object(O.css)(...e)};
    }
  `,e},{}),an=D()(De.a)`
  && {
    width: 400px;
    height: 600px;
    overflow: hidden;
    position: absolute;
    bottom: 48px;
    right: 48px;
    transition: width 120ms ease-in-out, height 150ms ease-in-out;
    pointer-events: none;
    ${(e)=>e.fullscreen&&O.css`
        width: calc(100% - 96px);
        height: calc(100% - 96px);
      `};
    ${(e)=>!e.visible&&O.css`
        width: 0;
        height: 0;
      `};

    ${nn.phone`
    width: ${(e)=>e.visible?'calc(100% - 96px)':'0'};
    height: ${(e)=>e.visible?'calc(100% - 96px)':'0'};
    max-width: none;
    max-height: none;
  `};
  }
`,rn=D.a.div`
  && {
    width: 100%;
    height: 100%;
    transform-origin: bottom right;
    pointer-events: auto;
    background: ${Re.a[100]};
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
`;class sn extends E.PureComponent{render(){var e=this.props;const t=e.windowVisible,n=e.fullscreen;return Object(E.createElement)(an,{elevation:4,fullscreen:n?1:0,visible:t?1:0},Object(E.createElement)(Ye.a,{in:t},Object(E.createElement)(rn,null,Object(E.createElement)(nt,null),Object(E.createElement)(Yt,null),Object(E.createElement)(Jt,null),Object(E.createElement)(en,null),Object(E.createElement)(Qt,null))))}}var on=Object(z.connect)((e)=>({windowVisible:e.config.windowVisible,fullscreen:e.config.fullscreen}))(sn),ln=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e};const dn={avatar:null,title:'Chat Window',windowVisible:!1,fullscreen:!1};var cn=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e};const un={client:null,clientName:null,messages:[],webhookPayload:null,lastUpdateTime:Object(_.format)(new Date,ge),currentTime:Object(_.format)(new Date,ge),headerTime:'Now',timer:null,conversationStarted:!1};var mn=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e};const pn={visible:!1,buttons:[]};const yn='';const Mn=Object(v.combineReducers)({config:function(e=dn,t){switch(t.type){case $:return ln({},e,{avatar:t.avatar});case q:return ln({},e,{title:t.title});case ue:return ln({},e,{windowVisible:!0});case me:return ln({},e,{windowVisible:!1});case pe:return ln({},e,{fullscreen:!0});case ye:return ln({},e,{fullscreen:!1});default:return e;}},conversation:function(e=un,t){switch(t.type){case ee:return cn({},e,{client:t.client,clientName:t.clientName});case se:return cn({},e,{headerTime:t.headerTime,currentTime:t.currentTime});case re:return cn({},e,{timer:t.timer});case ae:return cn({},e,{messages:[...e.messages,{loading:!0,entity:'bot',systemTime:Object(_.format)(new Date,ge)}]});case te:return cn({},e,{lastUpdateTime:Object(_.format)(new Date,ge),headerTime:'Now',messages:t.newConversationArray});case ie:return cn({},e,{lastUpdateTime:Object(_.format)(new Date,ge),headerTime:'Now',messages:[...e.messages,t.response].sort((e,t)=>{const n=Object(_.parse)(e.systemTime,ge,new Date(e.systemTime)),i=Object(_.parse)(t.systemTime,ge,new Date(t.systemTime)),a=Object(_.differenceInMilliseconds)(i,n);return a})});case Me:return cn({},e,{webhookPayload:t.webhookPayload});case Ne:return cn({},e,{conversationStarted:!0});case Te:return cn({},e,{conversationStarted:!1});default:return e;}},buttonBar:function(e=pn,t){switch(t.type){case oe:return mn({},e,{visible:!0});case le:return mn({},e,{visible:!1});default:return e;}},userInput:function(e='',t){switch(t.type){case ne:return t.value;default:return e;}},error:function(e=yn,t){switch(t.type){case de:return t.error;case ce:return yn;default:return e;}}});Y.a.load({google:{families:['Roboto:300,400,500','Product Sans:400']}});const Nn=D.a.div`
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
  line-height: normal;
  & > * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`;class Tn extends E.PureComponent{constructor(e){super(e),this.store=Object(v.createStore)(Mn,Object(v.applyMiddleware)(G.a)),this.currentValue=null,this.theme=i(this.props.primaryColor,this.props.secondaryColor)}componentDidMount(){this.store.dispatch(L(this.props,this.theme)),this.unsubscribe=this.store.subscribe(()=>this.handleChange(this.store))}componentWillUnmount(){this.unsubscribe()}select(e){return e.conversation.webhookPayload}handleChange(e){const t=this.currentValue;this.currentValue=this.select(e.getState()),t!==this.currentValue&&this.props.onPayload&&this.props.onPayload(this.currentValue)}render(){return Object(E.createElement)(z.Provider,{store:this.store},Object(E.createElement)(R.a,{theme:this.theme},Object(E.createElement)(Nn,null,Object(E.createElement)(on,null),Object(E.createElement)(Se,{variant:'fab'}))))}}t['default']=Tn},function(e){e.exports=require('webfontloader')},function(e){e.exports=require('@material-ui/core/styles/MuiThemeProvider')},function(e){e.exports=require('redux-thunk')},function(e){e.exports=require('@material-ui/core/colors')},function(e){e.exports=require('validator/lib/isHexColor')},function(e){e.exports=require('@material-ui/icons/Chat')},function(e){e.exports=require('lodash/get')},function(e){e.exports=require('isomorphic-fetch')},function(e){e.exports='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTQ0Ljc3IDE0NC43NyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ze2ZpbGw6IzhkYzVkNjt9LmNscy00e2NsaXAtcGF0aDp1cmwoI2NsaXAtcGF0aCk7fS5jbHMtNXtmaWxsOiMyZTU3NmQ7fS5jbHMtNntmaWxsOiNmMWM5YTU7fS5jbHMtN3tmaWxsOiNlNGI2OTI7fS5jbHMtOHtmaWxsOiNkZGFjOGM7b3BhY2l0eTowLjE7bWl4LWJsZW5kLW1vZGU6bXVsdGlwbHk7fS5jbHMtOXtmaWxsOiNmYTU4MmE7fTwvc3R5bGU+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTAuNTQgLTExNDYuMDQpIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02MzUuMzIsMTIxOC40MmE3Mi4zOSw3Mi4zOSwwLDEsMC03Mi4zOSw3Mi4zOUE3Mi4zOCw3Mi4zOCwwLDAsMCw2MzUuMzIsMTIxOC40MloiLz48L2NsaXBQYXRoPjwvZGVmcz48dGl0bGU+VW50aXRsZWQtMTwvdGl0bGU+PGcgY2xhc3M9ImNscy0yIj48ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik02MzUuMzIsMTIxOC40MmE3Mi4zOSw3Mi4zOSwwLDEsMC03Mi4zOSw3Mi4zOUE3Mi4zOCw3Mi4zOCwwLDAsMCw2MzUuMzIsMTIxOC40MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTAuNTQgLTExNDYuMDQpIi8+PGcgY2xhc3M9ImNscy00Ij48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik01MzUuNzgsMTIyMS4wOWMwLDExLjgxLTYuNDgsMTIuMTItNiwxOS45My41MSw4LjY2LDcuMjgsOC42OCw3LjI4LDE0LjY0cy02LjIyLDEyLjYyLS43MSwxOWgyNi42MXYtNzIuMjFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTU5MC4wOCwxMjIwLjdjMCwxMS44MSw2LjQ4LDEyLjExLDYsMTkuOTMtLjUxLDguNjYtNy4yOCw4LjY4LTcuMjgsMTQuNjNzNi4yMiwxMi42My43MSwxOUg1NjIuOTJ2LTcyLjIxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5MC41NCAtMTE0Ni4wNCkiLz48ZWxsaXBzZSBjbGFzcz0iY2xzLTUiIGN4PSI3Mi4zOSIgY3k9IjYyLjcyIiByeD0iMjkuNjMiIHJ5PSIyOS44MyIvPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTU5Ny42LDEyNjNjLTQuNjctOC44NC0zNC42Ny0xNC4zOC0zNC42Ny0xNC4zOHMtMzAsNS41NC0zNC42NywxNC4zOGMtMy40NCwxMi4yNS02LjMzLDI3LjgzLTYuMzMsMjcuODNoODJTNjAyLDEyNzQuMTEsNTk3LjYsMTI2M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTAuNTQgLTExNDYuMDQpIi8+PHBhdGggY2xhc3M9ImNscy03IiBkPSJNNTYyLjkzLDEyNDguNnMzMCw1LjU0LDM0LjY3LDE0LjM4YzQuMzgsMTEuMTMsNi4zMywyNy44Myw2LjMzLDI3LjgzaC00MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTAuNTQgLTExNDYuMDQpIi8+PHJlY3QgY2xhc3M9ImNscy02IiB4PSI2NC4yMiIgeT0iODQuNjEiIHdpZHRoPSIxNi4zMyIgaGVpZ2h0PSIyNy4zNCIvPjxyZWN0IGNsYXNzPSJjbHMtNyIgeD0iNzIuMzkiIHk9Ijg0LjYxIiB3aWR0aD0iOC4xNyIgaGVpZ2h0PSIyNy4zNCIvPjxwYXRoIGNsYXNzPSJjbHMtOCIgZD0iTTU1NC43NiwxMjQzLjMxYzEuNDcsNC4yMiw3LjQsNi42MywxMS43NSw2LjYzYTE0LjgsMTQuOCwwLDAsMCw0LjU5LS43NHYtMTguNTZINTU0Ljc2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5MC41NCAtMTE0Ni4wNCkiLz48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik01ODMuOTMsMTIxMy4zOWMwLTE3LjA3LTkuNC0yNi43OC0yMS0yNi43OHMtMjEsOS43MS0yMSwyNi43OCw5LjQsMzAuOTIsMjEsMzAuOTJTNTgzLjkzLDEyMzAuNDcsNTgzLjkzLDEyMTMuMzlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjxwYXRoIGNsYXNzPSJjbHMtNyIgZD0iTTU4MC43MywxMjI1LjIzYy0zLjgtLjQyLTYuMzctNC43OC01LjczLTkuNzNzNC4yNC04LjYzLDgtOC4yMSw2LjM3LDQuNzgsNS43Myw5LjczUzU4NC41NCwxMjI1LjY1LDU4MC43MywxMjI1LjIzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5MC41NCAtMTE0Ni4wNCkiLz48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik01MzcuMjMsMTIxN2MtLjY0LTUsMS45Mi05LjMxLDUuNzMtOS43M3M3LjQxLDMuMjYsOCw4LjIxLTEuOTMsOS4zMS01LjczLDkuNzNTNTM3Ljg3LDEyMjIsNTM3LjIzLDEyMTdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjxwYXRoIGNsYXNzPSJjbHMtNyIgZD0iTTU4My45MywxMjEzLjM5YzAtMTcuMDctOS40LTI2Ljc4LTIxLTI2Ljc4djU3LjdDNTc0LjUzLDEyNDQuMzEsNTgzLjkzLDEyMzAuNDcsNTgzLjkzLDEyMTMuMzlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTU4NS42NiwxMjExLjQ3YzAtLjA2LDAtLjEsMC0uMTUsMC0xMy4yNS05LTI3LjIzLTIxLjUyLTI3LjIzcy0yMy45MywxNC0yMy45MywyNy4yM3YuMTVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjxwYXRoIGNsYXNzPSJjbHMtOSIgZD0iTTYwMy45MywxMjkwLjgxcy0xLjk1LTE2LjctNi4zMy0yNy44M2MtMi41Ni00Ljg1LTEyLjc0LTguNy0yMS40MS0xMS4xOWwtMTMuMjksMTAuNDNMNTQ5LjA3LDEyNTJjLTguNTMsMi41LTE4LjMxLDYuMjgtMjAuODEsMTEtMy40NCwxMi4yNS02LjMzLDI3LjgzLTYuMzMsMjcuODNoODJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjwvZz48L2c+PC9nPjwvc3ZnPg=='},function(e){e.exports=require('@material-ui/core/Paper')},function(e){e.exports=require('@material-ui/core/Zoom')},function(e){e.exports=require('@material-ui/icons/Fullscreen')},function(e){e.exports=require('@material-ui/icons/FullscreenExit')},function(e){e.exports=require('@material-ui/core/Avatar')},function(e){e.exports=require('@material-ui/icons/Close')},function(e){e.exports=require('lodash/isEqual')},function(e){e.exports=require('lodash/merge')},function(e){e.exports=require('react-virtualized')},function(e){e.exports=require('@material-ui/core/colors/green')},function(e){e.exports=require('@material-ui/core/Card')},function(e){e.exports=require('@material-ui/core/CardActions')},function(e){e.exports=require('@material-ui/core/CardContent')},function(e){e.exports=require('@material-ui/core/CardMedia')},function(e){e.exports=require('@material-ui/icons/Send')},function(e){e.exports=require('@material-ui/core/Input')},function(e){e.exports=require('lodash/findLast')},function(e){e.exports=require('@material-ui/core/colors/red')}])});
//# sourceMappingURL=chatframe.js.map