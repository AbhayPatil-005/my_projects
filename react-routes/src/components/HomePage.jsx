import { NavLink } from "react-router-dom";

const HomePage = ()=>{
    return <>
    <div>
        <h1>Home Page</h1>
        <NavLink to='/aboutus'>About us</NavLink>
    </div>
    </>
}
export default HomePage;