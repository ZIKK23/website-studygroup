"use client";

import { Search } from "lucide-react";

export function AnnouncementCheck() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-12">
            <div className="h-px flex-1 bg-gray-300"></div>
            <h2 className="shrink-0 text-3xl font-bold tracking-tight text-[#1C1629] sm:text-4xl">
              Study Group Announcement
            </h2>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>
          <p className="mt-4 text-center text-lg text-muted-foreground">
            Check your acceptance status by entering your details below.
          </p>
        </div>

        {/* Check Form Box */}
        <div className="mx-auto max-w-xl overflow-hidden rounded-2xl border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label htmlFor="nim" className="text-sm font-medium text-foreground">
                NIM
              </label>
              <input
                type="text"
                id="nim"
                placeholder="Enter your NIM"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <button
              type="button" // Changed to button to prevent submission for now
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#6366f1] to-[#a855f7] px-4 py-3 font-semibold text-white shadow-lg shadow-purple-500/30 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/40 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-purple-500/20 disabled:pointer-events-none disabled:opacity-50"
            >
              <Search className="h-5 w-5" />
              Check Status
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
