import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "./components/SideBar";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen">
        <AppSidebar />

        <div className="flex-1 flex flex-col">
          <Navbar />
          
          <main className="flex-1 relative px-4 py-2">
            <SidebarTrigger />
            {/* Aquí iría el contenido principal */}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
