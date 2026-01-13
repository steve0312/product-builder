
const destinations = [
    { name: "Paris", country: "France", description: "The city of lights, known for its art, fashion, and culture." },
    { name: "Kyoto", country: "Japan", description: "A city of ancient temples, beautiful gardens, and traditional geishas." },
    { name: "Bora Bora", country: "French Polynesia", description: "A tropical paradise with crystal-clear waters and overwater bungalows." },
    { name: "New York City", country: "USA", description: "The city that never sleeps, with iconic landmarks and endless entertainment." },
    { name: "Rome", country: "Italy", description: "A city rich in history, with ancient ruins and world-renowned cuisine." },
    { name: "Cairo", country: "Egypt", description: "Home to the pyramids and a vibrant culture." },
];

// Replace with your Pexels API key
const PEXELS_API_KEY = 'YOUR_PEXELS_API_KEY';

async function getDestinationImage(destinationName) {
    if (PEXELS_API_KEY === 'YOUR_PEXELS_API_KEY') {
        console.error('Please replace YOUR_PEXELS_API_KEY with your actual Pexels API key.');
        return 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'; // A default image
    }
    const response = await fetch(`https://api.pexels.com/v1/search?query=${destinationName}&per_page=1`, {
        headers: {
            Authorization: PEXELS_API_KEY
        }
    });
    const data = await response.json();
    return data.photos[0]?.src.large || 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
}

class DestinationCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    updateContent(destination, imageUrl) {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    border-radius: 12px 12px 0 0;
                }
                .content {
                    padding: 1rem;
                }
                h2 {
                    color: var(--primary-color);
                    margin-bottom: 0.5rem;
                }
                p {
                    margin: 0;
                }
            </style>
            <div>
                <img src="${imageUrl}" alt="${destination.name}">
                <div class="content">
                    <h2>${destination.name}, ${destination.country}</h2>
                    <p>${destination.description}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('destination-card', DestinationCard);

document.getElementById('generator-button').addEventListener('click', async () => {
    const destinationCard = document.querySelector('destination-card');
    const randomIndex = Math.floor(Math.random() * destinations.length);
    const randomDestination = destinations[randomIndex];
    const imageUrl = await getDestinationImage(randomDestination.name);
    destinationCard.updateContent(randomDestination, imageUrl);
});

// Theme switcher logic
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Function to apply the theme
const applyTheme = (theme) => {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleButton.textContent = '☀️';
    } else {
        body.classList.remove('dark-mode');
        themeToggleButton.textContent = '🌙';
    }
};

// Check for saved theme on load
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

// Event listener for the toggle button
themeToggleButton.addEventListener('click', () => {
    let newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});
