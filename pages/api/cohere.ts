// import { COHERE_APIKEY } from "../../apiKey";
const COHERE_APIKEY = "RpBAWJkgiugEpfLZzEbVOUnB0XJXAkc71B8DbGui";

const cohere = require("cohere-ai");
cohere.init(COHERE_APIKEY, "2021-11-08");

cohere.init(COHERE_APIKEY);

const coGenerate = async (
  username: string,
  name: string,
  tone: string,
  intention: string
) => {
  const prompt = `This email writing program can generate full emails from simple commands. Here are some examples:
Command: Politely wish ${name} a happy new year.
Email: Dear ${name}, I hope you have a wonderful holidays, and all the best for the new year! Cheers, ${username}.
--
  Command: Gratefully thank ${name} for the gift cards
Email: Hey ${name}, thank you so much for the gift cards, I really really appreciate it! I hope to see you soon. Best, ${username}.
--
Command: Invoice ${name} $500 for financial modeling
Email: Dear ${name}, This is my invoice for $500 for the financial modeling. It was a pleasure to work with you. Sincerely, ${username}.
--
Command: Proudly tell ${name} that they made it to the next round
Email: Hey ${name}, I heard you passed the first round of interviews! Way to go! You're doing so great so far. I'm sure you'll get the job.
--
Command: Kindly ask ${name} for a coffee chat to catch up
Email: Hey ${name}, Long time no see! Let's catch up and grab coffee. What's your schedule look like? Regards, ${username}
--
Command: Casually ask ${name} to go to the gym with you
Email: Hey ${name}! Want to hit the gym sometime? I've recently started going and it's been great, thought I'd invite you along. let me know what you think!
--
Command: Nervously ask ${name} out to dinner.
Email: Hey ${name}. So I don't usually do this, but I was wondering if you'd like to go out to dinner with me. I think you're really cool and I'd love to get to know you more, unless you're busy of course. Let me know if you want to go out sometime! Sincerely, ${username}.
--
Command: Sadly tell ${name} that you won't be able to make it to the event.
Email: Hi ${name}, I'm so sorry, but I won't be able to make it to the event. I feel really bad, but I hope you have a great time!
--
Command: Caringly ask ${name} how they're doing.
Email: Hey ${name}, I hope you're doing well. I've been thinking about you, and wanted to check in. How is everything?
--
Command: Excitedly wish ${name} a happy birthday.
Email: Hey ${name}, happy birthday! I hope you have the best day! 
--
Command: Kindly wish ${name} a happy holidays.
Email: Hey ${name}, I hope you have a great holiday season! A well-deserved break, I hope. Take care!
--
Command: Casually ask ${name} what they're up to.
Email: Hey ${name}, what's up? How's life? Anything new lately? I've been doing great! Hope you're doing well too.
--
Command: Sadly ask ${name} for some help.
Email: Hey ${name}, I'm really sorry to bother you, but I was wondering if you could help me out with something. I'm really struggling with this and I don't know what to do. I'd really appreciate it if you could help me out. Thanks so much.
--
Command: Seductively ask ${name} to hang out.
Email: Hey ${name}, how you doing? Wanna do something fun sometime? I'm free this weekend, if you're ready for something interesting ;)
--
Command: Angrily ask ${name} to pay you back.
Email: Hey ${name}, where's my money?! It's been nearly a month and you still haven't paid me back. I'm never lending you money ever again!
--
Command: Aggressively ask ${name} to stop procrastinating.
Email: ${name}! I need you to stop procrastinating and get this done. I'm not kidding. I need this done by tomorrow, or there will be consequences. Do you want me to get mad?
--
Command: Tiredly tell ${name} that you don't want to go to the event.
Email: Hey ${name}, I'm really tired, and I don't really have the energy to go to the event. Thanks for inviting me though. I promise I'll make it next time.
--
Command: Excitedly ask ${name} to go to the concert next week.
Email: Yo ${name}, have you heard of the concert next week? We should totally go! It's going to be so much fun. Let me know if you're interested!
--
Command: Seriously tell ${name} that you need to talk to them.
Email: Hi ${name}. There's something I need to talk to you about, and it is very important. Please let me know when you're available.
--
Command: ${
    tone.endsWith("ly") ? tone : tone + "ly"
  } ask ${name} how he is doing, and ask if he wants to ${intention}.
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
      results.push(gen.text.replace("--", "").trim());
    });
  }
  return results;
};

export default coGenerate;
