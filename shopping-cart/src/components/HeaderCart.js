import { MyCartContext } from "../management/context"

const HeaderCart = ()=>{
    const {amount} = MyCartContext()
    return(
        <button type="button" className="btn btn-primary position-relative">
        ตะกร้าสินค้า
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {amount} 
        </span>
        </button>
    )
}
export default HeaderCart