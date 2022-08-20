import{R as M,r as o,j as l,a as R}from"./jsx-runtime.80f4563e.js";import{a as K,f as Y,b as U,d as j,m as X,s as G,c as B,e as D}from"./index.30e3d514.js";import{e as J,f as Q,g as Z,h as ee}from"./index.esm.186a66f7.js";const te={input:{padding:"16px",floatingLabel:"translate(-10px, -40px) scale(0.75)"},inputs:{tiny:{fontSize:"0.75rem",fontWeight:600,lineHeight:"1rem",placeholderFontSize:"0.9375rem",placeholderFontWeight:400,placeholderLineHeight:"1.25rem",padding:"0.1875rem 1rem",maxWidht:"20rem"},small:{fontSize:"0.8125rem",fontWeight:600,lineHeight:"1.5rem",placeholderFontSize:"0.9375rem",placeholderFontWeight:400,placeholderLineHeight:"1.25rem",padding:"0.1875rem 1rem",maxWidht:"20rem"},medium:{fontSize:"0.9375rem",fontWeight:600,lineHeight:"1.5rem",placeholderFontSize:"0.9375rem",placeholderFontWeight:400,placeholderLineHeight:"1.25rem",padding:"0.4375rem 1rem",maxWidht:"20rem"},large:{fontSize:"0.9375rem",fontWeight:600,lineHeight:"1.5rem",placeholderFontSize:"0.9375rem",placeholderFontWeight:400,placeholderLineHeight:"1.25rem",padding:"0.6875rem 1rem",maxWidht:"30rem"},giant:{fontSize:"1.125rem",fontWeight:700,lineHeight:"1.5rem",placeholderFontSize:"0.9375rem",placeholderFontWeight:400,placeholderLineHeight:"1.25rem",padding:"0.9375rem 1rem",maxWidht:"30rem"}},checkbox:{border:"none",borderRadius:"0",sizes:{small:{checkmark:"10px",height:"20px",width:"20px"},medium:{checkmark:"15px",height:"25px",width:"25px"},large:{checkmark:"20px",height:"30px",width:"30px"}}},fileInput:{backgroundColor:"#3880ff",color:"#fff"},radio:{border:"none",borderRadius:"50px",sizes:{small:{innerCircle:"8px",height:"20px",width:"20px"},medium:{innerCircle:"13px",height:"25px",width:"25px"},large:{innerCircle:"18px",height:"30px",width:"30px"}}}},re={colors:K,fonts:Y,fontWeights:U,formElements:te,breakpoints:j,media:X,siteMaxWidth:"1440px",maxWidths:{sm:"544px",md:"768px",lg:"1012px",xl:"1280px"},gridColumns:12,borders:[0,"1px solid"],radii:["0","3px","6px"],shadows:{sm:"0 1px 1px rgba(27, 31, 35, 0.1)",md:"0 1px 5px rgba(27, 31, 35, 0.15)",lg:"0 1px 15px rgba(27, 31, 35, 0.15)",xl:"0 10px 50px rgba(27, 31, 35, 0.07)"},space:["0","4px","8px","16px","24px","32px","40px","48px","64px","80px","96px","112px","128px"],accordionSizes:{tiny:{minHeight:"2.5rem"},small:{minHeight:"3.5rem"},medium:{minHeight:"4.5rem"},large:{minHeight:"5.5rem"},giant:{minHeight:"6.5rem"}},buttonSizes:{tiny:{fontSize:"0.625rem",lineHeight:"0.75rem",padding:"0.3125rem 0.625rem"},small:{fontSize:"0.75rem",lineHeight:"1rem",padding:"0.4375rem 0.875rem"},medium:{fontSize:"0.875rem",lineHeight:"1rem",padding:"0.6875rem 1.125rem"},large:{fontSize:"1rem",lineHeight:"1.25rem",padding:"0.8125rem 1.125rem"},giant:{fontSize:"1.125rem",lineHeight:"1.5rem",padding:"0.9375rem 1.375rem"}},cardSizes:{tiny:{height:"13.5rem"},small:{height:"21.1875rem"},medium:{height:"28.875rem"},large:{height:"36.5625rem"},giant:{height:"44.25rem"}},spinnerSizes:{tiny:{fontSize:"1rem"},small:{fontSize:"1.25rem"},medium:{fontSize:"1.5rem"},large:{fontSize:"1.75rem"},giant:{fontSize:"2rem"}},modalSizes:{sm:{height:"270px",maxHeight:"90vh",maxWidth:"90vw",width:"480px"},md:{height:"360px",maxHeight:"90vh",maxWidth:"90vw",width:"640px"},lg:{height:"90vh",width:"90vw"}},wysiwyg:{maxWidth:"720px",tightness:{tight:{lineHeight:1.2},default:{lineHeight:1.9},loose:{lineHeight:2.5}}}};var y={exports:{}},k=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof window.msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto);if(k){var I=new Uint8Array(16);y.exports=function(){return k(I),I}}else{var H=new Array(16);y.exports=function(){for(var a=0,r;a<16;a++)(a&3)===0&&(r=Math.random()*4294967296),H[a]=r>>>((a&3)<<3)&255;return H}}var $=[];for(var g=0;g<256;++g)$[g]=(g+256).toString(16).substr(1);function ae(e,a){var r=a||0,t=$;return[t[e[r++]],t[e[r++]],t[e[r++]],t[e[r++]],"-",t[e[r++]],t[e[r++]],"-",t[e[r++]],t[e[r++]],"-",t[e[r++]],t[e[r++]],"-",t[e[r++]],t[e[r++]],t[e[r++]],t[e[r++]],t[e[r++]],t[e[r++]]].join("")}var E=ae,ne=y.exports,ie=E,O,S,_=0,w=0;function oe(e,a,r){var t=a&&r||0,n=a||[];e=e||{};var i=e.node||O,d=e.clockseq!==void 0?e.clockseq:S;if(i==null||d==null){var s=ne();i==null&&(i=O=[s[0]|1,s[1],s[2],s[3],s[4],s[5]]),d==null&&(d=S=(s[6]<<8|s[7])&16383)}var m=e.msecs!==void 0?e.msecs:new Date().getTime(),c=e.nsecs!==void 0?e.nsecs:w+1,f=m-_+(c-w)/1e4;if(f<0&&e.clockseq===void 0&&(d=d+1&16383),(f<0||m>_)&&e.nsecs===void 0&&(c=0),c>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");_=m,w=c,S=d,m+=122192928e5;var u=((m&268435455)*1e4+c)%4294967296;n[t++]=u>>>24&255,n[t++]=u>>>16&255,n[t++]=u>>>8&255,n[t++]=u&255;var p=m/4294967296*1e4&268435455;n[t++]=p>>>8&255,n[t++]=p&255,n[t++]=p>>>24&15|16,n[t++]=p>>>16&255,n[t++]=d>>>8|128,n[t++]=d&255;for(var x=0;x<6;++x)n[t+x]=i[x];return a||ie(n)}var se=oe,de=y.exports,le=E;function me(e,a,r){var t=a&&r||0;typeof e=="string"&&(a=e==="binary"?new Array(16):null,e=null),e=e||{};var n=e.random||(e.rng||de)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,a)for(var i=0;i<16;++i)a[t+i]=n[i];return a||le(n)}var ce=me,ue=se,A=ce,z=A;z.v1=ue;z.v4=A;var fe=z;const W=M.createContext({}),v=({children:e})=>{const[a,r]=o.exports.useState([]),t=o.exports.useCallback(i=>{r(d=>d.filter(s=>s.id!==i))},[]),n=o.exports.useCallback(i=>{const s={id:fe.v4(),handleOnClick:t,duration:i.duration,position:i.position,title:i.title,subtitle:i.subtitle,status:i.status};r(m=>{const c=m.filter(f=>f.position===s.position);return[s,...c]})},[t]);return l(W.Provider,{value:{addToast:n,toastListCurrent:a},children:e})};function L(){const e=o.exports.useContext(W);if(!e)throw new Error("useToast must be used within a ToastProvider");return e}try{v.displayName="ToastProvider",v.__docgenInfo={description:"",displayName:"ToastProvider",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Toast/context/ToastContext.tsx#ToastProvider"]={docgenInfo:v.__docgenInfo,name:"ToastProvider",path:"src/components/Toast/context/ToastContext.tsx#ToastProvider"})}catch{}const pe=G.div`
  position: fixed;
  user-select: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 1rem;
  height: 80px;
  max-width: 400px;
  min-width: 296px;
  cursor: pointer;
  background: ${({status:e})=>B(e,500)};
  border-radius: 4px;
  color: #fff;
  box-shadow: 0 0 10px #999;

  ${({position:e,shouldShow:a,myIndexInArray:r,timeToUnmount:t})=>e==="top-right"&&` 
    top: ${r*100+10}px;
    right: 12px;
    transition: transform ${t}ms ease-in-out;
    transform: translateX(${a?"0":"200%"});
  `}

  ${({position:e,shouldShow:a,myIndexInArray:r,timeToUnmount:t})=>e==="bottom-right"&&` 
    bottom: ${r*100+10}px;
    right: 12px;
    transition: transform ${t}ms ease-in-out;
    transform: translateX(${a?"0":"200%"});
  `}


${({position:e,shouldShow:a,myIndexInArray:r,timeToUnmount:t})=>e==="top-left"&&` 
    top: ${r*100+10}px;
    left: 12px;
    transition: transform ${t}ms ease-in-out;
    transform: translateX(${a?"0":"-200%"});
  `}

${({position:e,shouldShow:a,myIndexInArray:r,timeToUnmount:t})=>e==="bottom-left"&&` 
    bottom: ${r*100+10}px;
    left: 12px;
    transition: transform ${t}ms ease-in-out;
    transform: translateX(${a?"0":"-200%"});
  `}

  .toast-icon {
    svg {
      width: 30px;
      height: 30px;
    }
  }

  .toast-text-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-width: 300px;

    .toast-title {
      font-size: 18px;
      font-weight: bold;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .toast-subtitle {
      font-size: 14px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`,T=({duration:e=5e3,position:a="top-right",handleOnClick:r,...t})=>{const{toastListCurrent:n}=L(),[i,d]=o.exports.useState(!1),s=700,[m,c]=o.exports.useState(-1),f=o.exports.useRef(null),u=o.exports.useRef(null),p=o.exports.useRef(!1),x=o.exports.useCallback(()=>{d(!1),u.current=setTimeout(()=>{r(t.id)},s)},[r,t.id]),N=o.exports.useMemo(()=>{if(t.status==="success")return l(J,{});if(t.status==="warning")return l(Q,{});if(t.status==="info")return l(Z,{});if(t.status==="danger")return l(ee,{})},[t.status]),P=o.exports.useCallback(()=>{f.current&&clearTimeout(f.current),u.current&&clearTimeout(u.current)},[]),h=o.exports.useCallback(()=>{f.current=setTimeout(()=>{p.current&&d(!1)},e),u.current=setTimeout(()=>{r(t.id)},e+s)},[e,r,t.id]),F=o.exports.useCallback(()=>{h()},[h]);return o.exports.useEffect(()=>{d(!0),h()},[h]),o.exports.useEffect(()=>{const q=n.findIndex(V=>V.id===t.id);c(q)},[t.id,n]),o.exports.useEffect(()=>(p.current=!0,()=>{p.current=!1}),[]),R(pe,{...t,handleOnClick:r,onMouseEnter:P,onMouseLeave:F,myIndexInArray:m,position:a,duration:e,className:`toast-card ${t.className?t.className:""}`,onClick:x,shouldShow:i,timeToUnmount:s,children:[R("div",{className:"toast-text-info",children:[l("div",{className:"toast-title",children:t.title}),l("div",{className:"toast-subtitle",children:t.subtitle})]}),l("div",{className:"toast-icon",children:N})]})};try{T.displayName="ToastCard",T.__docgenInfo={description:"",displayName:"ToastCard",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},handleOnClick:{defaultValue:null,description:"",name:"handleOnClick",required:!0,type:{name:"(id: string) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},position:{defaultValue:{value:"top-right"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"bottom-right"'},{value:'"top-left"'},{value:'"bottom-left"'},{value:'"top-right"'}]}},duration:{defaultValue:{value:"5000"},description:"",name:"duration",required:!1,type:{name:"number"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"basic"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"quaternary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"info"'},{value:'"dark"'}]}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Toast/ToastCard/index.tsx#ToastCard"]={docgenInfo:T.__docgenInfo,name:"ToastCard",path:"src/components/Toast/ToastCard/index.tsx#ToastCard"})}catch{}const C=()=>{const{toastListCurrent:e}=L();return l(o.exports.Fragment,{children:e.map(a=>l(T,{...a},a.id))})};try{C.displayName="ToastCardsContainer",C.__docgenInfo={description:"",displayName:"ToastCardsContainer",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Toast/ToastCardsContainer/index.tsx#ToastCardsContainer"]={docgenInfo:C.__docgenInfo,name:"ToastCardsContainer",path:"src/components/Toast/ToastCardsContainer/index.tsx#ToastCardsContainer"})}catch{}const{default:Te,css:Ce,withTheme:ye,createGlobalStyle:Se,ThemeProvider:xe}=D,b=({children:e,customTheme:a})=>l(xe,{theme:a||re,children:R(v,{children:[l(C,{}),e]})});try{b.displayName="ThemeProvider",b.__docgenInfo={description:"",displayName:"ThemeProvider",props:{customTheme:{defaultValue:null,description:"",name:"customTheme",required:!1,type:{name:"IDefaultTheme"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/shared/styles/index.tsx#ThemeProvider"]={docgenInfo:b.__docgenInfo,name:"ThemeProvider",path:"src/shared/styles/index.tsx#ThemeProvider"})}catch{}export{b as T,L as u};
//# sourceMappingURL=index.2c40f57c.js.map
