import{j as s}from"./jsx-runtime-AgcCsxC8.js";import{T as L,D as t}from"./Task.stories-BH8ycuY3.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";const c=({loading:r=!1,tasks:l,onPinTask:D,onArchiveTask:y})=>{const _={onPinTask:D,onArchiveTask:y},a=s.jsxs("div",{className:"loading-item",children:[s.jsx("span",{className:"glow-checkbox"}),s.jsxs("span",{className:"glow-text",children:[s.jsx("span",{children:"Loading"})," ",s.jsx("span",{children:"cool"})," ",s.jsx("span",{children:"state"})]})]});if(r)return s.jsxs("div",{className:"list-items","data-testid":"loading",children:[a,a,a,a,a,a]},"loading");if(l.length===0)return s.jsx("div",{className:"list-items","data-testid":"empty",children:s.jsxs("div",{className:"wrapper-message",children:[s.jsx("span",{className:"icon-check"}),s.jsx("p",{className:"title-message",children:"You have no tasks"}),s.jsx("p",{className:"subtitle-message",children:"Sit back and relax"})]})},"empty");const v=[...l.filter(e=>e.state==="TASK_PINNED"),...l.filter(e=>e.state!=="TASK_PINNED")];return s.jsx("div",{className:"list-items",children:v.map(e=>s.jsx(L,{task:e,..._},e.id))})};try{c.displayName="TaskList",c.__docgenInfo={description:"",displayName:"TaskList",props:{loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},tasks:{defaultValue:null,description:"",name:"tasks",required:!0,type:{name:"TaskInterface[]"}},onPinTask:{defaultValue:null,description:"",name:"onPinTask",required:!0,type:{name:"(id: string) => void"}},onArchiveTask:{defaultValue:null,description:"",name:"onArchiveTask",required:!0,type:{name:"(id: string) => void"}}}}}catch{}const b={title:"Guide_Storybook/TaskList",component:c,tags:["autodocs"],parameters:{},decorators:[r=>(console.log(r()),s.jsx("div",{style:{padding:"3rem"},children:r()}))]},n={args:{tasks:[{...t.args.task,id:"1",title:"Task 1"},{...t.args.task,id:"2",title:"Task 2"},{...t.args.task,id:"3",title:"Task 3"},{...t.args.task,id:"4",title:"Task 4"},{...t.args.task,id:"5",title:"Task 5"},{...t.args.task,id:"6",title:"Task 6"}]}},o={args:{tasks:[...n.args.tasks.slice(0,5),{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]}},i={args:{tasks:[],loading:!0}},d={args:{...i.args,loading:!1}};var m,g,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  /* Args */
  args: {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in Task.stories.jsx.
    tasks: [{
      ...TaskStories.Default.args.task,
      id: "1",
      title: "Task 1"
    }, {
      ...TaskStories.Default.args.task,
      id: "2",
      title: "Task 2"
    }, {
      ...TaskStories.Default.args.task,
      id: "3",
      title: "Task 3"
    }, {
      ...TaskStories.Default.args.task,
      id: "4",
      title: "Task 4"
    }, {
      ...TaskStories.Default.args.task,
      id: "5",
      title: "Task 5"
    }, {
      ...TaskStories.Default.args.task,
      id: "6",
      title: "Task 6"
    }]
  }
}`,...(p=(g=n.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var k,u,T;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    tasks: [...Default.args!.tasks.slice(0, 5), {
      id: "6",
      title: "Task 6 (pinned)",
      state: "TASK_PINNED"
    }]
  }
}`,...(T=(u=o.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var h,f,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    tasks: [],
    loading: true
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var N,j,S;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false
  }
}`,...(S=(j=d.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const w=["Default","WithPinnedTasks","Loading","Empty"];export{n as Default,d as Empty,i as Loading,o as WithPinnedTasks,w as __namedExportsOrder,b as default};
