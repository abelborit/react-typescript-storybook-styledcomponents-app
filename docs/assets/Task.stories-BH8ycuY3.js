import{j as a}from"./jsx-runtime-AgcCsxC8.js";const o=({task:{id:e,title:c,state:n},onArchiveTask:g,onPinTask:h})=>a.jsxs("div",{className:`list-item ${n}`,children:[a.jsxs("label",{htmlFor:"checked","aria-label":`archiveTask-${e}`,className:"checkbox",children:[a.jsx("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:n==="TASK_ARCHIVED"}),a.jsx("span",{className:"checkbox-custom",onClick:()=>g(e)})]}),a.jsx("label",{htmlFor:"title","aria-label":c,className:"title",children:a.jsx("input",{type:"text",value:c,readOnly:!0,name:"title",placeholder:"Input title"})}),n!=="TASK_ARCHIVED"&&a.jsx("button",{className:"pin-button",onClick:()=>h(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:a.jsx("span",{className:"icon-star"})},`pinTask-${e}`)]});try{o.displayName="Task",o.__docgenInfo={description:"",displayName:"Task",props:{task:{defaultValue:null,description:"",name:"task",required:!0,type:{name:"TaskInterface"}},onArchiveTask:{defaultValue:null,description:"",name:"onArchiveTask",required:!0,type:{name:"(id: string) => void"}},onPinTask:{defaultValue:null,description:"",name:"onPinTask",required:!0,type:{name:"(id: string) => void"}}}}}catch{}const A={title:"Guide_Storybook/Task",component:o,tags:["autodocs"],parameters:{layout:"centered"}},s={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},t={args:{task:{...s.args.task,state:"TASK_PINNED"}}},r={args:{task:{...s.args.task,state:"TASK_ARCHIVED"}}};var i,l,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  /* Args */
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX"
    }
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,p,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED"
    }
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var k,T,_;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED"
    }
  }
}`,...(_=(T=r.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const x=["Default","Pinned","Archived"],y=Object.freeze(Object.defineProperty({__proto__:null,Archived:r,Default:s,Pinned:t,__namedExportsOrder:x,default:A},Symbol.toStringTag,{value:"Module"}));export{s as D,o as T,y as a};
