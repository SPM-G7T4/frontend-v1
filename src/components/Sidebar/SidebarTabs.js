export const SidebarTabs = [
  {
    title: "Home",
    link: "/",
    permissions: {
      learner: true,
      admin: true,
      trainer: true,
    }
  },
  {
    title: "Courses",
    link: "/courses",
    permissions: {    
      learner: true,
      admin: true,
      trainer: false,
    }
  },
  // {
  //   title: "Schedule",
  //   link: "/schedule",
  //   permissions: {    
  //     learner: true,
  //     admin: true,
  //     trainer: true,
  //   }
  // },
  {
    title: "Enrolments",
    link: "/enrolments",
    permissions: {
      learner: false,
      admin: true,
      trainer: false,
    }
  },
  {
    title: "Learners",
    link: "/learners",
    permissions: {
      learner: false,
      admin: true,
      trainer: false,
    }
  },
  {
    title: "Classes",
    link: "/classes",
    permissions: {
      learner: true,
      admin: false,
      trainer: true,
    }
  },
  {
    title: "Quizzes",
    link: "/quizzes",
    permissions: {
      learner: false,
      admin: false,
      trainer: true,
    }
  },
  // {
  //   title: "Messages",
  //   link: "/messages",
  //    learner: true,
  // },
  // {
  //   title: "Badges",
  //   link: "/badges",
  //   learner: true,
  // },
];
