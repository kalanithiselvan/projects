import { useState, useEffect } from 'react';
import { Job } from '../types/job';
import { jobService } from '../services/jobService';
import { JobCard } from '../components/JobCard';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { BookmarkX } from 'lucide-react';

interface SavedJobsProps {
  savedJobIds: string[];
  onJobClick: (jobId: string) => void;
  onSaveToggle: (jobId: string) => void;
}

export function SavedJobs({ savedJobIds, onJobClick, onSaveToggle }: SavedJobsProps) {
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSavedJobs();
  }, [savedJobIds]);

  const loadSavedJobs = async () => {
    setLoading(true);
    const allJobs = await jobService.getAllJobs();
    const filtered = allJobs.filter(job => savedJobIds.includes(job.id));
    setSavedJobs(filtered);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Saved Jobs
          </h2>
          <p className="text-gray-600">
            {savedJobs.length === 0
              ? 'You haven\'t saved any jobs yet'
              : `You have ${savedJobs.length} saved ${savedJobs.length === 1 ? 'job' : 'jobs'}`}
          </p>
        </div>

        {savedJobs.length === 0 ? (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <BookmarkX className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No saved jobs yet
            </h3>
            <p className="text-gray-500 mb-6">
              Start saving jobs you're interested in to view them here
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {savedJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                isSaved={true}
                onSaveToggle={onSaveToggle}
                onClick={onJobClick}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
