# angular-sass-bootstrap-seed

This project is an Angular 4 seed with Bootstrap and SASS as dependencies with webpack as a build tool. Bootstrap is compiled to a separate `.css` file called `external.css`.

## Project Structure

### config

The location of webpack configuration files.

### dist

Output location of different builds. `local`, `staging` and `production` builds are compiled here.

### src

Location for the source files of the project.

#### shared

Location for shared components, services and styles. `external.scss` is found in the `styles` folder and referenced in `src/main.ts`.