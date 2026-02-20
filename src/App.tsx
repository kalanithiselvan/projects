import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { JobListings } from './pages/JobListings';
import { JobDetails } from './pages/JobDetails';
import { SavedJobs } from './pages/SavedJobs';
import { savedJobsService } from './services/savedJobsService';

type Page = 'jobs' | 'saved' | 'details';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('jobs');
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [savedJobs, setSavedJobs] = useState<string[]>([]);

  useEffect(() => {
    setSavedJobs(savedJobsService.getSavedJobs());
  }, []);

  const handleSaveToggle = (jobId: string) => {
    if (savedJobs.includes(jobId)) {
      savedJobsService.unsaveJob(jobId);
      setSavedJobs(savedJobs.filter(id => id !== jobId));
    } else {
      savedJobsService.saveJob(jobId);
      setSavedJobs([...savedJobs, jobId]);
    }
  };

  const handleJobClick = (jobId: string) => {
    setSelectedJobId(jobId);
    setCurrentPage('details');
  };

  const handleBackToJobs = () => {
    setCurrentPage('jobs');
    setSelectedJobId(null);
  };

  const handleNavigate = (page: 'jobs' | 'saved') => {
    setCurrentPage(page);
    setSelectedJobId(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentPage={currentPage === 'details' ? 'jobs' : currentPage}
        onNavigate={handleNavigate}
        savedCount={savedJobs.length}
      />

      {currentPage === 'jobs' && (
        <JobListings
          onJobClick={handleJobClick}
          savedJobs={savedJobs}
          onSaveToggle={handleSaveToggle}
        />
      )}

      {currentPage === 'saved' && (
        <SavedJobs
          savedJobIds={savedJobs}
          onJobClick={handleJobClick}
          onSaveToggle={handleSaveToggle}
        />
      )}

      {currentPage === 'details' && selectedJobId && (
        <JobDetails
          jobId={selectedJobId}
          onBack={handleBackToJobs}
          isSaved={savedJobs.includes(selectedJobId)}
          onSaveToggle={handleSaveToggle}
        />
      )}
    </div>
  );
}

export default App;
