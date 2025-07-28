from flask import Flask, jsonify, request
import pandas as pd

app = Flask(__name__)

# Load the preprocessed CSV file
df = pd.read_csv('diabetes_cleaned.csv')

@app.route('/chatbot', methods=['POST'])
def chatbot_response():
    user_message = request.json['message'].lower()
    
    # Logic to respond based on CSV data
    if "tip" in user_message:
        # Provide a random health tip from the dataset
        tip_row = df.sample(1)  # Randomly sample one row from the CSV
        health_tip = tip_row.iloc[0]['tip_column_name']  # Replace 'tip_column_name' with the actual column name
        return jsonify({"response": f"Here's a health tip: {health_tip}"})
    
    elif "risk" in user_message:
        # Example: Respond based on risk factors for diabetes from the CSV
        risk_factors = df['risk_factor_column_name'].unique()  # Replace 'risk_factor_column_name' with the actual column name
        return jsonify({"response": f"Here are common risk factors for diabetes: {', '.join(risk_factors)}"})
    
    elif "symptom" in user_message:
        # Example: Provide symptoms of diabetes from the CSV
        symptoms = df['symptoms_column_name'].unique()  # Replace 'symptoms_column_name' with the actual column name
        return jsonify({"response": f"Symptoms of diabetes include: {', '.join(symptoms)}"})
    
    else:
        return jsonify({"response": "I'm not sure how to help with that. Ask me about tips or symptoms."})

if __name__ == '__main__':
    app.run(debug=True)
