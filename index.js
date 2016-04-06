'use strict';
const Fs = require('fs');
const Watson = require('watson-developer-cloud');

const speechToText = Watson.speech_to_text({
  username: process.env.USER,
  password: process.env.PASS,
  version: 'v1'
});

const params = {
  audio: Fs.createReadStream('./hello-watson.wav'),
  content_type: 'audio/l16; rate=44100'
};

speechToText.recognize(params, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(res, null, 2));
  }
});
