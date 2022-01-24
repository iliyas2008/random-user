import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Users({myFunct}) {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get('https://randomuser.me/api/?results=10')
        .then(res=>setUsers(res.data.results))
    }, [])

    
  return (
  <div>
      {users.map((user, i)=>{
          const {title, first, last} = user.name
        return(
        <div key={i} style={{margin:"2rem", padding:"2rem", border:"1px solid orange", width:"50vw"}}>
            <p>{`Name: ${title} ${first} ${last}`}</p>
            <p>{`Email: ${user.email}`}</p>
            <p>{`Phone: ${user.phone}`}</p>
            
            <Link to={'/userdetails'} style={{padding:"1rem", background:"lightgreen", textDecoration:"none", borderRadius:".5rem"}} onClick={()=>myFunct(user)}  >
            View Details
            </Link>
            
        </div>

        )
      })}
  </div>
  );
}
