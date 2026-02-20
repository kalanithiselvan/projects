import { Job, JobFilters } from '../types/job';
import { mockJobs } from '../data/mockJobs';

const DELAY = 300;

const simulateAPICall = <T,>(data: T): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), DELAY);
  });
};

export const jobService = {
  getAllJobs: async (): Promise<Job[]> => {
    return simulateAPICall(mockJobs);
  },

  getJobById: async (id: string): Promise<Job | undefined> => {
    const job = mockJobs.find(j => j.id === id);
    return simulateAPICall(job);
  },

  searchJobs: async (filters: JobFilters): Promise<Job[]> => {
    let filtered = [...mockJobs];

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchLower) ||
        job.company.toLowerCase().includes(searchLower) ||
        job.description.toLowerCase().includes(searchLower)
      );
    }

    if (filters.location) {
      filtered = filtered.filter(job =>
        job.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.category && filters.category !== 'all') {
      filtered = filtered.filter(job => job.category === filters.category);
    }

    if (filters.type && filters.type !== 'all') {
      filtered = filtered.filter(job => job.type === filters.type);
    }

    return simulateAPICall(filtered);
  },

  getCategories: (): string[] => {
    const categories = Array.from(new Set(mockJobs.map(job => job.category)));
    return categories.sort();
  },

  getLocations: (): string[] => {
    const locations = Array.from(new Set(mockJobs.map(job => job.location)));
    return locations.sort();
  }
};
