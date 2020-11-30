## __*CAPACITOR ALARM BACKGROUND PLUGIN*__

### **Usage**

Yarn

```bash
yarn add @bazumax/capacitor-plugin-alarm
```

NPM

```bash
npm install @bazumax/capacitor-plugin-alarm
```

### **Development**

#### Clone & Prepare

Requirements:

```
Yarn
Quasar CLI ( yarn global add @quasar/cli )
```

Commands:

```bash
git clone https://github.com/BazuMax/capacitor-plugin-alarm.git
cd capacitor-plugin-alarm

# CWD: ./
yarn && yarn link
cd example && yarn

# CWD: ./example
cd src-capacitor && yarn && yarn link @bazumax/capacitor-plugin-alarm && cd ..
```

#### Develop Plugin

```bash
# IOS
cd ios
# Open Plugin.xcworkspace in XCode

# Android
# Open ./android folder in Android Studio
```

#### Debug Example

```bash
# CWD: ./example

# IOS
cd src-capacitor/ios/App && pod install && cd ../../..
yarn dev:ios

# ANDROID
yarn dev:android
```

#### Build Example

```bash
# CWD: ./example

yarn build:ios
# OR
yarn build:android
```
