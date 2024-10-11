// Profile picture section bayet
document.getElementById('profilePic').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const preview = document.getElementById('profilePicPreview');
        preview.src = e.target.result;  
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        // kung walay gi upload nga profile picture bayot mo set ra sa default profile pic
        const defaultPicPath = 'C:\\Users\\andre\\Music\\IAS\\defaultpfp.jpg';
        document.getElementById('profilePicPreview').src = defaultPicPath; // set default profile pic
    }
});

// Handle form submission
document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const bio = document.getElementById('bio').value;
    const pronouns = document.getElementById('pronouns').value;
    const galleryFiles = document.getElementById('gallery').files;
    const profilePicInput = document.getElementById('profilePic');

    // 3 ra limit gibutang nako sa featured photos iadjust rani kung ganahan ka daghanon bayet 
    if (galleryFiles.length > 3) {
        alert('You can upload a maximum of 3 photos.');
        return; 
    }

    // Save values to local storage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('bio', bio);
    localStorage.setItem('pronouns', pronouns);

    
    if (profilePicInput.files.length > 0) {
        const file = profilePicInput.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem('profilePic', e.target.result); // save uploaded profile picture
            saveGalleryAndRedirect(galleryFiles); 
        };
        reader.readAsDataURL(file);
    } else {
       
        localStorage.setItem('profilePic', 'C:\\Users\\andre\\Music\\IAS\\defaultpfp.jpg'); 
        saveGalleryAndRedirect(galleryFiles); 
    }
});

// save featured photos yawerds
function saveGalleryAndRedirect(galleryFiles) {
    const galleryArray = [];
    if (galleryFiles.length === 0) {
        localStorage.setItem('gallery', JSON.stringify(galleryArray));
        window.location.href = "page2.html";  // Redirect sa result page
    } else {
        for (let i = 0; i < galleryFiles.length; i++) {
            const reader = new FileReader();
            reader.onload = function(e) {
                galleryArray.push(e.target.result);
            
                if (i === galleryFiles.length - 1) {
                    localStorage.setItem('gallery', JSON.stringify(galleryArray));
                    window.location.href = "page2.html";  // Redirect sa result page ig submit 
                }
            };
            reader.readAsDataURL(galleryFiles[i]);
        }
    }
}
