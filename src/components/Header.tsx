import { Briefcase, Bookmark } from 'lucide-react';

interface HeaderProps {
  currentPage: 'jobs' | 'saved';
  onNavigate: (page: 'jobs' | 'saved') => void;
  savedCount: number;
}

export function Header({ currentPage, onNavigate, savedCount }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">JobPortal</h1>
          </div>

          <nav className="flex gap-2">
            <button
              onClick={() => onNavigate('jobs')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === 'jobs'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              All Jobs
            </button>
            <button
              onClick={() => onNavigate('saved')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                currentPage === 'saved'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Bookmark className="w-4 h-4" />
              Saved Jobs
              {savedCount > 0 && (
                <span className="px-2 py-0.5 bg-blue-500 text-white text-xs font-bold rounded-full">
                  {savedCount}
                </span>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
