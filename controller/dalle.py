from openai import OpenAI

class Dalle:

    def __init__ (self):
        self.API_KEY = "api key" 
        self.client = OpenAI(
            api_key=self.API_KEY
      )

    def chat_with_dalle(self,prompt):  
        response = self.client.images.generate(
          model="dall-e-2",
          prompt=prompt,
          size="1024x1024",
          quality="standard",
          n=1,
        )

        return str(response.data[0].url)