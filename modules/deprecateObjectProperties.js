import warning from './routerWarning'

// No-op by default.
let deprecateObjectProperties = object => object

if (__DEV__) {
  if (typeof Proxy === 'function') {
    deprecateObjectProperties = (object, message) => {
      return new Proxy(object, {
        get(target, name) {
          // Only warn for own properties to avoid false positives.
          if (Object.prototype.hasOwnProperty.call(target, name)) {
            warning(false, message)
          }

          return target[name]
        },

        ownKeys: () => []
      })
    }
  }
}

// wraps an object in a membrane to warn about deprecated property access
export default deprecateObjectProperties
