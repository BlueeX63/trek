"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname, notFound } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";
import { LayoutDashboard, Map, FileText, Settings, LogOut, ArrowLeft, Menu, X } from "lucide-react";
import Image from "next/image";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, isLoading, logout } = useAppContext();
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isLoading) {
      if (!user) {
        // User not logged in? Do nothing, the render logic below will handle throwing 404
        return;
      }

      const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
      if (adminEmail && user.email !== adminEmail) {
        // Unauthorized user? Do nothing, the render logic below will handle throwing 404
      }
    }
  }, [mounted, isLoading, user]);

  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen bg-[var(--color-ink)] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[var(--color-paper)] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  // If not logged in, or if the admin email isn't configured, or if the user doesn't match the admin email, return a 404 Not Found
  if (!user || !adminEmail || user.email !== adminEmail) {
    notFound();
  }

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Treks", href: "/admin/treks", icon: Map },
    { name: "Articles", href: "/admin/articles", icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F3] flex font-sans selection:bg-[var(--color-primary)] selection:text-black">

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white text-[var(--color-ink)] flex flex-col h-screen border-r border-[var(--color-ink)]/10 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b border-[var(--color-ink)]/10">
          <Link href="/" className="inline-block relative w-32 h-10 mb-4 transition-transform hover:scale-105">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-ink)]/50">
            Admin Workspace
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/admin' && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-md text-sm font-semibold transition-colors ${isActive
                    ? "bg-[var(--color-primary)] text-[var(--color-ink)]"
                    : "text-[var(--color-ink)]/70 hover:bg-[var(--color-ink)]/5 hover:text-[var(--color-ink)]"
                  }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[var(--color-ink)]/10 space-y-2">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-md text-sm font-semibold text-[var(--color-ink)]/70 hover:bg-[var(--color-ink)]/5 hover:text-[var(--color-ink)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Site
          </Link>
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-semibold text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        {/* Top bar */}
        <header className="bg-white border-b border-[var(--color-ink)]/10 h-16 flex items-center justify-between px-4 md:px-8 shrink-0 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden p-2 text-[var(--color-ink)] hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <h2 className="font-serif text-xl md:text-xl text-[var(--color-ink)]">
              {navItems.find(i => pathname === i.href || (i.href !== '/admin' && pathname?.startsWith(i.href)))?.name || "Admin"}
            </h2>
          </div>
          <div className="flex items-center gap-3 text-xs md:text-sm font-semibold text-[var(--color-ink)]">
            <span className="w-8 h-8 rounded-full bg-[var(--color-primary)]/20 text-[var(--color-ink)] flex items-center justify-center font-serif italic">
              {user.user_metadata?.full_name?.charAt(0) || user.email?.charAt(0) || 'A'}
            </span>
            {user.user_metadata?.full_name || user.email}
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
