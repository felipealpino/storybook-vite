import{T}from"./index.e7f05550.js";import{s as b,c as d,B as f}from"./index.235f6fa3.js";import{r as l,a as m,j as r}from"./jsx-runtime.48533e16.js";import{h as y}from"./hideArgTypes.a90ae262.js";import"./index.esm.eb321859.js";import"./iframe.668864a1.js";const x=b.div`
  opacity: ${e=>e.disabled?"0.5":"1"};
  border-bottom: 3px solid ${d("basic",400)};
  padding: 10px 16px;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: ${({iconposition:e})=>e==="top"||e==="bottom"?"column":"row"};
`,u=({className:e,iconposition:a="left",icon:t,clickTabCallback:o,handleOnChangeTab:i,...s})=>{const n=l.exports.useCallback(()=>{i(s.index),o&&o()},[o,i,s.index]);return m(x,{handleOnChangeTab:i,iconposition:a,className:`tab-option ${e||""}`,onClick:n,...s,children:[t&&(a==="left"||a==="top")&&r(t,{color:d("basic",800),fill:s.iconfill||"transparent"}),r("span",{children:s.label}),t&&(a==="right"||a==="bottom")&&r(t,{color:d("basic",800),fill:s.iconfill||"transparent"})]})};try{u.displayName="Tab",u.__docgenInfo={description:"",displayName:"Tab",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},componentToRender:{defaultValue:null,description:"",name:"componentToRender",required:!1,type:{name:"any"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ComponentType<IconBaseProps>"}},iconposition:{defaultValue:{value:"left"},description:"",name:"iconposition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},iconfill:{defaultValue:null,description:"",name:"iconfill",required:!1,type:{name:"string"}},clickTabCallback:{defaultValue:null,description:"",name:"clickTabCallback",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"basic"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"quaternary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"info"'},{value:'"dark"'}]}},selectedTab:{defaultValue:null,description:"",name:"selectedTab",required:!0,type:{name:"number"}},handleOnChangeTab:{defaultValue:null,description:"",name:"handleOnChangeTab",required:!0,type:{name:"(clickedTab: number) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tab/index.tsx#Tab"]={docgenInfo:u.__docgenInfo,name:"Tab",path:"src/components/Tabs/Tab/index.tsx#Tab"})}catch{}const v=b.div`
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  .tab-options-list {
    min-height: 50px;
    font-weight: 600;
    user-select: none;
    display: flex;
    overflow-x: auto;
    padding-bottom: 2px;
    justify-content: ${({tabsPosition:e})=>e};
  }

  .selected {
    color: ${({status:e})=>d(e,600)};
    border-bottom: 3px solid ${({status:e})=>e&&d(e,600)};

    svg {
      color: ${({status:e})=>d(e,600)} !important;
    }
  }

  .rendered-components-container {
    .rendered-tab {
      display: none;
    }

    .rendered-tab.--show {
      display: block;
    }
  }
`,c=({className:e,...a})=>{const[t,o]=l.exports.useState(0);l.exports.useEffect(()=>{a.selectedTabIndex&&o(a.selectedTabIndex)},[a.selectedTabIndex]);const i=l.exports.useCallback(n=>{o(n)},[]),s=l.exports.useMemo(()=>{const n=a.tabs.find(p=>p.index===t);if(!n)throw new Error("TAB NOT FOUND");return n.componentToRender},[a.tabs,t]);return m(v,{className:`tabs-container ${e||""}`,...a,children:[r("ul",{className:"tab-options-list",children:a.tabs.map(n=>l.exports.createElement(u,{...n,key:n.index,className:`${t===n.index?"selected":""}`,selectedTab:t,handleOnChangeTab:p=>!n.disabled&&i(p),clickTabCallback:n.clickTabCallback}))}),m("div",{className:"rendered-components-container",children:[!a.shouldResetTabsStates&&a.tabs.map(n=>r("div",{className:`rendered-tab ${n.index===t?"--show":""}`,children:n.componentToRender},n.index)),a.shouldResetTabsStates&&s]})]})};try{c.displayName="Tabs",c.__docgenInfo={description:"",displayName:"Tabs",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"basic"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"quaternary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"info"'},{value:'"dark"'}]}},selectedTabIndex:{defaultValue:null,description:"",name:"selectedTabIndex",required:!1,type:{name:"number"}},handleOnChangeTab:{defaultValue:null,description:"",name:"handleOnChangeTab",required:!1,type:{name:"((selectedTabIndex: number) => void)"}},tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ITab[]"}},shouldResetTabsStates:{defaultValue:null,description:"",name:"shouldResetTabsStates",required:!1,type:{name:"boolean"}},tabsPosition:{defaultValue:null,description:"",name:"tabsPosition",required:!1,type:{name:"enum",value:[{value:'"flex-start"'},{value:'"flex-end"'},{value:'"space-around"'},{value:'"space-between"'},{value:'"space-evenly"'},{value:'"center"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs/index.tsx#Tabs"]={docgenInfo:c.__docgenInfo,name:"Tabs",path:"src/components/Tabs/Tabs/index.tsx#Tabs"})}catch{}const k={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "../../shared/styles";
import { BaseStyles } from "../BaseStyles";
import { Tabs } from "../Tabs/Tabs";
import { ITab } from "../Tabs/Tab";
import { Fragment } from "react";
import { hideArgs } from "../../stories/hideArgTypes";

export default {
  title: "TABS/Tabs",
  component: Tabs,
  argTypes: hideArgs,
} as ComponentMeta<typeof Tabs>;

const tabsToRender: ITab[] = [
  {
    label: "Home",
    index: 0,
    componentToRender: <Fragment />,
  },
  {
    label: "Products",
    index: 1,
    componentToRender: <Fragment />,
  },
  {
    label: "Graphics",
    index: 2,
    componentToRender: <Fragment />,
  },
];

const Template: ComponentStory<typeof Tabs> = (args) => (
  <ThemeProvider>
    <BaseStyles />
    <Tabs {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  tabs: tabsToRender,
};
`,locationsMap:{primary:{startLoc:{col:46,line:33},endLoc:{col:1,line:38},startBody:{col:46,line:33},endBody:{col:1,line:38}}}}},title:"TABS/Tabs",component:c,argTypes:y},g=[{label:"Home",index:0,componentToRender:r(l.exports.Fragment,{})},{label:"Products",index:1,componentToRender:r(l.exports.Fragment,{})},{label:"Graphics",index:2,componentToRender:r(l.exports.Fragment,{})}],h=e=>m(T,{children:[r(f,{}),r(c,{...e})]}),S=h.bind({});S.args={tabs:g};const A=["Primary"];export{S as Primary,A as __namedExportsOrder,k as default};
//# sourceMappingURL=Tabs.stories.ff3ab457.js.map
