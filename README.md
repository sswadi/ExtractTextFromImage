# ExtractTextFromImage

App Descrption: This app can be used to extract details from Govt IDs like PAN Card, Aadhaar Card, Voters Ids.

To accomplish this task, we will need to use Optical Character Recognition (OCR) technology to extract the information from the image. Here, we will use Tesseract.js, which is a popular and easy-to-use OCR library for Node.js.

Points to Note: 

1. The regular expression const regex = /^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/gm; is a regular expression pattern written in JS syntax. It matches a string that follows a specific pattern:
  1.The string must start with exactly 5 alphabetical characters (uppercase or lowercase) [A-Za-z]{5}
  2. This must be followed by exactly 4 digits \d{4}
  3. Finally, the string must end with exactly 1 alphabetical character (uppercase or lowercase) [A-Za-z]{1}
  4. The ^ and $ symbols at the beginning and end of the pattern indicate that the string must start and end with the specified pattern, respectively. The gm flags at the end of the pattern indicate that the pattern should match globally (i.e., find all matches rather than just the first) and that it should treat the input as a multiline string (i.e., ^ and $ match the beginning and end of each line rather than the beginning and end of the entire string).

2. Multer: A middleware used for handling file uploads in Node.js.
