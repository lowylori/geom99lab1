# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?origin=Magic+Kingdom+Park&destination=Disney%27s+Animal+Kingdom+Lodge&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

Copy/paste the JSON results and save them into the empty file ```mydirections.json``` in this repository

## Optional URLs

Read the Rubric to find out about what options exist to earn more marks. Here is where you can provide these additional links to place ids or other items telling a story about your chosen directions API

### Simple option:

(returns map-preferred) Maps PlaceID search: https://www.google.com/maps/place/?q=place_id:ChIJFfiCrdo4Qm0RqPwuOAVtaj8
### Efficient option

(returns JSON) API PlaceID link https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJV2BQ4laeekgRFauLvdXbFXE&key=<INSERTKEY>

  which the JSON will have a CID that can be directly used as a URL like https://maps.google.com/?cid=4569584641105657000

## The experience begins at Magic Kingdom Park in Orlando Florida...
```
https://...
```
Our first stop is at Space Mountain, an indoor rollercoster that makes you feel like you are travelling through space at high speeds.
```
https://...
```
Next, take a relaxing ride on "it's a small world", an indoor ferry ride with a song that will surely get stuck in your head. However, in a short time you feel as though you've experienced Disney's idea of culture.
```
https://...
```
Finally, you are ready for a bite to eat... Dine at Be Our Guest Resturant, with a Beauty and the Beast theme. Considered to be one of the best resturants in Magic Kingdon (however, they're all pretty good)
```
https://...
```
Ready to go home? Take Disney's transit to Animal Kingdom Lodge for a memerable experience. Look out your balcony and experience your own African Safari adventure. 
```
https://...
```
____
## Rubric

Note: MarkDown (.md) documents are not HTML and therefore are best viewed in the github.com website, not on the pages github.io page. Marking will occur using the github.com source. 

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown and results in the JSON file with a unique origin and destination in directions earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%. Explore the API documentation for parameters we have not used.
4. Tell the story of your route. Include more than 2 "stops", and/or including additional links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
