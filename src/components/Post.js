import React from "react";
// import {useDispatch} from "react-redux";

export default ({post})=> {

    return(
        <div className='card'>
            <div className="card-body">
                <h5 className='card-title'> {post.title}</h5>
            </div>

        </div>
    )
}