"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ClipboardCheck,
  MapPin,
  MapPinned,
  PackageSearch,
  Truck,
} from "lucide-react";
import { demoServiceRequest, serviceAreas } from "@/lib/mock-data";

const inputClass =
  "mt-1.5 w-full rounded-xl border-2 border-cacambar-orange/35 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-cacambar-orange focus:ring-2 focus:ring-cacambar-orange/25";

export default function RequestPage() {
  const router = useRouter();
  const [serviceAreaId, setServiceAreaId] = useState(
    demoServiceRequest.serviceAreaId
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(`/marketplace?serviceAreaId=${serviceAreaId}`);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#120b05] text-white">
      <section className="relative mx-auto max-w-6xl px-6 py-9">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-120px] top-10 h-[380px] w-[380px] rounded-full bg-cacambar-orange/16 blur-[140px]" />
          <div className="absolute right-[-140px] top-40 h-[380px] w-[380px] rounded-full bg-orange-500/8 blur-[140px]" />
        </div>

        <div className="mb-7 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-2xl border border-cacambar-orange/55 bg-cacambar-orange/[0.08] px-4 py-2 shadow-lg shadow-cacambar-orange/10">
            <Truck size={15} className="text-cacambar-orange" />
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-cacambar-orange">
              CAÇAMBAR Operational Flow
            </p>
          </div>

          <h1 className="max-w-3xl text-[2.25rem] font-black leading-[1.02] tracking-tight text-white md:text-[2.8rem]">
            Request your construction waste container
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-orange-50/78">
            Operational entry point for address, service area, waste type,
            container size and delivery window.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-5 rounded-3xl border-2 border-cacambar-orange/45 bg-[#1a0f08]/88 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl lg:grid-cols-[1.18fr_0.82fr]"
        >
          <div className="rounded-2xl border border-cacambar-orange/35 bg-[#120b05]/55 p-4">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cacambar-orange/60 bg-cacambar-orange/[0.09] text-cacambar-orange">
                <MapPinned size={20} />
              </div>

              <div>
                <h2 className="text-lg font-black text-white">
                  Service details
                </h2>
                <p className="text-xs text-orange-50/62">
                  Pre-filled demo request for the MVP flow.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="sm:col-span-2">
                <span className="text-xs font-bold text-orange-50">
                  Service address
                </span>
                <input
                  value={demoServiceRequest.address}
                  readOnly
                  className={inputClass}
                />
              </label>

              <label>
                <span className="text-xs font-bold text-orange-50">City</span>
                <input
                  value={demoServiceRequest.city}
                  readOnly
                  className={inputClass}
                />
              </label>

              <label>
                <span className="text-xs font-bold text-orange-50">State</span>
                <input
                  value={demoServiceRequest.state}
                  readOnly
                  className={inputClass}
                />
              </label>

              <label className="sm:col-span-2">
                <span className="text-xs font-bold text-orange-50">
                  Service Area
                </span>
                <select
                  value={serviceAreaId}
                  onChange={(event) => setServiceAreaId(event.target.value)}
                  className={inputClass}
                >
                  {serviceAreas.map((area) => (
                    <option key={area.id} value={area.id}>
                      {area.name} — {area.coverageLabel}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span className="text-xs font-bold text-orange-50">
                  Waste type
                </span>
                <input
                  value={demoServiceRequest.wasteType.replace(/_/g, " ")}
                  readOnly
                  className={inputClass}
                />
              </label>

              <label>
                <span className="text-xs font-bold text-orange-50">
                  Container size
                </span>
                <input
                  value={demoServiceRequest.containerSize}
                  readOnly
                  className={inputClass}
                />
              </label>

              <label className="sm:col-span-2">
                <span className="text-xs font-bold text-orange-50">
                  Requested delivery
                </span>
                <input
                  value={demoServiceRequest.requestedDelivery}
                  readOnly
                  className={inputClass}
                />
              </label>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-cacambar-orange/45 bg-cacambar-orange/[0.055] p-5 shadow-xl shadow-cacambar-orange/10">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-cacambar-orange bg-cacambar-orange/[0.12] text-cacambar-orange shadow-lg shadow-cacambar-orange/15">
                <MapPin size={26} />
              </div>

              <h2 className="text-xl font-black text-white">
                Request summary
              </h2>

              <p className="mt-3 text-sm leading-6 text-orange-50/75">
                CAÇAMBAR matches this request with suppliers that can serve the
                selected area. Payment and backend are simulated for this MVP.
              </p>

              <div className="mt-5 rounded-xl border border-cacambar-orange/40 bg-[#120b05]/70 p-4 text-sm text-orange-50/75">
                <p className="flex items-center gap-2 font-bold text-white">
                  <ClipboardCheck size={15} className="text-cacambar-orange" />
                  Payment simulated for MVP
                </p>
                <p className="mt-2 text-xs leading-5">
                  Next steps demonstrate supplier selection, confirmation and
                  operational tracking.
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center gap-3 rounded-xl border-2 border-cacambar-orange bg-cacambar-orange px-5 py-3 text-sm font-black text-slate-950 shadow-lg shadow-cacambar-orange/20 transition hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-cacambar-orange/30"
            >
              <PackageSearch size={18} />
              Find Suppliers
              <ArrowRight size={17} />
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}