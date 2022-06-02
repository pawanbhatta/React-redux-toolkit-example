import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const user = useSelector(state=>state.user)
  const dispatch = useDispatch();

  console.log("user", user);

  useEffect(()=>{
    dispatch(fetchUsers())
  },[])


  return (
    <div>
      <h2>List of users </h2>
     <ul>
       {user.loading && <div>Loading...</div> }
       {!user.loading && user.error ? <div> Error : {user.error} </div> : "" }
       {!user.loading && user.users.length ? (
         <ul>
           {
             user.users.map(user=>(
               <li key={user.id}>{user.name}</li>
             ))
           }
         </ul>
       ) : "null"}
     </ul>
    </div>
  );
};

export default UserView;
