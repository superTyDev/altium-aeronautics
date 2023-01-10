# Altium Aeronautics!

This project is built on React, a modern web framework for the 2023 Florida TSA competition.

## Engineering Notebook
See/edit the [engineering notebook here](https://docs.google.com/document/d/11LtJvW9aZJ2__on8zBuYxzUkE73G3TwpArdAp0vSD_A/edit?usp=sharing).

*For Team Members:* We are using the same template we use in engineering class. Any time you make a big visual change, enter your changes in the build day log. Please also take a screenshot of the page you changed and enter it in your build day entry.

## Prompt

**Topic:** Space Tourism: a company that will make you an astronaut

Create a fictitious company and design an appropriate website. The website should provide information starting with promotion, basic information, cost, planning, training, vehicles, safety, launch, and recovery.

## For the Team

You can add pages in the src/pages directory by

1. Copying the template.jsx file
2. Replace every instance of template with the page title (including the file name)
3. Adding it to router.jsx
   - Add `import Template from "../pages/template";` at top
   - Add `<Route path="/template" component={Template} />` in the switch component at the bottom
4. Enter the page's **body** HTML content between the `return ()` parentheses
5. Have a great time

At this point you're probably wondering _why_. React allows static sites which are always on and have a nice preload functionality.
