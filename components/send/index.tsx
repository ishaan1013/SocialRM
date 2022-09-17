import { useState, useEffect } from "react";
import coGenerate from "../../pages/api/cohere";

interface Props {
  username: string;
  category: string;
  name: string;
  tone: string;
}

const Send: React.FC<Props> = ({ username, category, name, tone }) => {
  const [results, setResults] = useState([]);
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    coGenerate(username, name, tone).then((res: any) => {
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
        <button
          onClick={() =>
            setCurrentMessage((currentMessage + 1) % results.length)
          }
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default Send;
