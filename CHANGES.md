## [HEAD] \(v2.2.0\)
> Unreleased

- **Deprecation:** Deprecate nested routes with absolute paths ([6f40116])
- **Bugfix:** Stop matching extraneous slashes in paths ([#3158])
- **Minor:** Only warn once for deprecations ([4782842])

[HEAD]: https://github.com/taion/rrtr/compare/v2.1.1...HEAD
[6f40116]: https://github.com/taion/rrtr/commit/6f401169415da3e5b34eb93beb846468a0a369b2
[4782842]: https://github.com/taion/rrtr/commit/4782842802900dc0424fca341cfcaa3f2cf71eea
[#3158]: https://github.com/reactjs/react-router/pull/3158


## [v2.1.1]
> 2016-04-04

- **Minor:** Fix packaging error

[v2.1.1]: https://github.com/taion/rrtr/compare/v2.1.0...v2.1.1


## [v2.1.0]
> 2016-04-04

- **Feature:** Add support for `onChange` hook on routes ([#3108])
- **Minor:** Include full warning messages in non-minified UMD build ([#3213])
- **Minor:** Speed up path matching ([#3217])

[v2.1.0]: https://github.com/taion/rrtr/compare/v2.0.1...v2.1.0
[#3108]: https://github.com/reactjs/react-router/pull/3108
[#3213]: https://github.com/reactjs/react-router/pull/3213
[#3217]: https://github.com/reactjs/react-router/pull/3217


## [v2.0.1]
> March 9, 2016

- **Bugfix:** Call transition hooks on child routes of parents whose params
changed but the child's did not. ([#3166])
- **Minor:** Remove support for installing from source ([#3164])

[v2.0.1]: https://github.com/reactjs/react-router/compare/v2.0.0...v2.0.1
[#3164]: https://github.com/reactjs/react-router/pull/3164
[#3166]: https://github.com/reactjs/react-router/pull/3166

## [v2.0.0]
> Feb 10, 2016

- **Bugfix:** Add back basename support in `match` ([#3054])

[v2.0.0]: https://github.com/reactjs/react-router/compare/v2.0.0-rc6...v2.0.0
[#3054]: https://github.com/reactjs/react-router/pull/3054

## [v2.0.0-rc6]
> Feb 5, 2016

- **Breaking:** Removed default top-level `<Router>` export ([#2906])
- **Bugfix:** Use history.createLocation where possible ([#2910])
- **Bugfix:** Fix initial routing state after `match` ([#2965])
- **Minor:** Reduce stack size from matching routes ([#2923])

[v2.0.0-rc6]: https://github.com/reactjs/react-router/compare/v2.0.0-rc5...v2.0.0-rc6
[#2906]: https://github.com/reactjs/react-router/pull/2906
[#2910]: https://github.com/reactjs/react-router/pull/2910
[#2965]: https://github.com/reactjs/react-router/pull/2965
[#2923]: https://github.com/reactjs/react-router/pull/2923

## [v2.0.0-rc5]
> Jan 14, 2016

- **Feature:** Support custom `history` for `match` ([#2813])
- **Feature:** Support location descriptor in `replace` callback in `onEnter` ([#2855])
- **Feature:** Improve support for server rendering async routes ([#2883])

[v2.0.0-rc5]: https://github.com/reactjs/react-router/compare/v2.0.0-rc4...v2.0.0-rc5
[#2813]: https://github.com/reactjs/react-router/pull/2813
[#2855]: https://github.com/reactjs/react-router/pull/2855
[#2883]: https://github.com/reactjs/react-router/pull/2883

## [v2.0.0-rc4]
> Dec 30, 2015

- **Feature:** Added `render` prop to `Router`
- **Feature:** Added singleton `browserHistory` and `hashHistory`
- **Feature:** Added `createMemoryHistory`
- **Deprecation:** Deprecated all mixins
- **Deprecation:** Replaced `context.history` with `context.router`
- **Deprecation:** Deprecated Route Component `props.history`
- **Deprecation:** Deprecated `context.location`

[v2.0.0-rc4]: https://github.com/reactjs/react-router/compare/v1.0.3...v2.0.0-rc4

## [v1.0.3]
> Dec 23, 2015

- Switched back to a caret range for history, now that the warnings have been removed

[v1.0.3]: https://github.com/reactjs/react-router/compare/v1.0.2...v1.0.3

## [v1.0.2]
> Dec 8, 2015

- Pinned peer dependency on History to `1.13.x` to avoid console warnings.

[v1.0.2]: https://github.com/reactjs/react-router/compare/v1.0.1...v1.0.2

## [v1.0.1]
> Dec 5, 2015

- Support IE8 ([#2540])
- Add ES2015 module build ([#2530])

[v1.0.1]: https://github.com/reactjs/react-router/compare/v1.0.0...v1.0.1
[#2530]: https://github.com/reactjs/react-router/pull/2530
[#2540]: https://github.com/reactjs/react-router/pull/2540


## [v1.0.0]
> Nov 9, 2015

Please see `/upgrade-guides/v1.0.0.md`

[v1.0.0]: https://github.com/reactjs/react-router/compare/v0.13.5...v1.0.0
