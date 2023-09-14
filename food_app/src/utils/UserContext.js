import { createContext } from "react";


const UserContext = createContext({
    loggedInUser: "Demo",
});

export default UserContext;