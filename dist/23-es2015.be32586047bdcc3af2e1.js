(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{iW4g:function(t,e,a){"use strict";a.r(e),a.d(e,"WeightGainModule",(function(){return H}));var r=a("ofXK"),o=a("M0ag"),n=a("LPYB"),i=a("tyNb"),s=a("ZZ88"),c=a("tk/3"),l=(a("AJX/"),a("fXoL"));let h=(()=>{class t{constructor(t){this.http=t,this.ServerUrl="http://18.212.2.14:9000/"}PlanAnalytics(t){const e=new c.c({Authorization:localStorage.getItem("token")});return this.http.post(this.ServerUrl+"rest/admin/analytics_weight_gain",t,{headers:e,responseType:"json"}).map(t=>t)}}return t.\u0275fac=function(e){return new(e||t)(l.dc(c.a))},t.\u0275prov=l.Lb({token:t,factory:t.\u0275fac}),t})();var d=a("3Pt+"),b=a("wd/R"),u=a("5eHb"),p=a("1kSV"),m=a("3zLz"),f=a("arFO");const y=["d"],g=["myRangeInput"];function v(t,e){if(1&t){const t=l.Wb();l.Vb(0,"span",18),l.hc("click",(function(){l.Bc(t);const a=e.date;return l.jc().onDateSelection(a)}))("mouseenter",(function(){l.Bc(t);const a=e.date;return l.jc().hoveredDate=a}))("mouseleave",(function(){return l.Bc(t),l.jc().hoveredDate=null})),l.Lc(1),l.Ub()}if(2&t){const t=e.date,a=l.jc();l.Hb("range",a.isFrom(t)||a.isTo(t)||a.isInside(t)||a.isHovered(t))("faded",a.isHovered(t)||a.isInside(t)),l.Cb(1),l.Nc(" ",t.day," ")}}new Date;const C=(t,e)=>t&&e&&e.year===t.year&&e.month===t.month&&e.day===t.day,D=(t,e)=>!(!t||!e)&&(t.year===e.year?t.month===e.month?t.day!==e.day&&t.day<e.day:t.month<e.month:t.year<e.year),k=(t,e)=>!(!t||!e)&&(t.year===e.year?t.month===e.month?t.day!==e.day&&t.day>e.day:t.month>e.month:t.year>e.year),w=[{path:"",component:(()=>{class t{constructor(t,e,a,r,o){this.toastrService=t,this.weightGainService=e,this.calendar=a,this.renderer=r,this.__parserFormatter=o,this.lineChartData=[{data:[],label:""}],this.lineChartLabels=[],this.lineChartOptions={responsive:!0},this.lineChartColors=[{backgroundColor:"rgba(0,102,255,0.4)",borderColor:"rgba(0,102,255,1)",pointBackgroundColor:"rgba(0,102,255,0.4)",pointBorderColor:"#0066FF",pointHoverBackgroundColor:"#0066FF",pointHoverBorderColor:"rgba(148,159,177,0.8)"},{backgroundColor:"rgba(77,83,96,0.2)",borderColor:"rgba(77,83,96,1)",pointBackgroundColor:"rgba(77,83,96,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(77,83,96,1)"},{backgroundColor:"rgba(148,159,177,0.2)",borderColor:"rgba(148,159,177,1)",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"}],this.isHovered=t=>this.fromDate&&!this.toDate&&this.hoveredDate&&k(t,this.fromDate)&&D(t,this.hoveredDate),this.isInside=t=>k(t,this.fromDate)&&D(t,this.toDate),this.isFrom=t=>C(t,this.fromDate),this.isTo=t=>C(t,this.toDate)}chartClicked(t){}chartHovered(t){}ngOnInit(){this.toastrService.success("Update Successfully",""),this.PlanAnalytics(),this.lineChartLegend=!0,this.lineChartType="line",this.days=[{name:"Week"},{name:"Month"},{name:"Quarter"},{name:"Year"}],this.toastrService.error("Quantity Not Available","")}PlanAnalytics(){var t,e=b().utc().startOf("month").format(),a=b().utc().endOf("month").format();if(null!=this.fromDate&&null!=this.toDate){var r=JSON.stringify(this.selectedDay.value);t={startdate:b.utc([this.fromDate.year,this.fromDate.month-1,this.fromDate.day]).format(),enddate:b.utc([this.toDate.year,this.toDate.month-1,this.toDate.day]).format(),groupby:r}}else t={startdate:e,enddate:a,groupby:1};this.weightGainService.PlanAnalytics(t).subscribe(t=>{if(console.log("response",t),1==t.success){var e=[],a=[],r=Object.keys(t.data[0])[0];for(let r=0;r<t.data.length;r++){const o=Object.values(t.data[r])[1],n=Object.values(t.data[r])[0];e.push(o),a.push(n)}this.lineChartLabels=e,this.lineChartData=[{data:a,label:r}]}})}onDateSelection(t){let e="";this.fromDate||this.toDate?this.fromDate&&!this.toDate&&k(t,this.fromDate)?(this.toDate=k(t,this.startDate)?this.startDate:t,this.input.close()):(this.toDate=null,this.fromDate=k(t,this.startDate)?this.startDate:t):this.fromDate=k(t,this.startDate)?this.startDate:t,this.fromDate&&(e+=this.__parserFormatter.format(this.fromDate)),this.toDate&&(e+=" - "+this.__parserFormatter.format(this.toDate)),this.renderer.setProperty(this.myRangeInput.nativeElement,"value",e)}}return t.\u0275fac=function(e){return new(e||t)(l.Pb(u.b),l.Pb(h),l.Pb(p.e),l.Pb(l.E),l.Pb(p.h))},t.\u0275cmp=l.Jb({type:t,selectors:[["app-premiumplan"]],viewQuery:function(t,e){var a;1&t&&(l.Qc(y,!0),l.Qc(d.l,!0),l.Qc(g,!0)),2&t&&(l.zc(a=l.ic())&&(e.input=a.first),l.zc(a=l.ic())&&(e.datePick=a.first),l.zc(a=l.ic())&&(e.myRangeInput=a.first))},features:[l.Bb([h,u.b])],decls:22,vars:17,consts:[[3,"heading","icon"],[1,"row"],[1,"col","col-sm-10"],[1,"card","mb-6"],[1,"card-header"],["placeholder","Day Filter","optionLabel","name",3,"options","ngModel","showClear","ngModelChange"],[1,"form-group"],[1,"input-group"],["placeholder","yyyy-mm-dd - yyyy-mm-dd","name","dp","ngbDatepicker","",1,"form-control",3,"ngModel","dayTemplate","autoClose","displayMonths","markDisabled","ngModelChange","focus"],["myRangeInput","","d","ngbDatepicker"],["t",""],[1,"input-group-append"],["type","button",1,"btn","btn-outline-secondary",3,"click"],[1,"fa","fa-calendar"],["ngbButton","",1,"btn","btn-themecolor","ml-3",3,"click"],[1,"fa","fa-search"],[1,"card-body"],["baseChart","","height","130",3,"chartType","colors","datasets","labels","legend","options","chartClick","chartHover"],[1,"custom-day",3,"click","mouseenter","mouseleave"]],template:function(t,e){if(1&t){const t=l.Wb();l.Vb(0,"div"),l.Qb(1,"app-page-header",0),l.Vb(2,"div",1),l.Vb(3,"div",2),l.Vb(4,"div",3),l.Vb(5,"div",4),l.Lc(6," Line Chart "),l.Vb(7,"p-dropdown",5),l.hc("ngModelChange",(function(t){return e.selectedDay=t})),l.Ub(),l.Vb(8,"div",6),l.Vb(9,"div",7),l.Vb(10,"input",8,9),l.hc("ngModelChange",(function(t){return e.model=t}))("focus",(function(){return l.Bc(t),l.Ac(12).toggle()})),l.Ub(),l.Jc(13,v,2,5,"ng-template",null,10,l.Kc),l.Vb(15,"div",11),l.Vb(16,"button",12),l.hc("click",(function(){return l.Bc(t),l.Ac(12).toggle()})),l.Qb(17,"i",13),l.Ub(),l.Vb(18,"button",14),l.hc("click",(function(){return e.PlanAnalytics()})),l.Qb(19,"i",15),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Vb(20,"div",16),l.Vb(21,"canvas",17),l.hc("chartClick",(function(t){return e.chartClicked(t)}))("chartHover",(function(t){return e.chartHovered(t)})),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub()}if(2&t){const t=l.Ac(14);l.pc("@routerTransition",void 0),l.Cb(1),l.pc("heading","Weight Gain Program Analytics")("icon","fa-bar-chart-o"),l.Cb(6),l.pc("options",e.days)("ngModel",e.selectedDay)("showClear",!0),l.Cb(3),l.pc("ngModel",e.model)("dayTemplate",t)("autoClose",!1)("displayMonths",2)("markDisabled",e.markDisabled),l.Cb(11),l.pc("chartType",e.lineChartType)("colors",e.lineChartColors)("datasets",e.lineChartData)("labels",e.lineChartLabels)("legend",e.lineChartLegend)("options",e.lineChartOptions)}},directives:[m.a,f.a,d.i,d.l,p.n,d.b,n.a],styles:["[_nghost-%COMP%]     .ui-button{margin:.5em .5em .5em 0;width:140px}@media screen and (max-width:40em){[_nghost-%COMP%]     .ui-dialog{width:75vw!important}}"],data:{animation:[Object(s.a)()]}}),t})()}];let B=(()=>{class t{}return t.\u0275mod=l.Nb({type:t}),t.\u0275inj=l.Mb({factory:function(e){return new(e||t)},imports:[[i.e.forChild(w)],i.e]}),t})();var U=a("rEr+"),M=a("/RsI"),P=a("jIHw");let H=(()=>{class t{}return t.\u0275mod=l.Nb({type:t}),t.\u0275inj=l.Mb({factory:function(e){return new(e||t)},imports:[[r.b,f.b,n.b,B,o.b,d.f,U.e,M.b,P.b,p.p,p.i]]}),t})()}}]);