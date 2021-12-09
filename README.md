# 🧁 cupcake.css

A classless CSS framework to sweeten up your html pages.

[Website](https://cupcake-css.netlify.app/) | [Variables reference](https://cupcake-css.netlify.app/variables/) | [Components](https://cupcake-css.netlify.app/components/) | [Examples](https://cupcake-css.netlify.app/examples/)

## What and why?

Cupcake.css is a classless CSS framework to sweeten up your html pages and gives you the possibility to create stylish websites by writing HTML code only. The magic comes from a single CSS file which apply styles to all common (and some rare) web elements: sorted, categorizes and themeable! Therefore you can focus on writing your content and worry less about frameworks, libraries and design systems. The idea behind cupcake.css is to support humans that like to work in an dependency free enviroment, for example with basic HTML and CSS.

## Useful for

- Fast and minimal websites
- Super simple blogs
- Minimal approach startup website
- An maintable portfolio

## Contribution

I made this repositoy especially for testing to have one repository for the website as well for the npm package. All `CSS` is written in `src/css/cupcake.css` and during the build process this file will be copied to root following directly by css-minify to create a minified version of this `CSS` file. Since this project is using `11ty` I can not `passThroughCopy` to the root folder if the input dir is set to src inside the `.eleventy` configuration file.

> Feel free to make changes / updates / fixes in the src/css/cupcake.css file and open a pull request.