import expect from 'expect'
import { formatPattern } from '../PatternUtils'

describe('formatPattern', function () {
  describe('when a pattern does not have dynamic segments', function () {
    const pattern = '/a/b/c'

    it('returns the pattern', function () {
      expect(formatPattern(pattern, {})).toEqual(pattern)
    })
  })

  describe('when a pattern has dynamic segments', function () {
    const pattern = '/comments/:id/edit'

    describe('and a param is missing', function () {
      it('throws an Error', function () {
        expect(() => formatPattern(pattern, {})).toThrow(Error)
      })
    })

    describe('and a param is optional', function () {
      const pattern = '/comments/:id?/edit'

      it('returns the correct path when param is supplied', function () {
        expect(formatPattern(pattern, { id:'123' })).toEqual('/comments/123/edit')
      })

      it('returns the correct path when param is not supplied', function () {
        expect(formatPattern(pattern, {})).toEqual('/comments/edit')
      })
    })

    describe('and all params are present', function () {
      it('returns the correct path', function () {
        expect(formatPattern(pattern, { id: 'abc' })).toEqual('/comments/abc/edit')
      })

      it('returns the correct path when the value is 0', function () {
        expect(formatPattern(pattern, { id: 0 })).toEqual('/comments/0/edit')
      })
    })

    describe('and some params have special URL encoding', function () {
      it('returns the correct path', function () {
        expect(formatPattern(pattern, { id: 'one, two' })).toEqual('/comments/one%2C%20two/edit')
      })
    })

    describe('and a param has a forward slash', function () {
      it('preserves the forward slash', function () {
        expect(formatPattern(pattern, { id: 'the/id' })).toEqual('/comments/the%2Fid/edit')
      })
    })

    describe('and some params contain dots', function () {
      it('returns the correct path', function () {
        expect(formatPattern(pattern, { id: 'alt.black.helicopter' })).toEqual('/comments/alt.black.helicopter/edit')
      })
    })

    describe('and some params contain special characters', function () {
      it('returns the correct path', function () {
        expect(formatPattern(pattern, { id: '?not=confused&with=query#string' })).toEqual('/comments/%3Fnot%3Dconfused%26with%3Dquery%23string/edit')
      })
    })
  })

  describe('when a pattern has one splat', function () {
    it('returns the correct path', function () {
      expect(formatPattern('/a/*/d', { 0: 'b/c' })).toEqual('/a/b%2Fc/d')
    })
  })

  describe('when a pattern has multiple splats', function () {
    it('returns the correct path', function () {
      expect(formatPattern('/a/*/c/*', { 0: 'b', 1: 'd' })).toEqual('/a/b/c/d')
      expect(formatPattern('/a/*/d', { 0: 'b/c/d' })).toEqual('/a/b%2Fc%2Fd/d')
      expect(formatPattern('/a/*/d/*', { 0: 'b/c/d', 1: 'e' })).toEqual('/a/b%2Fc%2Fd/d/e')
    })

    it('complains if not given enough splat values', function () {
      expect(() => formatPattern('/a/*/c/*', { 0: 'b' })).toThrow(Error)
      expect(() => formatPattern('/a/*/d/*', { 0: 'b/c/d' })).toThrow(Error)
    })
  })

  describe('when a pattern has dots', function () {
    it('returns the correct path', function () {
      expect(formatPattern('/foo.bar.baz')).toEqual('/foo.bar.baz')
    })
  })

  describe('when a pattern has regexes for params', function () {
    it('returns the correct path', function () {
      expect(formatPattern('/:int(\\d+)', { int: '42' })).toEqual('/42')
    })

    it('complains if param does not match regex', function () {
      expect(() => formatPattern('/:int(\\d+)', { int: 'foo' })).toThrow(Error)
    })
  })
})
