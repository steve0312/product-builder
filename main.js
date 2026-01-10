
const destinations = [
    { name: "Paris", country: "France", description: "The city of lights, known for its art, fashion, and culture." },
    { name: "Kyoto", country: "Japan", description: "A city of ancient temples, beautiful gardens, and traditional geishas." },
    { name: "Bora Bora", country: "French Polynesia", description: "A tropical paradise with crystal-clear waters and overwater bungalows." },
    { name: "New York City", country: "USA", description: "The city that never sleeps, with iconic landmarks and endless entertainment." },
    { name: "Rome", country: "Italy", description: "A city rich in history, with ancient ruins and world-renowned cuisine." },
    { name: "Cairo", country: "Egypt", description: "Home to the pyramids and a vibrant culture." },
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
