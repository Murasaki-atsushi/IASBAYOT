// Retrieve data from local storage
const username = localStorage.getItem('username') || 'N/A';
const email = localStorage.getItem('email') || 'N/A';
const bio = localStorage.getItem('bio') || 'No bio available.';
const pronouns = localStorage.getItem('pronouns') || 'N/A';
const profilePic = localStorage.getItem('profilePic') || 'defaultpfp.jpg'; // Default if not found
const gallery = JSON.parse(localStorage.getItem('gallery')) || [];

// Display the stored data
document.getElementById('username').innerText = username;
document.getElementById('email').innerText = email;
document.getElementById('bio').innerText = bio;
document.getElementById('pronouns').innerText = pronouns;

// Display the profile picture
const profilePicElement = document.getElementById('profilePic');
if (profilePic) {
    profilePicElement.src = profilePic; // Set profile picture
} else {
    profilePicElement.src = 'defaultpfp.jpg'; // Set to default if no profile picture
}

// Display gallery images
const galleryContainer = document.getElementById('gallery');
if (gallery.length > 0) {
    gallery.forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = "Gallery Image";
        img.style.width = "120px"; // You can adjust the size
        img.style.margin = "5px"; // Space between images
        galleryContainer.appendChild(img);
    });
} else {
    const noGalleryMsg = document.createElement('p');
    noGalleryMsg.innerText = 'No featured photos available.';
    galleryContainer.appendChild(noGalleryMsg);
}
