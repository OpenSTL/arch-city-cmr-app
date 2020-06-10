export const headers = (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
};

export const url = (endpoint) => {
    return `${process.env.REACT_APP_API_BASE_URL}${endpoint}`;
};
