import { mapAsync } from './AsyncUtils'
import warning from './routerWarning'

function getComponentsForRoute(nextState, route, callback) {
  if (route.component || route.components) {
    callback(null, route.component || route.components)
    return
  }

  const getComponent = route.getComponent || route.getComponents
  if (getComponent) {
    // By assumption, location is a POJSO, and can be spread into the router
    // state. The merging means that we can't use deprecateObjectProperties.
    const { location } = nextState
    let nextStateWithLocation = { ...nextState, ...location }

    if (__DEV__) {
      if (typeof Proxy === 'function') {
        nextStateWithLocation = new Proxy(nextStateWithLocation, {
          get(target, name) {
            if (Object.prototype.hasOwnProperty.call(location, name)) {
              warning(false, 'Accessing location properties from the first argument to `getComponent` and `getComponents` is deprecated. That argument is now the router state rather than the location. To access the location, use `state.location`.')
            }
            return target[name]
          }
        })
      }
    }

    getComponent(nextStateWithLocation, callback)
    return
  }

  callback()
}

/**
 * Asynchronously fetches all components needed for the given router
 * state and calls callback(error, components) when finished.
 *
 * Note: This operation may finish synchronously if no routes have an
 * asynchronous getComponents method.
 */
function getComponents(nextState, callback) {
  mapAsync(nextState.routes, function (route, index, callback) {
    getComponentsForRoute(nextState, route, callback)
  }, callback)
}

export default getComponents
