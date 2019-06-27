export const state = () => ({
    modal: false,
});

export const mutations = {
    SHOW_MODEL(state) {
        state.modal = true;
    },

    HIDE_MODAL(state) {
        state.modal = false;
    }

};

export const actions = {
    showModal({commit}, model) {
        commit("SHOW_MODEL");
    },

    hideModal({commit}) {
        commit("HIDE_MODAL");
    }
};

export const getters = {
    modal: (state) => state.modal,
};

