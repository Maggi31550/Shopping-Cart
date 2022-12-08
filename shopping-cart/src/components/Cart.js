import { MyCartContext } from "../management/context"
import CartItem from "./CartItem"


const Cart = ()=>{
    const {cart,total,formatNumber} = MyCartContext()
    console.log(cart);
    if(cart.length === 0){
        
        return (
            <div className='shopping-cart'>
                <div className="py-5 text-center">
                    <h1>ไม่เหลืออะไรเลย</h1>
               </div>
            </div>
        )
    }else{
        return (
            <div className='shopping-cart'>
                <div className="title">สินค้าในตะกร้า</div>
    
                {cart.map((data,index)=>{
                    return <CartItem key={data.id} {...data} />
                })}
                
                <div className="footer">ยอดรวม {formatNumber(total)} บาท</div>
    
            </div>
        )
    }

}
export default Cart