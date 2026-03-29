import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client=new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account=new Account(this.client);
}
async createAccount({email,password,name}){
    try{
        const userAccount=await this.account.create(ID.unique(),email,password,name);
        if(userAccount){
            //call another method to create user document in database
                return this.login({email,password});
    }
    else{
        return userAccount;
    }
    }
    catch(err){
        throw err;
        
    }

}
async login({email,password}){
    try{
        return await this.account.createEmailSession(email,password);


    }
    catch(err){
        throw err;
}}
 async getcurrentUser(){ try {
    return await this.account.get();
  } catch (err) {
    throw err;
  }
  return null;
}
async logout(){
    try{
        await this.account.deleteSessions("current");
    }
    catch(err){
        throw err;
    }
}
}

const authService = new AuthService();
export default authService;