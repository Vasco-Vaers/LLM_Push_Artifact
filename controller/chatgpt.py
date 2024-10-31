# chatgpt.py

#  afinal tenho de trocar o rate limit

from openai import OpenAI

#definição da class chatgpt
class Chatgpt: 
 
    def __init__(self):
        self.API_KEY = "api key" 
        self.client = OpenAI(       
            api_key=self.API_KEY
        )


        def created_prompt(self, notification):
        # Base instruction for the prompt # can be changed for other kids of notifications
        inducedprompt = (
            "You are going to assume the role of a push notification generation engine. "
            "There’s a set of rules that you already know, but I’ll reinforce them here. "
            "You should use and rely on these rules every time you generate a push notification. "
            "Here’s what will happen: I'll provide the title of a push notification. "
            "This title will likely be poorly written or generate little engagement, as it doesn’t follow the rules I’ll outline.  \n"
            "The rules are as follows:\n"
            "Popular emojis that engage recipients are “fire”, “blue heart”, “thumbs up”, “Ok”, and “Lightning”; \n"
            "Notifications of 20 to 25 characters tend to get the best results; \n"
            "Words suggesting urgency are very effective: ‘today’, ‘soon’, ‘now’, ‘limited’, ‘missed’, ‘don’t miss’, etc. "
            "We also see words alluding to quality (‘indulge’, ‘premium’, ‘awesome’), action words (‘explore’, ‘reserve’, ‘enjoy’), "
            "just a friendly ‘hey’, and of course ‘free’ and ‘get free’; \n"
            "Avoid words like ‘trade’, ‘price’, and ‘please’ (leave the politeness aside); \n"
            "Always include at least one emoji.\n"
            "Whenever I ask for input, I’ll do so as follows: [TITLE] <the poorly-constructed notification title goes here>\n\n"
            "Your response should be: [TITLE] ABC\n"
            "Where ABC is the notification title you have optimized. And: [RULES] DEF\n"
            "Where DEF are the specific rules you used to rewrite the notification title.\n\n"
            f"[TITLE] {notification}" 
        )
        return inducedprompt



    def chat_with_gpt(self, promptnot, inducedprompt):
        print("Received promptnot:", promptnot) 
        responsenot = self.client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages= [{"role": "user", "content": promptnot, inducedprompt}] 
        )

        return str(responsenot.choices[0].message.content)


        if __name__ == "__main__":
            user_input = input("You: ")
            responsenot = chat_with_gpt(user_input)
            print("Chatbot: ", responsenot)

            