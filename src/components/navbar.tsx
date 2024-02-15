import {Link} from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";


export const Navbar = () => {

    const [user] = useAuthState(auth);

    const signuserOut = async () => {

        await signOut(auth);

    }


    return <div className="navbar">

        <div className="links">
        <Link to="/">Home</Link>
        {user ? <Link to="/createpost">Create Post</Link> : <Link to="/login">Login</Link>}
        </div>
        <div className="user">
        {user ? 
            <><p>{user?.displayName}</p>
            <img src={user?.photoURL || ""} width="20" height="20"/> 
            <button className="logout-button" onClick={signuserOut}>Log Out</button> </>
            : null}

            </div> 
 


    </div>
}