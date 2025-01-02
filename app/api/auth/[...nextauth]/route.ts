import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
const handler=NextAuth({
   providers:[
    CredentialsProvider({
        name:'Email',
        credentials:{
            username:{label:'email',type:'text',placeholder:"username"},
            password:{label:'password',type:'password',placeholder:"password"}
        },

        async authorize(credentails:any){
            console.log(credentails);
           //Here the validation logic goes and based on it 
           //The data is return  
           
            return {
                id:"user1",
                name:"Hello"
            };
        },
    })
   ],
   secret:process.env.NEXTAUTH_SECRET 
})

export {handler as GET,handler as POST};