(this.webpackJsonppuhelinfrontend=this.webpackJsonppuhelinfrontend||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(14),c=n.n(o),i=(n(20),n(4)),u=n(2),l=n(3),s=n.n(l),m="/api/persons",f=function(e){return e.then((function(e){return e.data}))},d=function(){var e=s.a.get(m);return f(e)},g=function(e){var t=s.a.post(m,e);return f(t)},p=function(e,t){var n=s.a.put("".concat(m,"/").concat(e),t);return f(n)},b=function(e){var t=s.a.delete("".concat(m,"/").concat(e));return f(t)};function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){var t=e.persons,n=e.setPersons,r=e.newName,o=e.setNewName,c=e.newNumber,i=e.setNewNumber,u=e.notification,l=e.setNotification,s=function(e){return t.findIndex((function(t){return t.name.toLowerCase()===e.toLowerCase()}))>=0},m=function(e){g(e).then((function(r){l({message:"".concat(e.name," added"),isError:!1}),setTimeout((function(){l(E({},u,{message:null}))}),3e3),n(t.concat(r)),o(""),i("")})).catch((function(e){console.log(e.response),l({message:e.response.data.error,isError:!0}),setTimeout((function(){l({message:null,isError:!1})}),3e3)}))},f=function(e,r){p(e,r).then((function(a){l({message:"".concat(r.name," updated"),isError:!1}),setTimeout((function(){l(E({},u,{message:null}))}),3e3),n(t.map((function(t){return t.id!==e?t:a}))),o(""),i("")})).catch((function(){l({message:"".concat(r.name," already deleted"),isError:!0}),setTimeout((function(){l({message:null,isError:!1})}),3e3),n(t.filter((function(t){return t.id!==e})))}))};return a.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n={name:r,number:c};if(r.length<1||c.length<1)window.alert("Name or number is missing");else if(s(r)&&window.confirm("".concat(r," already exists. Want to update the number?"))){var a=t.find((function(e){return e.name===r})).id;f(a,n)}else c.match(/[0-9/+/-]/gi)?m(n):window.alert("Please provide a number")}},a.a.createElement("div",null,"Name:",a.a.createElement("input",{value:r,onChange:function(e){console.log(e.target.value),o(e.target.value)}})),a.a.createElement("div",null,"Number:",a.a.createElement("input",{value:c,onChange:function(e){i(e.target.value)}})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"Add")))},w=function(e){e.id;var t=e.name,n=e.number,r=e.toggleDelete;return a.a.createElement("div",{className:"contact"},t," ",a.a.createElement("b",null,n)," ",a.a.createElement("button",{onClick:r},"Delete"))},h=function(e){var t=e.persons,n=e.newFilter,r=e.toggleDelete,o=function(){return t.filter((function(e){var t=e.name.toLowerCase(),r=n.toLowerCase();return t.includes(r)}))};return a.a.createElement("ul",null," ",o().length<1?a.a.createElement("div",null,"No contacts matching the criteria"):o().map((function(e){return a.a.createElement(w,{key:e.id,id:e.id,name:e.name,number:e.number,toggleDelete:function(){return r(e.id)}})}))," ")},j=function(e){var t=e.newFilter,n=e.setNewFilter;return a.a.createElement(a.a.Fragment,null,"Search:",a.a.createElement("input",{placeholder:"Type to search...",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)}}))},y=function(e){var t=e.message;return null===t.message?null:!0===t.isError?a.a.createElement("div",{className:"error"},t.message):a.a.createElement("div",{className:"notification"},t.message)};function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var P=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(""),l=Object(u.a)(c,2),s=l[0],m=l[1],f=Object(r.useState)(""),g=Object(u.a)(f,2),p=g[0],v=g[1],E=Object(r.useState)(""),w=Object(u.a)(E,2),P=w[0],D=w[1],S=Object(r.useState)({message:null,isError:!1}),C=Object(u.a)(S,2),k=C[0],F=C[1];Object(r.useEffect)((function(){d().then((function(e){o(e)}))}),[]);return a.a.createElement("div",null,a.a.createElement("h1",null,"Phonebook"),a.a.createElement(j,{newFilter:P,setNewFilter:D}),a.a.createElement("h2",null,"Add new contact"),a.a.createElement("div",{className:"overlay"},a.a.createElement(y,{message:k})),a.a.createElement(O,{persons:n,setPersons:o,newName:s,setNewName:m,newNumber:p,setNewNumber:v,notification:k,setNotification:F}),a.a.createElement("h2",null,"Numbers"),a.a.createElement(h,{persons:n,newFilter:P,toggleDelete:function(e){var t=n.find((function(t){return t.id===e}));window.confirm("Delete ".concat(t.name,"?"))&&b(e).then((function(){F({message:"".concat(t.name," deleted"),isError:!1}),setTimeout((function(){F(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},k,{message:null}))}),3e3),o(n.filter((function(t){return t.id!==e})))})).catch((function(){F({message:"".concat(t.name," already deleted"),isError:!0}),setTimeout((function(){F({message:null,isError:!1})}),3e3),o(n.filter((function(t){return t.id!==e})))}))}}))};c.a.render(a.a.createElement(P,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a7566644.chunk.js.map