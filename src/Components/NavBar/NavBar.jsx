import { useState } from "react";
import Link from "../Link/Link";
import { IoMdMenu, IoIosCloseCircleOutline} from "react-icons/io";

const NavBar = () => {
    const [open, setOpen]=useState(false)
    const routes = [

        { "id": 1, "path": "/", "name": "Home" },
        { "id": 2, "path": "/about", "name": "About" },
        { "id": 3, "path": "/services", "name": "Services" },
        { "id": 4, "path": "/products", "name": "Products" },
        { "id": 5, "path": "/contact", "name": "Contact" }
    ]

    return (
        <nav className="text-black bg-yellow-200 p-2">
            <div onClick={()=> setOpen(!open)} className="md:hidden text-2xl">
                {
                    open === true? 
                    <IoIosCloseCircleOutline></IoIosCloseCircleOutline>: 
                    <IoMdMenu></IoMdMenu>
                }            
            </div>
            <ul className={`md:flex duration-1000 mr-4 absolute lg:static
            ${open?'top-10': '-top-60'}
            bg-yellow-100 lg:bg-yellow-200 text-black pl-6 shadow-xl lg:shadow-none rounded-b-lg `} >
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;