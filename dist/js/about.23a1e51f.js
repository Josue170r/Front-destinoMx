"use strict";(self["webpackChunkfront_destinomx"]=self["webpackChunkfront_destinomx"]||[]).push([[443],{3240:function(e,a,t){t.r(a),t.d(a,{default:function(){return ae}});t(560);var o=t(3396),s=t(7139),l=t(4870),r=t(3574),n=t(7629),d=t(5708),i=t(2630);const m={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-8.5 h-8.5 text-center"},c=(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),u=[c];function p(e,a,t,s,l,r){return(0,o.wg)(),(0,o.iD)("svg",m,u)}var f={name:"PlusCircleIcon"},w=t(89);const b=(0,w.Z)(f,[["render",p]]);var g=b,h=t(3767),x=t(3836);const _=e=>((0,o.dD)("data-v-3507b04c"),e=e(),(0,o.Cn)(),e),v={class:"justify-center items-center"},y={class:"pt-16 flex justify-center text-center"},P={class:"text-4xl mb-8 text-white font-baskerville"},W={class:"flex flex-col items-center"},k=_((()=>(0,o._)("img",{src:r,alt:"logo",class:"mx-auto w-64 p-2 pl-8"},null,-1))),U={class:"bg-white rounded-full h-10 w-10 ml-32 -mt-10"},C={class:"opacity-100 mb-64"},V={class:"flex-1 bg-gray-100 md:w-full rounded-lg -mt-24"},S={class:"mt-4 mb-8"},A={class:"flex items-center ml-4"},j={class:"ml-[75px]"},F=_((()=>(0,o._)("span",{class:"text-2xl"},"Editar Perfil",-1))),N={class:"flex items-center border-2 rounded-md py-2 px-3 mb-4 bg-white"},B={class:"ml-1 mb-2 -mt-1"},Z={class:"flex items-center border-2 rounded-md py-2 px-3 mb-4 bg-white"},z={class:"ml-1 mb-2 -mt-1"},D={class:"flex items-center border-2 rounded-md py-2 px-3 mb-4 bg-white"},E={class:"ml-1 mb-2 -mt-1"},L={class:"flex items-center ml-4"},I={class:"ml-12"},$=_((()=>(0,o._)("span",{class:"text-2xl"},"Cambiar Contraseña",-1))),q={class:"flex items-center border-2 py-2 px-3 rounded-md mb-6 bg-white"},R={class:"ml-1 mb-2 -mt-1"},T={class:"flex items-center border-2 py-2 px-3 rounded-md mb-6 bg-white"},H={class:"ml-1 mb-2 -mt-1"},M={class:"flex items-center border-2 rounded-md py-2 px-3 mb-4 bg-white"},G={class:"ml-1 mb-2 -mt-1"},J={class:"flex items-center ml-4 font-baskerville"},O={class:"flex items-center ml-4"},K={class:"ml-16"},Q=_((()=>(0,o._)("div",{class:"text-center ml-3 mr-1 py-0 text-left text-xl",style:{"white-space":"normal"}}," ¿Esta seguro de eliminar su cuenta? ",-1))),X={name:"LoginForm",components:{BackButtonIcon:i.Z,PlusCircleIcon:g},data(){return{user:{username:"",name:"",email:""},dialog:!1,loading:!1,dialogfromPassword:!1,dialogfromDelete:!1,updateProfile:{name:"",lastname:"",secondlastname:""},updatePassword:{currentPassword:"",newPassword:"",confirmPassword:""}}},created(){this.getUserInformation(),this.loginJWT()},computed:{isFormEmpty(){return!this.username}},methods:{async getUserInformation(){try{this.loading=!0;const{data:e}=await h.f.get("/api/perfil",{}),{Usuario:a,Nombre:t,ApellidoP:o,CorreoElectronico:s}=e.datosUsuario;console.log(),this.user.username=a,this.user.name=`${t} ${o}`,this.user.email=`${s}`}catch({response:e}){console.log(e),(0,x.Am)(e.data.mensaje,{hideProgressBar:!0,autoClose:1500,type:"error",theme:"colored"})}finally{setTimeout((()=>{this.loading=!1}),2e3)}},async updateProfileFunction(){try{const{data:e}=await h.f.put("/api/editar-perfil",{Nombre:this.updateProfile.name,ApellidoP:this.updateProfile.lastname,ApellidoM:this.updateProfile.secondlastname});(0,x.Am)(e.mensaje,{hideProgressBar:!0,autoClose:600,type:"success",theme:"colored"}),window.location.reload(),console.log(e)}catch(e){console.log(e)}this.dialog=!1},async updatePasswordFuntion(){try{const{data:e}=await h.f.put("/api/cambiar-contrasena",{contrasena:this.updatePassword.currentPassword,nuevaContrasena:this.updatePassword.confirmPassword});(0,x.Am)(e.mensaje,{hideProgressBar:!0,autoClose:600,type:"success",theme:"colored"})}catch({response:e}){(0,x.Am)(e.data.mensaje,{hideProgressBar:!0,autoClose:1500,type:"error",theme:"colored"})}this.dialogfromPassword=!1},async deleteUserAccount(){try{const{data:e}=await h.f.delete("/api/eliminar-cuenta");(0,x.Am)(e.mensaje,{hideProgressBar:!0,autoClose:400,type:"success",theme:"colored",onClose:()=>{this.$router.push({name:"startup"})}})}catch({response:e}){(0,x.Am)(e.data.mensaje,{hideProgressBar:!0,autoClose:1500,type:"error",theme:"colored"})}this.dialogfromPassword=!1},async loginJWT(){try{const e=await h.f.post("/api/cuenta-activa");console.log("Respuesta exitosa:",e)}catch(e){console.log(e)}},closeDailogForPassword(){this.dialogfromPassword=!1,this.updatePassword.confirmPassword="",this.updatePassword.currentPassword="",this.updatePassword.newPassword=""},closeDailogForProfile(){this.dialog=!1,this.updateProfile.name="",this.updateProfile.lastname="",this.updateProfile.secondlastname=""}}};var Y=Object.assign(X,{setup(e){const a=n.Ry({name:n.Z_().required("Este campo es obligatorio").matches(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/,"El nombre solo puede contener letras"),lastName:n.Z_().required("Este campo es obligatorio").matches(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/,"El apellido solo puede contener letras"),secondLastName:n.Z_().required("Este campo es obligatorio").matches(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/,"El segundo apellido solo puede contener")}),t=n.Ry({currentPassword:n.Z_().required("La contraseña actual es obligatoria"),password:n.Z_().required("La contraseña es obligatoria").min(8,"La contraseña debe tener al menos 8 caracteres").matches(/[A-Z]/,"Debe contener al menos una letra mayúscula").matches(/[!@#$%^&*(),.?":{}|<>]/,"Debe contener al menos un carácter especial").max(32,"La contraseña no debe exceder los 32 caracteres"),passwordConfirmation:n.Z_().required("La confirmación de contraseña es obligatoria").oneOf([n.iH("password"),null],"Las contraseñas deben coincidir").min(8,"La contraseña debe tener al menos 8 caracteres")});return(e,r)=>{const n=(0,o.up)("router-link"),m=(0,o.up)("v-progress-circular"),c=(0,o.up)("v-icon"),u=(0,o.up)("v-list-item"),p=(0,o.up)("v-card-title"),f=(0,o.up)("v-col"),w=(0,o.up)("v-row"),b=(0,o.up)("v-spacer"),h=(0,o.up)("v-btn"),x=(0,o.up)("v-card-actions"),_=(0,o.up)("v-card-text"),X=(0,o.up)("v-card"),Y=(0,o.up)("v-dialog"),ee=(0,o.up)("v-divider"),ae=(0,o.up)("v-list");return(0,o.wg)(),(0,o.iD)("div",{class:(0,s.C_)(["absolute-screen min-h-screen flex justify-center",[e.loading?"opacity-75":"..."]])},[(0,o._)("div",v,[(0,o._)("div",y,[(0,o.Wm)(n,{to:{name:"home"},class:"..."},{default:(0,o.w5)((()=>[(0,o.Wm)((0,l.SU)(i.Z),{class:"-ml-12 mt-1"})])),_:1}),(0,o._)("h1",P," ¡Hola "+(0,s.zw)(e.user.username)+"! ",1)]),(0,o._)("div",W,[k,(0,o._)("button",U,[(0,o.Wm)((0,l.SU)(g))])]),(0,o._)("div",C,[e.loading?((0,o.wg)(),(0,o.j4)(m,{key:0,indeterminate:"",size:"64",color:"orange-300",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)","margin-bottom":"16px"}})):(0,o.kq)("",!0)]),(0,o._)("div",V,[(0,o.Wm)(X,{class:"mx-auto w-[340px] rounded-lg","max-width":"600"},{default:(0,o.w5)((()=>[(0,o.Wm)(ae,null,{default:(0,o.w5)((()=>[(0,o._)("div",S,[(0,o._)("div",A,[(0,o.Wm)(c,{color:"#fed7aa",size:"30"},{default:(0,o.w5)((()=>[(0,o.Uk)("mdi-account")])),_:1}),(0,o.Wm)(u,{class:"ml-3 font-baskerville text-lg"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.user.name),1)])),_:1}),(0,o._)("div",j,[(0,o.Wm)(w,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(Y,{modelValue:e.dialog,"onUpdate:modelValue":r[3]||(r[3]=a=>e.dialog=a),persistent:"",width:"1024"},{activator:(0,o.w5)((({props:e})=>[(0,o._)("button",(0,s.vs)((0,o.F4)(e)),[(0,o.Wm)(c,{color:"#fed7aa",size:"30"},{default:(0,o.w5)((()=>[(0,o.Uk)("mdi-pencil")])),_:1})],16)])),default:(0,o.w5)((()=>[(0,o.Wm)(X,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p,{class:"text-center font-baskerville mt-2"},{default:(0,o.w5)((()=>[F])),_:1}),(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)((0,l.SU)(d.l0),{"validation-schema":(0,l.SU)(a),onSubmit:e.updateProfileFunction},{default:(0,o.w5)((()=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f,{cols:"12",sm:"6",md:"4"},{default:(0,o.w5)((()=>[(0,o._)("div",N,[(0,o.Wm)((0,l.SU)(d.gN),{id:"name",modelValue:e.updateProfile.name,"onUpdate:modelValue":r[0]||(r[0]=a=>e.updateProfile.name=a),class:"pl-2 outline-none border-none w-full",type:"text",name:"name",placeholder:"Nombre(s) *"},null,8,["modelValue"])]),(0,o._)("div",B,[(0,o.Wm)((0,l.SU)(d.Bc),{class:"flex block text-red-700 text-sm",name:"name"})])])),_:1}),(0,o.Wm)(f,{cols:"12",sm:"6",md:"4"},{default:(0,o.w5)((()=>[(0,o._)("div",Z,[(0,o.Wm)((0,l.SU)(d.gN),{id:"lastName",modelValue:e.updateProfile.lastname,"onUpdate:modelValue":r[1]||(r[1]=a=>e.updateProfile.lastname=a),class:"pl-2 outline-none border-none w-full",type:"text",name:"lastName",placeholder:"Apellido paterno *"},null,8,["modelValue"])]),(0,o._)("div",z,[(0,o.Wm)((0,l.SU)(d.Bc),{class:"flex block text-red-700 text-sm",name:"lastName"})])])),_:1}),(0,o.Wm)(f,{cols:"12",sm:"6",md:"4"},{default:(0,o.w5)((()=>[(0,o._)("div",D,[(0,o.Wm)((0,l.SU)(d.gN),{id:"secondLastName",modelValue:e.updateProfile.secondlastname,"onUpdate:modelValue":r[2]||(r[2]=a=>e.updateProfile.secondlastname=a),class:"pl-2 outline-none border-none w-full",type:"text",name:"secondLastName",placeholder:"Apellido materno *"},null,8,["modelValue"])]),(0,o._)("div",E,[(0,o.Wm)((0,l.SU)(d.Bc),{class:"flex block text-red-700 text-sm",name:"secondLastName"})])])),_:1})])),_:1}),(0,o.Wm)(x,null,{default:(0,o.w5)((()=>[(0,o.Wm)(b),(0,o.Wm)(h,{color:"orange-darken-1",variant:"text",onClick:e.closeDailogForProfile},{default:(0,o.w5)((()=>[(0,o.Uk)(" Cerrar ")])),_:1},8,["onClick"]),(0,o.Wm)(h,{color:"orange-darken-1",variant:"text",type:"submit"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Guardar ")])),_:1})])),_:1})])),_:1},8,["validation-schema","onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])]),(0,o.Wm)(ee,{thickness:3,class:"border-opacity-100",inset:""}),(0,o._)("div",L,[(0,o.Wm)(c,{color:"#fed7aa",size:"30"},{default:(0,o.w5)((()=>[(0,o.Uk)("mdi-lock")])),_:1}),(0,o.Wm)(u,{class:"ml-3 font-baskerville text-lg"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Cambiar Contraseña ")])),_:1}),(0,o._)("div",I,[(0,o.Wm)(w,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(Y,{modelValue:e.dialogfromPassword,"onUpdate:modelValue":r[7]||(r[7]=a=>e.dialogfromPassword=a),persistent:"",width:"1024"},{activator:(0,o.w5)((({props:e})=>[(0,o._)("button",(0,s.vs)((0,o.F4)(e)),[(0,o.Wm)(c,{color:"#fed7aa",size:"30"},{default:(0,o.w5)((()=>[(0,o.Uk)("mdi-arrow-right-bold-circle-outline")])),_:1})],16)])),default:(0,o.w5)((()=>[(0,o.Wm)(X,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p,{class:"text-center font-baskerville mt-2"},{default:(0,o.w5)((()=>[$])),_:1}),(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)((0,l.SU)(d.l0),{"validation-schema":(0,l.SU)(t),onSubmit:e.updatePasswordFuntion},{default:(0,o.w5)((()=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f,{cols:"12",sm:"6",md:"4"},{default:(0,o.w5)((()=>[(0,o._)("div",q,[(0,o.Wm)((0,l.SU)(d.gN),{id:"currentPassword",type:"password",autocomplete:"off",modelValue:e.updatePassword.currentPassword,"onUpdate:modelValue":r[4]||(r[4]=a=>e.updatePassword.currentPassword=a),class:"pl-2 outline-none border-none w-full",name:"currentPassword",placeholder:"Contraseña actual"},null,8,["modelValue"])]),(0,o._)("div",R,[(0,o.Wm)((0,l.SU)(d.Bc),{class:"flex block text-red-700 text-sm",name:"currentPassword"})])])),_:1}),(0,o.Wm)(f,{cols:"12",sm:"6",md:"4"},{default:(0,o.w5)((()=>[(0,o._)("div",T,[(0,o.Wm)((0,l.SU)(d.gN),{id:"password",type:"password",autocomplete:"off",modelValue:e.updatePassword.newPassword,"onUpdate:modelValue":r[5]||(r[5]=a=>e.updatePassword.newPassword=a),class:"pl-2 outline-none border-none w-full",name:"password",placeholder:"Nueva Contraseña"},null,8,["modelValue"])]),(0,o._)("div",H,[(0,o.Wm)((0,l.SU)(d.Bc),{class:"flex block text-red-700 text-sm",name:"password"})])])),_:1}),(0,o.Wm)(f,{cols:"12",sm:"6",md:"4"},{default:(0,o.w5)((()=>[(0,o._)("div",M,[(0,o.Wm)((0,l.SU)(d.gN),{id:"passwordConfirmation",modelValue:e.updatePassword.confirmPassword,"onUpdate:modelValue":r[6]||(r[6]=a=>e.updatePassword.confirmPassword=a),class:"pl-2 outline-none border-none w-full",type:"password",name:"passwordConfirmation",placeholder:"Confirma tu nueva contraseña"},null,8,["modelValue"])]),(0,o._)("div",G,[(0,o.Wm)((0,l.SU)(d.Bc),{class:"flex block text-red-700 text-sm",name:"passwordConfirmation"})])])),_:1})])),_:1}),(0,o.Wm)(x,null,{default:(0,o.w5)((()=>[(0,o.Wm)(b),(0,o.Wm)(h,{color:"orange-darken-1",variant:"text",onClick:e.closeDailogForPassword},{default:(0,o.w5)((()=>[(0,o.Uk)(" Cerrar ")])),_:1},8,["onClick"]),(0,o.Wm)(h,{color:"orange-darken-1",variant:"text",type:"submit"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Guardar ")])),_:1})])),_:1})])),_:1},8,["validation-schema","onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])]),(0,o.Wm)(ee,{thickness:3,class:"border-opacity-100",inset:""}),(0,o._)("div",J,[(0,o.Wm)(c,{color:"#fed7aa",size:"30"},{default:(0,o.w5)((()=>[(0,o.Uk)("mdi-email")])),_:1}),(0,o.Wm)(u,{class:"ml-3 text-lg"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.user.email),1)])),_:1})]),(0,o.Wm)(ee,{thickness:3,class:"border-opacity-100",inset:""}),(0,o._)("div",O,[(0,o.Wm)(c,{color:"#fed7aa",size:"30"},{default:(0,o.w5)((()=>[(0,o.Uk)("mdi-close-circle")])),_:1}),(0,o.Wm)(u,{class:"ml-3 font-baskerville text-lg"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Eliminar Cuenta ")])),_:1}),(0,o._)("div",K,[(0,o.Wm)(w,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(Y,{modelValue:e.dialogfromDelete,"onUpdate:modelValue":r[10]||(r[10]=a=>e.dialogfromDelete=a),persistent:"",width:"1024"},{activator:(0,o.w5)((({props:e})=>[(0,o._)("button",(0,s.vs)((0,o.F4)(e)),[(0,o.Wm)(c,{color:"#fed7aa",size:"30",class:"ml-3"},{default:(0,o.w5)((()=>[(0,o.Uk)("mdi-arrow-right-bold-circle-outline")])),_:1})],16)])),default:(0,o.w5)((()=>[(0,o.Wm)(X,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p,{class:"text-center font-baskerville mt-2"},{default:(0,o.w5)((()=>[Q])),_:1}),(0,o.Wm)(_,{class:"text-center"},{default:(0,o.w5)((()=>[(0,o.Uk)("Toda su información y la configuración de su cuenta serán eliminadas permanentemente.")])),_:1}),(0,o.Wm)(x,null,{default:(0,o.w5)((()=>[(0,o.Wm)(b),(0,o.Wm)(h,{color:"grey lighten-3",variant:"text",onClick:r[8]||(r[8]=a=>e.dialogfromDelete=!1)},{default:(0,o.w5)((()=>[(0,o.Uk)(" Cancelar ")])),_:1}),(0,o.Wm)(h,{color:"orange-darken-1",variant:"text",onClick:r[9]||(r[9]=a=>e.deleteUserAccount())},{default:(0,o.w5)((()=>[(0,o.Uk)(" Aceptar ")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])])])])),_:1})])),_:1})])])],2)}}});const ee=(0,w.Z)(Y,[["__scopeId","data-v-3507b04c"]]);var ae=ee},3506:function(e,a,t){t.r(a),t.d(a,{default:function(){return k}});var o=t(3396),s=t(9242),l=t(7139),r=t(1994);const n=e=>((0,o.dD)("data-v-79c69d22"),e=e(),(0,o.Cn)(),e),d={class:"absolute-screen h-full flex justify-center"},i={class:"justify-center items-center rounded-xl"},m={class:"flex-1 bg-white mx-8 md:w-full rounded-xl"},c={class:"mt-80 h-flex justify-center items-center bg-gray-100 rounded-xl"},u=n((()=>(0,o._)("img",{src:r,alt:"logo",class:"mx-auto w-64 p-2 pl-8 pt-8"},null,-1))),p={class:"w-full px-5 py-5 pb-8 rounded-xl"},f=n((()=>(0,o._)("h1",{class:"text-gray-800 font-bold text-2xl mb-4 rounded-xl"}," Recupera tu contraseña ",-1))),w=n((()=>(0,o._)("p",{class:"text-sm text-gray-800 mb-7"}," Favor de introducir su email para recuperar la contraseña. ",-1))),b={class:"flex items-center border-2 py-2 px-3 mb-4 bg-white"},g=["disabled"];function h(e,a,t,r,n,h){const x=(0,o.up)("AtIcon"),_=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",d,[(0,o._)("div",i,[(0,o._)("div",m,[(0,o._)("div",c,[u,(0,o._)("div",p,[f,w,(0,o._)("form",{onSubmit:a[1]||(a[1]=(0,s.iM)(((...e)=>h.recoveryPassword&&h.recoveryPassword(...e)),["prevent"]))},[(0,o._)("div",b,[(0,o.Wm)(x),(0,o.wy)((0,o._)("input",{id:"username","onUpdate:modelValue":a[0]||(a[0]=e=>n.user.correo=e),class:"w-full pl-2 outline-none border-none bg-white",type:"text",name:"email",placeholder:"Usuario o Email"},null,512),[[s.nr,n.user.correo]])]),(0,o._)("button",{disabled:h.isFormEmpty,type:"submit",class:(0,l.C_)(["font-quicksand block w-full mt-4 py-2 rounded-xl text-white font-semibold mb-6 bg-orange-300",[h.isFormEmpty?"opacity-60 cursor-not-allowed":"hover:outline hover:outline-1 hover:outline-orange-400"]])}," Recuperar Contraseña ",10,g),(0,o.Wm)(_,{to:{name:"login"},class:"font-baskerville mx-4 text-xl text-orange-300 mt-8 cursor-pointer hover:text-black"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Iniciar Sesión ")])),_:1})],32)])])])])])}t(560);var x=t(6264),_=t(3767),v=t(3836),y={name:"LoginForm",components:{AtIcon:x.Z},data(){return{user:{correo:""}}},computed:{isFormEmpty(){return!this.user.correo}},methods:{async recoveryPassword(){try{const e=await _.f.post("/api/cookie-correo-mandar",{correo:this.user.correo});console.log(e),(0,v.Am)(e.data.mensaje,{hideProgressBar:!0,autoClose:2e3,type:"success",theme:"colored"}),setTimeout((()=>{this.$router.push({name:"login"})}),2e3)}catch(e){(0,v.Am)(e.data.mensaje,{hideProgressBar:!0,autoClose:1500,type:"error",theme:"colored"})}}}},P=t(89);const W=(0,P.Z)(y,[["render",h],["__scopeId","data-v-79c69d22"]]);var k=W}}]);
//# sourceMappingURL=about.23a1e51f.js.map