
const destinations = [
    { name: "Paris", country: "France", description: "The city of lights, known for its art, fashion, and culture.", imageUrl: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Kyoto", country: "Japan", description: "A city of ancient temples, beautiful gardens, and traditional geishas.", imageUrl: "https://images.pexels.com/photos/161352/japan-kyoto-kinkaku-ji-golden-pavilion-161352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Bora Bora", country: "French Polynesia", description: "A tropical paradise with crystal-clear waters and overwater bungalows.", imageUrl: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { name: "New York City", country: "USA", description: "The city that never sleeps, with iconic landmarks and endless entertainment.", imageUrl: "https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Rome", country: "Italy", description: "A city rich in history, with ancient ruins and world-renowned cuisine.", imageUrl: "https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Cairo", country: "Egypt", description: "Home to the pyramids and a vibrant culture.", imageUrl: "https://images.pexels.com/photos/3958958/pexels-photo-3958958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Seoul", country: "South Korea", description: "A vibrant city where modern technology meets ancient palaces.", imageUrl: "https://images.pexels.com/photos/2376712/pexels-photo-2376712.jpeg" },
    { name: "London", country: "UK", description: "A historic city with iconic landmarks like the Tower of London and Buckingham Palace.", imageUrl: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg" },
    { name: "Sydney", country: "Australia", description: "Famous for its harbourfront Sydney Opera House, with a distinctive sail-like design.", imageUrl: "https://images.pexels.com/photos/1878346/pexels-photo-1878346.jpeg" },
    { name: "Rio de Janeiro", country: "Brazil", description: "Known for its sprawling favelas, Carnaval festival, and Christ the Redeemer statue.", imageUrl: "https://images.pexels.com/photos/2860807/pexels-photo-2860807.jpeg" },
    { name: "Moscow", country: "Russia", description: "Home to the Kremlin, Red Square, and St. Basil's Cathedral's colorful domes.", imageUrl: "https://images.pexels.com/photos/2363/moscow-russia-red-square-kremlin.jpg" },
    { name: "Beijing", country: "China", description: "A mix of modern architecture and ancient sites such as the Forbidden City palace complex.", imageUrl: "https://images.pexels.com/photos/241955/pexels-photo-241955.jpeg" },
    { name: "Bangkok", country: "Thailand", description: "A city of ornate shrines and vibrant street life.", imageUrl: "https://images.pexels.com/photos/373904/pexels-photo-373904.jpeg" },
    { name: "Dubai", country: "UAE", description: "Known for luxury shopping, ultramodern architecture, and a lively nightlife scene.", imageUrl: "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg" },
    { name: "Machu Picchu", country: "Peru", description: "An Incan citadel set high in the Andes Mountains in Peru.", imageUrl: "https://images.pexels.com/photos/2929906/pexels-photo-2929906.jpeg" },
    { name: "Santorini", country: "Greece", description: "One of the Cyclades islands in the Aegean Sea, with its iconic whitewashed, cubiform houses.", imageUrl: "https://images.pexels.com/photos/161852/santorini-greece-travel-holiday-161852.jpeg" },
    { name: "Serengeti National Park", country: "Tanzania", description: "A vast ecosystem in east-central Africa, famous for its annual migration of over 1.5 million wildebeest.", imageUrl: "https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg" },
    { name: "Amsterdam", country: "Netherlands", description: "Known for its artistic heritage, elaborate canal system and narrow houses with gabled facades.", imageUrl: "https://images.pexels.com/photos/208709/pexels-photo-208709.jpeg" },
    { name: "Venice", country: "Italy", description: "A city built on more than 100 small islands in a lagoon in the Adriatic Sea.", imageUrl: "https://images.pexels.com/photos/326709/pexels-photo-326709.jpeg" },
    { name: "Vancouver", country: "Canada", description: "A bustling west coast seaport in British Columbia, is among Canada’s densest, most ethnically diverse cities.", imageUrl: "https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg" },
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
