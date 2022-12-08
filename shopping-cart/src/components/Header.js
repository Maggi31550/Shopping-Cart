
import HeaderCart from "./HeaderCart"
const Header = ()=>{
   
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">          
                <a href="/" className="d-flex align-items-center mb-3 me-auto text-dark text-decoration-none">
                    <span className="fs-4">Narongrid Shop</span>
                </a>
                <HeaderCart/>  
            
        </header>
      </div>
    )
}

export default Header