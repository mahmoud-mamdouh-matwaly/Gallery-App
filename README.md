## Gallery App

Our client wants to view an activities gallery of 2020 activities. Each month will be represented like an instagram story icon and the selected story should be highlighted. When the user selects a new month, the gallery should be updated with the month’s data.

### Pre-Requisites

1. Node
2. Yarn

## Setup

1. Copy .env.example contents to .env file in the same path
   `cp .env.example .env`
2. You can change PORT variable in `.env` file to change your development port. By
   default the application will launch on PORT **3000**
3. Set the value of `REACT_APP_ROOT_URL` with the URL.
4. Run `yarn install` to install the project dependencies.
5. Run `yarn start` to start the application

## Tradeoff:

1. If any image or video is broken I remove the item from grid list.

2. I split the response to chunks and I render them based on infinite scroll.

### Technologies:

1. React
2. styled-component
