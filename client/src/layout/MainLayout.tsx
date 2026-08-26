import { Outlet } from "react-router";
import Footer from "../ui/Footer";
import Nav from "../ui/Nav";

export default function MainLayout() {

    return(
        <div className="min-h-dvh flex flex-col">

            <Nav />

            <main>
                <Outlet />
            </main>
            <Footer />

        </div>
    )
}