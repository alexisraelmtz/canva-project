// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const getPhotos = async (query) => {
  const request = await fetch(
    `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=${query}`
  );
  const result = await request.json();
  console.log(result);
  return result.results;
};

const handler = async (req, res) => {
  const query = req.body;
  getPhotos(query)
    .then((data) => data)
    .then((data) => res.status(200).json({ data }));
};

export default handler;
