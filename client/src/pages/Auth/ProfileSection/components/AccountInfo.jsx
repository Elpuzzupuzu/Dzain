import React, { useEffect } from 'react';
import { User } from 'lucide-react';

const AccountInfo = ({ user }) => {
  useEffect(() => {
    console.log('AccountInfo -> estructura de user:', user);
  }, [user]);

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">
          Account Information
        </h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-500">Full Name</label>
          <p className="text-gray-900 mt-1 font-medium">{user?.name}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-500">Email</label>
          <p className="text-gray-900 mt-1">{user?.correo}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-500">Phone</label>
          <p className="text-gray-900 mt-1">{user?.phone}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-500">Location</label>
          <p className="text-gray-900 mt-1">{user?.location}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
