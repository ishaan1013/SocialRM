import { useState, useEffect } from "react";
import coGenerate from "../../pages/api/cohere";
import { greetings } from "../../data/data";

interface Props {
  category: any;
  name: any;
  style: any;
}

const INFORMAL = "46441c5a-7452-4a9d-9bc4-8a9481c924e2-ft";
const FORMAL = "5fd2c674-a202-4364-ba1d-7a89fc420f1f-ft";

const Send: React.FC<Props> = ({ category, name, style }) => {
  const [results, setResults] = useState([]);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [messageStyle, setMessageStyle] = useState(style);

  useEffect(() => {
    coGenerate(
      "Hello Ryan!",
      messageStyle === "informal" ? INFORMAL : FORMAL
    ).then((res: any) => {
      setResults(res);
    });
  }, []);

  return (
    <main>
      <div>
        <h3>{category}</h3>
        <h2>{name}</h2>
      </div>
      <div>
        <textarea value={results[currentMessage]}></textarea>
        <button onClick={() => setCurrentMessage((currentMessage + 1) % 5)}>
          Next
        </button>
      </div>
    </main>
  );
};

export default Send;
