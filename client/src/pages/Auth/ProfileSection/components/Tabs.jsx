import React from 'react';

// Tabs Component
const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'work', label: 'Work', count: 54 },
    { id: 'account', label: 'Account', count: null },
    { id: 'orders', label: 'Orders', count: null },
    { id: 'wishlist', label: 'Wishlist', count: null },
    { id: 'reviews', label: 'Reviews', count: null } // <--- ¡AÑADIDO!
  ];

  return (
    <div className="border-b border-gray-200 px-8 mt-8">
      <div className="flex gap-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-4 px-2 font-medium transition-colors relative ${
              activeTab === tab.id
                ? 'text-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}

            {tab.count && (
              <span className="ml-1 text-xs align-super">
                {tab.count}
              </span>
            )}

            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
