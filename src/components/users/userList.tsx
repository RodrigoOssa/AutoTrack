import { PencilSquareIcon, EyeIcon, TrashIcon } from '@heroicons/react/24/outline';

const users = [
    {
        email: 'john.doe@example.com',
        username: 'johndoe',
        name: 'John Doe',
        role: 'Admin',
    },
    // Puedes agregar más usuarios aquí
];

export default function UserList() {
    return (
        <div className="w-full h-full overflow-auto">
            <table className="min-w-full h-full divide-y divide-gray-200 table-fixed">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usuario</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rol</th>
                        <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Editar</th>
                        <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Ver</th>
                        <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Eliminar</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user, idx) => (
                        <tr key={idx}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.username}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.role}</td>
                            <td className="px-3 py-4 whitespace-nowrap text-center">
                                <button className="text-blue-500 hover:text-blue-700">
                                    <PencilSquareIcon className="h-5 w-5 inline" />
                                </button>
                            </td>
                            <td className="px-3 py-4 whitespace-nowrap text-center">
                                <button className="text-green-500 hover:text-green-700">
                                    <EyeIcon className="h-5 w-5 inline" />
                                </button>
                            </td>
                            <td className="px-3 py-4 whitespace-nowrap text-center">
                                <button className="text-red-500 hover:text-red-700">
                                    <TrashIcon className="h-5 w-5 inline" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}