const user = (state = [], action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
            };
        default:
            return state;
    }
};

export default user;