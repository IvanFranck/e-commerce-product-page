import {reactive, computed} from "vue"

export interface ProductType {
    name: string,
    price: number,
    count: number
}

const cartItem = reactive<Record<string, ProductType[]>>({
    items: []
})

const totalCount = computed(()=>{
    return cartItem.items.reduce(
        (accumulator, currentValue) => accumulator + currentValue.count,
        0
    )
})


function addProductToCart(data: ProductType){
    cartItem.items.push({...data})
}

function removeProductToCart(index: number){
    cartItem.items.splice(index, 1)
}

export  function useCart (){
    return {cartItem, totalCount, addProductToCart, removeProductToCart}
}