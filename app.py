from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel
import shutil
import os
import requests
from predict import predict_image

app = FastAPI(title="Sugarcane Disease Detection API")

@app.get("/")
def health():
    return {"message": "ML Service Running"}


class ImageURL(BaseModel):
    image_url: str

@app.post("/predict-url")
async def predict_url(data: ImageURL):

    temp_path = "temp.jpg"

    try:
        response = requests.get(data.image_url)

        with open(temp_path, "wb") as f:
            f.write(response.content)

        result = predict_image(temp_path)

        return result

    finally:
        if os.path.exists(temp_path):
            os.remove(temp_path)
# @app.post("/predict")
# async def predict(file: UploadFile = File(...)):

#     temp_path = f"temp_{file.filename}"

#     try:
#         with open(temp_path, "wb") as buffer:
#             shutil.copyfileobj(file.file, buffer)

#         result = predict_image(temp_path)

#         return result

#     finally:
#         if os.path.exists(temp_path):
#             os.remove(temp_path)
