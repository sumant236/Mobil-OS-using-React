import "./styles.css";
import ListHeading from "./Component/ListHeading";
import List1 from "./Component/List1";
import List2 from "./Component/List2";

export default function App() {
  return (
    <div className="App">
      <ListHeading heading="Mobile Operation System" />
      <List1 />
      <ListHeading heading="Mobile Manufacturers" />
      <List2 />
    </div>
  );
}
