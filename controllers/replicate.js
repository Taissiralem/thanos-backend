import axios from "axios";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});
export const CreateImage = async (req, res) => {
  const output = await replicate.run(
    "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
    {
      input: {
        width: 768,
        height: 768,
        prompt: req.body.prompt,
        scheduler: "K_EULER",
        num_outputs: 1,
        guidance_scale: 7.5,
        num_inference_steps: 50,
      },
    }
  );
  console.log(output);
  res.json({ src: output });
};

export const TextGeneration = async (req, res) => {
  const body = {
    contents: [
      {
        parts: [
          {
            text: req.body.prompt,
          },
        ],
      },
    ],
  };

  const response = await axios.post(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyB_DEzujD7idoAf3KfsdGIJg3dW48dhRTI",
    body,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  res.json({ message: response.data });
};
