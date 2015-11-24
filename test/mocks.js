/* global sinon */

global.AccountsEmail = {
};

global.Accounts = {
  createUser: sinon.stub(),
  emailTemplates: {
    siteName: '',
    from: '',
    enrollAccount: {
      subject: sinon.stub(),
      text: sinon.stub(),
      html: sinon.stub(),
    },
  },
  onCreateUser: sinon.stub(),
  onEnrollmentLink: sinon.stub(),
  sendEnrollmentEmail: sinon.stub(),
  ui: {
    config: sinon.stub(),
  },
};

global.Computation = {
  stop: sinon.spy(),
};

global.Meteor = {
  call: sinon.stub(),
  loggingIn: sinon.stub().returns(true),
  loginWithGoogle: sinon.stub().callsArg(0),
  loginWithFacebook: sinon.stub().callsArg(0),
  loginWithPassword: sinon.stub().callsArg(2),
  forgotPassword: sinon.stub().callsArg(1),
  logout: sinon.stub().callsArg(0),
  methods: sinon.stub(),
  publish: sinon.stub(),
  startup: sinon.stub(),
  subscribe: sinon.stub(),
  users: {
    allow: sinon.stub(),
    deny: sinon.stub(),
  },
  userId: sinon.stub().returns('userId'),
  user: sinon.stub(),
  Error: sinon.stub().returns(new Error()),
  settings: {
    applicationName: 'Ma nutrition',
    applicationEmail: 'Ma nutrition <no-reply@mail.coaching-nutrition.fr>',
  },
};

global.Mongo = {
  Collection: () => ({
    allow: sinon.stub(),
    deny: sinon.stub(),
    find: sinon.stub().returns({
      fetch: sinon.stub().returns([]),
    }),
    helpers: sinon.stub(),
    insert: sinon.stub(),
  }),
};

global.ReactMeteorData = {

};

global.Tracker = {
  autorun: () => {},
  currentComputation: { stopped: false },
};

global.TrackerStub = sinon.stub(global.Tracker, 'autorun', (callback) => {
  callback();
  return global.Computation;
});
