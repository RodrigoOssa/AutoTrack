import UserList from "@/components/users/userList";

export default function Users() {

    return (
        <main className="flex-1 flex flex-col overflow-hidden">
            <div className="flex border-b border-gray-200 bg-white">
                <button
                    className="px-4 py-2 text-sm font-medium border-b-2 border-blue-600 text-blue-600 bg-white focus:outline-none transition-colors"
                >
                    Usuarios
                </button>
                <button
                    className="px-4 py-2 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-200 bg-white focus:outline-none transition-colors"
                >
                    Agregar Usuario
                </button>
            </div>
            <div className="flex-1 p-6 overflow-auto">
                {/* Contenido de la pestaña "Usuarios" */}
                <div className="bg-white p-6 rounded-lg shadow mb-6">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Gestión de Usuarios</h3>
                    <p className="text-gray-500">Aquí puedes ver y administrar todos los usuarios del sistema.</p>
                    <UserList />
                </div>

                {/* Contenido de la pestaña "Agregar Usuario" */}
                {/* <div className="bg-white p-6 rounded-lg shadow mb-6">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Agregar Nuevo Usuario</h3>
                    <p className="text-gray-500">Completa el formulario para añadir un nuevo usuario al sistema.</p>
                    </div> */}
                {/* Formulario para agregar usuario */}
            </div>
        </main>
    )
}