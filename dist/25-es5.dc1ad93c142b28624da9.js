function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,a){return e&&_defineProperties(t.prototype,e),a&&_defineProperties(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"s6f+":function(t,e,a){"use strict";a.r(e),a.d(e,"WeightLossModule",(function(){return L}));var o,r=a("ofXK"),n=a("M0ag"),i=a("LPYB"),s=a("tyNb"),c=a("ZZ88"),l=a("tk/3"),d=(a("AJX/"),a("fXoL")),u=((o=function(){function t(e){_classCallCheck(this,t),this.http=e,this.ServerUrl="http://18.212.2.14:9000/"}return _createClass(t,[{key:"PlanAnalytics",value:function(t){var e=new l.c({Authorization:localStorage.getItem("token")});return this.http.post(this.ServerUrl+"rest/admin/analytics_weight_loss",t,{headers:e,responseType:"json"}).map((function(t){return t}))}}]),t}()).\u0275fac=function(t){return new(t||o)(d.cc(l.a))},o.\u0275prov=d.Kb({token:o,factory:o.\u0275fac}),o),h=a("3Pt+"),f=a("wd/R"),b=a("1kSV"),p=a("3zLz"),g=a("arFO"),m=["d"],y=["myRangeInput"];function v(t,e){if(1&t){var a=d.Vb();d.Ub(0,"span",21),d.gc("click",(function(){d.Bc(a);var t=e.date;return d.ic().onDateSelection(t)}))("mouseenter",(function(){d.Bc(a);var t=e.date;return d.ic().hoveredDate=t}))("mouseleave",(function(){return d.Bc(a),d.ic().hoveredDate=null})),d.Kc(1),d.Tb()}if(2&t){var o=e.date,r=d.ic();d.Gb("range",r.isFrom(o)||r.isTo(o)||r.isInside(o)||r.isHovered(o))("faded",r.isHovered(o)||r.isInside(o)),d.Bb(1),d.Mc(" ",o.day," ")}}new Date;var C,D,k,w=function(t,e){return t&&e&&e.year===t.year&&e.month===t.month&&e.day===t.day},M=function(t,e){return!(!t||!e)&&(t.year===e.year?t.month===e.month?t.day!==e.day&&t.day<e.day:t.month<e.month:t.year<e.year)},O=function(t,e){return!(!t||!e)&&(t.year===e.year?t.month===e.month?t.day!==e.day&&t.day>e.day:t.month>e.month:t.year>e.year)},T=[{path:"",component:(C=function(){function t(e,a,o,r){var n=this;_classCallCheck(this,t),this.weightLossService=e,this.calendar=a,this.renderer=o,this.__parserFormatter=r,this.lineChartData=[{data:[],label:""}],this.lineChartLabels=[],this.lineChartOptions={responsive:!0},this.lineChartColors=[{backgroundColor:"rgba(0,102,255,0.4)",borderColor:"rgba(0,102,255,1)",pointBackgroundColor:"rgba(0,102,255,0.4)",pointBorderColor:"#0066FF",pointHoverBackgroundColor:"#0066FF",pointHoverBorderColor:"rgba(148,159,177,0.8)"},{backgroundColor:"rgba(77,83,96,0.2)",borderColor:"rgba(77,83,96,1)",pointBackgroundColor:"rgba(77,83,96,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(77,83,96,1)"},{backgroundColor:"rgba(148,159,177,0.2)",borderColor:"rgba(148,159,177,1)",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"}],this.isHovered=function(t){return n.fromDate&&!n.toDate&&n.hoveredDate&&O(t,n.fromDate)&&M(t,n.hoveredDate)},this.isInside=function(t){return O(t,n.fromDate)&&M(t,n.toDate)},this.isFrom=function(t){return w(t,n.fromDate)},this.isTo=function(t){return w(t,n.toDate)}}return _createClass(t,[{key:"chartClicked",value:function(t){}},{key:"chartHovered",value:function(t){}},{key:"ngOnInit",value:function(){this.lineChartLegend=!0,this.lineChartType="line",this.days=[{name:"Week",value:1},{name:"Month",value:2},{name:"Quarter",value:3},{name:"Year",value:4}],this.group=[{name:"Weight",value:1},{name:"Bodyfat",value:2},{name:"BMR",value:3},{name:"LBM",value:4}],this.PlanAnalytics()}},{key:"PlanAnalytics",value:function(){var t,e=this,a=f().utc().startOf("month").format(),o=f().utc().endOf("month").format();if(null!=this.fromDate&&null!=this.toDate){var r=JSON.stringify(this.selectedDay.value),n=JSON.stringify(this.selectedGroup.value);t={startdate:f.utc([this.fromDate.year,this.fromDate.month-1,this.fromDate.day]).format(),enddate:f.utc([this.toDate.year,this.toDate.month-1,this.toDate.day]).format(),groupby:r,category:n}}else t={startdate:a,enddate:o,groupby:1,category:1};this.weightLossService.PlanAnalytics(t).subscribe((function(t){if(console.log("response",t),1==t.success){for(var a=[],o=[],r=Object.keys(t.data[0])[0],n=0;n<t.data.length;n++){var i=Object.values(t.data[n])[1],s=Object.values(t.data[n])[0];a.push(i),o.push(s)}e.lineChartLabels=a,e.lineChartData=[{data:o,label:r}]}}))}},{key:"onDateSelection",value:function(t){var e="";this.fromDate||this.toDate?this.fromDate&&!this.toDate&&O(t,this.fromDate)?(this.toDate=O(t,this.startDate)?this.startDate:t,this.input.close()):(this.toDate=null,this.fromDate=O(t,this.startDate)?this.startDate:t):this.fromDate=O(t,this.startDate)?this.startDate:t,this.fromDate&&(e+=this.__parserFormatter.format(this.fromDate)),this.toDate&&(e+=" - "+this.__parserFormatter.format(this.toDate)),this.renderer.setProperty(this.myRangeInput.nativeElement,"value",e)}}]),t}(),C.\u0275fac=function(t){return new(t||C)(d.Ob(u),d.Ob(b.e),d.Ob(d.E),d.Ob(b.h))},C.\u0275cmp=d.Ib({type:C,selectors:[["app-premiumplan"]],viewQuery:function(t,e){var a;1&t&&(d.Oc(m,!0),d.Oc(h.l,!0),d.Oc(y,!0)),2&t&&(d.zc(a=d.hc())&&(e.input=a.first),d.zc(a=d.hc())&&(e.datePick=a.first),d.zc(a=d.hc())&&(e.myRangeInput=a.first))},features:[d.Ab([u])],decls:25,vars:20,consts:[[3,"heading","icon"],[1,"row"],[1,"col","col-sm-10"],[1,"card","mb-6"],[1,"row",2,"padding-top","5px"],[1,"filter","col-sm-2",2,"padding-top","1px"],["placeholder","Day Filter","optionLabel","name",3,"options","ngModel","showClear","ngModelChange"],["placeholder","Category Filter","optionLabel","name",3,"options","ngModel","showClear","ngModelChange"],[1,"filter","col-sm-5"],[1,"input-group"],["placeholder","yyyy-mm-dd - yyyy-mm-dd","name","dp","ngbDatepicker","",1,"form-control",3,"ngModel","dayTemplate","autoClose","displayMonths","markDisabled","ngModelChange","focus"],["myRangeInput","","d","ngbDatepicker"],["t",""],[1,"input-group-append"],["type","button",1,"btn","btn-outline-secondary",3,"click"],[1,"fa","fa-calendar"],["ngbButton","",1,"btn","btn-themecolor","ml-3",3,"click"],[1,"fa","fa-search"],[1,"filter","col-sm-3"],[1,"card-body"],["baseChart","","height","130",3,"chartType","colors","datasets","labels","legend","options","chartClick","chartHover"],[1,"custom-day",3,"click","mouseenter","mouseleave"]],template:function(t,e){if(1&t){var a=d.Vb();d.Ub(0,"div"),d.Pb(1,"app-page-header",0),d.Ub(2,"div",1),d.Ub(3,"div",2),d.Ub(4,"div",3),d.Ub(5,"div",4),d.Ub(6,"div",5),d.Ub(7,"p-dropdown",6),d.gc("ngModelChange",(function(t){return e.selectedDay=t})),d.Tb(),d.Tb(),d.Ub(8,"div",5),d.Ub(9,"p-dropdown",7),d.gc("ngModelChange",(function(t){return e.selectedGroup=t})),d.Tb(),d.Tb(),d.Ub(10,"div",8),d.Ub(11,"div",9),d.Ub(12,"input",10,11),d.gc("ngModelChange",(function(t){return e.model=t}))("focus",(function(){return d.Bc(a),d.Ac(14).toggle()})),d.Tb(),d.Ic(15,v,2,5,"ng-template",null,12,d.Jc),d.Ub(17,"div",13),d.Ub(18,"button",14),d.gc("click",(function(){return d.Bc(a),d.Ac(14).toggle()})),d.Pb(19,"i",15),d.Tb(),d.Ub(20,"button",16),d.gc("click",(function(){return e.PlanAnalytics()})),d.Pb(21,"i",17),d.Tb(),d.Tb(),d.Tb(),d.Pb(22,"div",18),d.Tb(),d.Ub(23,"div",19),d.Ub(24,"canvas",20),d.gc("chartClick",(function(t){return e.chartClicked(t)}))("chartHover",(function(t){return e.chartHovered(t)})),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb()}if(2&t){var o=d.Ac(16);d.oc("@routerTransition",void 0),d.Bb(1),d.oc("heading","Weight Loss Program Analytics")("icon","fa-bar-chart-o"),d.Bb(6),d.oc("options",e.days)("ngModel",e.selectedDay)("showClear",!0),d.Bb(2),d.oc("options",e.group)("ngModel",e.selectedGroup)("showClear",!0),d.Bb(3),d.oc("ngModel",e.model)("dayTemplate",o)("autoClose",!1)("displayMonths",2)("markDisabled",e.markDisabled),d.Bb(12),d.oc("chartType",e.lineChartType)("colors",e.lineChartColors)("datasets",e.lineChartData)("labels",e.lineChartLabels)("legend",e.lineChartLegend)("options",e.lineChartOptions)}},directives:[p.a,g.a,h.i,h.l,b.n,h.b,i.a],styles:["[_nghost-%COMP%]     .ui-button{margin:.5em .5em .5em 0;width:140px}@media screen and (max-width:40em){[_nghost-%COMP%]     .ui-dialog{width:75vw!important}}.rightshift[_ngcontent-%COMP%]{right:0;left:auto}.custom-day[_ngcontent-%COMP%]{text-align:center;padding:.185rem .25rem;display:inline-block;height:2rem;width:2rem}.custom-day.focused[_ngcontent-%COMP%]{background-color:#e6e6e6}.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover{background-color:#0275d8;color:#fff}.custom-day.faded[_ngcontent-%COMP%]{background-color:rgba(2,117,216,.5)}.filter[_ngcontent-%COMP%]{margin-left:10px}"],data:{animation:[Object(c.a)()]}}),C)}],B=((D=function t(){_classCallCheck(this,t)}).\u0275mod=d.Mb({type:D}),D.\u0275inj=d.Lb({factory:function(t){return new(t||D)},imports:[[s.e.forChild(T)],s.e]}),D),_=a("rEr+"),P=a("/RsI"),U=a("jIHw"),L=((k=function t(){_classCallCheck(this,t)}).\u0275mod=d.Mb({type:k}),k.\u0275inj=d.Lb({factory:function(t){return new(t||k)},imports:[[r.b,g.b,i.b,B,n.b,h.f,_.e,P.b,U.c,b.p,b.i]]}),k)}}]);