import MyNav from "./components/MyNav";
import MyControlBar from "./components/MyControlBar";
import MyGallery from "./components/MyGallery";
import MyFooter from "./components/MyFooter";

const App = () => (
  <>
    <MyNav />
    <MyControlBar />
    <MyGallery title="Avengers" />
    <MyGallery title="Guardians of the Galaxy" />
    <MyGallery title="Thor" />
    <MyFooter />
  </>
);

export default App;
