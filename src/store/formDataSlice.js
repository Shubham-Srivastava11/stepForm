import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    'fullName': '',
    'dpName': '',
    'workspaceName': '',
    'workspaceURL': '',
    'user': ''
}

const formDataSlice = createSlice({
    name: 'formData',
    initialState,
    reducers: {
        updateFormData: (state, action) => {
            // console.log(state.fullName);
            state[action.payload.name] = action.payload.value;
        }
    }

})

export const { updateFormData } = formDataSlice.actions;

export default formDataSlice.reducer;