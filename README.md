# Kyokan UI

## Commands

```shell
yarn start                    # to start a style guide dev server
yarn generate [ComponentName] # to generate a scaffold for a new component
yarn dist                     # build out component dist files for use as a module

yarn build                    # to build a static version of the styleguide
yarn link                     # to begin linking to use local module (this command must be run from this repo)
yarn link kyokan-ui           # to complete linking to use local module (this command must be run from the target repo)
```

## Motivation

Primary concern: pleasurable authoring experience

## Philosophies

* Michael Chan: https://www.youtube.com/watch?v=gNeavlJ7lNY
  * "depend on our own API"
* Glen Maddern: https://www.youtube.com/watch?v=qu4U7lwZTRI
  * build around your own desired API
  * using `styled-components` gives us all the power of JavaScript while solving the issue of global styles from CSS and the arbitrary class names from CSS modules
* Max Stoiber: https://www.youtube.com/watch?v=2j9rSur_mnk
  * "[best practices] are completely useless if they're not enforced"
  * no one is going to adhere to best practice that block you from getting things done
