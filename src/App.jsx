import HeaderComponent from "./components/HeaderComponent" ;
// import FooterComponent from "./components/FooterComponent" ;
import ShowComponent from "./components/pages/ShowComponent";
import ShowListComponent from "./components/pages/ShowListComponent";
import {BrowserRouter, Routes ,Route} from "react-router-dom" ;

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
           <Route path="/show/:name" element={<ShowComponent/>}/>
           <Route path="/" element={<ShowListComponent/>}/>
        </Routes>
        {/* <FooterComponent /> */}
      </BrowserRouter>
    </>
  )
}

export default App
