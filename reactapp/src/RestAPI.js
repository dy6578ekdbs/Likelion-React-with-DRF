import React,{useEffect, useState} from 'react';
import axios from "axios";

const RestAPI =()=>{

    const [text,setText] = useState([]);

    useEffect(()=>{
        axios
            .get("http://127.0.0.1:8000/blog/")
            .then((response) => {
                setText([...response.data]);
                console.log(response.data, "불러옴");
            })
            .catch(function (error) {
                console.log(error);
            })

    },[]);



    return(
        <>
        <h1>REST API 연습</h1>
    

      {text.map((e) => (
        <div>
          {" "}
          <div className="list">
            <span>
              {e.id}번, 제목 : {e.title}, 시간:{e.date}, 내용 : {e.body}
            </span>
            
            <button
              className="btn-delete"
              onClick={() => {
                axios.delete(`http://127.0.0.1:8000/blog/${e.id}`);
                setText(text.filter((text) => text.id !== e.id));
              }}
            >
              DELETE
            </button>{" "}
          </div>
        </div>
      ))}

    
    </>
    );
}

export default RestAPI;