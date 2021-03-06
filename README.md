# _Mr. Roboger's Neighborhood_

#### _6/12/2020_

#### By: _**Hannah Beinstein**_

## Description:

_This program was created as a way to practice arrays and looping. A user is able to enter a number as an input, and the program will count up to that number and add the results to the page. Numbers that contain a 1 will be replaced by the word "beep", numbers that contain a 2 will be replaced by the word "boop" and numbers that contain a 3 will be replaced by the phrase "Won't you be my neighbor?". If a number contains multiples of these digits, the program will prioritize the number 3 over the number 2, and the number 2 over the number 1. See the spec chart below for more information._

## Setup/Installation Requirements

* Clone the project from its GitHub repository (https://github.com/HBeinstein/beepBoopBeMyNeighbor).
* Open in your code editor of choice.
* Drag index.html file into your browser or double click it to view site.
* View this site live on ghpages at: https://hbeinstein.github.io/beepBoopBeMyNeighbor/.


## Specifications
_The chart below shows all possible input behaviors and their expected outputs._

| Behavior       | Input         | Output  |
| ------------- |:-------------:| -----:|
| Non-numeric values will not be accepted | ! | "Please enter a valid number" | 
| The number is 0 | 0 | "Sorry, I can't count to 0, please enter a new number!" | 
| The number is greater than 5000 | 5001 | "Please enter a number smaller than 5000!" | 
| A number does not contain a "1", "2", or "3" | 5 | "5" | 
| A number contains a decimal | 5.7 | "5" | 
| A number contains a "1" | 11 |  "Beep!" | 
| A number contains a "2" | 2 | "Boop!" |
| A number contains a "3" | 37 | "Won't you be my neighbor?" |
| A number contains a "1" and a "2" | 12 | "Boop!" |
| A number contains a "1" and a "3" | 13 | "Won't you be my neighbor?" |
| A number contains a "2" and a "3" | 23 | "Won't you be my neighbor?" |


## Known Bugs

_No known bugs. If a bug is found, please contact me at the address provided below. _

## Support and contact details

_Hannah Beinstein:_ 
hannah.beinstein@gmail.com

## Technologies Used

* HTML
* CSS
* JavaScript
* jQuery

### License

Licensed for usage under the MIT license.

Copyright (c) 2020 **_Hannah Beinstein_**