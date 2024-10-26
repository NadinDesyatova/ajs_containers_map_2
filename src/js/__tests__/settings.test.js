import Settings, {MUSIC, DIFFICULTY} from "../settings";


test('should return correct settings', () => {
  const currentSettings = new Settings(['music', MUSIC[3]], ['difficulty', DIFFICULTY[1]]);
  const settingsMap = currentSettings.getCurrentSettings();
  const result = [...settingsMap];
  const expected = [
    ['theme', 'dark'], 
    ['music', 'chillout'], 
    ['difficulty','normal']
  ];

  expect(result).toEqual(expected);
});
