
import axios from "axios";

// API URL
// const API_URL = "https://chrome-ai-api.com";
// const API_URL = "https://chrome-ai-api/language-detection";
const API_URL = "https://developer.chrome.com/docs/ai/translator-api#use-api";

// Translator API key
const TRANSLATOR_API_KEY = "Aixamyoz8EumQ4kmPzun51i99Ym2ip/FuZzORW6nFQaaTyYiJVOppAo9kFqIDWTKIfky2rHCZjMqShFMtCRm5wYAAABReyJvcmlnaW4iOiJodHRwOi8vbG9jYWxob3N0OjUxNzgiLCJmZWF0dXJlIjoiVHJhbnNsYXRpb25BUEkiLCJleHBpcnkiOjE3NTMxNDI0MDB9";

// Language detection
export async function detectLanguage(text) {
  try {
    const response = await axios.post(`${API_URL}/language-detection`, { text });
    return response.data.language;
  } catch (error) {
    console.error("Language detection failed:", error);
    throw new Error("Language detection failed.");
  }
}

// Summarizer
export async function summarizeText(text) {
  try {
    const response = await axios.post(`${API_URL}/summarizer`, { text });
    return response.data.summary;
  } catch (error) {
    console.error("Summarization failed:", error);
    throw new Error("Summarization failed.");
  }
}

// Translator
export async function translateText(text, lang) {
  try {
    const response = await axios.post(
      `${API_URL}/translator`, 
      { text, target: lang },
      { headers: { 'Authorization': `Bearer ${TRANSLATOR_API_KEY}` } }
    );
    return response.data.translation;
  } catch (error) {
    console.error("Translation failed:", error);
    throw new Error("Translation failed.");
  }
}

// import axios from "axios";

// // Language detection API with error handling
// export async function detectLanguage(text) {
//   try {
//     const response = await axios.post("https://chrome-ai-api/language-detection", { text });
//     return response.data.language;
//   } catch (error) {
//     console.error("Language detection failed:", error);
//     throw new Error("Language detection failed. Please try again later.");
//   }
// }

// const ORIGIN_TRIAL_TOKEN = "Aixamyoz8EumQ4kmPzun51i99Ym2ip/FuZzORW6nFQaaTyYiJVOppAo9kFqIDWTKIfky2rHCZjMqShFMtCRm5wYAAABReyJvcmlnaW4iOiJodHRwOi8vbG9jYWx0OjUxNzgiLCJmZWF0dXJlIjoiVHJhbnNsYXRpb25BUEkiLCJleHBpcnkiOjE3NTMxNDI0MDB9";


// import axios from "axios";

// // Language detection
// export async function detectLanguage(text) {
//     try {
//       const response = await axios.post("https://chrome-ai-api.com/language-detection", { text });
//       return response.data.language;
//     } catch (error) {
//       console.error("Language detection failed:", error);
//       throw new Error("Language detection failed.");
//     }
//   }
  
//   // Summarizer
//   export async function summarizeText(text) {
//     try {
//       const response = await axios.post("https://chrome-ai-api.com/summarizer", { text });
//       return response.data.summary;
//     } catch (error) {
//       console.error("Summarization failed:", error);
//       throw new Error("Summarization failed.");
//     }
//   }
  
//   // Translator
//   export async function translateText(text, lang) {
//     try {
//       const response = await axios.post("https://chrome-ai-api.com/translator", { text, target: lang });
//       return response.data.translation;
//     } catch (error) {
//       console.error("Translation failed:", error);
//       throw new Error("Translation failed.");
//     }
//   }
  
// second
// import axios from "axios";

// // API URL
// const API_URL = "https://chrome-ai-api.com";

// // Translator API key
// const TRANSLATOR_API_KEY = "Aixamyoz8EumQ4kmPzun51i99Ym2ip/FuZzORW6nFQaaTyYiJVOppAo9kFqIDWTKIfky2rHCZjMqShFMtCRm5wYAAABReyJvcmlnaW4iOiJodHRwOi8vbG9jYWx0OjUxNzgiLCJmZWF0dXJlIjoiVHJhbnNsYXRpb25BUEkiLCJleHBpcnkiOjE3NTMxNDI0MDB9";

// // Language detection
// export async function detectLanguage(text) {
//   try {
//     const response = await axios.post(`${API_URL}/language-detection`, { text });
//     return response.data.language;
//   } catch (error) {
//     console.error("Language detection failed:", error);
//     throw new Error("Language detection failed.");
//   }

  
// }]

// // Summarizer
// export async function summarizeText(text) {
//   try {
//     const response = await axios.post(`${API_URL}/summarizer`, { text });
//     return response.data.summary;
//   } catch (error) {
//     console.error("Summarization failed:", error);
//     throw new Error("Summarization failed.");
//   }
// }

// // Translator
// export async function translateText(text, lang) {
//   try {
//     const response = await axios.post(
//       `${API_URL}/translator`, 
//       { text, target: lang },
//       { headers: { 'Authorization': `Bearer ${TRANSLATOR_API_KEY}` } }
//     );
//     return response.data.translation;
//   } catch (error) {
//     console.error("Translation failed:", error);
//     throw new Error("Translation failed.");
//   }
// }
