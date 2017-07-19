<p>
  <a title='License' href="https://raw.githubusercontent.com/anyjunk/redux-offline-immutable-config/master/LICENSE" height="18">
    <img src='https://img.shields.io/badge/license-MIT-blue.svg' />
  </a>
  <a href="https://badge.fury.io/js/redux-offline-immutable-config">
    <img src="https://badge.fury.io/js/redux-offline-immutable-config.svg" alt="npm version" height="18">
  </a>
</p>

# redux-offline-immutable-config

Provide a configuration for [`redux-offline`](https://github.com/jevakallio/redux-offline) to use an immutable root state
with [`redux-persist-immutable`](https://github.com/rt2zz/redux-persist-immutable)

## Installation

```
npm install redux-offline-immutable-config
# or
yarn add redux-offline-immutable-config
```

## Use

Follow `redux-offline` base setup instruction at [`redux-offline`](https://github.com/jevakallio/redux-offline), then apply the following changes.

```javascript
import { applyMiddleware, createStore, compose } from 'redux';
import { offline } from 'redux-offline';
import defaultConfig from 'redux-offline/lib/defaults';

// replacing redux-offline defaults with immutable* counterparts
import { persist, persistAutoRehydrate, offlineStateLens } from 'redux-offline-immutable-config';

// ...

// example of redux-persist configuration
// see https://github.com/rt2zz/redux-persist#persiststorestore-config-callback
const persistOptions = {};
const persistCallback = () => {
  console.log('rehydration completed')
};

const offlineConfig = {
  ...defaultConfig,
  persist,
  persistAutoRehydrate,
  persistOptions,
  persistCallback,
  offlineStateLens
};

const preloadedState = fromJS({}); // this is the immutable root state
const store = createStore(
  reducer, // your main reducer
  preloadedState,
  compose(
    applyMiddleware(middleware), // your middleware
    offline(offlineConfig)
  )
);
```

## Customise persistAutoRehydrate

```javascript
import { persist, persistAutoRehydrate, offlineStateLens } from 'redux-offline-immutable-config';

const autoRehydrateOptions = __DEV__ === true
  ? {log: true}
  : {};

const offlineConfig = {
  ...defaultConfig,
  persist,
  persistAutoRehydrate: () => persistAutoRehydrate(autoRehydrateOptions),
  persistOptions,
  persistCallback,
  offlineStateLens
};

// ...

```

### License

MIT
