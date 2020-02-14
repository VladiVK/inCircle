import React from 'react';
import s from './Header.module.css';

const Header = () => {
 return (
     <div className={s.header}>
       <h1 className={s.header_title}>inCircle</h1>
       
        {/* <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRO3xbF9eTSMiavtJ1pZTkalZB46LqucIt_ArKB08BIbWjX_v6"
          alt="logotype"
        /> */}
        
     </div>

 );
}
export default Header;