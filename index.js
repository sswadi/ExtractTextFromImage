// Import required packages
const express = require('express');
const multer = require('multer');
const tesseract = require('node-tesseract-ocr');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

// Initialize the Express app
const app = express();

// Set up view engine
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layout');

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

// Set up multer upload
const upload = multer({ storage: storage });

// Set up routes
app.get('/', (req, res) => {
  res.render('index', { data: '' });
});

app.post('/extracttextfromimage', upload.single('file'), (req, res) => {
  const config = {
    lang: 'eng',
    oem: 1,
    psm: 3,
  };

  tesseract
    .recognize(req.file.path, config)
    .then((text) => {
      const regex = /^([a-zA-Z\s]+)\s+([a-zA-Z\s]+)\s+(.*)$/gm;
      const matches = regex.exec(text);

      const info = {
        name: matches[1].trim(),
        fatherName: matches[2].trim(),
        dob: matches[3].trim(),
      };

      res.json({ info });
    })
    .catch((error) => {
      console.log(error.message);
      res.json({ error: error.message });
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
