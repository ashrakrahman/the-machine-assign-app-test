(this["webpackJsonpjwt-frontend"]=this["webpackJsonpjwt-frontend"]||[]).push([[0],{325:function(e,t,a){e.exports=a(407)},330:function(e,t,a){},331:function(e,t,a){},407:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),o=a.n(s),c=(a(330),a(31)),i=a(32),l=a(33),m=a(34),u=(a(331),a(332),a(145)),h=a(437),p=a(438),d=a(439),f=a(440),E=a(441),g=a(442),b=a(443),v=a(25),k=a(37),y=a(29),w=a(426),S=a(427),x=a(446),C=a(428),O=a(429),T=a(430),_=a(431),j=a(432),M=a(28),A=a.n(M),D=a(123),N=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){if(e.preventDefault(),""===n.state.username||""===n.state.email||""===n.state.password||""===n.state.type)alert("Empty field!");else{var t={username:n.state.username,email:n.state.email,password:n.state.password,type:n.state.type};A.a.post("https://polar-beyond-50847.herokuapp.com/users/registration",t,{headers:{}}).then((function(e){n.setState({isFormSUbmitted:!0,username:"",email:"",password:""}),window.scrollTo(0,0)})).catch((function(e){e.response&&(n.setState({isFormSUbmitted:!1}),window.scrollTo(0,0))}))}},n.onChangeHandler=function(e){n.setState({type:e.value||""})},n.state={username:"",email:"",password:"",isFormSUbmitted:null,type:""},n}return Object(i.a)(a,[{key:"render",value:function(){var e,t=this,a=this.state.isFormSUbmitted;return""!==(e=this.state.type)&&(e="admin"===e?{value:"admin",label:"Admin"}:{value:"operator",label:"Operator"}),r.a.createElement(w.a,{style:{marginBottom:"150px"}},r.a.createElement(S.a,{sm:{size:6,order:2,offset:1},className:"LoginFormFieldBody"},r.a.createElement("br",null),null!==a&&(!0===a?r.a.createElement(x.a,{color:"success"},"Registration Successful. Login to continue."):r.a.createElement(x.a,{color:"danger"},"Duplicate Username or An Error Occured!.")),r.a.createElement("h1",null,"Registration"),r.a.createElement("hr",null),r.a.createElement(C.a,{onSubmit:this.handleSubmit},r.a.createElement(O.a,null,r.a.createElement(T.a,{for:"exampleusername"},"Username"),r.a.createElement(_.a,{type:"text",name:"username",id:"username",placeholder:"",value:this.state.username,onChange:function(e){return t.setState({username:e.target.value})}})),r.a.createElement(O.a,null,r.a.createElement(T.a,{for:"examplePassword"},"Register As: "),r.a.createElement(D.a,{multi:!1,name:"reg-as",options:[{value:"admin",label:"Admin"},{value:"operator",label:"Operator"}],value:e||"",onChange:this.onChangeHandler})),r.a.createElement(O.a,null,r.a.createElement(T.a,{for:"exampleEmail"},"Email"),r.a.createElement(_.a,{type:"email",name:"email",id:"email",placeholder:"example@abc.com",value:this.state.email,onChange:function(e){return t.setState({email:e.target.value})}})),r.a.createElement(O.a,null,r.a.createElement(T.a,{for:"examplePassword"},"Password"),r.a.createElement(_.a,{type:"password",name:"password",id:"password",placeholder:"",value:this.state.password,onChange:function(e){return t.setState({password:e.target.value})}})),r.a.createElement(j.a,{type:"submit"},"Submit"))))}}]),a}(r.a.Component),L=a(147),F=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){if(e.preventDefault(),""===n.state.username||""===n.state.password)alert("Empty field!");else{n.setState({isLoading:!0});var t={username:n.state.username,password:n.state.password};A.a.post("https://polar-beyond-50847.herokuapp.com/users/login",t,{headers:{}}).then((function(e){var t=new v.a;t.set("access_token",e.data.data.access_token,{path:"/"}),t.set("refresh_token",e.data.data.refresh_token,{path:"/"}),t.set("user_type",e.data.data.user_type,{path:"/"}),n.setState({isFormSubmitted:!0,username:"",password:"",shouldComponentRedirect:!0,errorMessage:null,isLoading:!1})})).catch((function(e){e.response&&(n.setState({isFormSubmitted:!1,errorMessage:e.response.data.message,isLoading:!1}),console.log(e.response.data))}))}},n.state={username:"",password:"",isFormSubmitted:null,shouldComponentRedirect:!1,errorMessage:null,isLoading:!1},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return this.state.shouldComponentRedirect?r.a.createElement(y.a,{to:"/"}):r.a.createElement(w.a,null,r.a.createElement(S.a,{sm:{size:6,order:2,offset:1},className:"LoginFormFieldBody"},r.a.createElement("br",null),null!=this.state.errorMessage?r.a.createElement(x.a,{color:"danger"},this.state.errorMessage):null,r.a.createElement("h1",null,"Login"),r.a.createElement("hr",null),r.a.createElement(C.a,{onSubmit:this.handleSubmit},r.a.createElement(O.a,null,r.a.createElement(T.a,{for:"username"},"Username"),r.a.createElement(_.a,{type:"text",name:"username",id:"username",placeholder:"",value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})}})),r.a.createElement(O.a,null,r.a.createElement(T.a,{for:"password"},"Password"),r.a.createElement(_.a,{type:"password",name:"password",id:"password",placeholder:"",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}})),r.a.createElement(j.a,{type:"submit"},"Login"),!0===this.state.isLoading?r.a.createElement("span",null,r.a.createElement(L.BeatLoader,{css:"\n    display: block;\n    margin-left: 10px;\n    border-color: #0b5679;\n    margin-top: 10px;\n    ",size:10,loading:!0})):null)))}}]),a}(r.a.Component),H=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={isCookiesDeleted:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=new v.a,t=e.get("access_token");null===t&&void 0!==t||(e.remove("access_token"),e.remove("refresh_token"),e.remove("user_type"),this.setState({isCookiesDeleted:!0}))}},{key:"render",value:function(){return!0===this.state.isCookiesDeleted?r.a.createElement(y.a,{to:"/"}):r.a.createElement(w.a,null,r.a.createElement(S.a,{sm:{size:10,order:2,offset:1}},r.a.createElement("br",null),r.a.createElement(x.a,{color:"danger"},"Error Occured!")))}}]),a}(r.a.Component),I=a(23),z=a.n(I),U=a(44),B=a(58),R=a(315),P=a(202),W=a.n(P),q=function(e){return{hasToken:e,type:"SET_HAS_TOKEN_STATUS"}},J=W()({hasToken:!1});function K(e){return e.hasToken}var Y=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={userData:null,isAccessTokenExpired:!1,isRefreshTokenExpired:!1,hasMessage:!1,isLoading:!0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(U.a)(z.a.mark((function e(){var t,a,n,r=this;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new v.a,a=t.get("access_token"),n=t.get("refresh_token"),null===a||void 0===a?this.props.setHasTokenStatusActionCreator(!1):this.props.setHasTokenStatusActionCreator(!0),!1!==this.state.isAccessTokenExpired){e.next=7;break}return e.next=7,A.a.get("https://polar-beyond-50847.herokuapp.com/users/info",{headers:{"x-access-token":a}}).then((function(e){r.setState({userData:e.data,hasMessage:!0,isLoading:!1})})).catch((function(e){e.response&&("401"===e.response.data.status?r.setState({isAccessTokenExpired:!0,isLoading:!1}):(r.setState({isLoading:!1}),alert("An Error occoured!")))}));case 7:if(!0!==this.state.isAccessTokenExpired){e.next=14;break}if(void 0===a){e.next=13;break}return e.next=11,A.a.post("https://polar-beyond-50847.herokuapp.com/users/refresh",null,{headers:{"x-access-token":n}}).then((function(e){var a=e.data.data.access_token;t.set("access_token",a,{path:"/"}),console.log("======= Re-gain Access Token ============"),r.getUserData(a)})).catch((function(e){e.response&&(console.log(e.response),r.setState({isRefreshTokenExpired:!0,isLoading:!1}))}));case 11:e.next=14;break;case 13:this.setState({isRefreshTokenExpired:!0,isLoading:!1});case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUserData",value:function(){var e=Object(U.a)(z.a.mark((function e(t){var a=this;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("https://polar-beyond-50847.herokuapp.com/users/info",{headers:{"x-access-token":t}}).then((function(e){a.setState({userData:e.data,isAccessTokenExpired:!1,hasMessage:!0,isLoading:!1})})).catch((function(e){e.response&&(console.log(e.response),a.setState({isRefreshTokenExpired:!0,isLoading:!1}))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state.isLoading){return r.a.createElement("div",{className:"sweet-loading"},r.a.createElement(L.BeatLoader,{css:"\n      display: block;\n      margin-left: 48%;\n      border-color: #0b5679;\n      margin-top: 20%;\n      ",size:20,loading:!0}))}var e=null!=this.state.userData?this.state.userData.data.username:null,t=(new v.a).get("user_type");if(!0===this.props.hasToken){var a="Welcome @"+e+". You Logged in as "+t+".";return!0===this.state.isRefreshTokenExpired?r.a.createElement(y.a,{to:"/logout"}):r.a.createElement(w.a,null,r.a.createElement(S.a,{sm:{size:10,order:2,offset:1}},r.a.createElement("br",null),this.state.hasMessage?r.a.createElement(x.a,{color:"success"},a," "):null))}return r.a.createElement(w.a,null,r.a.createElement(S.a,{sm:{size:10,order:2,offset:1}},r.a.createElement("br",null),r.a.createElement(x.a,{color:"primary"},"Please Login to continue.")))}}]),a}(r.a.Component),$={setHasTokenStatusActionCreator:q},G=Object(B.b)((function(e){return{hasToken:K(e)}}),$)(Y),Q=a(108),V=a(76),X=a.n(V),Z=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleShow=function(){n.setState({show:!0})},n.handleDelete=function(){var e=Object(U.a)(z.a.mark((function e(t){var a,n,r,s;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.target.id,n=a.toString().split("_")[2],r=new v.a,s=r.get("access_token"),!window.confirm("Are you sure?")){e.next=7;break}return e.next=7,A.a.delete("https://polar-beyond-50847.herokuapp.com/machines/"+n,{headers:{"x-access-token":s}}).then((function(e){200===e.status&&(alert("succefully deleted!"),window.location.reload())})).catch((function(e){e&&alert("An error occured!")}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleShowEdit=function(){var e=Object(U.a)(z.a.mark((function e(t){var a,r,s,o;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.id,r=a.toString().split("_")[2],s=new v.a,o=s.get("access_token"),e.next=6,A.a.get("https://polar-beyond-50847.herokuapp.com/machines/"+r,{headers:{"x-access-token":o}}).then((function(e){n.setState({machineId:r,machineName:e.data.data.name,machineType:e.data.data.type,machineCode:e.data.data.code})})).catch((function(e){e&&(console.log(e),alert("An error occured!"))}));case 6:n.setState({show:!0,isUpdate:!0});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleClose=function(){n.setState({show:!1,isUpdate:!1})},n.handleSubmit=function(){var e=(new v.a).get("access_token");if(""===n.state.machineName||""===n.state.machineType||""===n.state.machineCode)alert("Empty field!");else{var t={name:n.state.machineName,type:n.state.machineType,code:n.state.machineCode};A.a.post("https://polar-beyond-50847.herokuapp.com/machines",t,{headers:{"x-access-token":e}}).then((function(e){console.log(e),window.confirm("Machine added Successfully!")&&(n.setState({show:!1}),window.location.reload())})).catch((function(e){e&&(e.response?alert(e.response.data.message):alert("An Error Occured!"))}))}},n.handleUpdate=Object(U.a)(z.a.mark((function e(){var t,a,r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new v.a,a=t.get("access_token"),""!==n.state.machineName&&""!==n.state.machineType&&""!==n.state.machineCode&&null!==n.state.machineId){e.next=6;break}alert("Empty field or Machine Id not found!"),e.next=9;break;case 6:return r={name:n.state.machineName,type:n.state.machineType,code:n.state.machineCode},e.next=9,A.a.patch("https://polar-beyond-50847.herokuapp.com/machines/"+n.state.machineId,r,{headers:{"x-access-token":a}}).then((function(e){console.log(e),window.confirm("Machine updated Successfully!")&&(n.setState({show:!1}),window.location.reload())})).catch((function(e){e&&(e.response?alert(e.response.data.message):alert("An Error Occured!"))}));case 9:case"end":return e.stop()}}),e)}))),n.state={show:!1,machineName:"",machineCode:"",machineType:"",isUpdate:!1,machineId:null,data:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(U.a)(z.a.mark((function e(){var t,a,n=this;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new v.a,a=t.get("access_token"),e.next=4,A.a.get("https://polar-beyond-50847.herokuapp.com/machines",{headers:{"x-access-token":a}}).then((function(e){n.setState({data:e.data.data||[]})})).catch((function(e){e.response&&console.log(e.response)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(!0===this.props.hasToken){var t="Enter Machine Info";!0===this.state.isUpdate&&(t="Update Machine Info");var a=this.state.data,n=[],s=[],o=1;a.forEach((function(e){var t=[];t.push(o++),t.push(e.name),t.push(e.type),t.push(e.code),n.push(t),s.push(e._id)}));var c=["#","Machine Type","Machine Name","Machine Code",{name:"Action",options:{filter:!1,sort:!1,empty:!0,customBodyRenderLite:function(t,a){return r.a.createElement("div",null,r.a.createElement(j.a,{id:"button_edit_"+s[a],type:"submit",onClick:function(t){return e.handleShowEdit(t)},color:"warning",size:"sm"},"Edit")," ",r.a.createElement(j.a,{id:"button_delete_"+s[a],color:"danger",size:"sm",onClick:function(t){return e.handleDelete(t)}},"Delete"))}}}];return r.a.createElement(w.a,{style:{marginBottom:"150px"}},r.a.createElement(S.a,{sm:{size:10,order:2,offset:1}},r.a.createElement("br",null),r.a.createElement(j.a,{variant:"primary",size:"sm",onClick:this.handleShow},"Add new machine"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(X.a,{title:"Machine List Table",data:n,columns:c,options:{selectableRows:"none"}}),r.a.createElement(Q.a,{show:this.state.show,onHide:this.handleClose},r.a.createElement(Q.a.Header,{closeButton:!0},r.a.createElement(Q.a.Title,null,t)),r.a.createElement(Q.a.Body,null,r.a.createElement(C.a,null,r.a.createElement(O.a,{row:!0},r.a.createElement(T.a,{for:"name",sm:2},"Name"),r.a.createElement(S.a,{sm:10},r.a.createElement(_.a,{type:"text",name:"name",id:"name",placeholder:"",value:this.state.machineName,onChange:function(t){return e.setState({machineName:t.target.value})},required:!0}))),r.a.createElement(O.a,{row:!0},r.a.createElement(T.a,{for:"type",sm:2},"Type"),r.a.createElement(S.a,{sm:10},r.a.createElement(_.a,{type:"text",name:"type",id:"type",placeholder:"",value:this.state.machineType,onChange:function(t){return e.setState({machineType:t.target.value})},required:!0}))),r.a.createElement(O.a,{row:!0},r.a.createElement(T.a,{for:"name",sm:2},"Code"),r.a.createElement(S.a,{sm:10},r.a.createElement(_.a,{type:"text",name:"code",id:"code",placeholder:"",value:this.state.machineCode,onChange:function(t){return e.setState({machineCode:t.target.value})},required:!0}))))),r.a.createElement(Q.a.Footer,null,r.a.createElement(j.a,{color:"secondary",onClick:this.handleClose},"Close"),r.a.createElement(j.a,{type:"submit",onClick:!0===this.state.isUpdate?this.handleUpdate:this.handleSubmit,color:"primary"},"Save Changes")))))}return r.a.createElement(y.a,{to:"/"})}}]),a}(r.a.Component),ee=Object(B.b)((function(e){return{hasToken:K(e)}}),{})(Z),te=a(436),ae=[{value:"shift_a",label:"SHIFT A : 6AM-2PM"},{value:"shift_b",label:"SHIFT B : 2PM-10PM"},{value:"shift_c",label:"SHIFT C : 10PM-6AM"}],ne=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){var t=(new v.a).get("access_token");if(e.preventDefault(),""===n.state.operatorName||""===n.state.operatorCode||""===n.state.machineId||""===n.state.shiftId||""===n.state.assignDate)alert("Empty field!");else{var a={operator_id:n.state.operatorCode,operator_name:n.state.operatorName,machine_id:n.state.machineId.value,machine_code:n.state.machineId.label,shift:n.state.shiftId.value,assigned_date:n.state.assignDate};A.a.post("https://polar-beyond-50847.herokuapp.com/assign",a,{headers:{"x-access-token":t}}).then((function(e){n.setState({isFormSUbmitted:!0,operatorName:"",operatorCode:"",machineId:"",shiftId:"",assignDate:"",submitMessage:e.data.message}),window.scrollTo(0,0)})).catch((function(e){console.log(e.response),e&&("400"===e.response.data.status?(n.setState({isFormSUbmitted:!1,submitMessage:e.response.data.message}),window.scrollTo(0,0)):(n.setState({isFormSUbmitted:!1,submitMessage:"An Error Occurred!"}),window.scrollTo(0,0)))}))}},n.updateCategory=function(e){var t=e.target.value.toString().split("_");""!==t[0]&&""!==t[1]&&n.setState({operatorName:t[0],operatorCode:t[1]})},n.onChangeMachineHandler=function(e){var t={value:e.value,label:e.label};n.setState({machineId:t})},n.onChangeShiftHandler=function(e){var t={value:e.value,label:e.label};n.setState({shiftId:t})},n.onChangeDateHandler=function(e){n.setState({assignDate:e.currentTarget.value})},n.state={isOpen:!1,operatorList:[],operatorName:"",operatorCode:"",machineList:[],machineId:"",shiftId:"",assignDate:"",isFormSUbmitted:null,submitMessage:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(U.a)(z.a.mark((function e(){var t,a,n=this;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new v.a,a=t.get("access_token"),e.next=4,A.a.get("https://polar-beyond-50847.herokuapp.com/users/operator",{headers:{"x-access-token":a}}).then((function(e){n.setState({operatorList:e.data.data||[]})})).catch((function(e){e.response&&console.log(e.response)}));case 4:return e.next=6,A.a.get("https://polar-beyond-50847.herokuapp.com/machines",{headers:{"x-access-token":a}}).then((function(e){n.setState({machineList:e.data.data||[]})})).catch((function(e){e.response&&console.log(e.response)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.operatorList,a=this.state.machineList,r=this.state.machineId,s=this.state.shiftId,o=this.state.assignDate,c=this.state.isFormSUbmitted,i=this.state.submitMessage,l=[];t.forEach((function(e){var t=[];t.push(e.count),t.push(e.name),t.push(e.id),l.push(t)}));var m=[];a.map((function(e){return m.push({label:e.name+"/"+e.code,value:e._id})}));var u=["#","Operator Name","Operator Code",{name:"Assign",options:{filter:!1,sort:!1,empty:!0,customBodyRenderLite:function(t,a){return n.createElement("div",null,n.createElement(O.a,{check:!0},n.createElement(_.a,{type:"radio",value:l[a][1]+"_"+l[a][2],name:"radio1",onChange:e.updateCategory})))}}}];return n.createElement(w.a,{style:{marginBottom:"150px"}},n.createElement(S.a,{sm:{size:10,order:2,offset:1}},n.createElement("br",null),null!==c&&(!0===c?n.createElement(x.a,{color:"success"},i):n.createElement(x.a,{color:"danger"},i)),n.createElement("h3",null,"Assign Machine To an Operator"),n.createElement("hr",null),n.createElement("br",null)),n.createElement(S.a,{sm:{size:5,order:2,offset:1},style:{marginBottom:"20px"}},n.createElement(X.a,{title:"Operator List Table",data:l,columns:u,options:{selectableRows:"none"}})),n.createElement(S.a,{sm:{size:4,order:2,offset:1},className:"formFieldBody"},n.createElement("h4",null,"Assign Form"),n.createElement(C.a,{onSubmit:this.handleSubmit},n.createElement(O.a,null,n.createElement(T.a,{for:"machineCode"},"Machine Name/Code "),n.createElement(D.a,{multi:!1,name:"machineCode",id:"machineCode",options:m,value:r||"",onChange:this.onChangeMachineHandler})),n.createElement(O.a,null,n.createElement(T.a,{for:"assignDate"},"Assigned date "),n.createElement(te.a,{size:"sm"},n.createElement(_.a,{type:"date",id:"assignDate",name:"assignDate",value:o,onChange:this.onChangeDateHandler}))),n.createElement(O.a,null,n.createElement(T.a,{for:"shift"},"Shift "),n.createElement(D.a,{multi:!1,name:"shift",id:"shift",options:ae,value:s||"",onChange:this.onChangeShiftHandler})),n.createElement(O.a,null,n.createElement(T.a,{for:"operatorName"},"Operator Name"),n.createElement(te.a,{size:"sm"},n.createElement(_.a,{type:"text",readOnly:!0,name:"operatorName",id:"operatorName",value:this.state.operatorName}))),n.createElement(O.a,null,n.createElement(T.a,{for:"operatorCode"},"Operator Code"),n.createElement(te.a,{size:"sm"},n.createElement(_.a,{type:"text",readOnly:!0,name:"operatorCode",id:"operatorCode",value:this.state.operatorCode}))),n.createElement(j.a,{type:"submit"},"Submit"))))}}]),a}(n.Component),re=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={data:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(U.a)(z.a.mark((function e(){var t,a,n=this;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new v.a,a=t.get("access_token"),e.next=4,A.a.get("https://polar-beyond-50847.herokuapp.com/assign/all",{headers:{"x-access-token":a}}).then((function(e){n.setState({data:e.data.data||[]})})).catch((function(e){e.response&&console.log(e.response)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(!0===this.props.hasToken){var e=this.state.data,t=[],a=1;return e.forEach((function(e){var n=[];n.push(a++),n.push(e.machine_code),"shift_a"===e.shift?n.push("SHIFT A : 6AM-2PM"):"shift_b"===e.shift?n.push("SHIFT B : 2PM-10PM"):n.push("SHIFT C : 10PM-6AM"),n.push(e.operator_id),n.push(e.operator_name),n.push(e.assigned_date),t.push(n)})),n.createElement(w.a,{style:{marginBottom:"150px"}},n.createElement(S.a,{sm:{size:10,order:2,offset:1}},n.createElement("br",null),n.createElement("br",null),n.createElement(X.a,{title:"Assign List Table",data:t,columns:["#","Machine No","Schedule","Operator Code","Operator Name","Activated Date"],options:{selectableRows:"none"}})))}return n.createElement(y.a,{to:"/"})}}]),a}(n.Component),se=Object(B.b)((function(e){return{hasToken:K(e)}}),{})(re),oe=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChangeStartDateHandler=function(e){n.setState({start_date:e.currentTarget.value})},n.onChangeEndDateHandler=function(e){n.setState({end_date:e.currentTarget.value})},n.submitFilter=function(){n.getOperatorList(n.state.start_date,n.state.end_date)},n.state={data:[],start_date:"2020-01-01",end_date:"2020-12-31"},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(U.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getOperatorList(this.state.start_date,this.state.end_date);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getOperatorList",value:function(){var e=Object(U.a)(z.a.mark((function e(t,a){var n,r,s,o=this;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={start_date:t,end_date:a},r=new v.a,s=r.get("access_token"),e.next=5,A.a.post("https://polar-beyond-50847.herokuapp.com/assign/operator-list",n,{headers:{"x-access-token":s}}).then((function(e){o.setState({data:e.data.data||[]})})).catch((function(e){e.response&&console.log(e.response)}));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(!0===this.props.hasToken){var e=this.state.data,t=[],a=1;return e.forEach((function(e){var n=[];n.push(a++),n.push(e.machine_code),"shift_a"===e.shift?n.push("SHIFT A : 6AM-2PM"):"shift_b"===e.shift?n.push("SHIFT B : 2PM-10PM"):n.push("SHIFT C : 10PM-6AM"),n.push(e.operator_id),n.push(e.operator_name),n.push(e.assigned_date),t.push(n)})),n.createElement(w.a,{style:{marginBottom:"150px"}},n.createElement(S.a,{sm:{size:3,offset:1}},n.createElement("br",null),n.createElement(O.a,null,n.createElement(T.a,{for:"startDate"},"Start date "),n.createElement(te.a,{size:"sm"},n.createElement(_.a,{type:"date",value:this.state.start_date,id:"startDate",name:"startDate",onChange:this.onChangeStartDateHandler})))),n.createElement(S.a,{sm:{size:3}},n.createElement("br",null),n.createElement(O.a,null,n.createElement(T.a,{for:"endDate"},"End date "),n.createElement(te.a,{size:"sm"},n.createElement(_.a,{type:"date",value:this.state.end_date,id:"endDate",name:"endDate",onChange:this.onChangeEndDateHandler})))),n.createElement(S.a,{sm:{size:1}},n.createElement("br",null),n.createElement("br",null),n.createElement(j.a,{onClick:this.submitFilter},"Filter")),n.createElement(S.a,{sm:{size:10,order:2,offset:1}},n.createElement("br",null),n.createElement(X.a,{title:"Operator List Table",data:t,columns:["#","Machine No","Schedule","Operator Code","Operator Name","Activated Date"],options:{selectableRows:"none"}})))}return n.createElement(y.a,{to:"/"})}}]),a}(n.Component),ce=Object(B.b)((function(e){return{hasToken:K(e)}}),{})(oe),ie=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={isOpen:!1},n.toggle=n.toggle.bind(Object(u.a)(n)),n}return Object(i.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"componentDidMount",value:function(){var e=(new v.a).get("access_token");null===e||void 0===e?this.props.setHasTokenStatusActionCreator(!1):this.props.setHasTokenStatusActionCreator(!0)}},{key:"render",value:function(){var e=(new v.a).get("user_type");return!0===this.props.hasToken?"admin"===e?r.a.createElement(k.a,null,r.a.createElement(h.a,{color:"dark",dark:!0,className:"justify-content-between",expand:"md"},r.a.createElement(p.a,{href:"/"},"The Machine Assign App"),r.a.createElement(d.a,{onClick:this.toggle}),r.a.createElement(f.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(E.a,{className:"ml-auto",navbar:!0},r.a.createElement(g.a,null,r.a.createElement(b.a,{to:"/machines",activeClassName:"active",tag:k.b},"Machines")),r.a.createElement(g.a,null,r.a.createElement(b.a,{to:"/assign",activeClassName:"active",tag:k.b},"Assign Machines")),r.a.createElement(g.a,null,r.a.createElement(b.a,{to:"/assign-list",activeClassName:"active",tag:k.b},"Assign List")),r.a.createElement(g.a,null,r.a.createElement(b.a,{to:"/logout",activeClassName:"active",tag:k.b},"Logout"))))),r.a.createElement(y.d,null,r.a.createElement(y.b,{exact:!0,path:"/login",component:G}),r.a.createElement(y.b,{exact:!0,path:"/operator-list",component:G}),r.a.createElement(y.b,{exact:!0,path:"/assign",component:ne}),r.a.createElement(y.b,{exact:!0,path:"/assign-list",component:se}),r.a.createElement(y.b,{exact:!0,path:"/machines",component:ee}),r.a.createElement(y.b,{exact:!0,path:"/logout",component:H}),r.a.createElement(y.b,{exact:!0,path:"/",component:G}))):r.a.createElement(k.a,null,r.a.createElement(h.a,{color:"dark",dark:!0,className:"justify-content-between",expand:"md"},r.a.createElement(p.a,{href:"/"},"The Machine Assign App"),r.a.createElement(d.a,{onClick:this.toggle}),r.a.createElement(f.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(E.a,{className:"ml-auto",navbar:!0},r.a.createElement(g.a,null,r.a.createElement(b.a,{to:"/operator-list",activeClassName:"active",tag:k.b},"Operator List")),r.a.createElement(g.a,null,r.a.createElement(b.a,{to:"/logout",activeClassName:"active",tag:k.b},"Logout"))))),r.a.createElement(y.d,null,r.a.createElement(y.b,{exact:!0,path:"/login",component:G}),r.a.createElement(y.b,{exact:!0,path:"/assign",component:G}),r.a.createElement(y.b,{exact:!0,path:"/assign-list",component:G}),r.a.createElement(y.b,{exact:!0,path:"/machines",component:G}),r.a.createElement(y.b,{exact:!0,path:"/operator-list",component:ce}),r.a.createElement(y.b,{exact:!0,path:"/logout",component:H}),r.a.createElement(y.b,{exact:!0,path:"/",component:G}))):r.a.createElement(k.a,null,r.a.createElement(h.a,{color:"dark",className:"justify-content-between",dark:!0,expand:"md"},r.a.createElement(p.a,{href:"/"},"The Machine Assign App"),r.a.createElement(d.a,{onClick:this.toggle}),r.a.createElement(f.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(E.a,{className:"ml-auto",navbar:!0},r.a.createElement(g.a,null,r.a.createElement(b.a,{to:"/login",activeClassName:"active",tag:k.b},"Login")),r.a.createElement(g.a,null,r.a.createElement(b.a,{to:"/register",activeClassName:"active",tag:k.b},"Register"))))),r.a.createElement(y.d,null,r.a.createElement(y.b,{exact:!0,path:"/products",component:G}),r.a.createElement(y.b,{exact:!0,path:"/assign",component:G}),r.a.createElement(y.b,{exact:!0,path:"/assign-list",component:G}),r.a.createElement(y.b,{exact:!0,path:"/operator-list",component:G}),r.a.createElement(y.b,{exact:!0,path:"/machines",component:G}),r.a.createElement(y.b,{exact:!0,path:"/register",component:N}),r.a.createElement(y.b,{exact:!0,path:"/login",component:F}),r.a.createElement(y.b,{exact:!0,path:"/",component:G})))}}]),a}(r.a.Component),le={setHasTokenStatusActionCreator:q},me=Object(B.b)((function(e){return{hasToken:K(e)}}),le)(ie),ue={position:"absolute",backgroundColor:"#f5f5f5",fontSize:"20px",color:"white",borderTop:"1px solid #E7E7E7",textAlign:"center",padding:"15px",left:"0",bottom:"0",height:"100%",width:"100%",textColor:"black"},he={position:"fixed",left:"0",bottom:"0",width:"100%",height:"45px"},pe=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"root",key:"1"},r.a.createElement(me,null),r.a.createElement("div",{style:he,className:"footer"},r.a.createElement("div",{style:ue},r.a.createElement("p",{style:{color:"grey",fontSize:"12px"}},"\xa9 2020 Copyright : The Machine Assign App"))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var de=a(83),fe=a(314),Ee=Object(de.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_HAS_TOKEN_STATUS":return W()(Object(R.a)({},e,{hasToken:t.hasToken}));default:return e}}),Object(fe.composeWithDevTools)());o.a.render(r.a.createElement(B.a,{store:Ee},r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[325,1,2]]]);
//# sourceMappingURL=main.11401b6e.chunk.js.map