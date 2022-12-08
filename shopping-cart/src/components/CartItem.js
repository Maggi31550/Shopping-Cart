import {FaPlus,FaMinus,FaTrash} from 'react-icons/fa'
import { MyCartContext } from '../management/context'

const CartItem = ({id,name,image_url,price,quantity}) => {
    const {removeItem,toggleQuantity,formatNumber} = MyCartContext()
    return (
        <div className='item row g-3 align-items-center' >
            <div className="col-3">
                <div className="thumbnail">
                    <img src={image_url} alt={name}/>
                </div>
            </div>
            
           <div className='col-3'>
                <div className="vstack ">
                    <p className='mb-0'>
                        <strong>{name}</strong>
                    </p>
                    <p className='text-muted'>
                        <small>ราคา {price} บาท</small>
                    </p>
                </div>
            </div>

            <div className="col-4">
                <div className="hstack gap-1">
                    
                    <button className='btn' onClick={()=>toggleQuantity(id,'decrement')}>
                        <FaMinus/>
                    </button>
                    <input type="email" className="form-control w-25 text-center" value={quantity} disabled />
                    <button className='btn' onClick={()=>toggleQuantity(id,'increment')}>
                        <FaPlus/>
                    </button>
                </div>
            </div>
            <div className="col">
                <p className='text-primary fs-4 mb-0'>
                    <strong>{formatNumber(price*quantity)}</strong>
                </p>
            </div>
            <div className="col-auto  ">
                <button className='btn'onClick={()=>removeItem(id)} >
                    <FaTrash className='text-danger'/>
                </button>
            </div>


        </div>

    )
}
export default CartItem