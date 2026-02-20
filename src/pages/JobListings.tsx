import { useState, useEffect } from 'react';
import { Job, JobFilters } from '../types/job';
import { jobService } from '../services/jobService';
import { SearchBar } from '../components/SearchBar';
import { FilterPanel } from '../components/FilterPanel';
import { JobCard } from '../components/JobCard';
import { LoadingSpinner } from '../components/LoadingSpinner';

interface JobListingsProps {
  onJobClick: (jobId: string) => void;
  savedJobs: string[];
  onSaveToggle: (jobId: string) => void;
}

export function JobListings({ onJobClick, savedJobs, onSaveToggle }: JobListingsProps) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<JobFilters>({
    search: '',
    location: '',
    category: 'all',
    type: 'all'
  });

  const categories = jobService.getCategories();
  const locations = jobService.getLocations();

  useEffect(() => {
    loadJobs();
  }, [filters]);

  const loadJobs = async () => {
    setLoading(true);
    const results = await jobService.searchJobs(filters);
    setJobs(results);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Find Your Dream Job
          </h2>
          <p className="text-gray-600">
            Browse through {jobs.length} available positions
          </p>
        </div>

        <div className="mb-6">
          <SearchBar
            value={filters.search}
            onChange={(value) => setFilters({ ...filters, search: value })}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <FilterPanel
              location={filters.location}
              category={filters.category}
              type={filters.type}
              onLocationChange={(value) => setFilters({ ...filters, location: value })}
              onCategoryChange={(value) => setFilters({ ...filters, category: value })}
              onTypeChange={(value) => setFilters({ ...filters, type: value })}
              categories={categories}
              locations={locations}
            />
          </aside>

          <main className="lg:col-span-3">
            {loading ? (
              <LoadingSpinner />
            ) : jobs.length === 0 ? (
              <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                <p className="text-gray-500 text-lg">
                  No jobs found matching your criteria
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {jobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    isSaved={savedJobs.includes(job.id)}
                    onSaveToggle={onSaveToggle}
                    onClick={onJobClick}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
