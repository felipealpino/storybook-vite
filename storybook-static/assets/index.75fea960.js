import{s as l,c as t}from"./index.30e3d514.js";import{a as r,j as s}from"./jsx-runtime.80f4563e.js";const u=l.label`
  white-space: nowrap;
  color: ${({status:e})=>`${t(e,500)}`};
  text-transform: unset;
  margin: 4px 0px;
  font-size: 14px;
  font-weight: 700;
  user-select: none;
  pointer-events: none;
  display: flex;

  .required-star {
    color: ${t("danger",500)};
    font-size: 14px;
    margin-left: 3px;
  }
`,n=({className:e,...a})=>r(u,{className:`input-label ${e||""}`,...a,children:[a.label,a.isRequired&&s("span",{className:"required-star",children:"*"})]});try{n.displayName="InputLabel",n.__docgenInfo={description:"",displayName:"InputLabel",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"basic"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"quaternary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"info"'},{value:'"dark"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/shared/components/InputLabel/index.tsx#InputLabel"]={docgenInfo:n.__docgenInfo,name:"InputLabel",path:"src/shared/components/InputLabel/index.tsx#InputLabel"})}catch{}export{n as I};
//# sourceMappingURL=index.75fea960.js.map
