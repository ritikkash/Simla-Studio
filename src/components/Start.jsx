import React from 'react';

const Start = () => {
  // Inline styles
  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      minWidth: '960px'
    },
    backgroundImage: {
      position: 'absolute',
      inset: 0,
      backgroundImage: "url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      mixBlendMode: 'overlay'
    },
    gradientOverlay: {
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0) 60%)'
    },
    contentWrapper: {
      position: 'relative',
      width: '60%',
      height: '100%',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 2
    },
    headerText: {
      fontSize: '0.875rem',
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: '#FFFFFF',
      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
      marginBottom: 0 // Ensure no space below
    },
    mainContent: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      paddingBottom: '4rem'
    },
    contentContainer: {
      width: '75%'
    },
    headline: {
      fontWeight: 700,
      fontSize: '5.5rem',
      marginTop: 0, // Ensure no space above
      marginBottom: '1.5rem',
      lineHeight: 1.1,
      color: '#FFFFFF',
      textShadow: '0 4px 8px rgba(0,0,0,0.5)'
    },
    subheadline: {
      fontSize: '1.125rem',
      color: '#FFFFFF',
      marginBottom: '2.5rem',
      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
      fontWeight: 400,
      lineHeight: 1.6
    },
    button: {
      backgroundColor: 'white',
      color: 'black',
      padding: '0.85rem 2rem',
      borderRadius: '9999px',
      fontSize: '1rem',
      fontWeight: 500,
      border: '1px solid white',
      cursor: 'pointer',
      transition: 'all 0.3s',
      boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
      transform: 'translateY(0)',
      outline: 'none'
    }
  };

  return (
    <div id="webcrumbs">
      <div style={styles.container}>
        {/* Background image */}
        <div style={styles.backgroundImage}></div>
        
        {/* Bottom gradient overlay */}
        <div style={styles.gradientOverlay}></div>
        
        <div style={styles.contentWrapper}>
          <div style={styles.mainContent}>
            <div style={styles.contentContainer}>
              {/* Moved the header text directly above the headline with no space */}
              <div style={styles.headerText}>
                Welcome to Gashwa Studios
              </div>
              <h1 style={styles.headline}>
                Create <br />
                Stunning <br />
                Videos
              </h1>
              <p style={styles.subheadline}>
                Transform your Film and Video into <br />
                captivating content.
              </p>

              <button 
                style={styles.button}
                onMouseOver={(e) => {
                  Object.assign(e.target.style, {
                    backgroundColor: 'black',
                    color: 'white',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    transform: 'translateY(-2px)'
                  });
                }}
                onMouseOut={(e) => {
                  Object.assign(e.target.style, {
                    backgroundColor: 'white',
                    color: 'black',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                    transform: 'translateY(0)'
                  });
                }}
                onMouseDown={(e) => {
                  Object.assign(e.target.style, {
                    transform: 'translateY(0)',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                  });
                }}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;