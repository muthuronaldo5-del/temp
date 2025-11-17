// Type definitions converted to JSDoc comments for JavaScript
// This file contains the data structure definitions for the ATS application

/*
 * Job interface
 * @typedef {Object} Job
 * @property {string} id
 * @property {string} title
 * @property {string} department
 * @property {string} location
 * @property {'Full-time' | 'Part-time' | 'Contract' | 'Internship'} type
 * @property {string} experience
 * @property {string} [salary]
 * @property {string} description
 * @property {string[]} requirements
 * @property {string[]} benefits
 * @property {Date} postedAt
 * @property {'Active' | 'Closed' | 'Draft'} status
 */

/*
 * JobApplication interface
 * @typedef {Object} JobApplication
 * @property {string} id
 * @property {string} jobId
 * @property {string} candidateId
 * @property {'Applied' | 'Screening' | 'Interview' | 'Shortlisted' | 'Offered' | 'Hired' | 'Rejected'} status
 * @property {Date} appliedAt
 * @property {string} [resume]
 * @property {string} [coverLetter]
 * @property {string} [notes]
 */

/*
 * Candidate interface
 * @typedef {Object} Candidate
 * @property {string} id
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 * @property {string} [phone]
 * @property {string} [linkedIn]
 * @property {string} [portfolio]
 * @property {string} experience
 * @property {string[]} skills
 * @property {string} [expectedSalary]
 * @property {string} [noticePeriod]
 */

/*
 * Interview interface
 * @typedef {Object} Interview
 * @property {string} id
 * @property {string} applicationId
 * @property {'Phone' | 'Video' | 'In-person' | 'Technical'} type
 * @property {Date} scheduledAt
 * @property {number} duration
 * @property {string} interviewer
 * @property {'Scheduled' | 'Completed' | 'Cancelled' | 'Rescheduled'} status
 * @property {string} [feedback]
 * @property {number} [rating]
 */

/*
 * Offer interface
 * @typedef {Object} Offer
 * @property {string} id
 * @property {string} applicationId
 * @property {string} position
 * @property {number} salary
 * @property {Date} startDate
 * @property {string[]} benefits
 * @property {'Pending' | 'Accepted' | 'Rejected' | 'Withdrawn'} status
 * @property {Date} sentAt
 * @property {Date} responseDeadline
 */

// Exported for reference
export const ATS_TYPES = {
  Job: 'Job',
  JobApplication: 'JobApplication',
  Candidate: 'Candidate',
  Interview: 'Interview',
  Offer: 'Offer'
};
