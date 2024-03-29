export const key = "taskman_user";

export const saveUserOnStorage = data => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const deleteUserFromStorage = () => {
    localStorage.removeItem(key);
};

export const getUserFromStorage = () => {
    return JSON.parse(localStorage.getItem(key));
};
