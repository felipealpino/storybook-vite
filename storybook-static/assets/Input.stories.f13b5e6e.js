import{s as d,c as s,B as c}from"./index.bc275c18.js";import{r as u,a as l,j as a}from"./jsx-runtime.9fa4431b.js";import{I as m}from"./inputsErrorMessage.39bf7ffa.js";import{I as f}from"./index.fda96c3d.js";import{h as p}from"./hideArgTypes.a90ae262.js";import"./iframe.0ce430a8.js";import"./index.esm.a2218244.js";function g(n,t){let e=0,i="";for(let r=0;r<=t.length-1;++r)t[r]=="#"?n[e]&&(i+=n[e++]):t[r]&&(i+=t[r]);return i}const y=d.div`
  margin: 0.5rem 0px;
  opacity: ${n=>n.disabled?"0.5":"1"};

  .container-input-icon {
    position: relative;

    svg {
      width: 20px;
      height: 20px;
      position: absolute;
      z-index: 1;
      top: 50%;
      transform: translateY(-50%);
      right: 0.5rem;
    }

    input {
      width: 100%;
      height: 40px;
      outline: none;
      font-size: 15px;
      font-weight: 500;
      padding: 0.4375rem 1rem;
      border-radius: 4px;
      border: 2px solid
        ${({status:n,error:t})=>`${s(t?"danger":n,400)}`};
      background: ${s("basic",200)};
      transition: 0.1s ease-in-out;
      transition-property: border, background;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
    }

    input:focus {
      border: 2px solid ${({status:n})=>s(n,600)};
      background: ${s("basic",300)};
    }

    input:disabled {
      cursor: not-allowed;
    }
  }
`,o=({icon:n,onChange:t,...e})=>{const i=u.exports.useCallback(r=>{e.mask&&r.nativeEvent.inputType!=="deleteContentBackward"&&(r.target.value=g(r.target.value.replace(/[^a-zA-Z0-9]/g,""),e.mask)),t&&t(r)},[t,e.mask]);return l(y,{...e,className:`input-container ${e.className||""}`,children:[e.label&&a(f,{label:e.label,status:e.status,isRequired:e.required}),l("div",{className:"container-input-icon",children:[a("input",{...e,onChange:i,className:"input-component-tag"}),n&&a(n,{color:e.iconcolor,fill:e.iconfill||"transparent"})]}),e.error&&a(m,{error:e.error})]})};try{o.displayName="Input",o.__docgenInfo={description:"",displayName:"Input",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ComponentType<IconBaseProps>"}},iconcolor:{defaultValue:null,description:"",name:"iconcolor",required:!1,type:{name:"string"}},iconfill:{defaultValue:null,description:"",name:"iconfill",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"basic"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"quaternary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"info"'},{value:'"dark"'}]}},mask:{defaultValue:null,description:"",name:"mask",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Inputs/Input/index.tsx#Input"]={docgenInfo:o.__docgenInfo,name:"Input",path:"src/components/Inputs/Input/index.tsx#Input"})}catch{}console.log(p);const q={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BaseStyles } from "../BaseStyles";
import { Fragment } from "react";
import { Input } from "./Input";
import { hideArgs } from "../../stories/hideArgTypes";

console.log(hideArgs);
export default {
  title: "INPUTs/Input",
  component: Input,
  argTypes: hideArgs,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Fragment>
    <BaseStyles />
    <Input {...args} />
  </Fragment>
);

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  label: "This is a Input",
  error: "",
  status: "primary",
  required: true,
};
`,locationsMap:{primary:{startLoc:{col:47,line:14},endLoc:{col:1,line:19},startBody:{col:47,line:14},endBody:{col:1,line:19}}}}},title:"INPUTs/Input",component:o,argTypes:p},I=n=>l(u.exports.Fragment,{children:[a(c,{}),a(o,{...n})]}),b=I.bind({});b.args={disabled:!1,label:"This is a Input",error:"",status:"primary",required:!0};const C=["Primary"];export{b as Primary,C as __namedExportsOrder,q as default};
//# sourceMappingURL=Input.stories.f13b5e6e.js.map
