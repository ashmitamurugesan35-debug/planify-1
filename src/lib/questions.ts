
export type Question = {
  id: string;
  question: string;
  type: 'text' | 'email' | 'number' | 'textarea';
};

type QuestionSet = {
  [key: string]: {
    [key: string]: Question[];
  };
};

export const questions: QuestionSet = {
  academics: {
    student: [
      { id: 'classInfo', question: 'What is your Class/Year/Semester?', type: 'text' },
      { id: 'subjects', question: 'List your subjects (comma-separated).', type: 'textarea' },
      { id: 'hoursPerSubject', question: 'How many hours do you need per subject per week?', type: 'text' },
      { id: 'studyTime', question: 'What is your preferred study time? (e.g., morning, afternoon, night)', type: 'text' },
      { id: 'availability', question: 'What are your available days and time slots?', type: 'textarea' },
      { id: 'breakPreferences', question: 'What are your break preferences? (e.g., 15 mins every hour)', type: 'text' },
      { id: 'prioritySubjects', question: 'List your priority subjects (high/medium/low).', type: 'textarea' },
      { id: 'deadlines', question: 'Any upcoming exams or deadlines?', type: 'text' },
      { id: 'routines', question: 'Describe your other routines (sleep, meals, commute, gym, etc.).', type: 'textarea' },
    ],
    teacher: [
      { id: 'subjects', question: 'What subjects do you teach? (comma-separated)', type: 'textarea' },
      { id: 'weeklyClasses', question: 'Number of weekly classes per subject?', type: 'text' },
      { id: 'classNames', question: 'What are the Class/Section names? (e.g., 10A, 10B)', type: 'text' },
      { id: 'availability', question: 'What are your available days and time slots?', type: 'textarea' },
      { id: 'teachingHours', question: 'What are your preferred teaching hours?', type: 'text' },
      { id: 'restrictedHours', question: 'Any restricted hours? (meetings, duties, breaks)', type: 'text' },
      { id: 'maxClassesPerDay', question: 'What is the maximum number of classes you can take per day?', type: 'number' },
      { id: 'minGap', question: 'What is the minimum gap you need between classes?', type: 'text' },
      { id: 'specialSessions', question: 'Any special sessions? (lab/practical/extra classes)', type: 'text' },
    ],
  },
};
