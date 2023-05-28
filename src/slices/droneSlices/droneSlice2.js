import { createSlice } from  "@reduxjs/toolkit";
import drone_img_3 from '../../imgs/drone_img_3.jpg';

const initialState = {
    clickNum: 0,
    name: "A-10",
    price: 30000,
    img: drone_img_3,
    maxWeight: 24.5, 
    maxSpeed: 6, 
    feature: "Unattended precision landing capability. Drone Station Interworking Function"
};

const droneSlice2 = createSlice({
    name: 'droneInfo2',
    initialState,
    reducers: {
        increment2 : (state) => {
            state.clickNum += 1;
        },
    }
});

export const {increment2} = droneSlice2.actions;
export default droneSlice2.reducer;