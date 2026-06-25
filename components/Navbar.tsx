import { Search, User } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="border-b border-white/5 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 lg:px-10">
          <div className="flex items-center gap-10">
            <h1 className="text-xl font-bold tracking-tight">HRCinevon</h1>

            <nav className="hidden gap-6 md:flex">
              <button className="text-sm text-white transition-opacity hover:opacity-100 opacity-80">
                Home
              </button>

              <button className="text-sm text-white/70 transition-colors hover:text-white">
                Movies
              </button>

              <button className="text-sm text-white/70 transition-colors hover:text-white">
                Series
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 transition-colors hover:bg-white/10">
              <Search className="size-5" />
            </button>

            <button className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/15">
              <User className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
