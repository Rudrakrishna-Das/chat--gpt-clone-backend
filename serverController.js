require("dotenv").config();

exports.getSomething = async (req, res, next) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: req.body.message }],
      max_tokens: 200,
    }),
  };
  try {
    const responce = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await responce.json();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};
