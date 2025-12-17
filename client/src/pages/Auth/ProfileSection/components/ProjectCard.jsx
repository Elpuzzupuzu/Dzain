import React from 'react';
import { Heart, Eye } from 'lucide-react';

// ProjectCard Component
const ProjectCard = ({ project }) => {
  return (
    <div className="group cursor-pointer">
      <div className={`rounded-3xl p-8 ${project.bgColor} mb-4 relative overflow-hidden transition-transform hover:scale-[1.02]`}>
        <div className="flex gap-4 justify-center items-end h-64">
          {project.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${project.title} ${idx + 1}`}
              className="rounded-2xl shadow-2xl object-cover"
              style={{ height: `${200 + idx * 30}px`, width: '140px' }}
            />
          ))}
        </div>
        {project.badges && (
          <div className="absolute top-4 right-4 flex gap-2">
            {project.badges.map((badge, idx) => (
              <div
                key={idx}
                className={`w-10 h-10 ${badge.color} rounded-full flex items-center justify-center font-bold text-white text-sm`}
              >
                {badge.text}
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="px-2">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              {project.likes}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {project.views}
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-500">{project.category}</p>
      </div>
    </div>
  );
};

export default ProjectCard;