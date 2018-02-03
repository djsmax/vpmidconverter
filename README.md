# VPMIDIConverter
VPMIDIConverter is a UserJS script, launched in Tampermonkey, which adds the function of converting MIDI files to the site [virtualpiano.net](https://virtualpiano.net).

### How to install
1. First, install the Tampermonkey extension in your browser. Links:
* for Opera (15+): [https://addons.opera.com/ru/extensions/details/tampermonkey-beta/?display=en](https://addons.opera.com/ru/extensions/details/tampermonkey-beta/?display=en)
* for Chrome: [https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ru](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ru)
* for Firefox: [https://addons.mozilla.org/ru/firefox/addon/tampermonkey/](https://addons.mozilla.org/ru/firefox/addon/tampermonkey/)

*Perhaps* the script will work in other browsers that support UserJS.

2. After successfully installing Tampermonkey, download the VirtualPiano MIDIPlayer.user.js file.
By the way, it's enough to open it in the browser: [Click here!](https://github.com/djsmax/vpmidconverter/raw/master/VirtualPiano%20MIDIPlayer.user.js)
3. At Tampermonkey's request to install the script, allow installation.
4. Restart (if you opened) or open a new tab with the site virtualpiano.net


### Usage

Now click on the MENU button, then to "Autoplay". There will be a small window "Sheets" under the piano. You will see a list of songs, and three orangled buttons: Play, Pause, and MIDI. The third one is exactly what we need! Clicking on it will open the window for selecting the MIDI file. After selecting the MIDI file, ready-made notes for the game will be displayed in a large field from the bottom.
* Unfortunately, the choice of a specific MIDI track is not yet implemented. Therefore, if the MIDI file has more than one track, the first one will be selected. I will soon fix this, but for now - make sure that the game you are playing is the first track in the MIDI file.
* You can even try pressing the "Play" button to start playing the newly converted melody. It's quite possible, but the whole melody will play without a pace, just one note after another, like a machine gun. If you want to play MIDI files correctly, the right way is [to use my other script](https://github.com/djsmax/vpmidiplayer), which is intended for this purpose.

### Bugs

* There is no MIDI track selection, the first one is always selected instead.
* As I already wrote above, there is an opportunity to play converted notes, but this is not a good idea.

By the way, any questions are welcome!

### Third-Party packages
* The library [midi-parser-js](https://github.com/colxi/midi-parser-js) is used for parsing MIDI files directly in the browser. Thanks colxi, only thanks to this library there is this script.