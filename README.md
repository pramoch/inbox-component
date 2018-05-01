# Inbox Component

![image](https://user-images.githubusercontent.com/4627941/39432496-d78902ee-4cbd-11e8-844c-7fbfde2ff2ef.png)

## How to run

- Install [Node.js](https://nodejs.org).
- Run `npm install -g @angular/cli` to install [Angular CLI](https://github.com/angular/angular-cli) globally.
- Run `npm install` to install project's dependencies.
- Run `ng serve` for a dev server. Navigate to http://localhost:4200/.

## Configuration

**endpoint**

Specify backend url or "local" for mock data.

`<app-inbox endpoint="http://localhost:3000/mail"></app-inbox>`

`<app-inbox endpoint="local"></app-inbox>`

**pageSize**

Limit the number of emails to be displayed at start. Scrolling to the bottom will automatically load more emails. If pageSize is not specified, all emails will be displayed.

`<app-inbox pageSize="12"></app-inbox>`

## Features

Responsive design

Handle data error and empty data e.g. no sender, no subject/body

Handle large list with lazy loading (pageSize)

Click at circle icon to select mail

![image](https://user-images.githubusercontent.com/4627941/39461460-f3036a6a-4d34-11e8-8d68-dcf6048036ea.png)
