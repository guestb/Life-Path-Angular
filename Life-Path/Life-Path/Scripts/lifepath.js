angular.module('lifepath', []).
controller('LifePathController', function ($filter) {
    var lp = this;
    lp.stats = [
        {
            name: 'Strength',
            value: 10,
            short: 'Str'
        },
        {
            name: 'Dexterity',
            value: 10,
            short: 'Dex'
        },
        {
            name: 'Constitution',
            value: 10,
            short: 'Con'
        },
        {
            name: 'Intelligence',
            value: 10,
            short: 'Int'
        },
        {
            name: 'Wisdom',
            value: 10,
            short: 'Wis'
        },
        {
            name: 'Charisma',
            value: 10,
            short: 'Cha'
        }
    ];
    lp.races = [
        {
            name: "Tiefling",
            bonuses: [
                {
                    name: "Cha",
                    value: 2
                },
                {
                    name: "Int",
                    value: 1
                }
            ],
            minChance: 1,
            maxChance:5
        },
        {
            name: "Half-Orc",
            bonuses: [
                {
                    name: "Str",
                    value: 2
                },
                {
                    name: "Con",
                    value: 1
                }
            ],
            minChance: 6,
            maxChance: 10
        },
        {
            name: "Half-Elf",
            bonuses: [
                {
                    name: "Cha",
                    value: 2
                },
                {
                    name: "Any 2",
                    value: 1
                }
            ],
            minChance: 11,
            maxChance: 15
        },
        {
            name: "Hill Dwarf",
            bonuses: [
                {
                    name: "Con",
                    value: 2
                },
                {
                    name: "Wis",
                    value: 1
                }
            ],
            minChance: 16,
            maxChance: 20
        },
        {
            name: "Mountain Dwarf",
            bonuses: [
                {
                    name: "Con",
                    value: 2
                },
                {
                    name: "Str",
                    value: 1
                }
            ],
            minChance: 21,
            maxChance: 25
        },
        {
            name: "Lightfoot Halfling",
            bonuses: [
                {
                    name: "Dex",
                    value: 2
                },
                {
                    name: "Cha",
                    value: 1
                }
            ],
            minChance: 26,
            maxChance: 30
        },
        {
            name: "Stout Halfling",
            bonuses: [
                {
                    name: "Dex",
                    value: 2
                },
                {
                    name: "Con",
                    value: 1
                }
            ],
            minChance: 31,
            maxChance:35
        },
        {
            name: "Human",
            bonuses: [
                {
                    name: "Str",
                    value: 1
                },
                {
                    name: "Dex",
                    value: 1
                },
                {
                    name: "Con",
                    value:1
                },
                {
                    name: "Int",
                    value: 1
                },
                {
                    name: "Wis",
                    value: 1
                },
                {
                    name: "Cha",
                    value: 1
                }
            ],
            minChance: 36,
            maxChance:70
        },
        {
            name: "High Elf",
            bonuses: [
                {
                    name: "Dex",
                    value: 2
                },
                {
                    name: "Int",
                    value: 1
                }
            ],
            minChance: 71,
            maxChance:75
        },
        {
            name: "Wood Elf",
            bonuses: [
                {
                    name: "Dex",
                    value: 2
                },
                {
                    name: "Wis",
                    value: 1
                }
            ],
            minChance: 76,
            maxChance:80
        },
        {
            name: "Drow Elf",
            bonuses: [
                {
                    name: "Dex",
                    value: 2
                },
                {
                    name: "Cha",
                    value: 1
                }
            ],
            minChance: 81,
            maxChance:85
        },
        {
            name: "Forest Gnome",
            bonuses: [
                {
                    name: "Int",
                    value: 2
                },
                {
                    name: "Con",
                    value: 1
                }
            ],
            minChance: 86,
            maxChance:90
        },
        {
            name: "Rock Gnome",
            bonuses: [
                {
                    name: "Int",
                    value: 2
                },
                {
                    name: "Dex",
                    value: 1
                }
            ],
            minChance: 91,
            maxChance:95
        },
        {
            name: "Dragonborn",
            bonuses: [
                {
                    name: "Str",
                    value: 2
                },
                {
                    name: "Cha",
                    value: 1
                }
            ],
            minChance:96,
            maxChance:100
        },
    ];
    lp.events = [];
    lp.paths = [
        {
            name: "Academic",
            hover: "Those with an insatiable thirst for knowledge follow the Academic Path. Characters that start this path usually have the goal of becoming a Wizard, Cleric or Druid.",
            choices: [
                {
                    id: 1,
                    description: "Caught with banned books. Expelled. Move to Life Experience Table.",
                    stat: "life",
                    value: 0
                }
            ]
        },
        {
            name: "Life",
            hover: "The Life Experience Path offers characters a diverse collection of experiences. Those that follow this path know that this path leads to classes such as Rogue, Ranger, Monk, Bard, Sorcerer, and Warlock.",
            choices: [
                {
                    id: 1,
                    description: "Arrested. Sentence, infantry service. Move to Military Table.",
                    stat: "military",
                    value: 0
                }
            ]
        },
        {
            name: "Military",
            hover: "The Military Path is for those individuals that have the discipline and honor to serve with their fellow man in hopes of a greater good. Players that walk this path are looking to become Fighters, Paladins, or War Clerics.",
            choices: [
                {
                    id: 1,
                    description: "Insubordination. Relieved from duty. Move to Life Experience Table.",
                    stat: "life",
                    value: 0
                }, {
                    id: 2,
                    description: "Studied historical battles.",
                    stat: "Int",
                    value: 1
                },
                {
                    id: 3,
                    description: "Mediated military disputes between soldiers.",
                    stat: "Wis",
                    value: 1
                },
                {
                    id: 4,
                    description: "Joined the Archer corps",
                    stat: "Dex",
                    value: 1
                },

            ]
        }
    ];
    lp.checkStat = function (stat) {
        if (stat.value > 10) {
            return "lime";
        } else if (stat.value < 10) {
            return "red";
        }
        return "white";
    };
    lp.calcMod = function (stat) {
        return Math.floor((stat.value / 2) - 5);
    }
    lp.rollRace = function () {
        var rand = Math.random() * 100;
        var rolled = $filter('filter')(lp.races, function (value, index) {
            return (value.minChance < rand && value.maxChance > rand);
        });
        if (rolled !== undefined && rolled.length > 0) {
            lp.selectRace(rolled[0]);
        }
        console.log(rand);
    }
    lp.selectRace = function (race) {
        if (race.selected) {
            //we've already pushed this button, lets remove it
            race.selected = false;
            RemoveRaceBonuses(race);
        } else {
            //Remove any currently selected race
            angular.forEach(lp.races, function (value, key) {
                if (value.selected) {
                    value.selected = false;
                    RemoveRaceBonuses(value);
                }
            });
            race.selected = true;
            AddRaceBonuses(race);
            lp.selectedRace = race;
        }
    };
    RemoveRaceBonuses = function (race) {
        angular.forEach(race.bonuses, function (bonusValue, bonusKey) {
            angular.forEach(lp.stats, function (statValue, statKey) {
                if (statValue.short == bonusValue.name) {
                    statValue.value -= bonusValue.value
                }
            });
        });
    };
    AddRaceBonuses = function (race) {
        angular.forEach(race.bonuses, function (bonusValue, bonusKey) {
            angular.forEach(lp.stats, function (statValue, statKey) {
                if (statValue.short == bonusValue.name) {
                    statValue.value += bonusValue.value
                }
            });
        });
    };
    lp.choosePath = function () {
        var rand = Math.round(Math.random() * 2)
        lp.startingPath = lp.paths[rand].name;
    };
    lp.GetOrdinal = function (n) {
        if (n == undefined || n == null) {
            n = lp.events.length;
        }
        n++;
        var s = ["th", "st", "nd", "rd"],
       v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };
    lp.rollMonth = function () {
        var eventNumber = Math.ceil((Math.random() * 100) + 1);
        if (lp.currentPath == undefined) {
            lp.currentPath = $filter('filter')(lp.paths, function (value, index) {
                return value.name == lp.startingPath;
            })[0];
        }
        var newEvent = $filter('filter')(lp.currentPath.choices, function (value, index) {
            return value.id == eventNumber;
        });
        lp.events.push(newEvent);
        //Work out what happened
        if (newEvent.value == 0) {
            //We're moving tables folks, hold onto your hats
            lp.currentPath = $filter('filter')(lp.paths, function (value, index) {
                return value.name == newEvent.stat;
            })[0];
        } else {
            GetStat(newEvent.stat).value += newEvent.value;
        }
    };
    lp.finishRolls = function () {
        while (lp.events.length < 11) {
            lp.rollMonth();
        }
    };
    lp.GetOutcome = function (event) {
        if (event.value == 0) {
            return "Moved to " + event.stat + " path";
        } else if (event.value < 0) {
            return GetStat(event.stat).name + " - " + event.value;
        } else {
            return GetStat(event.stat).name + " + " + event.value;
        }
    };
    lp.GetStat = function(shortValue){
        return $filter('filter')(lp.stats, function (value, index) {
            return value.short == shortValue;
        })[0];
    }
});