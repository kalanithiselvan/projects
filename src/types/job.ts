export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  postedDate: string;
  category: string;
  experience: string;
  logo: string;
}

export interface JobFilters {
  search: string;
  location: string;
  category: string;
  type: string;
}
