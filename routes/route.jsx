import AddProduct from "../pages/addProduct";
import Home from "../pages/homePage";
import { Routes, Route } from "react-router";


const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/addProduct" element={<AddProduct />} />
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </>
    )
}

export default AllRoutes