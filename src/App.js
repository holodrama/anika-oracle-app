
export default function App() {
  return \`
    <div style="font-family: sans-serif; padding: 2em;">
      <h1>Welcome to the Anika Oracle App</h1>
      <p>Ask your question below and speak the Oracle message.</p>
      <textarea placeholder="Type your question..." rows="4" style="width: 100%;"></textarea>
      <br /><br />
      <button onclick="alert('This is a placeholder for the Oracle Message handler.')">Speak Oracle Message</button>
    </div>
  \`;
}
