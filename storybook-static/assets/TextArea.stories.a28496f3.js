import{a as o,j as r,r as s}from"./jsx-runtime.48533e16.js";import{h as l}from"./hideArgTypes.a90ae262.js";import{s as i,c as n,B as d}from"./index.235f6fa3.js";import{I as m}from"./inputsErrorMessage.2147ed9d.js";import{I as u}from"./index.cec95c5c.js";import"./iframe.668864a1.js";import"./index.esm.eb321859.js";const c=i.div`
  opacity: ${a=>a.disabled?"0.5":"1"};

  textarea {
    box-sizing: border-box;
    border-radius: 4px;
    border: 2px solid ${a=>n(a.status,500)};
    outline: none;
    font-size: 15px;
    font-weight: 500;
    padding: 0.4375rem 1rem;
    background: #f7f9fc;
    transition: 0.1s ease-in-out;
    transition-property: border;
    text-overflow: ellipsis;
    resize: ${({resizable:a})=>a};
  }

  textarea:disabled {
    cursor: not-allowed;
  }

  span {
    display: block;
    color: ${n("danger",500)};
    font-size: 11px;
  }
`,t=({resizable:a="both",...e})=>o(c,{className:`textareaform-container ${e.className||""}`,status:e.status,resizable:a,disabled:e.disabled,children:[e.label&&r(u,{label:e.label,status:e.status,isRequired:e.required}),r("textarea",{className:"textarea-component-tag",...e,children:e.children}),e.error&&r(m,{error:e.error})]});try{t.displayName="TextArea",t.__docgenInfo={description:"",displayName:"TextArea",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"basic"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"quaternary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"info"'},{value:'"dark"'}]}},resizable:{defaultValue:{value:"both"},description:"",name:"resizable",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}},textAreaRef:{defaultValue:null,description:"",name:"textAreaRef",required:!1,type:{name:"RefObject<HTMLTextAreaElement>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/TextAreas/TextArea/index.tsx#TextArea"]={docgenInfo:t.__docgenInfo,name:"TextArea",path:"src/components/TextAreas/TextArea/index.tsx#TextArea"})}catch{}const _={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { hideArgs } from "../../stories/hideArgTypes";
import { BaseStyles } from "../BaseStyles";
import { TextArea } from "./TextArea";

export default {
  title: "TEXTAREA/TextArea",
  component: TextArea,
  argTypes: hideArgs,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <Fragment>
    <BaseStyles />
    <TextArea {...args} />
  </Fragment>
);

export const Primary = Template.bind({});

Primary.args = {};
`,locationsMap:{primary:{startLoc:{col:50,line:13},endLoc:{col:1,line:18},startBody:{col:50,line:13},endBody:{col:1,line:18}}}}},title:"TEXTAREA/TextArea",component:t,argTypes:l},p=a=>o(s.exports.Fragment,{children:[r(d,{}),r(t,{...a})]}),x=p.bind({});x.args={};const h=["Primary"];export{x as Primary,h as __namedExportsOrder,_ as default};
//# sourceMappingURL=TextArea.stories.a28496f3.js.map
