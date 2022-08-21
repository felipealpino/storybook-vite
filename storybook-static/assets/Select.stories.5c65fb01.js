import{r as o,a as i,j as a}from"./jsx-runtime.48533e16.js";import{h as g}from"./hideArgTypes.a90ae262.js";import{s as y,c as l,B as b}from"./index.235f6fa3.js";import{I as h}from"./inputsErrorMessage.2147ed9d.js";import{d as x}from"./index.esm.eb321859.js";import{I as v}from"./index.cec95c5c.js";import"./iframe.668864a1.js";const C=y.div`
  font-size: 15px;

  .select-dropdown {
    opacity: ${e=>e.disabled?"0.5":"1"};
    border: 2px solid ${({status:e})=>`${l(e,500)}`};
    border-radius: 4px;
    position: relative;
    width: 100%;
  }

  .select-dropdown-header {
    padding: 15px;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background: ${l("basic",200)};

    svg {
      margin-left: 10px;
      width: 25px;
      height: 25px;
      transition: 0.2s ease-in-out;
      transform: rotate(${({isOpen:e})=>e?"90deg":"0deg"});
    }
  }

  .select-dropdown-body {
    padding: 5px;
    background: ${l("basic",200)};
    position: ${({optionsFillSpace:e})=>e?"initial":"absolute"};
    top: 42px;
    width: inherit;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    z-index: 1;
    border-top: ${e=>e.optionsFillSpace?`2px solid ${l(e.status,500)}`:"none"};
    border-left: ${e=>e.optionsFillSpace?"none":`2px solid ${l(e.status,500)}`};
    border-right: ${e=>e.optionsFillSpace?"none":`2px solid ${l(e.status,500)}`};
    border-bottom: ${e=>e.optionsFillSpace?"none":`2px solid ${l(e.status,500)}`};
  }

  .select-dropdown-item {
    padding: 10px;
  }

  .select-dropdown-item:hover {
    cursor: pointer;
  }
`,r=({handleOnChange:e,...t})=>{const[c,p]=o.exports.useState(!1),[s,u]=o.exports.useState(t.initialOption),m=o.exports.useCallback(()=>{!t.disabled&&p(n=>!n)},[t.disabled]),S=o.exports.useCallback(n=>{e&&e(n),u(n),p(d=>!d)},[e]),f=o.exports.useMemo(()=>s?s.name:t.placeholder?t.placeholder:"Selecione uma Op\xE7\xE3o",[t.placeholder,s]);return i(C,{className:`select-container ${t.className?t.className:""}`,status:t.status,isOpen:c,disabled:t.disabled,optionsFillSpace:t.optionsFillSpace,children:[t.label&&a(v,{label:t.label,status:t.status,isRequired:t.required}),i("div",{className:"select-dropdown",children:[i("div",{className:"select-dropdown-header",onClick:m,children:[f,a(x,{color:"#222b45"})]}),c&&(t.options&&t.options.length>0?a("div",{className:"select-dropdown-body",children:t.options.map((n,d)=>a("div",{className:"select-dropdown-item",onClick:()=>S(n),id:t.name,children:n.name},d))}):a("div",{className:"select-dropdown-body",children:"Nenhuma op\xE7\xE3o dispon\xEDvel .."}))]}),t.error&&a(h,{error:t.error})]})};try{r.displayName="Select",r.__docgenInfo={description:"",displayName:"Select",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ISelectOptions[]"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"basic"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"quaternary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"info"'},{value:'"dark"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},handleOnChange:{defaultValue:null,description:"",name:"handleOnChange",required:!1,type:{name:"((selectedOption: ISelectOptions) => void)"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},initialOption:{defaultValue:null,description:"",name:"initialOption",required:!1,type:{name:"ISelectOptions"}},optionsFillSpace:{defaultValue:null,description:"",name:"optionsFillSpace",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Selects/Select/index.tsx#Select"]={docgenInfo:r.__docgenInfo,name:"Select",path:"src/components/Selects/Select/index.tsx#Select"})}catch{}const N={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { hideArgs } from "../../stories/hideArgTypes";
import { BaseStyles } from "../BaseStyles";
import { Select } from "./Select";

export default {
  title: "SELECTs/Select",
  component: Select,
  argTypes: hideArgs,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Fragment>
    <BaseStyles />
    <Select {...args} />
  </Fragment>
);

export const Primary = Template.bind({});
Primary.args = {
  options: [
    { name: "Thawan Cavalcante", value: "thawan" },
    { name: "Gabriel Campos", value: "gabriel" },
    { name: "Igor Araujo", value: "igor" },
    { name: "Felipe Gontijo", value: "felipe" },
  ],
};
`,locationsMap:{primary:{startLoc:{col:48,line:13},endLoc:{col:1,line:18},startBody:{col:48,line:13},endBody:{col:1,line:18}}}}},title:"SELECTs/Select",component:r,argTypes:g},w=e=>i(o.exports.Fragment,{children:[a(b,{}),a(r,{...e})]}),O=w.bind({});O.args={options:[{name:"Thawan Cavalcante",value:"thawan"},{name:"Gabriel Campos",value:"gabriel"},{name:"Igor Araujo",value:"igor"},{name:"Felipe Gontijo",value:"felipe"}]};const A=["Primary"];export{O as Primary,A as __namedExportsOrder,N as default};
//# sourceMappingURL=Select.stories.5c65fb01.js.map
