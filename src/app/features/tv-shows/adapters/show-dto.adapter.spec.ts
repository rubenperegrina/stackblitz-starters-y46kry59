// import { mapShowResponseToDTO } from './show-dto.adapter';
// import { CastResponse, Show, ShowDTO } from '../interfaces';

// const show: Show = {
//     "id": 41532,
//     "url": "https://www.tvmaze.com/shows/41532/miss-scarlet",
//     "name": "Miss Scarlet",
//     "type": "Scripted",
//     "language": "English",
//     "genres": [
//       "Drama",
//       "Crime",
//       "Mystery"
//     ],
//     "status": "Running",
//     "runtime": null,
//     "averageRuntime": 56,
//     "premiered": new Date("2020-03-30T00:00:00Z"),
//     "ended": null,
//     "officialSite": "https://www.pbs.org/wgbh/masterpiece/shows/miss-scarlet-and-the-duke/",
//     "schedule": {
//       "time": "",
//       "days": []
//     },
//     "rating": {
//       "average": 7.1
//     },
//     "weight": 98,
//     "network": null,
//     "webChannel": {
//       "id": 547,
//       "name": "PBS Passport",
//       "country": {
//         "name": "United States",
//         "code": "US",
//         "timezone": "America/New_York"
//       },
//       "officialSite": "https://www.pbs.org/"
//     },
//     "dvdCountry": null,
//     "externals": {
//       "tvrage": null,
//       "thetvdb": 368638,
//       "imdb": "tt8270592"
//     },
//     "image": {
//       "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/541/1354487.jpg",
//       "original": "https://static.tvmaze.com/uploads/images/original_untouched/541/1354487.jpg"
//     },
//     "summary": "<p>When Eliza's father dies, he leaves her penniless in a time where marriage is the only option for financial security. But the headstrong Eliza has an ace up her bonnet - her father's business, a detective agency. But it's Victorian London and, to operate in this man's world, she needs a partner.</p><p>Step forward consummate rogue Detective Inspector William Wellington of Scotland Yard, aka \"The Duke\".</p><p>Eliza and Duke strike up a fiery relationship as they team up to solve puzzling crimes in the murkiest depths of 1880s London.</p>",
//     "updated": 1740097954,
//     "_links": {
//       "self": {
//         "href": "https://api.tvmaze.com/shows/41532"
//       },
//       "previousepisode": {
//         "href": "https://api.tvmaze.com/episodes/3075352",
//         "name": "Dangerous Liaisons"
//       }
//     }
//   }

// const actors: CastResponse[] = [
//     {
//         "person": {
//           "id": 64060,
//           "url": "https://www.tvmaze.com/people/64060/kate-phillips",
//           "name": "Kate Phillips",
//           "country": {
//             "name": "United Kingdom",
//             "code": "GB",
//             "timezone": "Europe/London"
//           },
//           "birthday": new Date("1989-05-29T00:00:00Z"),
//           "deathday": null,
//           "gender": "Female",
//           "image": {
//             "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/137/343469.jpg",
//             "original": "https://static.tvmaze.com/uploads/images/original_untouched/137/343469.jpg"
//           },
//           "updated": 1733766241,
//           "_links": {
//             "self": {
//               "href": "https://api.tvmaze.com/people/64060"
//             }
//           }
//         },
//         "character": {
//           "id": 613192,
//           "url": "https://www.tvmaze.com/characters/613192/miss-scarlet-eliza-scarlet",
//           "name": "Eliza Scarlet",
//           "image": {
//             "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/254/637081.jpg",
//             "original": "https://static.tvmaze.com/uploads/images/original_untouched/254/637081.jpg"
//           },
//           "_links": {
//             "self": {
//               "href": "https://api.tvmaze.com/characters/613192"
//             }
//           }
//         },
//         "self": false,
//         "voice": false
//       },
//       {
//         "person": {
//           "id": 242452,
//           "url": "https://www.tvmaze.com/people/242452/cathy-belton",
//           "name": "Cathy Belton",
//           "country": {
//             "name": "Ireland",
//             "code": "IE",
//             "timezone": "Europe/Dublin"
//           },
//           "birthday": new Date("1972-01-01T00:00:00Z"),
//           "deathday": null,
//           "gender": "Female",
//           "image": {
//             "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/254/637086.jpg",
//             "original": "https://static.tvmaze.com/uploads/images/original_untouched/254/637086.jpg"
//           },
//           "updated": 1733766241,
//           "_links": {
//             "self": {
//               "href": "https://api.tvmaze.com/people/242452"
//             }
//           }
//         },
//         "character": {
//           "id": 715243,
//           "url": "https://www.tvmaze.com/characters/715243/miss-scarlet-ivy-woods",
//           "name": "Ivy Woods",
//           "image": {
//             "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/254/637085.jpg",
//             "original": "https://static.tvmaze.com/uploads/images/original_untouched/254/637085.jpg"
//           },
//           "_links": {
//             "self": {
//               "href": "https://api.tvmaze.com/characters/715243"
//             }
//           }
//         },
//         "self": false,
//         "voice": false
//       }
// ];

// describe('mapShowResponseToDTO', () => {
//   it('should correctly map a Show object and CastResponse to a ShowDTO object', () => {

//     const result: ShowDTO = mapShowResponseToDTO(show, actors);

//     expect(result).toEqual({
//       name: 'Miss Scarlet',
//       language: 'English',
//       image: 'https://static.tvmaze.com/uploads/images/medium_portrait/541/1354487.jpg',
//       rating: 7.1,
//       id: 41532,
//       summary: "When Eliza's father dies, he leaves her penniless in a time where marriage is the only option for financial security. But the headstrong Eliza has an ace up her bonnet - her father's business, a detective agency. But it's Victorian London and, to operate in this man's world, she needs a partner.</p><p>Step forward consummate rogue Detective Inspector William Wellington of Scotland Yard, aka \"The Duke\".</p><p>Eliza and Duke strike up a fiery relationship as they team up to solve puzzling crimes in the murkiest depths of 1880s London.",
//       actors: ['Kate Phillips', 'Cathy Belton'],
//     });
//   });

//   it('should return "No actors available" when actors array is empty', () => {
//     const result = mapShowResponseToDTO(show, []);
//     expect(result.actors).toEqual(['No actors available']);
//   });

//   it('should return "No actors available" when actors is undefined', () => {
//     const result = mapShowResponseToDTO(show);
//     expect(result.actors).toEqual(['No actors available']);
//   });
// });