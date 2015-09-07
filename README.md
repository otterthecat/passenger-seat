# Depcrecated
With recent (and awesome) updates to [Phusion Passenger](https://www.phusionpassenger.com/) this module doesn't serve much of a purpose anymore.
You should really [look at very readable documentation](https://www.phusionpassenger.com/library/) if you want to run node on your VPS. Seriously.

## Passenger-Seat
Helper for setting application environment within Phusion Passenger for Apache

### What is it?
A convience module for when your Dev & Prod machines differ in that one uses Phusion Passenger for Apache to deploy Node apps, and you don't want to change configurations.

### Why dont' you use PhusionPassenger in both dev & prod?
Because shut up.

### Will this also work with Phusion Passgener for Nginx and/or Standalone?
No idea, as these are both untested, and I have only ever used it with Phusion Passenger for Apache. However, I would suspect that it would work with Nginx as well, and not be needed at all for Phusion Passenger Standalone, since it will only run a single app at any given time.

### How do I use it?
Just include & call it:
```javascript
var port = require('./passenger-seat')();
```
This will configure the PhusionPassenger object (if exists) and return the string of "passenger" to be used when you pass a port to your app.

If the PhusionPassenger object does not exist, it will first try to return the value of process.env.PORT (if set), otherwise it will use the default - which is '1337'.

To set your own default port number, you can simply pass it into the call like so:

```javascript
// set default port to 3000
var port = require('./passenger-seat')(3000);
```

In any case, once you have your port defined, you just pass it to your app
```javascript
var server = http.createServer(onRequest).listen(port);
```

It is strongly recommended that passenger-seat is called as early as possible, as noted [in the Phusion Passenger user group](https://groups.google.com/d/msg/phusion-passenger/sZ4SjU8ypwc/MUdZMcnWq_8J)