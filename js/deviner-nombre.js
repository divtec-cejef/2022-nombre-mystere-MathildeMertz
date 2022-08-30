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

    let nbEssaie;
    let nbMystere = tireNombre(minimum, maximum);
    let reponse;

        do {
            reponse = Number(prompt('Entrez un nombre compris en 1 et 100'));
            if (isNaN(reponse) && reponse < minimum && reponse > maximum) {
                alert('Veuillez entrez un nombre valide !');
            } else if (reponse < nbMystere) {
                alert('Cest plus !');
                nbEssaie++;
            } else if (reponse > nbMystere) {
                alert('Cest moins !');
                nbEssaie++;
            } else {
                alert(`Vous avez trouvé, ${nbMystere}, en, ${nbEssaie}, d'essaie`);
                nbEssaie++;
            }
        } while (reponse === nbMystere);

}()); // main IIFE
