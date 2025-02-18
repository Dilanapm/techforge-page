from flask import Flask, request, jsonify
from flask_cors import CORS  # Importa CORS
from langchain_ollama import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate
from bussines_info import info

app = Flask(__name__)
CORS(app)  # Esto habilita CORS para todas las rutas

# Configuración del modelo
template = """
Responde la pregunta en español y y sobre el servicio de condominio .

Información de los servicios de seguridad y gestion en condominios.
{bussines_info}

Historial de conversación:
{context}

Pregunta: {question}
Respuesta:
"""

model = OllamaLLM(model="llama3")
prompt = ChatPromptTemplate.from_template(template)
chain = prompt | model

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    question = data.get('question')
    context = data.get('context', "")

    # Llamada al modelo para obtener la respuesta
    result = chain.invoke({"bussines_info": info, "context": context, "question": question})

    # Validar si la respuesta es irrelevante o fuera de contexto
    if "no puedo responder esto" in result.lower() or result.strip() == "":
        result = "No puedo responder esto."

    return jsonify({"response": result})

if __name__ == '__main__':
    app.run(debug=True, port=5000)  # Flask corre en el puerto 5000
