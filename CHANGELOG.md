# Changelog

## 0.69 [MASTER]

`tonal`
- Tonal now exports `pcset` module

`tonal-key`
- Simplified API: removed `asKey`, `fromName`. All returned keys are strings instead of arrays.
- `names` renamed to `modes`
- New functions: `isKeyName`

`tonal-pitchset`
- All functions moved to `tonal-pcset`

`tonal-pcset`
- The old `pitchset` module was renamed to `pcset` that is more accurate

`tonal-notation`
- TODO: new `accType` function (return the accidentals type: flats, sharps, none)

`tonal-note`
- add `name` as an alias for `note`

`tonal-dictionary`
- Simplified API and code: `dictionary` and `detector`

`tonal-scale`
- add `parse` function
- the `notes` function requires a tonic and returns pitch classes
- add `intervals`, `isKnowScale` functions

`tonal-chords`
- add `intervals`, `isKnowChord` functions

`tonal-pcset-dft`
- New module (see README)


## 0.68

`tonal-array`
- new `permutations` function

`tonal-transposer`
- new `intervallic` function

`tonal-scale`
- rename `get` to `notes`
- rename `build` to `get`

`tonal-chord`
- rename `build` to `get`
- rename `get` to `notes` and now it accepts a list of notes
- parse now returns an object with type and tonic instead of an array
- new `inversion` and `position` functions

`tonal-pitchset`
- rename `rotations` to `chromaModes`
- remove `withTonic` function

`tonal-dictionary`
- fix a bug with dictionary detection

## 0.67

`tonal-chord`
- `detect` now returns the chord string

`tonal-scale`
- new `detect` function

`tonal-dictionary`
- `dectector` function extracted from `tonal-chord`

`tonal-freq`
- rename `toEqualTemp` to `eqTempFreq`, and now accepts a maximum number of decimals
- rename `fromEqualTemp` to `eqTempToMidi` and now accepts a maximum number of decimals
- cents now returns an integer value (instead of a float)


`tonal-note`
- bug fix: note.midi is correctly exported

`tonal-pitchset`
- new `notes` function
- rename `fromBinary` to `fromChroma`

## 0.66.0

`tonal-note`
- Add `fromProps` function
- Add `pcFifths` function
- Rename `toNote` to `note`

`tonal-interval`
- Add `fromProps` function

`tonal-midi`
- Rename `toNote` to `note`

`tonal-freq`
- Rename `toNote` to `note` and now accepts 'useSharps' parameter

`tonal-progression`
- The parseRomanChord now returns an object with { type: <chord type>, root: <interval from key root> }. Before 'type' was 'name' and root was a pitch.

## 0.65.0

`tonal-note`
- Expose note properties: props, oct, alt, step

`tonal-array`
- sort: change order of parameters to make it more JS friendly

`tonal-pitchset`
- rename `toBinary` to `chroma`

## 0.64.1

`tonal-chord`
- new function `detect`: given a list of notes, return the possible chords

`tonal-pitchset`
- add functions: isBinary, rotations, fromBinary


## 0.64.0

`tonal-array`
- `listFn` function is now private (to be removed)
- Move harmonizer, harmonize and harmonics to tonal-harmonizer

`tonal-harmonizer`
- New module with: harmonizer, harmonize, harmonics

`tonal-progression`
- rename build to concrete
- add abstract function to convert from chords to roman numerals

`tonal-interval`
- add props, num, value and alt functions

`tonal-notation`
- toAcc returns an empty array when is called without a number

## 0.63.1

`tonal-note`
- Add note.freq

## 0.63.0

`tonal-pitchset`
- Add includes
- Add filter

`tonal-array`
- Remove cMap

`tonal-filter`
- Deprecated

## 0.62.0

`tonal-pitchset`
- Add toBinary, equal, subset and superset functions

`tonal-note`
- add note.midi and note.fromMidi

`tonal-midi`
- Rename fromNote to toMidi
- Remove isValidNote

`tonal-freq`
- Rename fromFreq a toNote
- Rename midiFromFreq a toMidi (and now it can return float numbers)

## 0.61.0

__Now packages are namespaced inside tonal. Instead of `tonal.invert` now we have to write `tonal.ivl.invert`__

`tonal`
- Big breaking change: the packages are now namespaced! So instead of `tonal.pc` you need to write `tonal.note.pc`
- Add scale, chord, notation, progression, sonority.

`tonal-note`
- Rename simpleEnh to simplify
- Remove enh alias
- rename noteName to toNote

`tonal-interval`
- Rename ivlName to toInterval

`tonal-midi`
- rename `toMidi` to `fromNote`
- rename `fromMidi` to `toNote`
- remove `fromMidiS`, instead use an optional parameter in `toNote`
- rename `isMidiNum` to `isValidNote`

`tonal-range`
- rename `range` to `numeric`
- rename `cycleOfFifths` to `fifths`
- rename `scaleRange` to `pitchSet`
- add sharps option to `chromatic`

`tonal-distance`
- rename `distance` to `interval`
- return `distInSemitones` to `semitones`

`tonal-filter`
- TODO: needs some thinking about API

`tonal-dictionary`
- rename `fromName` to `get`
- rename `names` to `keys`

`tonal-transpose`
- remove `tr` function alias (use `transpose`)
