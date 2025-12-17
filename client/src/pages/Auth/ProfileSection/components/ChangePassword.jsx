import React, { useState } from 'react';
import { Lock } from 'lucide-react';

// ChangePassword Component
const ChangePassword = () => {
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  // Nota: La lógica para manejar el cambio real de contraseña iría aquí.

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
          <Lock className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Change Password</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
          <input
            type="password"
            value={passwords.current}
            onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
          <input
            type="password"
            value={passwords.new}
            onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
          <input
            type="password"
            value={passwords.confirm}
            onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <button className="w-full px-4 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors font-medium">
          Update Password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;