import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    //check if user is online or not? 
    useEffect(() => {
        window.addEventListener("offline", ()=> {
            setOnlineStatus(false);
        });

        window.addEventListener("offline", ()=> {
            setOnlineStatus(false);
        });
    },[]);

    return onlineStatus;
}

export default useOnlineStatus;