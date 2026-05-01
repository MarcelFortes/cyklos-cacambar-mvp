"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, MapPin, PackageSearch } from "lucide-react";
import { demoServiceRequest, serviceAreas } from "@/lib/mock-data";

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
    <main className="min-h-screen text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.35em] text-cacambar-orange">
            CAÇAMBAR REQUEST
          </p>
          <h1 className="text-4xl font-black leading-tight md:text-5xl">
            Request a construction waste container
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            This mock request simulates the first operational step: capturing
            the service address, waste type, container size and delivery window
            before showing suppliers available for the area.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-8 rounded-3xl border border-cacambar-orange/35 bg-cacambar-dark/75 p-8 shadow-2xl shadow-black/30 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="sm:col-span-2">
              <span className="text-sm font-semibold text-slate-300">
                Service address
              </span>
              <input
                value={demoServiceRequest.address}
                readOnly
                className="mt-2 w-full rounded-xl border border-white/10 bg-cyklos-slate px-4 py-3 text-white outline-none"
              />
            </label>

            <label>
              <span className="text-sm font-semibold text-slate-300">City</span>
              <input
                value={demoServiceRequest.city}
                readOnly
                className="mt-2 w-full rounded-xl border border-white/10 bg-cyklos-slate px-4 py-3 text-white outline-none"
              />
            </label>

            <label>
              <span className="text-sm font-semibold text-slate-300">State</span>
              <input
                value={demoServiceRequest.state}
                readOnly
                className="mt-2 w-full rounded-xl border border-white/10 bg-cyklos-slate px-4 py-3 text-white outline-none"
              />
            </label>

            <label className="sm:col-span-2">
              <span className="text-sm font-semibold text-slate-300">
                Service Area
              </span>
              <select
                value={serviceAreaId}
                onChange={(event) => setServiceAreaId(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-cyklos-slate px-4 py-3 text-white outline-none"
              >
                {serviceAreas.map((area) => (
                  <option key={area.id} value={area.id}>
                    {area.name} — {area.coverageLabel}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span className="text-sm font-semibold text-slate-300">
                Waste type
              </span>
              <input
                value={demoServiceRequest.wasteType.replace(/_/g, " ")}
                readOnly
                className="mt-2 w-full rounded-xl border border-white/10 bg-cyklos-slate px-4 py-3 text-white outline-none"
              />
            </label>

            <label>
              <span className="text-sm font-semibold text-slate-300">
                Container size
              </span>
              <input
                value={demoServiceRequest.containerSize}
                readOnly
                className="mt-2 w-full rounded-xl border border-white/10 bg-cyklos-slate px-4 py-3 text-white outline-none"
              />
            </label>

            <label className="sm:col-span-2">
              <span className="text-sm font-semibold text-slate-300">
                Requested delivery
              </span>
              <input
                value={demoServiceRequest.requestedDelivery}
                readOnly
                className="mt-2 w-full rounded-xl border border-white/10 bg-cyklos-slate px-4 py-3 text-white outline-none"
              />
            </label>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-cyklos-navy/80 p-6">
            <div>
              <MapPin className="mb-4 text-cacambar-orange" size={30} />
              <h2 className="text-2xl font-bold">Demo request summary</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                CAÇAMBAR uses this request to show suppliers that can serve the
                selected area. No backend or payment gateway is used in this MVP.
              </p>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                <p className="font-semibold text-white">
                  Payment simulated for MVP
                </p>
                <p className="mt-1">
                  The next steps demonstrate supplier selection, order
                  confirmation and operational tracking.
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-cacambar-orange px-6 py-4 font-bold text-slate-950 transition hover:bg-orange-400"
            >
              <PackageSearch size={18} />
              Find Suppliers
              <ArrowRight size={18} />
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
