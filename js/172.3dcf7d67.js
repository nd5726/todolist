"use strict";(self["webpackChunktodolist"]=self["webpackChunktodolist"]||[]).push([[172],{7172:function(e,l,t){t.r(l),t.d(l,{default:function(){return y}});var s=t(3396);const a={class:"bg-[#FFD370]"},o={class:"flex items-center max-w-[1028px] mx-auto"},n=(0,s._)("div",{class:"login_left min-h-screen w-1/2"},null,-1),r={class:"w-1/2 p-8"},m=(0,s._)("h1",{class:"text-2xl font-bold text-left py-6"},"註冊帳號",-1),i={class:"flex flex-col mb-4 items-start"},d=(0,s._)("label",{class:"text-base font-bold text-font-main pb-1",for:""},"Email",-1),u={class:"flex flex-col mb-4 items-start"},c=(0,s._)("label",{class:"text-base font-bold text-font-main pb-1",for:""},"暱稱",-1),p={class:"flex flex-col mb-6 items-start"},f=(0,s._)("label",{class:"text-base font-bold text-font-main pb-1",for:""},"密碼",-1),x={class:"flex flex-col mb-6 items-start"},b=(0,s._)("label",{class:"text-base font-bold text-font-main pb-1",for:""},"再次輸入密碼",-1),w=(0,s._)("button",{type:"submit",class:"bg-font-main text-white text-base font-bold px-12 py-3 rounded-[10px]"},"註冊帳號",-1),h=(0,s._)("br",null,null,-1),_=(0,s.Uk)("登入");function W(e,l,t,W,g,k){const v=(0,s.up)("v-field"),y=(0,s.up)("error-message"),V=(0,s.up)("router-link"),D=(0,s.up)("v-form");return(0,s.wg)(),(0,s.iD)("main",a,[(0,s._)("div",o,[n,(0,s._)("div",r,[(0,s.Wm)(D,{onSubmit:k.register,class:"max-w-[304px] text-center mx-auto"},{default:(0,s.w5)((()=>[m,(0,s._)("div",i,[d,(0,s.Wm)(v,{type:"email",modelValue:g.user.email,"onUpdate:modelValue":l[0]||(l[0]=e=>g.user.email=e),name:"email",label:"Email",class:"bg-white rounded-[10px] px-4 py-3 w-full",placeholder:"請輸入Email",rules:"required|email"},null,8,["modelValue"]),(0,s.Wm)(y,{name:"email",class:"text-red-700 pl-2"})]),(0,s._)("div",u,[c,(0,s.Wm)(v,{type:"text",modelValue:g.user.nickname,"onUpdate:modelValue":l[1]||(l[1]=e=>g.user.nickname=e),name:"nickname",label:"暱稱",class:"bg-white rounded-[10px] px-4 py-3 w-full",placeholder:"請輸入您的暱稱",rules:"required"},null,8,["modelValue"]),(0,s.Wm)(y,{name:"nickname",class:"text-red-700 pl-2"})]),(0,s._)("div",p,[f,(0,s.Wm)(v,{type:"password",modelValue:g.user.password,"onUpdate:modelValue":l[2]||(l[2]=e=>g.user.password=e),label:"密碼",name:"password",class:"bg-white rounded-[10px] px-4 py-3 w-full",placeholder:"請輸入密碼",rules:"required|min:6"},null,8,["modelValue"]),(0,s.Wm)(y,{name:"password",class:"text-red-700 pl-2"})]),(0,s._)("div",x,[b,(0,s.Wm)(v,{type:"password",modelValue:g.confirmPWD,"onUpdate:modelValue":l[3]||(l[3]=e=>g.confirmPWD=e),name:"confirmPWD",label:"再次輸入密碼",class:"bg-white rounded-[10px] px-4 py-3 w-full",placeholder:"請再次輸入密碼",rules:"required|confirmed:@password|min:6"},null,8,["modelValue"]),(0,s.Wm)(y,{name:"confirmPWD",class:"text-red-700 pl-2"})]),w,h,(0,s.Wm)(V,{to:"/login",class:"text-font-main inline-block text-base font-bold my-6"},{default:(0,s.w5)((()=>[_])),_:1})])),_:1},8,["onSubmit"])])])])}var g={data(){return{user:{email:"",nickname:"",password:""},confirmPWD:""}},methods:{register(){this.$http.post("https://todoo.5xcamp.us/users",{user:this.user}).then((e=>{alert("註冊成功"),this.$router.push("/login")})).catch((e=>{console.dir(e)}))}}},k=t(89);const v=(0,k.Z)(g,[["render",W]]);var y=v}}]);
//# sourceMappingURL=172.3dcf7d67.js.map