(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"3zLz":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("fXoL"),b=n("tyNb");const o=function(){return["/dashboard"]};let a=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Jb({type:e,selectors:[["app-page-header"]],inputs:{heading:"heading",icon:"icon"},decls:12,vars:7,consts:[[1,"row"],[1,"col-xl-12"],[1,"page-header"],[1,"breadcrumb"],[1,"breadcrumb-item"],[1,"fa","fa-dashboard"],["href","Javascript:void(0)",3,"routerLink"],[1,"breadcrumb-item","active"]],template:function(e,t){1&e&&(i.Vb(0,"div",0),i.Vb(1,"div",1),i.Vb(2,"h2",2),i.Lc(3),i.Ub(),i.Vb(4,"ol",3),i.Vb(5,"li",4),i.Qb(6,"i",5),i.Vb(7,"a",6),i.Lc(8,"Dashboard"),i.Ub(),i.Ub(),i.Vb(9,"li",7),i.Qb(10,"i"),i.Lc(11),i.Ub(),i.Ub(),i.Ub(),i.Ub()),2&e&&(i.Cb(3),i.Nc(" ",t.heading," "),i.Cb(4),i.pc("routerLink",i.sc(6,o)),i.Cb(3),i.Fb("fa ",t.icon,""),i.Cb(1),i.Nc(" ",t.heading,""))},directives:[b.d],styles:[""]}),e})()},oSrg:function(e,t,n){"use strict";n.r(t),n.d(t,"BsComponentModule",(function(){return D}));var i=n("ofXK"),b=n("3Pt+"),o=n("1kSV"),a=n("M0ag"),c=n("tyNb"),r=n("fXoL"),s=n("3zLz");function l(e,t){1&e&&(r.Vb(0,"div",7),r.Vb(1,"h4",8),r.Lc(2,"Modal title"),r.Ub(),r.Vb(3,"button",9),r.hc("click",(function(){return(0,t.dismiss)("Cross click")})),r.Vb(4,"span",10),r.Lc(5,"\xd7"),r.Ub(),r.Ub(),r.Ub(),r.Vb(6,"div",11),r.Vb(7,"p"),r.Lc(8,"One fine body\u2026"),r.Ub(),r.Ub(),r.Vb(9,"div",12),r.Vb(10,"button",13),r.hc("click",(function(){return(0,t.close)("Close click")})),r.Lc(11,"Close"),r.Ub(),r.Ub())}let d=(()=>{class e{constructor(e){this.modalService=e}open(e){this.modalService.open(e).result.then(e=>{this.closeResult=`Closed with: ${e}`},e=>{this.closeResult=`Dismissed ${this.getDismissReason(e)}`})}getDismissReason(e){return e===o.a.ESC?"by pressing ESC":e===o.a.BACKDROP_CLICK?"by clicking on a backdrop":`with: ${e}`}}return e.\u0275fac=function(t){return new(t||e)(r.Pb(o.o))},e.\u0275cmp=r.Jb({type:e,selectors:[["app-modal"]],decls:10,vars:0,consts:[[1,"row"],[1,"col-sm-12"],[1,"card","mb-3"],[1,"card-header"],[1,"card-body"],[1,"btn","btn-primary",3,"click"],["content",""],[1,"modal-header"],[1,"modal-title"],["aria-label","Close","type","button",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"]],template:function(e,t){if(1&e){const e=r.Wb();r.Vb(0,"div",0),r.Vb(1,"div",1),r.Vb(2,"div",2),r.Vb(3,"div",3),r.Lc(4,"Modal"),r.Ub(),r.Vb(5,"div",4),r.Vb(6,"button",5),r.hc("click",(function(){r.Bc(e);const n=r.Ac(9);return t.open(n)})),r.Lc(7,"Large modal"),r.Ub(),r.Jc(8,l,12,0,"ng-template",null,6,r.Kc),r.Ub(),r.Ub(),r.Ub(),r.Ub()}},styles:[""]}),e})();function p(e,t){if(1&e){const e=r.Wb();r.Vb(0,"p"),r.Vb(1,"ngb-alert",6),r.hc("close",(function(){r.Bc(e);const n=t.$implicit;return r.jc().closeAlert(n)})),r.Lc(2),r.Ub(),r.Ub()}if(2&e){const e=t.$implicit;r.Cb(1),r.pc("type",e.type),r.Cb(1),r.Mc(e.message)}}let u=(()=>{class e{constructor(){this.alerts=[],this.alerts.push({id:1,type:"success",message:"This is an success alert"},{id:2,type:"info",message:"This is an info alert"},{id:3,type:"warning",message:"This is a warning alert"},{id:4,type:"danger",message:"This is a danger alert"})}ngOnInit(){}closeAlert(e){const t=this.alerts.indexOf(e);this.alerts.splice(t,1)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Jb({type:e,selectors:[["app-alert"]],decls:7,vars:1,consts:[[1,"row"],[1,"col-lg-12"],[1,"card","mb-3"],[1,"card-header"],[1,"card-body"],[4,"ngFor","ngForOf"],[3,"type","close"]],template:function(e,t){1&e&&(r.Vb(0,"div",0),r.Vb(1,"div",1),r.Vb(2,"div",2),r.Vb(3,"div",3),r.Lc(4,"Buttons"),r.Ub(),r.Vb(5,"div",4),r.Jc(6,p,3,2,"p",5),r.Ub(),r.Ub(),r.Ub(),r.Ub()),2&e&&(r.Cb(6),r.pc("ngForOf",t.alerts))},directives:[i.k,o.b],styles:[""]}),e})(),g=(()=>{class e{constructor(e){this.formBuilder=e,this.model=1}ngOnInit(){this.radioGroupForm=this.formBuilder.group({model:"middle"})}}return e.\u0275fac=function(t){return new(t||e)(r.Pb(b.c))},e.\u0275cmp=r.Jb({type:e,selectors:[["app-buttons"]],decls:46,vars:8,consts:[[1,"row","mb-3"],[1,"col","col-sm-6"],[1,"card"],[1,"card-header"],[1,"card-body"],["name","radioBasic","ngbRadioGroup","",1,"btn-group","btn-group-toggle","mb-3",3,"ngModel","ngModelChange"],["ngbButtonLabel","",1,"btn-primary"],["ngbButton","","type","radio",3,"value"],["ngbButton","","type","radio","value","middle"],[1,"alert","alert-info","mb-0"],[1,"mb-3",3,"formGroup"],["formControlName","model","name","radioBasic","ngbRadioGroup","",1,"btn-group","btn-group-toggle"]],template:function(e,t){1&e&&(r.Vb(0,"div",0),r.Vb(1,"div",1),r.Vb(2,"div",2),r.Vb(3,"div",3),r.Lc(4,"Radio Button group ("),r.Vb(5,"strong"),r.Lc(6,"Using ngModel"),r.Ub(),r.Lc(7,")"),r.Ub(),r.Vb(8,"div",4),r.Vb(9,"div",5),r.hc("ngModelChange",(function(e){return t.model=e})),r.Vb(10,"label",6),r.Qb(11,"input",7),r.Lc(12," Left (pre-checked) "),r.Ub(),r.Vb(13,"label",6),r.Qb(14,"input",8),r.Lc(15," Middle "),r.Ub(),r.Vb(16,"label",6),r.Qb(17,"input",7),r.Lc(18," Right "),r.Ub(),r.Ub(),r.Vb(19,"div",9),r.Vb(20,"strong"),r.Lc(21,"Selected Value: "),r.Ub(),r.Lc(22),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Vb(23,"div",1),r.Vb(24,"div",2),r.Vb(25,"div",3),r.Lc(26,"Radio Button group ("),r.Vb(27,"strong"),r.Lc(28,"Ractive Forms"),r.Ub(),r.Lc(29,")"),r.Ub(),r.Vb(30,"div",4),r.Vb(31,"form",10),r.Vb(32,"div",11),r.Vb(33,"label",6),r.Qb(34,"input",7),r.Lc(35," Left (pre-checked) "),r.Ub(),r.Vb(36,"label",6),r.Qb(37,"input",8),r.Lc(38," Middle "),r.Ub(),r.Vb(39,"label",6),r.Qb(40,"input",7),r.Lc(41," Right "),r.Ub(),r.Ub(),r.Ub(),r.Vb(42,"div",9),r.Vb(43,"strong"),r.Lc(44,"Selected Value: "),r.Ub(),r.Lc(45),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Ub()),2&e&&(r.Cb(9),r.pc("ngModel",t.model),r.Cb(2),r.pc("value",1),r.Cb(6),r.pc("value",!1),r.Cb(5),r.Mc(t.model),r.Cb(9),r.pc("formGroup",t.radioGroupForm),r.Cb(3),r.pc("value",1),r.Cb(6),r.pc("value",!1),r.Cb(5),r.Nc("",t.radioGroupForm.value.model," "))},directives:[o.v,b.i,b.l,o.d,o.u,b.q,b.j,b.e,b.d],styles:[""]}),e})(),m=(()=>{class e{constructor(){this.isCollapsed=!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Jb({type:e,selectors:[["app-collapse"]],decls:13,vars:2,consts:[[1,"row"],[1,"col-lg-12"],[1,"card","mb-3"],[1,"card-header"],[1,"card-body"],["aria-controls","collapseExample","type","button",1,"btn","btn-outline-primary",3,"click"],["id","collapseExample",3,"ngbCollapse"],[1,"card"]],template:function(e,t){1&e&&(r.Vb(0,"div",0),r.Vb(1,"div",1),r.Vb(2,"div",2),r.Vb(3,"div",3),r.Lc(4,"Collapse"),r.Ub(),r.Vb(5,"div",4),r.Vb(6,"p"),r.Vb(7,"button",5),r.hc("click",(function(){return t.isCollapsed=!t.isCollapsed})),r.Lc(8," Toggle "),r.Ub(),r.Ub(),r.Vb(9,"div",6),r.Vb(10,"div",7),r.Vb(11,"div",4),r.Lc(12," You can collapse this card by clicking Toggle "),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Ub()),2&e&&(r.Cb(7),r.Db("aria-expanded",!t.isCollapsed),r.Cb(2),r.pc("ngbCollapse",t.isCollapsed))},directives:[o.g],styles:[""]}),e})(),h=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Jb({type:e,selectors:[["app-date-picker"]],decls:18,vars:4,consts:[[1,"row"],[1,"col-lg-12"],[1,"card","mb-3"],[1,"card-header"],[1,"card-body"],[1,"form-inline","mb-3"],[1,"form-group"],[1,"input-group","datepicker-input"],["name","dp","ngbDatepicker","","placeholder","yyyy-mm-dd",1,"form-control",3,"ngModel","ngModelChange"],["d","ngbDatepicker"],["type","button",1,"input-group-addon",3,"click"],[1,"fa","fa-calendar"],[1,"alert","alert-info","mb-0"]],template:function(e,t){if(1&e){const e=r.Wb();r.Vb(0,"div",0),r.Vb(1,"div",1),r.Vb(2,"div",2),r.Vb(3,"div",3),r.Lc(4,"Date Picker"),r.Ub(),r.Vb(5,"div",4),r.Vb(6,"form",5),r.Vb(7,"div",6),r.Vb(8,"div",7),r.Vb(9,"input",8,9),r.hc("ngModelChange",(function(e){return t.model=e})),r.Ub(),r.Vb(11,"button",10),r.hc("click",(function(){return r.Bc(e),r.Ac(10).toggle()})),r.Qb(12,"span",11),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Vb(13,"div",12),r.Vb(14,"strong"),r.Lc(15,"Model: "),r.Ub(),r.Lc(16),r.kc(17,"json"),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Ub()}2&e&&(r.Cb(9),r.pc("ngModel",t.model),r.Cb(7),r.Nc(" ",r.lc(17,2,t.model),""))},directives:[b.q,b.j,b.k,o.n,b.b,b.i,b.l],pipes:[i.f],styles:["[_nghost-%COMP%]     .datepicker-input .custom-select{width:50%}"]}),e})(),V=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Jb({type:e,selectors:[["app-dropdown"]],decls:49,vars:0,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[1,"row"],[1,"col"],["ngbDropdown","",1,"d-inline-block","dropdown"],["ngbDropdownToggle","",1,"btn","btn-outline-primary"],["ngbDropdownMenu",""],[1,"dropdown-item"],[1,"col","text-right"],["ngbDropdown","","placement","top-right",1,"d-inline-block","dropdown"],[1,"mb-2"],["myDrop","ngbDropdown"],[1,"btn","btn-outline-success",3,"click"],[1,"btn","btn-outline-danger",3,"click"]],template:function(e,t){if(1&e){const e=r.Wb();r.Vb(0,"div",0),r.Vb(1,"div",1),r.Lc(2,"Dropdown"),r.Ub(),r.Vb(3,"div",2),r.Vb(4,"div",3),r.Vb(5,"div",4),r.Vb(6,"div",5),r.Vb(7,"button",6),r.Lc(8,"Toggle dropdown"),r.Ub(),r.Vb(9,"div",7),r.Vb(10,"button",8),r.Lc(11,"Action"),r.Ub(),r.Vb(12,"button",8),r.Lc(13,"Another Action"),r.Ub(),r.Vb(14,"button",8),r.Lc(15,"Something else is here"),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Vb(16,"div",9),r.Vb(17,"div",10),r.Vb(18,"button",6),r.Lc(19,"Toggle dropup"),r.Ub(),r.Vb(20,"div",7),r.Vb(21,"button",8),r.Lc(22,"Action"),r.Ub(),r.Vb(23,"button",8),r.Lc(24,"Another Action"),r.Ub(),r.Vb(25,"button",8),r.Lc(26,"Something else is here"),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Qb(27,"hr"),r.Vb(28,"p",11),r.Lc(29,"You can easily control dropdowns programmatically using the exported dropdown instance."),r.Ub(),r.Vb(30,"div",5,12),r.Vb(32,"button",6),r.Lc(33,"Toggle dropdown"),r.Ub(),r.Vb(34,"div",7),r.Vb(35,"button",8),r.Lc(36,"Action"),r.Ub(),r.Vb(37,"button",8),r.Lc(38,"Another Action"),r.Ub(),r.Vb(39,"button",8),r.Lc(40,"Something else is here"),r.Ub(),r.Ub(),r.Ub(),r.Vb(41,"div",5,12),r.Vb(43,"button",13),r.hc("click",(function(t){r.Bc(e);const n=r.Ac(31);return t.stopPropagation(),n.open()})),r.Lc(44," Open from outside "),r.Ub(),r.Ub(),r.Vb(45,"div",5,12),r.Vb(47,"button",14),r.hc("click",(function(t){r.Bc(e);const n=r.Ac(31);return t.stopPropagation(),n.close()})),r.Lc(48," Close from outside "),r.Ub(),r.Ub(),r.Ub(),r.Ub()}},directives:[o.j,o.m,o.k],styles:[""]}),e})(),v=(()=>{class e{constructor(){this.defaultPagination=1,this.advancedPagination=1,this.paginationSize=1,this.disabledPagination=1,this.isDisabled=!0}toggleDisabled(){this.isDisabled=!this.isDisabled}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Jb({type:e,selectors:[["app-pagination"]],decls:57,vars:34,consts:[[1,"row"],[1,"col","col-sm-6"],[1,"card","mt-3"],[1,"card-header"],[1,"card-body"],[1,"text-uppercase","text-muted","fs-12"],[3,"page","collectionSize","pageChange"],[3,"page","collectionSize","directionLinks","pageChange"],[3,"page","boundaryLinks","collectionSize","pageChange"],[1,"alert","alert-info"],[3,"page","boundaryLinks","collectionSize","maxSize","pageChange"],[3,"page","boundaryLinks","collectionSize","maxSize","rotate","pageChange"],[3,"page","boundaryLinks","collectionSize","ellipses","maxSize","rotate","pageChange"],["size","lg",3,"page","collectionSize","pageChange"],["size","sm",3,"page","collectionSize","pageChange"],[3,"page","collectionSize","disabled","pageChange"],[1,"btn","btn-outline-primary",3,"click"]],template:function(e,t){1&e&&(r.Vb(0,"div",0),r.Vb(1,"div",1),r.Vb(2,"div",2),r.Vb(3,"div",3),r.Lc(4,"Basic Pagination"),r.Ub(),r.Vb(5,"div",4),r.Vb(6,"div",5),r.Lc(7,"Default pagination"),r.Ub(),r.Vb(8,"ngb-pagination",6),r.hc("pageChange",(function(e){return t.defaultPagination=e})),r.Ub(),r.Vb(9,"div",5),r.Lc(10,"directionLinks = false"),r.Ub(),r.Vb(11,"ngb-pagination",7),r.hc("pageChange",(function(e){return t.defaultPagination=e})),r.Ub(),r.Vb(12,"div",5),r.Lc(13,"boundaryLinks = true"),r.Ub(),r.Vb(14,"ngb-pagination",8),r.hc("pageChange",(function(e){return t.defaultPagination=e})),r.Ub(),r.Vb(15,"div",9),r.Vb(16,"b"),r.Lc(17,"Current page: "),r.Ub(),r.Lc(18),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Vb(19,"div",1),r.Vb(20,"div",2),r.Vb(21,"div",3),r.Lc(22,"Advanced Pagination"),r.Ub(),r.Vb(23,"div",4),r.Vb(24,"div",5),r.Lc(25,"maxSize = 5, rotate = false"),r.Ub(),r.Vb(26,"ngb-pagination",10),r.hc("pageChange",(function(e){return t.advancedPagination=e})),r.Ub(),r.Vb(27,"div",5),r.Lc(28,"maxSize = 5, rotate = true"),r.Ub(),r.Vb(29,"ngb-pagination",11),r.hc("pageChange",(function(e){return t.advancedPagination=e})),r.Ub(),r.Vb(30,"div",5),r.Lc(31,"maxSize = 5, rotate = true, ellipses = false"),r.Ub(),r.Vb(32,"ngb-pagination",12),r.hc("pageChange",(function(e){return t.advancedPagination=e})),r.Ub(),r.Vb(33,"div",9),r.Vb(34,"b"),r.Lc(35,"Current page: "),r.Ub(),r.Lc(36),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Vb(37,"div",0),r.Vb(38,"div",1),r.Vb(39,"div",2),r.Vb(40,"div",3),r.Lc(41,"Pagination size"),r.Ub(),r.Vb(42,"div",4),r.Vb(43,"ngb-pagination",13),r.hc("pageChange",(function(e){return t.paginationSize=e})),r.Ub(),r.Vb(44,"ngb-pagination",6),r.hc("pageChange",(function(e){return t.paginationSize=e})),r.Ub(),r.Vb(45,"ngb-pagination",14),r.hc("pageChange",(function(e){return t.paginationSize=e})),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Vb(46,"div",1),r.Vb(47,"div",2),r.Vb(48,"div",3),r.Lc(49,"Disabled pagination"),r.Ub(),r.Vb(50,"div",4),r.Vb(51,"p"),r.Lc(52,"Pagination control can be disabled:"),r.Ub(),r.Vb(53,"ngb-pagination",15),r.hc("pageChange",(function(e){return t.disabledPagination=e})),r.Ub(),r.Qb(54,"hr"),r.Vb(55,"button",16),r.hc("click",(function(){return t.toggleDisabled()})),r.Lc(56," Toggle disabled "),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Ub()),2&e&&(r.Cb(8),r.pc("page",t.defaultPagination)("collectionSize",70),r.Cb(3),r.pc("page",t.defaultPagination)("collectionSize",70)("directionLinks",!1),r.Cb(3),r.pc("page",t.defaultPagination)("boundaryLinks",!0)("collectionSize",70),r.Cb(4),r.Mc(t.defaultPagination),r.Cb(8),r.pc("page",t.advancedPagination)("boundaryLinks",!0)("collectionSize",120)("maxSize",5),r.Cb(3),r.pc("page",t.advancedPagination)("boundaryLinks",!0)("collectionSize",120)("maxSize",5)("rotate",!0),r.Cb(3),r.pc("page",t.advancedPagination)("boundaryLinks",!0)("collectionSize",120)("ellipses",!1)("maxSize",5)("rotate",!0),r.Cb(4),r.Mc(t.advancedPagination),r.Cb(7),r.pc("page",t.paginationSize)("collectionSize",50),r.Cb(1),r.pc("page",t.paginationSize)("collectionSize",50),r.Cb(1),r.pc("page",t.paginationSize)("collectionSize",50),r.Cb(8),r.pc("page",t.disabledPagination)("collectionSize",70)("disabled",t.isDisabled))},directives:[o.r],styles:[""]}),e})(),U=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Jb({type:e,selectors:[["app-pop-over"]],decls:12,vars:0,consts:[[1,"card","mt-3"],[1,"card-header"],[1,"card-body"],["ngbPopover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","placement","top","popoverTitle","Popover on top","type","button",1,"btn","btn-secondary"],["ngbPopover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","placement","right","popoverTitle","Popover on right","type","button",1,"btn","btn-secondary"],["ngbPopover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","placement","bottom","popoverTitle","Popover on bottom","type","button",1,"btn","btn-secondary"],["ngbPopover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","placement","left","popoverTitle","Popover on left","type","button",1,"btn","btn-secondary"]],template:function(e,t){1&e&&(r.Vb(0,"div",0),r.Vb(1,"div",1),r.Lc(2," Pop over "),r.Ub(),r.Vb(3,"div",2),r.Vb(4,"button",3),r.Lc(5," Popover on top "),r.Ub(),r.Vb(6,"button",4),r.Lc(7," Popover on right "),r.Ub(),r.Vb(8,"button",5),r.Lc(9," Popover on bottom "),r.Ub(),r.Vb(10,"button",6),r.Lc(11," Popover on left "),r.Ub(),r.Ub(),r.Ub())},directives:[o.s],styles:[""]}),e})(),f=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Jb({type:e,selectors:[["app-progressbar"]],decls:26,vars:12,consts:[[1,"card","mt-3"],[1,"card-header"],[1,"card-body"],["type","info",3,"value"],["showValue","true","type","warning",3,"max","value"],["type","danger",3,"striped","value"],["type","success",3,"value"],["type","warning",3,"animated","striped","value"],[1,"mb-0"]],template:function(e,t){1&e&&(r.Vb(0,"div",0),r.Vb(1,"div",1),r.Lc(2,"Progressbar"),r.Ub(),r.Vb(3,"div",2),r.Vb(4,"p"),r.Qb(5,"ngb-progressbar",3),r.Ub(),r.Vb(6,"p"),r.Qb(7,"ngb-progressbar",4),r.Ub(),r.Vb(8,"p"),r.Qb(9,"ngb-progressbar",5),r.Ub(),r.Vb(10,"p"),r.Vb(11,"ngb-progressbar",6),r.Lc(12,"25"),r.Ub(),r.Ub(),r.Vb(13,"p"),r.Vb(14,"ngb-progressbar",3),r.Lc(15,"Copying file "),r.Vb(16,"b"),r.Lc(17,"2 of 4"),r.Ub(),r.Lc(18,"..."),r.Ub(),r.Ub(),r.Vb(19,"p"),r.Vb(20,"ngb-progressbar",7),r.Vb(21,"i"),r.Lc(22,"50%"),r.Ub(),r.Ub(),r.Ub(),r.Vb(23,"p",8),r.Vb(24,"ngb-progressbar",5),r.Lc(25,"Completed!"),r.Ub(),r.Ub(),r.Ub(),r.Ub()),2&e&&(r.Cb(5),r.pc("value",50),r.Cb(2),r.pc("max",200)("value",150),r.Cb(2),r.pc("striped",!0)("value",100),r.Cb(2),r.pc("value",25),r.Cb(3),r.pc("value",50),r.Cb(6),r.pc("animated",!0)("striped",!0)("value",75),r.Cb(4),r.pc("striped",!0)("value",100))},directives:[o.t],styles:[""]}),e})();function y(e,t){1&e&&(r.Vb(0,"p"),r.Lc(1," Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui. "),r.Ub())}function L(e,t){1&e&&(r.Vb(0,"b"),r.Lc(1,"Fancy"),r.Ub(),r.Lc(2," title"))}function C(e,t){1&e&&(r.Vb(0,"p"),r.Lc(1," Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park. "),r.Ub())}function S(e,t){1&e&&(r.Vb(0,"p"),r.Lc(1," Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui. "),r.Ub())}function w(e,t){1&e&&(r.Vb(0,"p"),r.Lc(1," Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui. "),r.Ub())}function k(e,t){1&e&&(r.Vb(0,"b"),r.Lc(1,"Fancy"),r.Ub(),r.Lc(2," title"))}function M(e,t){1&e&&(r.Lc(0,"Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. "),r.Vb(1,"p"),r.Lc(2," Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park. "),r.Ub())}function T(e,t){1&e&&(r.Vb(0,"p"),r.Lc(1," Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui. "),r.Ub())}let P=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Jb({type:e,selectors:[["app-tabs"]],decls:27,vars:2,consts:[[1,"row","mt-3"],[1,"col-sm-6"],[1,"card"],[1,"card-header"],[1,"card-body"],["title","Simple"],["ngbTabContent",""],["ngbTabTitle",""],["title","Disabled",3,"disabled"],["type","pills"]],template:function(e,t){1&e&&(r.Vb(0,"div",0),r.Vb(1,"div",1),r.Vb(2,"div",2),r.Vb(3,"div",3),r.Lc(4,"Tabset"),r.Ub(),r.Vb(5,"div",4),r.Vb(6,"ngb-tabset"),r.Vb(7,"ngb-tab",5),r.Jc(8,y,2,0,"ng-template",6),r.Ub(),r.Vb(9,"ngb-tab"),r.Jc(10,L,3,0,"ng-template",7),r.Jc(11,C,2,0,"ng-template",6),r.Ub(),r.Vb(12,"ngb-tab",8),r.Jc(13,S,2,0,"ng-template",6),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Vb(14,"div",1),r.Vb(15,"div",2),r.Vb(16,"div",3),r.Lc(17,"Pills"),r.Ub(),r.Vb(18,"div",4),r.Vb(19,"ngb-tabset",9),r.Vb(20,"ngb-tab",5),r.Jc(21,w,2,0,"ng-template",6),r.Ub(),r.Vb(22,"ngb-tab"),r.Jc(23,k,3,0,"ng-template",7),r.Jc(24,M,3,0,"ng-template",6),r.Ub(),r.Vb(25,"ngb-tab",8),r.Jc(26,T,2,0,"ng-template",6),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Ub()),2&e&&(r.Cb(12),r.pc("disabled",!0),r.Cb(13),r.pc("disabled",!0))},directives:[o.A,o.x,o.y,o.z],styles:[""]}),e})();function z(e,t){1&e&&(r.Vb(0,"em"),r.Lc(1,"Tooltip"),r.Ub(),r.Vb(2,"u"),r.Lc(3,"with"),r.Ub(),r.Vb(4,"b"),r.Lc(5,"HTML"),r.Ub())}let q=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Jb({type:e,selectors:[["app-tooltip"]],decls:16,vars:1,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],["ngbTooltip","Tooltip on top","placement","top","type","button",1,"btn","btn-secondary"],["ngbTooltip","Tooltip on right","placement","right","type","button",1,"btn","btn-secondary"],["ngbTooltip","Tooltip on bottom","placement","bottom","type","button",1,"btn","btn-secondary"],["ngbTooltip","Tooltip on left","placement","left","type","button",1,"btn","btn-secondary"],["StaticTipContent",""],["data-html","true","type","button",1,"btn","btn-secondary",3,"ngbTooltip"]],template:function(e,t){if(1&e&&(r.Vb(0,"div",0),r.Vb(1,"div",1),r.Lc(2," Tooltip "),r.Ub(),r.Vb(3,"div",2),r.Vb(4,"button",3),r.Lc(5," Tooltip on top "),r.Ub(),r.Vb(6,"button",4),r.Lc(7," Tooltip on right "),r.Ub(),r.Vb(8,"button",5),r.Lc(9," Tooltip on bottom "),r.Ub(),r.Vb(10,"button",6),r.Lc(11," Tooltip on left "),r.Ub(),r.Jc(12,z,6,0,"ng-template",null,7,r.Kc),r.Vb(14,"button",8),r.Lc(15," Tooltip with HTML "),r.Ub(),r.Ub(),r.Ub()),2&e){const e=r.Ac(13);r.Cb(14),r.pc("ngbTooltip",e)}},directives:[o.C],styles:[""]}),e})(),Q=(()=>{class e{constructor(){this.defaultTime={hour:13,minute:30},this.meridianTime={hour:13,minute:30},this.meridian=!0,this.SecondsTime={hour:13,minute:30,second:30},this.seconds=!0,this.customTime={hour:13,minute:30,second:0},this.hourStep=1,this.minuteStep=15,this.secondStep=30}toggleSeconds(){this.seconds=!this.seconds}toggleMeridian(){this.meridian=!this.meridian}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Jb({type:e,selectors:[["app-timepicker"]],decls:74,vars:33,consts:[[1,"row","mt-3"],[1,"col-sm-6"],[1,"card"],[1,"card-header"],[1,"card-body"],[3,"ngModel","ngModelChange"],[1,"alert","alert-info"],[3,"ngModel","meridian","ngModelChange"],[3,"click"],[1,"alert","alert-info","mt-3","mb-0"],[3,"ngModel","seconds","ngModelChange"],[1,"col-sm-6","mt-3"],[3,"ngModel","hourStep","minuteStep","secondStep","seconds","ngModelChange"],[1,"row"],[1,"col-sm-4"],["for","changeHourStep"],["type","number",1,"form-control",3,"ngModel","ngModelChange"],["for","changeMinuteStep"],["for","changeSecondStep"]],template:function(e,t){1&e&&(r.Vb(0,"div",0),r.Vb(1,"div",1),r.Vb(2,"div",2),r.Vb(3,"div",3),r.Lc(4,"Timepicker ("),r.Vb(5,"b"),r.Lc(6,"Default"),r.Ub(),r.Lc(7,")"),r.Ub(),r.Vb(8,"div",4),r.Vb(9,"ngb-timepicker",5),r.hc("ngModelChange",(function(e){return t.defaultTime=e})),r.Ub(),r.Vb(10,"div",6),r.Vb(11,"b"),r.Lc(12,"Selected time: "),r.Ub(),r.Lc(13),r.kc(14,"json"),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Vb(15,"div",1),r.Vb(16,"div",2),r.Vb(17,"div",3),r.Lc(18,"Timepicker ("),r.Vb(19,"b"),r.Lc(20,"Default"),r.Ub(),r.Lc(21,")"),r.Ub(),r.Vb(22,"div",4),r.Vb(23,"ngb-timepicker",7),r.hc("ngModelChange",(function(e){return t.meridianTime=e})),r.Ub(),r.Vb(24,"button",8),r.hc("click",(function(){return t.toggleMeridian()})),r.Lc(25),r.Ub(),r.Vb(26,"div",9),r.Vb(27,"b"),r.Lc(28,"Selected time: "),r.Ub(),r.Lc(29),r.kc(30,"json"),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Vb(31,"div",1),r.Vb(32,"div",2),r.Vb(33,"div",3),r.Lc(34,"Timepicker ("),r.Vb(35,"b"),r.Lc(36,"Seconds"),r.Ub(),r.Lc(37,")"),r.Ub(),r.Vb(38,"div",4),r.Vb(39,"ngb-timepicker",10),r.hc("ngModelChange",(function(e){return t.SecondsTime=e})),r.Ub(),r.Vb(40,"button",8),r.hc("click",(function(){return t.toggleSeconds()})),r.Lc(41),r.Ub(),r.Vb(42,"div",9),r.Vb(43,"b"),r.Lc(44,"Selected time: "),r.Ub(),r.Lc(45),r.kc(46,"json"),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Vb(47,"div",11),r.Vb(48,"div",2),r.Vb(49,"div",3),r.Lc(50,"Timepicker ("),r.Vb(51,"b"),r.Lc(52,"Custom Step"),r.Ub(),r.Lc(53,")"),r.Ub(),r.Vb(54,"div",4),r.Vb(55,"ngb-timepicker",12),r.hc("ngModelChange",(function(e){return t.customTime=e})),r.Ub(),r.Vb(56,"div",13),r.Vb(57,"div",14),r.Vb(58,"label",15),r.Lc(59,"Hour Step"),r.Ub(),r.Vb(60,"input",16),r.hc("ngModelChange",(function(e){return t.hourStep=e})),r.Ub(),r.Ub(),r.Vb(61,"div",14),r.Vb(62,"label",17),r.Lc(63,"Minute Step"),r.Ub(),r.Vb(64,"input",16),r.hc("ngModelChange",(function(e){return t.minuteStep=e})),r.Ub(),r.Ub(),r.Vb(65,"div",14),r.Vb(66,"label",18),r.Lc(67,"Second Step"),r.Ub(),r.Vb(68,"input",16),r.hc("ngModelChange",(function(e){return t.secondStep=e})),r.Ub(),r.Ub(),r.Ub(),r.Vb(69,"div",9),r.Vb(70,"b"),r.Lc(71,"Selected time: "),r.Ub(),r.Lc(72),r.kc(73,"json"),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Ub()),2&e&&(r.Cb(9),r.pc("ngModel",t.defaultTime),r.Cb(4),r.Mc(r.lc(14,25,t.defaultTime)),r.Cb(10),r.pc("ngModel",t.meridianTime)("meridian",t.meridian),r.Cb(1),r.Fb("btn btn-sm btn-outline-",t.meridian?"success":"danger",""),r.Cb(1),r.Nc(" Meridian - ",t.meridian?"ON":"OFF"," "),r.Cb(4),r.Mc(r.lc(30,27,t.meridianTime)),r.Cb(10),r.pc("ngModel",t.SecondsTime)("seconds",t.seconds),r.Cb(1),r.Fb("btn btn-sm btn-outline-",t.seconds?"success":"danger",""),r.Cb(1),r.Nc(" Seconds - ",t.seconds?"ON":"OFF"," "),r.Cb(4),r.Mc(r.lc(46,29,t.SecondsTime)),r.Cb(10),r.pc("ngModel",t.customTime)("hourStep",t.hourStep)("minuteStep",t.minuteStep)("secondStep",t.secondStep)("seconds",!0),r.Cb(5),r.pc("ngModel",t.hourStep),r.Cb(4),r.pc("ngModel",t.minuteStep),r.Cb(4),r.pc("ngModel",t.secondStep),r.Cb(4),r.Mc(r.lc(73,31,t.customTime)))},directives:[o.B,b.i,b.l,b.n,b.b],pipes:[i.f],styles:[""]}),e})(),x=(()=>{class e{constructor(){this.currentRate=8}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Jb({type:e,selectors:[["app-rating"]],decls:13,vars:2,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[3,"rate","rateChange"]],template:function(e,t){1&e&&(r.Vb(0,"div",0),r.Vb(1,"div",1),r.Lc(2,"Rating ("),r.Vb(3,"strong"),r.Lc(4,"Basic demo"),r.Ub(),r.Lc(5,")"),r.Ub(),r.Vb(6,"div",2),r.Vb(7,"ngb-rating",3),r.hc("rateChange",(function(e){return t.currentRate=e})),r.Ub(),r.Qb(8,"hr"),r.Vb(9,"pre"),r.Lc(10,"Rate: "),r.Vb(11,"b"),r.Lc(12),r.Ub(),r.Ub(),r.Ub(),r.Ub()),2&e&&(r.Cb(7),r.pc("rate",t.currentRate),r.Cb(5),r.Mc(t.currentRate))},directives:[o.w],styles:[""]}),e})();const R=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Jb({type:e,selectors:[["app-bs-component"]],decls:15,vars:2,consts:[[3,"heading","icon"]],template:function(e,t){1&e&&(r.Vb(0,"div"),r.Qb(1,"app-page-header",0),r.Qb(2,"app-modal"),r.Qb(3,"app-alert"),r.Qb(4,"app-buttons"),r.Qb(5,"app-collapse"),r.Qb(6,"app-date-picker"),r.Qb(7,"app-dropdown"),r.Qb(8,"app-pagination"),r.Qb(9,"app-pop-over"),r.Qb(10,"app-progressbar"),r.Qb(11,"app-tabs"),r.Qb(12,"app-tooltip"),r.Qb(13,"app-timepicker"),r.Qb(14,"app-rating"),r.Ub()),2&e&&(r.Cb(1),r.pc("heading","Bootstrap Component")("icon","fa-th-list"))},directives:[s.a,d,u,g,m,h,V,v,U,f,P,q,Q,x],styles:[""]}),e})()}];let A=(()=>{class e{}return e.\u0275mod=r.Nb({type:e}),e.\u0275inj=r.Mb({factory:function(t){return new(t||e)},imports:[[c.e.forChild(R)],c.e]}),e})(),D=(()=>{class e{}return e.\u0275mod=r.Nb({type:e}),e.\u0275inj=r.Mb({factory:function(t){return new(t||e)},imports:[[i.b,A,b.f,b.o,o.p,a.b]]}),e})()}}]);