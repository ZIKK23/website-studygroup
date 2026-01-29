import { MousePointer2 } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent pt-24 pb-10 lg:pt-30 lg:pb-20">

      <div className="container relative z-10 mx-auto px-6 text-center lg:px-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          
          {/* Main Heading */}
          <h1 className="mb-6 text-5xl font-semibold tracking-tight text-slate-800 sm:text-6xl md:text-7xl lg:text-8xl">
            Study Group <br />
            <span className="text-secondary">in EISD Laboratory</span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-slate-500 sm:text-xl">
            A collaborative learning space at EISD Laboratory focused on building real digital solutions across Software Engineering, UI/UX Design, Technopreneurship, and Intelligent Systems.
          </p>

          {/* Single Action Button */}
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <Link
              href="#registration-form"
              className="group relative inline-flex items-center justify-center rounded-full bg-white p-1.5 shadow-xl shadow-purple-500/30 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 active:scale-95"
            >
              <div className="flex min-w-[200px] items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#6366f1] to-[#a855f7] px-8 py-3.5 text-lg font-semibold text-white transition-all group-hover:brightness-110">
                <MousePointer2 className="h-5 w-5 fill-white" />
                <span>Register Study Group</span>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
