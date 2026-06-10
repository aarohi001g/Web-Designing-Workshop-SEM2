import React, { useState, useEffect } from 'react';

export default function FlipkartHeader() {
  // UI Interaction States
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('For You');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Auto-slide effect for the sub-banners carousel
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % promoSlides.length);
    }, 4000); // Cycles cards every 4 seconds

    return () => clearInterval(slideInterval);
  }, []);

  // Handlers
  const handleMenuClick = (itemName) => {
    alert(`Navigating to: ${itemName}`);
    setIsLoginDropdownOpen(false);
  };

  const handleAuthAction = (actionType) => {
    alert(`Triggering ${actionType} workflow...`);
    setIsLoginDropdownOpen(false);
  };

  // Categories structure mapping exact Flipkart icon representation
  const categories = [
    { id: 'foryou', name: 'For You', icon: 'fa-solid fa-tags' },
    { id: 'fashion', name: 'Fashion', icon: 'fa-solid fa-shirt' },
    { id: 'mobiles', name: 'Mobiles', icon: 'fa-solid fa-mobile-screen-button' },
    { id: 'beauty', name: 'Beauty', icon: 'fa-solid fa-sparkles' },
    { id: 'electronics', name: 'Electronics', icon: 'fa-solid fa-laptop' },
    { id: 'home', name: 'Home', icon: 'fa-solid fa-couch' },
    { id: 'appliances', name: 'Appliances', icon: 'fa-solid fa-tv' },
    { id: 'toys', name: 'Toys, ba...', icon: 'fa-solid fa-gamepad' },
    { id: 'food', name: 'Food & H...', icon: 'fa-solid fa-basket-shopping' },
    { id: 'auto', name: 'Auto Acc...', icon: 'fa-solid fa-helmet-safety' },
    { id: '2wheeler', name: '2 Wheele...', icon: 'fa-solid fa-motorcycle' },
    { id: 'sports', name: 'Sports & ...', icon: 'fa-solid fa-baseball-bat-ball' },
  ];

  // Sliding dynamic promo content array
  const promoSlides = [
    [
      {
        id: 'tcl',
        title: 'TCL | Google TV',
        heading: '55" Mini LED TV\nJust ₹34,865*',
        sub: 'HDR brightness | 312+ dimming zones',
        bg: 'radial-gradient(circle at center, #901010 0%, #400000 100%)',
        textColor: '#fff',
        isDark: true
      },
      {
        id: 'lg',
        title: 'LG',
        heading: 'A reliable wash\nUp to 32% Off',
        sub: 'Selects from 20K wash patterns',
        bg: '#ffffff',
        textColor: '#111',
        isDark: false
      },
      {
        id: 'adidas',
        title: 'adidas',
        heading: 'Wear the icon\nMin. 40% Off',
        sub: 'Step into style with ADIDAS',
        bg: 'linear-gradient(135deg, #111111 0%, #333333 100%)',
        textColor: '#fff',
        isDark: true
      }
    ],
    [
      {
        id: 'pova',
        title: 'JUNE EPIC SALE',
        heading: 'POVA 8 5G\nLaunch Today, 12 PM',
        sub: 'Here to delete normal',
        bg: '#f0f5ff',
        textColor: '#111',
        isDark: false
      },
      {
        id: 'nike',
        title: 'Nike Air',
        heading: 'Run Absolute\nUp to 25% Off',
        sub: 'Engineered for comfort speed',
        bg: 'linear-gradient(135deg, #ff5f6d 0%, #ffc371 100%)',
        textColor: '#fff',
        isDark: true
      },
      {
        id: 'samsung',
        title: 'Samsung Galaxy',
        heading: 'Flagship Deals\nSave Up to ₹12,000',
        sub: 'Experience ultimate AI clarity',
        bg: '#12192c',
        textColor: '#fff',
        isDark: true
      }
    ]
  ];

  return (
    <div style={styles.appContainer}>
      
      {/* --- TOP NAVIGATION BAR --- */}
      <nav style={styles.navbar}>
        <div style={styles.navLeft}>
          <div style={{ ...styles.brandTab, ...styles.brandFlipkart }}>
            <i className="fa-solid fa-bolt" style={{ marginRight: '6px' }}></i> Flipkart
          </div>
          <div style={{ ...styles.brandTab, ...styles.brandTravel }}>
            <i className="fa-solid fa-plane" style={{ marginRight: '6px', color: '#ff5a5f' }}></i> Travel
          </div>
        </div>

        <div style={styles.searchContainer}>
          <i className="fa-solid fa-magnifying-glass" style={styles.searchIcon}></i>
          <input 
            type="text" 
            style={styles.searchInput} 
            placeholder="Search for Products, Brands and More" 
          />
        </div>

        <div style={styles.navRight}>
          <div style={styles.locationSelect}>
            <i className="fa-solid fa-location-dot" style={{ color: '#000' }}></i>
            Location not set <span style={styles.locationBlueLink} onClick={() => alert('Opening location selection modal...')}>Select delivery location &gt;</span>
          </div>
          
          {/* Clickable Login Container */}
          <div 
            style={styles.navItemContainer}
            onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
          >
            <div style={styles.navItemBtn}>
              <i className="fa-regular fa-circle-user" style={{ fontSize: '18px' }}></i> 
              <span>Login</span> 
              <i className={`fa-solid fa-chevron-${isLoginDropdownOpen ? 'up' : 'down'}`} style={{ fontSize: '10px' }}></i>
            </div>

            {/* ACTIONABLE LOGIN DROPDOWN MENU */}
            {isLoginDropdownOpen && (
              <div style={styles.dropdownMenu} onClick={(e) => e.stopPropagation()}>
                <div style={styles.dropdownHeader}>
                  <span>New customer?</span>
                  <button style={styles.signUpBtn} onClick={() => handleAuthAction('Sign Up')}>Sign Up</button>
                </div>
                <hr style={styles.divider} />
                
                <div style={styles.dropdownItem} onClick={() => handleMenuClick('My Profile')}>
                  <i className="fa-regular fa-user" style={styles.dropdownIcon}></i> My Profile
                </div>
                <div style={styles.dropdownItem} onClick={() => handleMenuClick('Flipkart Plus Zone')}>
                  <i className="fa-solid fa-star" style={styles.dropdownIcon}></i> Flipkart Plus Zone
                </div>
                <div style={styles.dropdownItem} onClick={() => handleMenuClick('Orders')}>
                  <i className="fa-solid fa-box" style={styles.dropdownIcon}></i> Orders
                </div>
                <div style={styles.dropdownItem} onClick={() => handleMenuClick('Wishlist')}>
                  <i className="fa-regular fa-heart" style={styles.dropdownIcon}></i> Wishlist
                </div>
                <div style={styles.dropdownItem} onClick={() => handleMenuClick('Become a Seller')}>
                  <i className="fa-solid fa-shop" style={styles.dropdownIcon}></i> Become a Seller
                </div>
                <div style={styles.dropdownItem} onClick={() => handleMenuClick('Rewards')}>
                  <i className="fa-solid fa-gift" style={styles.dropdownIcon}></i> Rewards
                </div>
                <div style={styles.dropdownItem} onClick={() => handleMenuClick('Gift Cards')}>
                  <i className="fa-solid fa-credit-card" style={styles.dropdownIcon}></i> Gift Cards
                </div>
                <div style={styles.dropdownItem} onClick={() => handleMenuClick('Notification Preferences')}>
                  <i className="fa-regular fa-bell" style={styles.dropdownIcon}></i> Notification Preferences
                </div>
                <div style={styles.dropdownItem} onClick={() => handleMenuClick('24x7 Customer Care')}>
                  <i className="fa-solid fa-headset" style={styles.dropdownIcon}></i> 24x7 Customer Care
                </div>
                <div style={styles.dropdownItem} onClick={() => handleMenuClick('Advertise')}>
                  <i className="fa-solid fa-chart-line" style={styles.dropdownIcon}></i> Advertise
                </div>
                <div style={styles.dropdownItem} onClick={() => handleMenuClick('Download App')}>
                  <i className="fa-solid fa-download" style={styles.dropdownIcon}></i> Download App
                </div>
              </div>
            )}
          </div>

          <div style={styles.navItemBtn} onClick={() => alert('Opening configuration panel...')}>
            More <i className="fa-solid fa-chevron-down" style={{ fontSize: '10px' }}></i>
          </div>

          <div style={styles.navItemBtn} onClick={() => alert('Redirecting to your Shopping Cart...')}>
            <i className="fa-solid fa-cart-shopping"></i> Cart
          </div>
        </div>
      </nav>

      {/* --- CATEGORIES BAR --- */}
      <div style={styles.categoriesContainer}>
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            style={activeCategory === cat.name ? { ...styles.catItem, ...styles.catItemActive } : styles.catItem}
            onClick={() => setActiveCategory(cat.name)}
          >
            <div style={activeCategory === cat.name ? { ...styles.catIconWrapper, ...styles.catIconActive } : styles.catIconWrapper}>
              <i className={cat.icon}></i>
            </div>
            <span style={activeCategory === cat.name ? styles.catTextActive : styles.catTextNormal}>
              {cat.name}
            </span>
          </div>
        ))}
      </div>

      {/* --- MASTER PROMO BANNER --- */}
      <div style={styles.mainBanner}>
        <div>
          <h1 style={styles.bannerTitleHead}>Exclusive</h1>
          <p style={styles.bannerTitleSub}>coupon for you!</p>
        </div>

        <div style={styles.couponTicket}>
          <h2 style={styles.ticketMainText}>Flat 10% Off</h2>
          <p style={styles.ticketSubText}>Up to ₹100</p>
          <div style={styles.ticketBadge}>Already applied</div>
        </div>

        <div style={styles.bannerVectorRight}>
          <div style={{ fontSize: '52px' }}>🪑</div>
          <div style={{ fontSize: '52px' }}>🏋️</div>
        </div>
      </div>

      {/* --- DYNAMIC SLIDING CARDS CAROUSEL GRID --- */}
      <div style={styles.subGrid}>
        {promoSlides[currentSlideIndex].map((slide) => (
          <div 
            key={slide.id} 
            style={{ 
              ...styles.card, 
              background: slide.bg, 
              color: slide.textColor,
              border: slide.isDark ? 'none' : '1px solid #e0e0e0'
            }}
          >
            <div style={styles.cardOverlayContent}>
              <div>
                <div style={slide.isDark ? styles.brandTitleText : styles.brandTitleTextBlack}>
                  {slide.title}
                </div>
                <h3 style={slide.isDark ? styles.promoHeading : styles.promoHeadingBlack}>
                  {slide.heading.split('\n')[0]}<br/>{slide.heading.split('\n')[1]}
                </h3>
                <p style={slide.isDark ? styles.promoSubtext : styles.promoSubtextBlack}>
                  {slide.sub}
                </p>
              </div>
              <div style={styles.bankTag}>
                <strong>BOBCARD</strong> | <strong style={{ marginLeft: '4px' }}>HSBC</strong> 10% Instant Discount*
              </div>
            </div>
            <span style={styles.adBadge}>AD</span>
          </div>
        ))}
      </div>

      {/* --- FOOTER PAGINATION (Manually Clickable dots + syncs automatically) --- */}
      <div style={styles.carouselPagination}>
        {promoSlides.map((_, index) => (
          <div 
            key={index}
            style={currentSlideIndex === index ? { ...styles.dot, ...styles.dotActive } : styles.dot}
            onClick={() => setCurrentSlideIndex(index)}
          />
        ))}
      </div>

    </div>
  );
}

// --- CENTRAL STYLING ENGINE ---
const styles = {
  appContainer: {
    backgroundColor: '#f1f2f4',
    minHeight: '100vh',
    width: '100%',
    paddingBottom: '30px',
  },
  navbar: {
    backgroundColor: '#ffffff',
    padding: '12px 6%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 1px 2px 0 rgba(0,0,0,.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  navLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  brandTab: {
    padding: '8px 18px',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer',
  },
  brandFlipkart: {
    backgroundColor: '#ffd814',
    color: '#000',
  },
  brandTravel: {
    backgroundColor: '#f0f2f5',
    color: '#555',
  },
  searchContainer: {
    flex: 1,
    margin: '0 35px',
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    left: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#717478',
  },
  searchInput: {
    width: '100%',
    padding: '10px 16px 10px 48px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    backgroundColor: '#f0f5ff',
    fontSize: '14px',
    outline: 'none',
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },
  locationSelect: {
    fontSize: '12px',
    color: '#111',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  locationBlueLink: {
    color: '#2874f0',
    fontWeight: '600',
    cursor: 'pointer',
  },
  navItemContainer: {
    position: 'relative',
    cursor: 'pointer',
  },
  navItemBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '15px',
    fontWeight: '500',
    color: '#1f1f1f',
    cursor: 'pointer',
    padding: '6px 0',
  },
  dropdownMenu: {
    position: 'absolute',
    top: '130%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
    width: '260px',
    padding: '12px 0',
    zIndex: 9999,
  },
  dropdownHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '4px 16px 10px 16px',
    fontSize: '14px',
    color: '#212121',
  },
  signUpBtn: {
    background: 'none',
    border: 'none',
    color: '#2874f0',
    fontWeight: '700',
    fontSize: '15px',
    cursor: 'pointer',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #f0f0f0',
    marginBottom: '6px',
  },
  dropdownItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '11px 18px',
    fontSize: '14px',
    color: '#3c3c3c',
    cursor: 'pointer',
  },
  dropdownIcon: {
    marginRight: '14px',
    fontSize: '16px',
    color: '#4a4a4a',
    width: '20px',
  },
  categoriesContainer: {
    backgroundColor: '#fff',
    margin: '8px 0',
    padding: '12px 3%',
    display: 'flex',
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  catItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
    cursor: 'pointer',
    minWidth: '75px',
  },
  catItemActive: {
    fontWeight: '600',
  },
  catIconWrapper: {
    width: '38px',
    height: '38px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    color: '#555',
  },
  catIconActive: {
    backgroundColor: '#f0f5ff',
    border: '1px solid #2874f0',
    borderRadius: '8px',
    color: '#2874f0',
  },
  catTextNormal: { fontSize: '12px', color: '#2c2c2c' },
  catTextActive: { fontSize: '12px', color: '#2874f0', fontWeight: '600' },
  mainBanner: {
    background: 'linear-gradient(to right, #f7b11e 35%, #ffc73a 100%)',
    margin: '0 12px',
    borderRadius: '4px',
    height: '240px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 8%',
  },
  bannerTitleHead: { fontSize: '52px', color: '#003399', fontWeight: '900', margin: 0 },
  bannerTitleSub: { fontSize: '30px', color: '#003399', fontWeight: '700', margin: 0 },
  couponTicket: {
    backgroundColor: '#0153cc',
    color: '#fff',
    padding: '20px 35px',
    borderRadius: '12px',
    border: '2px dashed #ffffff',
    textAlign: 'center',
  },
  ticketMainText: { fontSize: '32px', fontWeight: '800', margin: 0 },
  ticketSubText: { fontSize: '18px', margin: '2px 0 10px 0', opacity: 0.9 },
  ticketBadge: {
    backgroundColor: '#ffffff',
    color: '#000',
    padding: '6px 16px',
    borderRadius: '6px',
    fontWeight: '700',
    fontSize: '15px',
  },
  bannerVectorRight: { display: 'flex', gap: '15px' },
  subGrid: {
    margin: '12px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '12px',
  },
  card: {
    borderRadius: '8px',
    padding: '20px',
    height: '230px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    transition: 'all 0.4s ease-in-out',
  },
  cardOverlayContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  brandTitleText: { fontSize: '14px', fontWeight: '600', opacity: 0.9 },
  brandTitleTextBlack: { fontSize: '18px', fontWeight: '800', color: '#a50034' },
  promoHeading: { fontSize: '20px', fontWeight: '800', margin: '8px 0 4px 0', lineHeight: '1.2' },
  promoHeadingBlack: { fontSize: '20px', fontWeight: '800', color: '#111', margin: '8px 0 4px 0', lineHeight: '1.2' },
  promoSubtext: { fontSize: '12px', opacity: 0.8 },
  promoSubtextBlack: { fontSize: '12px', color: '#666' },
  bankTag: {
    background: 'rgba(0,0,0,0.06)',
    padding: '6px 10px',
    borderRadius: '4px',
    fontSize: '11px',
    width: 'fit-content',
  },
  adBadge: {
    position: 'absolute',
    bottom: '8px',
    right: '8px',
    background: 'rgba(0,0,0,0.4)',
    color: '#fff',
    fontSize: '9px',
    padding: '1px 4px',
    borderRadius: '2px',
  },
  carouselPagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '6px',
    marginTop: '16px',
  },
  dot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#c0c4cc',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  dotActive: {
    backgroundColor: '#2874f0',
    width: '18px',
    borderRadius: '4px',
  },
};