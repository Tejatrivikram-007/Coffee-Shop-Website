**Brew Haven - Coffee Shop Website**

Overview
Brew Haven is a responsive, modern website for an artisanal coffee shop featuring handcrafted pastries. This project showcases a clean design with smooth animations, interactive elements, and a fully responsive layout that works across all device sizes.

Features
Responsive Design: Adapts to mobile, tablet, and desktop screens

Loading Animation: Coffee cup animation during page load

Interactive Menu: Tabbed interface for different menu categories

Image Gallery: Lightbox-enabled photo gallery

Customer Testimonials: Auto-rotating testimonials with pause on hover

Contact Form: With validation and success message

Smooth Scrolling: For navigation between sections

Mobile-Friendly Navigation: Hamburger menu for smaller screens

Scroll Animations: Elements fade in as you scroll down the page

Sticky Header: That hides/shows based on scroll direction

Technologies Used
HTML5

CSS3 (with CSS Variables for theming)

JavaScript (ES6)

Font Awesome Icons

Google Fonts (Montserrat and Playfair Display)


File Structure
file
/
├── test.html          # Main HTML file
├── test.css           # All CSS styles
├── test.js            # All JavaScript functionality
└── README.md          # This documentation file
Customization
To customize the website, you can modify the following CSS variables in the :root selector at the top of the CSS file:

css
:root {
  --primary-color: #6F4E37;       /* Main brand color */
  --secondary-color: #C4A484;     /* Secondary color */
  --accent-color: #E5B25D;        /* Accent color */
  --light-color: #F5F5F5;         /* Light background color */
  --dark-color: #333333;          /* Dark text/background color */
  --text-color: #2D2D2D;          /* Main text color */
  --light-text: #FFFFFF;          /* Light text color */
  --border-color: #DDDDDD;        /* Border color */
  
  --body-font: 'Montserrat', sans-serif;
  --heading-font: 'Playfair Display', serif;
}
