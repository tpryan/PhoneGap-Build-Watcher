# PhoneGap Build Watcher

An application for watching PhoneGap Build apps during development. To take a few clicks out of the development process.

## Application
The finished application is available at: 

* [Google Play] (https://play.google.com/store/apps/details?id=com.terrenceryan.pgbwatcher)
* [Web App for iOS] (http://pgbwatcher.com)

## Requirements
Requires a PhoneGap Build Account

## Code
The core application is meant to be built in PhoneGap, or PhoneGap Build. 

An optional part of the ANT build process relies on Transporter Chief, which is available here:
http://gamua.com/blog/2012/03/how-to-deploy-ios-apps-to-the-iphone-via-the-command-line/

Basically in development with the ANT script and Transporter Chief you have the option of pushing
new content to PGB, waiting for it to build, downloading new app, and installing it on an attached 
iOS device. 

An optional part of the ANT build process relies on the Android SDK, which is available here:
http://developer.android.com/sdk/index.html

Basically in development with the ANT script and the SDK tool ADB you have the option of pushing
new content to PGB, waiting for it to build, downloading new app, and installing it on an attached 
Android device. 

## iOS 
At present this application cannot be added to the App Store.  There is a hosted webapp version of the 
application at http://pgbwatcher.com

You can also build your own version and run it on your device.  To do:

* Get a Provision File for your own copy of the application at [Apple Developer Center] (https://developer.apple.com/)
* Build a version of this repository either in PhoneGap or PhoneGap Build using your provision file. 
