import{r,a as c,j as i}from"./jsx-runtime.9fa4431b.js";import{s as u,c as m}from"./index.bc275c18.js";import{F as f}from"./index.esm.a2218244.js";const p=u.div`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background: ${({status:e})=>m(e,400)};
  min-height: 3rem;
  width: inherit;
  opacity: ${({disabled:e})=>e?"0.5":"1"};

  .accordion-header {
    padding: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  }

  .accordion-info-text {
    > label {
      cursor: inherit;
    }
  }

  .accordion-icon {
    transition: 0.2s ease-in-out;
    transition-property: transform;
    transform: ${({isOpen:e})=>`rotate(${e?"-180deg":"0deg"})`};
    display: flex;

    svg {
      width: 25px;
      height: 25px;
    }
  }

  .accordion-content {
    overflow: hidden;
    background: #ffffff;
    padding: ${({isOpen:e})=>e?"1rem 0.7rem":"0rem 0.7rem"};
    max-height: ${({isOpen:e})=>e?"1000px":"0px"};
    transition-property: max-height, padding;
    transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    transition-duration: 500ms;
    .accordion-childrens {
      transition-duration: 300ms;
      transition-property: visibility, opacity;
      opacity: ${({isOpen:e})=>e?"1":"0"};
      visibility: ${({isOpen:e})=>e?"visible":"hidden"};
    }
  }
`,t=({status:e="basic",handleSetCurrent:a,...n})=>{const[d,o]=r.exports.useState(!1),s=r.exports.useCallback(()=>{o(l=>!l),a&&a(Number(n.index))},[a,n.index]);return r.exports.useEffect(()=>{(n.accordionCurent||n.accordionCurent==0)&&n.accordionCurent!=n.index&&o(!1)},[n.accordionCurent,n.index]),c(p,{...n,status:e,isOpen:d,className:`accordion-container ${n.className||""}`,children:[c("div",{className:"accordion-header",onClick:()=>!n.disabled&&s(),children:[i("div",{className:"accordion-info-text",children:i("label",{children:n.title})}),i("div",{className:"accordion-icon",children:i(f,{color:"#11182F"})})]}),n.children&&i("div",{className:"accordion-content",children:i("div",{className:"accordion-childrens",children:n.children})})]})};try{t.displayName="Accordion",t.__docgenInfo={description:"",displayName:"Accordion",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}},status:{defaultValue:{value:"basic"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"basic"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"quaternary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"info"'},{value:'"dark"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},handleSetCurrent:{defaultValue:null,description:"",name:"handleSetCurrent",required:!1,type:{name:"((index: number) => void)"}},accordionCurent:{defaultValue:null,description:"",name:"accordionCurent",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/index.tsx#Accordion"]={docgenInfo:t.__docgenInfo,name:"Accordion",path:"src/components/Accordion/index.tsx#Accordion"})}catch{}export{t as A};
//# sourceMappingURL=index.428f2e4c.js.map
