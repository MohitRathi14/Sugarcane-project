import axios from "axios";

export const sendToMLService = async (imageUrl) => {

  const response = await axios.post(
    process.env.ML_SERVICE_URL,
    { image_url: imageUrl }
  );

  return response.data;
};
