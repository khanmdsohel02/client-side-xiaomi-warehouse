import './AddItem.css'
import toast from 'react-hot-toast';
import UseFirebase from '../Hooks/usafirebase/Usefirebase';

const AddItem = () => {
    const {user} = UseFirebase()

 
    const handleAddProduct = event => {
        event.preventDefault()

        const email = event.target.email.value
        const name = event.target.name.value
        const price = event.target.price.value
        const quantity = event.target.quantity.value
        const supplier = event.target.supplier.value
        const img = event.target.img.value
        const about = event.target.about.value

        console.log(email, name, price, quantity, supplier, img, about);
        
        const newAddedItem = {email, name, price, quantity, supplier, img, about}
 fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newAddedItem)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                const data = result;
                if (data) {
                    toast.success("Successfully Added ", { id: "success" });
                  event.target.reset()
                }})}
       
  

    return (
        <>
            <h1 className='mt-5 text-center text-danger'> Add Item</h1>
            <form onSubmit={handleAddProduct}  className= 'add-item' >
                 <input  name='email' value={user.email} required/>
                 <input placeholder='Product Name' name='name' required/>
                <input placeholder='Price' type="number" name='price' required/>
                <input placeholder='Quantity' type="number" name='quantity' required/>
                 <input placeholder='Supplier Name' name='supplier' required/>
                 <input placeholder='Image URL' name='img' required/>
                 <textarea placeholder='About Product' name='about' required/>
                    <input className='add-btn' type="submit" value="ADD PRODUCT" />
                </form>
        </>
    );
};

export default AddItem;