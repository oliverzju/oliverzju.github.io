import{d as x,u as k,a as g,o as t,c as e,g as d,F as r,h as p,e as c,b as a,w as s,t as n,f as h}from"./index-a8e47df0.js";const S={style:{width:"100%",overflow:"auto"}},w={style:{background:"#d4d1d1",padding:"2px",float:"left"}},C={style:{background:"#f00",padding:"2px",float:"left"}},V=x({__name:"InvestResult",setup(B){function v(){_.push("home")}function y(){localStorage.removeItem("resultState_list"),_.push("home")}const _=k(),u=JSON.parse(localStorage.getItem("resultState_list"))||[];return(N,l)=>{const m=g("a-card"),f=g("a-button");return t(),e(r,null,[d("div",S,[(t(!0),e(r,null,p(c(u).slice(0,-1),o=>(t(),e("div",w,[a(m,{size:"small",title:"投资回报",style:{width:"100%"},bordered:!0,hoverable:!0},{default:s(()=>[(t(!0),e(r,null,p(o,(i,b)=>(t(),e("p",null,n(b)+" : "+n(i),1))),256))]),_:2},1024)]))),256)),d("div",C,[a(m,{size:"small",title:"投资回报",style:{width:"100%"},bordered:!0,hoverable:!0},{default:s(()=>[(t(!0),e(r,null,p(c(u)[c(u).length-1],(o,i)=>(t(),e("p",null,n(i)+" : "+n(o),1))),256))]),_:1})])]),d("div",null,[a(f,{style:{"margin-top":"20px","margin-right":"30px"},type:"primary",onClick:l[0]||(l[0]=o=>v())},{default:s(()=>[h("返回")]),_:1}),a(f,{style:{"margin-top":"20px"},onClick:l[1]||(l[1]=o=>y())},{default:s(()=>[h("清除记录")]),_:1})])],64)}}});export{V as default};
