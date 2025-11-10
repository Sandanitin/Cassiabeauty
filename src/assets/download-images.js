const fs = require('fs');
const https = require('https');
const path = require('path');

const assetsDir = path.join(__dirname, 'src', 'assets');
const images = [
  {
    url: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    filename: 'threading.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1522335773761-7444350d8336?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    filename: 'waxing.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    filename: 'facial.jpg'
  }
];

// Create assets directory if it doesn't exist
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Download each image
images.forEach(({ url, filename }) => {
  const filePath = path.join(assetsDir, filename);
  const file = fs.createWriteStream(filePath);
  
  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(filePath, () => {}); // Delete the file if there's an error
    console.error(`Error downloading ${filename}:`, err.message);
  });
});

console.log('All images downloaded successfully!');
