(function(e,t){'object'==typeof exports&&'object'==typeof module?module.exports=t():'function'==typeof define&&define.amd?define('chatframe',[],t):'object'==typeof exports?exports.chatframe=t():e.chatframe=t()})('undefined'==typeof self?this:self,function(){return function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(a,'a',a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='./',t(t.s=12)}([function(e){e.exports=require('react')},function(e){e.exports=require('styled-components')},function(e){e.exports=require('react-redux')},function(e){e.exports=require('date-fns')},function(e){e.exports=require('@material-ui/core/colors/grey')},function(e){e.exports=require('@material-ui/core/styles')},function(e){e.exports=require('@material-ui/core/Typography')},function(e){e.exports=require('@material-ui/core/Button')},function(e){e.exports=require('redux')},function(e){e.exports=require('@material-ui/core/Zoom')},function(e){e.exports=require('lodash/find')},function(e){e.exports=require('@material-ui/core/IconButton')},function(e,t,a){e.exports=a(13)},function(e,t,a){'use strict';function n(e='lightBlue',t='pink'){const a={palette:{error:V.red,contrastThreshold:3,tonalOffset:0.2},typography:{useNextVariants:!0},overrides:{MuiFab:{root:{position:'absolute',bottom:48,right:48}}}};if(_()(e))a.palette.primary={main:e};else if(V[e])a.palette.primary=V[e];else throw new Error(`${e} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);if(_()(t))a.palette.secondary={main:t};else if(t&&V[t])a.palette.secondary=V[t];else throw new Error(`${t} is not a valid color. 
      Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`);return Object(Z.createMuiTheme)(a)}function i(e){return(t)=>{const a=new ve(e);t({type:se,client:a,clientName:'dialogflow'})}}function r(e){return(t,a)=>{const n=a().conversation.messages,i=Se()(e.responses,['type','suggestion']);if(i?t({type:pe}):t({type:ye}),0===n.length)t({type:oe,newConversationArray:[e]});else{const a=n.map((t)=>t.loading?e:t).sort((e,t)=>{const a=Object(ae.parse)(e.systemTime,we,new Date(e.systemTime)),n=Object(ae.parse)(t.systemTime,we,new Date(t.systemTime)),i=Object(ae.differenceInMilliseconds)(a,n);return i});t({type:oe,newConversationArray:a})}}}function s(e){return(t)=>{function a(e){return'text'===e?'text':'card'===e?'card':'quickReplies'===e?'suggestion':'image'===e?'image':'payload'===e?'payload':'text'}const n=Ce()(e,'queryResult.fulfillmentMessages',[]),i=n.map((e)=>{const n=a(e.message),i=Ce()(e,'quickReplies.quickReplies',[]),r=Ce()(e,'text.text',null),s={title:Ce()(e,'card.title',''),subtitle:Ce()(e,'card.subtitle',''),imageUrl:Ce()(e,'card.imageUri',''),buttons:Ce()(e,'card.buttons',[])},o={imageUri:Ce()(e,'image.imageUri',''),accessibilityText:Ce()(e,'image.accessibilityText','')},l={};if('payload'===n){const a=Ce()(e,'payload.fields',{});for(const e of Object.entries(a)){var c=Pe(e,2);const t=c[0],a=c[1];if('stringValue'===a.kind)try{l[t]=JSON.parse(a.stringValue)}catch(e){l[t]=a.stringValue}}t({type:Ie,payload:l})}return'text'===n?{type:n,text:r}:'image'===n?{type:n,image:o}:'suggestion'===n?{type:n,suggestions:i}:'card'===n?{type:n,card:s}:'payload'===n?{type:n,payload:l}:{type:n,text:r}}),s=Object(ae.format)(new Date,we),o={entity:'bot',loading:!1,messageId:e.responseId,language:e.queryResult.languageCode,systemTime:s,responses:i};t(r(o))}}function o(e){return(t,a)=>{const n=a().conversation.client;t({type:de}),n.textRequest(e).then((e)=>{e?(t(s(e)),t({type:Ne})):t({type:Me,error:'No response received from chat provider. Please try again.'})}).catch((e)=>{throw t({type:Me,error:'Unable to connect to the chat provider. Please try again.'}),new Error(e)})}}function l(e){return(t,a)=>{const n=a().conversation.client;t({type:de}),n.eventRequest(e).then((e)=>{e?(t(s(e)),t({type:Ne})):(t({type:Me,error:'No response received from chat provider. Please try again.'}),t({type:be}))}).catch((e)=>{throw t({type:Me,error:'Unable to connect to the chat provider. Please try again.'}),new Error(e)})}}function c(e,t){return(a)=>{if(!e)throw new Error('No conversation provider selected.');if('dialogflow'===e.toLowerCase())a(i(t));else throw a({type:Me,error:`Unable to connect to ${e}`}),new Error(`${e} is not a recognized conversation provider.`)}}function d(e){return(t,a)=>{const n=a().conversation.clientName;if('dialogflow'===n.toLowerCase())t(o(e));else throw t({type:Me,error:`Unable to connect to ${n}`}),new Error(`${n} is not a recognized conversation provider.`)}}function m(e){return(t,a)=>{const n=a().conversation.messages.length,i=Object(ae.format)(new Date,we),r={entity:'user',messageId:`usermessage-${n}`,systemTime:i,text:e};t({type:ce,response:r}),t({type:ye}),t(d(e))}}function u(e){return(t)=>{t(m(e))}}function p(){return(e,t)=>{const a=t().conversation.conversationStarted;e({type:fe}),a||(e(l('Welcome')),e({type:Le}))}}function y(){return{type:ge}}function M(){return{type:Te}}function N(){return{type:xe}}function f(){return(e,t)=>{const a=t().conversation.lastUpdateTime,n=new Date,i=Object(ae.parse)(a,we,new Date(a)),r=Object(ae.differenceInMinutes)(n,i),s=Object(ae.differenceInSeconds)(n,i);let o='Now';1<=r?o=`${r} min ago`:9<=s&&(o=`${s} sec ago`);const l=Object(ae.format)(n,we);e({type:ue,headerTime:o,currentTime:l})}}function g(){return(e,t)=>{const a=t().conversation.timer;a&&clearInterval(a);const n=setInterval(()=>e(f()),10000);e({type:me,newTimer:n}),e(f())}}function T(e){return(t)=>{const a=e.title,n=e.avatar,i=e.client,r=e.clientOptions,s=e.initialActive,o=e.fullscreen;let d=n;d||(d=Oe.a),t({type:ie,title:a}),t({type:re,avatar:d}),t(c(i,r)),t(g()),!0===s?(t({type:Le}),t(l('Welcome')),t(p())):t(y()),!0===o?t(M()):t(N())}}function x(e){return Object(w.createElement)(Wt,{message:e.text,entity:e.entity,key:e.messageId,timestamp:e.systemTime,isLoading:!1})}function I(e){return Object(w.createElement)(Wt,{key:'loading',entity:'bot',timestamp:e.systemTime,isLoading:e.loading})}function L(e){return Object(w.createElement)(Wt,{message:e.text,entity:e.entity,key:e.messageId,isLoading:!1,timestamp:e.systemTime})}function b(e){return Object(w.createElement)($t,{data:e.card,timestamp:e.systemTime,key:e.messageId})}function h(e){return{type:le,value:e}}function E(){return(e,t)=>{var a=t();const n=a.userInput;n&&''!==n&&(e(m(n)),e(h('')))}}Object.defineProperty(t,'__esModule',{value:!0});var w=a(0),j=a.n(w),C=a(2),z=a.n(C),S=a(8),v=a.n(S),P=a(1),D=a.n(P),O=a(14),Y=a.n(O),R=a(15),k=a.n(R),U=a(16),A=a.n(U),G=a(17),W=a.n(G),H=a(4),Q=a.n(H),Z=a(5),B=a.n(Z),V=a(18),F=a.n(V),X=a(19),_=a.n(X),J=a(20),K=a.n(J),q=a(21),$=a.n(q),ee=a(9),te=a.n(ee),ae=a(3),ne=a.n(ae);const ie='SET_TITLE',re='SET_AVATAR',se='SAVE_CLIENT',oe='SAVE_RESPONSE',le='SAVE_USER_INPUT',ce='SAVE_USER_RESPONSE',de='INITIATE_LOADING',me='TIMER_START',ue='UPDATE_CURRENT_TIME',pe='SHOW_BUTTON_BAR',ye='HIDE_BUTTON_BAR',Me='DISPLAY_ERROR',Ne='CLEAR_ERROR',fe='SHOW_WINDOW',ge='HIDE_WINDOW',Te='FULLSCREEN',xe='WINDOWED',Ie='RECEIVE_WEBHOOK_DATA',Le='SET_CONVERSATION_STARTED',be='SET_CONVERSATION_ENDED',he='SHOW_PRIVACY_POLICY',Ee='HIDE_PRIVACY_POLICY',we='yyyy-MM-dd\'T\'hh:mm:ss.SSS';var je=a(22),Ce=a.n(je),ze=a(10),Se=a.n(ze);class ve{constructor(e){if(!e||!e.textUrl)throw new Error('Fulfillment URL is required to generate a conversation client');this.textUrl=e.textUrl,this.eventUrl=e.eventUrl}encodeQueryData(e){const t=[];for(const a in e)t.push(`${encodeURIComponent(a)}=${encodeURIComponent(e[a])}`);return t.join('&')}textRequest(e){if(!e)throw new Error('Query should not be empty');const t=this.encodeQueryData({query:e}),a=`${this.textUrl}?${t}`;return fetch(a).then((e)=>e.json()).catch((e)=>{throw new Error(e)})}eventRequest(e){if(!e)throw new Error('Query should not be empty');const t=this.encodeQueryData({query:e}),a=`${this.eventUrl}?${t}`;return fetch(a).then((e)=>e.json()).catch((e)=>{throw new Error(e)})}}var Pe=function(){function e(e,t){var a=[],n=!0,i=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(a.push(s.value),!(t&&a.length===t));n=!0);}catch(e){i=!0,r=e}finally{try{!n&&o['return']&&o['return']()}finally{if(i)throw r}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),De=a(23),Oe=a.n(De);const Ye=D()(K.a)`
  && {
    display: ${(e)=>e.active?'block':'none'};
    pointer-events: auto;
    padding-top: 8px;
  }
`;class Re extends w.PureComponent{render(){var e=this.props;const t=e.windowVisible,a=e.showWindow;return Object(w.createElement)(te.a,{in:!t,unmountOnExit:!0},Object(w.createElement)(Ye,{color:'primary',onClick:a,active:t?0:1},Object(w.createElement)($.a,null)))}}var ke=Object(C.connect)((e)=>({windowVisible:e.config.windowVisible}),(e)=>({showWindow:()=>{e(p())}}))(Re),Ue=a(24),Ae=a.n(Ue),Ge=a(6),We=a.n(Ge),He=a(25),Qe=a.n(He),Ze=a(26),Be=a.n(Ze),Ve=a(27),Fe=a.n(Ve),Xe=a(28),_e=a.n(Xe),Je=a(11),Ke=a.n(Je),qe=a(29),$e=a.n(qe),et=a(30),tt=a.n(et);const at=D()(_e.a)`
  && {
    flex: 0 0 32px;
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
`,nt=D.a.div`
  position: absolute;
  bottom: -1px;
  left: 27px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid ${Q.a[100]};
`,it=D.a.div`
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
`,rt=D()(We.a)`
  && {
    font-family: 'Product Sans';
    font-weight: 400;
    height: 32px;
    font-size: 18px;
    line-height: 32px;
    flex: 1;
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
  }
`,st=D()(Ke.a)`
  && {
    padding: 6px;
    flex: 0;
    cursor: pointer;
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`;class ot extends w.PureComponent{render(){var e=this.props;const t=e.title,a=e.theme,n=e.hideWindow,i=e.showWindowed,r=e.showFullscreen,s=e.fullscreen,o=e.avatar,l=e.showPrivacyPolicy;return Object(w.createElement)(it,{theme:a},Object(w.createElement)(nt,null),Object(w.createElement)(at,{alt:t,src:o}),Object(w.createElement)(rt,{theme:a,variant:'h6'},t),Object(w.createElement)(tt.a,{title:'Privacy Policy',placement:'bottom'},Object(w.createElement)(st,{theme:a,onClick:l,"aria-label":'Windowed'},Object(w.createElement)(Fe.a,{fontSize:'small'}))),s?Object(w.createElement)(st,{theme:a,onClick:i,"aria-label":'Windowed'},Object(w.createElement)(Be.a,{fontSize:'small'})):Object(w.createElement)(st,{theme:a,onClick:r,"aria-label":'Fullscreen'},Object(w.createElement)(Qe.a,{fontSize:'small'})),Object(w.createElement)(st,{theme:a,onClick:n,"aria-label":'Close'},Object(w.createElement)($e.a,{fontSize:'small'})))}}var lt=Object(Z.withTheme)()(Object(C.connect)((e)=>({title:e.config.title,fullscreen:e.config.fullscreen,avatar:e.config.avatar}),{hideWindow:y,showFullscreen:M,showWindowed:N,showPrivacyPolicy:function(){return{type:he}}})(ot)),ct=a(31),dt=a.n(ct),mt=a(32),ut=a.n(mt),pt=a(33),yt=a.n(pt),Mt=a(34),Nt=a.n(Mt),ft=a(35),gt=a.n(ft),Tt=a(7),xt=a.n(Tt);const It=D()(ut.a)`
  && {
    position: absolute;
  }
`;class Lt extends w.PureComponent{render(){var e=this.props;const t=e.hidePrivacyPolicy,a=e.privacyPolicyVisible,n=e.parentRef;return Object(w.createElement)(It,{open:a,onClose:t,"aria-labelledby":'privacy-policy',container:n,scroll:'paper'},Object(w.createElement)(dt.a,null,'Privacy Statement'),Object(w.createElement)(Nt.a,null,Object(w.createElement)(gt.a,null,'Please do not enter any personally identifiable information such as SSN, Date of Birth, Case Number or last name. Please do not enter any personally identifiable information such as SSN, Date of Birth, Case Number or last name. Please do not enter any personally identifiable information such as SSN, Date of Birth, Case Number or last name. Please do not enter any personally identifiable information such as SSN, Date of Birth, Case Number or last name. Please do not enter any personally identifiable information such as SSN, Date of Birth, Case Number or last name. Please do not enter any personally identifiable information such as SSN, Date of Birth, Case Number or last name. Please do not enter any personally identifiable information such as SSN, Date of Birth, Case Number or last name. Please do not enter any personally identifiable information such as SSN, Date of Birth, Case Number or last name. Please do not enter any personally identifiable information such as SSN, Date of Birth, Case Number or last name.')),Object(w.createElement)(yt.a,null,Object(w.createElement)(xt.a,{onClick:t,color:'primary'},'Close')))}}var bt=Object(C.connect)((e)=>({privacyPolicyVisible:e.config.privacyPolicyVisible}),{hidePrivacyPolicy:function(){return{type:Ee}}})(Lt),ht=a(36),Et=a.n(ht),wt=a(37),jt=a.n(wt),Ct=a(38),zt=a.n(Ct),St=a(39),vt=a.n(St);const Pt=D.a.div`
  text-align: center;
  width: 42px;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`,Dt=D.a.div`
  animation: dot-keyframes 1s infinite ease-in-out;
  background-color: ${vt.a[900]};
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
`;class Ot extends w.PureComponent{render(){return Object(w.createElement)(Pt,null,Object(w.createElement)(Dt,null),Object(w.createElement)(Dt,null),Object(w.createElement)(Dt,null))}}const Yt=D.a.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 16px 0;
  height: min-content;
  align-items: ${(e)=>'user'===e.entity?'flex-end':'flex-start'};
`,Rt=D.a.div`
  width: 100%;
  height: min-content;
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${(e)=>'user'===e.entity?'flex-end':'flex-start'};
`,kt=D.a.div`
  && {
    background: ${Q.a[400]};
    border-top-right-radius: 10px;
    border-top-left-radius: 1px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 12px;
  }
`,Ut=D.a.div`
  && {
    background-color: ${(e)=>e.theme.palette.primary.main};
    color: ${(e)=>e.theme.palette.getContrastText(e.theme.palette.primary.dark)};
    border-top-left-radius: 10px;
    border-top-right-radius: 1px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 12px;
  }
`,At=D()(We.a)`
  && {
    color: ${Q.a[500]};
    margin-top: 8px;
    padding-left: 12px;
    padding-right: 2px;
  }
`;class Gt extends w.PureComponent{render(){var e=this.props;const t=e.message,a=e.entity,n=e.isLoading,i=e.timestamp,r=e.currentTime,s=e.theme,o=Object(ae.parse)(r,we,new Date(r)),l=Object(ae.parse)(i,we,new Date(r)),c=Object(ae.differenceInMinutes)(o,l),d=Object(ae.differenceInSeconds)(o,l);let m=null;m=1<=c?`${c} min`:10<=d?`${d} sec`:'Now';const u='user'===a?Object(w.createElement)(Ut,{elevation:1,theme:s},Object(w.createElement)(We.a,{variant:'body1'},t)):Object(w.createElement)(kt,{elevation:1},n?Object(w.createElement)(Ot,null):Object(w.createElement)(We.a,{variant:'body1'},t));return Object(w.createElement)(Yt,{entity:a},Object(w.createElement)(Rt,{entity:a},u),Object(w.createElement)(At,{variant:'caption'},m))}}var Wt=Object(Z.withTheme)()(Object(C.connect)((e)=>({currentTime:e.conversation.currentTime}))(Gt)),Ht=a(40),Qt=a.n(Ht),Zt=a(41),Bt=a.n(Zt),Vt=a(42),Ft=a.n(Vt),Xt=a(43),_t=a.n(Xt);const Jt=D()(Qt.a)`
  && {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #fff;
    margin: 16px auto;
    white-space: pre-line;
  }
`,Kt=D()(_t.a)`
  && {
    height: ${(e)=>e.image&&''!==e.image?'200px':'0px'};
    background-size: cover;
    background-position: center center;
  }
`;class qt extends w.PureComponent{render(){var e=this.props.data;const t=e.title,a=e.subtitle,n=e.imageUrl,i=e.buttons;return Object(w.createElement)(Jt,null,Object(w.createElement)(Kt,{image:encodeURI(n),title:''}),Object(w.createElement)(Ft.a,null,Object(w.createElement)(We.a,{gutterBottom:!0,variant:'h6'},t),Object(w.createElement)(We.a,{variant:'body1'},a)),Object(w.createElement)(Bt.a,null,i.map((e,t)=>{const a=`card-${t}${Object(ae.format)(new Date,we)}`;return Object(w.createElement)(xt.a,{href:e.postback,target:'_blank',size:'small',color:'primary',key:a},e.text)})))}}var $t=Object(C.connect)((e)=>({inputValue:e.userInput}))(qt);const ea=D.a.div`
  background: ${Q.a[100]};
  z-index: 4;
  grid-area: chatwindow;
  margin-bottom: 1px;
  margin-top: 8px;
  width: 100%;
`;class ta extends w.PureComponent{constructor(e){super(e),Object.defineProperty(this,'onResize',{enumerable:!0,writable:!0,value:()=>{this.ListRef.current.scrollToRow(this.messages.length)}}),Object.defineProperty(this,'parseMessages',{enumerable:!0,writable:!0,value:()=>{const e=this.props.messages,t=[];return e.forEach((e,a)=>{const n={systemTime:e.systemTime,entity:e.entity,key:`msg-${a}-${e.systemTime}`};if(e.loading){const a=jt()(e,n);t.push(a)}else if('bot'===e.entity)e.responses.forEach((e)=>{if('text'===e.type||'card'===e.type){const a=jt()(e,n);t.push(a)}});else if('user'===e.entity){const a=jt()(e,n);t.push(a)}}),t}}),Object.defineProperty(this,'createMessageElements',{enumerable:!0,writable:!0,value:()=>{const e=this.parseMessages(),t=[];e.forEach((e)=>{e.loading?t.push(I(e)):'user'===e.entity?t.push(x(e)):'bot'===e.entity&&'text'===e.type?t.push(L(e)):'bot'===e.entity&&'card'===e.type?t.push(b(e)):t.push(L({text:'Something went wrong.'}))}),t.sort((e,t)=>{const a=Object(ae.parse)(e.props.timestamp,we,new Date(e.props.timestamp)),n=Object(ae.parse)(t.props.timestamp,we,new Date(t.props.timestamp)),i=Object(ae.differenceInMilliseconds)(a,n);return i}),this.messageElements=t,this.setState({numMessages:t.length})}}),Object.defineProperty(this,'rowRenderer',{enumerable:!0,writable:!0,value:({index:e,key:t,parent:a,style:n})=>Object(w.createElement)(Ct.CellMeasurer,{cache:this.cache,key:t,parent:a,rowIndex:e},Object(w.createElement)('div',{style:n},this.messageElements[e]))}),this.ListRef=j.a.createRef(),this.cache=new Ct.CellMeasurerCache({defaultHeight:300,fixedWidth:!0}),this.messages=[],this.messageElements=[],this.state={numMessages:0}}componentDidUpdate(){const e=this.parseMessages();Et()(this.messages,e)||(this.messages=e,this.createMessageElements(),this.cache.clearAll(),this.ListRef.current&&(this.ListRef.current.recomputeRowHeights(),this.ListRef.current.scrollToRow(e.length),this.ListRef.current.forceUpdateGrid()))}render(){const e=this.props.messages,t=this.state.numMessages;return Object(w.createElement)(ea,{elevation:1,square:!0},Object(w.createElement)(Ct.AutoSizer,{onResize:this.onResize},({height:a,width:n})=>Object(w.createElement)(Ct.List,{messages:e,style:{outline:'none',padding:'0 16px 0 16px'},ref:this.ListRef,height:a,width:n,rowCount:t,deferredMeasurementCache:this.cache,rowHeight:this.cache.rowHeight,rowRenderer:this.rowRenderer,onScroll:this.onScroll,scrollToIndex:t,scrollToAlignment:'end'})))}}var aa=Object(C.connect)((e)=>({messages:e.conversation.messages,buttonBarVisible:e.buttonBar.visible,error:e.error}))(ta),na=a(44),ia=a.n(na),ra=a(45),sa=a.n(ra);const oa=D.a.div`
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
`,la=D()(sa.a)`
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
`;class ca extends w.PureComponent{constructor(){super(),this.handleKeyPress=this.handleKeyPress.bind(this)}handleKeyPress(t){13===t.charCode&&this.props.submitUserInput()}render(){var e=this.props;const t=e.saveUserInput,a=e.inputValue;return Object(w.createElement)(oa,null,Object(w.createElement)(la,{fullWidth:!0,disableUnderline:!0,placeholder:'Send a message',onChange:t,value:a,onKeyPress:this.handleKeyPress}),Object(w.createElement)(Ke.a,{onClick:this.props.submitUserInput,"aria-label":'Send',color:'primary'},Object(w.createElement)(ia.a,null)))}}var da=Object(C.connect)((e)=>({inputValue:e.userInput}),(t)=>({saveUserInput:(a)=>{t(h(a.target.value))},submitUserInput:()=>{t(E())}}))(ca),ma=a(46),ua=a.n(ma);const pa=D.a.div`
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
`,ya=D()(xt.a)`
  && {
    margin-right: 12px;
    margin-top: 12px;
    display: ${(e)=>'true'===e.visible?'block':'none'};
  }
`;class Ma extends w.PureComponent{render(){var e=this.props;const t=e.visible,a=e.messages,n=e.sendQuickReply,i=ua()(a,(e)=>{const t=Se()(e.responses,['type','suggestion']);return t}),r=[];if(i){const e=i.responses.filter((e)=>'suggestion'===e.type);for(const a of e)for(const e of a.suggestions)r.push({label:e,id:i.messageId,visible:t})}return Object(w.createElement)(pa,{visible:t},r.map((e,t)=>Object(w.createElement)(ya,{size:'small',variant:'outlined',color:'secondary',key:`${e.id}-btn${t}`,visible:e.visible.toString(),onClick:()=>n(e.label)},e.label)))}}var Na=Object(C.connect)((e)=>({visible:e.buttonBar.visible,messages:e.conversation.messages}),(e)=>({sendQuickReply:(t)=>{e(u(t))}}))(Ma),fa=a(47),ga=a.n(fa);const Ta=D.a.div`
  grid-area: errorbar;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: ${(e)=>e.visible?'24px 16px':'0 16px'};
  background: ${ga.a[300]};
  border-top: ${(e)=>e.visible?`1px solid ${ga.a[500]}`:'none'};
  color: ${ga.a[700]};
`;class xa extends w.PureComponent{render(){const e=this.props.error;return Object(w.createElement)(Ta,{visible:''!==e},e)}}var Ia=Object(C.connect)((e)=>({error:e.error}))(xa);const La={giant:1170,desktop:992,tablet:768,phone:620},ba=Object.keys(La).reduce((e,t)=>{const a=La[t]/16;return e[t]=(...e)=>P.css`
    @media (max-width: ${a}em) {
      ${Object(P.css)(...e)};
    }
  `,e},{}),ha=D()(Ae.a)`
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

    ${ba.phone`
    width: ${(e)=>e.visible?'calc(100% - 96px)':'0'};
    height: ${(e)=>e.visible?'calc(100% - 96px)':'0'};
    max-width: none;
    max-height: none;
  `};
  }
`,Ea=D.a.div`
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
`;class wa extends w.PureComponent{constructor(e){super(e),this.containerRef=j.a.createRef()}render(){var e=this.props;const t=e.windowVisible,a=e.fullscreen;return Object(w.createElement)(ha,{elevation:4,fullscreen:a?1:0,visible:t?1:0},Object(w.createElement)(te.a,{in:t},Object(w.createElement)(Ea,{ref:this.containerRef},Object(w.createElement)(lt,null),Object(w.createElement)(bt,{parentRef:this.containerRef.current}),Object(w.createElement)(aa,null),Object(w.createElement)(Na,null),Object(w.createElement)(Ia,null),Object(w.createElement)(da,null))))}}var ja=Object(C.connect)((e)=>({windowVisible:e.config.windowVisible,fullscreen:e.config.fullscreen}))(wa),Ca=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const za={avatar:null,title:'Chat Window',windowVisible:!1,fullscreen:!1,privacyPolicyVisible:!1};var Sa=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const va={client:null,clientName:null,messages:[],webhookPayload:null,lastUpdateTime:Object(ae.format)(new Date,we),currentTime:Object(ae.format)(new Date,we),headerTime:'Now',timer:null,conversationStarted:!1};var Pa=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};const Da={visible:!1,buttons:[]};const Oa='';const Ya=Object(S.combineReducers)({config:function(e=za,t){switch(t.type){case Ee:return Ca({},e,{privacyPolicyVisible:!1});case he:return Ca({},e,{privacyPolicyVisible:!0});case re:return Ca({},e,{avatar:t.avatar});case ie:return Ca({},e,{title:t.title});case fe:return Ca({},e,{windowVisible:!0});case ge:return Ca({},e,{windowVisible:!1});case Te:return Ca({},e,{fullscreen:!0});case xe:return Ca({},e,{fullscreen:!1});default:return e;}},conversation:function(e=va,t){switch(t.type){case se:return Sa({},e,{client:t.client,clientName:t.clientName});case ue:return Sa({},e,{headerTime:t.headerTime,currentTime:t.currentTime});case me:return Sa({},e,{timer:t.timer});case de:return Sa({},e,{messages:[...e.messages,{loading:!0,entity:'bot',systemTime:Object(ae.format)(new Date,we)}]});case oe:return Sa({},e,{lastUpdateTime:Object(ae.format)(new Date,we),headerTime:'Now',messages:t.newConversationArray});case ce:return Sa({},e,{lastUpdateTime:Object(ae.format)(new Date,we),headerTime:'Now',messages:[...e.messages,t.response].sort((e,t)=>{const a=Object(ae.parse)(e.systemTime,we,new Date(e.systemTime)),n=Object(ae.parse)(t.systemTime,we,new Date(t.systemTime)),i=Object(ae.differenceInMilliseconds)(n,a);return i})});case Ie:return Sa({},e,{webhookPayload:t.webhookPayload});case Le:return Sa({},e,{conversationStarted:!0});case be:return Sa({},e,{conversationStarted:!1});default:return e;}},buttonBar:function(e=Da,t){switch(t.type){case pe:return Pa({},e,{visible:!0});case ye:return Pa({},e,{visible:!1});default:return e;}},userInput:function(e='',t){switch(t.type){case le:return t.value;default:return e;}},error:function(e=Oa,t){switch(t.type){case Me:return t.error;case Ne:return Oa;default:return e;}}});Y.a.load({google:{families:['Roboto:300,400,500','Product Sans:400']}});const Ra=D.a.div`
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
`;class ka extends w.PureComponent{constructor(e){super(e),this.store=Object(S.createStore)(Ya,Object(S.applyMiddleware)(A.a)),this.currentValue=null,this.theme=n(this.props.primaryColor,this.props.secondaryColor)}componentDidMount(){this.store.dispatch(T(this.props,this.theme)),this.unsubscribe=this.store.subscribe(()=>this.handleChange(this.store))}componentWillUnmount(){this.unsubscribe()}select(e){return e.conversation.webhookPayload}handleChange(e){const t=this.currentValue;this.currentValue=this.select(e.getState()),t!==this.currentValue&&this.props.onPayload&&this.props.onPayload(this.currentValue)}render(){return Object(w.createElement)(C.Provider,{store:this.store},Object(w.createElement)(k.a,{theme:this.theme},Object(w.createElement)(Ra,null,Object(w.createElement)(ja,null),Object(w.createElement)(ke,null))))}}t['default']=ka},function(e){e.exports=require('webfontloader')},function(e){e.exports=require('@material-ui/core/styles/MuiThemeProvider')},function(e){e.exports=require('redux-thunk')},function(e){e.exports=require('whatwg-fetch')},function(e){e.exports=require('@material-ui/core/colors')},function(e){e.exports=require('validator/lib/isHexColor')},function(e){e.exports=require('@material-ui/core/Fab')},function(e){e.exports=require('@material-ui/icons/Chat')},function(e){e.exports=require('lodash/get')},function(e){e.exports='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTQ0Ljc3IDE0NC43NyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ze2ZpbGw6IzhkYzVkNjt9LmNscy00e2NsaXAtcGF0aDp1cmwoI2NsaXAtcGF0aCk7fS5jbHMtNXtmaWxsOiMyZTU3NmQ7fS5jbHMtNntmaWxsOiNmMWM5YTU7fS5jbHMtN3tmaWxsOiNlNGI2OTI7fS5jbHMtOHtmaWxsOiNkZGFjOGM7b3BhY2l0eTowLjE7bWl4LWJsZW5kLW1vZGU6bXVsdGlwbHk7fS5jbHMtOXtmaWxsOiNmYTU4MmE7fTwvc3R5bGU+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTAuNTQgLTExNDYuMDQpIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02MzUuMzIsMTIxOC40MmE3Mi4zOSw3Mi4zOSwwLDEsMC03Mi4zOSw3Mi4zOUE3Mi4zOCw3Mi4zOCwwLDAsMCw2MzUuMzIsMTIxOC40MloiLz48L2NsaXBQYXRoPjwvZGVmcz48dGl0bGU+VW50aXRsZWQtMTwvdGl0bGU+PGcgY2xhc3M9ImNscy0yIj48ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik02MzUuMzIsMTIxOC40MmE3Mi4zOSw3Mi4zOSwwLDEsMC03Mi4zOSw3Mi4zOUE3Mi4zOCw3Mi4zOCwwLDAsMCw2MzUuMzIsMTIxOC40MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTAuNTQgLTExNDYuMDQpIi8+PGcgY2xhc3M9ImNscy00Ij48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik01MzUuNzgsMTIyMS4wOWMwLDExLjgxLTYuNDgsMTIuMTItNiwxOS45My41MSw4LjY2LDcuMjgsOC42OCw3LjI4LDE0LjY0cy02LjIyLDEyLjYyLS43MSwxOWgyNi42MXYtNzIuMjFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTU5MC4wOCwxMjIwLjdjMCwxMS44MSw2LjQ4LDEyLjExLDYsMTkuOTMtLjUxLDguNjYtNy4yOCw4LjY4LTcuMjgsMTQuNjNzNi4yMiwxMi42My43MSwxOUg1NjIuOTJ2LTcyLjIxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5MC41NCAtMTE0Ni4wNCkiLz48ZWxsaXBzZSBjbGFzcz0iY2xzLTUiIGN4PSI3Mi4zOSIgY3k9IjYyLjcyIiByeD0iMjkuNjMiIHJ5PSIyOS44MyIvPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTU5Ny42LDEyNjNjLTQuNjctOC44NC0zNC42Ny0xNC4zOC0zNC42Ny0xNC4zOHMtMzAsNS41NC0zNC42NywxNC4zOGMtMy40NCwxMi4yNS02LjMzLDI3LjgzLTYuMzMsMjcuODNoODJTNjAyLDEyNzQuMTEsNTk3LjYsMTI2M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTAuNTQgLTExNDYuMDQpIi8+PHBhdGggY2xhc3M9ImNscy03IiBkPSJNNTYyLjkzLDEyNDguNnMzMCw1LjU0LDM0LjY3LDE0LjM4YzQuMzgsMTEuMTMsNi4zMywyNy44Myw2LjMzLDI3LjgzaC00MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTAuNTQgLTExNDYuMDQpIi8+PHJlY3QgY2xhc3M9ImNscy02IiB4PSI2NC4yMiIgeT0iODQuNjEiIHdpZHRoPSIxNi4zMyIgaGVpZ2h0PSIyNy4zNCIvPjxyZWN0IGNsYXNzPSJjbHMtNyIgeD0iNzIuMzkiIHk9Ijg0LjYxIiB3aWR0aD0iOC4xNyIgaGVpZ2h0PSIyNy4zNCIvPjxwYXRoIGNsYXNzPSJjbHMtOCIgZD0iTTU1NC43NiwxMjQzLjMxYzEuNDcsNC4yMiw3LjQsNi42MywxMS43NSw2LjYzYTE0LjgsMTQuOCwwLDAsMCw0LjU5LS43NHYtMTguNTZINTU0Ljc2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5MC41NCAtMTE0Ni4wNCkiLz48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik01ODMuOTMsMTIxMy4zOWMwLTE3LjA3LTkuNC0yNi43OC0yMS0yNi43OHMtMjEsOS43MS0yMSwyNi43OCw5LjQsMzAuOTIsMjEsMzAuOTJTNTgzLjkzLDEyMzAuNDcsNTgzLjkzLDEyMTMuMzlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjxwYXRoIGNsYXNzPSJjbHMtNyIgZD0iTTU4MC43MywxMjI1LjIzYy0zLjgtLjQyLTYuMzctNC43OC01LjczLTkuNzNzNC4yNC04LjYzLDgtOC4yMSw2LjM3LDQuNzgsNS43Myw5LjczUzU4NC41NCwxMjI1LjY1LDU4MC43MywxMjI1LjIzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5MC41NCAtMTE0Ni4wNCkiLz48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik01MzcuMjMsMTIxN2MtLjY0LTUsMS45Mi05LjMxLDUuNzMtOS43M3M3LjQxLDMuMjYsOCw4LjIxLTEuOTMsOS4zMS01LjczLDkuNzNTNTM3Ljg3LDEyMjIsNTM3LjIzLDEyMTdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjxwYXRoIGNsYXNzPSJjbHMtNyIgZD0iTTU4My45MywxMjEzLjM5YzAtMTcuMDctOS40LTI2Ljc4LTIxLTI2Ljc4djU3LjdDNTc0LjUzLDEyNDQuMzEsNTgzLjkzLDEyMzAuNDcsNTgzLjkzLDEyMTMuMzlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTU4NS42NiwxMjExLjQ3YzAtLjA2LDAtLjEsMC0uMTUsMC0xMy4yNS05LTI3LjIzLTIxLjUyLTI3LjIzcy0yMy45MywxNC0yMy45MywyNy4yM3YuMTVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjxwYXRoIGNsYXNzPSJjbHMtOSIgZD0iTTYwMy45MywxMjkwLjgxcy0xLjk1LTE2LjctNi4zMy0yNy44M2MtMi41Ni00Ljg1LTEyLjc0LTguNy0yMS40MS0xMS4xOWwtMTMuMjksMTAuNDNMNTQ5LjA3LDEyNTJjLTguNTMsMi41LTE4LjMxLDYuMjgtMjAuODEsMTEtMy40NCwxMi4yNS02LjMzLDI3LjgzLTYuMzMsMjcuODNoODJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkwLjU0IC0xMTQ2LjA0KSIvPjwvZz48L2c+PC9nPjwvc3ZnPg=='},function(e){e.exports=require('@material-ui/core/Paper')},function(e){e.exports=require('@material-ui/icons/Fullscreen')},function(e){e.exports=require('@material-ui/icons/FullscreenExit')},function(e){e.exports=require('@material-ui/icons/Info')},function(e){e.exports=require('@material-ui/core/Avatar')},function(e){e.exports=require('@material-ui/icons/Close')},function(e){e.exports=require('@material-ui/core/Tooltip')},function(e){e.exports=require('@material-ui/core/DialogTitle')},function(e){e.exports=require('@material-ui/core/Dialog')},function(e){e.exports=require('@material-ui/core/DialogActions')},function(e){e.exports=require('@material-ui/core/DialogContent')},function(e){e.exports=require('@material-ui/core/DialogContentText')},function(e){e.exports=require('lodash/isEqual')},function(e){e.exports=require('lodash/merge')},function(e){e.exports=require('react-virtualized')},function(e){e.exports=require('@material-ui/core/colors/green')},function(e){e.exports=require('@material-ui/core/Card')},function(e){e.exports=require('@material-ui/core/CardActions')},function(e){e.exports=require('@material-ui/core/CardContent')},function(e){e.exports=require('@material-ui/core/CardMedia')},function(e){e.exports=require('@material-ui/icons/Send')},function(e){e.exports=require('@material-ui/core/Input')},function(e){e.exports=require('lodash/findLast')},function(e){e.exports=require('@material-ui/core/colors/red')}])});
//# sourceMappingURL=chatframe.js.map