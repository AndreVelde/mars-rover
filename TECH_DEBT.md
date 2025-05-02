- Adjust string magic values to constants/ enums [x]
- Adjust rover change direction from Rover to RoverState class [x]
- Adjust rover move forward from Rover to RoverState class [x]
- Remove unused method G from rover class [x]
- Move XYD method to roverState class from rover to reduce feature envy [x]
- Add aa constructor to RoverState and initialize it in the Rover constructor [x]

- Change roverState dd from string to RoverDirection enum [x]
  - Adjust roverState constructor to accept RoverDirection enum [x]
    - Adjust Rover constructor to pass RoverDirection enum [x] 

- Adjust RoverState changeDirection and moveForward methods to accept RoverCommand enum [ ]
  - Adjust go to pass in the RoverCommand enum instead of a string [ ]
