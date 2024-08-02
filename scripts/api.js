document.addEventListener('DOMContentLoaded', (event) => {
    const apiKey = 'live_LuOiptEvyJ2Pb4RSx0MEYcCNzJ1IBzNHRrQOzbusVjdSm3fVxsBTVOPsc9yKPeHa';

    async function fetchCatImages() {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/breeds', {
                headers: {
                    'x-api-key': apiKey
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching the Cat API:', error);
            return [];
        }
    }
    async function displayCatBreeds(breeds) {
        const catBreedsDiv = document.getElementById('catBreeds');
        catBreedsDiv.innerHTML = ''; // Clear previous breeds

        for (const breed of breeds) {
            const colDiv = document.createElement('div');
            colDiv.classList.add('col-md-4', 'mb-4', 'd-flex', 'align-items-stretch');

            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card');

            const imgElement = document.createElement('img');
            imgElement.src = breed.image?.url || 'https://via.placeholder.com/300x200?text=No+Image';
            imgElement.classList.add('card-img-top');
            imgElement.alt = breed.name;  // Set the alt attribute

            const cardBodyDiv = document.createElement('div');
            cardBodyDiv.classList.add('card-body');

            const cardTitle = document.createElement('h2');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = breed.name;

            const cardText = document.createElement('p');
            cardText.classList.add('card-text', 'description_card');
            cardText.textContent = breed.description;

            const buttonInfo = document.createElement('button');
            buttonInfo.classList.add('btn', 'btn-info');
            buttonInfo.textContent = 'More Info';
            buttonInfo.addEventListener('click', () => {
                openBreedPage(breed);
            });

            cardBodyDiv.appendChild(cardTitle);
            cardBodyDiv.appendChild(cardText);
            cardBodyDiv.appendChild(buttonInfo);
            cardDiv.appendChild(imgElement);
            cardDiv.appendChild(cardBodyDiv);
            colDiv.appendChild(cardDiv);
            catBreedsDiv.appendChild(colDiv);
        }
    }

    function openBreedPage(breed) {
        function convertToPercentage(part) {
            const total = 5;
            if (total === 0) {
                return 0; // Um Division durch null zu vermeiden
            }

            return (part / total) * 100;
        }
        const breedPage = window.open('', '_blank');
        const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${breed.name}</title>
            <link rel="icon" href="bilder/cat_icon.png" type="imege/ x-icon">
        
            <!--eigene scripts -->
            <link rel="stylesheet" href="styels/styel.css" />
            <link rel="stylesheet" href="styels/statick.css" />
        
            <script src="scripts/swiper.js"></script>
            <script src="scripts/api.js"></script>
            <!--eigene scripts -->
        
            <!-- Bibliotheken -->
        
            <!--Boostrap-->
            <link rel="stylesheet" href="Boostrap_min/css/bootstrap.min.css" />
            <script src="Boostrap_min/js/bootstrap.bundle.min.js"></script>
            <!--Boostrap-->
        
        
        
            <!-- Bibliotheken -->
        
        
        
        
        
        </head>
        
        <body onload="">
            <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" style="width: 100%;">
                <div class="container-fluid">
                    <a class="navbar-brand" href="index.html"><img class="nav-icon" src="bilder/cat_icon.png" alt="leptop"></a>
                    <span><i class="name" style="color: rgba(129, 107, 107, 0.856);"> Cat</i> <i class="name"
                            style="color: rgb(189, 179, 179); ">World</i></span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Angebote</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">Dropdown</a>
                                <ul class="dropdown-menu an">
                                    <li><a class="dropdown-item" href="Katzenrassen.html">Katzenrassen </a></li>
                                    <li><a class="dropdown-item" href="#">Arbeits-Laptops</a></li>
                                    <li><a class="dropdown-item" href="#">Normale Laptops</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        
            <main>
                <!-- <h1>Abyssinian</h1>
                <img src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg" class="img-cat" alt="${breed.name}">
        
        -->
        
                <div class="card cat_card">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src="${breed.image?.url || 'https://via.placeholder.com/400x300?text=No+Image'}" class="card-img-top" alt="${breed.name}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h1 class="card-title ">${breed.name}</h1>
                                <p class="card-text description">${breed.description}</p>
                                
                                <h3 class="text-body-secondary">dog friendly </h3>
                                <div class="progress" style="height: 30px; width: 350px;">
                                    <div id="progress-bar" class="progress-bar bg-success" role="progressbar"
                                    style="width: ${convertToPercentage(breed.dog_friendly)}%; font-size: 25px;" aria-valuemax="100"> ${convertToPercentage(breed.dog_friendly)}%</div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        
        
        </body>
        
        </html>
        `;
        breedPage.document.write(htmlContent);
        breedPage.document.close();
    }





    async function init() {
        const breeds = await fetchCatImages();
        displayCatBreeds(breeds)
        console.log(breeds);
    }

    init();
});
