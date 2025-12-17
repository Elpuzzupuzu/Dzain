import React from 'react';
import { Package } from 'lucide-react';

// Orders Component
const Orders = ({ orders }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
          <Package className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Recent Orders</h2>
      </div>

      <div className="space-y-3">
        {orders.map((order) => (
          <div key={order.id} className="p-4 rounded-xl border border-gray-100 hover:border-green-200 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="font-semibold text-gray-900">Order #{order.id}</p>
                <p className="text-sm text-gray-500">{order.date}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                order.status === 'Shipping' ? 'bg-blue-100 text-blue-700' :
                'bg-yellow-100 text-yellow-700'
              }`}>
                {order.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{order.items} items</p>
            <p className="font-bold text-gray-900">${order.total}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;