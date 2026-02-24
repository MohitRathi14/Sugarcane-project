import tensorflow as tf
import numpy as np
from tensorflow.keras.preprocessing import image
import json

# Load model
model = tf.keras.models.load_model("ml-service/model/sugarcane_model.keras")

# Load class names
with open("ml-service/model/class_names.json", "r") as f:
    class_names = json.load(f)
def predict_image(img_path):
    # Load image
    img = image.load_img(img_path, target_size=(224,224))
    img_array = image.img_to_array(img)

    # Expand dimensions (model expects batch)
    img_array = np.expand_dims(img_array, axis=0)

    # Preprocess (IMPORTANT - same as training)
    img_array = tf.keras.applications.mobilenet_v2.preprocess_input(img_array)

    # Predict
    predictions = model.predict(img_array)

    # Get highest probability
    predicted_index = np.argmax(predictions[0])
    confidence = float(np.max(predictions[0]))

    return {
        "plant": "Sugarcane",
        "status": "Healthy" if class_names[predicted_index] == "Healthy" else "Diseased",
        "disease": class_names[predicted_index],
        "confidence": round(confidence * 100, 2)
    }
if __name__ == "__main__":
    result = predict_image("Image/Unhealthy_100.jpg")
    print(result)
