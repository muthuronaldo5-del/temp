import { useState } from 'react';
import { ATSHeader } from '../components/layout/ATSHeader';
import { card,caerdContent,cardHeader,cardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { mockApplications, mockJobs, mockCandidates, mockInterviews, mockOffers } from '../data/mockData';
import { Search, Calendar, FileText, CheckCircle, XCircle, Clock } from 'lucide-react';

const ApplicationsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const getJobTitle = (jobId) => {
    return mockJobs.find(job => job.id === jobId)?.title || 'Unknown Position';
  };

  const getCandidate = (candidateId) => {
    return mockCandidates.find(candidate => candidate.id === candidateId);
  };

  const getInterview = (applicationId) => {
    return mockInterviews.find(interview => interview.applicationId === applicationId);
  };

  const getOffer = (applicationId) => {
    return mockOffers.find(offer => offer.applicationId === applicationId);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Hired': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'Rejected': return <XCircle className="h-4 w-4 text-red-600" />;
      case 'Interview': return <Calendar className="h-4 w-4 text-blue-600" />;
      case 'Offered': return <FileText className="h-4 w-4 text-purple-600" />;
      default: return <Clock className="h-4 w-4 text-yellow-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Applied': return 'bg-blue-100 text-blue-800';
      case 'Screening': return 'bg-yellow-100 text-yellow-800';
      case 'Interview': return 'bg-purple-100 text-purple-800';
      case 'Shortlisted': return 'bg-green-100 text-green-800';
      case 'Offered': return 'bg-indigo-100 text-indigo-800';
      case 'Hired': return 'bg-emerald-100 text-emerald-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredApplications = mockApplications.filter(application => {
    const candidate = getCandidate(application.candidateId);
    const jobTitle = getJobTitle(application.jobId);
    
    const matchesSearch = candidate ? 
      `${candidate.firstName} ${candidate.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) : false;

    if (activeTab === 'all') return matchesSearch;
    return matchesSearch && application.status.toLowerCase() === activeTab;
  });

  const applicationStats = {
    all: mockApplications.length,
    applied: mockApplications.filter(app => app.status === 'Applied').length,
    screening: mockApplications.filter(app => app.status === 'Screening').length,
    interview: mockApplications.filter(app => app.status === 'Interview').length,
    shortlisted: mockApplications.filter(app => app.status === 'Shortlisted').length,
    offered: mockApplications.filter(app => app.status === 'Offered').length,
  };

  return (
    <div className="min-h-screen bg-background">
      <ATSHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Applications</h1>
          <p className="text-muted-foreground">
            Track and manage all job applications
          </p>
        </div>

        {/* Search */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by candidate name or position..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="all">All ({applicationStats.all})</TabsTrigger>
            <TabsTrigger value="applied">Applied ({applicationStats.applied})</TabsTrigger>
            <TabsTrigger value="screening">Screening ({applicationStats.screening})</TabsTrigger>
            <TabsTrigger value="interview">Interview ({applicationStats.interview})</TabsTrigger>
            <TabsTrigger value="shortlisted">Shortlisted ({applicationStats.shortlisted})</TabsTrigger>
            <TabsTrigger value="offered">Offered ({applicationStats.offered})</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            <div className="space-y-4">
              {filteredApplications.map((application) => {
                const candidate = getCandidate(application.candidateId);
                const jobTitle = getJobTitle(application.jobId);
                const interview = getInterview(application.id);
                const offer = getOffer(application.id);

                if (!candidate) return null;

                return (
                  <Card key={application.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <Avatar>
                            <AvatarFallback>
                              {candidate.firstName[0]}{candidate.lastName[0]}
                            </AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="text-lg font-semibold">
                                {candidate.firstName} {candidate.lastName}
                              </h3>
                              {getStatusIcon(application.status)}
                            </div>
                            
                            <p className="text-sm text-muted-foreground mb-2">
                              Applied for: <span className="font-medium">{jobTitle}</span>
                            </p>
                            
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                              <span>Applied: {application.appliedAt.toLocaleDateString()}</span>
                              <span>Experience: {candidate.experience}</span>
                              <span>Expected: {candidate.expectedSalary || 'Not specified'}</span>
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-1 mb-3">
                              {candidate.skills.slice(0, 4).map((skill) => (
                                <Badge key={skill} variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>

                            {/* Interview/Offer Info */}
                            {interview && (
                              <div className="bg-blue-50 border border-blue-200 rounded p-2 mb-2">
                                <p className="text-xs text-blue-800">
                                  <Calendar className="h-3 w-3 inline mr-1" />
                                  {interview.type} Interview: {interview.scheduledAt.toLocaleDateString()} at {interview.scheduledAt.toLocaleTimeString()}
                                </p>
                              </div>
                            )}

                            {offer && (
                              <div className="bg-purple-50 border border-purple-200 rounded p-2 mb-2">
                                <p className="text-xs text-purple-800">
                                  <FileText className="h-3 w-3 inline mr-1" />
                                  Offer sent: ${offer.salary.toLocaleString()} - Response due {offer.responseDeadline.toLocaleDateString()}
                                </p>
                              </div>
                            )}

                            {application.notes && (
                              <p className="text-sm text-muted-foreground italic">
                                "{application.notes}"
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Badge className={getStatusColor(application.status)}>
                            {application.status}
                          </Badge>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex justify-end space-x-2 mt-4 pt-4 border-t">
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                        <Button size="sm" variant="outline">
                          Schedule Interview
                        </Button>
                        <Button size="sm">
                          Update Status
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        {filteredApplications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No applications found matching your criteria.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default ApplicationsPage;
