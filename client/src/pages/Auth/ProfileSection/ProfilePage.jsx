import React, { useState } from 'react';
import { 
  ProfileHeader, 
  Tabs, 
  ProjectCard, 
  AccountInfo, 
  ChangePassword, 
  Orders, 
  Wishlist 
} from './components/index'; // Importa desde el archivo index.js

// Main ProfilePage
export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('work');
  
  // Datos y lógica de la página
  const user = {
    name: 'Irene Brooks',
    role: 'Interface and Brand Designer',
    location: 'based in San Antonio',
    email: 'irene.brooks@email.com',
    phone: '+1 (555) 123-4567'
  };

  const projects = [
    {
      id: 1,
      title: 'VPN Mobile App',
      category: 'Mobile UI, Research',
      likes: '517',
      views: '9.3k',
      bgColor: 'bg-gradient-to-br from-blue-200 to-blue-300',
      images: [
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=400&fit=crop',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=400&fit=crop',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=400&fit=crop'
      ]
    },
    {
      id: 2,
      title: 'Property Dashboard',
      category: 'Web interface',
      likes: '983',
      views: '14k',
      bgColor: 'bg-gradient-to-br from-gray-100 to-gray-200',
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=250&fit=crop'
      ],
      badges: [{ text: 'UI', color: 'bg-orange-500' }]
    },
    {
      id: 3,
      title: 'Healthcare Mobile App',
      category: 'Mobile UI, Branding',
      likes: '875',
      views: '13.5k',
      bgColor: 'bg-gradient-to-br from-blue-100 to-indigo-200',
      images: [
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=400&fit=crop',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=400&fit=crop',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=400&fit=crop'
      ],
      badges: [
        { text: 'UI', color: 'bg-orange-500' },
        { text: 'Br', color: 'bg-blue-500' }
      ]
    }
  ];

  const orders = [
    { id: '10234', date: 'Nov 15, 2024', items: 3, total: '1,247.00', status: 'Delivered' },
    { id: '10235', date: 'Nov 28, 2024', items: 1, total: '459.00', status: 'Shipping' },
    { id: '10236', date: 'Dec 5, 2024', items: 2, total: '798.00', status: 'Processing' }
  ];

  const [wishlist, setWishlist] = useState([
    { id: 1, name: 'Modern Chair', price: '299', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=300&h=300&fit=crop' },
    { id: 2, name: 'Desk Lamp', price: '129', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop' },
    { id: 3, name: 'Notebook Set', price: '45', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&h=300&fit=crop' },
    { id: 4, name: 'Coffee Mug', price: '25', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300&h=300&fit=crop' }
  ]);

  const handleRemoveFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  // Renderizado principal
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Profile Header */}
        <ProfileHeader user={user} />
        
        {/* Tabs */}
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Content */}
        <div className="p-8">
          {activeTab === 'work' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
          
          {activeTab === 'account' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl">
              <AccountInfo user={user} />
              <ChangePassword />
            </div>
          )}
          
          {activeTab === 'orders' && (
            <div className="max-w-3xl">
              <Orders orders={orders} />
            </div>
          )}
          
          {activeTab === 'wishlist' && (
            <div className="max-w-4xl">
              <Wishlist items={wishlist} onRemove={handleRemoveFromWishlist} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}