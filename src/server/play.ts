import { corsair } from "./corsair.ts";

// corsair.github.api.repositories
//   .list({
//     owner: "ankitkumarbarik",
//   })
//   .then(console.log);

corsair.github.api.repositories
  .star({
    owner: "corsairdev",
    repo: "corsair",
  })
  .then(console.log);
