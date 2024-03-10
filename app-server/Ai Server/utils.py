import os
from langchain_core.prompts import PromptTemplate
from langchain_core.prompts.chat import (
    ChatPromptTemplate,
    MessagesPlaceholder,
    HumanMessagePromptTemplate,
    SystemMessagePromptTemplate,
)
from langchain_openai import OpenAI
from langchain.chains import LLMChain
from langchain.memory import ConversationBufferMemory

from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage, SystemMessage, AIMessage

from langchain_google_genai import GoogleGenerativeAI

# from trip_plan import plan

# def bot_response(user_input):  
#     # llm
#     llm = OpenAI(temperature=0.5, max_tokens=3000, api_key=os.environ['OPENAI_API_KEY'], model='gpt-3.5-turbo')    

#     system_template = '''You are a tourist guide bot.
    
#     Trip plan:
#     {plan}'''.format(plan=plan)

#     # prompt
#     prompt = ChatPromptTemplate(
#         messages=[
#             SystemMessagePromptTemplate.from_template(system_template),
#             MessagesPlaceholder(variable_name="chat_history"),
#             HumanMessagePromptTemplate.from_template("New human question: {question}")
#         ]
#     )

#     memory = ConversationBufferMemory(memory_key="chat_history",return_messages=True)
#     conversation = LLMChain(llm=llm, prompt=prompt, memory=memory, verbose=True)
#     response = conversation.invoke({"question": user_input})
#     return response

def bot_response(user_input, plan):  
    # llm
    llm = OpenAI(temperature=0.5, max_tokens=3000, api_key=os.environ['OPENAI_API_KEY'])

    template = '''You are a tourist guide bot.
    
    Trip plan:
    {plan}
    
    New human question: {question}
    
    Response:'''

    prompt = PromptTemplate.from_template(template)
    chain = LLMChain(llm=llm, prompt=prompt, verbose=True)
    content = chain.run({"plan": plan, "question": user_input})
    return content.strip()

def get_itinerary(location, startDate, endDate, budget, type):
    # llm
    llm = OpenAI(temperature=0.5, max_tokens=3000, api_key=os.environ['OPENAI_API_KEY'])

    template = '''You are a travel planner bot. Plan a trip.
    
    Destination Location: {location}
    Trip Start Date: {startDate}
    Trip End Date: {endDate}
    Budget: {budget} INR
    Type of trip: {type}
    
    Response:
    '''

    prompt = PromptTemplate.from_template(template)
    chain = LLMChain(llm=llm, prompt=prompt, verbose=True)
    plan = chain.run({"location": location, "startDate": startDate, "endDate": endDate, "budget": budget, "type": type})
    return plan.strip()

# def get_itinerary(location, startDate, endDate, budget, type):
#     # llm
#     llm = GoogleGenerativeAI(model='gemini-pro', google_api_key=os.environ['GOOGLEAI_API_KEY'])

#     template = '''You are a travel planner. Plan a trip.
    
#     Destination Location: {location}
#     Trip Start Date: {startDate}
#     Trip End Date: {endDate}
#     Budget: {budget} INR
#     Type of trip: {type}
    
#     Response:'''

#     prompt = PromptTemplate.from_template(template)
#     chain = LLMChain(llm=llm, prompt=prompt, verbose=True)
#     plan = chain.invoke({"location": location, "startDate": startDate, "endDate": endDate, "budget": budget, "type": type})
#     return plan

def get_translation(message, lang):
    # llm
    llm = OpenAI(temperature=0.5, max_tokens=3000, api_key=os.environ['OPENAI_API_KEY'])

    template = '''You are a language translator.
    
    Translate the following message to {lang}:
    {message}
    
    Response:
    '''

    prompt = PromptTemplate.from_template(template)
    chain = LLMChain(llm=llm, prompt=prompt, verbose=True)
    translation = chain.run({"lang": lang, "message": message})
    return translation.strip()

if __name__ == '__main__':
    # os.environ['OPENAI_API_KEY'] = openai_key
    # llm = OpenAI(temperature=0.8)
    # user_input = input()
    content = bot_response("Hello")
    # content = get_itinerary('paris', '20/04/2024', '25/04/2024', '150000', 'couple')
    print(content)
