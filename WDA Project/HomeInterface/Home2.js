function addNewFeed() {
    // Get input values
    var postContent = document.getElementById("description").value;
    var headContent = document.getElementById("announcementHeading").value;
    var imageInput = document.getElementById("announcementImage");
  
    // Get the selected file
    var imageFile = imageInput.files[0];
  
    // Create a new feed element
    var feed = document.createElement("div");
    feed.className = "feed";
  
    // Construct the feed content
    var reader = new FileReader();
    reader.onload = function (e) {
      feed.innerHTML = `
        <!-- Your feed content structure goes here -->
        <div class="head">
          <div class="user">
            <div class="profile-photo">
              <img src="User-image2.jpeg">
            </div>
            <div class="info">
              <h3>Lana Rose</h3>
              <small>India, 15 MINUTES AGO</small>
            </div>
          </div>
        </div>
        <div>
          <h2>${headContent}</h2>
        </div>
        <div class="photo">
          <img src="${e.target.result}">
        </div>
        <div class="caption">
          <p><br>${postContent}</p>
        </div>
      `;
  
      // Append the new feed to the feeds container
      var feedsContainer = document.getElementById("feeds-container");
      feedsContainer.appendChild(feed);
    };
  
    // Read the image file
    reader.readAsDataURL(imageFile);
  }
  
  function submitAnnouncement() {
    // Add your logic to handle the announcement submission here
    // For example, you can get the text from the form and perform further actions
  
    // Close the modal after submission
    $('#announceModal').modal('hide');
  }
  