import LoginLogic from "./AUTHENTICATION/LoginLogic";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navigate from "./MAINLOGIC/Navigate";
// import Men from './DROPDOWN_CONTENTS/Men';
import Women from './NAVBAR_CONTENTS/Women';
import Kids from './NAVBAR_CONTENTS/Kids';
import Home_Living from './NAVBAR_CONTENTS/Home_Living';
import Men1 from './NAVBAR_CONTENTS/Men1';
// import Navigate1 from './MAINLOGIC/Navigate1';
// import SideDrawer from './SIDEDRAWER/SideDrawer';
import MainPageCarousel from './CAROUSEL/MainPageCarousel';
import "./App.css";

function App() {

  // const Mainpage = () => (
  //   <div>
  //     <br />
  //     <br />
  //     <h1 style={{ fontFamily: 'Architects Daughter', textAlign: 'center' }}>Hello! Beautiful face.</h1>
  //   </div>
  // );

  return (
    <div>
      {/* <div>
        <CheckBox />
      </div> */}
      {/* <CheckBox1 /> */}
      {/* <CheckBox /> */}
      {/* <h4>My current Login Credential:</h4>
      <h4>Username: vishnukavili20@gmail.com</h4>
      <h4>Password: 1234567</h4> */}
      <Router>
        <LoginLogic />
        {/* <Navigate1 />
        <SideDrawer /> */}
        <div>
          <Route path="/LoginAndSignUp" component={LoginLogic} />
          {/* <Route path="/Navigate1" component={Navigate1} />
          <Route path="/SideDrawer" component={SideDrawer} /> */}
          {/* <Route path="/Men" component={Men} /> */}
          {/* <Route path="/" exact component={Mainpage} /> */}
          <Route path="/MainPageCarousel" component={MainPageCarousel} />
          <Route path="/Men1" component={Men1} />
          <Route path="/Women" component={Women} />
          <Route path="/Kids" component={Kids} />
          <Route path="/Home_Living" component={Home_Living} />
        </div>
      </Router>
    </div>
  );
}

export default App;
