import { createSlice } from  "@reduxjs/toolkit";
import drone_img_4 from '../../imgs/drone_img_4.jpg';

const initialState = {
    clickNum: 0,
    name: "ADT-2012",
    price: 50000,
    img: drone_img_4,
    maxWeight: 7.9, 
    maxSpeed: 60, 
    feature: "GPS and air speed sensor integrated module and latest Ardupilot perm"
};

const droneSlice3 = createSlice({
    name: 'droneInfo3',
    initialState,
    reducers: {
        increment3 : (state) => {
            state.clickNum += 1;
        },
    }
});

export const {increment3} = droneSlice3.actions;
export default droneSlice3.reducer;