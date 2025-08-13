import { PencilSquareIcon, EyeIcon, TrashIcon } from '@heroicons/react/24/outline';

const users = [
    {
        email: 'john.doe@example.com',
        username: 'johndoe',
        name: 'John Doe',
        role: 'Admin',
    },
];

export default function UserList() {
    return (
        <div className="w-full h-full overflow-x-auto">
            <div className="min-w-[600px]">
                <div className="grid grid-cols-5 bg-gray-50 font-medium text-xs uppercase text-gray-500 tracking-wider">
                    <div className="px-6 py-3 text-left">Email</div>
                    <div className="px-6 py-3 text-left">Usuario</div>
                    <div className="px-6 py-3 text-left">Nombre</div>
                    <div className="px-6 py-3 text-left">Rol</div>
                    <div className="px-3 py-3 text-center">Acciones</div>
                </div>
                <div>
                    {users.map((user, idx) => (
                        <div
                            key={idx}
                            className="grid grid-cols-5 items-center border-b border-gray-200 bg-white text-sm"
                        >
                            <div className="px-6 py-4 text-gray-900 break-words whitespace-normal">{user.email}</div>
                            <div className="px-6 py-4 text-gray-900 break-words whitespace-normal">{user.username}</div>
                            <div className="px-6 py-4 text-gray-900 break-words whitespace-normal">{user.name}</div>
                            <div className="px-6 py-4 text-gray-900 break-words whitespace-normal">{user.role}</div>
                            <div className="px-3 py-4 text-center flex items-center justify-center gap-2">
                                <button className="text-blue-500 hover:text-blue-700">
                                    <PencilSquareIcon className="h-5 w-5" />
                                </button>
                                <button className="text-green-500 hover:text-green-700">
                                    <EyeIcon className="h-5 w-5" />
                                </button>
                                <button className="text-red-500 hover:text-red-700">
                                    <TrashIcon className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}