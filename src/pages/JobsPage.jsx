import { useState } from 'react';
import { ATSHeader } from '@/components/layout/ATSHeader';
import { JobCard } from '@/components/jobs/JobCard';
import { JobFilters } from '@/components/jobs/JobFilters';
import { mockJobs } from '@/data/mockData';

const JobsPage = () => {
  const [filteredJobs, setFilteredJobs] = useState(mockJobs);

  const handleFilterChange = (filters) => {
    let filtered = mockJobs;

    if (filters.search) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.description.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.department) {
      filtered = filtered.filter(job => job.department === filters.department);
    }

    if (filters.location) {
      filtered = filtered.filter(job => job.location.includes(filters.location));
    }

    if (filters.type) {
      filtered = filtered.filter(job => job.type === filters.type);
    }

    setFilteredJobs(filtered);
  };

  return (
    <div className="min-h-screen bg-background">
      <ATSHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Available Positions</h1>
          <p className="text-muted-foreground">
            Join our team and help us build the future
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <JobFilters onFilterChange={handleFilterChange} />
          </div>

          {/* Job Listings */}
          <div className="lg:col-span-3">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                {filteredJobs.length} position{filteredJobs.length !== 1 ? 's' : ''} found
              </p>
            </div>

            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No positions found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobsPage;
