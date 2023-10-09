# Front End Assignment

<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">TitanStar Legends</h3>
<p align="center">Rune Mastery Loadout Talent Calculator 9000</p>

  <p align="center">
    Wizards of the Coast - front end assignment
    <br />
    <a href="https://titan-star-calculator.netlify.app/">View Live Site</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

![Example](assets/example.png)

### How It's Made

**Tech used:**

- [React](https://reactjs.org/)
- [TypeScript](https://typescriptlang.org)
- [Vite](https://vitejs.dev/guide/why.html)

This fully responsive web application is built using React and Typescript. By default, users will see two talent paths (1 & 2) with a set of inactive (not selected) runes, and a spent points indicator, starting at 0.

Users are able to spend up to 6 talent points by left clicking on a rune of their choosing. However, the rule selected must be selected in order (eg. The user may not put a point in the cake without first having put points in the chevrons and the silverware). Alternatively, a user may regain talent points by right clicking on a rune which also must follow in the specified order.

<!-- GETTING STARTED -->

## Getting Started

This app can be accessed live via [titan-star-calculator.netlify.app/](https://titan-star-calculator.netlify.app/) or as a local copy. To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/danjkim21/front-end-developer-challenge.git
   ```
2. navigate into the folder
   ```sh
   cd titan-star-loadout-calc
   ```
3. Install NPM packages
   ```sh
   npm install
   ```

<!-- USAGE EXAMPLES -->

### Usage

4. Run server
   ```sh
    npm run dev
   ```
5. Navigate to server
   ```sh
   `localhost:5173`
   ```

## Optimizations:

In order to complete the assignment in roughly a few hours, there were certain design considerations that I omitted for the sake of time.

- I typically include linting (ESlint - AirBnB styling), testing (Jest), in order to keep my project scalable and easy to maintain across teams.

- For small-medium size projects, I typically breakdown my `src` folder structure into `assets` (images, etc.), `components` (buttons, nav, cards etc.), `styles` (scss variables, styling), `pages` (landing, about, etc.), `hooks` (custom hooks, useEffects, useRefs, etc.), `utils` (useful functions) in order to better abstract my codebase into modular pieces.

- For state management, I would use Redux/Redux ToolKit as I find it is helpful for maintaining scalability and reducing impact of change when handling state/api calls across the front end team. However, for smaller projects, I find using React's useContext/provider, lightweight and robust enough to handle global state that is not too complex. For the sake of time, I handled state at the most basic level (useState and passing it via props).

- I would love to be able to add more custom animations and features. One idea would be to animate the talent path line between talent runes as they are activated to visually display rune paths being linked. I also did not have time to figure out how to create the rune border gradient with the line down the middle, perhaps this can be achieved with a repeating linear gradient. A few other features I would like to have added would be to create some form of toast notification or alert, notifying users when all points have been used, or letting users know that they cannot select/deselect a rune based on the error conditions.

- **Lastly, for mobile responsiveness, one piece I was not able to get to was implementing a "right-click" on mobile. Since there technically is no "right-click" event for mobile, I would refactor the event handler in the future to enable either double clicking of a active rune, or perhaps a boolean (if mobile user clicks active rune, remove it)**

## Contact

Daniel Kim - dan.jkim21@gmail.com

Live Link: [https://titan-star-calculator.netlify.app/](https://titan-star-calculator.netlify.app/)

<p align="right">(<a href="#top">back to top</a>)</p>
