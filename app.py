from fastapi import FastAPI, UploadFile, File
import shutil
import os
from predict import predict_image

app = FastAPI()

@app.get("/")
def home():
    return {"message": "API running"}

@app.post("/predict")
async def predict(file: UploadFile = File(...)):

    temp_path = f"temp_{file.filename}"

    try:
        with open(temp_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        result = predict_image(temp_path)

        return result

    finally:
        if os.path.exists(temp_path):
            os.remove(temp_path)
