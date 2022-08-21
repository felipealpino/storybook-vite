import{r as o,a as d,j as n}from"./jsx-runtime.48533e16.js";import{h as m}from"./hideArgTypes.a90ae262.js";import{s,c as r,B as c}from"./index.235f6fa3.js";import{I as p}from"./index.cec95c5c.js";import"./iframe.668864a1.js";const y=s.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: ${e=>e.disabled?"0.5":"1"};
`,f=s.input`
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  width: ${e=>`${e.radioSize}px`};
  height: ${e=>`${e.radioSize}px`};
  border: 0.2rem solid ${e=>r(e.status,500)};
  border-radius: 50%;
  background: transparent;
  transition: 0.2s;
  transition-property: background, box-shadow;
  outline: none;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  margin: 0;

  &:hover {
    box-shadow: ${e=>e.disabled?"none":`0 0 0 0.3rem  ${r(e.status,200)}`};
  }

  /* &:focus {
    box-shadow: 0 0 0.5rem ${e=>r(e.status,200)};
  } */

  &:before {
    content: '';
    width: ${e=>`${(e.radioSize||30)/2}px`};
    height: ${e=>`${(e.radioSize||30)/2}px`};
    border-radius: 50%;
    background: ${e=>r(e.status,500)};
    transition: opacity 0.2s;
    opacity: 0;
    position: absolute;
  }
  &:checked {
    &:before {
      opacity: 1;
    }
  }
`,t=({handleOnCheck:e,radioSize:l=30,...a})=>{const u=o.exports.useCallback(i=>{e&&e(i)},[e]);return d(y,{disabled:a.disabled,children:[n(f,{radioSize:l,status:a.status,id:a.id,name:a.name,value:a.value,type:"radio",onChange:i=>u(i),disabled:a.disabled}),!!a.label&&n(p,{label:a.label,status:a.status,isRequired:a.required})]})};try{t.displayName="Radio",t.__docgenInfo={description:"",displayName:"Radio",props:{handleOnCheck:{defaultValue:null,description:"",name:"handleOnCheck",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"any"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"basic"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"quaternary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"info"'},{value:'"dark"'}]}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},radioSize:{defaultValue:{value:"30"},description:"",name:"radioSize",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Radios/Radio/index.tsx#Radio"]={docgenInfo:t.__docgenInfo,name:"Radio",path:"src/components/Radios/Radio/index.tsx#Radio"})}catch{}const _={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { hideArgs } from "../../stories/hideArgTypes";
import { BaseStyles } from "../BaseStyles";
import { Radio } from "./Radio";

export default {
  title: "RADIO/Radio",
  component: Radio,
  argTypes: hideArgs,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => (
  <Fragment>
    <BaseStyles />
    <Radio {...args} />
    <br />
    <Radio {...args} />
  </Fragment>
);

export const Primary = Template.bind({});
Primary.args = {
  name: "radio1",
};
`,locationsMap:{primary:{startLoc:{col:47,line:13},endLoc:{col:1,line:20},startBody:{col:47,line:13},endBody:{col:1,line:20}}}}},title:"RADIO/Radio",component:t,argTypes:m},b=e=>d(o.exports.Fragment,{children:[n(c,{}),n(t,{...e}),n("br",{}),n(t,{...e})]}),g=b.bind({});g.args={name:"radio1"};const $=["Primary"];export{g as Primary,$ as __namedExportsOrder,_ as default};
//# sourceMappingURL=Radio.stories.936c8127.js.map
