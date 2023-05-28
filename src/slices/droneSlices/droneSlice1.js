import { createSlice } from  "@reduxjs/toolkit";
import drone_img_2 from '../../imgs/drone_img_2.jpg';

const initialState = {
    clickNum: 0,
    name: "iONE-SMART",
    price:25000,
    img: drone_img_2,
    maxWeight: 6.2, 
    maxSpeed: 3, 
    feature: "Equipped with live/thermal imaging mission equipment. Full autonomous flight function using LTE network."
};

const droneSlice1 = createSlice({
    name: 'droneInfo1',
    initialState,
    reducers: {
        increment1 : (state) => {
            state.clickNum += 1;
        }
    }
});

export const {increment1} = droneSlice1.actions;
export default droneSlice1.reducer;