import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, DollarSign, Building } from 'lucide-react';

export const JobCard = ({ job }) => {
  const formatDate = (date) => {
    return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
      Math.ceil((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24)),
      'day'
    );
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl mb-2">
              <Link 
                to={`/jobs/${job.id}`} 
                className="hover:text-primary transition-colors"
              >
                {job.title}
              </Link>
            </CardTitle>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Building className="h-4 w-4 mr-1" />
                {job.department}
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {job.location}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {formatDate(job.postedAt)}
              </div>
            </div>
          </div>
          <Badge variant={job.type === 'Full-time' ? 'default' : 'secondary'}>
            {job.type}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {job.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1 text-green-600" />
              <span>{job.salary || 'Competitive'}</span>
            </div>
            <Badge variant="outline">{job.experience}</Badge>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex w-full space-x-2">
          <Button asChild variant="outline" className="flex-1">
            <Link to={`/jobs/${job.id}`}>View Details</Link>
          </Button>
          <Button asChild className="flex-1">
            <Link to={`/jobs/${job.id}/apply`}>Apply Now</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
