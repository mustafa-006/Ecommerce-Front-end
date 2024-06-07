import React from "react";
import { Link } from "react-router-dom";


function Navbar(){
    return(

        <div>
<nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
<div style={{display:"flex"}}>
<Link to={'/'} className="btn btn-success" style={{marginRight:"26px"}}>Home</Link>
<Link to={'/Tshirt'} className="btn btn-warning" style={{marginRight:"26px"}}>T-shirts</Link>
<Link to={'/Jacket'} className="btn btn-warning" style={{marginRight:"26px"}}>Jackets</Link>
<Link to={'/pant'} className="btn btn-warning" style={{marginRight:"26px"}}>Pants</Link>
</div>
</nav>



        </div>
    )
}
export default Navbar;