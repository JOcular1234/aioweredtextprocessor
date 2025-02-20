import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const languages = [
  { code: "en", name: "English" },
  { code: "pt", name: "Portuguese" },
  { code: "es", name: "Spanish" },
  { code: "ru", name: "Russian" },
  { code: "tr", name: "Turkish" },
  { code: "fr", name: "French" }
];

export default function App() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("fr"); // Default target language
  const [detectedLanguage, setDetectedLanguage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [translator, setTranslator] = useState(null);

  useEffect(() => {
    const loadTranslator = async () => {
      try {
        setLoading(true);
        const translatorInstance = await self.ai.translator.create({
          sourceLanguage: "en",
          targetLanguage: selectedLanguage,
          monitor(m) {
            m.addEventListener("downloadprogress", (e) => {
              console.log(`Downloaded ${e.loaded} of ${e.total} bytes.`);
            });
          },
        });
        setTranslator(translatorInstance);
      } catch (err) {
        setError("Failed to load translation model.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadTranslator();
  }, [selectedLanguage]);

  const handleDetectLanguage = async () => {
    if (!inputText) {
      setError("Please enter text to detect language.");
      return;
    }

    setError(null);
    setLoading(true);
    setDetectedLanguage(null);

    try {
      const capabilities = await self.ai.languageDetector.capabilities();
      const canDetect = capabilities.available; // 'no', 'readily', 'after-download'

      if (canDetect === "no") {
        throw new Error("Language detection is not supported on this browser.");
      }

      let detector;
      if (canDetect === "readily") {
        detector = await self.ai.languageDetector.create();
      } else {
        detector = await self.ai.languageDetector.create({
          monitor(m) {
            m.addEventListener("downloadprogress", (e) => {
              console.log(`Downloading model: ${e.loaded} / ${e.total} bytes`);
            });
          },
        });
        await detector.ready;
      }

      const results = await detector.detect(inputText);
      if (results.length > 0) {
        setDetectedLanguage(results[0].detectedLanguage);
      } else {
        setError("Unable to detect language.");
      }
    } catch (err) {
      setError("Language detection failed.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleTranslate = async () => {
    if (!inputText) {
      setError("Please enter text to translate.");
      return;
    }
    setError(null);
    setLoading(true);
    setOutputText("");

    try {
      if (!translator) {
        throw new Error("Translator not initialized.");
      }
      const translatedText = await translator.translate(inputText);
      setOutputText(translatedText);
    } catch (err) {
      setError("Translation failed.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <NavBar />
    <div className="main-container flex flex-col items-center justify-center  bg-gray-100 p-4">
      <p className="txt1 sm:text-3xl font-bold text-center mb-4 lg:text-6xl md:text-4xl ">AI-Powered <span> Text</span> Processor</p>
      <p className="detect-txt">Detect and translate your text here.</p>
      <div className="second-container bg-white p-6  rounded-lg shadow-lg w-full max-w-2xl">
        

        <textarea
          className="w-full p-3 border rounded-lg h-50 focus:outline-none focus:ring focus:ring-blue-300 " 
          rows="4"
          placeholder="Enter text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>

        
        <div className="buttons-container flex  justify-between">
        <div className="fle justify-around gap-4 mt-4">
          <button
            className="detect-btn bg-green-500 text-white px-4 py-2 rounded-lg w-50 ring cursor-pointer hover:bg-green-600 disabled:bg-gray-400"
            onClick={handleDetectLanguage}
            disabled={loading}
          >
           <span className='text-xl font-medium'> {loading ? "Detecting..." : "Detect Language"}</span>
          </button>
        </div>
        <div className="translate-div flex justify-end flex-col ">
          <select
          className=" mt-3 p-2 border rounded-lg "
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>{lang.name}</option>
          ))}
        </select>
          <button
            className="translate-btn bg-blue-500 text-white  rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
            onClick={handleTranslate}
            disabled={loading}
          >
           <span className='text-xl sm:text-2xl font-medium'>{loading ? "Translating..." : "Translate"}</span> 
          </button>
          </div>
          </div>
        {error && <p className="mt-2 text-red-500">{error}</p>}
        {detectedLanguage && (
          <p className="detected-language mt-4 text-gray-600 text-2xl ">Detected Language: <strong>{detectedLanguage.toUpperCase()}</strong></p>
        )}
        {outputText && (
          <div className="translate mt-4 p-3 border rounded-lg bg-gray-50">
            <strong className="output-translation text-2xl">Translation:</strong>
            <p className="output-div">{outputText}</p>
          </div>
        )}
      </div>
    </div>
    <Footer />
    </>
  );
}
