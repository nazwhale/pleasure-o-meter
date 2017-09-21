# pleasure-o-meter 😊
A simple UI rendered on real-time data, made with vanilla JavaScript (with the exception of [Pusher's JavaScript client](https://github.com/pusher/pusher-js)).

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

Finally I worked on highlighting an HTML element on selection and displaying the relevant emoji in a larger font-size. I got this working, but then realised that the large emoji wasn't updating in real time. To fix this I created an `updateLargeEmoji` function to call every time Pusher gets data from the event.


### Screenshots

![Imgur](https://i.imgur.com/zh399yb.png)

![Imgur](https://i.imgur.com/RzMrDYj.png)
