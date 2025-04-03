import AddProduct from "../pages/addProduct";
import Dashboard from "../pages/dashBoard";
import Home from "../pages/homePage";
import { Routes, Route } from "react-router";


const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/addProduct" element={<AddProduct />} />
                <Route path="/dashboard" element={<Dashboard />}></Route>
            </Routes>
        </>
    )
}

export default AllRoutes