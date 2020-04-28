function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,o,t){return o&&_defineProperties(e.prototype,o),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{LZ2b:function(e,o,t){"use strict";t.r(o),t.d(o,"FoodComboModule",(function(){return I}));var n,c=t("ofXK"),i=t("M0ag"),r=t("tyNb"),a=t("ZZ88"),s=t("BERw"),l=t("tk/3"),d=(t("AJX/"),t("fXoL")),u=((n=function(){function e(o){_classCallCheck(this,e),this.http=o,this.ServerUrl="http://18.212.2.14:9000/"}return _createClass(e,[{key:"SearchCombo",value:function(e){var o=new l.c({Authorization:localStorage.getItem("token")}),t=(new l.d).set("pageNo","1").set("limit","30").set("searchText",e);return this.http.get(this.ServerUrl+"rest/meal/listmeal",{headers:o,responseType:"json",params:t}).map((function(e){return e}))}},{key:"AddCombo",value:function(e){var o=new l.c({Authorization:localStorage.getItem("token")});return this.http.post(this.ServerUrl+"rest/admin/addmealCombination",e,{headers:o,responseType:"json"}).map((function(e){return e}))}}]),e}()).\u0275fac=function(e){return new(e||n)(d.cc(l.a))},n.\u0275prov=d.Kb({token:n,factory:n.\u0275fac}),n),b=t("5eHb"),f=t("3zLz"),h=t("3Pt+"),p=t("jIHw"),m=t("arFO"),g=t("7zfz");function v(e,o){if(1&e&&(d.Ub(0,"span",14),d.Lc(1),d.Tb()),2&e){var t=o.$implicit;d.Bb(1),d.Mc(t.label)}}function C(e,o){if(1&e&&(d.Ub(0,"span",14),d.Lc(1),d.Tb()),2&e){var t=o.$implicit;d.Bb(1),d.Mc(t.label)}}var U,y,T,k=function(){return{width:"100%"}},w=[{path:"",component:(U=function(){function e(o,t,n){_classCallCheck(this,e),this.userService=o,this.toastrService=t,this.foodcomboservice=n}return _createClass(e,[{key:"ngOnInit",value:function(){this.UserList(),this.cols=[{field:"name",header:"Name"},{field:"gender",header:"Gender"},{field:"dob",header:"Birthdate"},{field:"age",header:"Age"},{field:"email",header:"Email"},{field:"mobilenumber",header:"Mobile Number"}]}},{key:"UserList",value:function(){var e=this;this.userService.UserList().subscribe((function(o){console.log(o),1==o.success&&(e.myData=o.data)}))}},{key:"DeleteUser",value:function(e){this.deleteUserId=e._id,this.displayModal=!0,console.log(e)}},{key:"DeletConfirm",value:function(e){var o=this;1==e&&this.userService.DeleteUser(this.deleteUserId).subscribe((function(e){console.log("delete->"+e),1==e.success?(o.deleteUserId=void 0,o.displayModal=!1,o.UserList()):o.deleteUserId=void 0}))}},{key:"SearchData",value:function(e){var o=this;"1"==e?this.foodcomboservice.SearchCombo(this.searchfood1).subscribe((function(e){console.log(e),1==e.success&&(o.Foodlist1=[],e.data.meal_list.forEach((function(e){o.Foodlist1.push({label:e.grocery_list_name+" cal: "+e.cal+",fat: "+e.fats+",carb: "+e.carbs+",prot: "+e.prot,value:e._id})})))})):this.foodcomboservice.SearchCombo(this.searchfood2).subscribe((function(e){console.log(e),1==e.success&&(o.Foodlist2=[],e.data.meal_list.forEach((function(e){o.Foodlist2.push({label:e.grocery_list_name+" cal: "+e.cal+",fat: "+e.fats+",carb: "+e.carbs+",prot: "+e.prot,value:e._id})})))}))}},{key:"AddCombo",value:function(){var e=this;console.log("1",this.selectedfood1),console.log("2",this.selectedfood2),this.foodcomboservice.AddCombo({mainmeal:this.selectedfood1,submeal:this.selectedfood2}).subscribe((function(o){console.log(o),1==o.success?(e.toastrService.success("food combination added successfully",""),console.log("add succ")):e.toastrService.error("Error while adding food combination","")}))}}]),e}(),U.\u0275fac=function(e){return new(e||U)(d.Ob(s.a),d.Ob(b.b),d.Ob(u))},U.\u0275cmp=d.Ib({type:U,selectors:[["app-userlist"]],features:[d.Ab([s.a,u])],decls:21,vars:15,consts:[[3,"heading","icon"],["from1","ngForm"],[1,"row"],[1,"col-sm-3"],[1,"ui-inputgroup"],["type","text","pInputText","","name","searchfood1","placeholder","Food one Search",3,"ngModel","ngModelChange"],["pButton","","type","button","label","Search",3,"click"],[1,"col-sm-4"],["type","text","pInputText","","name","searchfood2","placeholder","Food two Search",3,"ngModel","ngModelChange"],[1,"row",2,"padding-top","10px"],["name","selectedfood1","placeholder","Select a food","filter","true",3,"options","ngModel","ngModelChange"],["pTemplate","selectedItem"],["placeholder","Select a food","name","selectedfood2","filter","true",3,"options","ngModel","ngModelChange"],["label","Add Combination",3,"click"],[2,"vertical-align","middle","margin-left",".5em"]],template:function(e,o){1&e&&(d.Ub(0,"div"),d.Pb(1,"app-page-header",0),d.Ub(2,"form",null,1),d.Ub(4,"div",2),d.Ub(5,"div",3),d.Ub(6,"div",4),d.Ub(7,"input",5),d.gc("ngModelChange",(function(e){return o.searchfood1=e})),d.Tb(),d.Ub(8,"button",6),d.gc("click",(function(){return o.SearchData("1")})),d.Tb(),d.Tb(),d.Tb(),d.Ub(9,"div",7),d.Ub(10,"div",4),d.Ub(11,"input",8),d.gc("ngModelChange",(function(e){return o.searchfood2=e})),d.Tb(),d.Ub(12,"button",6),d.gc("click",(function(){return o.SearchData("2")})),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Ub(13,"div",9),d.Ub(14,"div",3),d.Ub(15,"p-dropdown",10),d.gc("ngModelChange",(function(e){return o.selectedfood1=e})),d.Jc(16,v,2,1,"ng-template",11),d.Tb(),d.Tb(),d.Ub(17,"div",3),d.Ub(18,"p-dropdown",12),d.gc("ngModelChange",(function(e){return o.selectedfood2=e})),d.Jc(19,C,2,1,"ng-template",11),d.Tb(),d.Tb(),d.Ub(20,"p-button",13),d.gc("click",(function(){return o.AddCombo()})),d.Tb(),d.Tb(),d.Tb(),d.Tb()),2&e&&(d.oc("@routerTransition",void 0),d.Bb(1),d.oc("heading","Add Food Combination")("icon","fa fa-users"),d.Bb(6),d.oc("ngModel",o.searchfood1),d.Bb(4),d.oc("ngModel",o.searchfood2),d.Bb(4),d.Hc(d.rc(13,k)),d.oc("options",o.Foodlist1)("ngModel",o.selectedfood1),d.Bb(3),d.Hc(d.rc(14,k)),d.oc("options",o.Foodlist2)("ngModel",o.selectedfood2))},directives:[f.a,h.q,h.j,h.k,h.b,h.i,h.l,p.b,m.a,g.d,p.a],styles:[""],data:{animation:[Object(a.a)()]}}),U)}],M=((y=function e(){_classCallCheck(this,e)}).\u0275mod=d.Mb({type:y}),y.\u0275inj=d.Lb({factory:function(e){return new(e||y)},imports:[[r.e.forChild(w)],r.e]}),y),S=t("rEr+"),_=t("/RsI"),I=((T=function e(){_classCallCheck(this,e)}).\u0275mod=d.Mb({type:T}),T.\u0275inj=d.Lb({factory:function(e){return new(e||T)},imports:[[c.b,m.b,M,h.f,i.b,S.e,_.b,p.c]]}),T)}}]);