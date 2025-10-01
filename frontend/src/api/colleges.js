import API from "./config";

export const getColleges = async (filters = {}) => {
  const { data } = await API.get("/colleges", { params: filters });
  return data;
};

export const addCollege = async (college) => {
  const { data } = await API.post("/colleges", college);
  return data;
};

export const updateCollege = async (id, college) => {
  const { data } = await API.put(`/colleges/${id}`, college);
  return data;
};

export const deleteCollege = async (id) => {
  await API.delete(`/colleges/${id}`);
};

export const markAsFavorite = async (id) => {
  await API.put(`/favorites/${id}`);
};

export const removeFavorite = async (id) => {
  await API.delete(`/favorites/${id}`);
};
