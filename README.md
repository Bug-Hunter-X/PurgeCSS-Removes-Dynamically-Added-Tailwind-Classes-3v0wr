# PurgeCSS and Dynamic Tailwind Classes

This repository demonstrates a common issue when using PurgeCSS with Tailwind CSS: dynamically added classes being removed during the build process.

## Problem

When using PurgeCSS to optimize your Tailwind CSS styles, dynamically added classes (those added to elements via JavaScript after the initial page load) may be removed because PurgeCSS doesn't see them during its analysis pass.  This leads to the elements not being styled as expected.

## Solution

The solution involves configuring PurgeCSS to include dynamically added classes. This is done by specifying the appropriate options in your PurgeCSS configuration (usually within your `tailwind.config.js` file).

## Setup

1. Clone this repository.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm run dev` to start a development server.

Observe how the button initially does nothing. After correctly adding PurgeCSS options to the tailwind.config.js file, the button will now add the styling successfully. 
