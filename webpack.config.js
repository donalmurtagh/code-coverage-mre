/*
The sole purpose of this file is to preserve the "go to declaration" behaviour in IntelliJ that existed before
migrating from Vue-CLI/Webpack to Vite. Without this file, IntelliJ is unable to navigate to any imported declarations
that use a '@' in their path (e.g. when a Mac user command + left-clicks on the imported declaration).

This configuration has no impact on the application itself, it is solely for the purpose
of improving the developer experience in IntelliJ/Webstorm.

The necessity of this file was most-recently tested in IntelliJ version 2022.1 (April 2022) by
- deleting this file
- invalidating the IntelliJ caches and restarting the IDE
- waiting for the caches to rebuild and testing whether "go to declaration" works (it did not)

https://medium.com/nerd-for-tech/from-vue-cli-to-vitejs-648d2f5e031d
https://www.jetbrains.com/help/idea/using-webpack.html#install_and_configure_webpack
 */
System.config({
  paths: {
    '@/*': './src/*',
  }
})