import{r as l,a,j as t}from"./jsx-runtime.48533e16.js";import{I as p}from"./inputsErrorMessage.2147ed9d.js";import{s as h,c as s,B as f}from"./index.235f6fa3.js";import{a as b}from"./index.esm.eb321859.js";import{I as x}from"./index.cec95c5c.js";import{h as y}from"./hideArgTypes.a90ae262.js";import"./iframe.668864a1.js";const C=h.div`
  width: max-content;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    opacity: ${e=>e.disabled?"0.5":"1"};

    .container-input {
      background: ${({status:e})=>s(e,400)};
      border: 2px solid ${({status:e})=>s(e,600)};
      width: 30px;
      height: 30px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: ${({semiRounded:e})=>e?"4px":"0px"};

      > svg {
        width: 25px;
        height: 25px;
        color: ${({status:e})=>s(e,900)};
      }

      input[type='checkbox'] {
        cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
        background: transparent;
        width: inherit;
        height: inherit;
        margin: 0;
        opacity: 0;
        position: absolute;
      }
    }
  }
`,n=({icon:e,semiRounded:c,...r})=>{const[o,d]=l.exports.useState(r.defaultChecked||!1),u=l.exports.useCallback(i=>{const m=i.target.checked;d(m)},[]);return a(C,{className:"checkbox-container",...r,semiRounded:c,children:[a("div",{children:[a("div",{className:"container-input",children:[o&&e&&t(e,{}),o&&!e&&t(b,{}),t("input",{...r,defaultChecked:o,type:"checkbox",onChange:i=>u(i)})]}),r.label&&t(x,{label:r.label,status:r.status,isRequired:r.required})]}),r.error&&t(p,{error:r.error})]})};try{n.displayName="Checkbox",n.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"basic"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"quaternary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"info"'},{value:'"dark"'}]}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},semiRounded:{defaultValue:null,description:"",name:"semiRounded",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ComponentType<IconBaseProps>"}},iconcolor:{defaultValue:null,description:"",name:"iconcolor",required:!1,type:{name:"string"}},checkboxRef:{defaultValue:null,description:"",name:"checkboxRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Checkboxes/Checkbox/index.tsx#Checkbox"]={docgenInfo:n.__docgenInfo,name:"Checkbox",path:"src/components/Checkboxes/Checkbox/index.tsx#Checkbox"})}catch{}const O={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { FiTrash2 } from "react-icons/fi";
import { BaseStyles } from "../BaseStyles";
import { Fragment } from "react";
import { hideArgs } from "../../stories/hideArgTypes";

export default {
  title: "CHECKBOXes/Checkbox",
  component: Checkbox,
  argTypes: hideArgs,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Fragment>
    <BaseStyles />
    <Checkbox {...args} />
  </Fragment>
);

export const Primary = Template.bind({});
Primary.args = {
  semiRounded: true,
  disabled: false,
  label: "This is a Checkbox",
  error: "",
  status: "primary",
  required: true,
};
`,locationsMap:{primary:{startLoc:{col:50,line:14},endLoc:{col:1,line:19},startBody:{col:50,line:14},endBody:{col:1,line:19}}}}},title:"CHECKBOXes/Checkbox",component:n,argTypes:y},k=e=>a(l.exports.Fragment,{children:[t(f,{}),t(n,{...e})]}),g=k.bind({});g.args={semiRounded:!0,disabled:!1,label:"This is a Checkbox",error:"",status:"primary",required:!0};const V=["Primary"];export{g as Primary,V as __namedExportsOrder,O as default};
//# sourceMappingURL=Checkbox.stories.a2a05f96.js.map
