export interface CastResponse {
    person:    Person;
    character: Character;
    self:      boolean;
    voice:     boolean;
}

export interface Character {
    id:     number;
    url:    string;
    name:   string;
    image:  CastImage | null;
    _links: CastLinks;
}

export interface CastLinks {
    self: CastSelf;
}

export interface CastSelf {
    href: string;
}

export interface CastImage {
    medium:   string;
    original: string;
}

export interface Person {
    id:       number;
    url:      string;
    name:     string;
    country:  CastCountry | null;
    birthday: Date | null;
    deathday: null;
    gender:   string;
    image:    CastImage;
    updated:  number;
    _links:   CastLinks;
}

export interface CastCountry {
    name:     string;
    code:     string;
    timezone: string;
}