import Form from "./form";
import NavBar from "../Home/HomeNav";

function Login() {
    return(
    <div>
        <NavBar />
        <Form route="/api/token/" method="login" />
    </div>
    );
    }

export default Login;