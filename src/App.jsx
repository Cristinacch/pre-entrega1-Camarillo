import "./App.css"
import NavBarComponent from "./component/NavBarComponent/NavBarComponent";
import ButtonComponent from "./component/ButtonComponent/ButtonComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {

    return (
    <div>
        <NavBarComponent />
        <ButtonComponent label="Boton principal" bsBtuttonType="primary" />
    </div>
    )
}
export default App