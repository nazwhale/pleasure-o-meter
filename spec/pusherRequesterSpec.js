'use strict';

describe("PusherRequester", function() {

  var requester;

  beforeEach(function() {
    requester = new PusherRequester();
  });

  describe("emojify", function() {
    it("very happy emoji if score is between 8 and 10", function() {
      expect(requester.emojify(8)).toEqual('😄 ');
    });

    it("happy emoji if score is between 6 and 8", function() {
      expect(requester.emojify(7)).toEqual('🙂 ');
    });

    it("neutral emoji if score is between 4 and 6", function() {
      expect(requester.emojify(4.5)).toEqual('😐 ');
    });
    it("sad emoji if score is between 2 and 4", function() {
      expect(requester.emojify(2.25)).toEqual('😞 ');
    });

    it("angry emoji if score is between 0 and 2", function() {
      expect(requester.emojify(0)).toEqual('😠 ');
    });
  });

})
