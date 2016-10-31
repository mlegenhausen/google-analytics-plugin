function proxy(method) {
  return function (success, error, args) {
    console.debug('UniversalAnalytics', method, args);
    setTimeout(success, 0);
  };
}

module.exports = {
  startTrackerWithId: proxy('startTrackerWithId'),
  setAllowIDFACollection: proxy('setAllowIDFACollection'),
  setUserId: proxy('setUserId'),
  setAnonymizeIp: proxy('setAnonymizeIp'),
  setOptOut: proxy('setOptOut'),
  setAppVersion: proxy('setAppVersion'),
  debugMode: proxy('debugMode'),
  trackMetric: proxy('trackMetric'),
  trackView: proxy('trackView'),
  addCustomDimension: proxy('addCustomDimension'),
  trackEvent: proxy('trackEvent'),
  trackException: proxy('trackException'),
  trackTiming: proxy('trackTiming'),
  addTransaction: proxy('addTransaction'),
  addTransactionItem: proxy('addTransactionItem'),
  enableUncaughtExceptionReporting: proxy('enableUncaughtExceptionReporting')
};

require('cordova/exec/proxy').add('UniversalAnalytics', module.exports);
