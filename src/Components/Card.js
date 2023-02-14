import React from "react";
import { useState } from "react";
import Modals from "./Modals";
const Card = ({ book })=>{
    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    console.log(book)
    return(
        <>
        {
            book.map((item)=>{
                // if both book cover and amount are  defined then only return it
                let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if(thumbnail!== undefined && amount !== undefined){
                return (
                    <>
                    <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                    <img src = {thumbnail} alt = ""/>
                    <div className="bottom">
                    <h3 className="title">{item.volumeInfo.title}</h3>
                    <p className="amount">&#8377;{amount}</p>
                    </div>
                            </div>  
                            <Modals show={show} item={bookItem} onClose={()=>setShow(false)}/>
                            </> 
                )
            }
            })
        }
      
        </>
    )
}
export default Card;