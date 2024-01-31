"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[980],{4980:function(n,e,r){r.r(e),r.d(e,{default:function(){return J}});var t,o,a,i,c,u,s,d,l,m,p,x=r(2791),f=r(4420),b=r(3634),h=r(5705),Z=r(8007),g=r(168),v=r(7924),j=(0,v.ZP)(h.l0)(t||(t=(0,g.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n"]))),y=(0,v.ZP)(h.gN)(o||(o=(0,g.Z)(["\n    font-size: 25px;\n    padding: 8px;\n    border: 2px solid #4078a5;\n    border-radius: 8px;\n"]))),P=(0,v.ZP)(h.Bc)(a||(a=(0,g.Z)(["\n    color: red;\n    font-size: 20px;\n"]))),k=v.ZP.button(i||(i=(0,g.Z)(["\n    background-color: #4078a5;\n    color: white;\n    padding: 10px;\n    border-radius: 6px;\n    cursor: pointer;\n    margin-top: 6px;\n    font-size: 22px;\n    border: none;\n\n    &:hover {\n        background-color: black;\n    }\n"]))),w=r(3553),C=function(n){return n.contacts.items},z=(0,w.P1)([C,function(n){return n.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),F=r(5218),S=r(184),_=Z.Ry().shape({name:Z.Z_().min(3,"Too Short!").required("Required"),number:Z.Z_().matches(/^(\d{2,}-\d{2,}-\d{2,}|\d{2,}-\d{2,}|\d{5,})$/,"Phone number must be min 5 numbers (1234567 or 123-45-67)").required("Required!")}),q=function(){var n=(0,f.v9)(C),e=(0,f.I0)();return(0,S.jsx)(h.J9,{initialValues:{name:"",number:""},validationSchema:_,onSubmit:function(r,t){!function(n,e){var r=n.some((function(n){return n.name.toLowerCase()===e.name.toLowerCase()})),t=n.some((function(n){return n.number===e.number}));return r?(F.ZP.error("'".concat(e.name,"' is already in contacts.")),!0):!!t&&(F.ZP.error("Number '".concat(e.number,"' is already saved under the name '").concat(e.name,"'")),!0)}(n,r)?e((0,b.uK)(r)):alert("".concat(r.name," is already in contacts.")),t.resetForm()},children:function(n){var e=n.values,r=n.handleChange,t=n.handleSubmit;return(0,S.jsxs)(j,{onSubmit:t,children:[(0,S.jsx)(y,{type:"text",id:"name",name:"name",placeholder:"Name",value:e.name,onChange:r}),(0,S.jsx)(P,{name:"name",component:"span"}),(0,S.jsx)(y,{type:"text",id:"number",name:"number",placeholder:"Number",value:e.number,onChange:r}),(0,S.jsx)(P,{name:"number",component:"span"}),(0,S.jsx)(k,{type:"submit",children:"Add contact"})]})}})},I=v.ZP.p(c||(c=(0,g.Z)(["\n  font-size: 24px;\n"]))),L=v.ZP.li(u||(u=(0,g.Z)(["\n    display: flex;\n    gap: 18px;\n    margin-bottom: 18px;\n    font-size: 20px;\n    font-weight: 700;\n    align-items: center;\n"]))),N=v.ZP.button(s||(s=(0,g.Z)(["\n    font-size: 18px;\n    border-radius: 4px;\n    border: 1px solid #8fbcbc;\n    background-color: #8fbcbc; \n    transition: background-color 0.3s ease, color 0.5s ease;\n    &:hover,\n    &:focus {\n    color: white;\n    background-color: red;\n    }\n"]))),R=function(){var n=(0,f.I0)(),e=(0,f.v9)(z);return(0,S.jsx)("div",{children:(0,S.jsx)("ul",{children:e.map((function(e){var r=e.id,t=e.name,o=e.number;return(0,S.jsxs)(L,{children:[(0,S.jsxs)(I,{children:[t,":"]}),(0,S.jsx)(I,{children:o}),(0,S.jsx)(N,{onClick:function(){return n((0,b.GK)(r))},children:"Delete"})]},r)}))})})},K=v.ZP.div(d||(d=(0,g.Z)(["\n    width: 250px;\n    font-size: 22px;\n    margin-bottom: 24px;\n"]))),A=v.ZP.input(l||(l=(0,g.Z)(["\n    font-size: 20px;\n    padding: 10px;\n    border: 1px solid #2F4F4F;\n    border-radius: 8px;\n    height: 34px;\n    width: 470px;\n    margin-top: 6px;\n    background-color: #f7fafa;\n"]))),B=r(1634),D=function(){var n=(0,f.v9)((function(n){return n.filter})),e=(0,f.I0)();return(0,S.jsxs)(K,{children:["Filter contacts by name:",(0,S.jsx)(A,{name:"filter",type:"text",placeholder:"Search",value:n,onChange:function(n){return e((0,B.M6)(n.target.value))}})]})},E=v.ZP.div(m||(m=(0,g.Z)(["\n  margin-top: 70px;\n  display: flex;\n  justify-content: space-evenly;\n"]))),G=v.ZP.div(p||(p=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n"])));function J(){var n=(0,f.I0)();return(0,x.useEffect)((function(){n((0,b.yF)())}),[n]),(0,S.jsxs)(E,{children:[(0,S.jsx)(q,{}),(0,S.jsxs)(G,{children:[(0,S.jsx)(D,{}),(0,S.jsx)(R,{})]})]})}}}]);
//# sourceMappingURL=980.ae87f269.chunk.js.map