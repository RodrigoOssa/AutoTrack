import { SideBar } from "@/ui";
import { Title } from "@/ui/title";

export default function UsersLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <SideBar />
            <main className="flex-1 flex flex-col overflow-hidden">
                <Title />
                <div className="flex-1 p-6 overflow-y-auto">
                    {children}
                </div>
            </main>
        </>
    );
}
