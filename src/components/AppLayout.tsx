import {Outlet} from "react-router-dom";
import Header from "./Header.tsx";
import {Sidebar} from "./Sidebar.tsx";

function AppLayout() {
    return (
        <div className="grid md:grid-cols-[13rem_minmax(700px,_1fr)] h-screen ">
            <Sidebar/>
            <div className="overflow-y-scroll bg-[#1E1E1E]">
                <Header/>
                <main className="">
                    <Outlet/>
                </main>
            </div>

        </div>
    );
}

export default AppLayout;