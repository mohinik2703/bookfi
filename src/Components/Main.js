import React from "react";
import Card from './Card';
import axios from "axios";
import { useState } from "react";
const Main = ()=>{
    const [search,setsearch] = useState("");
    const [bookData,setData]=useState([]);
    //api data items will be added in setdata then to bookdata
    const searchBook = (evt)=>{
        if(evt.key === "Enter"){
            axios.get(`https://www.googleapis.com/books/v1/volumes?q= ${search}&key=${process.env.REACT_APP_API_KEY} &maxResults=40`)
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    //whenever you enter a book value on serach setsearch func set it to a target value  wherenever a key is pressed
    // searchbook func is called
    return (
        <>
        <div className="header">
            <div className="row1">
                <h1>Seize every day with a new book.</h1>
            </div>
            <div className="row2">
             <h2>Search the book</h2>
             <div className="search">
            
            <input type='text' placeholder = "Enter your book name..." value = {search} onChange = {e=>setsearch(
                e.target.value
            )} onKeyPress = {searchBook}/>
            
            <button><i class="fa-regular fa-magnifying-glass"></i></button>
             </div>
             {/* <img src="" alt=""/> */}
            </div>
        </div>
        <div className="container">{
        <Card book={bookData}/>}
        </div>

        </>
    )
}
export default Main;