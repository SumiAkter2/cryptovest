const getStorageItem = () => {
    let storageCoin;
    const getCoin = localStorage.getItem('selected-coin');
    if (getCoin) {
        storageCoin=JSON.parse(getCoin)
    } else {
        storageCoin={}
    }
    return storageCoin;
}
const addToLocalStorage = id => {
    let storageCoin = getStorageItem();
    let count = storageCoin[id];
    if (count) {
        storageCoin[id]=count+1
    } else {
         storageCoin[id] =   1;
    }localStorage.setItem('selected-coin',JSON.stringify(storageCoin))
}
const removeItem = (id) => {
  let storageCoin = getStorageItem();
  delete storageCoin[id];
  localStorage.setItem("selected-coin", JSON.stringify(storageCoin));
};
const minusItem = id => {
    let storageCoin = getStorageItem();
    let count = storageCoin[id];
    if (count) {
        storageCoin[id]=count-1
    }localStorage.setItem('selected-coin',JSON.stringify(storageCoin))
}
const deleteCart = id => {
    localStorage.removeItem('selected-coin')
}
export {
    getStorageItem,
    addToLocalStorage,
    removeItem,
    minusItem,
    deleteCart
}