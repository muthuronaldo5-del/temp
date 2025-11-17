import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, X } from 'lucide-react';

export const JobFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    search: '',
    department: '',
    location: '',
    type: ''
  });

  const departments = ['Engineering', 'Product', 'Design', 'Marketing', 'Sales'];
  const locations = ['San Francisco', 'New York', 'Remote', 'London'];
  const types = ['Full-time', 'Part-time', 'Contract', 'Internship'];

  const updateFilter = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      search: '',
      department: '',
      location: '',
      type: ''
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Filters</CardTitle>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-xs"
            >
              <X className="h-3 w-3 mr-1" />
              Clear
            </Button>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Search */}
        <div>
          <label className="text-sm font-medium mb-2 block">Search</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Job title or keywords..."
              value={filters.search}
              onChange={(e) => updateFilter('search', e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Department */}
        <div>
          <label className="text-sm font-medium mb-2 block">Department</label>
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <Badge
                key={dept}
                variant={filters.department === dept ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => updateFilter('department', filters.department === dept ? '' : dept)}
              >
                {dept}
              </Badge>
            ))}
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="text-sm font-medium mb-2 block">Location</label>
          <div className="flex flex-wrap gap-2">
            {locations.map((loc) => (
              <Badge
                key={loc}
                variant={filters.location === loc ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => updateFilter('location', filters.location === loc ? '' : loc)}
              >
                {loc}
              </Badge>
            ))}
          </div>
        </div>

        {/* Job Type */}
        <div>
          <label className="text-sm font-medium mb-2 block">Job Type</label>
          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <Badge
                key={type}
                variant={filters.type === type ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => updateFilter('type', filters.type === type ? '' : type)}
              >
                {type}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
