export const CREATE = "user/CREATE";

export const create = () => ({
    type: CREATE
});

export interface UserState {
    name: string;
    id: string;
    age: number;
}

type userAction =
    | ReturnType<typeof create>;


const initialState: UserState = {
    name: '',
    id: '',
    age: 0
};

function users(
    state: UserState = initialState,
    action: userAction
): UserState {
    switch (action.type) {
        case CREATE:
            return {
                name: 'test',
                age: 10,
                id: 'wy.lee'
            };
        default:
            return state;
    }
}

export default users;