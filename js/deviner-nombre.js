/**
* Jeu du nombre mystère
* @author  Mathilde Mertz
* @version 0.1
* @since   2018-09-09 (date de création)
*/

// Main IIFE (Immediately-Invoked Function Expression, se prononce "iffy")
(function main() {
    'use strict';
    const minimum = 1;
    const maximum = 100;

    /**
     *
     * Retourne un nombre entier aléatoire compris entre min et max
     * @param min
     * @param max
     * @returns {number}
     */
    function tireNombre(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    let nbEssaie = 0;
    let nbMystere = tireNombre(minimum, maximum);
    let reponse = 0;

    reponse = Number(prompt(`Entrez un nombre compris en, ${minimum}, et, ${minimum},.`));
        do {
            nbEssaie++;
            if (isNaN(reponse) && reponse < minimum && reponse > maximum) {
                alert(prompt('Veuillez entrez un nombre valide !'));
                nbEssaie--;
            } else if (reponse < nbMystere) {
                alert(prompt('Cest plus !'));

            } else if (reponse > nbMystere) {
                alert(prompt('Cest moins !'));
            }
        } while (reponse !== nbMystere);

    alert(`Vous avez trouvé, ${nbMystere}, en, ${nbEssaie}, d'essaie`);

}()); // main IIFE
