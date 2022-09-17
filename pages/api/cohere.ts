import { COHERE_APIKEY } from "../../apiKey";
//const apiKey = process.env.COHERE_APIKEY;

const cohere = require("cohere-ai");
cohere.init(COHERE_APIKEY, "2021-11-08");

cohere.init(COHERE_APIKEY);

const coGenerate = async (username: string, name: string, tone: string) => {
  const prompt = `This email writing program can generate full emails from simple commands. Here are some examples:
Command: Thank ${name} for the gift cards
Email: Hey ${name}, Thank you so much for the gift cards. I really appreciate it. I hope to see you soon. Best, ${username}.
--
Command: Invoice ${name} $500 for financial modeling
Email: Dear ${name}, This is my invoice for $500 for the financial modeling. It was a pleasure to work with you. Sincerely, ${username}.
--
Command: Tell ${name} that they made it to the next round
Email: Hey ${name}, You've moved forward to the next round of interviews. The team is looking forward to seeing you again. Sincerely, ${username}.
--
Command: Ask ${name} for a coffee chat
Email: Hey ${name}, Long time no see! Let's catch up and grab coffee. What's your schedule look like? Regards, ${username}
--
Command: Tell ${name} to keep up the good work
Email: Hi ${name}, Great job on that presentation. I'm very impressed with the progress you're making. Keep it up! Regards, ${username}
--
Command: ${tone} ask ${name} how he is doing, and ask if he wants to chat or hang out sometime.
Email:`;

  let results: any[] = [];
  for (let i = 0; i < 5; i++) {
    let response = await cohere.generate({
      model: "large",
      prompt: prompt,
      max_tokens: 100,
      temperature: 0.7,
      k: 0,
      p: 0.75,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop_sequences: ["--"],
      return_likelihoods: "NONE",
    });
    response.body.generations.forEach((gen: any) => {
      results.push(gen.text.replace("--", ""));
    });
  }
  console.log(results);
  return results;
};

export default coGenerate;
