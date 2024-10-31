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

    def chat_with_gpt(self, promptnot):
        print("Received promptnot:", promptnot) 
        responsenot = self.client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages= [{"role": "user", "content": promptnot}]
        )
        return str(responsenot.choices[0].message.content)


        if __name__ == "__main__":
            user_input = input("You: ")
            responsenot = chat_with_gpt(user_input)
            print("Chatbot: ", responsenot)

            