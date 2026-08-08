import fiction from '../fiction.json'

export default function Fiction() {
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
        Fiction Books
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
        {fiction.map((el) => (
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
                padding: "10px",
                marginBottom: "18px"
              }}
            />

            <h2 style={{ color: "#222", fontSize: "22px", height:"50px" }}>
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
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}