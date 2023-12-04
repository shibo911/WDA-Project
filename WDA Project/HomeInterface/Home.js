function addNewFeed() {
  // Get input value
  var postContent = document.getElementById("create-post").value;

  // Create a new feed element
  var feed = document.createElement("div");
  feed.className = "feed";

  // Construct the feed content
  feed.innerHTML = `
        <!-- Your feed content structure goes here -->
    <div class="head">
        <div class="user">
        <div class="profile-photo">
            <img src="User-image2.jpeg">
        </div>
        <div class="ingo">
            <h3>Lana Rose</h3>
            <small>India, 15 MINUTES AGO</small>
        </div>
    </div>
        </div>

        <div class="photo">
            <img src="post-image.png">
        </div>
        <div class="caption">
            <p><b>Lana Rose</b><br>${postContent}</p>
        </div>
    `;

  // Append the new feed to the feeds container
  var feedsContainer = document.getElementById("feeds-container");
  feedsContainer.appendChild(feed);
}
