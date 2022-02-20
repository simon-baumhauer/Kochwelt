function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

function rezept1() {
    includeHTML();
    let numbers1 = [500, 250, 20, 1, 2, 250, 5, 50]
    let ingredients1 = ['g Mehl', 'ml Milch', 'g Zucker', ' Würfel Hefe (ca. 40g)', ' Eier', 'g Butter', 'g Salz', 'ml Wasser', 'Prise Zucker und Salz'];
    let results1 = [];
    convert(numbers1, ingredients1, results1);
}

function rezept2() {
    includeHTML();
    let numbers2 = [500, 250, 20, 1, 2, 250, 5, 50]
    let ingredients2 = ['g Mehl', 'ml Milch', 'g Zucker', ' Würfel Hefe (ca. 40g)', ' Eier', 'g Butter', 'g Salz', 'ml Wasser', 'Prise Zucker und Salz'];
    let results2 = [];
    convert(numbers2, ingredients2, results2);
}

function rezept3() {
    includeHTML();
    let numbers3 = [1, 2, 250, 1, 400, 1, 2, 500]
    let ingredients3 = [' Lauchzwiebel(n)', 'EL gehackte Petersilie', 'g Kirschtomate(n)', 'EL Olivenöl', 'g Bandnudel(n)', ' EL Tomatenmark', ' EL gehackte Petersilie', 'g Lachsfilets ohne Haut', 'schwarzer Pfeffer', 'Salz'];
    let results3 = [];
    convert(numbers3, ingredients3, results3);
}


function convert(numbers, ingredients, results) {
    let output = document.getElementById('listItems');
    output.innerHTML = '';
    results = [];
    let ref = document.getElementById('counter');
    numberAsString = ref.value;
    multiplier = parseInt(numberAsString);
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        let result = multiplier * number;
        results.push(result);
    }

    for (let i = 0; i < ingredients.length; i++) {
        const result = results[i];
        const ingredient = ingredients[i];
        if (ingredient && result) {
            output.innerHTML += `
            <li>${result}${ingredient}</li>
            `;
        } else {
            output.innerHTML += `
            <li>${ingredient}</li>
            `;
        }

    }
}



