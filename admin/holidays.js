"use strict";

var holidays = {
    neujahr:        {enabled: true,  "en": "New Year's Day",      "de": "Neujahr",                      "ru": "Новый Год",                              desc: "calender",    date: "01.01", offset: 0},
    dreikoenige:    {enabled: true,  "en": "Epiphany",            "de": "Heilige Drei Könige",          "ru": "День трёх Королей",                      desc: "religion",    date: "06.01", offset: 5},
    palmsonntag:    {enabled: false, "en": "Palm Sunday",         "de": "Palmsonntag",                  "ru": "Ве́рбное Воскресе́нье",                    desc: "religion",    easterOffset: -7},
    karfreitag:     {enabled: true,  "en": "Good Friday",         "de": "Karfreitag",                   "ru": "Великая пятница",                        desc: "religion",    easterOffset: -2},
    ostersonntag:   {enabled: true,  "en": "Easter Sunday",       "de": "Ostersonntag",                 "ru": "Католическая пасха - Воскресение",       desc: "religion",    easterOffset: 0},
    ostermontag:    {enabled: true,  "en": "Easter Monday",       "de": "Ostermontag",                  "ru": "Католическая пасха - Понедельник",       desc: "religion",    easterOffset: 1},
    maifeiertag:    {enabled: true,  "en": "Labour Day",          "de": "Tag der Arbeit", 				"ru": "День Труда",                             desc: "political",   date: "01.05", offset: 120},
    chimmelfahrt:   {enabled: true, "en": "Ascension of Christ", "de": "Christi Himmelfahrt (Vatertag)", "ru": "Католическое Вознесение ",               desc: "religion",    easterOffset: 39},
    pfingstsonntag: {enabled: false,  "en": "Whitsunday",          "de": "Pfingstsonntag",              "ru": "Католическая Троица - Воскресение",      desc: "religion",    easterOffset: 49},
    pfingstmontag:  {enabled: true,  "en": "Whit Monday",         "de": "Pfingstmontag",                "ru": "Католическая Троица - Понедельник",      desc: "religion",    easterOffset: 50},
    fronleichnam:   {enabled: true, "en": "Corpus Christi",      "de": "Fronleichnam",                  "ru": "Праздник Тела и Крови Христовых",        desc: "religion",    easterOffset: 60},
    mhimmelfahrt:   {enabled: true, "en": "Assumption of Mary",  "de": "Mariä Himmelfahrt",             "ru": "Вознесение Девы Марии",                  desc: "religion",    date: "15.08", offset: 226},
    nationfeiertag: {enabled: true, "en": "national Holiday",    "de": "Nationalfeiertag",              "ru": "???",                                    desc: "political",    date: "26.10", offset: 271},
    allerheiligen:  {enabled: true,  "en": "All Saints' Day",     "de": "Allerheiligen",                "ru": "День всех святых (Хэллоуин)",            desc: "religion",    date: "01.11", offset: 304},
    allerseelen:    {enabled: false, "en": "All Souls' Day",      "de": "Allerseelen",                  "ru": "День Всех Душ",                          desc: "religion",    date: "02.11", offset: 305},
    mempfaengnis:   {enabled: true,  "en": "Maria Conception",    "de": "Maria Empfängnis",             "ru": "????",                				   desc: "religion",    date: "08.12", offset: 341},
    advent1:        {enabled: false, "en": "1st Advent",          "de": "1. Advent",                    "ru": "1. адве́нт",                              desc: "religion",    advent4Offset: -21},
    advent2:        {enabled: false, "en": "2nd Advent",          "de": "2. Advent",                    "ru": "2. адве́нт",                              desc: "religion",    advent4Offset: -14},
    advent3:        {enabled: false, "en": "3rd Advent",          "de": "3. Advent",                    "ru": "3. адве́нт",                              desc: "religion",    advent4Offset: -7},
    advent4:        {enabled: false, "en": "4th Advent",          "de": "4. Advent",                    "ru": "4. адве́нт",                              desc: "religion",    advent4Offset: 0},
    heiligabend:    {enabled: true,  "en": "Christmas Eve",       "de": "Heiligabend",                  "ru": "Католическое Рождество",                 desc: "religion",    date: "24.12", offset: 357},
    weihnachtstag1: {enabled: true, "en": "Christmas Day",       "de": "1. Weihnachtstag",              "ru": "Католическое Рождество - Первый день",   desc: "religion",    date: "25.12", offset: 358},
    weihnachtstag2: {enabled: true,  "en": "2nd Christmas Day",   "de": "2. Weihnachtstag",             "ru": "Католическое Рождество - Второй день",   desc: "religion",    date: "26.12", offset: 359},
    silvester:      {enabled: true,  "en": "New Year's Eve",      "de": "Silvester",                    "ru": "Новый год",                              desc: "calender",    date: "31.12", offset: 364}
};

if (typeof module !== 'undefined' && module.parent) {
    module.exports = {
        holidays: holidays
    };
}

