import React from "react";

const UserContext = React.createContext()

export default UserContext;

{/* 
userContext is like a global variable
<UserContext>
<Login />
<Card>
    <Data />
</Card>

<UserContext/> 
*/}