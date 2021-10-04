// Randum api ---
/* const loadSingleUser = () => {
    const url = 'https://randomuser.me/api/';
    fetch(url)
        .then(res => res.json())
        .then(data => displayUser(data.results[0]))
}
loadSingleUser();

const displayUser = user => {
    console.log(user);
} */

// Mealdb api ---

const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}

const toggleSearchResult = displayStyle => {
    document.getElementById('meals').style.display = displayStyle;
}

const searchMeal = () => {
    const searchText = document.getElementById('search-field').value;
    // diplay spinner
    toggleSpinner('block');
    toggleSearchResult('none');
    loadMeals(searchText);
    document.getElementById('search-field').value = '';

}
const loadMeals = searchText => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}
// loadMeals('searchText')

const displayMeals = meals => {
    const container = document.getElementById('meals');
    container.textContent = '';
    // if meals not found 
    /*  if (!meals) {
         console.log('meals not found');
     } */
    // using ? for optional chaining (is meals = null it will not go in, in the function)
    meals?.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.innerHTML = `
        <h1>${meal.strMeal}</h1>
        <p>${meal.strIngredient18 ? meal.strIngredient18 : ''}</p>
        <button onclick="loadMealDetails('${meal.strMeal}')">Click Me</button>
        `;

        /* 
        //Conditional Formating
        for <p></p> tag within `` 
        (if property value) meal.strIngredient18 ? (have found than show) meal.strIngredient18 : (other wise show) 'the massage' 
        */

        container.appendChild(div);
    });
    toggleSpinner('none');
    toggleSearchResult('block');
}

const loadMealDetails = mealName => {
    console.log(mealName);
}