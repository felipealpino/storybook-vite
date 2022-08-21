import{R as Y,r as o,j as m,a as W}from"./jsx-runtime.48533e16.js";import{s as U,c as X,a as T,b as j}from"./index.235f6fa3.js";import{e as G,f as B,g as D,h as J}from"./index.esm.eb321859.js";var _={exports:{}},$=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof window.msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto);if($){var F=new Uint8Array(16);_.exports=function(){return $(F),F}}else{var k=new Array(16);_.exports=function(){for(var i=0,r;i<16;i++)(i&3)===0&&(r=Math.random()*4294967296),k[i]=r>>>((i&3)<<3)&255;return k}}var O=[];for(var v=0;v<256;++v)O[v]=(v+256).toString(16).substr(1);function Q(e,i){var r=i||0,t=O;return[t[e[r++]],t[e[r++]],t[e[r++]],t[e[r++]],"-",t[e[r++]],t[e[r++]],"-",t[e[r++]],t[e[r++]],"-",t[e[r++]],t[e[r++]],"-",t[e[r++]],t[e[r++]],t[e[r++]],t[e[r++]],t[e[r++]],t[e[r++]]].join("")}var E=Q,Z=_.exports,ee=E,I,w,b=0,z=0;function te(e,i,r){var t=i&&r||0,n=i||[];e=e||{};var a=e.node||I,l=e.clockseq!==void 0?e.clockseq:w;if(a==null||l==null){var s=Z();a==null&&(a=I=[s[0]|1,s[1],s[2],s[3],s[4],s[5]]),l==null&&(l=w=(s[6]<<8|s[7])&16383)}var c=e.msecs!==void 0?e.msecs:new Date().getTime(),h=e.nsecs!==void 0?e.nsecs:z+1,u=c-b+(h-z)/1e4;if(u<0&&e.clockseq===void 0&&(l=l+1&16383),(u<0||c>b)&&e.nsecs===void 0&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");b=c,z=h,w=l,c+=122192928e5;var f=((c&268435455)*1e4+h)%4294967296;n[t++]=f>>>24&255,n[t++]=f>>>16&255,n[t++]=f>>>8&255,n[t++]=f&255;var p=c/4294967296*1e4&268435455;n[t++]=p>>>8&255,n[t++]=p&255,n[t++]=p>>>24&15|16,n[t++]=p>>>16&255,n[t++]=l>>>8|128,n[t++]=l&255;for(var x=0;x<6;++x)n[t+x]=a[x];return i||ee(n)}var re=te,ie=_.exports,ne=E;function ae(e,i,r){var t=i&&r||0;typeof e=="string"&&(i=e==="binary"?new Array(16):null,e=null),e=e||{};var n=e.random||(e.rng||ie)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,i)for(var a=0;a<16;++a)i[t+a]=n[a];return i||ne(n)}var oe=ae,se=re,A=oe,R=A;R.v1=se;R.v4=A;var le=R;const L=Y.createContext({}),y=({children:e})=>{const[i,r]=o.exports.useState([]),t=o.exports.useCallback(a=>{r(l=>l.filter(s=>s.id!==a))},[]),n=o.exports.useCallback(a=>{const s={id:le.v4(),handleOnClick:t,duration:a.duration,position:a.position,title:a.title,subtitle:a.subtitle,status:a.status};r(c=>{const h=c.filter(u=>u.position===s.position);return[s,...h]})},[t]);return m(L.Provider,{value:{addToast:n,toastListCurrent:i},children:e})};function N(){const e=o.exports.useContext(L);if(!e)throw new Error("useToast must be used within a ToastProvider");return e}try{y.displayName="ToastProvider",y.__docgenInfo={description:"",displayName:"ToastProvider",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Toast/context/ToastContext.tsx#ToastProvider"]={docgenInfo:y.__docgenInfo,name:"ToastProvider",path:"src/components/Toast/context/ToastContext.tsx#ToastProvider"})}catch{}const de=U.div`
  position: fixed;
  user-select: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 0.1rem 1rem;
  height: 70px;
  max-width: 400px;
  min-width: 295px;
  cursor: pointer;
  background: ${({status:e})=>X(e,500)};
  border-radius: 4px;
  color: #fff;
  box-shadow: 0 0 10px #999;

  ${({position:e,shouldShow:i,myIndexInArray:r,timeToUnmount:t})=>e==="top-right"&&` 
    top: ${r*100+10}px;
    right: 12px;
    transition: transform ${t}ms ease-in-out;
    transform: translateX(${i?"0":"200%"});
  `}

  ${({position:e,shouldShow:i,myIndexInArray:r,timeToUnmount:t})=>e==="bottom-right"&&` 
    bottom: ${r*100+10}px;
    right: 12px;
    transition: transform ${t}ms ease-in-out;
    transform: translateX(${i?"0":"200%"});
  `}


${({position:e,shouldShow:i,myIndexInArray:r,timeToUnmount:t})=>e==="top-left"&&` 
    top: ${r*100+10}px;
    left: 12px;
    transition: transform ${t}ms ease-in-out;
    transform: translateX(${i?"0":"-200%"});
  `}

${({position:e,shouldShow:i,myIndexInArray:r,timeToUnmount:t})=>e==="bottom-left"&&` 
    bottom: ${r*100+10}px;
    left: 12px;
    transition: transform ${t}ms ease-in-out;
    transform: translateX(${i?"0":"-200%"});
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
      font-size: 16px;
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
`,S=({duration:e=5e3,position:i="top-right",handleOnClick:r,...t})=>{const{toastListCurrent:n}=N(),[a,l]=o.exports.useState(!1),s=700,[c,h]=o.exports.useState(-1),u=o.exports.useRef(null),f=o.exports.useRef(null),p=o.exports.useRef(!1),x=o.exports.useCallback(()=>{l(!1),f.current=setTimeout(()=>{r(t.id)},s)},[r,t.id]),P=o.exports.useMemo(()=>{if(t.status==="success")return m(G,{});if(t.status==="warning")return m(B,{});if(t.status==="info")return m(D,{});if(t.status==="danger")return m(J,{})},[t.status]),q=o.exports.useCallback(()=>{u.current&&clearTimeout(u.current),f.current&&clearTimeout(f.current)},[]),g=o.exports.useCallback(()=>{u.current=setTimeout(()=>{p.current&&l(!1)},e),f.current=setTimeout(()=>{r(t.id)},e+s)},[e,r,t.id]),V=o.exports.useCallback(()=>{g()},[g]);return o.exports.useEffect(()=>{l(!0),g()},[g]),o.exports.useEffect(()=>{const M=n.findIndex(K=>K.id===t.id);h(M)},[t.id,n]),o.exports.useEffect(()=>(p.current=!0,()=>{p.current=!1}),[]),W(de,{...t,handleOnClick:r,onMouseEnter:q,onMouseLeave:V,myIndexInArray:c,position:i,duration:e,className:`toast-card ${t.className?t.className:""}`,onClick:x,shouldShow:a,timeToUnmount:s,children:[m("div",{className:"toast-icon",children:P}),W("div",{className:"toast-text-info",children:[m("div",{className:"toast-title",children:t.title}),m("div",{className:"toast-subtitle",children:t.subtitle})]})]})};try{S.displayName="ToastCard",S.__docgenInfo={description:"",displayName:"ToastCard",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},handleOnClick:{defaultValue:null,description:"",name:"handleOnClick",required:!0,type:{name:"(id: string) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},position:{defaultValue:{value:"top-right"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"bottom-right"'},{value:'"top-left"'},{value:'"bottom-left"'},{value:'"top-right"'}]}},duration:{defaultValue:{value:"5000"},description:"",name:"duration",required:!1,type:{name:"number"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"basic"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"quaternary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"info"'},{value:'"dark"'}]}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Toast/ToastCard/index.tsx#ToastCard"]={docgenInfo:S.__docgenInfo,name:"ToastCard",path:"src/components/Toast/ToastCard/index.tsx#ToastCard"})}catch{}const C=()=>{const{toastListCurrent:e}=N();return m(o.exports.Fragment,{children:e.map(i=>m(S,{...i},i.id))})};try{C.displayName="ToastCardsContainer",C.__docgenInfo={description:"",displayName:"ToastCardsContainer",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Toast/ToastCardsContainer/index.tsx#ToastCardsContainer"]={docgenInfo:C.__docgenInfo,name:"ToastCardsContainer",path:"src/components/Toast/ToastCardsContainer/index.tsx#ToastCardsContainer"})}catch{}const me={input:{padding:"16px",floatingLabel:"translate(-10px, -40px) scale(0.75)"},inputs:{tiny:{fontSize:"0.75rem",fontWeight:600,lineHeight:"1rem",placeholderFontSize:"0.9375rem",placeholderFontWeight:400,placeholderLineHeight:"1.25rem",padding:"0.1875rem 1rem",maxWidht:"20rem"},small:{fontSize:"0.8125rem",fontWeight:600,lineHeight:"1.5rem",placeholderFontSize:"0.9375rem",placeholderFontWeight:400,placeholderLineHeight:"1.25rem",padding:"0.1875rem 1rem",maxWidht:"20rem"},medium:{fontSize:"0.9375rem",fontWeight:600,lineHeight:"1.5rem",placeholderFontSize:"0.9375rem",placeholderFontWeight:400,placeholderLineHeight:"1.25rem",padding:"0.4375rem 1rem",maxWidht:"20rem"},large:{fontSize:"0.9375rem",fontWeight:600,lineHeight:"1.5rem",placeholderFontSize:"0.9375rem",placeholderFontWeight:400,placeholderLineHeight:"1.25rem",padding:"0.6875rem 1rem",maxWidht:"30rem"},giant:{fontSize:"1.125rem",fontWeight:700,lineHeight:"1.5rem",placeholderFontSize:"0.9375rem",placeholderFontWeight:400,placeholderLineHeight:"1.25rem",padding:"0.9375rem 1rem",maxWidht:"30rem"}},checkbox:{border:"none",borderRadius:"0",sizes:{small:{checkmark:"10px",height:"20px",width:"20px"},medium:{checkmark:"15px",height:"25px",width:"25px"},large:{checkmark:"20px",height:"30px",width:"30px"}}},fileInput:{backgroundColor:"#3880ff",color:"#fff"},radio:{border:"none",borderRadius:"50px",sizes:{small:{innerCircle:"8px",height:"20px",width:"20px"},medium:{innerCircle:"13px",height:"25px",width:"25px"},large:{innerCircle:"18px",height:"30px",width:"30px"}}}},ce={body:{fontFamily:'"Open Sans", sans-serif',fontSize:"0.9375rem",color:T.basic1000,fontWeight:400,lineHeight:"3rem"},h1:{fontFamily:"inherit",fontSize:"2.25rem",fontWeight:400,lineHeight:"1.25rem"},h2:{fontFamily:"inherit",fontSize:"2rem",fontWeight:700,lineHeight:"2.5rem"},h3:{fontFamily:"inherit",fontSize:"1.875rem",fontWeight:700,lineHeight:"2.5rem"},h4:{fontFamily:"inherit",fontSize:"1.625rem",fontWeight:700,lineHeight:"2rem"},h5:{fontFamily:"inherit",fontSize:"1.375rem",fontWeight:700,lineHeight:"2rem"},h6:{fontFamily:"inherit",fontSize:"1.125rem",fontWeight:700,lineHeight:"1.5em"},p:{fontFamily:"inherit",fontSize:"0.9375rem",fontWeight:400,lineHeight:"1.25rem"},a:{fontFamily:"inherit",fontSize:"inherit",fontWeight:"inherit",lineHeight:"inherit",color:T.primary500},label:{fontFamily:"inherit",fontSize:"0.75rem",fontWeight:700,lineHeight:"1rem"},caption:{fontFamily:"inherit",fontSize:"0.75rem",fontWeight:700,lineHeight:"1rem"},li:{fontFamily:"inherit",fontSize:"0.9375rem",color:T.basic100,fontWeight:400,lineHeight:"1.25rem"}},he={light:300,normal:400,bold:600},d=["480px","768px","1024px","1280px"];d.sm=d[0];d.md=d[1];d.lg=d[2];d.xl=d[3];const fe={sm:`@media (min-width: ${d.sm})`,md:`@media (min-width: ${d.md})`,lg:`@media (min-width: ${d.lg})`,xl:`@media (min-width: ${d.xl})`},ue={colors:T,fonts:ce,fontWeights:he,formElements:me,breakpoints:d,media:fe,siteMaxWidth:"1440px",maxWidths:{sm:"544px",md:"768px",lg:"1012px",xl:"1280px"},gridColumns:12,borders:[0,"1px solid"],radii:["0","3px","6px"],shadows:{sm:"0 1px 1px rgba(27, 31, 35, 0.1)",md:"0 1px 5px rgba(27, 31, 35, 0.15)",lg:"0 1px 15px rgba(27, 31, 35, 0.15)",xl:"0 10px 50px rgba(27, 31, 35, 0.07)"},space:["0","4px","8px","16px","24px","32px","40px","48px","64px","80px","96px","112px","128px"],accordionSizes:{tiny:{minHeight:"2.5rem"},small:{minHeight:"3.5rem"},medium:{minHeight:"4.5rem"},large:{minHeight:"5.5rem"},giant:{minHeight:"6.5rem"}},buttonSizes:{tiny:{fontSize:"0.625rem",lineHeight:"0.75rem",padding:"0.3125rem 0.625rem"},small:{fontSize:"0.75rem",lineHeight:"1rem",padding:"0.4375rem 0.875rem"},medium:{fontSize:"0.875rem",lineHeight:"1rem",padding:"0.6875rem 1.125rem"},large:{fontSize:"1rem",lineHeight:"1.25rem",padding:"0.8125rem 1.125rem"},giant:{fontSize:"1.125rem",lineHeight:"1.5rem",padding:"0.9375rem 1.375rem"}},cardSizes:{tiny:{height:"13.5rem"},small:{height:"21.1875rem"},medium:{height:"28.875rem"},large:{height:"36.5625rem"},giant:{height:"44.25rem"}},spinnerSizes:{tiny:{fontSize:"1rem"},small:{fontSize:"1.25rem"},medium:{fontSize:"1.5rem"},large:{fontSize:"1.75rem"},giant:{fontSize:"2rem"}},modalSizes:{sm:{height:"270px",maxHeight:"90vh",maxWidth:"90vw",width:"480px"},md:{height:"360px",maxHeight:"90vh",maxWidth:"90vw",width:"640px"},lg:{height:"90vh",width:"90vw"}},wysiwyg:{maxWidth:"720px",tightness:{tight:{lineHeight:1.2},default:{lineHeight:1.9},loose:{lineHeight:2.5}}}},{default:Te,css:ye,withTheme:Se,createGlobalStyle:Ce,ThemeProvider:pe}=j,H=({children:e,customTheme:i})=>m(pe,{theme:i||ue,children:W(y,{children:[m(C,{}),e]})});try{H.displayName="ThemeProvider",H.__docgenInfo={description:"",displayName:"ThemeProvider",props:{customTheme:{defaultValue:null,description:"",name:"customTheme",required:!1,type:{name:"IDefaultTheme"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/shared/styles/index.tsx#ThemeProvider"]={docgenInfo:H.__docgenInfo,name:"ThemeProvider",path:"src/shared/styles/index.tsx#ThemeProvider"})}catch{}export{H as T,N as u};
//# sourceMappingURL=index.e7f05550.js.map
