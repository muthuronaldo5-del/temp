export const mockJobs = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    experience: '5+ years',
    salary: '$120,000 - $150,000',
    description: 'We are looking for an experienced Frontend Developer to join our engineering team...',
    requirements: [
      'Bachelor\'s degree in Computer Science or equivalent',
      '5+ years of React.js experience',
      'Strong knowledge of TypeScript',
      'Experience with modern build tools',
      'Understanding of responsive design'
    ],
    benefits: [
      'Health, dental, and vision insurance',
      'Flexible working hours',
      'Remote work options',
      '401(k) matching',
      'Professional development budget'
    ],
    postedAt: new Date('2024-01-15'),
    status: 'Active'
  },
  {
    id: '2',
    title: 'Product Manager',
    department: 'Product',
    location: 'New York, NY',
    type: 'Full-time',
    experience: '3+ years',
    salary: '$100,000 - $130,000',
    description: 'Join our product team to drive product strategy and execution...',
    requirements: [
      'Bachelor\'s degree in Business, Engineering, or related field',
      '3+ years of product management experience',
      'Strong analytical and problem-solving skills',
      'Experience with agile methodologies',
      'Excellent communication skills'
    ],
    benefits: [
      'Comprehensive health coverage',
      'Stock options',
      'Unlimited PTO',
      'Learning and development opportunities'
    ],
    postedAt: new Date('2024-01-20'),
    status: 'Active'
  },
  {
    id: '3',
    title: 'UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    experience: '2+ years',
    salary: '$80,000 - $100,000',
    description: 'We\'re seeking a talented UX Designer to create intuitive user experiences...',
    requirements: [
      'Bachelor\'s degree in Design or related field',
      '2+ years of UX design experience',
      'Proficiency in Figma and design systems',
      'Strong portfolio demonstrating user-centered design',
      'Experience with user research and testing'
    ],
    benefits: [
      'Remote-first culture',
      'Health and wellness stipend',
      'Equipment allowance',
      'Conference and training budget'
    ],
    postedAt: new Date('2024-01-18'),
    status: 'Active'
  }
];

export const mockCandidates = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phone: '+1-555-0123',
    linkedIn: 'linkedin.com/in/johndoe',
    portfolio: 'johndoe.dev',
    experience: '6 years',
    skills: ['React', 'TypeScript', 'Node.js', 'AWS'],
    expectedSalary: '$140,000',
    noticePeriod: '2 weeks'
  },
  {
    id: '2',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1-555-0124',
    linkedIn: 'linkedin.com/in/sarahjohnson',
    experience: '4 years',
    skills: ['Product Strategy', 'Analytics', 'Agile', 'User Research'],
    expectedSalary: '$115,000',
    noticePeriod: '3 weeks'
  },
  {
    id: '3',
    firstName: 'Emily',
    lastName: 'Chen',
    email: 'emily.chen@email.com',
    phone: '+1-555-0125',
    portfolio: 'emilychen.design',
    experience: '3 years',
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
    expectedSalary: '$90,000',
    noticePeriod: '2 weeks'
  }
];

export const mockApplications = [
  {
    id: '1',
    jobId: '1',
    candidateId: '1',
    status: 'Shortlisted',
    appliedAt: new Date('2024-01-22'),
    notes: 'Strong technical background, good culture fit'
  },
  {
    id: '2',
    jobId: '2',
    candidateId: '2',
    status: 'Interview',
    appliedAt: new Date('2024-01-21'),
    notes: 'Excellent product management experience'
  },
  {
    id: '3',
    jobId: '3',
    candidateId: '3',
    status: 'Applied',
    appliedAt: new Date('2024-01-23')
  }
];

export const mockInterviews = [
  {
    id: '1',
    applicationId: '1',
    type: 'Technical',
    scheduledAt: new Date('2024-01-25T14:00:00'),
    duration: 60,
    interviewer: 'Tech Lead',
    status: 'Scheduled',
    rating: 4
  },
  {
    id: '2',
    applicationId: '2',
    type: 'Video',
    scheduledAt: new Date('2024-01-24T10:00:00'),
    duration: 45,
    interviewer: 'Product Director',
    status: 'Completed',
    feedback: 'Strong candidate with relevant experience',
    rating: 5
  }
];

export const mockOffers = [
  {
    id: '1',
    applicationId: '2',
    position: 'Product Manager',
    salary: 115000,
    startDate: new Date('2024-02-15'),
    benefits: ['Health Insurance', 'Stock Options', 'Unlimited PTO'],
    status: 'Pending',
    sentAt: new Date('2024-01-24'),
    responseDeadline: new Date('2024-02-01')
  }
];
