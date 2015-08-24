var vows = require('vows')
var assert = require('assert')
var parse = require('../../lib/interval/parse')
var _ = require('lodash')

function pluck (name, intervals) {
  return _.pluck(intervals.split(' ').map(parse), name)
}

vows.describe('Interval').addBatch({
  'invalid intervals': function () {
    assert.equal(parse('M1'), null)
    assert.equal(parse('P2'), null)
    assert.equal(parse('P0'), null)
    assert.equal(parse('C#3'), null)
  },
  'quality': function () {
    assert.deepEqual(pluck('quality', 'd1 P1 A1 d2 m2 M2 A2'),
      ['d', 'P', 'A', 'd', 'm', 'M', 'A'])
  },
  'direction': function () {
    assert.deepEqual(pluck('dir', 'P1 M2 m-2 P-8'), [1, 1, -1, -1])
  },
  'number': function () {
    assert.deepEqual(pluck('num', 'P1 M2 M3 P4 P5 M6 M7'), [1, 2, 3, 4, 5, 6, 7])
  },
  'generic': function () {
    assert.deepEqual(pluck('generic', 'P1 M2 M3 P4 P5 M6 M7'), [0, 1, 2, 3, 4, 5, 6])
    assert.deepEqual(pluck('generic', 'P8 M9 M10 P11 P12 M13 M14'), [0, 1, 2, 3, 4, 5, 6])
    assert.deepEqual(pluck('generic', 'P15 M16 M17 P18 P19 M20 M21'), [0, 1, 2, 3, 4, 5, 6])
  },
  'octaves': function () {
    assert.deepEqual(pluck('oct', 'P1 M2 M3 P4 P5 M6 M7 P8'),
      [0, 0, 0, 0, 0, 0, 0, 1])
    assert.deepEqual(pluck('oct', 'P1 M2 M3 P4 P-5 M-6 M-7'),
      [0, 0, 0, 0, 0, 0, 0])
    assert.deepEqual(pluck('oct', 'P-8 M-9 M-10 P-11 P12 M13 M14'),
      [1, 1, 1, 1, 1, 1, 1])
    assert.deepEqual(pluck('oct', 'P15 M16 M17 P18 P-19 M-20 M-21'),
      [2, 2, 2, 2, 2, 2, 2])
  },
  'perfectable': function () {
    assert.deepEqual(pluck('perfectable', 'P1 M2 M3 P4 P5 M6 M7'),
      [true, false, false, true, true, false, false])
    assert.deepEqual(pluck('perfectable', 'P8 M9 M10 P11 P12 M13 M14'),
      [true, false, false, true, true, false, false])
  },
  'alteration': function () {
    assert.deepEqual(pluck('alter', 'd1 m2 m3 d4 d5 m6 m7'),
      [-1, -1, -1, -1, -1, -1, -1])
    assert.deepEqual(pluck('alter', 'P1 M2 M3 P4 P5 M6 M7'),
      [0, 0, 0, 0, 0, 0, 0])
    assert.deepEqual(pluck('alter', 'A1 A2 A3 A4 A5 A6 A7'),
      [1, 1, 1, 1, 1, 1, 1])
    assert.deepEqual(pluck('alter', 'dddd4 ddd4 dd4 d4 P4 A4 AA4 AAA4 AAAA4'),
      [-4, -3, -2, -1, 0, 1, 2, 3, 4])
    assert.deepEqual(pluck('alter', 'dddd2 ddd2 dd2 d2 m2 M2 A2 AA2 AAA2 AAAA2'),
      [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4])
  },
  'semitones': function () {
    assert.deepEqual(pluck('semitones', 'P1 M2 M3 P4 P5 M6 M7 P8'),
      [0, 2, 4, 5, 7, 9, 11, 12])
    assert.deepEqual(pluck('semitones', 'd1 m2 m3 d4 d5 m6 m7'),
      [-1, 1, 3, 4, 6, 8, 10])
    assert.deepEqual(pluck('semitones', 'A1 A2 A3 A4 A5 A6 A7'),
      [1, 3, 5, 6, 8, 10, 12])
    // compound
    assert.deepEqual(pluck('semitones', 'P8 M9 M10 P11 P12 M13 M14 P15'),
      [12, 14, 16, 17, 19, 21, 23, 24])
    // descendent
    assert.deepEqual(pluck('semitones', 'P-1 M-2 M-3 P-4 P-5 M-6 M-7'),
      [0, -2, -4, -5, -7, -9, -11])
    assert.deepEqual(pluck('semitones', 'P-8 M-9 M-10 P-11 P-12 M-13 M-14 P-15'),
      [-12, -14, -16, -17, -19, -21, -23, -24])
  }
}).export(module)