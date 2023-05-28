import { createSlice } from  "@reduxjs/toolkit";
import drone_img_1 from '../../imgs/drone_img_1.jpg';

const initialState = {
    clickNum: 0,
    name: "Tri_VTOL_120",
    price: 12000,
    img: drone_img_1,
    maxWeight: 0.4, 
    maxSpeed: 16, 
    feature: "Ready to take off, within 3 minutes, single-person operation with ultra-small vertical take-off and landing drones"
};

const droneSlice0 = createSlice({
    name: 'droneInfo0',
    initialState,
    reducers: {
        increment0 : (state) => {
            state.clickNum += 1;
        }
    }
});

export const {increment0} = droneSlice0.actions;
export default droneSlice0.reducer;
