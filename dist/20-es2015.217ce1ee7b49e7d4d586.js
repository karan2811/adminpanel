(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{Q6Ud:function(e,n,o){"use strict";o.r(n),o.d(n,"MealfoodModule",(function(){return S}));var t=o("ofXK"),i=o("M0ag"),a=o("tyNb"),l=o("ZZ88"),r=o("tk/3"),c=(o("AJX/"),o("fXoL"));let d=(()=>{class e{constructor(e){this.http=e,this.ServerUrl="http://18.212.2.14:9000/"}MealfoodList(){const e=new r.c({Authorization:localStorage.getItem("token")});return this.http.get(this.ServerUrl+"rest/meal/listmeal",{headers:e,responseType:"json"}).map(e=>e)}DeletePremiumplan(e){const n=new r.c({Authorization:localStorage.getItem("token")});return this.http.delete(this.ServerUrl+"rest/meal/delete/"+e,{headers:n,responseType:"json"}).map(e=>e)}AddNewFood(e){const n=new r.c({Authorization:localStorage.getItem("token")});return this.http.post(this.ServerUrl+"rest/meal/addnewmeal",e,{headers:n,responseType:"json"}).map(e=>e)}}return e.\u0275fac=function(n){return new(n||e)(c.dc(r.a))},e.\u0275prov=c.Lb({token:e,factory:e.\u0275fac}),e})();var b=o("3zLz"),s=o("rEr+"),g=o("7zfz"),h=o("/RsI"),p=o("jIHw"),m=o("3Pt+");function u(e,n){if(1&e&&(c.Vb(0,"th",58),c.Lc(1),c.Qb(2,"p-sortIcon",59),c.Ub()),2&e){const e=n.$implicit;c.pc("pSortableColumn",e.field),c.Cb(1),c.Nc(" ",e.header," "),c.Cb(1),c.pc("field",e.field)}}const f=function(){return{width:"50px"}};function M(e,n){if(1&e){const e=c.Wb();c.Vb(0,"tr"),c.Jc(1,u,3,3,"th",55),c.Vb(2,"th",56),c.Vb(3,"i",57),c.hc("click",(function(){c.Bc(e);const n=c.jc();return n.AddNewFood(n.rowData)})),c.Ub(),c.Ub(),c.Ub()}if(2&e){const e=n.$implicit;c.Cb(1),c.pc("ngForOf",e),c.Cb(1),c.Hc(c.sc(3,f))}}function U(e,n){if(1&e&&c.Qb(0,"img",65),2&e){const e=c.jc().$implicit,n=c.jc().$implicit;c.qc("src",n[e.field],c.Dc)}}function V(e,n){if(1&e&&(c.Vb(0,"div"),c.Lc(1),c.Ub()),2&e){const e=c.jc().$implicit,n=c.jc().$implicit;c.Cb(1),c.Mc(n[e.field])}}function C(e,n){if(1&e&&(c.Vb(0,"td"),c.Jc(1,U,1,1,"img",63),c.Jc(2,V,2,1,"div",64),c.Ub()),2&e){const e=n.first;c.Cb(1),c.pc("ngIf",e),c.Cb(1),c.pc("ngIf",!e)}}function v(e,n){if(1&e){const e=c.Wb();c.Vb(0,"tr",60),c.Jc(1,C,3,2,"td",61),c.Vb(2,"td",56),c.Vb(3,"i",62),c.hc("click",(function(){c.Bc(e);const o=n.$implicit;return c.jc().DeleteFood(o)})),c.Ub(),c.Ub(),c.Ub()}if(2&e){const e=n.columns,o=n.rowIndex;c.pc("pSelectableRow",n.$implicit)("pSelectableRowIndex",o),c.Cb(1),c.pc("ngForOf",e)}}const y=function(){return[20,30]},F=function(){return{width:"30vw"}},w=[{path:"",component:(()=>{class e{constructor(e){this.mealfoodService=e,this.marked=!1,this.isBestValue=!1}ngOnInit(){this.MealfoodList(),this.cols=[{field:"image_name",header:"Image"},{field:"name",header:"Name"},{field:"grocery_list_name",header:"Grocery List Name"},{field:"category",header:"Category"},{field:"size",header:"Size"},{field:"cal",header:"calories"},{field:"fats",header:"Fat"},{field:"carbs",header:"Carbohydrate"},{field:"prot",header:"Protin"},{field:"sugar",header:"Sugar"}]}MealfoodList(){this.mealfoodService.MealfoodList().subscribe(e=>{console.log(e),1==e.success&&(this.myData=e.data)})}DeleteFood(e){this.deleteFoodId=e._id,this.displayModal=!0,console.log(e)}DeletConfirm(e){1==e&&this.mealfoodService.DeletePremiumplan(this.deleteFoodId).subscribe(e=>{console.log("delete->"+e),1==e.success?(this.deleteFoodId=void 0,this.displayModal=!1,this.MealfoodList()):this.deleteFoodId=void 0})}toggleVisibility(e){this.marked=e.target.checked}AddNewFood(){this.newFoodModal=!0}SavePlan(e){if(1==e){const e=new FormData;e.append("name",this.name),e.append("grocery_list_name",this.grocery_list_name),e.append("category",this.category),e.append("size",this.size),e.append("cal",this.cal.toString()),e.append("fats",this.fats.toString()),e.append("carbs",this.carbs.toString()),e.append("fiber",this.fiber.toString()),e.append("prot",this.prot.toString()),e.append("sodium",this.sodium.toString()),e.append("sugar",this.sugar.toString()),e.append("meal1",1==this.meal1?"TRUE":"FALSE"),e.append("meal2",1==this.meal2?"TRUE":"FALSE"),e.append("meal3",1==this.meal3?"TRUE":"FALSE"),e.append("meal4",1==this.meal4?"TRUE":"FALSE"),e.append("meal5",1==this.meal5?"TRUE":"FALSE"),e.append("meal6",1==this.meal6?"TRUE":"FALSE"),e.append("paleo",1==this.paleo?"TRUE":"FALSE"),e.append("mediterranean",1==this.mediterranean?"TRUE":"FALSE"),e.append("file",this.file),this.mealfoodService.AddNewFood(e).subscribe(e=>{1==e.success&&(this.newFoodModal=!1,this.MealfoodList()),this.name=void 0,this.grocery_list_name=void 0,this.category=void 0,this.size=void 0,this.cal=void 0,this.fats=void 0,this.carbs=void 0,this.fiber=void 0,this.prot=void 0,this.sodium=void 0,this.sugar=void 0,this.meal1=void 0,this.meal2=void 0,this.meal3=void 0,this.meal4=void 0,this.meal5=void 0,this.meal6=void 0,this.paleo=void 0,this.mediterranean=void 0,this.file=void 0})}else this.newFoodModal=!1,this.MealfoodList()}onFileChange(e){e.target.files.length>0&&(this.file=e.target.files[0],console.log(e.target.files[0]))}}return e.\u0275fac=function(n){return new(n||e)(c.Pb(d))},e.\u0275cmp=c.Jb({type:e,selectors:[["app-premiumplan"]],features:[c.Bb([d])],decls:109,vars:44,consts:[[3,"heading","icon"],[1,"row",2,"padding","0.75rem 1rem"],[3,"columns","value","paginator","rows","rowsPerPageOptions"],["pTemplate","header"],["pTemplate","body"],["header","Please Confirm",3,"visible","modal","baseZIndex","draggable","resizable","visibleChange"],[2,"text-align","center","margin","20px"],["type","button","pButton","","icon","pi pi-check","label","Yes",3,"click"],["type","button","pButton","","icon","pi pi-times","label","No",1,"ui-button-secondary",3,"click"],["header","Add New Meal Food",3,"visible","modal","baseZIndex","draggable","resizable","visibleChange"],["from1","ngForm"],[1,"form-group"],["for","name"],[1,"input-group"],["id","name","name","name",1,"form-control",3,"ngModel","ngModelChange"],["for","grocery_list_name"],["id","grocery_list_name","name","grocery_list_name",1,"form-control",3,"ngModel","ngModelChange"],["for","category"],["id","category","name","category",1,"form-control",3,"ngModel","ngModelChange"],["for","size"],["id","size","name","size",1,"form-control",3,"ngModel","ngModelChange"],["for","cal"],["id","cal","name","cal",1,"form-control",3,"ngModel","ngModelChange"],["for","fats"],["id","fats","name","fats",1,"form-control",3,"ngModel","ngModelChange"],["for","carbs"],["type","number","id","carbs","name","carbs",1,"form-control",3,"ngModel","ngModelChange"],["for","prot"],["type","number","id","prot","name","prot",1,"form-control",3,"ngModel","ngModelChange"],["for","fiber"],["type","number","id","fiber","name","fiber",1,"form-control",3,"ngModel","ngModelChange"],["for","sodium"],["type","number","id","sodium","name","sodium",1,"form-control",3,"ngModel","ngModelChange"],["for","sugar"],["type","number","id","sugar","name","sugar",1,"form-control",3,"ngModel","ngModelChange"],["for","mediterranean"],["type","checkbox","name","mediterranean","data-md-icheck","","id","mediterranean",3,"ngModel","ngModelChange","change"],["for","paleo"],["type","checkbox","name","paleo","data-md-icheck","","id","paleo",3,"ngModel","ngModelChange","change"],["for","meal1"],["type","checkbox","name","meal1","data-md-icheck","","id","meal1",3,"ngModel","ngModelChange","change"],["for","meal2"],["type","checkbox","name","meal2","data-md-icheck","","id","meal2",3,"ngModel","ngModelChange","change"],["for","meal3"],["type","checkbox","name","meal3","data-md-icheck","","id","meal3",3,"ngModel","ngModelChange","change"],["for","meal4"],["type","checkbox","name","meal4","data-md-icheck","","id","meal4",3,"ngModel","ngModelChange","change"],["for","meal5"],["type","checkbox","name","meal5","data-md-icheck","","id","meal5",3,"ngModel","ngModelChange","change"],["for","meal6"],["type","checkbox","name","meal6","data-md-icheck","","id","meal6",3,"ngModel","ngModelChange","change"],["for","img"],["type","file","name","avatar",3,"change"],["type","button","pButton","","icon","pi pi-check","label","Submit",3,"click"],["type","button","pButton","","icon","pi pi-times","label","Cancel",1,"ui-button-secondary",3,"click"],[3,"pSortableColumn",4,"ngFor","ngForOf"],[2,"text-align","center"],[1,"fa","fa-plus",2,"cursor","grab","color","green",3,"click"],[3,"pSortableColumn"],[3,"field"],[3,"pSelectableRow","pSelectableRowIndex"],[4,"ngFor","ngForOf"],[1,"fa","fa-trash",2,"cursor","grab","color","red",3,"click"],["width","32","style","vertical-align: middle",3,"src",4,"ngIf"],[4,"ngIf"],["width","32",2,"vertical-align","middle",3,"src"]],template:function(e,n){1&e&&(c.Vb(0,"div"),c.Qb(1,"app-page-header",0),c.Vb(2,"div",1),c.Vb(3,"p-table",2),c.Jc(4,M,4,4,"ng-template",3),c.Jc(5,v,4,3,"ng-template",4),c.Ub(),c.Ub(),c.Ub(),c.Vb(6,"p-dialog",5),c.hc("visibleChange",(function(e){return n.displayModal=e})),c.Vb(7,"p",6),c.Lc(8,"Are you sure you want to delete this Meal Food?"),c.Ub(),c.Vb(9,"p-footer"),c.Vb(10,"button",7),c.hc("click",(function(){return n.DeletConfirm(!0)})),c.Ub(),c.Vb(11,"button",8),c.hc("click",(function(){return n.DeletConfirm(!1)})),c.Ub(),c.Ub(),c.Ub(),c.Vb(12,"p-dialog",9),c.hc("visibleChange",(function(e){return n.newFoodModal=e})),c.Vb(13,"form",null,10),c.Vb(15,"div",11),c.Vb(16,"label",12),c.Lc(17,"Food Name"),c.Ub(),c.Vb(18,"div",13),c.Vb(19,"input",14),c.hc("ngModelChange",(function(e){return n.name=e})),c.Ub(),c.Ub(),c.Ub(),c.Vb(20,"div",11),c.Vb(21,"label",15),c.Lc(22,"Grocery List Name"),c.Ub(),c.Vb(23,"div",13),c.Vb(24,"input",16),c.hc("ngModelChange",(function(e){return n.grocery_list_name=e})),c.Ub(),c.Ub(),c.Ub(),c.Vb(25,"div",11),c.Vb(26,"label",17),c.Lc(27,"Food Category"),c.Ub(),c.Vb(28,"div",13),c.Vb(29,"input",18),c.hc("ngModelChange",(function(e){return n.category=e})),c.Ub(),c.Ub(),c.Ub(),c.Vb(30,"div",11),c.Vb(31,"label",19),c.Lc(32,"Food Size"),c.Ub(),c.Vb(33,"div",13),c.Vb(34,"input",20),c.hc("ngModelChange",(function(e){return n.size=e})),c.Ub(),c.Ub(),c.Ub(),c.Vb(35,"div",11),c.Vb(36,"label",21),c.Lc(37,"Food Calories"),c.Ub(),c.Vb(38,"div",13),c.Vb(39,"input",22),c.hc("ngModelChange",(function(e){return n.cal=e})),c.Ub(),c.Ub(),c.Ub(),c.Vb(40,"div",11),c.Vb(41,"label",23),c.Lc(42,"Food Fats"),c.Ub(),c.Vb(43,"div",13),c.Vb(44,"input",24),c.hc("ngModelChange",(function(e){return n.fats=e})),c.Ub(),c.Ub(),c.Ub(),c.Vb(45,"div",11),c.Vb(46,"label",25),c.Lc(47,"Food Carbohydrate"),c.Ub(),c.Vb(48,"div",13),c.Vb(49,"input",26),c.hc("ngModelChange",(function(e){return n.carbs=e})),c.Ub(),c.Ub(),c.Ub(),c.Vb(50,"div",11),c.Vb(51,"label",27),c.Lc(52,"Food Protin"),c.Ub(),c.Vb(53,"div",13),c.Vb(54,"input",28),c.hc("ngModelChange",(function(e){return n.prot=e})),c.Ub(),c.Ub(),c.Ub(),c.Vb(55,"div",11),c.Vb(56,"label",29),c.Lc(57,"Food Fiber"),c.Ub(),c.Vb(58,"div",13),c.Vb(59,"input",30),c.hc("ngModelChange",(function(e){return n.fiber=e})),c.Ub(),c.Ub(),c.Ub(),c.Vb(60,"div",11),c.Vb(61,"label",31),c.Lc(62,"Food Sodium"),c.Ub(),c.Vb(63,"div",13),c.Vb(64,"input",32),c.hc("ngModelChange",(function(e){return n.sodium=e})),c.Ub(),c.Ub(),c.Ub(),c.Vb(65,"div",11),c.Vb(66,"label",33),c.Lc(67,"Food Sugar"),c.Ub(),c.Vb(68,"div",13),c.Vb(69,"input",34),c.hc("ngModelChange",(function(e){return n.sugar=e})),c.Ub(),c.Ub(),c.Ub(),c.Vb(70,"div",11),c.Vb(71,"label",35),c.Lc(72,"Is Mediterranean: "),c.Vb(73,"input",36),c.hc("ngModelChange",(function(e){return n.mediterranean=e}))("change",(function(e){return n.toggleVisibility(e)})),c.Ub(),c.Ub(),c.Ub(),c.Vb(74,"div",11),c.Vb(75,"label",37),c.Lc(76,"Is Paleo: "),c.Vb(77,"input",38),c.hc("ngModelChange",(function(e){return n.paleo=e}))("change",(function(e){return n.toggleVisibility(e)})),c.Ub(),c.Ub(),c.Ub(),c.Vb(78,"div",11),c.Vb(79,"label",39),c.Lc(80,"Meal 1: "),c.Vb(81,"input",40),c.hc("ngModelChange",(function(e){return n.meal1=e}))("change",(function(e){return n.toggleVisibility(e)})),c.Ub(),c.Ub(),c.Ub(),c.Vb(82,"div",11),c.Vb(83,"label",41),c.Lc(84,"Meal 2: "),c.Vb(85,"input",42),c.hc("ngModelChange",(function(e){return n.meal2=e}))("change",(function(e){return n.toggleVisibility(e)})),c.Ub(),c.Ub(),c.Ub(),c.Vb(86,"div",11),c.Vb(87,"label",43),c.Lc(88,"Meal 3: "),c.Vb(89,"input",44),c.hc("ngModelChange",(function(e){return n.meal3=e}))("change",(function(e){return n.toggleVisibility(e)})),c.Ub(),c.Ub(),c.Ub(),c.Vb(90,"div",11),c.Vb(91,"label",45),c.Lc(92,"Meal 4: "),c.Vb(93,"input",46),c.hc("ngModelChange",(function(e){return n.meal4=e}))("change",(function(e){return n.toggleVisibility(e)})),c.Ub(),c.Ub(),c.Ub(),c.Vb(94,"div",11),c.Vb(95,"label",47),c.Lc(96,"Meal 5: "),c.Vb(97,"input",48),c.hc("ngModelChange",(function(e){return n.meal5=e}))("change",(function(e){return n.toggleVisibility(e)})),c.Ub(),c.Ub(),c.Ub(),c.Vb(98,"div",11),c.Vb(99,"label",49),c.Lc(100,"Meal 6: "),c.Vb(101,"input",50),c.hc("ngModelChange",(function(e){return n.meal6=e}))("change",(function(e){return n.toggleVisibility(e)})),c.Ub(),c.Ub(),c.Ub(),c.Vb(102,"div",11),c.Vb(103,"label",51),c.Lc(104,"Select food image:"),c.Ub(),c.Vb(105,"input",52),c.hc("change",(function(e){return n.onFileChange(e)})),c.Ub(),c.Ub(),c.Ub(),c.Vb(106,"p-footer"),c.Vb(107,"button",53),c.hc("click",(function(){return n.SavePlan(!0)})),c.Ub(),c.Vb(108,"button",54),c.hc("click",(function(){return n.SavePlan(!1)})),c.Ub(),c.Ub(),c.Ub()),2&e&&(c.pc("@routerTransition",void 0),c.Cb(1),c.pc("heading","Meal Food Data")("icon","fa fa-apple"),c.Cb(2),c.pc("columns",n.cols)("value",n.myData)("paginator",!0)("rows",20)("rowsPerPageOptions",c.sc(41,y)),c.Cb(3),c.Hc(c.sc(42,F)),c.pc("visible",n.displayModal)("modal",!0)("baseZIndex",1e4)("draggable",!1)("resizable",!1),c.Cb(6),c.Hc(c.sc(43,F)),c.pc("visible",n.newFoodModal)("modal",!0)("baseZIndex",1e4)("draggable",!1)("resizable",!1),c.Cb(7),c.pc("ngModel",n.name),c.Cb(5),c.pc("ngModel",n.grocery_list_name),c.Cb(5),c.pc("ngModel",n.category),c.Cb(5),c.pc("ngModel",n.size),c.Cb(5),c.pc("ngModel",n.cal),c.Cb(5),c.pc("ngModel",n.fats),c.Cb(5),c.pc("ngModel",n.carbs),c.Cb(5),c.pc("ngModel",n.prot),c.Cb(5),c.pc("ngModel",n.fiber),c.Cb(5),c.pc("ngModel",n.sodium),c.Cb(5),c.pc("ngModel",n.sugar),c.Cb(4),c.pc("ngModel",n.mediterranean),c.Cb(4),c.pc("ngModel",n.paleo),c.Cb(4),c.pc("ngModel",n.meal1),c.Cb(4),c.pc("ngModel",n.meal2),c.Cb(4),c.pc("ngModel",n.meal3),c.Cb(4),c.pc("ngModel",n.meal4),c.Cb(4),c.pc("ngModel",n.meal5),c.Cb(4),c.pc("ngModel",n.meal6))},directives:[b.a,s.d,g.c,h.a,g.a,p.a,m.q,m.j,m.k,m.b,m.i,m.l,m.n,m.a,t.k,s.c,s.b,s.a,t.l],styles:["[_nghost-%COMP%]     .ui-button{margin:.5em .5em .5em 0;width:140px}@media screen and (max-width:40em){[_nghost-%COMP%]     .ui-dialog{width:75vw!important}}"],data:{animation:[Object(l.a)()]}}),e})()}];let L=(()=>{class e{}return e.\u0275mod=c.Nb({type:e}),e.\u0275inj=c.Mb({factory:function(n){return new(n||e)},imports:[[a.e.forChild(w)],a.e]}),e})(),S=(()=>{class e{}return e.\u0275mod=c.Nb({type:e}),e.\u0275inj=c.Mb({factory:function(n){return new(n||e)},imports:[[t.b,L,i.b,m.f,s.e,h.b,p.b]]}),e})()}}]);