### Quick Commentary App

Using React Native, being given a set of select requirements, created a quick football commentary app. Works on both iOS & Android.

### Requirement

This was the requirement...

![image](readmeScreenshots/requirement.jpg)

### Running it locally
###### I have an assumption that you've run a React Native project before, so no prerequisites will be listed.

Inital commands

```
git clone git@github.com:ciawalsh/quickCommentaryApp.git
cd quickCommentaryApp
yarn install
```

To run on iOS

```
cd ios && pod install
cd ..
yarn ios
```

To run on Android
###### *** you will need a local.properties file added to your android folder that shows the path to your Android SDK. Should have a path that looks like... `sdk.dir=/Users/<username>/Library/Android/sdk` *** 
###### *** you will also need an android emulator running as well *** 

```yarn android```

### Screenshots
#### Main Screen

|                                  iOS | Android                                  |
| -----------------------------------: | :--------------------------------------- |
| ![image](readmeScreenshots/iOS1.png) | ![image](readmeScreenshots/Android1.png) |

#### Opened Modal

|                                  iOS | Android                                  |
| -----------------------------------: | :--------------------------------------- |
| ![image](readmeScreenshots/iOS2.png) | ![image](readmeScreenshots/Android2.png) |

#### Chosen Event

|                                  iOS | Android                                  |
| -----------------------------------: | :--------------------------------------- |
| ![image](readmeScreenshots/iOS3.png) | ![image](readmeScreenshots/Android3.png) |

### Gifs

|                                      iOS | Android                                           |
| ---------------------------------------: | :------------------------------------------------ |
| ![image](readmeScreenshots/TechTest.gif) | ![image](readmeScreenshots/TechTest(android).gif) |
