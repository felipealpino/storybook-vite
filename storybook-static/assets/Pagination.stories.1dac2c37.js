import{r,j as t,a as c}from"./jsx-runtime.9fa4431b.js";import{c as f,d as P}from"./index.esm.a2218244.js";import{s as y,c as s,B as x}from"./index.bc275c18.js";import{h}from"./hideArgTypes.a90ae262.js";import"./iframe.0ce430a8.js";const F=y.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;

  .pagination-content {
    display: flex;

    span {
      margin: auto;
      font-weight: 700;
    }

    .pagination-content-icon {
      cursor: pointer;
      margin: 0px 10px;
      transition: background-color 0.1s ease-in-out;
      background-color: ${({status:e})=>s(e,500)};
      border-radius: ${({rounded:e})=>e?"15px":"4px"};
      display: flex;
      transition: 0.1s ease-in-out;

      svg {
        width: 25px;
        height: 25px;
        color: ${({status:e})=>s(e,"Contrast")};
      }

      &:hover {
        background-color: ${({status:e})=>s(e,600)};
      }
    }
  }

  ${({isFirstPage:e})=>e&&`
    .pagination-content-icon.back {
      opacity: 0.3;
    }
  
  `}

  ${({isLastPage:e})=>e&&`
    .pagination-content-icon.forward {
      opacity: 0.3;
    }
  
  `}
`,i=({rounded:e=!0,callbackGetListData:o,...a})=>{const[u,l]=r.exports.useState(!0),[d,g]=r.exports.useState(!1),m=r.exports.useCallback(()=>{const n=Number(a.currentPage)-1;n+1===1&&l(!0),!(n<0)&&(g(!1),o(n))},[o,a.currentPage]),p=r.exports.useCallback(()=>{const n=Number(a.currentPage)+1;n+1===a.totalOfPages&&g(!0),!(n>=a.totalOfPages)&&(l(!1),o(n))},[o,a.currentPage,a.totalOfPages]);return t(F,{...a,callbackGetListData:o,isFirstPage:u,isLastPage:d,rounded:e,className:`pagination-container ${a.className||""}`,children:c("div",{className:"pagination-content",children:[t("label",{className:"pagination-content-icon back",onClick:m,children:t(f,{color:"#FFFFFF"})}),c("span",{className:"pagination-content-text",children:["P\xE1gina ",Number(a.currentPage)+1," de"," ",a.totalOfPages>0?a.totalOfPages:1]}),t("label",{className:"pagination-content-icon forward",onClick:p,children:t(P,{color:"#FFFFFF"})})]})})};try{i.displayName="Pagination",i.__docgenInfo={description:"",displayName:"Pagination",props:{totalOfPages:{defaultValue:null,description:"",name:"totalOfPages",required:!0,type:{name:"number"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"basic"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"quaternary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"info"'},{value:'"dark"'}]}},rounded:{defaultValue:{value:"true"},description:"",name:"rounded",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},callbackGetListData:{defaultValue:null,description:"",name:"callbackGetListData",required:!0,type:{name:"(page: number) => Promise<void>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/index.tsx#Pagination"]={docgenInfo:i.__docgenInfo,name:"Pagination",path:"src/components/Pagination/index.tsx#Pagination"})}catch{}const A={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { Pagination } from ".";
import { hideArgs } from "../../stories/hideArgTypes";
import { BaseStyles } from "../BaseStyles";

export default {
  title: "PAGINATION/Pagination",
  component: Pagination,
  argTypes: hideArgs,  
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Fragment>
    <BaseStyles />
    <Pagination {...args} />
  </Fragment>
);

export const Primary = Template.bind({});
Primary.args = {
  currentPage: 0,
  totalOfPages: 10,
};
`,locationsMap:{primary:{startLoc:{col:52,line:13},endLoc:{col:1,line:18},startBody:{col:52,line:13},endBody:{col:1,line:18}}}}},title:"PAGINATION/Pagination",component:i,argTypes:h},b=e=>c(r.exports.Fragment,{children:[t(x,{}),t(i,{...e})]}),v=b.bind({});v.args={currentPage:0,totalOfPages:10};const T=["Primary"];export{v as Primary,T as __namedExportsOrder,A as default};
//# sourceMappingURL=Pagination.stories.1dac2c37.js.map
