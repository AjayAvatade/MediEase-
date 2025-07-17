// 404 error page. Display a simple “Page Not Found” message with a back-to-home link. Use a centered layout.



import React from 'react'

function NotFound() {
  return (
    <div>
    <div style={styles.container}>
      <div style={styles.background}>
        <div style={styles.star}></div>
        <div style={styles.star}></div>
        <div style={styles.star}></div>
        <div style={styles.star}></div>
        <div style={styles.star}></div>
      </div>
      
      <div style={styles.content}>
        <div style={styles.glitchWrapper}>
          <h1 style={styles.heading} data-text="404">404</h1>
        </div>
        
        <div style={styles.textWrapper}>
          <p style={styles.subtitle}>Page not found</p>
          <p style={styles.text}>Uh oh..! we can't seem to find the page you're looking for</p>
        </div>
        
        <div style={styles.buttonWrapper}>
          <Link to="/" style={styles.link}>
            <span style={styles.linkText}>back to home</span>
            <div style={styles.linkGlow}></div>
          </Link>
        </div>
      </div>
    </div>
  );
};
</div>

    const styles = {
  container: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    overflow: "hidden",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
  },
  
  star: {
    position: "absolute",
    width: "3px",
    height: "3px",
    background: "#fff",
    borderRadius: "50%",
    animation: "twinkle 2s infinite",
    "&:nth-child(1)": {
      top: "20%",
      left: "10%",
      animationDelay: "0s",
    },
    "&:nth-child(2)": {
      top: "40%",
      right: "15%",
      animationDelay: "0.5s",
    },
    "&:nth-child(3)": {
      bottom: "30%",
      left: "20%",
      animationDelay: "1s",
    },
    "&:nth-child(4)": {
      top: "60%",
      right: "30%",
      animationDelay: "1.5s",
    },
    "&:nth-child(5)": {
      bottom: "20%",
      right: "10%",
      animationDelay: "2s",
    },
  },
  
  content: {
    textAlign: "center",
    zIndex: 2,
    padding: "0 20px",
    maxWidth: "600px",
  },
  
  glitchWrapper: {
    position: "relative",
    display: "inline-block",
    marginBottom: "30px",
  },
  
  heading: {
    fontSize: "clamp(80px, 15vw, 160px)",
    fontWeight: "900",
    margin: "0",
    color: "#fff",
    textShadow: "0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(255,255,255,0.3)",
    letterSpacing: "0.1em",
    position: "relative",
    animation: "glow 2s ease-in-out infinite alternate",
    "&::before": {
      content: "attr(data-text)",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      color: "#ff006e",
      mixBlendMode: "multiply",
      animation: "glitch 0.3s infinite",
      clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
    },
    "&::after": {
      content: "attr(data-text)",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      color: "#00f5ff",
      mixBlendMode: "multiply",
      animation: "glitch 0.3s infinite reverse",
      clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
    },
  },
  
  textWrapper: {
    marginBottom: "40px",
  },
  
  subtitle: {
    fontSize: "clamp(24px, 4vw, 32px)",
    fontWeight: "700",
    color: "#fff",
    margin: "0 0 15px 0",
    textShadow: "0 2px 10px rgba(0,0,0,0.3)",
    animation: "fadeInUp 1s ease-out 0.5s both",
  },
  
  text: {
    fontSize: "clamp(16px, 2.5vw, 20px)",
    color: "rgba(255,255,255,0.9)",
    margin: "0",
    lineHeight: "1.6",
    animation: "fadeInUp 1s ease-out 0.7s both",
  },
  
  buttonWrapper: {
    animation: "fadeInUp 1s ease-out 0.9s both",
  },
  
  link: {
    position: "relative",
    display: "inline-block",
    padding: "18px 36px",
    background: "linear-gradient(45deg, #ff6b6b, #ff8e8e)",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "50px",
    fontSize: "18px",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    transition: "all 0.3s ease",
    boxShadow: "0 8px 25px rgba(255,107,107,0.3), 0 0 0 1px rgba(255,255,255,0.1)",
    overflow: "hidden",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 12px 35px rgba(255,107,107,0.4), 0 0 0 1px rgba(255,255,255,0.2)",
    },
  },
  
  linkText: {
    position: "relative",
    zIndex: 2,
  },
  
  linkGlow: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "0",
    height: "0",
    background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    transition: "all 0.6s ease",
    "&:hover": {
      width: "300px",
      height: "300px",
    },
  },
};

// Add keyframes for animations (these would typically be in a CSS file)
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes twinkle {
    0%, 100% { opacity: 0; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1.2); }
  }
  
  @keyframes glow {
    0% { text-shadow: 0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(255,255,255,0.3); }
    100% { text-shadow: 0 0 40px rgba(255,255,255,0.8), 0 0 80px rgba(255,255,255,0.5); }
  }
  
  @keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
    100% { transform: translate(0); }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

  )
}

export default NotFound
