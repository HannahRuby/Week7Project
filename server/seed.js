insert;
users(username, email, full_name, job_title, company, industry, location, bio);
values(
  "johndoe",
  "johndoe@example.com",
  "John Doe",
  "Software Engineer",
  "Tech Solutions Inc.",
  "Information Technology",
  "San Francisco, CA, USA",
  "Passionate software engineer with 5 years of experience in web development"
),
  ("janedoe",
  "janedoe@example.com",
  "Jane Doe",
  "Marketing Manager",
  "Marketing Solutions Ltd.",
  "Marketing and Advertising",
  "New York City, NY, USA",
  "Experienced marketing professional with a passion for digital marketing strategies"),
  ("smithjj",
  "smith@example.com",
  "Jessica Smith",
  "Project Manager",
  "Global Consulting Group",
  "Management Consulting",
  "London, UK",
  "Seasoned project manager with a track record of delivering successful projects on time and within budget"),
  ("mikebrown",
  "mike.brown@example.com",
  "Mike Brown",
  "Financial Analyst",
  "Finance Plus LLC",
  "Finance and Accounting",
  "Toronto, ON, Canada",
  "Detail-oriented financial analyst with expertise in financial modeling and data analysis"),
  ("sarahsmith",
  "s.smith@example.com",
  "Sarah Smith",
  "Graphic Designer",
  "Creative Designs Agency",
  "Design and Creative",
  "Sydney, NSW, Australia",
  "Creative graphic designer with a passion for visual storytelling and branding");
// INSERT INTO
const insert = `INSERT INTO posts (content,full_name) VALUES (?, ?)`;
insert;
posts(content, full_name);
VALUES(
  "Excited to announce the release of our latest software update! 🚀 Our team has been hard at work refining the user interface and implementing new features to enhance the overall user experience. Check it out and let us know your thoughts!",
  "John Doe"
);

insert;
posts(content, full_name);
VALUES(
  "Just launched a successful marketing campaign targeting millennials! 🎯 Our team utilized a combination of social media ads influencer partnerships, and email marketing to drive engagement and conversions. Looking forward to sharing the results soon!",
  "Jane Doe"
);

insert;
posts(content, full_name);
VALUES(
  "Analyzing the latest market trends and economic indicators to inform investment strategies. 💼 Exciting times ahead as we navigate through volatility and identify opportunities for growth. Stay tuned for insights and recommendations!",
  "Jessica Smith"
);

insert;
posts(content, full_name);
VALUES(
  "Proud to showcase our latest design project: a sleek and modern website redesign for a leading e-commerce brand. 🎨 From concept to execution, our team prioritized user experience and visual appeal. Check out the before and after!",
  "Mike Brown"
);

insert;
posts(content, full_name);
VALUES(
  "Just wrapped up a successful client engagement focused on organizational restructuring and process optimization. 💡 Thrilled to see the positive impact on efficiency and productivity. Ready to tackle the next challenge and drive meaningful change",
  "Sarah Smith"
);

insert;
location(location);
VALUES("San Francisco, CA, USA");
insert;
location(location);
VALUES("New York City, NY, USA");
insert;
location(location);
VALUES("London, UK");
insert;
location(location);
VALUES("Toronto, ON, Canada");
insert;
location(location);
VALUES("Sydney, NSW, Australia");

// CREATE TABLE IF NOT EXISTS posts_junction (
//   post_id INTEGER REFERENCES posts(post_id),
//   user_id INTEGER REFERENCES users(id),
//   comments_id INTEGER REFERENCES comments(id),
//   PRIMARY KEY (post_id, user_id,comments_id),
// );

// select users

// SELECT
//     users.id,
//     users.full_name,
//     users.job_title,
//     users.industry,
//     users.bio
// FROM
//     users
// JOIN
//     posts_junction ON posts_junction.user_id = users.id
// JOIN
//     posts ON posts_junction.post_id = posts.post_id;

//    select Posts:

//     SELECT
//     users.id,
//     users.full_name,
//     users.industry,
//     posts.post
// FROM
//     users
// JOIN
//     posts_junction ON posts_junction.user_id = users.id
// JOIN
//     posts ON posts_junction.post_id = posts.post_id
