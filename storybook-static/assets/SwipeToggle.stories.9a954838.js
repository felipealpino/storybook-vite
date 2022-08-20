import{r,a as l,j as o}from"./jsx-runtime.9fa4431b.js";import{s as c,c as n,B as m}from"./index.bc275c18.js";import{h as g}from"./hideArgTypes.a90ae262.js";import"./iframe.0ce430a8.js";const u=c.label`
  position: relative;
  display: inline-block;
  width: 52px;
  height: 32px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({statusCheck:e,status:t,outline:a})=>e&&!a?n(t,500):e&&a?n(t,400):"rgba(143, 155, 179, 0.16)"};
    border: ${({statusCheck:e,status:t,outline:a})=>e&&!a?`1px solid ${n(t,500)}`:e&&a?`1px solid ${n(t,600)}`:"1px solid rgba(143, 155, 179, 1)"};
    border-radius: ${({rounded:e})=>e?"100px":"4px"};
    transition: 0.6s ease all;
    opacity: ${({disabled:e})=>e?"0.5":"1"};
  }

  .center-ball {
    position: absolute;
    content: "";
    height: 28px;
    width: 28px;
    background-color: white;
    transition: 0.4s;
    border-radius: ${({rounded:e})=>e?"100px":"4px"};
    margin: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};

    ${({statusCheck:e})=>e&&"-webkit-transform: translateX(20px)"};
    ${({statusCheck:e})=>e&&" -ms-transform: translateX(20px)"};
    ${({statusCheck:e})=>e&&"transform: translateX(20px)"};

    svg {
      width: 20px;
      height: 20px;
      color: ${({status:e,statusCheck:t})=>t?n(e,500):n("danger",500)};
    }

    .animated-icon-div {
      width: 18px;
      height: 18px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.4;

      .animated-icon {
        background-color: ${({status:e,statusCheck:t})=>t?n(e,500):n("danger","500")};
        height: 1.5px;
        width: 12px;
        border-radius: 8px;
        transform: ${({statusCheck:e})=>e?"rotate(-45deg)":"rotate(45deg)"};
        position: absolute;
        right: ${({statusCheck:e})=>e?"0px":"unset"};
        transition: 0.4s;

        &::after {
          content: "";
          background-color: ${({statusCheck:e,status:t})=>e?n(t,500):n("danger","500")};
          position: absolute;
          height: 1.5px;
          width: ${({statusCheck:e})=>e?"6px":"12px"};
          border-radius: ${({statusCheck:e})=>e?"8px 0px 0px 8px":"8px"};
          transform: rotate(90deg);
          left: ${({statusCheck:e})=>e?"-2.2px":"unset"};
          bottom: ${({statusCheck:e})=>e?"3px":"unset"};
          transition: 0.4s;
        }
      }
    }
  }
`,i=({handleOnChange:e,...t})=>{const[a,s]=r.exports.useState(!1),p=r.exports.useRef(null),d=r.exports.useCallback(()=>{e&&e(a)},[e,a]);return r.exports.useEffect(()=>{s(t.isChecked||!1)},[t.isChecked]),l(u,{...t,className:`swipe-toggle-container ${t.className||""}`,statusCheck:a,children:[o("input",{type:"checkbox",ref:p,onChange:d}),o("span",{className:"slider",onClick:()=>!t.disabled&&s(!a),children:o("div",{className:"center-ball",children:t.animatedIcon&&o("div",{className:"animated-icon-div",children:o("div",{className:"animated-icon"})})})})]})};try{i.displayName="SwipeToggle",i.__docgenInfo={description:"",displayName:"SwipeToggle",props:{rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}},animatedIcon:{defaultValue:null,description:"",name:"animatedIcon",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"basic"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"quaternary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"info"'},{value:'"dark"'}]}},outline:{defaultValue:null,description:"",name:"outline",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!1,type:{name:"boolean"}},handleOnChange:{defaultValue:null,description:"",name:"handleOnChange",required:!1,type:{name:"((stateCheckButton: boolean) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/SwipeToggle/index.tsx#SwipeToggle"]={docgenInfo:i.__docgenInfo,name:"SwipeToggle",path:"src/components/SwipeToggle/index.tsx#SwipeToggle"})}catch{}const w={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { SwipeToggle } from ".";
import { hideArgs } from "../../stories/hideArgTypes";
import { BaseStyles } from "../BaseStyles";

export default {
  title: "CHECKBOXES/SwipeToggle",
  component: SwipeToggle,
  argTypes: hideArgs,
} as ComponentMeta<typeof SwipeToggle>;

const Template: ComponentStory<typeof SwipeToggle> = (args) => (
  <Fragment>
    <BaseStyles />
    <SwipeToggle {...args} />
  </Fragment>
);

export const Primary = Template.bind({});

Primary.args = {};
`,locationsMap:{primary:{startLoc:{col:53,line:13},endLoc:{col:1,line:18},startBody:{col:53,line:13},endBody:{col:1,line:18}}}}},title:"CHECKBOXES/SwipeToggle",component:i,argTypes:g},f=e=>l(r.exports.Fragment,{children:[o(m,{}),o(i,{...e})]}),x=f.bind({});x.args={};const T=["Primary"];export{x as Primary,T as __namedExportsOrder,w as default};
//# sourceMappingURL=SwipeToggle.stories.9a954838.js.map
