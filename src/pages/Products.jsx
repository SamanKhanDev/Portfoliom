import React from "react";

const UpworkProfiles = () => {
  const upworkLinks = [
    { url: "https://www.upwork.com/profile1", image: "https://static.rfstat.com/bloggers_folders/89d5d17b-0687-4081-b07c-84b90dedc0fb.jpg" },
    { url: "https://www.upwork.com/profile2", image: "https://www.upwork.com/static/img/logos/upwork-logo.svg" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
      {upworkLinks.map((profile, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            width: "250px",
            borderRadius: "10px",
            textAlign: "center",
            transition: "transform 0.3s, box-shadow 0.3s",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0px 8px 12px rgba(0, 0, 0, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
          }}
        >
         <div className="flex justify-items-center items-center">
         <div><img src={profile.image} alt={`Upwork Profile ${index + 1}`} style={{ width: "100px", borderRadius: "50%" }} /></div>
         <div> <h3 style={{ margin: "10px 0" }}>Upwork Profile</h3>
          <a
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0073b1", textDecoration: "none", fontWeight: "bold" }}
          >
            View Profile
          </a></div>
         </div>
        </div>
      ))}
    </div>
  );
};

export default UpworkProfiles;
