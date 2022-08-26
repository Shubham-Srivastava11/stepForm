import { configureStore } from '@reduxjs/toolkit';
import formDataSlice from './formDataSlice';
export default configureStore(
    {
        reducer: {
            'formData': formDataSlice,
        }
    }
);