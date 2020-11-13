# JS Style guide
### 1. Table of contents
### 2. Statement
### 3. Variable
### 4. Comments
### 5. Operators
### 6. Conditional-structure-if


1. #### Statement

*use correct spacing*

bad example
var x=y+2;

good example
var x = y + 2;

2. #### variable

*Use correct spacing, write descriptive keywords with camelCasing.*

bad example
var allmovies=y+2;

good example
var allMovies = y + 2;

3. #### Comments

*Write comments for code-block headings, to explain code and define last curly brackets*

good example
// ========================================================================= // Declaration of x variable // ============================================================================

var x = y + 2; // adds 2 to y

4. #### Operators

*Keep a space before and after any operator.*

bad example
var x=y+2;

good example
var x = y + 2;

5. #### Condition structure - if

*Use space after the keyword if. Use space after the parenthesis Use open curly braces at the end of first line. use close curly braces in a new line. keep the else keyword on the same line as the close curly braces of the previous set of brackets indent the code as given in the good example*

bad example
if(age>17) { alert('hi'); } else{alert('hello');}

good example
if (age > 17) { alert('hi'); } else { alert('hello'); }