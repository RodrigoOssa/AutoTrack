import { NavBar } from "./navbar";

export function SideBar() {

    return (
        <aside
            className="w-64 h-screen bg-white shadow-md flex-shrink-0">
            <div
                className="p-6">
                <h1
                    className="text-2xl font-bold text-gray-800">
                    Autotrack (Icono)
                </h1>
            </div>
            <NavBar />
            <div
                className="absolute bottom-0 w-64 p-6">
                <button
                    className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    + Nueva Orden
                </button>
            </div>
        </aside>
    )
}