(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(58)}])},58:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return w}});var s=n(5893),t=n(9008),r=n.n(t);n(5675);var l=n(3750),o=n(7294);let c="http://localhost:3000/",i=async()=>{let e=await fetch("".concat(c,"api/employee")),a=await e.json();return a},d=async e=>{let a=await fetch("".concat(c,"api/employee/").concat(e)),n=await a.json();return n||{}},u=async e=>{try{console.log("Imprimiendo formDATA DESDE EL HELPER"),console.log(e);let a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},n=await fetch("".concat(c,"api/employee"),a),s=await n.json();return s}catch(e){return e}};async function m(e,a){let n={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)},s=await fetch("".concat(c,"api/employee/").concat(e),n),t=await s.json();return t}async function p(e){let a=await fetch("".concat(c,"api/employee/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}),n=await a.json();return n}var x=n(8767),h=n(1649),y=n(8877);function g(){let{isLoading:e,isError:a,data:n,error:t}=(0,x.useQuery)("employees",i);return e?(0,s.jsx)("div",{children:"Employee is Loading..."}):a?(0,s.jsxs)("div",{children:["Got Error ",t]}):(0,s.jsxs)("table",{className:" table-auto",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"bg-gray-800",children:[(0,s.jsx)("th",{className:"px-16 py-2",children:(0,s.jsx)("span",{className:"text-gray-200",children:"Name"})}),(0,s.jsx)("th",{className:"px-16 py-2",children:(0,s.jsx)("span",{className:"text-gray-200",children:"Email"})}),(0,s.jsx)("th",{className:"px-16 py-2",children:(0,s.jsx)("span",{className:"text-gray-200",children:"Salary"})}),(0,s.jsx)("th",{className:"px-16 py-2",children:(0,s.jsx)("span",{className:"text-gray-200",children:"Birthday"})}),(0,s.jsx)("th",{className:"px-16 py-2",children:(0,s.jsx)("span",{className:"text-gray-200",children:"Status"})}),(0,s.jsx)("th",{className:"px-16 py-2",children:(0,s.jsx)("span",{className:"text-gray-200",children:"Action"})})]})}),(0,s.jsx)("tbody",{className:"bg-gray-200",children:n.employees.map((e,a)=>(0,o.createElement)(j,{...e,key:a}))})]})}function j(e){let{id:a,name:n,avatar:t,email:r,salary:o,birth_date:c,status:i}=e,d=(0,h.v9)(e=>e.app.client.toggleForm),u=(0,h.I0)();return(0,s.jsxs)("tr",{className:"bg-gray-50 text-center",children:[(0,s.jsxs)("td",{className:"px-5 py-2 flex flex-row items-center gap-3",children:[(0,s.jsx)("img",{src:t||"#",alt:"",className:"h-8 w-8 rounded-full object-cover"}),(0,s.jsx)("span",{className:"text-center ",children:n||"Unknown"})]}),(0,s.jsx)("td",{className:"px-10 py-2",children:(0,s.jsx)("span",{className:"",children:r||"Unknown"})}),(0,s.jsx)("td",{className:"px-10 py-2",children:(0,s.jsxs)("span",{className:"",children:["$ ",o||"Unknown"]})}),(0,s.jsx)("td",{className:"px-10 py-2",children:(0,s.jsx)("span",{className:"",children:c||"Unknown"})}),(0,s.jsx)("td",{className:"px-10 py-2",children:(0,s.jsx)("button",{className:"cursor",children:(0,s.jsx)("span",{className:"".concat("ACTIVE"==i?"bg-green-500":"bg-rose-500"," text-center ml-2 text-white py-1 px-5 rounded "),children:i||"Unknown"})})}),(0,s.jsxs)("td",{className:"px-10 py-2 flex justify-around gap-5",children:[(0,s.jsx)("button",{className:"cursor",onClick:()=>{u((0,y.A1)(a)),d&&u((0,y.Gx)(a))},children:(0,s.jsx)(l.HlX,{size:25,color:"rgb(34,197,94)"})}),(0,s.jsx)("button",{className:"cursor",onClick:()=>{d||u((0,y.mn)(a))},children:(0,s.jsx)(l.AuQ,{size:25,color:"rgb(244, 63, 94)"})})]})]})}function f(e){let{message:a}=e;return(0,s.jsx)("div",{className:"success container mx-auto",children:(0,s.jsxs)("div",{className:"flex justify-center mx-auto border border-yellow-200 bg-yellow-400 w-3/6 text-gray-900 text-md my-4 py-2 text-center",children:[(0,s.jsx)(l.T33,{size:25,color:"white"})," ",a]})})}function b(e){let{message:a}=e;return(0,s.jsx)("div",{className:"success container mx-auto",children:(0,s.jsxs)("div",{className:"flex justify-center mx-auto border border-red-200 bg-red-400 w-3/6 text-gray-900 text-md my-4 py-2 text-center",children:[(0,s.jsx)(l.T33,{size:25,color:"white"})," ",a]})})}let N=(e,a)=>({...e,[a.target.name]:a.target.value});function v(){let[e,a]=(0,o.useReducer)(N,{}),n=(0,h.v9)(e=>e.app.client.formId);return(0,s.jsx)("div",{className:"container mx-auto py-5",children:n?function(e){let{formId:a,formData:n,setFormData:t}=e,r=(0,x.useQueryClient)(),{isLoading:o,isError:c,data:u,error:p}=(0,x.useQuery)(["employees",a],()=>d(a)),h=(0,x.useMutation)(e=>m(a,e),{onSuccess:async e=>{r.prefetchQuery("employees",i)}});if(o)return(0,s.jsx)("div",{children:"Loading...!!!"});if(c)return(0,s.jsx)("div",{children:"Error"});let{name:y,avatar:g,salary:j,birth_date:N,email:v,status:w}=u.employees,[k,C]=y?y.split(" "):n,E=async e=>{var a,s;e.preventDefault();let t="".concat(null!==(a=n.firstname)&&void 0!==a?a:k," ").concat(null!==(s=n.lastname)&&void 0!==s?s:C),r=Object.assign({},u.employees,n,{name:t});await h.mutate(r)};return h.isLoading?(0,s.jsx)("div",{children:"Loading!!!"}):h.isError?(0,s.jsx)(b,{message:h.error.message}):h.isSuccess?(0,s.jsx)(f,{message:"Employee updated"}):(0,s.jsxs)("form",{className:"grid lg:grid-cols-2 w-4/6 gap-4",onSubmit:E,children:[(0,s.jsx)("div",{className:"input-type",children:(0,s.jsx)("input",{type:"text",name:"firstname",onChange:t,defaultValue:k,placeholder:"FirstName",className:"border w-full px-5 py-3 focus:outline-none round-md"})}),(0,s.jsx)("div",{className:"input-type",children:(0,s.jsx)("input",{type:"text",name:"lastname",onChange:t,defaultValue:C,placeholder:"LastName",className:"border w-full px-5 py-3 focus:outline-none round-md"})}),(0,s.jsx)("div",{className:"input-type",children:(0,s.jsx)("input",{type:"email",name:"email",onChange:t,defaultValue:v,placeholder:"Email",className:"border w-full px-5 py-3 focus:outline-none round-md"})}),(0,s.jsx)("div",{className:"input-type",children:(0,s.jsx)("input",{type:"text",name:"salary",defaultValue:j,onChange:t,placeholder:"Salary",className:"border w-full px-5 py-3 focus:outline-none round-md"})}),(0,s.jsx)("div",{className:"input-type",children:(0,s.jsx)("input",{type:"date",name:"birth_date",defaultValue:N,onChange:t,placeholder:"Salary",className:"border px-5 py-3 focus:outline-none round-md"})}),(0,s.jsxs)("div",{className:"flex gap-10 items-center",children:[(0,s.jsxs)("div",{className:"form-check",children:[(0,s.jsx)("input",{type:"radio",name:"status",value:"ACTIVE",defaultChecked:"ACTIVE"===w,className:"form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer ",id:"radioDefault1",onChange:t}),(0,s.jsx)("label",{htmlFor:"radioDefault1",className:"inline-block text-gray-800 ",children:"Active "})]}),(0,s.jsxs)("div",{className:"form-check",children:[(0,s.jsx)("input",{type:"radio",name:"status",value:"INACTIVE",defaultChecked:"INACTIVE"===w,className:"form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer ",id:"radioDefault2",onChange:t}),(0,s.jsx)("label",{htmlFor:"radioDefault2",className:"inline-block text-gray-800 ",children:"Inactive "})]})]}),(0,s.jsxs)("button",{className:"flex justify-center text-md w-2/6 bg-yellow-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500",children:[(0,s.jsx)("span",{className:"px-1",children:(0,s.jsx)(l.HlX,{size:25})})," Update"]})]})}({formId:n,formData:e,setFormData:a}):function(e){let{formData:a,setFormData:n}=e,t=(0,x.useQueryClient)(),r=(0,x.useMutation)(u,{onSuccess:()=>{t.prefetchQuery("employees",i)}});return r.isLoading?(0,s.jsx)("div",{children:"Loading!!!"}):r.isError?(0,s.jsx)(b,{message:r.error.message}):r.isSuccess?(0,s.jsx)(f,{message:"Add Successfully"}):(0,s.jsxs)("form",{className:"grid lg:grid-cols-2 w-4/6 gap-4",onSubmit:e=>{if(e.preventDefault(),0===Object.keys(a).length)return console.log("Don't have Form Data");let{firstname:n,lastname:s,email:t,salary:l,birth_date:o,status:c}=a,i={name:"".concat(n," ").concat(s),avatar:"https://randomuser.me/api/portraits/men/".concat(Math.floor(10*Math.random()),".jpg"),email:t,salary:l,birth_date:o,status:null!=c?c:"ACTIVE"};r.mutate(i)},children:[(0,s.jsx)("div",{className:"input-type",children:(0,s.jsx)("input",{type:"text",required:!0,name:"firstname",onChange:n,placeholder:"FirstName",className:"border w-full px-5 py-3 focus:outline-none round-md"})}),(0,s.jsx)("div",{className:"input-type",children:(0,s.jsx)("input",{type:"text",name:"lastname",required:!0,onChange:n,placeholder:"LastName",className:"border w-full px-5 py-3 focus:outline-none round-md"})}),(0,s.jsx)("div",{className:"input-type",children:(0,s.jsx)("input",{type:"email",name:"email",required:!0,onChange:n,placeholder:"Email",className:"border w-full px-5 py-3 focus:outline-none round-md"})}),(0,s.jsx)("div",{className:"input-type",children:(0,s.jsx)("input",{type:"number",name:"salary",required:!0,onChange:n,placeholder:"Salary",className:"border w-full px-5 py-3 focus:outline-none round-md"})}),(0,s.jsx)("div",{className:"input-type",children:(0,s.jsx)("input",{type:"date",name:"birth_date",required:!0,onChange:n,placeholder:"Salary",className:"border px-5 py-3 focus:outline-none round-md"})}),(0,s.jsxs)("div",{className:"flex gap-10 items-center",children:[(0,s.jsxs)("div",{className:"form-check",children:[(0,s.jsx)("input",{type:"radio",name:"status",value:"ACTIVE",className:"form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer ",id:"radioDefault1",onChange:n}),(0,s.jsx)("label",{htmlFor:"radioDefault1",className:"inline-block text-gray-800 ",children:"Active "})]}),(0,s.jsxs)("div",{className:"form-check",children:[(0,s.jsx)("input",{type:"radio",name:"status",value:"INACTIVE",className:"form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer ",id:"radioDefault2",onChange:n}),(0,s.jsx)("label",{htmlFor:"radioDefault2",className:"inline-block text-gray-800 ",children:"Inactive "})]})]}),(0,s.jsxs)("button",{className:"flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500",children:[(0,s.jsx)("span",{className:"px-1",children:(0,s.jsx)(l.L3d,{size:25})})," Add"]})]})}({formData:e,setFormData:a})})}function w(){let e=(0,h.v9)(e=>e.app.client.toggleForm),a=(0,h.v9)(e=>e.app.client.deleteId),n=(0,x.useQueryClient)(),t=(0,h.I0)(),o=async()=>{a&&(await p(a),await n.prefetchQuery("employees",i),await t((0,y.mn)(null)))},c=async()=>{await t((0,y.mn)(null))};return(0,s.jsxs)("section",{children:[(0,s.jsx)(r(),{children:(0,s.jsx)("title",{children:"Admin Employee"})}),(0,s.jsxs)("main",{className:"py-5",children:[(0,s.jsx)("h1",{className:"text-xl md:text-5xl text-center font-bold py-10",children:"Hello world!"}),(0,s.jsxs)("div",{className:"container mx-auto flex justify-between py-5 border-b",children:[(0,s.jsx)("div",{className:"left flex gap-3",children:(0,s.jsxs)("button",{onClick:()=>{t((0,y.A1)())},className:"flex bg-indigo-600 text-white px-4 py-2 border rounded-md hover:bg-indigo-500 hover:border-indigo-500",children:[(0,s.jsx)("span",{className:"mr-2",children:(0,s.jsx)(l.IaE,{size:20})}),"Add Employee"]})}),a?function(e){let{deletehandler:a,cancelhandler:n}=e;return(0,s.jsxs)("div",{className:"flex gap-5",children:[(0,s.jsx)("button",{children:"Are you sure?"}),(0,s.jsxs)("button",{onClick:a,className:"flex bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-rose-500 hover:border-red-500 hover:text-gray-50",children:["Yes",(0,s.jsx)("span",{className:"px-1",children:(0,s.jsx)(l.z3f,{color:"rgb(255 255 255)",size:25})})]}),(0,s.jsxs)("button",{onClick:n,className:"flex bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-green-400 hover:border-green-500 hover:text-gray-50",children:["No",(0,s.jsx)("span",{className:"px-1",children:(0,s.jsx)(l.oFd,{color:"rgb(255 255 255)",size:25})})]})]})}({deletehandler:o,cancelhandler:c}):(0,s.jsx)(s.Fragment,{})]}),e?(0,s.jsx)(v,{}):(0,s.jsx)(s.Fragment,{}),(0,s.jsx)("div",{className:"container mx-auto",children:(0,s.jsx)(g,{})})]})]})}}},function(e){e.O(0,[13,275,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);