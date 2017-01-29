# imageloadPriority
Description

Jquery script to change the priority of the loading of images, simply by adding a class to them


Dependencies:
- Add Jquery
```html
<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>
```
- Add imageloaderPriority at the end of ``<body>``
```html
<script src="../core/imageloaderPriority.js"></script>
```

# Overview:

Change the order that images load, by adding priority to them. To add priority to an image, add the respective class:
- ilp-first : First Priority
- ilp-second : Second Priority
- ilp-third: Third Priority

Example:
```html
<img src="http://lorempixel.com/output/animals-q-c-1920-1920-1.jpg" alt="1 first priority" class="ilp-first">
<img src="http://lorempixel.com/output/animals-q-c-1920-1920-3.jpg" alt="1 second priority" class="ilp-second">
<img src="http://lorempixel.com/output/animals-q-c-1920-1920-5.jpg" alt="1 third priority" class="ilp-third">
```

