// Disease treatment information for sugarcane diseases
export const diseaseTreatments = {
  Healthy: {
    description: "Your sugarcane plant is healthy and not affected by any disease.",
    treatments: [
      "Continue regular watering and maintenance",
      "Monitor plant health periodically",
      "Ensure proper drainage to prevent waterlogging",
      "Apply balanced fertilizer as needed"
    ],
    prevention: [
      "Rotate crops appropriately",
      "Remove and destroy infected plant debris",
      "Use disease-free planting material"
    ]
  },
  Mosaic: {
    description: "Mosaic disease is caused by Sugarcane mosaic virus (SCMV) which affects leaf photosynthesis.",
    treatments: [
      "Remove and destroy infected plants immediately",
      "Apply neem oil or insecticidal soap to control aphid vectors",
      "Use systemic insecticides to kill aphid colonies",
      "Apply copper-based fungicides as preventive measure"
    ],
    prevention: [
      "Use resistant sugarcane varieties",
      "Control aphid populations with regular monitoring",
      "Plant disease-free seed cane",
      "Implement proper field sanitation"
    ]
  },
  RedRot: {
    description: "Red rot disease is caused by fungus Colletotrichum falcatum affecting stalks and leaves.",
    treatments: [
      "Remove and burn infected plant parts",
      "Apply carbendazim or thiophanate-methyl fungicides",
      "Drench soil with copper oxychloride",
      "Improve field drainage to reduce moisture"
    ],
    prevention: [
      "Use resistant varieties like CoC 671, CoV 92102",
      "Avoid irrigation during humid conditions",
      "Practice crop rotation with non-grass crops",
      "Use disease-free seed material"
    ]
  },
  Rust: {
    description: "Rust disease is caused by Puccinia spp. fungi appearing as orange-brown pustules on leaves.",
    treatments: [
      "Apply fungicides like mancozeb or chlorothalonil",
      "Use systemic fungicides (propiconazole, tebuconazole) for severe cases",
      "Remove heavily infected leaves",
      "Increase plant spacing for better air circulation"
    ],
    prevention: [
      "Plant resistant varieties",
      "Avoid late planting",
      "Monitor fields regularly for early detection",
      "Maintain proper nitrogen levels - avoid excess"
    ]
  }
};

// Function to get treatment info based on disease name
export const getTreatmentInfo = (disease) => {
  return diseaseTreatments[disease] || diseaseTreatments.Healthy;
};

