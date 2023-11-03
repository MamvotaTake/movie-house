import {Outlet} from "react-router-dom";
import Header from "./Header.tsx";
import {Sidebar} from "./Sidebar.tsx";
import {Footer} from "./Footer.tsx";

function AppLayout() {
    return (
        <div className="grid grid-rows-1 md:grid-cols-[13rem_minmax(700px,_1fr)] h-screen overflow-hidden ">
            <Sidebar/>
            <div className="overflow-y-scroll  bg-[#1E1E1E]">
                <Header/>
                <main className="">
                    <Outlet/>
                    <Footer/>
                </main>

            </div>

        </div>
    );
}

export default AppLayout;