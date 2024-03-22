import { EducationalDetails } from "./components/EducationalDetails";
import { OfficePurpose } from "./components/OfficcePurpose";
import { OtherDetails } from "./components/OtherDetails";
import { PaymentDetails } from "./components/PaymentDetails";
import {PersonalDetails} from "./components/PersonalDetails";
import './App.css';
function App() {
  return (
    <div className="App">
     <div className="hed"><h1>STUDENT APPLICATION FORM</h1></div>
      <PersonalDetails/>
      <EducationalDetails/>
      <OtherDetails/>
      <OfficePurpose/>
      <PaymentDetails/>

    </div>
  );
}

export default App;
