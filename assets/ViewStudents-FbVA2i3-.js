import{D as e}from"./index-7vXkP9-7.js";import{_ as o}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as n,o as c,c as d,w as r,a as s,b as a}from"./index-La4vm0Gu.js";import"./logo-VDId8S0D.js";const i="/images/cassava.png",u={name:"ViewStudents",components:{Dashboard:e},data(){return{students:[],showMoreDataModal:1}},computed:{},methods:{async loadStudents(){let l=await axios.get("/students");this.students=l.data.data.students}},mounted(){}},m=s("div",null,[s("div",{class:"single-page-header","data-background-image":""},[s("div",{class:"container"},[s("div",{class:"row"},[s("div",{class:"col-md-12"},[s("div",{class:"single-page-header-inner"},[s("div",{class:"left-side"},[s("div",{class:"header-details"},[s("h1",{class:"margin-bottom-0"},[s("i",{class:"icon-material-outline-assignment text-success"}),a(" Cassava Peeler Control")]),s("br"),s("h3",{class:"margin-bottom-0 margin-top-0"},"Interact with Cassava Control Peeler"),s("h5",null,[s("i",{class:"icon-material-outline-assignment text-success"}),a("Cassava Control")])])])])])])]),s("div",{class:"background-image-container",style:{"background-image":"url('/images/cassava.png')"}})]),s("div",{class:"dashboard-headline"},[s("nav",{id:"breadcrumbs",class:"dark"},[s("ul",null,[s("li",null,[s("a",{href:"#"},"Home")]),s("li",null,"Cassava Control")])])]),s("br"),s("br"),s("div",{class:"col"},[s("div",{class:"row"},[s("div",{class:"col-xl-8"},[s("div",{class:"submit-field"},[s("h5",null,[a("Name of Run "),s("i",{class:"icon-line-awesome-ship text-success"})]),s("input",{type:"text",class:"with-border disabled",disabled:""})])]),s("div",{class:"col-xl-8"},[s("div",{class:"submit-field"},[s("h5",null,[a("Minutes "),s("i",{class:"icon-material-outline-account-balance text-success"})]),s("input",{type:"text",class:"with-border disabled",disabled:""})])]),s("div",{class:"col-xl-4"}),s("div",{class:"col-xl-8"})])]),s("div",{class:"intro-search-button"},[s("button",{class:"button ripple-effect",onclick:"window.location.href='jobs-list-layout-full-page-map.html'"},"Create")]),s("div",{class:"listings-container compact-list-layout margin-top-35"},[s("a",{href:"single-job-page.html",class:"job-listing"},[s("div",{class:"job-listing-details"},[s("div",{class:"job-listing-company-logo"},[s("img",{src:i,alt:""})]),s("div",{class:"job-listing-description"},[s("h3",{class:"job-listing-title"},"Monday Batch One Peeling Run"),s("div",{class:"job-listing-footer"},[s("ul",null,[s("li",null,[s("i",{class:"icon-material-outline-access-time"}),a(" 20 Mins")])])])]),s("span",{class:"bookmark-icon"})])]),s("a",{href:"single-job-page.html",class:"job-listing"},[s("div",{class:"job-listing-details"},[s("div",{class:"job-listing-company-logo"},[s("img",{src:i,alt:""})]),s("div",{class:"job-listing-description"},[s("h3",{class:"job-listing-title"},"Friday Batch Three Peeling Run"),s("div",{class:"job-listing-footer"},[s("ul",null,[s("li",null,[s("i",{class:"icon-material-outline-access-time"}),a(" 30 Mins")])])])]),s("span",{class:"bookmark-icon"})])])])],-1);function g(l,b,p,h,v,f){const t=n("dashboard");return c(),d(t,null,{default:r(()=>[m]),_:1})}const k=o(u,[["render",g]]);export{k as default};