import React from 'react'
import * as Unicorn from '@iconscout/react-unicons'
import './LogoSearch.css'

const LogoSearch = () =>{
    return(
        <div className="Logosearch">
            <img src="https://cdn.dribbble.com/userupload/3503633/file/original-8e771406b65840e9026a01ef493ef30c.png?compress=1&resize=450x338&vertical=top" alt="" width="100" heigth="100"/>
            <div className="Search">
                <input type="text" placeholder='Explore' size="27"/>
                <div className="s-icon">
                <Unicorn.UilSearch/>
                </div>
            </div>
        </div>
    )
}

export default LogoSearch