import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    input: '',
    isSearch: false,
}

const searchSlice = createSlice ({
    name: 'search',
    initialState,
    reducers: {
        inputSearchContents: (state, action) => {
            state.input = action.payload;
        },
        setIsSearch: (state, action) => {
            const bool = action.payload;
            state.isSearch = bool;
        },
    }

});

export const { inputSearchContents, setIsSearch } =  searchSlice.actions;
export default searchSlice.reducer;
