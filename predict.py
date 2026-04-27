# import tensorflow as tf
# import numpy as np
# from tensorflow.keras.preprocessing import image
# import json

# # Load model
# model = tf.keras.models.load_model("ml-service/model/sugarcane_model_final.keras")

# # Load class names
# with open("ml-service/model/class_names.json", "r") as f:
#     class_names = json.load(f)
# def predict_image(img_path):
#     # Load image
#     img = image.load_img(img_path, target_size=(224,224))
#     img_array = image.img_to_array(img)

#     # Expand dimensions (model expects batch)
#     img_array = np.expand_dims(img_array, axis=0)

#     # Preprocess (IMPORTANT - same as training)
#     img_array = tf.keras.applications.mobilenet_v2.preprocess_input(img_array)

#     # Predict
#     predictions = model.predict(img_array)

#     # Get highest probability
#     predicted_index = np.argmax(predictions[0])
#     confidence = float(np.max(predictions[0]))

#     return {
#         "plant": "Sugarcane",
#         "status": "Healthy" if class_names[predicted_index] == "Healthy" else "Diseased",
#         "disease": class_names[predicted_index],
#         "confidence": round(confidence * 100, 2)
#     }
# if __name__ == "__main__":
#     result = predict_image("Image/Unhealthy_100.jpg")
#     print(result)
import tensorflow as tf
import numpy as np
from tensorflow.keras.preprocessing import image
import json
import os

# 1. Load model 
# Note: Use the 'best' model if you want the highest accuracy version
MODEL_PATH = "ml-service/model/sugarcane_model_final.keras"
CLASS_NAMES_PATH = "ml-service/model/class_names.json"

model = tf.keras.models.load_model(MODEL_PATH)

# 2. Load class names
with open(CLASS_NAMES_PATH, "r") as f:
    class_names = json.load(f)

def predict_image(img_path):
    # Load image with the NEW resolution (299x299)
    img = image.load_img(img_path, target_size=(299, 299))
    img_array = image.img_to_array(img)

    # Expand dimensions (model expects batch: [1, 299, 299, 3])
    img_array = np.expand_dims(img_array, axis=0)

    # IMPORTANT: EfficientNet handles its own preprocessing internally.
    # We do NOT use mobilenet_v2.preprocess_input here.
    # Just pass the raw pixel array [0-255].
    
    # Predict
    # training=False ensures Dropout/BatchNormalization stay in inference mode
    predictions = model.predict(img_array, verbose=0)

    # Get highest probability
    predicted_index = np.argmax(predictions[0])
    confidence = float(predictions[0][predicted_index])

    predicted_class = class_names[predicted_index]

    return {
        "plant": "Sugarcane",
        "status": "Healthy" if predicted_class.lower() == "healthy" else "Diseased",
        "disease": predicted_class,
        "confidence": round(confidence * 100, 2)
    }

if __name__ == "__main__":
    # Test on a single image
    test_image = "Image/Unhealthy_100.jpg"
    
    if os.path.exists(test_image):
        result = predict_image(test_image)
        print("--- Prediction Result ---")
        print(json.dumps(result, indent=4))
    else:
        print(f"Error: Image not found at {test_image}")
