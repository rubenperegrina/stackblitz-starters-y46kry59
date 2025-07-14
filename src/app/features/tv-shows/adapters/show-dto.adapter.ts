import { CastResponse, Show, ShowDTO } from "../interfaces";

export function mapShowResponseToDTO(
    show: Show,
    actors?: CastResponse[]
  ): ShowDTO {
    return {
        name: show.name,
        language: show.language,
        image: show.image?.medium || '/assets/no-poster-available.webp',
        rating: show.rating.average || 0,
        id: show.id,
        summary: show.summary?.replace(/<\/?(p|b|i)[^>]*>/g, '') || '',
        actors: (actors ?? []).length > 0
            ? (actors ?? []).map((actor: CastResponse) => actor.person.name)
            : ['No actors available'],
    };
  }