import UserList from "@/components/users/userList";
import Link from "next/link";

export default function Users() {

    return (
        <main className="flex flex-col overflow-hidden">
            <div className="flex border-b border-gray-200 bg-white">
                <button
                    className="px-4 py-2 text-sm font-medium border-b-2 border-blue-600 text-blue-600 bg-white focus:outline-none transition-colors"
                >
                    Usuarios
                </button>
                <Link
                    href="/users/addUser"
                    className="px-4 py-2 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-200 bg-white focus:outline-none transition-colors"
                >
                    Agregar Usuario
                </Link>
            </div>
            <div className="p-2 sm:p-4 w-full">
                {/* Contenido de la pestaña "Usuarios" */}
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow mb-6 w-full">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2 sm:mb-4">Gestión de Usuarios</h3>
                    <p className="text-gray-500 mb-4">Aquí puedes ver y administrar todos los usuarios del sistema.</p>
                    <UserList />
                </div>
                {/* Contenido de la pestaña "Agregar Usuario" */}
                {/* <div className="bg-white p-4 sm:p-6 rounded-lg shadow mb-6 w-full">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2 sm:mb-4">Agregar Nuevo Usuario</h3>
                    <p className="text-gray-500 mb-4">Completa el formulario para añadir un nuevo usuario al sistema.</p>
                </div> */}
                {/* Formulario para agregar usuario */}
            </div>
        </main>
    )
}