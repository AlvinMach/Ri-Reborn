import {useContext} from "react"
import { AuthContext } from "../utils/AuthContextProvider";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems } = useContext(AuthContext);
    const navigate = useNavigate();



    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.$id} className="flex justify-between my-2">
                            <span>{item.title}</span>
                          
                        </div>
                    ))}
                    <h2 className="font-bold">Total: ${totalAmount}</h2>
                    <button
                        onClick={() => navigate('/checkout')}
                        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
                    >
                        Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;