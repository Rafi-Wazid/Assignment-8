const getStoredCartList = () => {
    const cartListStr = localStorage.getItem("cart-list");
    if(cartListStr){
        const cartList = JSON.parse(cartListStr);
        return cartList;
    }
    else {
        return [];
    }
}

const addToStoredCartList = (id) => {
    const cartList = getStoredCartList();
    if(cartList.includes(id)){
        console.log(id , 'Already exist is the cart list')
    }
    else{
        cartList.push(id);
        const cartListStr = JSON.stringify(cartList);
        localStorage.setItem("cart-list" , cartListStr)
    }
}

// -------


const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [] ;
    }
}


const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if(storedList.includes(id)){
        console.log(id , 'already exist in the wish list')
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list' , storedListStr)
    }
}



const removeFromStoredCartList = (id) => {
  let cartList = getStoredCartList();
  cartList = cartList.filter((itemId) => itemId !== id);
  localStorage.setItem("cart-list", JSON.stringify(cartList));
};

const removeFromStoredWishList = (id) => {
  let wishList = getStoredWishList();
  wishList = wishList.filter((itemId) => itemId !== id);
  localStorage.setItem("wish-list", JSON.stringify(wishList));
};

export {getStoredCartList , getStoredWishList , addToStoredCartList , addToStoredWishList , removeFromStoredCartList , removeFromStoredWishList}