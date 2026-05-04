"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  MapPin,
  PackageSearch,
  Truck,
  ClipboardCheck,
  MapPinned,
} from "lucide-react";
import { demoServiceRequest, serviceAreas } from "@/lib/mock-data";

const inputClass =
  "mt-2 w-full rounded-xl border-2 border-cacambar-orange/45 bg-white px-4 py-3 font-semibold text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-cacambar-orange focus:ring-2 focus:ring-cacambar-orange/25";

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
      <section className="relative mx-auto max-w-6xl px-6 py-14">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-120px] top-10 h-[460px] w-[460px] rounded-full bg-cacambar-orange/18 blur-[150px]" />
          <div className="absolute right-[-160px] top-40 h-[460px] w-[460px] rounded-full bg-orange-500/8 blur-[150px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.12),transparent_28%),radial-gradient(circle_at_80%_40%,rgba(249,115,22,0.08),transparent_30%)]" />
        </div>

        <div className="mb-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-2xl border-2 border-cacambar-orange/60 bg-cacambar-orange/[0.09] px-4 py-2 shadow-lg shadow-cacambar-orange/15">
            <Truck size={16} className="text-cacambar-orange" />
            <p className="text-xs font-black uppercase tracking-[0.32em] text-cacambar-orange">
              CAÇAMBAR Operational Flow
            </p>
          </div>

          <h1 className="text-4xl font-black leading-tight md:text-5xl">
            Request your construction waste container
          </h1>

          <p className="mt-4 text-lg leading-8 text-orange-50/80">
            This is the operational entry point of CAÇAMBAR: address, service
            area, waste type, container size and delivery window.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-8 rounded-3xl border-2 border-cacambar-orange/55 bg-[#1a0f08]/88 p-8 shadow-2xl shadow-black/35 backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="rounded-2xl border border-cacambar-orange/35 bg-[#120b05]/45 p-5">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-cacambar-orange/65 bg-cacambar-orange/[0.09] text-cacambar-orange">
                <MapPinned size={22} />
              </div>

              <div>
                <h2 className="text-xl font-black text-white">
                  Service details
                </h2>
                <p className="text-sm text-orange-50/65">
                  Pre-filled demo request for the MVP flow.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="sm:col-span-2">
                <span className="text-sm font-bold text-orange-50">
                  Service address
                </span>
                <input
                  value={demoServiceRequest.address}
                  readOnly
                  className={inputClass}
                />
              </label>

              <label>
                <span className="text-sm font-bold text-orange-50">City</span>
                <input
                  value={demoServiceRequest.city}
                  readOnly
                  className={inputClass}
                />
              </label>

              <label>
                <span className="text-sm font-bold text-orange-50">State</span>
                <input
                  value={demoServiceRequest.state}
                  readOnly
                  className={inputClass}
                />
              </label>

              <label className="sm:col-span-2">
                <span className="text-sm font-bold text-orange-50">
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
                <span className="text-sm font-bold text-orange-50">
                  Waste type
                </span>
                <input
                  value={demoServiceRequest.wasteType.replace(/_/g, " ")}
                  readOnly
                  className={inputClass}
                />
              </label>

              <label>
                <span className="text-sm font-bold text-orange-50">
                  Container size
                </span>
                <input
                  value={demoServiceRequest.containerSize}
                  readOnly
                  className={inputClass}
                />
              </label>

              <label className="sm:col-span-2">
                <span className="text-sm font-bold text-orange-50">
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

          <div className="flex flex-col justify-between rounded-2xl border-2 border-cacambar-orange/55 bg-cacambar-orange/[0.055] p-6 shadow-xl shadow-cacambar-orange/10">
            <div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-cacambar-orange bg-cacambar-orange/[0.12] text-cacambar-orange shadow-lg shadow-cacambar-orange/20">
                <MapPin size={30} />
              </div>

              <h2 className="text-2xl font-black text-white">
                Request summary
              </h2>

              <p className="mt-3 text-sm leading-6 text-orange-50/75">
                CAÇAMBAR uses this request to match the customer with suppliers
                that can serve the selected area. No backend or payment gateway
                is used in this MVP.
              </p>

              <div className="mt-6 rounded-xl border-2 border-cacambar-orange/45 bg-[#120b05]/70 p-4 text-sm text-orange-50/75">
                <p className="flex items-center gap-2 font-bold text-white">
                  <ClipboardCheck size={16} className="text-cacambar-orange" />
                  Payment simulated for MVP
                </p>
                <p className="mt-2">
                  The next steps demonstrate supplier selection, order
                  confirmation and operational tracking.
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-xl border-2 border-cacambar-orange bg-cacambar-orange px-6 py-4 font-black text-slate-950 shadow-lg shadow-cacambar-orange/20 transition hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-cacambar-orange/30"
            >
              <PackageSearch size={20} />
              Find Suppliers
              <ArrowRight size={18} />
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}