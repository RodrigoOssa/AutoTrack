import { HomeIcon, UsersIcon, ArrowTrendingUpIcon, UserGroupIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function NavBar() {
    return (
        <nav className="mt-6">
            <Link href="/"
                className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-200 active"
            >
                <span className="mr-3 rounded-full bg-indigo-100 p-1 flex items-center justify-center">
                    <HomeIcon className="h-6 w-6 text-indigo-600" />
                </span>
                Dashboard Operacional
            </Link>
            <Link href="/"
                className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-200"
            >
                <span className="mr-3 rounded-full bg-green-100 p-1 flex items-center justify-center">
                    <ArrowTrendingUpIcon className="h-6 w-6 text-green-600" />
                </span>
                Rendimiento (KPIs)
            </Link>
            <Link href="/"
                className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-200"
            >
                <span className="mr-3 rounded-full bg-yellow-100 p-1 flex items-center justify-center">
                    <UserGroupIcon className="h-6 w-6 text-yellow-600" />
                </span>
                Clientes y Marketing
            </Link>
            <Link href="/"
                className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-200"
            >
                <span className="mr-3 rounded-full bg-rose-100 p-1 flex items-center justify-center">
                    <CurrencyDollarIcon className="h-6 w-6 text-rose-600" />
                </span>
                Financiero
            </Link>
            <Link href="/users"
                className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-200"
            >
                <span className="mr-3 rounded-full bg-blue-100 p-1 flex items-center justify-center">
                    <UsersIcon className="h-6 w-6 text-blue-600" />
                </span>Administración de Usuarios
            </Link>
        </nav>
    )
}