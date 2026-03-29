import conf from '../conf.js';
import { Client,Account,ID,Databases,Storage,Query } from 'appwrite';
export class Service{
    client=new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwritePrjectId)
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }
    async createPost({title,slug,content ,featuredImage,status,userId}){
        try{
            return await this.databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,
            {
                title,
                content,    
                featuredImage,
                status,
                userId,});
        }
        catch(err){
            throw err;}
    }
    async updatePost(slug,{title,slug,content ,featuredImage,status,}){
        try{
            return await this.databases.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,
            {
                title,
                content,    
                featuredImage,
                status,
                });
        }
        catch(err){
            throw err;}
 
        }
    async deletePost(slug){
        try{
            return await this.databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug

            )
           return true;
        }
        
        catch(err){
            throw err;
        return false;}
        }
    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug);
        }
        catch
        (err){
            throw err;
            return null;
        }
    }
    async getPosts(queries=[Query.equal("status","active")]){
    try{
        const result=await this.databases.listDocuments(conf.appwriteDatabaseId,conf.appwriteCollectionId,queries);
        return result;
    }
    catch(err){
        throw err;
        return [];
    }
}
//file upload
async uploadFile(file){
    try{
        return await this.bucket.createFile(conf.appwriteBucketId,ID.unique(),file);
        return true;
    }
    catch(err){
        throw err;
        return null;
    }   }
    async deletefile(fileId){
        try{
            await this.bucket.deleteFile(conf.appwriteBucketId,fileId);
            return true;
        }
        catch(err){
            throw err;
            return false;
        }
}
async getFilePreview(fileId){
    try{
        return this.bucket.getFilePreview(conf.appwriteBucketId,fileId);
        return true;
    }   
    catch(err){
        throw err;
        return false;
    }
}
}


const service= new Service()

export default service;