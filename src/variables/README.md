# Variables

This is where you'll warehouse your CSS variables (`:root { ... }`, etc) to be used throughout your project.

Component-specific `:root` variables should be stored at the top of its stylesheet, but any variables that should be available throughout the application can be stored here.

If you wanted to split up your variables into categories such as `typography.css` or `breakpoints.css`, simply create those files and import them into `variables.css` like so: `@import "./typography.css";`
