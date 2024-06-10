import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const softwareApplicationSlice = createSlice({
    name: "application",
    initialState: {
        softwareApplications: [],
        loading: false,
        error: null,
        message: null,
    },
    reducers: {
        getAllSoftwareApplicationRequest(state, action) {
            state.softwareApplications = [];
            state.loading = true;
            state.error = null;
        },
        getAllSoftwareApplicationSuccess(state, action) {
            state.softwareApplications = action.payload;
            state.loading = false;
            state.error = null;
        },
        getAllSoftwareApplicationFailed(state, action) {
            state.softwareApplications = action.softwareApplications;
            state.loading = false;
            state.error = action.payload;
        },
        addNewSoftwareApplicationRequest(state, action) {
            state.loading = true;
            state.error = null;
            state.message = null;
        },
        addNewSoftwareApplicationSuccess(state, action) {
            state.loading = false;
            state.error = null;
            state.message = action.payload;
        },
        addNewSoftwareApplicationFailed(state, action) {
            state.loading = false;
            state.error = action.payload;
            state.message = null;
        },
        deleteSoftwareApplicationRequest(state, action) {
            state.loading = true;
            state.error = null;
            state.message = null;
        },
        deleteSoftwareApplicationSuccess(state, action) {
            state.loading = false;
            state.error = null;
            state.message = action.payload;
        },
        deleteSoftwareApplicationFailed(state, action) {
            state.loading = false;
            state.error = action.payload;
            state.message = null;
        },

        resetSoftwareApplicationSlice(state, action) {
            state.error = null;
            state.loading = false;
            state.softwareApplications = state.softwareApplications;
            state.message = null;
        },
        clearAllErrors(state, action) {
            state.error = null;
            state.softwareApplications = state.softwareApplications;
        },
    },
});

export const getAllSoftwareApplication = () => async (dispatch) => {
    dispatch(
        softwareApplicationSlice.actions.getAllSoftwareApplicationRequest()
    );
    try {
        const { data } = await axios.get(
            "https://portfolio-admin-panel-uyro.onrender.com/api/v1/softwareApplication/getAll",
            { withCredentials: true }
        );
        dispatch(
            softwareApplicationSlice.actions.getAllSoftwareApplicationSuccess(
                data.softwareApplications
            )
        );
        dispatch(softwareApplicationSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(
            softwareApplicationSlice.actions.getAllSoftwareApplicationFailed(
                error.response.data.message
            )
        );
    }
};

export const addNewSoftwareApplication = (data) => async (dispatch) => {
    dispatch(
        softwareApplicationSlice.actions.addNewSoftwareApplicationRequest()
    );
    try {
        const response = await axios.post(
            "https://portfolio-admin-panel-uyro.onrender.com/api/v1/softwareApplication/add",
            data,
            {
                withCredentials: true,
                headers: { "Content-Type": "multipart/form-data" },
            }
        );
        dispatch(
            softwareApplicationSlice.actions.addNewSoftwareApplicationSuccess(
                response.data.message
            )
        );
        dispatch(softwareApplicationSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(
            softwareApplicationSlice.actions.addNewSoftwareApplicationFailed(
                error.response.data.message
            )
        );
    }
};

export const deleteSoftwareApplication = (id) => async (dispatch) => {
    dispatch(
        softwareApplicationSlice.actions.deleteSoftwareApplicationRequest()
    );
    try {
        const { data } = await axios.delete(
            `https://portfolio-admin-panel-uyro.onrender.com/api/v1/softwareApplication/delete/${id}`,
            { withCredentials: true }
        );
        dispatch(
            softwareApplicationSlice.actions.deleteSoftwareApplicationSuccess(
                data.message
            )
        );
        dispatch(softwareApplicationSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(
            softwareApplicationSlice.actions.deleteSoftwareApplicationFailed(
                error.response.data.message
            )
        );
    }
};

export const resetSoftwareApplicationSlice = () => (dispatch) => {
    dispatch(softwareApplicationSlice.actions.resetSoftwareApplicationSlice());
};

export const clearAllSoftwareApplicationErrors = () => (dispatch) => {
    dispatch(softwareApplicationSlice.actions.clearAllErrors());
};

export default softwareApplicationSlice.reducer;
