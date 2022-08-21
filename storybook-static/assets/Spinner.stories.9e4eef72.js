import{j as t,a as o,r as p}from"./jsx-runtime.48533e16.js";import{s,c as n,B as l}from"./index.235f6fa3.js";import{h as m}from"./hideArgTypes.a90ae262.js";import"./iframe.668864a1.js";const d=s.div`
  ${({fixed:e})=>e&&` 
    position: fixed;
    inset: 0;
    background: ${n("basic",600,!0)};
    display: flex;
    justify-content: center;
    align-items: center;
    `}
`,c=s.div`
  /* 12sm 16md 24lg 32xl */
  width: ${e=>`${e.size}px`};
  height: ${e=>`${e.size}px`};
  border: 4px solid ${({status:e})=>n(e,600)};
  border-top: 4px solid ${({status:e})=>n(e,300)};
  border-left: 4px solid ${({status:e})=>n(e,300)};
  border-right: 4px solid ${({status:e})=>n(e,300)};
  border-radius: 50%;
  animation: spin 1s cubic-bezier(1, 1, 1, 1) infinite;
  margin: auto;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`,r=({fixed:e=!0,size:i=30,...a})=>t(d,{className:`spinner-container ${a.className||""}`,fixed:e,...a,children:t(c,{className:"spinner-ball",status:a.status,size:i})});try{r.displayName="Spinner",r.__docgenInfo={description:"",displayName:"Spinner",props:{status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"basic"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"quaternary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"info"'},{value:'"dark"'}]}},fixed:{defaultValue:{value:"true"},description:"",name:"fixed",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"30"},description:"",name:"size",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/index.tsx#Spinner"]={docgenInfo:r.__docgenInfo,name:"Spinner",path:"src/components/Spinner/index.tsx#Spinner"})}catch{}const _={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { Spinner } from ".";
import { hideArgs } from "../../stories/hideArgTypes";
import { BaseStyles } from "../BaseStyles";

export default {
  title: "SPINNER/Spinner",
  component: Spinner,
  argTypes: hideArgs,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Fragment>
    <BaseStyles />
    <Spinner {...args} />
  </Fragment>
);

export const Primary = Template.bind({});

Primary.args = {};
`,locationsMap:{primary:{startLoc:{col:49,line:13},endLoc:{col:1,line:18},startBody:{col:49,line:13},endBody:{col:1,line:18}}}}},title:"SPINNER/Spinner",component:r,argTypes:m},u=e=>o(p.exports.Fragment,{children:[t(l,{}),t(r,{...e})]}),f=u.bind({});f.args={};const b=["Primary"];export{f as Primary,b as __namedExportsOrder,_ as default};
//# sourceMappingURL=Spinner.stories.9e4eef72.js.map
