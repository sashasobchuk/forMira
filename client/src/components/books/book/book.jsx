import React, {useState} from 'react';
import './book.css'

const Book = ({props}) => {
    let book  = props.book
    let [edit,setEdit]=useState(false)
    let[name,setName]=useState(book.name)
    let[author,setAuthor]=useState(book.author)
    let[price,setPrice]=useState(book.price)
    let[rating,setRating]=useState(book.rating)


    return (
        <div className='bookContainer'>
                <button className='' onClick={()=>setEdit(!edit)}> edit</button>
            {/*<div> {edit === true ?<span>edit</span> :<span>not edit</span> }</div>*/}
            <div>
                <span>Name:</span>
                {edit === true
                    ? <input type="text"
                             onChange={(e)=>setName(e.currentTarget.value)}
                             value={name}/>
                    : <span>{name}</span>}
            </div>
            <div>
                <span>Author:</span>
                {edit === true
                    ? <input type="text"
                             onChange={(e)=>setAuthor(e.currentTarget.value)}
                             value={author}/>
                    : <span>{author}</span>}
            </div>
            <div>
                <span>Price:</span>
                {edit === true
                    ? <input type="text"
                             onChange={(e)=>setPrice(e.currentTarget.value)}
                             value={price}/>
                    : <span>{price}</span>}
            </div>
            <div>
                <span>Rating:</span>
                {edit === true
                    ? <input type="text"
                             onChange={(e)=>setRating(e.currentTarget.value)}
                             value={rating}/>
                    : <span>{rating}</span>}
            </div>
        </div>
    );
};

export default Book;
