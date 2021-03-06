
export type SchemaCodeExtended = MorphSchemaCode | WordSchemaCode | SpecialMorphemeCode | 'M' | 'm' | ' ' | '-';

export const isSchemaCodeExtended = (s: string): boolean => {
    return (
           s === 'D'
        || s === 'P'
        || s === 'B'
        || s === 'G'
        || s === 'J'
        || s === 'C'
        || s === 'R'
        || s === 'F'
        || s === 'N'
        || s === 'T'
        || s === 'O'
        || s === 'd'
        || s === 'l'
        || s === 'y'
        || s === 'j'
        || s === 's'
        || s === 'o'
        || s === 'b'
        || s === 'g'
        || s === 'M'
        || s === 'm'
        || s === ' '
        || s === '-'
        || s === 'p'
        || s === '1'
        || s === '2'
    );
}

export interface IWordLangSets<T> {
    'Defaults': T[]
    'PersonNeutralNames': T[]
    'BoyNames': T[]
    'GirlNames': T[]
    'Jobs': T[]
    'Civilizatitons': T[]
    'Regions': T[]
    'FamilyNames': T[]
    'FamilyNeutralNames': T[]
    'Towns': T[]
    'Organizations': T[]
}

export interface IMorphemeLangSets<T> {
    'defaults': T[]
    'landOf': T[]
    'demonym': T[]
    'jobs': T[]
    'sonOf': T[]
    'daughterOf': T[]
    'bnames': T[]
    'gnames': T[]
}

export interface ISpecialMorphemes<T> {
    genre: {
        'm': T;
        'f': T;
    }
    plural: T;
}

export type WordKey = keyof IWordLangSets<string>

export type MorphKey = keyof IMorphemeLangSets<string>

export type PersonNameCode = 'B' | 'G' | 'P'
export type FamilyNameCode = 'F' | 'N'

export type OtherNameCode = 
    | 'D'
    | 'J'
    | 'C'
    | 'R'
    | 'T'
    | 'O'

export type WordSchemaCode = 
    | PersonNameCode
    | FamilyNameCode
    | OtherNameCode
    

export type MorphSchemaCode = 
    // wordsSchemasCode-morphemes
    | 'd'
    | 'l' // tierra de, pueblo de,
    | 'y' // gentilicio
    | 'j' // oficio
    | 's'
    | 'o'
    | 'b'
    | 'g'

export type SpecialMorphemeCode = 
    | 'p'
    | '1'
    | '2'

export const wordSchemasCodeMap = (code: WordSchemaCode): WordKey => {
    // wordsSchemasCode-words
    switch (code) {
        case 'D': return 'Defaults'
        case 'P': return 'PersonNeutralNames'
        case 'B': return 'BoyNames'
        case 'G': return 'GirlNames'
        case 'J': return 'Jobs'
        case 'C': return 'Civilizatitons'
        case 'R': return 'Regions'
        case 'F': return 'FamilyNames'
        case 'N': return 'FamilyNeutralNames'
        case 'T': return 'Towns'
        case 'O': return 'Organizations'
    }
}

export const WordKey2schemaCode = (wk: WordKey): WordSchemaCode => {
    switch (wk) {
        case 'Defaults': return 'D'
        case 'PersonNeutralNames': return 'P'
        case 'BoyNames': return 'B'  
        case 'GirlNames': return 'G'
        case 'Jobs': return 'J'
        case 'Civilizatitons': return 'C'
        case 'Regions': return 'R'
        case 'FamilyNames': return 'F'
        case 'FamilyNeutralNames': return 'N'
        case 'Towns': return 'T'
        case 'Organizations': return 'O'
    }
}

export const MorphKey2schemaCode = (mk: MorphKey): MorphSchemaCode => {
    // wordsSchemasCode-morphemes
    switch (mk) {
        case 'defaults': return 'd' 
        case 'landOf': return 'l'
        case 'demonym': return 'y'
        case 'jobs': return 'j' 
        case 'sonOf': return 's' 
        case 'daughterOf': return 'o'
        case 'bnames': return 'b' 
        case 'gnames': return 'g' 
    }
}

export const morphSchemasCodeMap = (code: MorphSchemaCode): MorphKey => {
    // wordsSchemasCode-morphemes
    switch (code) {
        case 'd': return 'defaults'
        case 'l': return 'landOf'
        case 'y': return 'demonym'
        case 'j': return 'jobs'
        case 's': return 'sonOf'
        case 'o': return 'daughterOf'
        case 'b': return 'bnames'
        case 'g': return 'gnames'
    }
}

// constantes
export const WordKeyArray: WordKey[] = [
	'Defaults',
	'PersonNeutralNames',
	'BoyNames',
	'GirlNames',
	'Jobs',
	'Civilizatitons',
	'Regions',
	'FamilyNames',
	'FamilyNeutralNames',
	'Towns',
	'Organizations'
]

export const MorphKeyArray: MorphKey[] = [
	'defaults',
	'landOf',
	'demonym',
	'jobs',
	'sonOf', 
	'daughterOf',
	'bnames', 
	'gnames',
]