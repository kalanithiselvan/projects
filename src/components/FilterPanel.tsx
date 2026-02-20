import { MapPin, Briefcase, Layers } from 'lucide-react';

interface FilterPanelProps {
  location: string;
  category: string;
  type: string;
  onLocationChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  categories: string[];
  locations: string[];
}

export function FilterPanel({
  location,
  category,
  type,
  onLocationChange,
  onCategoryChange,
  onTypeChange,
  categories,
  locations
}: FilterPanelProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
      </div>

      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
          <MapPin className="w-4 h-4 mr-2" />
          Location
        </label>
        <select
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">All Locations</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
          <Layers className="w-4 h-4 mr-2" />
          Category
        </label>
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
          <Briefcase className="w-4 h-4 mr-2" />
          Job Type
        </label>
        <select
          value={type}
          onChange={(e) => onTypeChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      <button
        onClick={() => {
          onLocationChange('');
          onCategoryChange('all');
          onTypeChange('all');
        }}
        className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
      >
        Clear Filters
      </button>
    </div>
  );
}
