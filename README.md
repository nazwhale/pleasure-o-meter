# pleasure-o-meter 😊
A simple UI, rendered on real-time data and made entirely in vanilla JavaScript (with the exceptions of [Pusher](https://github.com/pusher/pusher-js) for getting real-time data and [Jasmine](https://jasmine.github.io/) for testing).

### Installation and Use

First, clone the repo and navigate to the correct directory:

```
$ git clone git@github.com:nazwhale/pleasure-o-meter.git
$ cd pleasure-o-meter
```

Then, run `open index.html` to see the pleasure-o-meter in action.

Finally, if you'd like to run the tests, `open SpecRunner.html`

### Approach

I first read through the documentation for Pusher's JavaScript client and set upon getting an event listener working. I subscribed my Pusher instance to the `office` channel and then binded it to the `state` event. To test things were working correctly, I began logging data to the console.

After, I used that data to update the relevant HTML elements. That allowed me to adapt my program to render emojis based on scores, instead of the integers of the scores themselves.

Finally I worked on highlighting an HTML element on selection and displaying the relevant emoji in a larger font-size. I got this working, but then realised that the large emoji wasn't updating in real time. To fix this I created an `updateLargeEmoji` function to be called every time Pusher gets data from the event.

Regarding my styling, I opted for a minimal approach and used flexbox to display my Pusher office area list alongside my large emoji.

For my colourscheme, I used the [Eye Dropper](https://chrome.google.com/webstore/detail/eye-dropper/hmdcmlfkchdmnmnmheododdhjedfccka?hl=en) Chrome extension tool to pick my background shade of green from Pusher's own website. I then used [Adobe Color](https://color.adobe.com/) to identify harmonious colours for my font and highlighting.

### Future ideas
- Display a constantly updating graph displaying the last 10 values for each room as different coloured lines.
- Ask the user what aspects contribute most the their personal happiness, and then weighting each of the areas to their preferences and updating the overall score accordingly.
- Factor in the weather by calling the [Open Weather API](https://openweathermap.org/api) and recalculating the overall office score based on live weather data for Pusher HQ.

### Screenshots

![Imgur](https://i.imgur.com/zh399yb.png)

![Imgur](https://i.imgur.com/RzMrDYj.png)
