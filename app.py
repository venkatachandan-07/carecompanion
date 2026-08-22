from flask import Flask, render_template, jsonify, request

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("ai-agent.html")


@app.route("/ai-agent")
def ai_agent():
    return render_template("ai-agent.html")


@app.route("/caregiver")
def caregiver():
    return render_template("caregiver.html")


@app.route("/emergency")
def emergency():
    return render_template("emergency.html")


@app.route("/api/recovery", methods=["POST"])
def recovery():
    data = request.get_json()

    symptoms = data.get("symptoms", "").lower()

    emergency_words = [
        "chest pain",
        "difficulty breathing",
        "severe bleeding",
        "unconscious",
        "fainted",
        "seizure"
    ]

    for word in emergency_words:
        if word in symptoms:
            return jsonify({
                "level": "emergency",
                "message": "This symptom may require immediate medical attention. Please contact your local emergency service or healthcare professional immediately."
            })

    warning_words = [
        "high fever",
        "persistent vomiting",
        "severe pain",
        "swelling",
        "dizziness"
    ]

    for word in warning_words:
        if word in symptoms:
            return jsonify({
                "level": "warning",
                "message": "This may be a warning sign. Monitor your condition and contact your healthcare professional if the symptom persists or becomes worse."
            })

    return jsonify({
        "level": "normal",
        "message": "No immediate warning sign was detected by this basic assistant. Continue following your recovery instructions and prescribed treatment."
    })


if __name__ == "__main__":
    app.run(debug=True)