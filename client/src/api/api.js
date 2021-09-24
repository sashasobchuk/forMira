import * as axios from "axios";


let deploy = false
export  const errorReporte =(string,e)=>{
    if(deploy){
        alert(JSON.stringify(e) + string)
    }else {
        console.warn(JSON.stringify(e)  + string)
    }
}
export const instanse = axios.create({
    baseURL: 'http://localhost:3000/',
    headers:{}
})
export const getCollections = async () => {
    try {
        return await instanse.get(`api/collections`,{},{})
    }
    catch (e) {
        errorReporte('problem in  deleteItemAPI', e)
    }
}
export const getBooksApi = async () => {
    try {
        return await instanse.get(`api/books/`,{},{})
    }
    catch (e) {
        errorReporte('problem in  deleteItemAPI', e)
    }
}

export const uploadBookApi = async (payload) => {
    try {
            return await instanse.post(`api/books`,{
                name:payload.name,
                author:payload.author,
                price:payload.price,
                rating:payload.rating
            },{})
    }
    catch (e) {
        errorReporte('problem in  deleteItemAPI', e)
    }
}

export const changeBookCollectionApi = async (payload) => {
    try {
            return await instanse.post(`api/collections/${payload.sendBookId}/books`,{
                name:payload.name,
                bookId:payload.newBookID
            },{})
    }
    catch (e) {
        errorReporte('problem in  deleteItemAPI', e)
    }
}


export const deleteBookApi = async (payload) => {
    debugger
    try {
            return await instanse.delete(`api/books/${payload}`,{},{})
    }
    catch (e) {
        errorReporte('problem in  deleteItemAPI', e)
    }
}



export const getBookApi = async (payload) => {
    debugger
    try {
        return await instanse.get(`api/collections/${payload.id}`,{})
    }
    catch (e) {
        errorReporte('problem in  asdfcdbbd df', e)
    }
}


export const uploadCollectionApi = async ({payload})=>{
    try {
        return await instanse.post(`api/collections`,{
            name:payload.name,
            description:payload.description
        },{})
    }catch (e){
        alert(e,' 3223erwlfadk')
    }
}

export const deleteCollectionApi = async (id)=>{
    try {
        return await instanse.delete(`api/collections/${id}`,{},{})
    }catch (e){
        alert(e,' svdasd')
    }
}

export const downloadCollectionApi = async (id)=>{
    try {
        return await instanse.get(`api/collections/${id}`,{},{})
    }catch (e){
        alert(e,' afsd')
    }
}


export const updateCollectionApi = async ({payload})=>{
    try {
        return await instanse.put(`api/collections/${payload.id}`,{
            name:payload.name,
            description:payload.description
        },{})
    }catch (e){
        alert(e,' afsd')
    }
}






