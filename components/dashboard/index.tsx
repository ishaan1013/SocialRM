import Nav from "../nav";
import coGenerate from "../../pages/api/cohere";

const Dashboard: React.FC = () => {
  coGenerate("Once upon a time there was a ");
  return (
    <>
      <Nav />
      <main>
        <h1>Dashboard</h1>
      </main>
    </>
  );
};

export default Dashboard;
