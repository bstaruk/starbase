# Variables

This is where you'll warehouse your CSS variables (`:root { ... }`) to be used throughout your project.

Component-specific variables should be stored at the top of its stylesheet, but any variables that should be available throughout the application can be stored here.

The `variables.css` file is injected into every stylesheet in the `/src/app` and `/src/components` folders, so anything you define here can be used anywhere else.

If you wanted to split up your variables into categories such as `typography.css` or `breakpoints.css`, simply create those files and import them into `variables.css` using syntax like so: `@import "./typography.css";`
