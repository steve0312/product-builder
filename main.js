
const destinations = [
    { name: "Paris", country: "France", description: "The city of lights, known for its art, fashion, and culture.", imageUrl: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Kyoto", country: "Japan", description: "A city of ancient temples, beautiful gardens, and traditional geishas.", imageUrl: "https://images.pexels.com/photos/161352/japan-kyoto-kinkaku-ji-golden-pavilion-161352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Bora Bora", country: "French Polynesia", description: "A tropical paradise with crystal-clear waters and overwater bungalows.", imageUrl: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { name: "New York City", country: "USA", description: "The city that never sleeps, with iconic landmarks and endless entertainment.", imageUrl: "https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Rome", country: "Italy", description: "A city rich in history, with ancient ruins and world-renowned cuisine.", imageUrl: "https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Cairo", country: "Egypt", description: "Home to the pyramids and a vibrant culture.", imageUrl: "https://images.pexels.com/photos/3958958/pexels-photo-3958958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
];

class DestinationCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    updateContent(destination) {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    border-radius: 12px;
                    overflow: hidden;
                    position: relative;
                    color: white;
                    height: 250px;
                    display: flex;
                    align-items: flex-end;
                }
                .card-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center;
                    transition: background-image 0.5s ease-in-out;
                }
                .card-background::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
                }
                .content {
                    padding: 1.5rem;
                    position: relative;
                    z-index: 1;
                }
                h2 {
                    margin: 0 0 0.5rem 0;
                    font-size: 1.8rem;
                }
                p {
                    margin: 0;
                    font-size: 1.1rem;
                }
            </style>
            <div class="card-background" style="background-image: url('${destination.imageUrl}')"></div>
            <div class="content">
                <h2>${destination.name}, ${destination.country}</h2>
                <p>${destination.description}</p>
            </div>
        `;
    }
}

customElements.define('destination-card', DestinationCard);

document.getElementById('generator-button').addEventListener('click', () => {
    const destinationCard = document.querySelector('destination-card');
    const randomIndex = Math.floor(Math.random() * destinations.length);
    const randomDestination = destinations[randomIndex];
    destinationCard.updateContent(randomDestination);
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
