import { useState, useEffect } from 'react';
import { ArrowLeft, MapPin, DollarSign, Briefcase, Clock, Building, Bookmark, BookmarkCheck } from 'lucide-react';
import { Job } from '../types/job';
import { jobService } from '../services/jobService';
import { LoadingSpinner } from '../components/LoadingSpinner';

interface JobDetailsProps {
  jobId: string;
  onBack: () => void;
  isSaved: boolean;
  onSaveToggle: (jobId: string) => void;
}

export function JobDetails({ jobId, onBack, isSaved, onSaveToggle }: JobDetailsProps) {
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadJob();
  }, [jobId]);

  const loadJob = async () => {
    setLoading(true);
    const result = await jobService.getJobById(jobId);
    setJob(result || null);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <LoadingSpinner />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-lg mb-4">Job not found</p>
          <button
            onClick={onBack}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Back to Jobs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Jobs
        </button>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-8 border-b border-gray-200">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start gap-4">
                <div className="text-5xl">{job.logo}</div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {job.title}
                  </h1>
                  <div className="flex items-center gap-2 text-xl text-gray-700">
                    <Building className="w-5 h-5" />
                    {job.company}
                  </div>
                </div>
              </div>
              <button
                onClick={() => onSaveToggle(job.id)}
                className="p-3 hover:bg-gray-100 rounded-full transition-colors"
                aria-label={isSaved ? 'Unsave job' : 'Save job'}
              >
                {isSaved ? (
                  <BookmarkCheck className="w-6 h-6 text-blue-600 fill-blue-600" />
                ) : (
                  <Bookmark className="w-6 h-6 text-gray-400 hover:text-blue-600" />
                )}
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-sm">{job.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Briefcase className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-sm">{job.type}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <DollarSign className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-sm">{job.salary}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-sm">
                  Posted {new Date(job.postedDate).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                {job.category}
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                {job.experience}
              </span>
            </div>
          </div>

          <div className="p-8 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Job Description
              </h2>
              <p className="text-gray-700 leading-relaxed">{job.description}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Requirements
              </h2>
              <ul className="space-y-2">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Responsibilities
              </h2>
              <ul className="space-y-2">
                {job.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{resp}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Benefits
              </h2>
              <ul className="space-y-2">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="pt-6 border-t border-gray-200">
              <button className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
