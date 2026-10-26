import React from"react";
import {Link} from"react-router-dom";
function Navigation(){
    return(
       <nav> 
 <Link to="/">Home</Link>
<Link to="/aboutus">About </Link>
<Link to="/contactus">Contact </Link>
</nav>
    );
}
export default Navigation;
