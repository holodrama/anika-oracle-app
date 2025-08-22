
export default function App() {
  return `
    <div style="font-family: sans-serif; padding: 2rem;">
      <h1>🌀 Anika Oracle App</h1>
      <p>Begin your sacred entry into the Oracle Room.</p>
      <form id="entry-form">
        <label for="email">Enter your email:</label><br/>
        <input type="email" id="email" name="email" required/><br/><br/>
        <input type="checkbox" id="agree" name="agree" required/>
        <label for="agree">I agree to the disclosure terms</label><br/><br/>
        <button type="submit">Enter Oracle Room</button>
      </form>
      <div id="oracle-room" style="display:none; margin-top:2rem;">
        <h2>🔮 Oracle Room</h2>
        <p>Speak your question or intention aloud, then press below to receive a message:</p>
        <button onclick="receiveOracleMessage()">Receive Oracle Message</button>
        <p id="oracle-message" style="margin-top:1rem; font-weight:bold;"></p>
      </div>
      <script>
        document.getElementById("entry-form").onsubmit = function(event) {
          event.preventDefault();
          document.getElementById("entry-form").style.display = "none";
          document.getElementById("oracle-room").style.display = "block";
        };
        function receiveOracleMessage() {
          const messages = [
            "🌌 You are already becoming what you seek.",
            "🌿 The path opens when your heart is still.",
            "🔥 Trust your inner fire. It remembers the way."
          ];
          const msg = messages[Math.floor(Math.random() * messages.length)];
          document.getElementById("oracle-message").textContent = msg;
        }
      </script>
    </div>
  `;
}
