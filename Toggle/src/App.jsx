import { useState } from 'react'
import Fiction from './component/Fiction'
import NonFiction from './component/NonFiction'

function App() {

  const [book, setBook] = useState(true)

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
        fontFamily: "Arial, sans-serif",
        padding: "40px 50px"
      }}
    >

      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          fontWeight: "700",
          color: "#222",
          margin: "10px 0 25px",
          letterSpacing: "1px"
        }}
      >
        📚 Mini Book Store
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "35px"
        }}
      >
        <button
          data-testid="toggle-btn"
          onClick={() => setBook(!book)}
          style={{
            padding: "13px 28px",
            border: "none",
            borderRadius: "30px",
            background: "#222",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 6px 15px rgba(0,0,0,0.18)",
            letterSpacing: "0.5px"
          }}
        >
          {book ? "📖 Fiction Book" : "📘 Non-Fiction Book"}
        </button>
      </div>

      <div
        data-testid="conditional-container"
        style={{
          maxWidth: "1150px",
          margin: "0 auto"
        }}
      >
        {
          book ? <Fiction /> : <NonFiction />
        }
      </div>

    </div>
  )
}

export default App