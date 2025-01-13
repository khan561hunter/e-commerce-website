import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Products{
    id:number;
    title:string;
    price:number;
    image:string;
}

const CartSlice = createSlice({
    name:"Cart",
    initialState: [] as Products[],
    reducers:{
        add(state,action : PayloadAction<Products>){
            state.push(action.payload);

        },
        remove(state,action : PayloadAction<number>){
            return state.filter((item)=>item.id !== action.payload);
            
        }


    }
})


export const { add,remove} = CartSlice.actions;
export default CartSlice.reducer;