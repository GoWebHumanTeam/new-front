import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    senderName: '',   
    senderTel: '',
    addressName: '',
    addressTel: '',
    startingPoint: '',
    destination: '',
    postDescription: '',
    quantity: '', 
    weight: '',
    droneId: '', 
    isOrder: false,
}

const orderSlice = createSlice({
    name: 'orderInfo',
    initialState,
    reducers: {
        inputSenderName: (state, action) => {
            state.senderName = action.payload;
        },
        inputSenderTel: (state, action) => {
            state.senderTel = action.payload;
        },
        inputAddressName: (state, action) => {  
            state.addressName = action.payload;
        },
        inputAddressTel: (state, action) => {
            state.addressTel = action.payload;
        },
        inputStartingPoint: (state, action) => {
            state.startingPoint = action.payload;
        },
        inputDestination: (state, action) => {
            state.destination = action.payload;
        },
        inputPostDescription: (state, action) => {
            state.postDescription = action.payload;
        },
        inputQuantity: (state, action) => {
            state.quantity = action.payload;
        },
        inputWeight: (state, action) => {
            state.weight = action.payload;
        },
        inputDroneId: (state, id) => {
            state.droneId = id;
        },
        setIsOrder: (state) => {
            state.isOrder = true;
        }
    }
});

export const { inputSenderName, inputSenderTel, inputAddressName,
               inputAddressTel, inputStartingPoint, inputDestination, 
               inputPostDescription, inputQuantity, inputWeight, inputDroneId, setIsOrder} = orderSlice.actions;
               
export default orderSlice.reducer;