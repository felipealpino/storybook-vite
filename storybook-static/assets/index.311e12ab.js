import{r as i,j as s}from"./jsx-runtime.9fa4431b.js";import{s as u,c as n}from"./index.bc275c18.js";const l=u.button`
  all: none;
  border: none;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: #ffffff;
  padding: 10px 15px;
  font-weight: 600;
  font-size: 16px;
  transition: 0.1s ease-in-out;
  transition-property: background;
  min-width: 110px;
  width: fit-content;
  height: max-content;
  min-height: 50px;
  user-select: none;

  background: ${({status:e,outline:t})=>t?n(e,300):n(e,500)};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  
  border: 2px solid ${({status:e})=>n(e,500)};

  opacity: ${({disabled:e})=>e?"0.5":"1"};

  &:hover {
    background: ${({status:e,disabled:t})=>!t&&n(e,600)};
  }

  svg {
    width: 25px;
    height: 25px;
  }
`,o=({onClick:e,...t})=>{const r=i.exports.useCallback(a=>{t.disabled||e&&e(a)},[e,t.disabled]);return s(l,{...t,className:`button-container ${t.className||""}`,onClick:a=>r(a)})};try{o.displayName="Button",o.__docgenInfo={description:"",displayName:"Button",props:{status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"basic"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"quaternary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"info"'},{value:'"dark"'}]}},outline:{defaultValue:null,description:"",name:"outline",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:o.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch{}export{o as B};
//# sourceMappingURL=index.311e12ab.js.map
