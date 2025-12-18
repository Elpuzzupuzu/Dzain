import React from 'react';

// ProfileHeader Component
const ProfileHeader = ({ user }) => {
  return (
    <div className="relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-pink-100 to-blue-100 rounded-3xl h-48"></div>

      {/* Profile Content */}
      <div className="relative pt-12 px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
          
          {/* Avatar */}
          <img
            src={user?.foto_perfil || '/avatar-placeholder.png'}
            alt={`${user?.name || 'User'} profile`}
            className="w-48 h-48 rounded-3xl object-cover shadow-xl border-4 border-white"
          />

          {/* Info Section */}
          <div className="flex-1 pb-4">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-gray-900">
                {user?.name || `${user?.nombre} ${user?.apellido}`}
              </h1>

              {user?.isAdmin && (
                <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                  ADMIN ⚡
                </span>
              )}
            </div>

            <p className="text-gray-600 mb-4 capitalize">
              {user?.rol}
            </p>

            <div className="flex gap-3">
              <button className="px-6 py-2.5 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors">
                Follow
              </button>
              <button className="px-6 py-2.5 bg-white border-2 border-gray-200 text-gray-900 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                Get in touch
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pb-4">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">Followers</p>
              <p className="text-2xl font-bold text-gray-900">2,985</p>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">Following</p>
              <p className="text-2xl font-bold text-gray-900">132</p>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">Likes</p>
              <p className="text-2xl font-bold text-gray-900">548</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
