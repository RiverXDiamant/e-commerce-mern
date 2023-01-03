export default function LeftSection() {
  const images = [
    {
      name: "Local Green Atlanta",
      item: "Vans Old Skool",
      price: "74.99",
      img: "./src/img/ftb-atlanta-local-green-shoe.webp",
      alt: "Foot The Bill customs Vans for business Local Green Atlanta, located in Atlanta, Georgia",
    },
    {
      name: "Black Genius Art Show",
      item: "Vans Classic Slip-On",
      price: "74.99",
      img: "./src/img/ftb-baltimore-eubie-blake-shoe.webp",
      alt: "Foot The Bill customs Vans for business Eubie Blake Cultural Center, located in Baltimore, Maryland",
    },
    {
      name: "Milk + T",
      item: "Vans Authentic Canvas",
      price: "74.99",
      img: "./src/img/ftb-portland-milk-t-shoe.webp",
      alt: "Foot The Bill customs Vans for business Milk T, located in Portland, Oregon",
    },
  ];
  return (
    <>
      <div className="hero">
        <div className="row">
          <div className="left-section">
            <div class="content">
              <h2>Online</h2>
              <h1>CUSTOM VANS</h1>
              <h3>STORE</h3>
              <a
                href="https://www.vans.com/en-us/customs?icn=topnav"
                target="_blank"
                class="btn"
                rel="noreferrer"
              >
                Buy Now
              </a>
            </div>

            {images.map((image) => {
              const { name, item, price, img, alt } = image;
              return (
                <>
                  <div className="items">
                    <div className="item">
                      <div className="item-img">
                        <img src={`/images/${img}`} alt={`${alt}`} />
                      </div>
                    </div>
                  </div>

                  <div className="item-description">
                    <h2 class="business-name">{name}</h2>
                    <h3 class="business-item">{item}</h3>
                    <span class="price">{price}</span>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
