import{r as p,a as l,j as e}from"./jsx-runtime.80f4563e.js";import{s as c,c as i,B as d}from"./index.30e3d514.js";import{h as u}from"./hideArgTypes.a90ae262.js";import"./iframe.4aa7385a.js";const f=c.div`
  position: relative;
  font-size: 10px;
  width: fit-content;

  .tooltip-box {
    position: absolute;
    font-size: 14px;
    background: ${({status:t})=>i(t,500)};
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    display: none;
    z-index: 4;
    white-space: nowrap;
    left: 50%;
    transform: translateX(-50%);

    /* tooltip show bottom  */
    ${({position:t})=>t==="bottom"&&`
        top: calc(100% + 5px)};
      `}

    /* tooltip show top  */
    ${({position:t})=>t==="top"&&`
        bottom: calc(100% + 5px)};
    `}
  }

  .tooltip-box {
    display: ${({show:t})=>t?"block":"none"};
    width: fit-content;
  }

  .tooltip-arrow {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;

    /* tooltip show bottom  */
    ${({position:t,status:o})=>t==="bottom"&&`
        top: -10px;
        border-color: transparent transparent ${i(o,500)} transparent;
    `}

    /* tooltip show top  */
    ${({position:t,status:o})=>t==="top"&&`
        bottom: -10px;
        border-color: ${i(o,500)} transparent transparent  transparent;
    `}
  }
`,a=({clickable:t=!1,status:o="danger",position:m="bottom",...n})=>{const[r,s]=p.exports.useState(!1);return console.log(r),l(f,{...n,position:m,status:o,show:r,className:`tooltip-container ${n.className||""}`,onMouseLeave:()=>!t&&s(!1),onMouseEnter:()=>!t&&s(!0),onClick:()=>t&&s(!r),children:[l("div",{className:"tooltip-box",children:[n.text,e("span",{className:"tooltip-arrow"})]}),e("div",{className:"tooltip-children",children:n.children})]})};try{a.displayName="Tooltip",a.__docgenInfo={description:"",displayName:"Tooltip",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},status:{defaultValue:{value:"danger"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"basic"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"quaternary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"info"'},{value:'"dark"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},position:{defaultValue:{value:"bottom"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},clickable:{defaultValue:{value:"false"},description:"",name:"clickable",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/index.tsx#Tooltip"]={docgenInfo:a.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/index.tsx#Tooltip"})}catch{}const v={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { Tooltip } from ".";
import { hideArgs } from "../../stories/hideArgTypes";
import { BaseStyles } from "../BaseStyles";
import { Button } from "../Button";

export default {
  title: "TOOLTIP/Tooltip",
  component: Tooltip,
  argTypes: hideArgs,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Fragment>
    <BaseStyles />
    <Tooltip {...args}>
      <h1 style={{ margin: "2rem" }}>Hover me</h1>
    </Tooltip>
  </Fragment>
);

export const Primary = Template.bind({});

Primary.args = {
  text: "I am a tooltip title",
};
`,locationsMap:{primary:{startLoc:{col:49,line:14},endLoc:{col:1,line:21},startBody:{col:49,line:14},endBody:{col:1,line:21}}}}},title:"TOOLTIP/Tooltip",component:a,argTypes:u},y=t=>l(p.exports.Fragment,{children:[e(d,{}),e(a,{...t,children:e("h1",{style:{margin:"2rem"},children:"Hover me"})})]}),T=y.bind({});T.args={text:"I am a tooltip title"};const S=["Primary"];export{T as Primary,S as __namedExportsOrder,v as default};
//# sourceMappingURL=Tooltip.stories.8cf0023d.js.map
