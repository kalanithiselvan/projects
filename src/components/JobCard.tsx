import { MapPin, Clock, DollarSign, Briefcase, Bookmark, BookmarkCheck } from 'lucide-react';
import { Job } from '../types/job';

interface JobCardProps {
  job: Job;
  isSaved: boolean;
  onSaveToggle: (jobId: string) => void;
  onClick: (jobId: string) => void;
}

export function JobCard({ job, isSaved, onSaveToggle, onClick }: JobCardProps) {
  const handleSaveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSaveToggle(job.id);
  };

  return (
    <div
      onClick={() => onClick(job.id)}
      className="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-start gap-4">
          <div className="text-4xl">{job.logo}</div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {job.title}
            </h3>
            <p className="text-gray-600 font-medium mt-1">{job.company}</p>
          </div>
        </div>
        <button
          onClick={handleSaveClick}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label={isSaved ? 'Unsave job' : 'Save job'}
        >
          {isSaved ? (
            <BookmarkCheck className="w-5 h-5 text-blue-600 fill-blue-600" />
          ) : (
            <Bookmark className="w-5 h-5 text-gray-400 hover:text-blue-600" />
          )}
        </button>
      </div>

      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-center text-gray-600 text-sm">
          <MapPin className="w-4 h-4 mr-1.5" />
          {job.location}
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <Briefcase className="w-4 h-4 mr-1.5" />
          {job.type}
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <DollarSign className="w-4 h-4 mr-1.5" />
          {job.salary}
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <Clock className="w-4 h-4 mr-1.5" />
          {new Date(job.postedDate).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
          })}
        </div>
      </div>

      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
        {job.description}
      </p>

      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
          {job.category}
        </span>
        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
          {job.experience}
        </span>
      </div>
    </div>
  );
}
