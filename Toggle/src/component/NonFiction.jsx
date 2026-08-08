import nonfiction from '../nonfiction.json'

export default function NonFiction() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        backgroundColor: "#f5f5f5",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#222",
          fontSize: "38px",
          marginBottom: "35px"
        }}
      >
        Non-Fiction Book
      </h1>

      <div
        className="Mybooks"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "25px",
          maxWidth: "1100px",
          margin: "auto"
        }}
      >
        {nonfiction.map((el) => (
          <div
            key={el.title}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.10)"
            }}
          >
            <img
              src={el.img}
              alt={el.title}
              style={{
                width: "100%",
                height: "320px",
                objectFit: "contain",
                display: "block",
                // backgroundColor: "#f1f1f1",
                borderRadius: "12px",
                padding: "0px",
                marginBottom: "18px"
              }}
            />

            <h2 style={{ color: "#222", fontSize: "22px" }}>
              {el.title}
            </h2>

            <p style={{ color: "#666" }}>
              Author: {el.author}
            </p>

            <p style={{ color: "#666" }}>
              Year: {el.year}
            </p>

            <h3 style={{ color: "#2563eb" }}>
              ₹{el.price}
            </h3>

            <button
              style={{
                padding: "10px 22px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#222",
                color: "#fff",
                cursor: "pointer"
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}