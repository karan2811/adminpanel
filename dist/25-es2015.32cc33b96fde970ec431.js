(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"s6f+":function(t,e,a){"use strict";a.r(e),a.d(e,"WeightLossModule",(function(){return T}));var o=a("ofXK"),r=a("M0ag"),n=a("LPYB"),i=a("tyNb"),s=a("ZZ88"),c=a("tk/3"),l=(a("AJX/"),a("fXoL"));let d=(()=>{class t{constructor(t){this.http=t,this.ServerUrl="http://18.212.2.14:9000/"}PlanAnalytics(t){const e=new c.c({Authorization:localStorage.getItem("token")});return this.http.post(this.ServerUrl+"rest/admin/analytics_weight_loss",t,{headers:e,responseType:"json"}).map(t=>t)}}return t.\u0275fac=function(e){return new(e||t)(l.cc(c.a))},t.\u0275prov=l.Kb({token:t,factory:t.\u0275fac}),t})();var h=a("3Pt+"),u=a("wd/R"),b=a("5eHb"),g=a("1kSV"),p=a("3zLz"),m=a("arFO");const f=["d"],y=["myRangeInput"];function v(t,e){if(1&t){const t=l.Vb();l.Ub(0,"span",21),l.gc("click",(function(){l.Bc(t);const a=e.date;return l.ic().onDateSelection(a)}))("mouseenter",(function(){l.Bc(t);const a=e.date;return l.ic().hoveredDate=a}))("mouseleave",(function(){return l.Bc(t),l.ic().hoveredDate=null})),l.Lc(1),l.Tb()}if(2&t){const t=e.date,a=l.ic();l.Gb("range",a.isFrom(t)||a.isTo(t)||a.isInside(t)||a.isHovered(t))("faded",a.isHovered(t)||a.isInside(t)),l.Bb(1),l.Nc(" ",t.day," ")}}new Date;const C=(t,e)=>t&&e&&e.year===t.year&&e.month===t.month&&e.day===t.day,D=(t,e)=>!(!t||!e)&&(t.year===e.year?t.month===e.month?t.day!==e.day&&t.day<e.day:t.month<e.month:t.year<e.year),k=(t,e)=>!(!t||!e)&&(t.year===e.year?t.month===e.month?t.day!==e.day&&t.day>e.day:t.month>e.month:t.year>e.year),w=[{path:"",component:(()=>{class t{constructor(t,e,a,o,r){this.toastrService=t,this.weightLossService=e,this.calendar=a,this.renderer=o,this.__parserFormatter=r,this.lineChartData=[{data:[],label:""}],this.lineChartLabels=[],this.lineChartOptions={responsive:!0},this.lineChartColors=[{backgroundColor:"rgba(0,102,255,0.4)",borderColor:"rgba(0,102,255,1)",pointBackgroundColor:"rgba(0,102,255,0.4)",pointBorderColor:"#0066FF",pointHoverBackgroundColor:"#0066FF",pointHoverBorderColor:"rgba(148,159,177,0.8)"},{backgroundColor:"rgba(77,83,96,0.2)",borderColor:"rgba(77,83,96,1)",pointBackgroundColor:"rgba(77,83,96,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(77,83,96,1)"},{backgroundColor:"rgba(148,159,177,0.2)",borderColor:"rgba(148,159,177,1)",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"}],this.isHovered=t=>this.fromDate&&!this.toDate&&this.hoveredDate&&k(t,this.fromDate)&&D(t,this.hoveredDate),this.isInside=t=>k(t,this.fromDate)&&D(t,this.toDate),this.isFrom=t=>C(t,this.fromDate),this.isTo=t=>C(t,this.toDate)}chartClicked(t){}chartHovered(t){}ngOnInit(){this.lineChartLegend=!0,this.lineChartType="line",this.days=[{name:"Week",value:1},{name:"Month",value:2},{name:"Quarter",value:3},{name:"Year",value:4}],this.group=[{name:"Weight",value:1},{name:"Bodyfat",value:2},{name:"BMR",value:3},{name:"LBM",value:4}],this.PlanOnLoad()}PlanOnLoad(){var t=u().utc().startOf("month").format(),e=u().utc().endOf("month").format();this.weightLossService.PlanAnalytics({startdate:t,enddate:e,groupby:1,category:1}).subscribe(t=>{if(console.log("response",t),1==t.success){0==t.data.length&&this.toastrService.error("No data found!","");var e=[],a=[],o=Object.keys(t.data[0])[0];for(let o=0;o<t.data.length;o++){const r=Object.values(t.data[o])[1],n=Object.values(t.data[o])[0];e.push(r),a.push(n)}this.lineChartLabels=e,this.lineChartData=[{data:a,label:o}]}})}PlanAnalytics(){var t;if(null==this.selectedDay)this.toastrService.error("Please select day filter to get analytics data.","");else if(null==this.selectedGroup)this.toastrService.error("Please select category filter to get analytics data.","");else if(null==this.fromDate&&null==this.toDate)this.toastrService.error("Please select date to get analytics data.","");else{var e=JSON.stringify(this.selectedDay.value),a=JSON.stringify(this.selectedGroup.value);t={startdate:u.utc([this.fromDate.year,this.fromDate.month-1,this.fromDate.day]).format(),enddate:u.utc([this.toDate.year,this.toDate.month-1,this.toDate.day]).format(),groupby:e,category:a},this.weightLossService.PlanAnalytics(t).subscribe(t=>{if(console.log("response",t),1==t.success){0==t.data.length&&this.toastrService.error("No data found!","");var e=[],a=[],o=Object.keys(t.data[0])[0];for(let o=0;o<t.data.length;o++){const r=Object.values(t.data[o])[1],n=Object.values(t.data[o])[0];e.push(r),a.push(n)}this.lineChartLabels=e,this.lineChartData=[{data:a,label:o}]}})}}onDateSelection(t){let e="";this.fromDate||this.toDate?this.fromDate&&!this.toDate&&k(t,this.fromDate)?(this.toDate=k(t,this.startDate)?this.startDate:t,this.input.close()):(this.toDate=null,this.fromDate=k(t,this.startDate)?this.startDate:t):this.fromDate=k(t,this.startDate)?this.startDate:t,this.fromDate&&(e+=this.__parserFormatter.format(this.fromDate)),this.toDate&&(e+=" - "+this.__parserFormatter.format(this.toDate)),this.renderer.setProperty(this.myRangeInput.nativeElement,"value",e)}}return t.\u0275fac=function(e){return new(e||t)(l.Ob(b.b),l.Ob(d),l.Ob(g.d),l.Ob(l.E),l.Ob(g.f))},t.\u0275cmp=l.Ib({type:t,selectors:[["app-premiumplan"]],viewQuery:function(t,e){var a;1&t&&(l.Qc(f,!0),l.Qc(h.l,!0),l.Qc(y,!0)),2&t&&(l.zc(a=l.hc())&&(e.input=a.first),l.zc(a=l.hc())&&(e.datePick=a.first),l.zc(a=l.hc())&&(e.myRangeInput=a.first))},features:[l.Ab([d,b.b])],decls:25,vars:20,consts:[[3,"heading","icon"],[1,"row"],[1,"col","col-sm-10"],[1,"card","mb-6"],[1,"row",2,"padding-top","5px"],[1,"filter","col-sm-2",2,"padding-top","1px"],["placeholder","Day Filter","optionLabel","name",3,"options","ngModel","showClear","ngModelChange"],["placeholder","Category Filter","optionLabel","name",3,"options","ngModel","showClear","ngModelChange"],[1,"filter","col-sm-5"],[1,"input-group"],["placeholder","yyyy-mm-dd - yyyy-mm-dd","name","dp","ngbDatepicker","",1,"form-control",3,"ngModel","dayTemplate","autoClose","displayMonths","markDisabled","ngModelChange","focus"],["myRangeInput","","d","ngbDatepicker"],["t",""],[1,"input-group-append"],["type","button",1,"btn","btn-outline-secondary",3,"click"],[1,"fa","fa-calendar"],["ngbButton","",1,"btn","btn-themecolor","ml-3",3,"click"],[1,"fa","fa-search"],[1,"filter","col-sm-3"],[1,"card-body"],["baseChart","","height","130",3,"chartType","colors","datasets","labels","legend","options","chartClick","chartHover"],[1,"custom-day",3,"click","mouseenter","mouseleave"]],template:function(t,e){if(1&t){const t=l.Vb();l.Ub(0,"div"),l.Pb(1,"app-page-header",0),l.Ub(2,"div",1),l.Ub(3,"div",2),l.Ub(4,"div",3),l.Ub(5,"div",4),l.Ub(6,"div",5),l.Ub(7,"p-dropdown",6),l.gc("ngModelChange",(function(t){return e.selectedDay=t})),l.Tb(),l.Tb(),l.Ub(8,"div",5),l.Ub(9,"p-dropdown",7),l.gc("ngModelChange",(function(t){return e.selectedGroup=t})),l.Tb(),l.Tb(),l.Ub(10,"div",8),l.Ub(11,"div",9),l.Ub(12,"input",10,11),l.gc("ngModelChange",(function(t){return e.model=t}))("focus",(function(){return l.Bc(t),l.Ac(14).toggle()})),l.Tb(),l.Jc(15,v,2,5,"ng-template",null,12,l.Kc),l.Ub(17,"div",13),l.Ub(18,"button",14),l.gc("click",(function(){return l.Bc(t),l.Ac(14).toggle()})),l.Pb(19,"i",15),l.Tb(),l.Ub(20,"button",16),l.gc("click",(function(){return e.PlanAnalytics()})),l.Pb(21,"i",17),l.Tb(),l.Tb(),l.Tb(),l.Pb(22,"div",18),l.Tb(),l.Ub(23,"div",19),l.Ub(24,"canvas",20),l.gc("chartClick",(function(t){return e.chartClicked(t)}))("chartHover",(function(t){return e.chartHovered(t)})),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb()}if(2&t){const t=l.Ac(16);l.oc("@routerTransition",void 0),l.Bb(1),l.oc("heading","Weight Loss Program Analytics")("icon","fa-line-chart"),l.Bb(6),l.oc("options",e.days)("ngModel",e.selectedDay)("showClear",!0),l.Bb(2),l.oc("options",e.group)("ngModel",e.selectedGroup)("showClear",!0),l.Bb(3),l.oc("ngModel",e.model)("dayTemplate",t)("autoClose",!1)("displayMonths",2)("markDisabled",e.markDisabled),l.Bb(12),l.oc("chartType",e.lineChartType)("colors",e.lineChartColors)("datasets",e.lineChartData)("labels",e.lineChartLabels)("legend",e.lineChartLegend)("options",e.lineChartOptions)}},directives:[p.a,m.a,h.i,h.l,g.l,h.b,n.a],styles:["[_nghost-%COMP%]     .ui-button{margin:.5em .5em .5em 0;width:140px}@media screen and (max-width:40em){[_nghost-%COMP%]     .ui-dialog{width:75vw!important}}.rightshift[_ngcontent-%COMP%]{right:0;left:auto}.custom-day[_ngcontent-%COMP%]{text-align:center;padding:.185rem .25rem;display:inline-block;height:2rem;width:2rem}.custom-day.focused[_ngcontent-%COMP%]{background-color:#e6e6e6}.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover{background-color:#0275d8;color:#fff}.custom-day.faded[_ngcontent-%COMP%]{background-color:rgba(2,117,216,.5)}.filter[_ngcontent-%COMP%]{margin-left:10px}"],data:{animation:[Object(s.a)()]}}),t})()}];let O=(()=>{class t{}return t.\u0275mod=l.Mb({type:t}),t.\u0275inj=l.Lb({factory:function(e){return new(e||t)},imports:[[i.e.forChild(w)],i.e]}),t})();var M=a("rEr+"),B=a("/RsI"),P=a("jIHw");let T=(()=>{class t{}return t.\u0275mod=l.Mb({type:t}),t.\u0275inj=l.Lb({factory:function(e){return new(e||t)},imports:[[o.b,m.b,n.b,O,r.b,h.f,M.e,B.b,P.c,g.n,g.g]]}),t})()}}]);