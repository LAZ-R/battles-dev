const factionsNumber = 6;

// UTILS ----------------------------------------------------------------------

const getRandomIntegerBetween = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}
const generateRandomAlphaNumericString = (length) => {
   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÉÈÀ ÊÎÔÛÄËÏÖÜŸ';
   let result = '';
   for (let i = 0; i < length; i++) {
       const randomIndex = Math.floor(Math.random() * characters.length);
       result += characters.charAt(randomIndex);
   }
   return result;
}

// CONSTANTES -----------------------------------------------------------------

const types = [
   // Attaque == 1
   { base_atk: 1, base_def: 1, min_units: 1000, max_units: 10000, name: "Paysans Désarmés" },
   { base_atk: 1, base_def: 2, min_units: 1000, max_units:  5000, name: "Paroissiens de la Lumière" },
   { base_atk: 1, base_def: 3, min_units: 1000, max_units:  5000, name: "Recrues Inexpérimentées" },
   { base_atk: 1, base_def: 4, min_units:  750, max_units:  2500, name: "Lanciers Légers" },
   { base_atk: 1, base_def: 5, min_units:  500, max_units:  1000, name: "Prêtres de la Lumière" },

   // Attaque == 2
   { base_atk: 2, base_def: 1, min_units: 1000, max_units:  5000, name: "Fantassins Légers" },
   { base_atk: 2, base_def: 2, min_units:  800, max_units:  3000, name: "Archers Inexpérimentés" },
   { base_atk: 2, base_def: 3, min_units:  600, max_units:  3000, name: "Guerriers Légers" },
   { base_atk: 2, base_def: 4, min_units:  300, max_units:  2000, name: "Lanciers Lourds" },
   { base_atk: 2, base_def: 5, min_units:  200, max_units:   900, name: "Fantassins Lourds" },

   // Attaque == 3
   { base_atk: 3, base_def: 1, min_units:  700, max_units:  3000, name: "Épéistes Inexpérimentés" },
   { base_atk: 3, base_def: 2, min_units:  500, max_units:  2000, name: "Archers Habiles" },
   { base_atk: 3, base_def: 3, min_units:  400, max_units:  1500, name: "Cavaliers Légers" },
   { base_atk: 3, base_def: 4, min_units:  300, max_units:   900, name: "Guerriers Lourds" },
   { base_atk: 3, base_def: 5, min_units:  100, max_units:   700, name: "Lanciers d'Élite" },

   // Attaque == 4
   { base_atk: 4, base_def: 1, min_units:  200, max_units:  1000, name: "Paladins de la Lumière" },
   { base_atk: 4, base_def: 2, min_units:  300, max_units:   800, name: "Épéistes Habiles" },
   { base_atk: 4, base_def: 3, min_units:  100, max_units:   600, name: "Archers d'Élite" },
   { base_atk: 4, base_def: 4, min_units:  100, max_units:   600, name: "Cavaliers Lourds" },
   { base_atk: 4, base_def: 5, min_units:  100, max_units:   500, name: "Guerriers d'Élite" },

   // Attaque == 5
   { base_atk: 5, base_def: 1, min_units:  250, max_units:   600, name: "Archimages de la Lumière" },
   { base_atk: 5, base_def: 2, min_units:  100, max_units:   400, name: "Assassins d'Élite" },
   { base_atk: 5, base_def: 3, min_units:   75, max_units:   300, name: "Épéistes d'Élite" },
   { base_atk: 5, base_def: 4, min_units:   50, max_units:   200, name: "Cavaliers d'Élite" },
   { base_atk: 5, base_def: 5, min_units:   50, max_units:   200, name: "Éléphants de Guerre" },
]

const factionsOrder = [
   "Paysans Désarmés",
   "Recrues Inexpérimentées",
   "Paroissiens de la Lumière",
   "Prêtres de la Lumière",
   "Paladins de la Lumière",
   "Archimages de la Lumière",
   "Lanciers Légers",
   "Lanciers Lourds",
   "Lanciers d'Élite",
   "Fantassins Légers",
   "Fantassins Lourds",
   "Archers Inexpérimentés",
   "Archers Habiles",
   "Archers d'Élite",
   "Guerriers Légers",
   "Guerriers Lourds",
   "Guerriers d'Élite",
   "Épéistes Inexpérimentés",
   "Épéistes Habiles",
   "Épéistes d'Élite",
   "Cavaliers Légers",
   "Cavaliers Lourds",
   "Cavaliers d'Élite",
   "Assassins d'Élite",
   "Éléphants de Guerre",
];

const syllabes = [
   "NÖL", "ZÄO", "YRV", "FIK", "GUP", "TAZ", "QWE", "LÔM", "JÛX", "VEX",
   "RAZ", "KYL", "ZÉB", "ULP", "NÎX", "HÔZ", "CÜV", "WÎP", "XËR", "DEM",
   "PUX", "CAZ", "VÉK", "TÜN", "QÎP", "RIX", "LÛJ", "MÄB", "ZÎT", "GÔX",
   "FÖP", "JEZ", "QÄN", "KÏV", "ZUT", "WÖP", "DÜV", "HÏX", "XÖL", "NEK"
];

const getRandomArmyName = () => {
   return `${syllabes[getRandomIntegerBetween(0, syllabes.length -1)]}${syllabes[getRandomIntegerBetween(0, syllabes.length -1)]}`
};



// SPECIFIC FUNCTIONS ---------------------------------------------------------

// TYPES --------------------------------------------------

let typesDynamic = [];

const refreshTypes = () => {
   typesDynamic = [];
   types.forEach(type => {
       typesDynamic.push(type);
   });
}

const getRandomType = () => {
   const randomIndex = getRandomIntegerBetween(0, typesDynamic.length -1);
   return typesDynamic.splice(randomIndex, 1)[0];
}

const getTypeImageFile = (typeName) => {
    switch (typeName) {
        case "Paysans Désarmés" :
            return 'paysan-desarme';
        case "Recrues Inexpérimentées" :
            return 'recrue-inexperimentee';
            
        case "Paroissiens de la Lumière" :
            return 'paroissien-lumiere';
        case "Prêtres de la Lumière" :
            return 'pretre-lumiere';
        case "Paladins de la Lumière" :
            return 'paladin-lumiere';
        case "Archimages de la Lumière" :
            return 'archimage-lumiere';

        case "Lanciers Légers" :
            return 'lancier-leger';
        case "Lanciers Lourds" :
            return 'lancier-lourd';
        case "Lanciers d'Élite" :
            return 'lancier-elite';

        case "Fantassins Légers" :
            return 'fantassin-leger';
        case "Fantassins Lourds" :
            return 'fantassin-lourd';

        case "Archers Inexpérimentés" :
            return 'archer-inexperimente';
        case "Archers Habiles" :
            return 'archer-habile';
        case "Archers d'Élite" :
            return 'archer-elite';

        case "Guerriers Légers" :
            return 'guerrier-leger';
        case "Guerriers Lourds" :
            return 'guerrier-lourd';
        case "Guerriers d'Élite" :
            return 'guerrier-elite';

        case "Épéistes Inexpérimentés" :
            return 'epeiste-inexperimente';
        case "Épéistes Habiles" :
            return 'epeiste-habile';
        case "Épéistes d'Élite" :
            return 'epeiste-elite';

        case "Cavaliers Légers" :
            return 'cavalier-leger';
        case "Cavaliers Lourds" :
            return 'cavalier-lourd';
        case "Cavaliers d'Élite" :
            return 'cavalier-elite';

        case "Assassins d'Élite" :
            return 'assassin-elite';

        case "Éléphants de Guerre" :
            return 'elephant-guerre';
    
        default:
            return 'paysan-desarme';
    }
}

// FACTIONS -----------------------------------------------

const getRandomFaction = (army, index) => {
   let type = getRandomType();
   return {
       id: `${army.name.substring(7)}.${index}`,
       type: type.name,
       base_atk: type.base_atk,
       base_def: type.base_def,
       units: getRandomIntegerBetween(type.min_units, type.max_units),
   };
}

const logFaction = (faction) => {
   if (faction.units > 0) {
       console.log(`${faction.type} (${faction.base_atk}/${faction.base_def})`);
       console.log(`unités : ${faction.units} -- atk : ${faction.base_atk * faction.units} -- def : ${faction.base_def * faction.units}`);
   } else {
       console.log(`${faction.type} (${faction.base_atk}/${faction.base_def})`);
       console.log(`DÉTRUITE`);
   };
   console.log(``);
}

// ARMIES -------------------------------------------------

const getRandomArmy = () => {
   let army = {
       name: `Armée ${getRandomArmyName()}`,
       factions: []
   };
   for (let index = 1; index <= factionsNumber; index++) {
       army.factions.push(getRandomFaction(army, index));
   }
   army.factions = sortFactions(army.factions);
   return army;
}

const logArmy = (army) => {
   console.log(`------------ ${army.name} ----------------`);
   console.log(``);
   let totalUnits = 0;
   let totalAtk = 0;
   let totalDef = 0;
   army.factions.forEach(faction => {
       logFaction(faction);
       if (faction.units > 0) {
           totalUnits += faction.units;
           totalAtk += faction.base_atk * faction.units;
           totalDef += faction.base_def * faction.units;
       }
   });
   console.log(``);
   console.log(`${totalUnits} unités`);
   console.log(`atk totale : ${totalAtk}`);
   console.log(`def totale : ${totalDef}`);
   console.log(`-----------------------------------------`);
   console.log(``);
}

const isArmyDead = (army) => {
   let isDead = true;
   army.factions.forEach(faction => {
       if (faction.units > 0) {
           isDead = false;
       }
   });
   return isDead;
}

const sortFactions = (factions) => {
   return factions.sort((a, b) => {
       const indexA = factionsOrder.indexOf(a.type);
       const indexB = factionsOrder.indexOf(b.type);
      
       return indexA - indexB;
   });
}

// COMBAT -------------------------------------------------

const fight = (factions1, factions2) => {
   console.log(`------------------- BATAILLE -------------------`);
   console.log(``);

   // Factions Armée 1
   console.log(`------------- Factions de l'armée 1 ------------`);
   console.log(``);

   let factions1TotalAtk = 0;
   let factions1TotalDef = 0;

   factions1.forEach(faction => {
       logFaction(faction);
       if (faction.units > 0) {
           const factionAtk = faction.base_atk * faction.units;
           const factionDef = faction.base_def * faction.units;
           factions1TotalAtk += factionAtk;
           factions1TotalDef += factionDef;
       }
   });
   console.log(``);
   console.log(`atk totale : ${factions1TotalAtk}`);
   console.log(`def totale : ${factions1TotalDef}`);
   console.log(``);

   // Factions Armée 1
   console.log(`------------- Factions de l'armée 2 ------------`);
   console.log(``);

   let factions2TotalAtk = 0;
   let factions2TotalDef = 0;

   factions2.forEach(faction => {
       logFaction(faction);
       if (faction.units > 0) {
           const factionAtk = faction.base_atk * faction.units;
           const factionDef = faction.base_def * faction.units;
           factions2TotalAtk += factionAtk;
           factions2TotalDef += factionDef;
       }
   });
   console.log(``);
   console.log(`atk totale : ${factions2TotalAtk}`);
   console.log(`def totale : ${factions2TotalDef}`);
   console.log(``);

   // Bataille

   if (factions1TotalDef > 0 && factions2TotalDef > 0) {
       console.log(`************************************************`);
       console.log(`------------------- BATAILLE -------------------`);
       console.log(`************************************************`);

       factions1TotalDef -= factions2TotalAtk;
       factions2TotalDef -= factions1TotalAtk;

       console.log(``);

       // Résultat

       console.log(`Factions de l'armée 1 : ${factions1TotalDef > 0 ? 'Vivantes' : 'Mortes'}`);
       console.log(`Factions de l'armée 2 : ${factions2TotalDef > 0 ? 'Vivantes' : 'Mortes'}`);
       console.log(``);

       // Recalcul

       factions1.forEach(faction => {
           if (factions1TotalDef > 0) {
               faction.units = faction.units == 1 ? faction.units : Math.floor(faction.units / 2);
           } else {
               faction.units = 0;
           }
       });
       factions2.forEach(faction => {
           if (factions2TotalDef > 0) {
               faction.units = faction.units == 1 ? faction.units : Math.floor(faction.units / 2);
           } else {
               faction.units = 0;
           }
       });
   } else {
       console.log(`Pas de bataille`);
   }
   console.log(`------------------------------------------------`);
   console.log(``);
}

// Execution --------

const setDocumentHeight = () => {
    document.documentElement.style.setProperty('--doc-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', setDocumentHeight);
setDocumentHeight();

refreshTypes();
let army1 = getRandomArmy();
refreshTypes();
let army2 = getRandomArmy();

//logArmy(army1);
//logArmy(army2);

//fight([army1.factions[0], army1.factions[2]],[army2.factions[1], army2.factions[4]]);
//fight([army1.factions[0], army1.factions[2]],army2.factions);
//fight(army1.factions,army2.factions);

//logArmy(army1);
//logArmy(army2);

const getFactionButtonHtml = (faction) => {
    return `
        <button class="faction-button" style="background-image: url('./medias/images/types-images/${getTypeImageFile(faction.type)}.jpg');">
            <div class="faction-button-backdrop">
                <span>Unités : <b>${faction.units}</b></span>
                <span class="faction-button-name">${faction.type}</span>
                <div class="faction-button-atk-def-container">
                    <span>ATK<br><b>${faction.base_atk * faction.units}</b></span>
                    <span>DEF<br><b>${faction.base_def * faction.units}</b></span>
                </div>
            </div>
        </button>
    `;
}

const setArmyInterface = (user) => {
    const isUserPlayer = user == 'player';
    const army = isUserPlayer ? army1 : army2;
    let armyTotalUnits = 0;
    let armyTotalAtk = 0;
    let armyTotalDef = 0;
    army.factions.forEach(faction => {
        if (faction.units > 0) {
            armyTotalUnits += faction.units;
            armyTotalAtk += faction.base_atk * faction.units;
            armyTotalDef += faction.base_def * faction.units;
        }
    });
    const armyContainer = document.createElement('div');
    armyContainer.setAttribute('id', isUserPlayer ? 'playerArmyContainer' : 'aiArmyContainer');
    armyContainer.setAttribute('class', isUserPlayer ? 'army-container player-army-container' : 'army-container ai-army-container');
    armyContainer.innerHTML = `
        <div class="army-info-container">
            <span>ATK<br><b>${armyTotalAtk}</b></span>
            <span><b>${army.name}</b><br>unités : <b>${armyTotalUnits}</b></span>
            <span>DEF<br><b>${armyTotalDef}</b></span>
        </div>
        <div class="army-factions-container">
            <div class="factions-container-row">
                ${getFactionButtonHtml(army.factions[0])}
                ${getFactionButtonHtml(army.factions[1])}
                ${getFactionButtonHtml(army.factions[2])}
            </div>
            <div class="factions-container-row">
                ${getFactionButtonHtml(army.factions[3])}
                ${getFactionButtonHtml(army.factions[4])}
                ${getFactionButtonHtml(army.factions[5])}
            </div>
        </div>
    `;
    document.getElementById('main').appendChild(armyContainer);
}

setArmyInterface('player');
document.getElementById('main')
    .appendChild(document.createElement('div'))
    .setAttribute('id', 'centralArea');
setArmyInterface('ai');