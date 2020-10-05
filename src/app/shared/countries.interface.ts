
export class ICountriesData {
  id?:number;
  name?:string;
  topLevelDomain?: string[];
  alpha2Code?: string;
  alpha3Code?:string;
  callingCodes?:string[];
  capital?:string;
  altSpellings?:string[];
  region?:string;
  subregion?:string;
  population?:number;
  latlng?:number[];
  demonym?:string;
  area?:number;
  gini?:number;
  timezones?:string[];
  borders?:string[];
  nativeName?:string;
  numericCode?:string;
  currencies?:[
      { code?:string,
        name?:string,
        symbol?:string}
    ];
  languages:ILanguage[];
  translations?:{
    de?:string,
    es?:string,
    fr?:string,
    ja?:string,
    it?:string,
    br?:string,
    pt?:string,
    nl?:string,
    hr?:string,
    fa?:string
  };
  flag?:string;
  regionalBlocs?:[
    {
      acronym?:string,
      name?:string,
      otherAcronyms?:string[],
      otherNames?:string[]
      }
    ];
    cioc?:string
  }

  export class ILanguage{
    iso639_1:string;
    iso639_2:string;
    name: string;
    nativeName: string;
  }