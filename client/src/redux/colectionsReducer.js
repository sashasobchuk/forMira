

export const SET_COLLECTIONS = 'SET_COLLECTIONS'
export const DOWNLOAD_COLLECTIONS = 'DOWNLOAD_COLLECTIONS'

export const UPLOAD_COLLECTION = 'UPLOAD_COLLECTION'
export const ADD_ONE_COLLECTION = 'ADD_ONE_COLLECTION'

export const DELETE_COLLECTION = 'DELETE_COLLECTION'
export const REMOVE_COLLECTION = 'REMOVE_COLLECTION'

export const DOWNLOAD_ONE_COLLECTION = 'DOWNLOAD_ONE_COLLECTION'
export const ADD_LOCAL_COLLECTION = 'ADD_LOCAL_COLLECTION'

export const EDIT_COLLECTION = 'EDIT_COLLECTION'
export const  EDIT_LOCAL_COLLECTION= 'EDIT_LOCAL_COLLECTION'


export const ADD_LOCAL_BOOK = 'ADD_LOCAL_BOOK'

// export const DOWNLOAD_BOOKS = "DOWNLOAD_BOOKS"
// export const SET_STORE_BOOKS = "SET_STORE_BOOKS"

let initState ={
    collections:[{
        _id:'id11111',
        name:'name11111',
        description:'description11',
        books:['book']
    }],
    collection:{
        id_:' id',
        name:' name',
        description:'description',
        books:[{
            _id: "book",
            name: "Totally awesome book",
            author: "Vasya Pupkin",
            rating: 5,
            price: 666
        }]
    },
    books:[{
        _id: "59316b89008c586bc2214318",
        name: "Totally awesome book",
        author: "Vasya Pupkin",
        rating: 5,
        price: 666
    }],
    count:[],
    countFromFakeApi:[]
}

// debugger
const  colectionsReducer = (state = initState, action)=>{
    switch (action.type) {
        case SET_COLLECTIONS: return {...state,collections:action.collections}
        case ADD_ONE_COLLECTION: return {...state,collections:[...state.collections,action.collections]}
        case REMOVE_COLLECTION: return {...state,collections:[...state.collections.filter(item=>item._id!==action.id)]}
        case ADD_LOCAL_COLLECTION: return {...state,collection:action.oneCollection}
        case EDIT_LOCAL_COLLECTION: return {...state,collections: [...state.collections.map((item)=>{
            return(
                item._id !== action.payload._id
                    ?item
                    : {...item,
                        name:action.payload.name,
                        description: action.payload.description,
                        books:action.payload.books})
        })]}

        default :return state

    }
}

export const downloadCollections=()=>({type:DOWNLOAD_COLLECTIONS})
export const setCollections=(collections)=>({type:SET_COLLECTIONS,collections})

export const editCollection=(payload)=>({type:EDIT_COLLECTION,payload})
export const editLocalData=(payload)=>{return{type:EDIT_LOCAL_COLLECTION,payload:payload}}


export const uploadCollection=(payload)=>({type:UPLOAD_COLLECTION,payload})
export const addOneCollection=(collections)=>({type:ADD_ONE_COLLECTION,collections})

export const deleteCollection=(id)=>({type:DELETE_COLLECTION,id})
export const removeLocalCollection=(id)=>({type:REMOVE_COLLECTION,id})


export const downloadOneCollection=(id)=>({type:DOWNLOAD_ONE_COLLECTION,id})
export const addLocalCollection=(oneCollection)=>({type:ADD_LOCAL_COLLECTION,oneCollection})

// export const addLocalBook=(oneCollection)=>({type:ADD_LOCAL_BOOK,oneCollection})


// export const downloadBooks=(id)=>({type:DOWNLOAD_BOOKS})
// export const setStoreBooks=(books)=>({type:SET_STORE_BOOKS,books})






// export const addCount  = ()=>({type:ADD_COUNT})


export default colectionsReducer




