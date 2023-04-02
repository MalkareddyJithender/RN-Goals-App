# 1.2 What is React Native ?
=> React Native as the name implies it is related to React.Js.
=> With React.Js + React Native, we can easily build real React Native mobile apps for IOS and android.
=> These are the real apps that we can distribute them to app stores and these apps can be used by any user
   with IOS / Andriod Device.
=> React.Js is a javascript library used for building User Interfaces.
=> Typically React.Js is used for web development.
=> But actually it's React-DOM library that adds web support.
=> "React the library itself Platform-Agnostic" which means it doesn't care about the underlying platform.
=> We can use React in conjunction with React-Dom to build web apps.
=> React Native is alternative to React-DOM.
=> It gives us a collection of special React Components, which we can use in our JSX Code.
=> React Native Ships with built-in components that we can use.
=> Those components are then compiled to Native UI Elements for IOS or Andriod Platforms by React Native itself.(compilation-step)
=> In Addition, React Native also exposes native platform API's like device camera, so that we can use them in our js code as well.
=> React Native is similar to React-DOM, but it doesn't target web, browser as platform but instead iOS/Andriod as platform.
=> we can use extra React Native components and api's in our react js code to produce real apps for iOS and Andriod.

# 1.3 A Glance under the hood of react native
=> React Native compiles it's reusable components to their respective platform equivalents.
=> for example, if we want to display textbox in browser,in our jsx <input /> element is available.
=> If we are building a native android application with java or kotlin, <EditText> native element is provided by android.
=> for iOS, it would be <UITextField> element.
=> React Native compiles it's <TextInput> component to <EditText> for Android or to <UITextField> for iOS platform.
=> Here Views / JSX Elements / Components are compiled to their respective platform equivalents.
=> But js code or logic should not gets compiled.
=> React Native hosts "javascript thread" into native app that we built and in that thread our javascript code will be executed
   as a js code.
=> But then React Native will talk to the underlying Android / iOS platform through basic translation bridge.

# 1.4 Expo CLI vs React Native CLI
=> Expo CLI and React Native CLI (command line interface) are the two different approaches and these two approaches
   gives us development environment in which we can build react native apps.

=> Expo CLI and React Native CLI are the two tools and with the help of these tools,
   - we can create react native projects
   - we can run react native apps on testing devices and simulators 
   - we can build real react native apps so that we can ship them to app stores.

=> Both tools are crucial. we can use either one of them only.

   # differences between Expo CLI and React Native CLI
   # Expo CLI :
   - company behind expo CLI provides "third party service(entirely free!). we don't have sign up and pay for it.
     To build react native apps and ship them to app stores we don't have to pay for it.

   - When using Expo CLI, a couple of free packages and tools they gives us, we get "Managed App Development Workflow".
     It means creating projects is easy, writing code is easy, tapping into native device features like using device 
     camera and so on is easier.
    
   - A couple of free packages and other tools provided by Expo CLI, writing native apps with react native is more convienient.

   - we can leave Expo Workflow and Ecosystem at any time and switch to the React Native CLI Workflow.

   # React Native CLI
   - It exists before Expo CLI has come and it was provided by React Native Team and Community.

   - It gives us a bare-bones react native development environment. we need to do more configuration and set up on our own.

   - There are less convenience features. eg: if we need to tap into certain native device features like using camera  
     or other features there is often a bit more work.
   
   - If we want to mix javascript code and native device source code, using React Native CLI is benificial.

# creating a new react native project
- run command in command prompt "npx create-expo-app RNCourse".This will create a new react native project folder with name of  RNCourse in a specific directory and the default name of the react native app also same.

# running our first app on a real device
- Because of this expo workflow/CLI, previewing our mobile app on a real device is super easy.

- Download and Install Expo Go app. This is an app provided by the company behind expo cli and expo package.

- run command "npm start". It will actually start expo development server which will watches and builds code so that
  we can preview our app.

- expo cli simply makes building and testing react native apps much easier.

# setting up a local development environment
- we decided to don't want to use our real device to preview our app, then we have another solution.

- Install android studio and use "virtual device manager" to create new virtual devices.

- These virtual devices are also called "emulators or simulators". 

- create and launch new emulator on our machine. It's like dummy android phone on our windows machine.

- But it's a real phone when it comes to testing android apps.

- when "a" was hit, then expo cli will automatically found android emulator running on our machine, install expo go app 
  on this emulator and then open our react native app on that expo go app.

- we can use "r" to manually reload our react native application.

# --- section - 2 : React Native Basics (course goals app) ---

# 2.2 Exploring core components and core components styling
- html elements like div,section,article,p etc work in browser when we have a dom to work with.
- But they don't work on native devices. Because native devices are not browsers and they don't have that dom.
- so native devices won't support html elements.
- Instead we can use core components that react native exposes to us.mostly used components are View, Text & TextInput.
- React Native is all about working those core components that are built into it.
- To style those core components, react native doesn't support css language.
- so there is no css language or css files.
- we can write styles in js and there are two types of styling i.e, inline styling and stylesheet objects.

# 2.3 working with core components
- text(string) should must be wrapped in a text core component.
- view is equivalent to div element in web development, but we can't put text inside view directly.
- Because native platforms are stricter than that.
- views are meant to build boxes and containers that hold the other content.
- view component simply holds other react native components inside of it.

# 2.4 styling react native apps
- There is no css support in react native. So we don't use css files and css language in general.
- There are two main ways of adding styles in react native .i.e, inline styles and stylesheet objects.
- we usually write styles in javascript, there are javascript properties for styles and those properties are
  inspired by css language.
- these are a subset of properties & features supported by css.
- all js property names are not same as css properties.(camelCasing)
- border property doesn't exist in react native.
- problem with inline styles : if we want to apply same styles for multiple elements,we need to use same code
  which violates dry principle.
- Advantages with stylesheet objects :
i> if we want to apply same styles for multiple elements, we simply define once and use them and we don't need to
   change in multiple places also,if we want any change.(reusable styles)
ii> It allows us to clearly seperates/divides JSX code and styling code.

- stylesheet object(Stylesheet.create({})) is used instead of normal object for styles because,
i> we get autocompletion that makes the development a bit easier.
ii> provides validation.

# 2.7 react native & flexbox
- when it comes to building layouts in react native apps, flexbox is super important.
- Layouts are typically created with flexbox.
- flexbox is a key approach or key concept which is basically a collection of styling properties that are about positioning
  elements inside of containers.
- flexbox in react native is a bit similar to flexbox we know from css for web.
- positioning is controlled via style properties applied to the element container.

# 2.9 flexbox A Deep Dive
- flexbox is a concept that is applied to the container elements only.
- Bydefault, flexbox is enabled on all View components and we can't able to disable it.
- Bydefault, flexDirection:'column', where in web flexbox is not enabled by default and if it's enabled then
  flexDirection is row bydeafult.
- flexbox is simply a concept from css that is all about organizing child elements in a one dimensional space(i.e, column or row).
- flexDirection:'column', then main axis is Y-Axis(top to bottom) and cross axis X-axis(left to right).
- flexDirection:'row', then main axis is X-Axis(left to right) and cross axis is Y-axis(top to bottom).
- when flexDirection:'row', the default is alignItems:'stretch', which means items are stretched vertically to height of container.
- justifyContent is to organize elements along the main axis.
- alignItems is to organize elements along the cross axis.


# 2.13 iOS & android styling differences
=> borderRadius related style is applied to Text Element and it should not gets reflected in 
   iOS platform.
=> React Native compiles Text element to native UI element in iOS platform and this element 
   doesn't support rounded corners which means borderRadius.
=> So we just wrap Text with View component and add styles to it. In iOS , translated element 
   does support rounded corners.
=> Unlike Css, styles don't cascade in React Native.
=> Original Css have cascading nature, which means child elements inherits styles from parent 
   elements automatically.

# 2.14 making content scrollable with ScrollView
- By Default in browsers, when the content exceeds available space, scrollingbars will 
  appear automatically and we can scroll our website.
- But in react native, we need to explicitly tell.
- In RN, making lists or content scrollable is very easy.
- View (wrapper) will take all the available space and inside ScrollView component makes 
  content available in outer view scrollable. 

# 2.15 optimizing lists with flatList
=> ScrollView is a component that renders all it's child items.
=> no matter whether items are in on screen and off screen.
=> Here if we have a long list with a hundreds or thousands of items, with ScrollView it renders all of these list items when overall UI is rendered.
=> here we get into performance issues with it.
=> It is well suited for limited amount of content which has a specific end like articles etc.
=> for dynamic lists or long lists, FlatList is used.
=> FlatList has a similar implementation like ScrollView with extra optimization feature only.
=> So FlatList supports the props which are supported by ScrollView.
=> It renders list items whatever we need, then as we scroll near to them then those are rendered by FLatList.
=> we need to pass 2 props to actually render list items, data={actualData} and renderItem={function}.
=> we need to add keys for list items in 2 ways :
1> [{key:123,text:data}] then this key property is automatically recognised by FlatList and it should attach key prop to list while rendering.
2> add keyExtractor={(item,i) => return key}; then it should used a key for list.
=> both renderItem and keyExtractor will be called for each item in array.but renderItem generates jsx and keyExtractor return key.


# 2.19 Handling Taps with Pressable Component
- we can make any item / area pressable or tappable by simply wrapping it by Pressable core
  component.
- Touchable or it's related components are used in older react native way.
- But in modern react native way, we are using Pressable instead of them.
- we can also build our own custom button with this pressable component.
- Built-in-Button component also uses this pressable component internally.

# 2.21 Adding an android ripple effect & iOS alternative
- android_ripple={{color:'blue'}} prop is responsible for ripple effect when it's pressed.
- But it won't work on iOS devices.
- on Pressable comp, style prop is supported which we can pass styling object.
- Alternatively it also supports function as a value which we can return style object 
  conditionally.
- function gets called initially with {pressed:false} on load.
- when we press the item, gets called with {pressed:true} and when we unpress/release item
  also gets called again with {pressed:false}.
- so with the help of this, we can write our own custom styles for button state changes.

Note: 
1> <Image source={require("relative_path")}> used for displaying images in react native.

# ------ 03. Debugging React Native Apps ----- #

# 3.2 Handling Errors
- When any error occurs in our react native apps, first we need to understand the error and then handle that error.
- we usually understand what error it could be and where it had occured in our code by carefully reading error messages in terminal.
- Then we have to fix them with help of official documentations.

# 3.3 Logging to the console
- sometimes we can log our results to the console. we have 2 advantages with it :
- we can understand how the code is executing (flow of code execution).
- we can see what value stored in a specific variable at that moment.

# 3.4 Debugging js remotely
- sometimes we want more detailed insights. In that case we don't use console logs.
- ? = shows available shortcuts
- a = expo opens our app in android emulator
- i = expo opens our app in iOS device/emulator
- r = reloads our entire app manually
- m = toggle developer menu in our app
- ctrl + m for android, ctrl + d for iOS emulator for toggling dev menu
- developer menu -> debug remote js
- In the chrome, in new tab chrome developer tools should gets opened.
- console,network and source tabs we can use.
- we can also use debugger keyword in our js files in our native mobile app.
- we can also add breakpoints in source tab in chrome dev tools.
- finally to stop debugging, select "stop remote debugging" in dev menu.

# 3.5 Using React Dev Tools
- In the web, we use "react dev tools" browser extension and we can add it to browser.
- But in mobile apps, it's different.
- we need to install "react-devtools" package globally or as a project only dependency.
## npm i -g react-devtools 
- we need to run below standalone command in new terminal
## react-devtools
- now our react native app and react-devtools are running in different terminals & ports.
- we can connect both of them through dev menu -> debug remote js.
- Advantages :
* we can view entire component tree for our app.
* we can see available props and state for a specific component.
* we can also change them in react-devtools according to our needs and those should gets 
  reflected in our mobile app as well.
- These are super useful when we are building complex mobile apps.