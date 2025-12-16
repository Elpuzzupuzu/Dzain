import { CalendarDays, ReceiptText, ChevronRight, Package } from "lucide-react";
import { useState } from "react";
import OrderDetailsModal from "./OrderDetailsModal";

const PurchaseHistorySection = ({ history }) => {
  const [selected, setSelected] = useState(null);

  if (!history || history.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-16 text-center">
        <Package className="w-12 h-12 text-slate-400 mb-4" />
        <p className="text-slate-900 font-semibold">Aún no tienes pedidos</p>
        <p className="text-slate-500 text-sm mt-1">
          Cuando realices una compra aparecerá aquí
        </p>
      </div>
    );
  }

  return (
    <>
      <section className="space-y-4">
        {history.map((purchase) => (
          <div
            key={purchase.id}
            onClick={() => setSelected(purchase)}
            className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 hover:border-slate-300 hover:shadow-sm transition"
          >
            <div className="flex items-center justify-between gap-6">
              
              {/* Left */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center">
                  <ReceiptText className="w-5 h-5 text-white" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Orden #{purchase.id.slice(0, 8).toUpperCase()}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                    <CalendarDays className="w-3.5 h-3.5" />
                    {new Date(purchase.fecha_compra).toLocaleDateString("es-MX", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-xs text-slate-500 mb-1">Total</p>
                  <p className="text-lg font-bold text-slate-900">
                    ${purchase.total_final.toFixed(2)}
                  </p>
                </div>

                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-0.5 transition" />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Modal */}
      <OrderDetailsModal
        open={!!selected}
        purchase={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
};

export default PurchaseHistorySection;
