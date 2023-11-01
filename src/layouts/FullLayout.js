import { Outlet } from "react-router-dom";
import { Container } from "reactstrap";
import Menubar from "./Menubar";

const FullLayout = () => {
   return(
    <div>
        <Menubar></Menubar>
        <Container className="p-4 wrapper" fluid>
            <Outlet />
        </Container>
    </div>
   )
}

  export default FullLayout;