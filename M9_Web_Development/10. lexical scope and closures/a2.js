function cachingFunction(complexCalculation) {
  // Modify this cache object and store data in the arg
  // also perform the complexCalculation on the arg
  window.cache = {};
  // Implement the closure-based caching mechanism here
  return function (arg) {
      if(window.cache.org){
          return window.cache.arg;
      }
      let ans=complexCalculation(arg);
      window.cache[arg]=ans;
      return ans;
  };
}

