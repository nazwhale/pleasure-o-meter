'use strict';

describe("PusherRequester", function() {

  var data;
  var testElement;

  beforeEach(function() {
    data = {
            state: {
              office: 4.5,
              people: 1,
              coffee: 4,
              food: 10,
              darts: 3
            }
          }

  });

  describe("updateView", function() {
    beforeEach(function() {
      spyOn(window, 'updateAreas');
      spyOn(window, 'updateLargeEmoji');
      updateView(data);
    });
    
    it("calls updateAreas", function() {
      expect(updateAreas).toHaveBeenCalled()
    });

    it("calls updateLargeEmoji", function() {
      expect(updateLargeEmoji).toHaveBeenCalled()
    });
  });

  describe("updateAreas", function() {
    it("calls emojify for each area", function() {
      testElement = document.createElement('a'); 
      testElement.innerHTML = "😐 "
      spyOn(document, 'getElementById').and.returnValue(testElement);
      spyOn(window, 'emojify');
      updateAreas(data);
      expect(emojify.calls.count()).toEqual(5);
    });
  });


  describe("emojify", function() {
    it("very happy emoji if score is between 8 and 10", function() {
      expect(emojify(8)).toEqual('😄 ');
    });

    it("happy emoji if score is between 6 and 8", function() {
      expect(emojify(7)).toEqual('🙂 ');
    });

    it("neutral emoji if score is between 4 and 6", function() {
      expect(emojify(4.5)).toEqual('😐 ');
    });

    it("sad emoji if score is between 2 and 4", function() {
      expect(emojify(2.25)).toEqual('😞 ');
    });

    it("angry emoji if score is between 0 and 2", function() {
      expect(emojify(0)).toEqual('😠 ');
    });
  });

})
