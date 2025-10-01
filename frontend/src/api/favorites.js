import API from "./config";

export const getFavorites = async () => {
    const { data } = await API.get("/favorites");
    return data;
};
