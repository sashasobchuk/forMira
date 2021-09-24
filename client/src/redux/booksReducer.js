

export const DOWNLOAD_BOOKS = 'DOWNLOAD_BOOKS'
export const SET_STORE_BOOKS = 'SET_STORE_BOOKS'

export const UPLOAD_BOOK = 'UPLOAD_BOOK'
export const ADD_STORE_BOOK = 'ADD_STORE_BOOK'

export const DELETE_BOOK = 'DELETE_BOOK'
export const REMOVE_LOCAL_BOOK = 'REMOVE_LOCAL_BOOK'

let initState ={
    books:[{
        _id: "59316b89008c586bc2214318",
        name: "Totally awesome book",
        author: "Vasya Pupkin",
        rating: 5,
        price: 666
    }],
}
const  bookReducer = (state = initState, action)=>{
    switch (action.type) {

        case SET_STORE_BOOKS: return {...state,books:action.books}
        case ADD_STORE_BOOK: return {...state,books:[...state.books,action.books]}
        case REMOVE_LOCAL_BOOK: return {...state,books:[...state.books.filter(item=>item._id !==action._id)]}

        default :return state

    }
}



export const downloadBooks=(payload)=>({type:DOWNLOAD_BOOKS,payload})
export const setStoreBooks=(books)=>({type:SET_STORE_BOOKS,books})


export const uploadBook=(payload)=>({type:UPLOAD_BOOK,payload})
export const addStorageBook=(_id)=>({type:ADD_STORE_BOOK,_id})


export const deleteBook=(payload)=>({type:DELETE_BOOK,payload})
export const removeLocalBook=(id)=>({type:REMOVE_LOCAL_BOOK,id})








export default bookReducer




