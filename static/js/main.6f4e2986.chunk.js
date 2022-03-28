(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{156:function(e,t,c){},162:function(e,t,c){},163:function(e,t,c){},182:function(e,t,c){},310:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(33),s=c.n(a),i=(c(156),c(26)),o=c(45),d=c(68),j=c(4),l=c.n(j),b=c(15),u=c(2);function O(e){var t=e.link,c=e.label,n=e.icon,r=e.shouldMatchExactHref,a=Object(b.g)().pathname,s=!1;return r&&a===t&&(s=!0),!r&&a.includes(t)&&(s=!0),Object(u.jsxs)(i.b,{to:t,className:l()("nav-link","text-white",{active:s}),children:[n,Object(u.jsx)("span",{className:"ms-2",children:c})]})}c(162);var h=[{label:"Produtos",link:"/",icon:Object(u.jsx)(o.d,{size:20})},{label:"Pedidos",link:"/orders",icon:Object(u.jsx)(d.a,{size:20})}];function x(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(i.b,{to:"/",className:"text-white text-decoration-none logo",children:[Object(u.jsx)(o.c,{size:28}),Object(u.jsx)("span",{className:"fs-4 ms-1",children:"Pizzas"})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("ul",{className:"nav nav-pills flex-column",children:h.map((function(e){return Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(O,{label:e.label,link:e.link,icon:e.icon,shouldMatchExactHref:"Produtos"===e.label})},e.label)}))})]})}c(163);function m(){return Object(u.jsx)("div",{className:"sidebar bg-dark text-white p-3",children:Object(u.jsx)(x,{})})}var p=c(8),f=c.n(p),v=c(16),g=c(6),N=c(321),y=c(143),C=c.n(y).a.create({baseURL:"https://pizzariaserver.herokuapp.com/"});function k(e){var t=e.title;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h4",{className:"mt-4",children:t}),Object(u.jsx)("hr",{})]})}var w=c(315);c(182);function P(e){var t=e.products,c=e.onEdit,n=e.onDelete;return Object(u.jsxs)(w.a,{striped:!0,bordered:!0,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Imagem"}),Object(u.jsx)("th",{children:"Nome"}),Object(u.jsx)("th",{children:"Pre\xe7o"}),Object(u.jsx)("th",{children:"Ativo"}),Object(u.jsx)("th",{children:"A\xe7\xf5es"})]})}),Object(u.jsxs)("tbody",{children:[0===t.length&&Object(u.jsx)("tr",{children:Object(u.jsx)("td",{className:"text-center",colSpan:5,children:"Nenhum produto cadastrado \ud83c\udf55"})}),t.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"product-image",children:Object(u.jsx)("img",{src:e.image,alt:e.name})}),Object(u.jsxs)("td",{children:[Object(u.jsx)("strong",{children:e.name}),Object(u.jsx)("p",{className:"fs-6 fw-light",children:e.description})]}),Object(u.jsx)("td",{children:new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e.price)}),Object(u.jsx)("td",{className:l()({"text-success":e.active},{"text-danger":!e.active}),children:e.active?"Sim":"N\xe3o"}),Object(u.jsx)("td",{children:Object(u.jsxs)("div",{className:"actions",children:[Object(u.jsx)(N.a,{onClick:function(){return c(e._id)},variant:"warning",size:"sm",children:Object(u.jsx)(o.b,{size:18})}),Object(u.jsx)(N.a,{onClick:function(){return n(e._id)},variant:"danger",size:"sm",children:Object(u.jsx)(o.a,{size:18})})]})})]},e._id)}))]})]})}var z=c(91),E=c.n(z),I=E.a.mixin({toast:!0,position:"top-right",iconColor:"white",customClass:{popup:"colored-toast"},showConfirmButton:!1,timer:5e3,timerProgressBar:!0,showCloseButton:!0}),S=E.a.mixin({title:"Aten\xe7\xe3o",icon:"warning",showCancelButton:!0,confirmButtonColor:"#34c38f",cancelButtonColor:"#f46a6a",confirmButtonText:"Sim, quero remover!",cancelButtonText:"Cancelar"});function D(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),c=t[0],r=t[1],a=Object(b.f)();function s(){return(s=Object(v.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.fire({text:"Deseja realmente deletar o produto ?"});case 2:if(!e.sent.value){e.next=9;break}return e.next=6,C.delete("/pizzas/".concat(t));case 6:return r(c.filter((function(e){return e._id!==t}))),e.next=9,I.fire({icon:"success",title:"Produto removido com sucesso"});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){C.get("pizzas").then((function(e){r(e.data)}))}),[]),Object(u.jsxs)("section",{id:"page-products",children:[Object(u.jsx)(k,{title:"Produtos"}),Object(u.jsx)(N.a,{onClick:function(){a.push("/products/new")},className:"mb-3",children:"Adicionar Produto"}),Object(u.jsx)(P,{onEdit:function(e){a.push("/products/".concat(e))},onDelete:function(e){return s.apply(this,arguments)},products:c})]})}var L=c(3),B=c(319),A=c(34),F=c(73),G=c(27),R=G.a({image:G.b().required("Imagem \xe9 obrigat\xf3ria"),name:G.b().required("Nome \xe9 obrigat\xf3rio"),price:G.b().required("Pre\xe7o \xe9 obrigat\xf3rio"),description:G.b().required("Descri\xe7\xe3o \xe9 obrigat\xf3ria")});function q(){var e,t,c,r,a=Object(b.f)(),s=Object(n.useState)(!0),i=Object(g.a)(s,2),o=i[0],d=i[1],j=Object(A.d)({resolver:Object(F.a)(R)}),l=j.register,O=j.handleSubmit,h=j.formState.errors;function x(){return(x=Object(v.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.post("pizzas",Object(L.a)(Object(L.a)({},t),{},{active:o}));case 2:return a.push("/"),e.next=5,I.fire({icon:"success",title:"Produto adicionado com sucesso"});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.jsxs)("section",{id:"page-products-add",children:[Object(u.jsx)(k,{title:"Adicionar Produto"}),Object(u.jsxs)(B.a,{onSubmit:O((function(e){return x.apply(this,arguments)})),children:[Object(u.jsxs)(B.a.Group,{className:"mb-3",children:[Object(u.jsx)(B.a.Label,{children:"Imagem"}),Object(u.jsx)(B.a.Control,Object(L.a)({type:"text",isInvalid:!!h.image},l("image"))),Object(u.jsx)(B.a.Control.Feedback,{type:"invalid",children:null===(e=h.image)||void 0===e?void 0:e.message})]}),Object(u.jsxs)(B.a.Group,{className:"mb-3",children:[Object(u.jsx)(B.a.Label,{children:"Nome"}),Object(u.jsx)(B.a.Control,Object(L.a)({type:"text",isInvalid:!!h.name},l("name"))),Object(u.jsx)(B.a.Control.Feedback,{type:"invalid",children:null===(t=h.name)||void 0===t?void 0:t.message})]}),Object(u.jsxs)(B.a.Group,{className:"mb-3",children:[Object(u.jsx)(B.a.Label,{children:"Pre\xe7o"}),Object(u.jsx)(B.a.Control,Object(L.a)({type:"text",isInvalid:!!h.price},l("price"))),Object(u.jsx)(B.a.Control.Feedback,{type:"invalid",children:null===(c=h.price)||void 0===c?void 0:c.message})]}),Object(u.jsxs)(B.a.Group,{className:"mb-3",children:[Object(u.jsx)(B.a.Label,{children:"Descri\xe7\xe3o"}),Object(u.jsx)(B.a.Control,Object(L.a)({as:"textarea",rows:3,isInvalid:!!h.description},l("description"))),Object(u.jsx)(B.a.Control.Feedback,{type:"invalid",children:null===(r=h.description)||void 0===r?void 0:r.message})]}),Object(u.jsx)(B.a.Check,{checked:o,onChange:function(e){return d(e.target.checked)},type:"switch",label:"Ativo",className:"mb-3"}),Object(u.jsx)(N.a,{className:"mb-3",variant:"primary",type:"submit",children:"Salvar Produto"})]})]})}var _=G.a({image:G.b().required("Imagem \xe9 obrigat\xf3ria"),name:G.b().required("Nome \xe9 obrigat\xf3rio"),price:G.b().required("Pre\xe7o \xe9 obrigat\xf3rio"),description:G.b().required("Descri\xe7\xe3o \xe9 obrigat\xf3ria")});function T(){var e,t,c,r,a=Object(b.f)(),s=Object(b.h)(),i=Object(n.useState)(!0),o=Object(g.a)(i,2),d=o[0],j=o[1],l=Object(A.d)({resolver:Object(F.a)(_)}),O=l.register,h=l.handleSubmit,x=l.setValue,m=l.formState.errors;function p(){return(p=Object(v.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.put("/pizzas/".concat(s.id),Object(L.a)(Object(L.a)({},t),{},{active:d}));case 2:return a.push("/"),e.next=5,I.fire({icon:"success",title:"Produto editado com sucesso"});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){C.get("/pizzas/".concat(s.id)).then((function(e){var t=e.data;x("image",t.image),x("name",t.name),x("price",t.price),x("description",t.description),j(t.active)}))}),[x,s.id]),Object(u.jsxs)("section",{id:"page-products-add",children:[Object(u.jsx)(k,{title:"Editar Produto"}),Object(u.jsxs)(B.a,{onSubmit:h((function(e){return p.apply(this,arguments)})),children:[Object(u.jsxs)(B.a.Group,{className:"mb-3",children:[Object(u.jsx)(B.a.Label,{children:"Imagem"}),Object(u.jsx)(B.a.Control,Object(L.a)({type:"url",isInvalid:!!m.image},O("image"))),Object(u.jsx)(B.a.Control.Feedback,{type:"invalid",children:null===(e=m.image)||void 0===e?void 0:e.message})]}),Object(u.jsxs)(B.a.Group,{className:"mb-3",children:[Object(u.jsx)(B.a.Label,{children:"Nome"}),Object(u.jsx)(B.a.Control,Object(L.a)({type:"text",isInvalid:!!m.name},O("name"))),Object(u.jsx)(B.a.Control.Feedback,{type:"invalid",children:null===(t=m.name)||void 0===t?void 0:t.message})]}),Object(u.jsxs)(B.a.Group,{className:"mb-3",children:[Object(u.jsx)(B.a.Label,{children:"Pre\xe7o"}),Object(u.jsx)(B.a.Control,Object(L.a)({type:"text",isInvalid:!!m.price},O("price"))),Object(u.jsx)(B.a.Control.Feedback,{type:"invalid",children:null===(c=m.price)||void 0===c?void 0:c.message})]}),Object(u.jsxs)(B.a.Group,{className:"mb-3",children:[Object(u.jsx)(B.a.Label,{children:"Descri\xe7\xe3o"}),Object(u.jsx)(B.a.Control,Object(L.a)({as:"textarea",rows:3,isInvalid:!!m.description},O("description"))),Object(u.jsx)(B.a.Control.Feedback,{type:"invalid",children:null===(r=m.description)||void 0===r?void 0:r.message})]}),Object(u.jsx)(B.a.Check,{checked:d,onChange:function(e){return j(e.target.checked)},type:"switch",label:"Ativo",className:"mb-3"}),Object(u.jsx)(N.a,{className:"mb-3",variant:"primary",type:"submit",children:"Salvar Produto"})]})]})}var M=c(9),H=c(147),J=c(316),V=c(318),Q=c(317),U={PENDING:"Pendente",PREPARING:"Preparando",DONE:"Entregue",CANCELLED:"Cancelado"},K={PENDING:"secondary",PREPARING:"warning",DONE:"success",CANCELLED:"danger"};function W(e){var t=e.orders,c=e.onNavigate;return Object(u.jsxs)(w.a,{striped:!0,bordered:!0,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"ID do pedido"}),Object(u.jsx)("th",{children:"Item"}),Object(u.jsx)("th",{children:"Total"}),Object(u.jsx)("th",{children:"Status"}),Object(u.jsx)("th",{className:"text-center",children:"A\xe7\xf5es"})]})}),Object(u.jsxs)("tbody",{children:[0===t.length&&Object(u.jsx)("tr",{children:Object(u.jsx)("td",{className:"text-center",colSpan:5,children:"Sem pedidos \ud83c\udf55"})}),t.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{children:["#",e._id]}),Object(u.jsx)("td",{children:e.item.name}),Object(u.jsx)("td",{children:new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e.total)}),Object(u.jsx)("td",{children:Object(u.jsx)(J.a,{bg:K[e.status],children:U[e.status]})}),Object(u.jsx)("td",{className:"text-center",children:Object(u.jsx)(V.a,{placement:"top-end",overlay:Object(u.jsx)(Q.a,{children:"Detalhes do pedido"}),children:Object(u.jsx)(N.a,{onClick:function(){return c(e._id)},variant:"primary",size:"sm",children:Object(u.jsx)(d.b,{size:18})})})})]},e._id)}))]})]})}function X(){var e=Object(b.f)(),t=Object(n.useState)([]),c=Object(g.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){C.get("orders").then((function(e){a(e.data)})),Object(H.io)("https://pizzariaserver.herokuapp.com/").on("newOrder",function(){var e=Object(v.a)(f.a.mark((function e(t){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t,a((function(e){return[c].concat(Object(M.a)(e))})),new Audio("".concat("/pizzaria","/notification.mp3")).play(),e.next=5,I.fire({icon:"info",title:"Novo pedido adicionado"});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(u.jsxs)("section",{id:"page-orders",children:[Object(u.jsx)(k,{title:"Pedidos"}),Object(u.jsx)(W,{orders:r,onNavigate:function(t){e.push("/orders/".concat(t))}})]})}var Y=c(320);function Z(){var e=Object(b.f)(),t=Object(b.h)(),c=Object(n.useState)(),r=Object(g.a)(c,2),a=r[0],s=r[1],i=Object(n.useState)(""),o=Object(g.a)(i,2),d=o[0],j=o[1];function l(){return(l=Object(v.a)(f.a.mark((function e(){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.patch("/orders/".concat(t.id),{status:d});case 2:return c=e.sent,s(c.data),e.next=6,I.fire({icon:"success",title:"Status do pedido alterado com sucesso"});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){C.get("/orders/".concat(t.id)).then((function(e){var t=e.data;s(t),j(t.status)}))}),[t.id]),a?Object(u.jsxs)("section",{id:"page-order-details",children:[Object(u.jsx)(k,{title:"Pedido #".concat(t.id)}),Object(u.jsxs)(Y.a,{children:[Object(u.jsxs)(Y.a.Body,{children:[Object(u.jsxs)("div",{className:"fs-6 mb-1",children:[Object(u.jsx)("strong",{children:"Item:"}),Object(u.jsx)("span",{className:"ms-2",children:a.item.name})]}),Object(u.jsxs)("div",{className:"fs-6 mb-1",children:[Object(u.jsx)("strong",{children:"Descri\xe7\xe3o:"}),Object(u.jsx)("span",{className:"ms-2",children:a.item.description})]}),Object(u.jsxs)("div",{className:"fs-6 mb-1",children:[Object(u.jsx)("strong",{children:"Quantidade:"}),Object(u.jsx)("span",{className:"ms-2",children:a.quantity})]}),Object(u.jsxs)("div",{className:"fs-6 mb-1",children:[Object(u.jsx)("strong",{children:"Total:"}),Object(u.jsx)("span",{className:"ms-2",children:new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(a.total)})]}),Object(u.jsxs)("div",{className:"fs-6 mb-3",children:[Object(u.jsx)("strong",{children:"Status:"}),Object(u.jsx)("span",{className:"ms-2",children:Object(u.jsx)(J.a,{bg:K[a.status],children:U[a.status]})})]}),Object(u.jsxs)(B.a.Select,{value:d,onChange:function(e){j(e.currentTarget.value)},children:[Object(u.jsx)("option",{children:"Selecione o status do pedido"}),Object(u.jsx)("option",{value:"PENDING",children:"Pendente"}),Object(u.jsx)("option",{value:"PREPARING",children:"Preparando"}),Object(u.jsx)("option",{value:"DONE",children:"Entregue"}),Object(u.jsx)("option",{value:"CANCELLED",children:"Cancelado"})]})]}),Object(u.jsxs)(Y.a.Footer,{children:[Object(u.jsx)(N.a,{onClick:function(){return e.goBack()},variant:"secondary",children:"Voltar"}),Object(u.jsx)(N.a,{onClick:function(){return l.apply(this,arguments)},className:"ms-2",variant:"success",children:"Alterar Status do pedido"})]})]})]}):null}function $(){return Object(u.jsxs)(b.c,{children:[Object(u.jsx)(b.a,{exact:!0,path:"/",component:D}),Object(u.jsx)(b.a,{path:"/products/new",component:q}),Object(u.jsx)(b.a,{path:"/products/:id",component:T}),Object(u.jsx)(b.a,{exact:!0,path:"/orders",component:X}),Object(u.jsx)(b.a,{path:"/orders/:id",component:Z})]})}function ee(){return Object(u.jsx)(i.a,{children:Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)(m,{}),Object(u.jsx)("main",{id:"main-content",className:"container-fluid",children:Object(u.jsx)($,{})})]})})}s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(ee,{})}),document.getElementById("root"))}},[[310,1,2]]]);
//# sourceMappingURL=main.6f4e2986.chunk.js.map