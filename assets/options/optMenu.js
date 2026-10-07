//STATUSBAR DEFAULT
const gDEFAULT_TITLE = 'N3 ~ Nolja Nugget Notes';

//ATTRIBUTES
const gATTR_DISABLED = 'disabled';
const gATTR_NAV = 'nav';
const gATTR_MD = 'md'; //markdown file, process with vQuery.processMD() call
const gATTR_FILE = 'file'; //file system, render files like PDF
//ISSUE TYPES:
const gATTR_NOTE = 'note'; //regular HTML file
const gATTR_EXAM = 'exam'; //exam, process with `practice` module
const gATTR_EXERCISE = 'ex'; //exercise, process with `practice` module
const gATTR_FLASHCARD = 'fs'; //flashcards, process with `practice` module

//ISSUE FOLDERS
const gPATH_NOTE = '-';
const gPATH_EXAM = '-practice-exam-';
const gPATH_EXERCISE = '-practice-ex-';
const gPATH_FLASHCARD = '-practice-fs-';

//ISSUE ICONS
const gICON_ISSUE = './assets/img/issues/issue.png';
const gICON_EXERCISE = './assets/img/issues/exercise.png';
const gICON_FLASHCARD = './assets/img/issues/flashcards.png';
const gICON_EXAM = './assets/img/aside/exam.png';

gMenu = {
    levels: [
        {
            id: 'legal',
            title: 'About N3, legal info and preferences',
            nav: [
                {id: 'about', title: 'About N3', attributes: [gATTR_MD], issues: [{file: 'README'}]},
                {id: 'changelog', title: 'Version history', attributes: [gATTR_MD], issues: [{file: 'CHANGELOG'}]},
                {id: 'license', title: 'N3 License', attributes: [gATTR_MD], issues: [{file: 'LICENSE'}]},
                {id: 'code_of_conduct', title: 'Code of conduct and terms of use', attributes: [gATTR_MD], issues: [
                    {file: 'CODE_OF_CONDUCT'}
                ]},
                {id: 'user_manual', title: 'User manual', attributes: [gATTR_DISABLED, gATTR_FILE]},
                {id: 'settings', title: 'Settings', attributes: [gATTR_DISABLED]},
            ]
        },
        {
            id: 'lvl_a',
            title: 'Notes for level A: Movers (A1) & Flyers (A2)',
            nav: [
                {id: 'pronouns', title: 'Pronouns', issues: [
                    {title: 'Personal Pronouns', type: gATTR_NOTE, file: 'personal'},
                    {title: 'Possessives Pronouns', type: gATTR_NOTE, file: 'possessives'},
                    {title: 'Demostrative Pronouns', type: gATTR_NOTE, file: 'demostrative'},
                    {title: 'Reflexive Pronouns', type: gATTR_NOTE, file: 'reflexive'}
                ]},
                {id: 'articles', title: 'Articles', issues: [
                    {title: 'Definite Article', type: gATTR_NOTE, file: 'definite'},
                    {title: 'Indefinite Article', type: gATTR_NOTE, file: 'indefinite'}
                ]},
                {id: 'preposition', title: 'Prepositions', issues: [
                    {title: 'Basic Prepositions', type: gATTR_NOTE, file: 'basic'},
                    {title: 'Prepositions of place', type: gATTR_NOTE, file: 'place'},
                    {title: 'Prepositions of time', type: gATTR_NOTE, file: 'time'},
                    {title: 'Prepositions of movement', type: gATTR_NOTE, file: 'movement'}
                ]},
                {id: 'nouns', title: 'Nouns', issues: [
                    {title: 'Basic Nouns', type: gATTR_NOTE, file: 'nouns'},
                    {title: 'Proper Nouns', type: gATTR_NOTE, file: 'proper'},
                    {title: 'Countable and Uncontable Nouns', type: gATTR_NOTE, file: 'countable'},
                    {title: 'Quantifiers', type: gATTR_NOTE, file: 'quantifiers'},
                    {title: 'There Be', type: gATTR_NOTE, file: 'there_be'}
                ]},
                {id: 'adjetives', title: 'Adjetives', issues: [
                    {title: 'Adjetives', type: gATTR_NOTE, file: 'adjetives'}
                ]},
                {id: 'verbs', title: 'Verbs', issues: [
                    {title: 'Verbs', type: gATTR_NOTE, file: 'basic'},
                    {title: 'To Be', type: gATTR_NOTE, file: 'to_be'},
                    {title: 'Short Forms', type: gATTR_NOTE, file: 'short_forms'},
                    {title: 'Have / Have got', type: gATTR_NOTE, file: 'have'},
                    {title: 'Modal Verbs', type: gATTR_NOTE, file: 'modal'}
                ]},
                {id: 'sentence_structure', title: 'Sentence Structure', issues: [
                    {title: 'Constructing sentences', type: gATTR_NOTE, file: 'constructing'},
                    {title: 'Imperative Sentences', type: gATTR_NOTE, file: 'imperative'}
                ]},
                {id: 'present', title: 'Verbs Tenses: Present', issues: [
                    {title: 'Present Simple', type: gATTR_NOTE, file: 'simple'},
                    {title: 'Present Continuous', type: gATTR_NOTE, file: 'continuous'},
                    {title: 'Continuous Verb Tenses', type: gATTR_NOTE, file: 'tenses'}
                ]},
                {id: 'number_date_time', title: 'Numbers, Dates, Time', issues: [
                    {title: 'Cardinal Numbers', type: gATTR_NOTE, file: 'cardinal'},
                    {title: 'Ordinal Numbers', type: gATTR_NOTE, file: 'ordinal'},
                    {title: 'The Date', type: gATTR_NOTE, file: 'date'},
                    {title: 'Time', type: gATTR_NOTE, file: 'time'}
                ]},
                {id: 'vocabulary', title: 'Vocabulary', issues: [
                    {title: 'Christmas Vocabulary', type: gATTR_NOTE, file: 'christmas'}
                ]},
                {id: 'reading', title: 'Reading Comprehension', issues: [
                    {title: 'Family', type: gATTR_NOTE, file: 'family'},
                    {title: 'School', type: gATTR_NOTE, file: 'school'},
                    {title: 'Weather and Clothes', type: gATTR_NOTE, file: 'weather_clothes'},
                    {title: 'Sports', type: gATTR_NOTE, file: 'sports'},
                    {title: 'At the supermarket', type: gATTR_NOTE, file: 'supermarket'}
                ]}
            ]
        },
        {
            id: 'lvl_b',
            title: 'Notes for level B: Preliminary (B1) & First (B2)',
            nav: [
                {id: 'b_soon', title: 'Notes under construction', attributes: [gATTR_DISABLED]}
            ]
        },
        {
            id: 'lvl_c',
            title: 'Notes for level C: Advanced (C1) | Not inclued: Proficiency (C2)',
            nav: [
                {id: 'c_soon', title: 'Notes under construction', attributes: [gATTR_DISABLED]}
            ]
        }
    ]
}