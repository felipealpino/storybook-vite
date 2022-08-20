import{u as p,T as m}from"./index.0cffbf06.js";import{B as f}from"./index.bc275c18.js";import{r as l,j as e,a as n}from"./jsx-runtime.9fa4431b.js";import{B as s}from"./index.311e12ab.js";import"./index.esm.a2218244.js";import"./iframe.0ce430a8.js";const a=()=>{const{addToast:r}=p(),i=l.exports.useCallback(o=>o.charAt(0).toUpperCase()+o.slice(1),[]),t=l.exports.useCallback((o,c)=>{const d={title:`${i(o)} Toast`,subtitle:`This is a beautiful ${i(o)} Toast \u{1F603}`,duration:4e3,position:c,status:o};r(d)},[r,i]);return e(l.exports.Fragment,{children:n("div",{style:{display:"flex",flexDirection:"column",gap:"10rem"},children:[n("div",{style:{display:"flex",justifyContent:"space-between"},children:[n("div",{style:{display:"flex",gap:"10px"},children:[e(s,{onClick:()=>t("success","top-left"),status:"success",children:"Success"}),e(s,{onClick:()=>t("warning","top-left"),status:"warning",children:"Warning"}),e(s,{onClick:()=>t("danger","top-left"),status:"danger",children:"Danger"}),e(s,{onClick:()=>t("info","top-left"),status:"info",children:"Information"})]}),n("div",{style:{display:"flex",gap:"10px",justifySelf:"flex-end"},children:[e(s,{onClick:()=>t("success","top-right"),status:"success",children:"Success"}),e(s,{onClick:()=>t("warning","top-right"),status:"warning",children:"Warning"}),e(s,{onClick:()=>t("danger","top-right"),status:"danger",children:"Danger"}),e(s,{onClick:()=>t("info","top-right"),status:"info",children:"Information"})]})]}),n("div",{style:{display:"flex",justifyContent:"space-between"},children:[n("div",{style:{display:"flex",gap:"10px"},children:[e(s,{onClick:()=>t("success","bottom-left"),status:"success",children:"Success"}),e(s,{onClick:()=>t("warning","bottom-left"),status:"warning",children:"Warning"}),e(s,{onClick:()=>t("danger","bottom-left"),status:"danger",children:"Danger"}),e(s,{onClick:()=>t("info","bottom-left"),status:"info",children:"Information"})]}),n("div",{style:{display:"flex",gap:"10px",justifySelf:"flex-end"},children:[e(s,{onClick:()=>t("success","bottom-right"),status:"success",children:"Success"}),e(s,{onClick:()=>t("warning","bottom-right"),status:"warning",children:"Warning"}),e(s,{onClick:()=>t("danger","bottom-right"),status:"danger",children:"Danger"}),e(s,{onClick:()=>t("info","bottom-right"),status:"info",children:"Information"})]})]})]})})};try{a.displayName="ExampleToUse",a.__docgenInfo={description:"",displayName:"ExampleToUse",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Toast/ExampleToUse.tsx#ExampleToUse"]={docgenInfo:a.__docgenInfo,name:"ExampleToUse",path:"src/components/Toast/ExampleToUse.tsx#ExampleToUse"})}catch{}const k={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "../../shared/styles";
import { BaseStyles } from "../BaseStyles";
import { ExampleToUse } from "./ExampleToUse";
import { ToastCard } from "./ToastCard";

export default {
  title: "TOAST/ToastCard",
} as ComponentMeta<typeof ToastCard>;

const Template: ComponentStory<typeof ToastCard> = (args) => (
  <ThemeProvider>
    <BaseStyles />
    <ExampleToUse />
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {};
`,locationsMap:{primary:{startLoc:{col:51,line:11},endLoc:{col:1,line:16},startBody:{col:51,line:11},endBody:{col:1,line:16}}}}},title:"TOAST/ToastCard"},u=r=>n(m,{children:[e(f,{}),e(a,{})]}),g=u.bind({});g.args={};const b=["Primary"];export{g as Primary,b as __namedExportsOrder,k as default};
//# sourceMappingURL=Toast.stories.b18a4e43.js.map
