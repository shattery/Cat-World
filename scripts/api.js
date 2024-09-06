document.addEventListener('DOMContentLoaded', (event) => {
    const apiKey = 'live_LuOiptEvyJ2Pb4RSx0MEYcCNzJ1IBzNHRrQOzbusVjdSm3fVxsBTVOPsc9yKPeHa';

    async function fetchCatbreeds() {
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
        catBreedsDiv.innerHTML = '';

        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row', 'g-4');

        for (const breed of breeds) {
            const colDiv = document.createElement('div');
            colDiv.classList.add('col-12', 'col-md-6', 'col-lg-4');

            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card', 'h-100');

            const imgElement = document.createElement('img');
            imgElement.src = breed.image?.url || `https://via.placeholder.com/300x200?text=${breed.name}`;
            imgElement.classList.add('card-img-top');
            imgElement.alt = breed.name;

            const cardBodyDiv = document.createElement('div');
            cardBodyDiv.classList.add('card-body', 'd-flex', 'flex-column');

            const cardTitle = document.createElement('h2');
            cardTitle.textContent = breed.name;
            cardTitle.classList.add('card-title');

            const cardText = document.createElement('p');
            cardText.classList.add('card-text', 'flex-grow-1');
            cardText.textContent = breed.description;

            const buttonInfo = document.createElement('button');
            buttonInfo.classList.add('btn', 'btn-info', 'mt-auto');
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
            rowDiv.appendChild(colDiv);
        }

        catBreedsDiv.appendChild(rowDiv);
    }







    function openBreedPage(breed) {

        function convertToPercentage(part) {
            const total = 5;
            if (total === 0) {
                return 0; // Um Division durch null zu vermeiden
            }

            return (part / total) * 100;
        }

        function back_butto() {
            window.history.back();
        }

        const breedPage = window.open('', '_Self');
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
        <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">
                <img class="nav-icon" src="bilder/cat_icon.png" alt="leptop">
            </a>
            <span>
                <i class="name" style="color: rgba(129, 107, 107, 0.856);">Cat</i>
                <i class="name" style="color: rgb(189, 179, 179);">World</i>
            </span>
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
                            aria-expanded="false">Cat activities</a>
                        <ul class="dropdown-menu an">
                            <li><a class="dropdown-item" href="Katzenrassen.html">Cat breeds</a></li>
                            <li><a class="dropdown-item" href="cat_tips.html">Cat tips</a></li>
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

                                <button onclick="back_button()" type="button" class="btn btn-secondary"><a
                                href="">Back</a></button>

                                <h2 class="text-body-secondary">life span</h2>
                        <div style="font-size: 25px;">${breed.life_span}</div>

                                <div class="container mt-4">
                                <div class="row">
                                    <div class="col-md-6 col-lg-3 mb-4">
                                        <h3 class="text-body-secondary">Dog Friendly</h3>
                                        <div class="progress mt-3" style="height: 30px;">
                                            <div class="progress-bar bg-success" role="progressbar"
                                                style="width:${convertToPercentage(breed.dog_friendly)
            }%; font-size: 25px; " aria-valuemax="100">${convertToPercentage(breed.dog_friendly)
            }%</div>
                                        </div >
                                    </div >
    
                                    <div class="col-md-6 col-lg-3 mb-4">
                                        <h3 class="text-body-secondary"> Child Friendly</h3>
                                        <div class="progress mt-3" style="height: 30px;">
                                            <div class="progress-bar bg-success" role="progressbar"
                                                style="width: ${convertToPercentage(breed.child_friendly)
            }%; font-size: 25px;" aria-valuemax="100">${convertToPercentage(breed.child_friendly)
            }%</div>
                                        </div>
                                    </div>
    
                                    <div class="col-md-6 col-lg-3 mb-4">
                                        <h3 class="text-body-secondary">Affectionate</h3>
                                        <div class="progress mt-3" style="height: 30px;">
                                            <div class="progress-bar bg-success" role="progressbar"
                                                style="width: ${convertToPercentage(breed.affection_level)
            }%; font-size: 25px;" aria-valuemax="100">${convertToPercentage(breed.affection_level)}%</div>
                                        </div>
                                    </div>
    
                                    <div class="col-md-6 col-lg-3 mb-4">
                                        <h3 class="text-body-secondary">Social Needs</h3>
                                        <div class="progress mt-3" style="height: 30px;">
                                            <div class="progress-bar bg-success" role="progressbar"
                                                style="width: ${convertToPercentage(breed.social_needs)}%; font-size: 25px;" aria-valuemax="100">${convertToPercentage(breed.social_needs)}%</div>
                                        </div>
                                    </div>
    
                                    <div class="col-md-6 col-lg-3 mb-4">
                                        <h3 class="text-body-secondary">Adaptability</h3>
                                        <div class="progress mt-3" style="height: 30px;">
                                            <div class="progress-bar bg-success" role="progressbar"
                                                style="width: ${convertToPercentage(breed.adaptability)}%; font-size: 25px;" aria-valuemax="100">${convertToPercentage(breed.adaptability)}%</div>
                                        </div>
                                    </div>
    
                                    <div class="col-md-6 col-lg-3 mb-4">
                                        <h3 class="text-body-secondary">Energy Level</h3>
                                        <div class="progress mt-3" style="height: 30px;">
                                            <div class="progress-bar bg-success" role="progressbar"
                                                style="width: ${convertToPercentage(breed.energy_level)}%; font-size: 25px;" aria-valuemax="100">${convertToPercentage(breed.energy_level)}%</div>
                                        </div>
                                    </div>
    
                                    <div class="col-md-6 col-lg-3 mb-4">
                                        <h3 class="text-body-secondary">Stranger Friendly</h3>
                                        <div class="progress mt-3" style="height: 30px;">
                                            <div class="progress-bar bg-success" role="progressbar"
                                                style="width:${convertToPercentage(breed.stranger_friendly)}%; font-size: 25px;" aria-valuemax="100">${convertToPercentage(breed.stranger_friendly)}%</div>
                                        </div>
                                    </div>
    
                                    <div class="col-md-6 col-lg-3 mb-4">
                                        <h3 class="text-body-secondary">Health Issues</h3>
                                        <div class="progress mt-3" style="height: 30px;">
                                            <div class="progress-bar bg-success" role="progressbar"
                                                style="width:${convertToPercentage(breed.health_issues)}%; font-size: 25px;" aria-valuemax="100">${convertToPercentage(breed.health_issues)}%</div>
                                        </div>
                                    </div>
                                </div >
                            </div >

                                
                            </div >
                        </div >
                    </div >
                </div >
            </main >
        
        
        </body >
        
        </html >
        `;
        breedPage.document.write(htmlContent);
        breedPage.document.close();
    }


    async function filter(breeds, filter) {

    }


    async function init() {
        const breeds = await fetchCatbreeds();
        displayCatBreeds(breeds)
        console.log(breeds);
    }

    init();
});
