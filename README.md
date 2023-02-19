# testing-practice
Write tests for the following, and then make the tests pass!

<ol>
  <li>A <code>capitalize</code> function that takes a string and returns it with the first character capitalized.</li>

  <li>A <code>reverseString</code> function that takes a string and returns it reversed.</li>

  <li>A <code>calculator</code> object that contains functions for the basic operations: <code>add</code>, <code>subtract</code>, <code>divide</code>, and <code>multiply</code>. Each of these functions should take two numbers and  return the correct calculation.</li>

<li>A <code>caesarCipher</code> function that takes a string and a shift factor and returns it with each character “shifted”. Read more about how a Caesar cipher works on [this website](http://practicalcryptography.com/ciphers/caesar-cipher/).
  <ul>
    <li>Don’t forget to test wrapping from <code>z</code> to <code>a</code>.</li>
    <li>Don’t forget to test keeping the same case.</li>
    <li>Don’t forget to test punctuation!</li>
    <li>For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this case you only need tests for the final <code>caesarCipher</code> function. If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.</li>
  </ul>
</li>
  <li>An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.</li>
    ```const object = analyzeArray([1,8,3,4,2,6]);

    object == {
      average: 4,
      min: 1,
      max: 8,
      length: 6
    };
    ```
</ol>
