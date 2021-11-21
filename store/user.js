export const state = () => ({
    id: 0,
    email: '',
    password: '',
    name: '',
});


export const mutations =
{
    /** Disconnect the user.
     * Reset the state to it orginal value.
     * 
     * @param {object} state - Vuex state
     * 
    */
    logout: function(state) {
        state.id = 0;
        state.email = '';
        state.password = '';
        state.name = '';
    },

    /** Store the user data.
     * 
     * @param {object} state - Vuex state
     * @param {object} data - Data to set to the state
     * 
    */
    login: function(state, data) {
        state.id = data.id;
        state.email = data.email;
        state.password = data.password;
        state.name = data.name;
    },
}