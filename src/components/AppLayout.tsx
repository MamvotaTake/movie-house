import {Outlet} from "react-router-dom";
import Header from "./Header.tsx";
import {Sidebar} from "./Sidebar.tsx";

function AppLayout() {
    return (
        <div className="grid md:grid-cols-[13rem_minmax(700px,_1fr)] h-screen overflow-hidden ">
            <Sidebar/>
            <div className="overflow-scroll  bg-[#1E1E1E]">
                <Header/>
                <main className="h-full">
                    <Outlet/>
                </main>
            </div>

        </div>
    );
}

export default AppLayout;