import PropTypes from 'prop-types';
import './Cart.css';

const Cart = ({cart, hanldeRemoveFromCart}) => {
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div className="cart-container">
                {
                    cart.map(bottle => <div key={bottle.id}>
                        <img key={bottle.id} src={bottle.img}></img>
                        <button onClick={()=> hanldeRemoveFromCart(bottle.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    hanldeRemoveFromCart: PropTypes.func.isRequired
}
export default Cart;