- need to generate random number (math.random) but with the user selections I have to prompt each time with a prompt window.
- How do you select the criteria?

- prompt (for text inputs)
- confirm (for Yes/No)
- alert (display info messages)

What is the criteria?

- Choose password length? (prompt)
  - User can choose length >= 8 and less than 128 (what type of data is stored here)
    - check if you can convert the text from user to integer
    - validate if in range else display an alert message and break
- Do you want to include lowercase characters? (confirm) What type of data will this store
  - User can select Yes or No (true/false)
    - no validation here
- Do you want to include uppercase characters? (confirm)
  - User can select Yes or No (true/false)
    - no validation here
- Do you want to include numeric characters? (confirm)
  - User can select Yes or No (true/false)
    - no validation here
- Do you want to include special characters? (confirm)
  - User can select Yes or No (true/false)
    - no validation here
- Before proceeding check if all at least one confirm is YES
  - validate if all false then display alert message and break

DO NOT DO THIS:

- DO NOT change HTML layout
- DO NOT change CSS

User Flow

- Click on generate password button
- Presented with criteria
- Fill in the criteria
- Password should appear on the page

Steps

- Declare a function `generatePassword`
- Declare const for lowercase
  abcdefghijklmnopqrstuvwxyz
- Declare const for uppercase
  ABCDEFGHIJKLMNOPQRSTUVWXYZ
- Declare const for numeric
  1234567890
- Declare const for specialCharacters
  " !"#$%&'()\*+,-./:;<=>?@[\]^\_`{|}~"

---

My Logic:

in the function generatePassword, we need to:

create section to get critera questions entered with prompts and confirms,

new section need to confirm if length of char, and if lowercase is true or false, uppercase is true, numerical is true or false, and special si true or false etc...

then pass out that information to generate password section, thn from thre return a string of the randomly generated password.

JUST write in the function generatePassword()
dont touch rest of code (apprently)

some ideas:
prompt for characters -- they put "10", convert to into integar,
is it within range 8 - 128 -- true or false---- if false then alert and break--- true i ask them to confirm the next questions with confirm prompt (i think)---
Then on the true branch, confirm if lowercase in true or false..
if uppercase included, T/F
if numerical, T/F
if any special characters T/F.
store them in seperate variables if true or false

check if all above are false, if true then alrt and break, if false that the above are false..... get the criteria and put it back into a section main function with what values are (I think)

after making password, the return value fo the fucntion needs ot be stored in a seperate variable, (for example, criteria)

this new criteria variable goes into a new section, and the trurn value is the "generatePassword(); that prints out my password!

Inside this criteria section , make lists inside them =
Declare const for the characters that are uppercase:ABCDEFG...
delcare const for lower case: abcdefg...
declare const for numeric: 12345
delcare for special characters: " !"#$%&'()\*+,-./:;<=>?@[\]^\_`{|}~"
--

make a new password container, within the length of the value given at start foor character length (10 for example)--- gather a combination from all of the relevant const variables above.
-- pick a random variable with their string of characters from each of the delcared variables (uppercase, lowercase etc.)
--
pick a random character from each delcared variable at a time.
--
We need to do this the same amount of times the uder chose as character length, over and over the amount fo times of character length. a for loop needed here I think. then push those numbers into a variable to put into password.
--
Need to randomise between these choices the user chose with upper/lower case etc.
--
Might need to make a function that gives me an array, and return a single character form that bucket.
--- randomly get a number form an array.
