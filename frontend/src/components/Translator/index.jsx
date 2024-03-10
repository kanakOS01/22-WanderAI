import "./index.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { aiServerUrl } from "../../config";

const TranslatorModal = () => {
  const [input, setInput] = useState("");
  const [lang, setLang] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(0);
  const [message, setMessage] = useState();
  const [exceeded, setExceeded] = useState(0);
  useEffect(()=>{
    if(input.length>100){
      showError("Text length should be less than 100 characters");
      setExceeded(1);
    }else{
      setExceeded(0);
    }
  },[input]);

  const showError = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const handleTranslate = async () => {
    if (loading || exceeded || input=="") return;
    setOutput("");
    setLoading(true);
    const data = {
      message: input,
      lang,
    };
    const options = {
      headers: { "content-type": "application/x-www-form-urlencoded" },
    };
    try {
      const res = await axios.post(
        aiServerUrl + "/get_translation",
        data,
        options
      );
      setOutput(res.data.translation);
    } catch (e) {
      showError("Error in translating");
      setOutput("");
    }
    setLoading(false);
  };

  return (
    <>
      <div
        className={"modal fade "}
        id="staticBackdropa"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className={"modal-dialog modal-dialog-centered"}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Translator
              </h1>
            </div>
            <div className="modal-body" style={{ height: "20em" }}>
              {loading ? (
                <div className="fetching">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <span>Translating your text</span>
                </div>
              ) : (
                <form autoComplete="false;" id="emergency-form">
                  <div className="mb-3">
                    <label htmlFor="input" className="form-label">
                      Message
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="input"
                      aria-describedby="emailHelp"
                      required
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lang" className="form-label">
                      Translate in
                    </label>
                    <select
                      id="lang"
                      className="form-select"
                      aria-label="Default select example"
                      value={lang}
                      onChange={(e) => setLang(e.target.value)}
                    >
                      <option value="af">Afrikaans</option>
                      <option value="sq">Albanian</option>
                      <option value="am">Amharic</option>
                      <option value="ar">Arabic</option>
                      <option value="hy">Armenian</option>
                      <option value="as">Assamese</option>
                      <option value="az">Azerbaijani</option>
                      <option value="bn">Bangla</option>
                      <option value="ba">Bashkir</option>
                      <option value="eu">Basque</option>
                      <option value="bho">Bhojpuri</option>
                      <option value="brx">Bodo</option>
                      <option value="bs">Bosnian</option>
                      <option value="bg">Bulgarian</option>
                      <option value="yue">Cantonese (Traditional)</option>
                      <option value="ca">Catalan</option>
                      <option value="hne">Chhattisgarhi</option>
                      <option value="lzh">Chinese (Literary)</option>
                      <option value="zh-Hans">Chinese Simplified</option>
                      <option value="zh-Hant">Chinese Traditional</option>
                      <option value="hr">Croatian</option>
                      <option value="cs">Czech</option>
                      <option value="da">Danish</option>
                      <option value="prs">Dari</option>
                      <option value="dv">Divehi</option>
                      <option value="doi">Dogri</option>
                      <option value="nl">Dutch</option>
                      <option value="en">English</option>
                      <option value="et">Estonian</option>
                      <option value="fo">Faroese</option>
                      <option value="fj">Fijian</option>
                      <option value="fil">Filipino</option>
                      <option value="fi">Finnish</option>
                      <option value="fr">French</option>
                      <option value="fr-CA">French (Canada)</option>
                      <option value="gl">Galician</option>
                      <option value="lug">Ganda</option>
                      <option value="ka">Georgian</option>
                      <option value="de">German</option>
                      <option value="el">Greek</option>
                      <option value="gu">Gujarati</option>
                      <option value="ht">Haitian Creole</option>
                      <option value="ha">Hausa</option>
                      <option value="he">Hebrew</option>
                      <option value="hi">Hindi</option>
                      <option value="mww">Hmong Daw</option>
                      <option value="hu">Hungarian</option>
                      <option value="is">Icelandic</option>
                      <option value="ig">Igbo</option>
                      <option value="id">Indonesian</option>
                      <option value="ikt">Inuinnaqtun</option>
                      <option value="iu">Inuktitut</option>
                      <option value="iu-Latn">Inuktitut (Latin)</option>
                      <option value="ga">Irish</option>
                      <option value="it">Italian</option>
                      <option value="ja">Japanese</option>
                      <option value="kn">Kannada</option>
                      <option value="ks">Kashmiri</option>
                      <option value="kk">Kazakh</option>
                      <option value="km">Khmer</option>
                      <option value="rw">Kinyarwanda</option>
                      <option value="tlh-Latn">Klingon (Latin)</option>
                      <option value="gom">Konkani</option>
                      <option value="ko">Korean</option>
                      <option value="ku">Kurdish (Central)</option>
                      <option value="kmr">Kurdish (Northern)</option>
                      <option value="ky">Kyrgyz</option>
                      <option value="lo">Lao</option>
                      <option value="lv">Latvian</option>
                      <option value="ln">Lingala</option>
                      <option value="lt">Lithuanian</option>
                      <option value="dsb">Lower Sorbian</option>
                      <option value="mk">Macedonian</option>
                      <option value="mai">Maithili</option>
                      <option value="mg">Malagasy</option>
                      <option value="ms">Malay</option>
                      <option value="ml">Malayalam</option>
                      <option value="mt">Maltese</option>
                      <option value="mr">Marathi</option>
                      <option value="mn-Cyrl">Mongolian (Cyrillic)</option>
                      <option value="mn-Mong">Mongolian (Traditional)</option>
                      <option value="my">Myanmar (Burmese)</option>
                      <option value="mi">Māori</option>
                      <option value="ne">Nepali</option>
                      <option value="nb">Norwegian</option>
                      <option value="nya">Nyanja</option>
                      <option value="or">Odia</option>
                      <option value="ps">Pashto</option>
                      <option value="fa">Persian</option>
                      <option value="pl">Polish</option>
                      <option value="pt">Portuguese (Brazil)</option>
                      <option value="pt-PT">Portuguese (Portugal)</option>
                      <option value="pa">Punjabi</option>
                      <option value="otq">Querétaro Otomi</option>
                      <option value="ro">Romanian</option>
                      <option value="run">Rundi</option>
                      <option value="ru">Russian</option>
                      <option value="sm">Samoan</option>
                      <option value="sr-Cyrl">Serbian (Cyrillic)</option>
                      <option value="sr-Latn">Serbian (Latin)</option>
                      <option value="st">Sesotho</option>
                      <option value="nso">Sesotho sa Leboa</option>
                      <option value="tn">Setswana</option>
                      <option value="sn">Shona</option>
                      <option value="sd">Sindhi</option>
                      <option value="si">Sinhala</option>
                      <option value="sk">Slovak</option>
                      <option value="sl">Slovenian</option>
                      <option value="so">Somali</option>
                      <option value="es">Spanish</option>
                      <option value="sw">Swahili</option>
                      <option value="sv">Swedish</option>
                      <option value="ty">Tahitian</option>
                      <option value="ta">Tamil</option>
                      <option value="tt">Tatar</option>
                      <option value="te">Telugu</option>
                      <option value="th">Thai</option>
                      <option value="bo">Tibetan</option>
                      <option value="ti">Tigrinya</option>
                      <option value="to">Tongan</option>
                      <option value="tr">Turkish</option>
                      <option value="tk">Turkmen</option>
                      <option value="uk">Ukrainian</option>
                      <option value="hsb">Upper Sorbian</option>
                      <option value="ur">Urdu</option>
                      <option value="ug">Uyghur</option>
                      <option value="uz">Uzbek (Latin)</option>
                      <option value="vi">Vietnamese</option>
                      <option value="cy">Welsh</option>
                      <option value="xh">Xhosa</option>
                      <option value="yo">Yoruba</option>
                      <option value="yua">Yucatec Maya</option>
                      <option value="zu">Zulu</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="output" className="form-label">
                      Translated
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="output"
                      aria-describedby="emailHelp"
                      required
                      value={output}
                      onChange={(e) => setOutput(e.target.value)}
                    />
                  </div>
                </form>
              )}
            </div>
            <div className="modal-footer">
              {!loading?<button
                type="button"
                className="btn"
                style={{
                  backgroundColor: "green",
                  color: "white",
                  opacity:message?".8":"1"
                }}
                onClick={handleTranslate}
              >
                Translate
              </button>
              :<button className="btn btn-secondary" onClick={()=>{
                    setInput("");
                    setOutput("");
                    setLang("");
                    setLoading(0);
                  }} >Cancel</button>
              }
              <button
                type="button"
                className="btn"
                data-bs-dismiss="modal"
                style={{
                  backgroundColor: "red",
                  color: "white",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      {message && (
        <div
          className="alert alert-danger"
          role="alert"
          style={{
            position: "absolute",
            bottom: "0",
            right: "10px",
          }}
        >
          {message}
        </div>
      )}
      </div>
    </>
  );
};

export default TranslatorModal;
