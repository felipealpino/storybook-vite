import{r as i,R as v,j as t,a as l}from"./jsx-runtime.48533e16.js";import{s as d,C,B as _}from"./index.235f6fa3.js";import{h as S}from"./hideArgTypes.a90ae262.js";import"./iframe.668864a1.js";const D=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,A=d.div`
  height: ${({height:r})=>`${r}px`};
  width: ${({width:r})=>`${r}px`};
  text-align: center;
  position: relative;
`,R=d.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-radius: 1rem;
  border-style: dashed;
  background: ${({backgroundColor:r})=>r};
  border-color: black;

  > div {
    p {
      color: black;
      margin-bottom: 0.5rem;
    }
    button {
      color: black;
      text-decoration: underline;
    }
  }

  transition: filter 0.1s;

  ${({isDragActive:r})=>r&&C`
      filter: brightness(0.8);
    `}
`,k=d.button`
  padding: 0.25rem;
  font-size: 1rem;
  border: none;
  background: transparent;
  margin-bottom: 1rem;

  &:hover {
    text-decoration-line: underline;
  }
`,T=d.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`,s=({width:r=400,height:h=200,handleUploadCallback:p,maxSize:a,validTypes:n,backgroundColor:b="#FFFFFF"})=>{const[f,g]=i.exports.useState(!1),y=v.useRef(null),x=()=>{var e;(e=y.current)==null||e.click()},c=e=>{e.preventDefault(),e.stopPropagation(),g(e.type==="dragenter"||e.type==="dragover")},m=i.exports.useCallback(e=>Array.from(e).map(o=>a&&o.size>a?{file:o,isValid:!1,invalidReason:"invalid file size"}:n&&!n.includes(o.type)?{file:o,isValid:!1,invalidReason:"invalid file type"}:{file:o,isValid:!0,invalidReason:null}),[a,n]),F=i.exports.useCallback(e=>{if(e.preventDefault(),e.stopPropagation(),g(!1),!e.dataTransfer.files||!e.dataTransfer.files[0])return;const u=m(e.dataTransfer.files);p(u)},[p,m]),U=i.exports.useCallback(e=>{if(e.preventDefault(),!e.target.files||!e.target.files[0])return;const u=m(e.target.files);p(u)},[p,m]);return t(D,{className:"container-uploader",children:l(A,{width:r,height:h,className:"file-uploader-container",onDragEnter:e=>c(e),children:[t("input",{multiple:!0,type:"file",ref:y,style:{display:"none"},accept:"image/jpeg, image/jpg, image/png",onChange:e=>U(e)}),t(R,{backgroundColor:b,isDragActive:f,children:l("div",{children:[t("p",{children:"Drag and drop your files here or"}),t(k,{onClick:x,children:"Upload a file"}),n&&l("p",{children:["Valid formats: ",n.map(e=>e+" ")]}),a?l("p",{children:["Max Size: ",a]}):""]})}),f&&t(T,{onDrop:e=>F(e),onDragEnter:e=>c(e),onDragLeave:e=>c(e),onDragOver:e=>c(e)})]})})};try{s.displayName="Uploader",s.__docgenInfo={description:"",displayName:"Uploader",props:{handleUploadCallback:{defaultValue:null,description:"",name:"handleUploadCallback",required:!0,type:{name:"(files: IUploaderResponde[]) => void"}},backgroundColor:{defaultValue:{value:"#FFFFFF"},description:"",name:"backgroundColor",required:!1,type:{name:"string"}},validTypes:{defaultValue:null,description:"",name:"validTypes",required:!1,type:{name:"string[]"}},maxSize:{defaultValue:null,description:"",name:"maxSize",required:!1,type:{name:"number"}},height:{defaultValue:{value:"200"},description:"",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:{value:"400"},description:"",name:"width",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Uploader/index.tsx#Uploader"]={docgenInfo:s.__docgenInfo,name:"Uploader",path:"src/components/Uploader/index.tsx#Uploader"})}catch{}const P={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { Uploader } from ".";
import { hideArgs } from "../../stories/hideArgTypes";
import { BaseStyles } from "../BaseStyles";

export default {
  title: "UPLOADER/Uploader",
  component: Uploader,
  argTypes: hideArgs,
} as ComponentMeta<typeof Uploader>;

const Template: ComponentStory<typeof Uploader> = (args) => (
  <Fragment>
    <BaseStyles />
    <Uploader {...args} />
  </Fragment>
);

export const Primary = Template.bind({});

Primary.args = {
  validTypes: ["image/png", "image/jpeg"],
  maxSize: undefined,
};
`,locationsMap:{primary:{startLoc:{col:50,line:13},endLoc:{col:1,line:18},startBody:{col:50,line:13},endBody:{col:1,line:18}}}}},title:"UPLOADER/Uploader",component:s,argTypes:S},V=r=>l(i.exports.Fragment,{children:[t(_,{}),t(s,{...r})]}),B=V.bind({});B.args={validTypes:["image/png","image/jpeg"],maxSize:void 0};const q=["Primary"];export{B as Primary,q as __namedExportsOrder,P as default};
//# sourceMappingURL=Uploader.stories.f935b431.js.map
