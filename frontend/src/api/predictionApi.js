import axios from "axios";

export const predictDisease = async (imageFile) => {

  const formData = new FormData();
  formData.append("image", imageFile);

  const response = await axios.post(
    "http://localhost:5000/api/predict",
    formData
  );

  return response.data;
};
