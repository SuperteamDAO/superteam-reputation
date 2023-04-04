const ClaimXP = function ClaimXP() {
  return (
    <>
      <iframe
        title="Claim XP Form"
        className="airtable-embed"
        src="https://airtable.com/embed/shrxXBIaztqhDCG79?backgroundColor=gray"
        frameBorder="0"
        style={{
          background: 'transparent',
          border: 'none',
          width: '100vw',
          height: '100vh',
          overflow: 'auto',
          display: 'fixed',
          top: 0,
          left: 0,
        }}
      />
      <style>
        {`
          #__next {
            overflow: hidden;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </>
  );
};

export default ClaimXP;
