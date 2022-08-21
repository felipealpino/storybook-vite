import{r as c,j as o,a as l}from"./jsx-runtime.48533e16.js";import{A as i}from"./index.2cc5874f.js";import{h as y}from"./hideArgTypes.a90ae262.js";import{s as u,B as f}from"./index.235f6fa3.js";import"./iframe.668864a1.js";import"./index.esm.eb321859.js";const O=u.div`
  display: flex;
  flex-direction: column;
  gap: ${({gap:n})=>`${n}px`};
`,r=({gap:n=0,children:s})=>{const[d,m]=c.exports.useState(0),a=c.exports.useCallback(e=>{m(e)},[]),A=c.exports.useMemo(()=>{const e=s;let t;return e.length<=1?(t=[...e],t):(t=e.map((p,g)=>({...p,props:{index:g,handleSetCurrent:a,accordionCurent:d,...p.props}})),t)},[d,a,s]);return o(O,{gap:n,className:"accordions-list",children:A})};try{r.displayName="Accordions",r.__docgenInfo={description:"",displayName:"Accordions",props:{gap:{defaultValue:{value:"0"},description:"",name:"gap",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Accordions/index.tsx#Accordions"]={docgenInfo:r.__docgenInfo,name:"Accordions",path:"src/components/Accordion/Accordions/index.tsx#Accordions"})}catch{}const b={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { Accordion } from ".";
import { hideArgs } from "../../stories/hideArgTypes";
import { BaseStyles } from "../BaseStyles";
import { Accordions } from "./Accordions";

export default {
  title: "ACCORDIONS/Open one Acordion",
  component: Accordions,
  argTypes: hideArgs,
} as ComponentMeta<typeof Accordions>;

const Template: ComponentStory<typeof Accordions> = (args) => (
  <Fragment>
    <BaseStyles />
    <Accordions gap={args.gap}>
      <Accordion title="Accordion 1" status="primary">
        <div>oi</div>
      </Accordion>
      <Accordion title="Accordion 2" disabled status="secondary">
        <div>oi</div>
      </Accordion>
      <Accordion title="Accordion 3" status="tertiary">
        <div>oi</div>
      </Accordion>
    </Accordions>
  </Fragment>
);

export const OneOpen = Template.bind({});
OneOpen.args = {
  gap: 0,
};
`,locationsMap:{"one-open":{startLoc:{col:52,line:14},endLoc:{col:1,line:29},startBody:{col:52,line:14},endBody:{col:1,line:29}}}}},title:"ACCORDIONS/Open one Acordion",component:r,argTypes:y},S=n=>l(c.exports.Fragment,{children:[o(f,{}),l(r,{gap:n.gap,children:[o(i,{title:"Accordion 1",status:"primary",children:o("div",{children:"oi"})}),o(i,{title:"Accordion 2",disabled:!0,status:"secondary",children:o("div",{children:"oi"})}),o(i,{title:"Accordion 3",status:"tertiary",children:o("div",{children:"oi"})})]})]}),h=S.bind({});h.args={gap:0};const R=["OneOpen"];export{h as OneOpen,R as __namedExportsOrder,b as default};
//# sourceMappingURL=Accordions.stories.9b9ff447.js.map
