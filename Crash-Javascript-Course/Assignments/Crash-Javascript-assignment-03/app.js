(async function () {
    const response = await fetch("./movies.json");
    const movies = await response.json();

    let listElm = document.getElementById("genreDropDown");
    let listLang = document.getElementById("languageDropDown");
    let listYear = document.getElementById("yearDropDown");
    let listRating = document.getElementById("ratingDropDown");
    let listDes = document.getElementById("recipe-list");

    //  GENRE
    function displayGenre(movies) {
        listElm.innerHTML = "<option> All </option>";
        let emptyArr = [];
        movies.forEach(function (movie) {
            emptyArr += [].concat(movie.genres + ",");
        })
        emptyArr = emptyArr.split(",");
        let check = emptyArr.filter(function (val, index) {
            return emptyArr.indexOf(val) === index;
        });
        check.forEach(function (val) {
            return val;
        });
        for (let i = 0; i < check.length - 1; i++) {
            let option = document.createElement("option");
            option.text = check[i];
            listElm.add(option);
        }
    }

    displayGenre(movies);


    //  LANGUAGE
    function displayLanguage(movies) {
        listLang.innerHTML = "<option> All </option>";
        let emptyArr = [];
        movies.forEach(function (movie) {
            emptyArr += [].concat(movie.original_language + ",");
        })
        emptyArr = emptyArr.split(",");
        let check = emptyArr.filter(function (val, index) {
            return emptyArr.indexOf(val) === index;
        });
        check.forEach(function (val) {
            return val;
        });
        for (let i = 0; i < check.length - 1; i++) {
            let option = document.createElement("option");
            option.text = check[i];
            listLang.add(option);
        }
    }

    displayLanguage(movies);


    //  YEAR
    function displayYear(movies) {
        listYear.innerHTML = "<option> All </option>";
        let emptyArr = [];
        movies.forEach(function (movie) {
            emptyArr += [].concat(movie.release_date.split("").splice(0, 4).join("") + ",");
        })
        emptyArr = emptyArr.split(",");
        let check = emptyArr.filter(function (val, index) {
            return emptyArr.indexOf(val) === index;
        });
        check.forEach(function (val) {
            return val;
        });
        for (let i = 0; i < check.length - 1; i++) {
            let option = document.createElement("option");
            option.text = check[i];
            listYear.add(option);
        }
    }

    displayYear(movies);


    //  RATING
    function displayRating(movies) {
        listRating.innerHTML = "<option> All </option>";
        let emptyArr = [];
        movies.forEach(function (movie) {
            emptyArr += [].concat(movie.vote_average + ",");
        })
        emptyArr = emptyArr.split(",");
        let check = emptyArr.filter(function (val, index) {
            return emptyArr.indexOf(val) === index;
        });
        check.forEach(function (val) {
            return val;
        });
        for (let i = 0; i < check.length - 1; i++) {
            let option = document.createElement("option");
            option.text = check[i];
            listRating.add(option);
        }
    }

    displayRating(movies);
    const listElem2 = document.getElementById("recipe-list");
    function display(results) {
        listElem2.innerHTML = "";
        results.forEach(function (movie) {
            const li = document.createElement("li");
            const listItem = `
              <p>${movie.title}</p>
              <div >${movie.genres.join(",")}</div>
          `;
            li.innerHTML = listItem;
            listElem2.appendChild(li);

        })
    }

    const btnElm = document.getElementById("searchBtn");
    function findFunc() {
        const query = listElm.value;
        console.log(query);
        const results = movies.filter(function (movie) {
            return (movie.genres.join(" ").includes(query))
        });
        display(results);
    }
    btnElm.addEventListener("click", findFunc);

})();



/// just check for tasting
function genreFunc(value) {
    console.log(value);
}
function yearFunc(value) {
    console.log(value);
}
function langFunc(value) {
    console.log(value);
}
function ratingFunc(value) {
    console.log(value);
}