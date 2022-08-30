/**
* Jeu du nombre mystère
* @author  Mathilde Mertz
* @version 0.1
* @since   2018-09-09 (date de création)
*/

// Main IIFE (Immediately-Invoked Function Expression, se prononce "iffy")
(function main() {
    'use strict';
    const MINIMUM = 1;
    const MAXIMUM = 100;

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
    let nbMystere = tireNombre(MINIMUM, MAXIMUM);
    let reponse = 0;
    let message = 'Entrez un nombre compris entre 1 et 100: ';


        do {
            reponse = Number(prompt(message));
            nbEssaie++;
            if (isNaN(reponse) && reponse < MINIMUM && reponse > MAXIMUM) {
                message = 'Veuillez entrez un nombre valide !';
                nbEssaie--;
            } else if (reponse < nbMystere) {
                message = 'Cest plus !';

            } else if (reponse > nbMystere) {
               message = 'Cest moins !';
            }
        } while (reponse !== nbMystere);

    alert(`Vous avez trouvé ${nbMystere} en ${nbEssaie} essaie`);

}()); // main IIFE
