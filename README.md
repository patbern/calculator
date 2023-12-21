*Calculator* is an aplication with simple graphical interface for basic calculations. 

You can run the program by following this link: https://patbern.github.io/calculator/
or by downloading the repository locally to your computer and running index.html file.

Used technologies:
- HTML
- CSS
- Javascript

Calculator functions:
- addition (+)
- substraction (-)
- multiplication (×)
- division (÷)
- clear entry (C)
- delete (DEL)
- equals (=)
- negative numbers (+/-)
- last operations history (last operations)
- undo last operations (undo)
- clear calculator history (clear)

Security measures:
- Program prevents the entry of more than one '.' character.
- Calculator protects against division by '0': Attempting an invalid operation triggers an alert, and the screen is cleared.
- Program removes unnesessary zeros loading before number.

History panel:
- Last operations history is saved in panel on the right side.
- Clear history button: using the 'clear' button removes the entire history log.
- In case of a large number of history records apears a scrollbar.
- Incorrect records related to division by zero does'nt saved in the history.

Future code upgrades:
- Allow users to freely change the math sign without using the delete button.
- Add more functions for opperations such as exponentiation ora square rooting.
- Improve the graphical styling of the alerts for invalid operations.
- Add function to round non-integer numbers, e.g. to two decimal places.
- Exclude removal of '0' before a non-integer number, e.g. when user entres the number '0.1'.