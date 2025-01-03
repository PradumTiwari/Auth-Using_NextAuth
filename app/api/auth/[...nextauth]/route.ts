import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import FacebookProvider from 'next-auth/providers/facebook'
import GithubProvider from "next-auth/providers/github";

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
    }),

   
   ],
   secret:process.env.AUTH_SECRET
})

export {handler as GET,handler as POST};