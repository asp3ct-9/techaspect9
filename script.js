document.addEventListener('DOMContentLoaded', function () {
    // Top-rated videos (example data)
    const topRatedVideosData = [
        { title: 'Introduction to Cybersecurity', url: 'https://www.itgovernance.co.uk/what-is-cybersecurity#:~:text=Cyber%20security%20is%20the%20application,systems%2C%20networks%2C%20and%20technologies.' },
        { title: 'Mastering Ethical Hacking', url: 'https://www.synopsys.com/glossary/what-is-ethical-hacking.html' },
        // Add more top-rated videos as needed
    ];

    // Display top-rated videos     
    const topRatedVideosContainer = document.getElementById('topRatedVideos');
    topRatedVideosData.forEach(video => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${video.url}" target="_blank">${video.title}</a>`;
        topRatedVideosContainer.appendChild(listItem);
    });

    // Handle review form submission
    const reviewForm = document.getElementById('reviewForm');
    const reviewsContainer = document.getElementById('reviews');

    reviewForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const reviewText = document.getElementById('review').value;

        // Display the new review
        const newReview = document.createElement('div');
        newReview.innerHTML = `<p><strong>${name}</strong>: ${reviewText}</p>`;
        reviewsContainer.appendChild(newReview);

        // Reset the form
        reviewForm.reset();
    });
});
