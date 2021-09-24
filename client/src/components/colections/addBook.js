import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {uploadBook} from "../../redux/booksReducer";

const AddBook = ({addBookDisplay,changeAddBookDisplay,sendBookId}) => {
    const [name, setName] = useState('name')
    const [author, setAuthor] = useState('author')
    const [rating, setRating] = useState(0)
    const [price, setPrice] = useState(100)

    const dispatch = useDispatch()
    const uploadData = () => {
        dispatch(uploadBook({sendBookId,name, author,rating,price}))
        changeAddBookDisplay(false)
    }

    return (
        <div style={{display:addBookDisplay === true ? 'block':'none'}} className='addCollectionContainer'>
            <div className='tittle'> add Book</div>
            <button  onClick={()=>{changeAddBookDisplay(false)}} className='delete'>
                X
            </button>
            <div className='addCollection'>
                <div>
                    <label htmlFor="name">name</label>
                    <input type="text" value={name} required
                           onChange={(e) => setName(e.currentTarget.value)}
                           id='name'/><br/>
                </div>
                <div>
                    <label htmlFor="author">author</label>
                    <input type="text" value={author} required
                           onChange={(e) => setAuthor(e.currentTarget.value)}
                           id='author'/><br/>
                </div>
                <div>
                    <label htmlFor="rating">rating</label>
                    <input type="number" value={rating} required min='0' step='1' max='5'
                           onChange={(e) => setRating(e.currentTarget.value)}
                           id='rating'/><br/>
                </div>
                <div>
                    <label htmlFor="price">price</label>
                    <input type="number" value={price}
                           required
                           onChange={(e) => setPrice(e.currentTarget.value)}
                           id='price'/>
                </div>
                <div onClick={uploadData}>
                    <button> send</button>
                </div>
            </div>

        </div>
    );
};

export default AddBook;









