
const recipes = [
{
    title: "French Onion Soup",
    img:"./images/photo-1455619452474-d2be8b1e70cd.jpeg",
    rating: 4.7,
    reviews: 267,
    prepTime: "15 min",
    cookTime: "60 min",
    servings: 4,
    level: "Intermediate",
    cuisine: "Mediterranean",
    ingredients: [
        "4 large onions, thinly sliced",
        "1/2 cup white wine",
        "1 liter beef broth",
        "4 tablespoons butter"
    ],
    instruction: [
        "Melt butter in a large pot and caramelize onions for 40 minutes.",
        "Add white wine and deglaze the pot.",
        "Add beef broth, bay leaves, and thyme. Simmer 20 minutes.",
        "Toast baguette slices.",
        "Top soup with bread and cheese, then broil 3-5 minutes."
    ],
    nutrition: {
        calories: 380,
        protein: "18g",
        carbs: "36g",
        fat: "18g",
        fiber: "4g",
        sodium: "980mg"
    }
},

{
    title: "Chicken Alfredo Pasta",
    rating: 4.8,
    reviews: 421,
    img:"./images/photo-1467003909585-2f8a72700288.jpeg",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: 3,
    level: "Easy",
    cuisine: "Italian",
    ingredients: [
        "250g fettuccine pasta",
        "2 chicken breasts, sliced",
        "1 cup heavy cream",
        "1 cup grated parmesan",
        "2 tablespoons butter"
    ],
    instruction: [
        "Cook pasta until al dente.",
        "Sauté chicken until golden.",
        "Melt butter, add cream and parmesan to form sauce.",
        "Mix pasta with sauce and chicken.",
        "Serve hot with parsley."
    ],
    nutrition: {
        calories: 520,
        protein: "32g",
        carbs: "45g",
        fat: "22g",
        fiber: "3g",
        sodium: "640mg"
    }
},

{
    title: "Beef Tacos",
    rating: 4.2,
    reviews: 310,
    img:"./images/photo-1529692236671-f1f6cf9683ba.jpeg",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 4,
    level: "Easy",
    cuisine: "Mexican",
    ingredients: [
        "500g ground beef",
        "1 packet taco seasoning",
        "8 small tortillas",
        "1 cup shredded lettuce",
        "1 cup cheddar cheese"
    ],
    instruction: [
        "Brown beef in a skillet.",
        "Add taco seasoning and water; let simmer.",
        "Warm tortillas.",
        "Fill tortillas with beef, lettuce, and cheese.",
        "Serve immediately."
    ],
    nutrition: {
        calories: 290,
        protein: "20g",
        carbs: "28g",
        fat: "12g",
        fiber: "2g",
        sodium: "760mg"
    }
},

{
    title: "Vegetable Stir Fry",
    rating: 4.6,
    reviews: 189,
    img:"./images/photo-1546069901-eacef0df6022.jpeg",
    prepTime: "15 min",
    cookTime: "10 min",
    servings: 2,
    level: "Easy",
    cuisine: "Asian",
    ingredients: [
    "1 bell pepper, sliced",
    "1 carrot, sliced",
    "1 broccoli head, chopped",
    "2 tablespoons soy sauce",
    "1 tablespoon sesame oil"
],
instruction: [
    "Heat oil in a wok.",
    "Add garlic then vegetables; stir fry 5 minutes.",
    "Add soy sauce and sesame oil.",
    "Cook another 2 minutes.",
    "Serve over rice or noodles."
],
    nutrition: {
    calories: 210,
    protein: "8g",
    carbs: "32g",
    fat: "6g",
    fiber: "5g",
    sodium: "540mg"
    }
},

{
    title: "Margherita Pizza",
    rating: 4.9,
    reviews: 502,
    img:"./images/photo-1565299585323-38d6b0865b47.jpeg",
    prepTime: "25 min",
    cookTime: "15 min",
    servings: 2,
    level: "Intermediate",
    cuisine: "Italian",
    ingredients: [
        "1 pizza dough",
        "1/2 cup tomato sauce",
        "200g fresh mozzarella",
        "Fresh basil leaves",
        "1 tablespoon olive oil"
],
instruction: [
    "Spread pizza dough on a tray.",
    "Add tomato sauce evenly.",
    "Place mozzarella slices and basil.",
    "Bake at high heat for 12–15 minutes.",
    "Drizzle olive oil before serving."
],
nutrition: {
    calories: 430,
    protein: "19g",
    carbs: "50g",
    fat: "14g",
    fiber: "3g",
    sodium: "720mg"
}
}
];

function changeRecieps() {
    let randomNumber = Math.floor(Math.random() * 5);

    let ingredientsHTML = "";
    for (let i = 0; i < recipes[randomNumber].ingredients.length; i++) {
        ingredientsHTML += `
            <div class="ele d-flex align-items-center gap-3 mb-3">
                <div class="number">
                    <span class="fw-bolder text-white">${i + 1}</span>
                </div>
                <p class="mb-0 text-secondary">${recipes[randomNumber].ingredients[i]}</p>
            </div>
        `;
    }

    let instructionHTML = "";
    for (let i = 0; i < recipes[randomNumber].instruction.length; i++) {
        instructionHTML += `
            <div class="ele d-flex align-items-center gap-3 mb-4">
                <div class="number-2">
                    <span class="fw-bolder text-white">${i + 1}</span>
                </div>
                <p class="mb-0 text-secondary">${recipes[randomNumber].instruction[i]}</p>
            </div>
        `;
    }



    document.getElementById('demo').innerHTML = `
    
        <div class="container rounded-5">
            <div class="row justify-content-center">
                <div class="left-content  px-0 bg-info col-12 col-lg-4  object-fit-contain overflow-hidden ">
                    <div class="inner">
                        <div class="image-box h-100 position-relative">
                            <div class="image ">
                                <img src=${recipes[randomNumber].img} class="h-100 object-fit-cover" alt="Reciepes 1">
                            </div>
                            <div class="layer-one bg-white rounded-5 position-absolute">
                                <span><i class="fa-solid fa-star text-warning"></i> <span>${recipes[randomNumber].rating}</span> <span id="span-reviews" class="text-secondary">(${recipes[randomNumber].reviews})</span></span>
                            </div>  
                            <div class="layer-two d-flex justify-content-center gap-5 px-4 py-4 bg-white rounded-4 position-absolute">
                                <div class="ele one text-center">
                                    <div class="icon">
                                        <i class="fa-solid fa-clock"></i>
                                    </div>
                                    <p class="my-0 text-secondary">Prep Time</p>
                                    <h6 class="my-0 fw-bolder">${recipes[randomNumber].prepTime}</h6>
                                </div>
                                <div class="ele two text-center">
                                    <div class="icon">
                                        <i class="fa-solid fa-fire-burner"></i>
                                    </div>
                                    <p class="my-0 text-secondary">Cook Time</p>
                                    <h6 class="my-0 fw-bolder">${recipes[randomNumber].cookTime}</h6>
                                </div>
                                <div class="ele three text-center">
                                    <div class="icon">
                                        <i class="fa-solid fa-people-group"></i>
                                    </div>
                                    <p class="my-0 text-secondary">Servings</p>
                                    <h6 class="my-0 fw-bolder">${recipes[randomNumber].servings}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-12 col-lg-7 bg-white right-content p-5 h-auto overflow-y-auto">
                    <div class="padges-right mb-3">
                        <span class="badge bdg-rl-1">${recipes[randomNumber].level}</span>
                        <span class="badge bdg-rl-2">${recipes[randomNumber].cuisine}</span>
                    </div>
                    <div class="head">
                        <div class="basic d-flex justify-content-between">
                            <div>
                                <h3 class="fw-bolder mb-0">${recipes[randomNumber].title}</h3>
                            </div>
                            <div class="share">
                                <span class="p-2 rounded-2 fs-6"><i class="fa-solid fa-bookmark"></i></span>
                                <span class="p-2 rounded-2 fs-6"><i class="fa-solid fa-share-nodes"></i></span>
                            </div>
                        </div>
                        <p class="fs-6 pt-2 text-secondary">Vibrant and aromatic curry with vegetables and coconut milk</p>
                    </div>
                    <div class="navs-tabs ">
                        <ul class="nav nav-pills mb-3 d-flex justify-content-center  navs-taps py-3" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active rounded-0 text-secondary px-4 py-2" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-one" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><span><i class="fa-solid fa-list-check me-2"></i></span>Ingredients</button>
                            </li>
                            <li >
                                <button class="nav-link rounded-0 text-secondary px-4 py-2" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-two" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><span><i class="fa-solid fa-chart-pie me-2"></i></span>Instruction</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link rounded-0 text-secondary px-4 py-2" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-three" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><span><i class="fa-solid fa-golf-ball-tee me-2"></i></span>Nutrition</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link rounded-0 text-secondary px-4 py-2" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-four" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><span><i class="fa-solid fa-golf-ball-tee me-2"></i></span>Chef's Tips</button>
                            </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent"> 
                            <div class="tab-pane fade show active" id="pills-one" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                <section class="navs-1-content rounded-4 py-4 px-4 overflow-auto">
                                    ${ingredientsHTML}
                                </section>

                            </div>
                            <div class="tab-pane fade" id="pills-two" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                                <section class="navs-2-content rounded-4 py-4 px-4  overflow-auto">

                                    ${instructionHTML}

                                </section>
                            </div>


                            <div class="tab-pane fade" id="pills-three" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                            <section class="navs-3-content rounded-4 py-4 px-4">
                                    <div class="  ">
                                        <div class="row gy-1 gx-2">
                                        <!-- Row 1 -->
                                        <div class="col-12 col-lg-6 ele3 rounded-4">
                                            <div class="info-box d-flex justify-content-between align-items-center">
                                                <div class="info-left d-flex align-items-center gap-3">
                                                    <span id="calories" class="icon"><i class="fa-solid fa-fire"></i></span>
                                                    <div>
                                                        <p class="mb-0">Calories</p>
                                                    </div>
                                                </div>
                                                <div class="info-right">
                                                    <h5 class="mb-0">${recipes[randomNumber].nutrition.calories}</h5>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Row 2 -->
                                        <div class="col-12 col-lg-6 ele3 rounded-4">
                                            <div class="info-box d-flex justify-content-between align-items-center">
                                            <div class="info-left d-flex align-items-center gap-3">
                                                <span id="protein" class="icon"><i class="fa-solid fa-dumbbell"></i></span>
                                                <div>
                                                <p class="mb-0">Protein</p>
                                                </div>
                                            </div>
                                            <div class="info-right">
                                                <h5 class="mb-0">${recipes[randomNumber].nutrition.protein}</h5>
                                            </div>
                                            </div>
                                        </div>

                                        <!-- Row 3 -->
                                        <div class="col-12 col-lg-6 ele3 rounded-4">
                                            <div class="info-box d-flex justify-content-between align-items-center">
                                            <div class="info-left d-flex align-items-center gap-3">
                                                <span id="cabohydrates" class="icon"><i class="fa-brands fa-pagelines"></i></span>
                                                <div>
                                                <p class="mb-0">Cabohydrates</p>
                                                </div>
                                            </div>
                                            <div class="info-right">
                                                <h5 class="mb-0">${recipes[randomNumber].nutrition.carbs}</h5>
                                            </div>
                                            </div>
                                        </div>

                                        <!-- Row 4 -->
                                        <div class="col-12 col-lg-6 ele3 rounded-4">
                                            <div class="info-box d-flex justify-content-between align-items-center">
                                            <div class="info-left d-flex align-items-center gap-3">
                                                <span id="fat" class="icon"><i class="fa-solid fa-droplet"></i></span>
                                                <div>
                                                <p class="mb-0">Fat</p>
                                                </div>
                                            </div>
                                            <div class="info-right">
                                                <h5 class="mb-0">${recipes[randomNumber].nutrition.fat}</h5>
                                            </div>
                                            </div>
                                        </div>

                                        <!-- Row 5 -->
                                        <div class="col-12 col-lg-6 ele3 rounded-4">
                                            <div class="info-box d-flex justify-content-between align-items-center">
                                            <div class="info-left d-flex align-items-center gap-3">
                                                <span id="fiber" class="icon"><i class="fa-solid fa-seedling"></i></span>
                                                <div>
                                                <p class="mb-0">Fiber</p>
                                                </div>
                                            </div>
                                            <div class="info-right">
                                                <h5 class="mb-0">${recipes[randomNumber].nutrition.fiber}</h5>
                                            </div>
                                            </div>
                                        </div>

                                        <!-- Row 6 -->
                                        <div class="col-12 col-lg-6 ele3 rounded-4">
                                            <div class="info-box d-flex justify-content-between align-items-center">
                                            <div class="info-left d-flex align-items-center gap-3">
                                                <span id="soduim" class="icon"><i class="fa-solid fa-cube"></i></span>
                                                <div>
                                                <p class="mb-0">Sodium</p>
                                                </div>
                                            </div>
                                            <div class="info-right">
                                                <h5 class="mb-0">${recipes[randomNumber].nutrition.sodium}</h5>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                            </section>

                            </div>
                            

                            <!-- ============= 3 ============== -->

                            <div class="tab-pane fade" id="pills-four" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">
                                <div class="activities-container container pb-5">
                                        <div class="activities-container-1 mb-4">
                                            <div class="content-1 d-flex">
                                                <span class="rounded-circle p-1"><i class="fa-solid fa-check"></i></span>
                                                <p>Adjust spice level by using more or less curry paste</p>
                                            </div>
                                        </div>
                                        <div class="activities-container-1 mb-4">
                                            <div class="content-1 d-flex">
                                                <span class="rounded-circle p-1"><i class="fa-solid fa-check"></i></span>
                                                <p>Adjust spice level by using more or less curry paste</p>
                                            </div>
                                        </div>
                                        <div class="activities-container-1 mb-4">
                                            <div class="content-1 d-flex">
                                                <span class="rounded-circle p-1"><i class="fa-solid fa-check"></i></span>
                                                <p>Adjust spice level by using more or less curry paste</p>
                                            </div>
                                        </div>
                                        <div class="activities-container-1 mb-4">
                                            <div class="content-1 d-flex">
                                                <span class="rounded-circle p-1"><i class="fa-solid fa-check"></i></span>
                                                <p>Adjust spice level by using more or less curry paste</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="my-3 hr">
                    
                    <button onclick="changeRecieps()" class="btn tru-btn py-3 px-4 rounded-4 border-0 mb-4 fw-bolder text-white "><span><i class="fa-solid fa-arrows-rotate"></i> Try Another Recieps</span></button>
                </div> 
            </div>


        </div>
    
    
    
    
    
    
    
    
    
    
    `

}