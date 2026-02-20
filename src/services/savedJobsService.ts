const SAVED_JOBS_KEY = 'savedJobs';

export const savedJobsService = {
  getSavedJobs: (): string[] => {
    const saved = localStorage.getItem(SAVED_JOBS_KEY);
    return saved ? JSON.parse(saved) : [];
  },

  saveJob: (jobId: string): void => {
    const saved = savedJobsService.getSavedJobs();
    if (!saved.includes(jobId)) {
      saved.push(jobId);
      localStorage.setItem(SAVED_JOBS_KEY, JSON.stringify(saved));
    }
  },

  unsaveJob: (jobId: string): void => {
    const saved = savedJobsService.getSavedJobs();
    const filtered = saved.filter(id => id !== jobId);
    localStorage.setItem(SAVED_JOBS_KEY, JSON.stringify(filtered));
  },

  isJobSaved: (jobId: string): boolean => {
    const saved = savedJobsService.getSavedJobs();
    return saved.includes(jobId);
  }
};
