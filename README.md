# Installation

Run: `npm i`

Run: `npm start`

In another terminal run: `npm run dev`

In the browser go to 'localhost:4000'

# Technologies Uses

- Express
- React
- React Router
- Redux
- TypeScript
- Tailwind
- Webpack
- Jest

# Tasks Completion

Whereas this task was very interesting, I think it was overkill. In terms of a time budget for an interview task I would imagine four hours maximum. In my opinion, this task requires more than that.

Unfortunately I did not have enough time to fully generate a schedule and tanslate it into visual components. The maximum point I got to is to generate tables/presenters apportionment, which can be seend in Dev Tools > Console.  

Below is a list of the completed challenges:

- List, create, view, edit and delete game presenters

      Complete

- List, create, view, edit and delete tables

      Complete (this one was a bit exta considering it is identical to the above)

- Use proper validation techniques when creating and editing data

      Complete:
      - 'src/components/common/InputText.tsx' has error notification in place
      - Function `textChangeHandler` in 'src/components/presenters/PresenterModal.tsx':
            - uses regex for input validation and correction. It 
            - trims extra spaces
            - capitalizes the first letter

- Mock the backend API and set up mock data accordingly

      Complete:
            - Endpoints in 'server.js' consume CRUD requests from the client.
            - This file could be broken down into multiple files to make it neater.
            - Data is stored in JSON files.

- Navigate between screens

      Complete:
            - Achieved with React Router

- Compute the rotation schedule of game presenters for a single day (3 shifts) and display it on screen using of your choice.

      Incomplete:
            - I think the assignment was short of some crucial information to complete the task and I found myself in a position where I had to make assumptions:
                  - the objective is to maximize up-time per table, which is achieved by:
                        Presenters = Tables + 1 (per group of tables) 

                  - one break per shift, in any time-slot, is enough

                  - The supply of tables will be sufficient to keep the number of presenters busy and not have a situation where presenters cannot be assigned to a table due to lack of tables

                  - the suggested grouping of tables into groups of 3, 4, or 5, is not conducive to maximizing table up-time, so it was not taken into consideration. Instead, calculations are based on the formula above, if there happens to be more presenters, the 'surplus' of presenters is approportioned among groups.

                  - A group can have a maximum of 23 tables, since the number of 20-minute time-slots per shift is 24, thus 24 presenters can be rotated around 23 tables in an entire shift. If there are more tables, then another group is created. So, considering three shifts, the number of presenters has to be:
                  
                        presenters >= (tables + 1) * 3
                  
                  which means that tables have to be limited to:

                        maxTables = (presenters / 3) - 1

                  Any tables over this amount cannot be operated.

                  Below are some examples assuming an infinite number of tables and a downsize of table capacity according to the equation 'maxTables = (presenters / 3) - 1', meaning there is 1 presenter more than the number of tables.

                  Example 1:

                  if (tables < 24) {
                        create one groups:
                              Group 1: 12 tables with 13 presenters
                              Group 2: 11 tables with 12 presenters
                  }

                  Example 2:

                  if (tables === 24) {
                        create two groups:
                              Group 1: 12 tables with 13 presenters
                              Group 2: 11 tables with 12 presenters
                  }
  
                  This calculation and group apportionment is done in 'src/store/schedule/initializeSchedule.ts', (however I did not have enough time to translate the result and shown in the client).

                  To view the calculation, open devTools Console and check the `groupsPerShift` array. The number of presenters is always one more than the number of tables.

                  I stopped when I realized that testing this would take too much time. Adding/deleting tables to test different combinations of tables/presenters takes too much time, arguable an exercise in itself.

                  Kindly note that in order to test the above theory of a threshold of 24 tables per shift, over (24 + 1) * 3 presenters are required. I had to find a random name generator, split the fields into name and surname using Excel, and paste them into JSON format.

                  With respect to tables, there is no 'random table generator', all input in manual. Adding/deleting these entries to test different scenarios consumes a lot of time, even if done with Jest.


## Additional Challenges

- TypeScript

      Complete

- Security

      Incomplete: no time to implement this.

- Configurable List View

      Incomplete: no time to implement this.

- Photo upload

      Incomplete: no time to implement this.

- Scheduling Fairness

      Incomplete: no time to implement this.

- Docker

      Incomplete: I have no knowledge of Docker

## Testing

Example: src/utils/generateTimeSlots.test.ts

Shows usage of `each`

No time to implement api and thunk tests.

## The Server

Proper error handling such as the below was not implemented:
- A 400 status code is sent to the client, however this is not consumed, and no error is shown to the user.
- logging on backend: not implemented
- notify the user on the client: not implemented
