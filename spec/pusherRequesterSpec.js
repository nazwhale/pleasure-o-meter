'use strict';

describe("PusherRequester", function() {

  var requester;

  beforeEach(function() {
    requester = new PusherRequester();
  });

  describe("emojify", function() {
    it("returns a very happy emoji if score is between 8 and 10", function() {
      console.log(requester);
      expect(requester.emojify(8)).toEqual('😄 ');
    });
  });

})
