export const THEMES = ['dark', 'light', 'gray'];
export const MUSIC = ['trance', 'pop', 'rock', 'chillout', 'off'];
export const DIFFICULTY = ['easy', 'normal', 'hard', 'nightmare'];

const selectSettings = function(sourceCollection, targetMap) {
  [...sourceCollection].forEach(item => targetMap.set(item[0], item[1]));
};

export default class Settings {
  constructor(...settings) {

    this.defaultSettings = new Map(
      [
        ['theme', THEMES[0]],
        ['music', MUSIC[0]],
        ['difficulty', DIFFICULTY[0]]
      ]
    );

    this.userSettings = new Map();
    selectSettings(settings, this.userSettings);
  }

  getCurrentSettings() {
    const currentSettings = new Map();
    selectSettings(this.defaultSettings, currentSettings);
    selectSettings(this.userSettings, currentSettings);

    return currentSettings;
  }
}
