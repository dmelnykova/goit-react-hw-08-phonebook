"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[532],{3532:function(n,e,r){r.r(e),r.d(e,{default:function(){return K}});var t,o,i,a,c,l,s,u,d,m,x=r(5705),h=r(8007),p=r(168),f=r(7924),b=f.ZP.div(t||(t=(0,p.Z)(["\n    width: 400px;\n    margin-top: 50px;\n    margin-left: 50px;\n    padding: 15px;\n    border: 1px solid black;\n    border-radius: 20px;\n    background-color: whitesmoke;\n"]))),g=(0,f.ZP)(x.l0)(o||(o=(0,p.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n"]))),j=((0,f.ZP)(x.gN)(i||(i=(0,p.Z)(["\n    padding: 5px;\n"]))),(0,f.ZP)(x.Bc)(a||(a=(0,p.Z)(["\n    color: orange;\n    font-size: 24px;\n"]))),f.ZP.button(c||(c=(0,p.Z)(["\n    height: 35px;\n    background-color: tan;\n    border-radius: 20px;\n    transition: background-color 0.3s ease, color 0.5s ease;\n    &:hover,\n    &:focus {\n    color: white;\n    background-color: steelblue;\n    outline: none;}\n"])))),Z=r(4420),v=r(3553),k=function(n){return n.contacts.items},w=(0,v.P1)([k,function(n){return n.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),C=r(3634),P=r(7694),y=r(184),_=h.Ry().shape({name:h.Z_().min(3,"Too Short!").required("Required"),number:h.Z_().matches(/^(\d{2,}-\d{2,}-\d{2,}|\d{2,}-\d{2,}|\d{5,})$/,"Phone number must be min 5 numbers (1234567 or 123-45-67)").required("Required!")}),N=function(){var n=(0,Z.v9)(k),e=(0,Z.I0)();return(0,y.jsx)(b,{children:(0,y.jsx)(x.J9,{initialValues:{name:"",number:""},onSubmit:function(r,t){!function(r){n.some((function(n){return n.name.toLowerCase()===r.name.toLowerCase()}))?P.Report.warning("Contact has not been added.","".concat(r.name," is already in contacts.")):e((0,C.uK)(r))}(r),t.resetForm()},validationSchema:_,children:function(n){var e=n.values,r=n.handleChange;return(0,y.jsxs)(g,{children:[(0,y.jsx)("label",{children:"Name"}),(0,y.jsx)(x.gN,{id:"name",name:"name",placeholder:"Tom",value:e.name,onChange:r}),(0,y.jsx)(x.Bc,{name:"name",component:"span"}),(0,y.jsx)("label",{children:"Number"}),(0,y.jsx)(x.gN,{id:"number",name:"number",placeholder:"000-00-00",value:e.number,onChange:r}),(0,y.jsx)(x.Bc,{name:"number",component:"span"}),(0,y.jsx)(j,{type:"submit",children:"Add contact"})]})}})})},q=f.ZP.li(l||(l=(0,p.Z)(["\n  list-style: none;\n"]))),z=f.ZP.span(s||(s=(0,p.Z)(["\n  line-height: 48px;\n  padding-right: 12px;\n  font-size: 18px;\n"]))),L=f.ZP.button(u||(u=(0,p.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 24px;\n  height: 24px;\n  text-align: center;\n  font-size: 12px bold;\n  background-color: white;\n  border: transparent;\n  border-radius: 8px;\n  &:hover {\n    background-color: #ffffff;\n  }\n"]))),R=function(){var n=(0,Z.I0)(),e=(0,Z.v9)(w);return(0,y.jsx)("div",{children:(0,y.jsx)("ul",{children:e.map((function(e){var r=e.id,t=e.name,o=e.number;return(0,y.jsxs)(q,{children:[(0,y.jsxs)(z,{children:[t,":"]}),(0,y.jsx)(z,{children:o}),(0,y.jsx)(L,{onClick:function(){return n((0,C.GK)(r))},children:"Delete"})]},r)}))})})},B=f.ZP.div(d||(d=(0,p.Z)(["\n    display: inline-flex;\n    flex-direction: column;\n    width: 250px;\n    margin-left: 50px;\n    gap: 10px;\n    font-size: 18px;\n    font-weight: 500;\n"]))),I=r(1634),S=function(){var n=(0,Z.I0)();return(0,y.jsxs)(B,{children:["Filter contacts by name:",(0,y.jsx)("input",{name:"filter",type:"text",onChange:function(e){return n((0,I.M6)(e.target.value))}})]})},F=f.ZP.div(m||(m=(0,p.Z)(["\n  max-width: 70%;\n  background-color: ivory;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"])));function K(){return(0,y.jsxs)(F,{children:[(0,y.jsx)("h1",{children:"Phonebook"}),(0,y.jsx)(N,{}),(0,y.jsx)("h2",{children:"Contacts"}),(0,y.jsx)(S,{}),(0,y.jsx)(R,{})]})}}}]);
//# sourceMappingURL=532.9e1fec57.chunk.js.map