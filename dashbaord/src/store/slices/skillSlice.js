import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const skillSlice = createSlice({
    name: "skill",
    initialState: {
        loading: false,
        skills: [],
        error: null,
        message: null,
    },
    reducers: {
        getAllSkillRequest(state, action) {
            state.skills = [];
            state.loading = true;
            state.error = null;
        },
        getAllSkillSuccess(state, action) {
            state.skills = action.payload;
            state.loading = false;
            state.error = null;
        },
        getAllSkillFailed(state, action) {
            state.skills = action.skills;
            state.loading = false;
            state.error = action.payload;
        },
        addNewSkillRequest(state, action) {
            state.loading = true;
            state.error = null;
            state.message = null;
        },
        addNewSkillSuccess(state, action) {
            state.loading = false;
            state.error = null;
            state.message = action.payload;
        },
        addNewSkillFailed(state, action) {
            state.loading = false;
            state.error = action.payload;
            state.message = null;
        },
        deleteSkillRequest(state, action) {
            state.loading = true;
            state.error = null;
            state.message = null;
        },
        deleteSkillSuccess(state, action) {
            state.loading = false;
            state.error = null;
            state.message = action.payload;
        },
        deleteSkillFailed(state, action) {
            state.loading = false;
            state.error = action.payload;
            state.message = null;
        },
        updateSkillRequest(state, action) {
            state.loading = true;
            state.error = null;
            state.message = null;
        },
        updateSkillSuccess(state, action) {
            state.loading = false;
            state.error = null;
            state.message = action.payload;
        },
        updateSkillFailed(state, action) {
            state.loading = false;
            state.error = action.payload;
            state.message = null;
        },

        resetSkillSlice(state, action) {
            state.error = null;
            state.loading = false;
            state.skills = state.skills;
            state.message = null;
        },
        clearAllErrors(state, action) {
            state.error = null;
            state.skills = state.skills;
        },
    },
});

export const getAllSkills = () => async (dispatch) => {
    dispatch(skillSlice.actions.getAllSkillRequest());
    try {
        const { data } = await axios.get(
            "https://portfolio-admin-panel-uyro.onrender.com/api/v1/skill/getAll",
            { withCredentials: true }
        );
        dispatch(skillSlice.actions.getAllSkillSuccess(data.skills));
        dispatch(skillSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(
            skillSlice.actions.getAllSkillFailed(error.response.data.message)
        );
    }
};

export const addNewSkill = (data) => async (dispatch) => {
    dispatch(skillSlice.actions.addNewSkillRequest());
    try {
        const response = await axios.post(
            "https://portfolio-admin-panel-uyro.onrender.com/api/v1/skill/add",
            data,
            {
                withCredentials: true,
                headers: { "Content-Type": "multipart/form-data" },
            }
        );
        dispatch(skillSlice.actions.addNewSkillSuccess(response.data.message));
        dispatch(skillSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(
            skillSlice.actions.addNewSkillFailed(error.response.data.message)
        );
    }
};

export const deleteSkill = (id) => async (dispatch) => {
    dispatch(skillSlice.actions.deleteSkillRequest());
    try {
        const { data } = await axios.delete(
            `https://portfolio-admin-panel-uyro.onrender.com/api/v1/skill/delete/${id}`,
            { withCredentials: true }
        );
        dispatch(skillSlice.actions.deleteSkillSuccess(data.message));
        dispatch(skillSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(
            skillSlice.actions.deleteSkillFailed(error.response.data.message)
        );
    }
};

export const updateSkill = (id, proficiency) => async (dispatch) => {
    dispatch(skillSlice.actions.updateSkillRequest());
    try {
        const { data } = await axios.put(
            `https://portfolio-admin-panel-uyro.onrender.com/api/v1/skill/update/${id}`,
            { proficiency },
            {
                withCredentials: true,
                headers: { "Content-Type": "application/json" },
            }
        );
        dispatch(skillSlice.actions.updateSkillSuccess(data.message));
        dispatch(skillSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(
            skillSlice.actions.updateSkillFailed(error.response.data.message)
        );
    }
};

export const resetSkillSlice = () => (dispatch) => {
    dispatch(skillSlice.actions.resetSkillSlice());
};

export const clearAllSkillErrors = () => (dispatch) => {
    dispatch(skillSlice.actions.clearAllErrors());
};

export default skillSlice.reducer;
