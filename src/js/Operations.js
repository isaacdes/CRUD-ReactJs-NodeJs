import '../css/main.css'
import '../css/bootstrap.min.css'
import '../css/bootstrap-grid.min.css'

import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Operations() {

   

    const [bookName, setBookName] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [bookPrice, setBookPrice] = useState(0.0);
    const [bookList, setBookList] = useState([]);
    const [newPrice, setNewPrice] = useState(0.0);



    //read data
    const fetchData = () => {
        Axios.get("http://localhost:3001/read").then((response) => {
            setBookList(response.data);
        });
    }

    //insert data
    const addToList = () => {
        var errorMessage = "";

        if(!bookName){
            errorMessage = errorMessage + "Book name is empty\n";
        }
        if(!authorName) {
            errorMessage = errorMessage + "Authors's name is empty\n";
        }
        if(!bookPrice) {
            errorMessage = errorMessage + "Book Price is empty";
        }
        
        if(errorMessage != "")
            return alert(errorMessage);

        //return alert(bookPrice.value);
        // if (!bookName || !authorName || !bookPrice){
        //     return alert("Contents cannot be empty");
        // }

       // console.log("Adding "+ bookName + "," + authorName + "," + bookPrice);
        Axios.post("http://localhost:3001/insert", {
            bookName: bookName,
            authorName: authorName,
            bookPrice: bookPrice
        });
    };

    //update data
    const updateBookPrice = (id) => {

        if(!newPrice){
            return alert("New Price cannot be Empty!")
        }

        Axios.put("http://localhost:3001/update", {
            id: id,
            newPrice: newPrice
        });

    };

    //delete Record
    const deleteRecord = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`);

    };

    return (
        <div className='addData'>
            <div className='row'>
                <div className='col'></div>
                <div className='col-sm-4 custom-col'>

                <form>
                <div className='form-group'>
                   
                    <label >Book Name</label>
                    <input className='form-con' type='text' onChange={(event) => {
                        setBookName(event.target.value)
                    }} />
                    
                </div>

                <div className='form-group'>
                    <label>Authors Name</label>
                    <input className='form-con' type='text' onChange={(event) => {
                        setAuthorName(event.target.value)
                    }}/>
                </div>

                <div className='form-group'>
                    <label>Cost</label>
                    <input className='form-con' type='number' onChange={(event) => {
                        setBookPrice(event.target.value)
                    }} />
                </div>

                
                <button className='btn-primary btn-lg btnCente' onClick={addToList}>Add Book</button>

                </form>



                </div>
                <div className='col'></div>

            </div>

            <div className='row border-row'>
                <div className='col'>
                    <button className='btn btn-sm' onClick={fetchData} >Get Books</button>
                </div>
                <div className='col col-res'>
                    {bookList.map((val, key) => {
                        return <div className='result'> 
                            <p><b>{val.bookName}</b></p>
                            <p>Author: {val.bookAuthor}</p>
                            <p>Price: {val.bookPrice}$</p>

                            <input type='number' onChange={(event) =>{
                                setNewPrice(event.target.value); 
                            }} placeholder ="New Price" />
                            <button onClick={() => updateBookPrice(val._id)} className='btn btn-sm btn-outline-primary' >Update Price</button>
                            <button onClick={() => deleteRecord(val._id)} className='btn btn-sm btn-danger btn-crud' >Delete Record</button>

                            </div>
                    })}
                </div>
                

            </div>
           
            
        </div>

    );
}

export default Operations;