import MyNav from "./components/MyNav";
import MyControlBar from "./components/MyControlBar";
import MyGallery from "./components/MyGallery";
import MyFooter from "./components/MyFooter";
import MySettings from "./components/MySettings";
import MyProfile from "./components/MyProfile";

const App = () => (
  <>
    <MyNav />
    <MyControlBar />
    <MyGallery title="Avengers" />
    <MyGallery title="Guardians of the Galaxy" />
    <MyGallery title="Thor" />
    <MyFooter />
  </>

  // <>
  //   <MyNav />
  //   <MySettings />
  // </>

  // <>
  //   <MyNav />
  //   <MyProfile />
  // </>
);

export default App;
