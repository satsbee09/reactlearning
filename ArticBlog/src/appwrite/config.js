import conf from '../conf/conf.js';
import { Client, Account, ID, Databases, Storage, Query, Permission, Role } from 'appwrite';
export class Service{
    client=new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }
    async createPost({title,slug,content ,featuredImage,status,userId}){
        try{
            return await this.databases.createDocument({
                databaseId: conf.appwriteDatabaseId,
                collectionId: conf.appwriteCollectionId,
                documentId: ID.unique(),
                data: {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                },
                permissions: [Permission.read(Role.any()), Permission.write(Role.user(userId))],
            });
        }
        catch(err){
            throw err;
        }
    }
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
        } catch (err) {
            throw err;
        }
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
        return await this.bucket.createFile({
            bucketId: conf.appwriteBucketId,
            fileId: ID.unique(),
            file,
            permissions: [Permission.read(Role.any())]
        });
    }
    catch(err){
        throw err;
    }
    }
    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(conf.appwriteBucketId,fileId);
            return true;
        }
        catch(err){
            throw err;
        }
    }
    async getFilePreview(fileId){
        try{
            return this.bucket.getFilePreview(conf.appwriteBucketId,fileId);
        }
        catch(err){
            throw err;
        }
    }
}


const service= new Service()

export default service;